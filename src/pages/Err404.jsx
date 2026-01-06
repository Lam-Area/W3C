import { Link } from 'react-router-dom';
import { MoveLeft } from 'lucide-react';
import img404 from '../img/404.png'; 

const Err404 = () => {
  return (
    <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] py-12">
      
      {/* CNTNR */}
      <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 shadow-2xl group">
        
        {/* FOND */}
        <div className="absolute inset-0">
          <img 
            src={img404} 
            alt="Page introuvable" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm"></div>

        {/* div du 404 */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center p-12 md:p-16">
          
          <div className="relative mb-8">
            <h1 className="text-[8rem] md:text-[12rem] leading-none font-black text-slate-400/50 select-none tracking-tighter">
              404
            </h1>
          </div>

          <p className="text-slate-400 text-lg max-w-md mx-auto leading-relaxed mb-8">
            Serais-tu un starter?
          </p>

          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-indigo-50 hover:scale-105 transition-all shadow-lg group/btn"
          >
            <MoveLeft size={18} className="group-hover/btn:-translate-x-1 transition-transform" /> Retour au Labo
          </Link>

        </div>
      </div>

    </div>
  );
};

export default Err404;