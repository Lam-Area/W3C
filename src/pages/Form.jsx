import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, User, Mail, MessageSquare } from 'lucide-react';

import imgForm from '../img/form.png';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  //rgx
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const nameRegex = /^[a-zA-ZÀ-ÿ\s-]{2,50}$/; 

  //logique de validation
  const validateField = (name, value) => {
    let errorMsg = '';
    switch (name) {
      case 'email':
        if (!value) errorMsg = "L'email est requis.";
        else if (!emailRegex.test(value)) errorMsg = "Format d'email invalide.";
        break;
      case 'name':
        if (!value) errorMsg = "Le nom est requis.";
        else if (!nameRegex.test(value)) errorMsg = "Le nom doit contenir au moins 2 lettres.";
        break;
      case 'message':
        if (!value) errorMsg = "Le message est requis.";
        else if (value.length < 10) errorMsg = "Le message est trop court (min. 10 caractères).";
        break;
      default: break;
    }
    return errorMsg;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-24 min-h-[calc(100vh-100px)] flex items-center justify-center">
      
      <div className="relative w-full max-w-5xl group">
        
        {/* AURA */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-300/30 via-white/20 to-purple-300/30 rounded-[2rem] blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-500"></div>
        
        {/* CARTE */}
        <div className="relative w-full bg-slate-900 border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row backdrop-blur-xl">
          
          {/* GAUCHE */}
          <div className="relative w-full md:w-5/12 h-64 md:h-auto overflow-hidden">
            
            <img 
              src={imgForm} 
              alt="Espace de travail moderne" 
              className="w-full h-full object-cover object-center"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-8 left-8 z-20 pointer-events-none">
              <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">Rejoignez l'élite</h3>
              <p className="text-slate-300 text-sm max-w-xs drop-shadow-md">
                Contribuez à la plus grande base de données Pokémon jamais créée.
              </p>
            </div>
          </div>

          {/* DROITE */}
          <div className="w-full md:w-7/12 p-8 md:p-12 relative bg-slate-900/50">
            
            <div className="mb-8">
              <span className="text-indigo-400 font-bold tracking-widest text-xs uppercase mb-2 block border-b border-indigo-500/30 w-fit pb-1">
                Candidature Spontanée
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mt-4">Parlons de vous.</h1>
            </div>

            {status === 'success' ? (
              <div className="h-64 flex flex-col items-center justify-center text-center animate-fadeIn">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message envoyé !</h3>
                <p className="text-slate-400">Le Professeur Chen étudiera votre dossier sous peu.</p>
                <button onClick={() => setStatus('idle')} className="mt-8 text-sm font-bold text-indigo-400 hover:text-white transition-colors uppercase tracking-wider">
                  Envoyer une autre candidature
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                
                {/* NOM COMPLET */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-slate-400 ml-1 uppercase tracking-wide flex items-center gap-2">
                    <User size={14} className="text-indigo-400" /> Nom complet
                  </label>
                  <div className="relative">
                    <input 
                      id="name"
                      name="name"
                      type="text" 
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full bg-slate-950/50 border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-indigo-500'} rounded-xl px-5 py-3 text-white focus:ring-1 focus:border-transparent outline-none transition-all placeholder:text-slate-600`}
                      placeholder="Sacha du Bourg-Palette"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && <AlertCircle className="absolute right-4 top-3.5 text-red-500 w-5 h-5 animate-pulse" />}
                  </div>
                  {errors.name && (
                    <p id="name-error" role="alert" className="text-red-400 text-xs ml-1 flex items-center gap-1">
                      {errors.name}
                    </p>
                  )}
                </div>
                
                {/* EMAIL */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-slate-400 ml-1 uppercase tracking-wide flex items-center gap-2">
                    <Mail size={14} className="text-indigo-400" /> Adresse Email
                  </label>
                  <div className="relative">
                    <input 
                      id="email"
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full bg-slate-950/50 border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-indigo-500'} rounded-xl px-5 py-3 text-white focus:ring-1 focus:border-transparent outline-none transition-all placeholder:text-slate-600`}
                      placeholder="sacha@ligue-kanto.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && <AlertCircle className="absolute right-4 top-3.5 text-red-500 w-5 h-5 animate-pulse" />}
                  </div>
                  {errors.email && (
                    <p id="email-error" role="alert" className="text-red-400 text-xs ml-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* MESSAGE */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-slate-400 ml-1 uppercase tracking-wide flex items-center gap-2">
                    <MessageSquare size={14} className="text-indigo-400" /> Lettre de motivation
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-slate-950/50 border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-indigo-500'} rounded-xl px-5 py-3 text-white focus:ring-1 focus:border-transparent outline-none transition-all resize-none placeholder:text-slate-600`}
                    placeholder="Expliquez pourquoi vous êtes le meilleur candidat..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  ></textarea>
                  {errors.message && (
                    <p id="message-error" role="alert" className="text-red-400 text-xs ml-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* ENVOI */}
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full mt-2 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transform hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group/btn"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Traitement...
                    </>
                  ) : (
                    <>Envoyer ma candidature <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" /></>
                  )}
                </button>

              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;