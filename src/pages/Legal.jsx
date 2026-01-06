import { Shield, Server, FileText, Lock } from 'lucide-react';
import legal from '../img/legal.png'; // <-- Import de l'image (adapte le chemin si besoin)

const Legal = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-black text-white mb-4 tracking-tight">Mentions Légales</h1>
        <p className="text-slate-400">Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique.</p>
      </div>

      <div className="space-y-8">

        {/* ÉDITEUR */}
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-8 shadow-xl relative overflow-hidden">
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-indigo-500 w-6 h-6" />
              <h2 className="text-2xl font-bold text-white">1. Édition du site</h2>
            </div>
            <div className="text-slate-300 space-y-2 leading-relaxed">
              <p>Le présent site, accessible à l'URL <span className="text-indigo-400">locale à la limite</span> (le « Site »), est édité par :</p>
              <ul className="list-disc list-inside pl-4 space-y-1 mt-4 text-slate-400">
                <li><strong>Propriétaire :</strong> []</li>
                <li><strong>Statut :</strong> []</li>
                <li><strong>Adresse :</strong> []</li>
                <li><strong>SIRET :</strong> []</li>
                <li><strong>Email :</strong> []</li>
              </ul>
            </div>
          </div>

          <img 
            src={legal} 
            alt="" 
            className="absolute -bottom-6 -right-6 w-40 h-40 object-contain opacity-20 z-0 transform rotate-12 pointer-events-none" 
          />
        </div>

        {/* HÉBERGEMENT */}
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <Server className="text-indigo-500 w-6 h-6" />
            <h2 className="text-2xl font-bold text-white">2. Hébergement</h2>
          </div>
          <p className="text-slate-300 leading-relaxed">
            Le Site est hébergé par la société <strong>[]</strong>.<br />
            Adresse : []<br />
            Site web : []
          </p>
        </div>

        {/* INTELLECT */}
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="text-indigo-500 w-6 h-6" />
            <h2 className="text-2xl font-bold text-white">3. Propriété Intellectuelle</h2>
          </div>
          <p className="text-slate-300 leading-relaxed mb-4">
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
          </p>
          <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-lg">
            <p className="text-indigo-300 text-sm">
              <strong>Note :</strong> Ce site est un projet à but non lucratif. Les images et noms de Pokémon sont la propriété exclusive de <strong>Nintendo, The Pokémon Company et Game Freak</strong>. Ils sont utilisés ici uniquement à titre d'illustration.
            </p>
          </div>
        </div>

        {/* DONNÉES */}
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="text-indigo-500 w-6 h-6" />
            <h2 className="text-2xl font-bold text-white">4. Données Personnelles</h2>
          </div>
          <p className="text-slate-300 leading-relaxed">
            le formulaire de contact (Nom, Email) est purement décoratif.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Legal;