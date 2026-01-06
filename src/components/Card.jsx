import { Search } from 'lucide-react';

// Import icônes
import iconFeu from '../img/feu.png';
import iconEau from '../img/eau.png';
import iconPlante from '../img/plante.png';

const Card = ({ data, onClick }) => {
  
  // déterminer couleur aura
  const getTypeColor = (type) => {
    if (type.includes("Plante")) return "bg-green-500";
    if (type.includes("Feu")) return "bg-orange-500";
    if (type.includes("Eau")) return "bg-blue-500";
    return "bg-indigo-500";
  };

  // Frécupérer la bonne image d'icône
  const getTypeIcon = (type) => {
    if (type.includes("Plante")) return iconPlante;
    if (type.includes("Feu")) return iconFeu;
    if (type.includes("Eau")) return iconEau;
    return null;
  };

  const auraColor = getTypeColor(data.type);
  const typeIcon = getTypeIcon(data.type);

  return (

    <div 
      onClick={onClick}
      className="h-full bg-slate-900/60 border border-white/5 rounded-2xl overflow-hidden hover:border-indigo-500/40 transition-all duration-300 group flex relative hover:shadow-2xl hover:shadow-black/50 cursor-pointer"
    >
      
      {/* GAUCHE */}
      <div className="flex-1 p-5 flex flex-col justify-between relative z-10">
        <div>
          <div className="flex items-center justify-between mb-1">
             <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">
              #{data.id}
            </span>
            
            {/* ICÔNE TYPE */}
            {typeIcon && (
              <img 
                src={typeIcon} 
                alt="Type" 
                className="w-5 h-5 object-contain opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" 
              />
            )}
          </div>
         
          <h3 className="text-lg font-black text-white leading-none mb-3 tracking-tight">
            {data.name}
          </h3>

          <div className="inline-flex flex-col">
            <span className="text-[9px] text-slate-500 uppercase font-bold tracking-wider mb-0.5">Nature</span>
            <span className="text-sm text-slate-300 font-medium">{data.nature}</span>
          </div>
        </div>

        {/* INSPECTER */}
        <button 
          className="mt-2 h-8 w-fit px-4 flex items-center justify-center bg-transparent border border-white/10 text-slate-300 text-[10px] font-black uppercase tracking-wider rounded hover:bg-white hover:text-slate-950 hover:border-white transition-all group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
        >
           <Search className="w-3 h-3 mr-1.5" /> INSPECTER
        </button>
      </div>

      {/* DROITE */}
      <div className="w-[45%] bg-slate-950/30 border-l border-white/5 relative flex items-center justify-center overflow-hidden">
        
        {/* AURA */}
        <div className={`absolute w-24 h-24 rounded-full ${auraColor} opacity-20 blur-2xl group-hover:opacity-40 group-hover:scale-125 transition-all duration-500`} />
        
        {/* IMAGE */}
        <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={data.img} 
              alt={data.name} 
              className="w-[85%] h-[85%] object-contain z-10 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
            />
        </div>
      </div>

    </div>
  );
};

export default Card;