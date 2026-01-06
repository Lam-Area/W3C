import { X, Activity, Zap, Ruler } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const PokemonModal = ({ data, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    //Délai fermeture
    setTimeout(() => {
      onClose();
    }, 200);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleEsc);

 
    //calcule largeur scrollbar navigateur
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    //padding-right au body pour combler le vide
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    
    //bloquer le scroll
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px'; //retire padding en sortie widget
    };
  }, []);

  if (!data) return null;

  const getTypeColor = (type) => {
    if (type.includes("Plante")) return "bg-green-500";
    if (type.includes("Feu")) return "bg-orange-500";
    if (type.includes("Eau")) return "bg-blue-500";
    return "bg-indigo-500";
  };
  
  const getTextColor = (type) => {
    if (type.includes("Plante")) return "text-green-400";
    if (type.includes("Feu")) return "text-orange-400";
    if (type.includes("Eau")) return "text-blue-400";
    return "text-indigo-400";
  };

  const auraColor = getTypeColor(data.type);
  const textColor = getTextColor(data.type);

  const getStatColor = (value) => {
    if (value < 45) return "bg-red-500";
    if (value < 60) return "bg-yellow-500";
    return "bg-green-500";
  };

  const modalContent = (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}
      onClick={handleClose}
    >
      <style>{`
        /* ENTRÉE */
        @keyframes modalEnter {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* SORTIE */
        @keyframes modalExit {
          from { opacity: 1; transform: scale(1) translateY(0); }
          to { opacity: 0; transform: scale(0.95) translateY(10px); }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }

        /* UTILITAIRES */
        .animate-modal-enter { animation: modalEnter 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }

        /* TIMINGS DE SORTIE */
        .animate-modal-exit { animation: modalExit 0.2s ease-in forwards; }
        .animate-fade-out { animation: fadeOut 0.2s ease-in forwards; }
      `}</style>

      <div 
        className={`relative w-full max-w-4xl bg-slate-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row ${isClosing ? 'animate-modal-exit' : 'animate-modal-enter'}`}
        onClick={(e) => e.stopPropagation()} 
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/20 hover:bg-white/10 text-slate-400 hover:text-white transition-all backdrop-blur-md border border-white/5"
          aria-label="Fermer la fenêtre"
        >
          <X size={24} />
        </button>

        {/* GAUCHE */}
        <div className="w-full md:w-5/12 bg-gradient-to-br from-slate-800 to-slate-900 relative flex items-center justify-center p-8 overflow-hidden group/visual">
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full ${auraColor} opacity-0 group-hover/visual:opacity-40 blur-[80px] transition-opacity duration-700 ease-out`}></div>
            <img 
              src={data.img} 
              alt={data.name} 
              className="w-full h-auto max-h-64 object-contain relative z-10 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute bottom-6 left-0 w-full text-center z-20">
                <span className="px-4 py-1.5 rounded-full border border-white/10 bg-slate-900/50 text-xs font-bold uppercase tracking-widest text-slate-200 backdrop-blur-md shadow-lg">
                    #{data.id} • <span className={textColor}>Niv. 5</span> • {data.nature}
                </span>
            </div>
        </div>

        {/* DROITE */}
        <div className="w-full md:w-7/12 p-8 md:p-10 bg-slate-900/95 relative">
            <div className="mb-8">
                <h2 id="modal-title" className="text-4xl font-black text-white uppercase italic tracking-tighter mb-2">
                    {data.name}
                </h2>
                <div className="flex items-center gap-3 mb-4">
                     <span className={`text-[10px] font-bold text-white px-3 py-1 rounded shadow-lg shadow-black/50 uppercase tracking-wider ${auraColor}`}>
                        {data.type}
                     </span>
                     <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                        <Ruler size={12}/> Starter
                     </span>
                </div>
                <p className={`text-slate-400 text-sm leading-relaxed border-l-2 pl-4 italic ${textColor.replace('text-', 'border-')}`}>
                    {data.description || "Analyse en cours..."}
                </p>
            </div>

            <div className="space-y-4 mb-8">
                <h3 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2 mb-4 opacity-50">
                    <Activity size={14}/> Statistiques de base
                </h3>
                
                <div className="flex items-center gap-4 text-xs group/stat">
                    <span className="w-8 text-slate-500 font-bold group-hover/stat:text-white transition-colors">PV</span>
                    <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div style={{width: `${(data.stats?.hp / 150) * 100}%`}} className={`h-full rounded-full ${getStatColor(data.stats?.hp)} shadow-[0_0_10px_currentColor]`}></div>
                    </div>
                    <span className="w-8 text-right text-white font-bold">{data.stats?.hp}</span>
                </div>

                <div className="flex items-center gap-4 text-xs group/stat">
                    <span className="w-8 text-slate-500 font-bold group-hover/stat:text-white transition-colors">ATK</span>
                    <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div style={{width: `${(data.stats?.atk / 150) * 100}%`}} className={`h-full rounded-full ${getStatColor(data.stats?.atk)} shadow-[0_0_10px_currentColor]`}></div>
                    </div>
                    <span className="w-8 text-right text-white font-bold">{data.stats?.atk}</span>
                </div>

                <div className="flex items-center gap-4 text-xs group/stat">
                    <span className="w-8 text-slate-500 font-bold group-hover/stat:text-white transition-colors">DEF</span>
                    <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div style={{width: `${(data.stats?.def / 150) * 100}%`}} className={`h-full rounded-full ${getStatColor(data.stats?.def)} shadow-[0_0_10px_currentColor]`}></div>
                    </div>
                    <span className="w-8 text-right text-white font-bold">{data.stats?.def}</span>
                </div>
            </div>

            <div>
                 <h3 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2 mb-3 opacity-50">
                    <Zap size={14}/> Capacités connues
                </h3>
                <div className="flex flex-wrap gap-2">
                    {data.moves ? data.moves.map((move, i) => (
                        <span key={i} className="px-3 py-1.5 bg-slate-800 text-slate-300 text-xs font-bold rounded hover:bg-white hover:text-slate-900 transition-all cursor-default border border-white/5 hover:scale-105">
                            {move}
                        </span>
                    )) : <span className="text-slate-500 text-xs">Aucune donnée</span>}
                </div>
            </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default PokemonModal;