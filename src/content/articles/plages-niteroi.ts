import type { Article } from "../types";
import hero from "@/assets/article-plages-niteroi.jpg";

export const article: Article = {
  slug: "plages-niteroi",
  title: "Les plages de Niterói, l'autre rive de la baie de Guanabara",
  titleAccent: "l'autre rive",
  description: "Itaipu, Camboinhas, Itacoatiara, Piratininga : notre guide des plages de Niterói, entre mer, nature et tranquillité, à quelques minutes de Rio.",
  category: "excursions",
  tags: ["Niterói", "excursion", "plages", "Rio de Janeiro"],
  date: "2026-07-11",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Plage sauvage de Niterói au coucher du soleil avec vue sur la baie de Guanabara",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Transferts Jeitinho",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "Transferts privés sur mesure vers les plages et points d'intérêt de Niterói.",
    },
  ],
  sections: [
    { type: "p", text: "Face à Rio, Niterói est une pépite. Ses plages offrent une ambiance plus locale, des paysages incroyables et des couchers de soleil à couper le souffle, à peine vingt minutes de traversée depuis le centre de Rio." },
    { type: "p", text: "Ce guide n'est pas une simple liste de plages. C'est ce qu'on dirait à un ami qui débarque : laquelle choisir, comment y aller, et ce qu'il ne faut pas manquer autour." },

    { type: "h2", text: "Comprendre Niterói en quelques minutes" },
    { type: "p", text: "Séparée de Rio par la baie de Guanabara, Niterói se rejoint facilement en ferry depuis la Praça XV dans le centre historique de Rio, en environ 20 minutes de traversée, ou en voiture via le pont Rio-Niterói. La ville offre un mélange rare de plages océaniques, de nature préservée et de culture, avec en prime l'une des plus belles vues sur Rio depuis l'autre côté de la baie." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Niterói est parfait pour une journée détente loin de l'agitation. Combinez nature, plages et culture dans une ambiance 100% carioca de l'autre côté de la baie." },

    { type: "h2", text: "Les plages de Niterói" },
    { type: "h3", text: "Praia de Itaipu" },
    { type: "p", text: "La plus connue et la plus animée de Niterói. Parfaite pour les familles, la baignade tranquille et les bons kiosques en bord de plage." },
    { type: "h3", text: "Praia de Camboinhas" },
    { type: "p", text: "Petite crique charmante et préservée, eau calme et transparente, idéale pour se déconnecter en toute tranquillité." },
    { type: "h3", text: "Praia de Adão e Eva" },
    { type: "p", text: "Célèbre pour ses rochers emblématiques séparant les deux plages, avec une vue imprenable sur Rio. Ambiance touristique et locale, parfaite pour les photos, la balade et la baignade." },
    { type: "h3", text: "Praia de Piratininga" },
    { type: "p", text: "Grande plage sauvage et ventée, idéale pour les sports nautiques et les amateurs de nature." },
    { type: "h3", text: "Praia de Itacoatiara" },
    { type: "p", text: "Considérée comme l'une des plus belles plages de Rio de Janeiro. Vagues fortes et paysages spectaculaires, ambiance sportive et naturiste, particulièrement prisée des surfeurs." },
    { type: "aeviter", title: "À éviter", text: "Certaines plages de Niterói, notamment Itacoatiara et Piratininga, sont plus sauvages et moins surveillées que celles de la Zona Sul de Rio. Restez attentif à vos affaires et respectez les zones de baignade recommandées." },

    { type: "h2", text: "Les points d'intérêt à combiner" },
    { type: "h3", text: "Le Museu de Arte Contemporânea (MAC)" },
    { type: "p", text: "Icône architecturale de Niterói signée Oscar Niemeyer, avec une vue panoramique incroyable sur la baie de Guanabara." },
    { type: "h3", text: "Le Fort de Santa Cruz" },
    { type: "p", text: "Fort historique du XVIe siècle, avec un sentier et une vue magnifique sur l'entrée de la baie." },
    { type: "h3", text: "Le Parc de la Cidade" },
    { type: "p", text: "Le plus grand parc urbain d'Amérique latine, parfait pour une pause nature avec une belle vue sur la ville et la baie." },
    { type: "h3", text: "Le coucher de soleil à Boa Viagem" },
    { type: "p", text: "L'un des plus beaux couchers de soleil sur la baie, à ne surtout pas manquer en fin de journée." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Le charme de Santa Rosa, quartier bohème de Niterói avec bars, restaurants et ambiance locale, complète parfaitement une journée dédiée aux plages et à la culture." },

    { type: "h2", text: "Comment rejoindre Niterói" },
    { type: "p", text: "Voiture ou chauffeur privé restent les meilleures options pour un programme complet. Le ferry, au départ de la Praça XV dans le centre de Rio, est une traversée rapide d'environ 20 minutes, accessible également en complément d'un trajet en bus une fois arrivé à Niterói." },

    { type: "h2", text: "À ne pas manquer à Niterói" },
    { type: "ul", items: [
      "Surfer à Itacoatiara, avec des vagues puissantes et constantes, parfaites pour les surfeurs.",
      "Randonner au Costão de Itacoatiara pour une vue à couper le souffle sur la plage et la nature environnante.",
      "Se baigner à Camboinhas, dans des eaux calmes et cristallines, idéales pour nager et faire du snorkeling.",
      "Découvrir le charme de Santa Rosa, quartier bohème avec bars, restaurants et ambiance locale.",
      "Visiter le Forte Imbuí, fort historique avec une vue magnifique sur la baie et la ville.",
      "Faire du kayak à Piratininga, pour explorer la côte et les îlots environnants.",
    ]},

    { type: "faq", items: [
      { q: "Combien de temps prend la traversée en ferry vers Niterói ?", a: "Environ 20 minutes depuis la Praça XV dans le centre historique de Rio, un trajet rapide et agréable avec une belle vue sur la baie." },
      { q: "Niterói vaut-il une journée complète ?", a: "Oui, en combinant plage, MAC et un point de vue comme Boa Viagem, une journée complète permet de profiter pleinement de la ville sans être pressé." },
      { q: "Les plages de Niterói sont-elles adaptées aux familles ?", a: "Itaipu et Camboinhas sont les plus adaptées aux familles, avec une ambiance calme et une baignade tranquille, contrairement à Itacoatiara plus sportive." },
      { q: "Faut-il réserver un transfert pour Niterói ?", a: "Ce n'est pas obligatoire mais recommandé pour optimiser sa journée : voiture ou chauffeur privé permettent de combiner plusieurs plages et points d'intérêt sans dépendre des horaires de bus." },
    ]},

    { type: "p", text: "Niterói récompense ceux qui prennent le temps de traverser la baie. Entre plages sauvages, architecture de Niemeyer et couchers de soleil mémorables, c'est l'une des plus belles excursions à faire depuis Rio." },
  ],
};
