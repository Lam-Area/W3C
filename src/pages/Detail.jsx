import { useParams, Link, Navigate } from 'react-router-dom';
import { seoData } from '../data/seoData';
import { ArrowLeft } from 'lucide-react';

const Detail = () => {
  const { id } = useParams();
  const data = seoData.find(item => item.id === id);

  if (!data) return <Navigate to="/" replace />;

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" /> Retour au guide
      </Link>

      <article className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
        <header className="mb-8">
          <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
            {data.icon}
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">{data.title}</h1>
          <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-white/5">
            {data.category}
          </span>
        </header>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-xl text-indigo-200 leading-relaxed mb-6">
            {data.summary}
          </p>
          <hr className="border-white/10 my-8" />
          <p className="text-slate-300">
            {data.content}
          </p>
          <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg text-yellow-200 text-sm">
            <strong>Conseil Pro :</strong> Vérifiez toujours la compatibilité W3C après implémentation.
          </div>
        </div>
      </article>
    </div>
  );
};

export default Detail;