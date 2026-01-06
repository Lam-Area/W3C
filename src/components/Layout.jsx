import { Outlet, Link, NavLink } from 'react-router-dom';
import { Github, Twitter, Linkedin, Code } from 'lucide-react';

import logo from '../img/logo.png'; 
import wallpaper from '../img/wallpaper.jpg'; 

const Layout = () => {
  
  const activeLink = ({ isActive }) => 
    isActive 
      ? "text-white font-medium bg-white/10 px-4 py-2 rounded-lg transition-all shadow-[0_0_10px_rgba(255,255,255,0.1)]" 
      : "text-slate-400 hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg transition-all";

  return (
    <div className="min-h-screen font-sans selection:bg-indigo-500 selection:text-white flex flex-col text-slate-200">
      
      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0">
          <img 
            src={wallpaper} 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/90"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between relative">
          
          <Link to="/" className="flex items-center gap-3 group z-20 w-1/3">
            <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full group-hover:bg-indigo-500/40 transition-all duration-500"></div>
                <img src={logo} alt="Logo Chez Oak" className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-indigo-200 transition-colors">
              Chez <span className="text-indigo-500">Oak</span>
            </span>
          </Link>

          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
            <Link to="/" className="text-sm font-black tracking-[0.2em] text-indigo-200 uppercase opacity-90 hover:opacity-100 hover:text-white hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.5)] transition-all duration-300">
              Laboratoire de Kanto
            </Link>
          </div>

          <nav className="flex items-center justify-end gap-2 text-sm font-medium z-20 w-1/3">
            <NavLink to="/" className={activeLink} end>Accueil</NavLink>
            <NavLink to="/postuler" className={activeLink}>Recrutement</NavLink>
            <button className="md:hidden ml-2 p-2 text-slate-400 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </button>
          </nav>

        </div>
      </header>

      {/* MAIN */}
      <main className="relative z-10 flex-grow pt-8">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10 bg-slate-950/80 backdrop-blur-md pt-16 pb-8">
        <div className="container mx-auto px-4">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2 space-y-4">
              <div className="flex items-center gap-2 text-white font-bold text-xl">
                <div className="w-8 h-8 rounded bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                   <Code size={18} />
                </div>
                Chez Oak
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Centre de recherche officiel du Bourg Palette. Notre mission : recenser toutes les espèces de Pokémon de la région Kanto et développer le Pokédex v2.0.
              </p>
              <div className="flex gap-4 pt-2">
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-indigo-500 hover:text-white transition-all border border-white/5 hover:border-indigo-400"><Twitter size={16} /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-indigo-500 hover:text-white transition-all border border-white/5 hover:border-indigo-400"><Github size={16} /></a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Explorer</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/" className="hover:text-indigo-400 transition-colors">Accueil</Link></li>
                <li><Link to="/postuler" className="hover:text-indigo-400 transition-colors">Recrutement</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-4">Légal</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  {/*  Lien page */}
                  <Link to="/mentions-legales" className="hover:text-indigo-400 transition-colors">
                    Mentions légales
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>© 2025 Chez Oak. Tous droits réservés.</p>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Normes W3C respectées
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;