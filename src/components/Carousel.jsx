import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Card from './Card';
import PokemonModal from './PokemonModal';

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // gérer le Pokémon affiché dans modale
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const currentGen = data[currentIndex];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      
      {/* HEADER */}
      <div className="flex items-center justify-between mb-12 px-2">
        <div className="flex items-center gap-6">
          
          {/* IMG CARTE */}
          <div className="relative w-24 h-14 rounded-lg overflow-hidden border border-white/20 shadow-[0_0_15px_rgba(0,0,0,0.5)] group">
             <div className="absolute inset-0 bg-indigo-500/10 mix-blend-overlay z-10"></div>
             <img 
              src={currentGen.map} 
              alt={currentGen.region} 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
             />
          </div>

          {/* TITRES */}
          <div>
            <h2 className="text-4xl font-black text-white tracking-tight leading-none mb-1">
               {currentGen.name}
            </h2>
            <p className="text-indigo-400 text-sm uppercase tracking-[0.2em] font-bold">
              {currentGen.region}
            </p>
          </div>
        </div>
        
        {/* NAVIGATION */}
        <div className="flex gap-3 ">
           <button 
             onClick={prevSlide} 
             aria-label="Génération précédente"
             className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 hover:bg-indigo-600 text-slate-400 hover:text-white transition-all border border-white/10 hover:border-indigo-500/50 shadow-lg"
           >
             <ChevronLeft size={20} />
           </button>
           <button 
             onClick={nextSlide} 
             aria-label="Génération suivante"
             className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 hover:bg-indigo-600 text-slate-400 hover:text-white transition-all border border-white/10 hover:border-indigo-500/50 shadow-lg"
           >
             <ChevronRight size={20} />
           </button>
        </div>
      </div>

      {/* ZONE CARTES */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {data.map((generation) => (
            <div key={generation.id} className="w-full flex-shrink-0 px-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {generation.pokemons.map((pokemon) => (
                  <div key={pokemon.id} className="h-48 md:h-52">
                    {/* Le onClick ouvre la modale avec les données du Pokémon cliqué */}
                    <Card 
                      data={pokemon} 
                      onClick={() => setSelectedPokemon(pokemon)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center gap-2 mt-8">
        {data.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Aller à la génération ${index + 1}`}
            className={`h-1 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-indigo-500 w-12" : "bg-slate-800 w-4 hover:bg-slate-700"
            }`}
          />
        ))}
      </div>

      {/* WIDGET */}
      {selectedPokemon && (
        <PokemonModal 
          data={selectedPokemon} 
          onClose={() => setSelectedPokemon(null)} 
        />
      )}

    </div>
  );
};

export default Carousel;