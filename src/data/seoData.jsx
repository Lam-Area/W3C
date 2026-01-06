import { Gamepad2, Swords, Zap, Sparkles } from 'lucide-react';

// img pkmns
import p001 from '../img/001.png';
import p004 from '../img/004.png';
import p007 from '../img/007.png';
import p152 from '../img/152.png';
import p155 from '../img/155.png';
import p158 from '../img/158.png';
import p252 from '../img/252.png';
import p255 from '../img/255.png';
import p258 from '../img/258.png';
import p387 from '../img/387.png';
import p390 from '../img/390.png';
import p393 from '../img/393.png';

// img maps
import map1 from '../img/1g.png';
import map2 from '../img/2g.png';
import map3 from '../img/3g.png';
import map4 from '../img/4g.png';

export const seoData = [
  {
    id: "gen-1",
    name: "Gen 1",
    region: "Kanto",
    map: map1,
    color: "from-green-500 to-blue-500",
    pokemons: [
      { 
        id: "001", 
        name: "Bulbizarre", 
        type: "Plante / Poison", 
        img: p001, 
        nature: "Calme",
        description: "Il a une étrange graine plantée sur son dos. Elle grandit avec lui depuis la naissance.",
        stats: { hp: 45, atk: 49, def: 49, spd: 45 },
        moves: ["Fouet Lianes", "Vampigraine", "Charge"]
      },
      { 
        id: "004", 
        name: "Salamèche", 
        type: "Feu", 
        img: p004, 
        nature: "Rigide",
        description: "Il préfère les endroits chauds. En cas de pluie, de la vapeur se forme autour du bout de sa queue.",
        stats: { hp: 39, atk: 52, def: 43, spd: 65 },
        moves: ["Flammèche", "Griffe", "Brouillard"]
      },
      { 
        id: "007", 
        name: "Carapuce", 
        type: "Eau", 
        img: p007, 
        nature: "Modeste",
        description: "Après sa naissance, son dos gonfle et durcit pour former une carapace. Il crache une puissante écume.",
        stats: { hp: 44, atk: 48, def: 65, spd: 43 },
        moves: ["Pistolet à O", "Charge", "Repli"]
      }
    ]
  },
  {
    id: "gen-2",
    name: "Gen 2",
    region: "Johto",
    map: map2,
    color: "from-yellow-500 to-red-500",
    pokemons: [
      { 
        id: "152", 
        name: "Germignon", 
        type: "Plante", 
        img: p152, 
        nature: "Docile",
        description: "Une douce odeur émane de sa feuille. Il l'utilise pour tenir ses ennemis à distance.",
        stats: { hp: 45, atk: 49, def: 65, spd: 45 },
        moves: ["Tranch'Herbe", "Synthèse", "Charge"]
      },
      { 
        id: "155", 
        name: "Héricendre", 
        type: "Feu", 
        img: p155, 
        nature: "Timide",
        description: "Il est timide et se roule en boule pour se protéger. Il a le dos qui s'enflamme sous le coup de la colère.",
        stats: { hp: 39, atk: 52, def: 43, spd: 65 },
        moves: ["Roue de Feu", "Vive-Attaque", "Brouillard"]
      },
      { 
        id: "158", 
        name: "Kaiminus", 
        type: "Eau", 
        img: p158, 
        nature: "Jovial",
        description: "Ses mâchoires puissantes peuvent briser des rochers. Mieux vaut ne pas le quitter des yeux.",
        stats: { hp: 50, atk: 65, def: 64, spd: 43 },
        moves: ["Morsure", "Pistolet à O", "Grimace"]
      }
    ]
  },
  {
    id: "gen-3",
    name: "Gen 3",
    region: "Hoenn",
    map: map3,
    color: "from-red-500 to-blue-500",
    pokemons: [
      { 
        id: "252", 
        name: "Arcko", 
        type: "Plante", 
        img: p252, 
        nature: "Solo",
        description: "Arcko est doté de petits crochets sous les pattes, ce qui lui permet de grimper aux murs. Ce Pokémon attaque avec sa queue.",
        stats: { hp: 40, atk: 45, def: 35, spd: 70 },
        moves: ["Écras'Face", "Vole-Vie", "Vive-Attaque"]
      },
      { 
        id: "255", 
        name: "Poussifeu", 
        type: "Feu", 
        img: p255, 
        nature: "Brave",
        description: "Poussifeu a un endroit à l'intérieur de son corps où il garde sa flamme. S'il fait un câlin à quelqu'un, il sentira la chaleur.",
        stats: { hp: 45, atk: 60, def: 40, spd: 45 },
        moves: ["Griffe", "Flammèche", "Picpic"]
      },
      { 
        id: "258", 
        name: "Gobou", 
        type: "Eau", 
        img: p258, 
        nature: "Relax",
        description: "La nageoire sur la tête de Gobou lui sert de radar très sensible. Il peut déterminer ce qui se passe autour de lui sans ses yeux.",
        stats: { hp: 50, atk: 70, def: 50, spd: 40 },
        moves: ["Charge", "Pistolet à O", "Coud'Boue"]
      }
    ]
  },
  {
    id: "gen-4",
    name: "Gen 4",
    region: "Sinnoh",
    map: map4,
    color: "from-green-400 to-blue-400",
    pokemons: [
      { 
        id: "387", 
        name: "Tortipouss", 
        type: "Plante", 
        img: p387, 
        nature: "Prudent",
        description: "Sa carapace est faite de terre. Lorsqu'il est en bonne santé, elle est humide au toucher.",
        stats: { hp: 55, atk: 68, def: 64, spd: 31 },
        moves: ["Charge", "Repli", "Feuillage"]
      },
      { 
        id: "390", 
        name: "Ouisticram", 
        type: "Feu", 
        img: p390, 
        nature: "Naïf",
        description: "Il escalade les falaises escarpées avec agilité et vit sur les sommets rocheux. Sa flamme s'éteint quand il dort.",
        stats: { hp: 44, atk: 58, def: 44, spd: 61 },
        moves: ["Griffe", "Flammèche", "Provoc"]
      },
      { 
        id: "393", 
        name: "Tiplouf", 
        type: "Eau", 
        img: p393, 
        nature: "Sérieux",
        description: "Il est très fier et déteste accepter la nourriture qu'on lui offre. Son épais duvet le protège du froid.",
        stats: { hp: 53, atk: 51, def: 53, spd: 40 },
        moves: ["Écras'Face", "Bulles d'O", "Picpic"]
      }
    ]
  }
];