import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { seoData } from '../data/seoData';
import Carousel from '../components/Carousel';
import { ArrowRight, MessageSquareQuote, Sparkles } from 'lucide-react';

import videoOak from '../video/PresOak.mp4';
import imgOak from '../img/oak.png'; 
import imgMiniature from '../img/miniature.png';
import imgLabo from '../img/labo.png';

const Home = () => {
  //Titre animation TYPE
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ["Dresseur", "Chercheur"]; 

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); 
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <div className="space-y-24 pb-20">
      
      <section className="text-center max-w-5xl mx-auto mt-24 px-4">
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Deviens un <br className="md:hidden"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            {text}
          </span>
          <span className="border-r-4 border-indigo-400 ml-1 animate-pulse"></span>
          <br />
          Pokémon.
        </h1>
      </section>

      {/* 2. PRES OAK */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-slate-900/50 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
          
          <div className="relative h-64 md:h-96 w-full rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10 border border-white/10 bg-black group">
            <video 
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              controls
              poster={imgMiniature}
              playsInline
              crossOrigin="anonymous"
              aria-label="Message de bienvenue du Professeur Chen"
            >
              <source src={videoOak} type="video/mp4" />
              <track kind="captions" srcLang="fr" label="Français" src="/captions/chen-desc.vtt" default />
              Votre navigateur ne supporte pas la balise vidéo.
            </video>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center gap-5">
               <div className="relative">
                 <div className="w-20 h-20 rounded-full border-2 border-indigo-500 p-0.5 bg-slate-800 overflow-hidden shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                   <img src={imgOak} alt="Avatar Professeur Chen" className="w-full h-full object-cover object-top rounded-full" />
                 </div>
                 <div className="absolute -bottom-1 -right-1 bg-slate-900 rounded-full p-1 border border-white/10">
                    <Sparkles className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                 </div>
               </div>
               <div>
                   <h2 className="text-3xl font-bold text-white leading-tight">Professeur Chen</h2>
                   <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20">Chercheur Pokémon</span>
               </div>
            </div>

            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-2xl border border-white/10 shadow-lg">
               <MessageSquareQuote className="absolute top-6 right-6 text-indigo-500/10 w-16 h-16 transform -rotate-12" />
               <p className="text-slate-200 text-lg leading-relaxed italic font-medium relative z-10">
                 "Bonjour ! Ravi de te voir ici. Mes assistants et moi avons besoin de toi pour compiler des données sur les créatures qui peuplent notre monde.
                 <br/><br/>
                 Je t'invite à consulter <span className="text-indigo-400 font-bold border-b border-indigo-500/30">les différents starters ci-dessous</span>."
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAROUSEL */}
      <section className="container mx-auto px-4 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="text-center mb-8 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-2">Nos différents starters</h2>
          <p className="text-slate-400">Sélectionnez les starters en fonction de leur génération</p>
        </div>
        
        <Carousel data={seoData} />
      </section>

      {/* POSTULER */}
      <section className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-slate-900/80 shadow-2xl">
           <div className="grid grid-cols-1 md:grid-cols-2">
             <div className="p-8 md:p-16 flex flex-col justify-center space-y-8 relative z-10">
               <div>
                  <span className="inline-block px-3 py-1 mb-4 text-[10px] font-black tracking-widest text-green-400 uppercase bg-green-500/10 rounded border border-green-500/20">
                    Recrutement Ouvert
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    Le Labo <br/> <span className="text-slate-500">recrute.</span>
                  </h2>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    Tu as l'âme d'un dresseur et la rigueur d'un développeur ? Rejoins l'équipe technique pour améliorer le Pokédex v2.0.
                  </p>
               </div>
               <Link 
                 to="/postuler" 
                 className="inline-flex w-fit items-center px-8 py-4 bg-white text-slate-950 font-black rounded-xl hover:bg-indigo-50 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] group"
               >
                 Rejoindre le Labo 
                 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </Link>
             </div>

             <div className="relative h-64 md:h-auto overflow-hidden border-t md:border-t-0 md:border-l border-white/10">
                <div className="absolute inset-0 bg-indigo-900/20 mix-blend-overlay z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-80"></div>
                <img 
                  src={imgLabo} 
                  alt="Laboratoire de recherche Pokémon du Professeur Chen" 
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />
             </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Home;