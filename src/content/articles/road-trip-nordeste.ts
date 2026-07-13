import type { Article } from "../types";
import hero from "@/assets/article-road-trip-nordeste.jpg";

export const article: Article = {
  slug: "road-trip-nordeste",
  title: "Road trip dans le Nordeste : l'itinéraire complet",
  titleAccent: "Nordeste",
  description: "Salvador, Mangue Seco, Aracaju, Xingó, Porto de Galinhas, Recife : notre itinéraire complet pour un road trip privé de 7 à 10 jours dans le Nordeste.",
  category: "itineraires",
  tags: ["Nordeste", "road trip", "itinéraire", "Brésil"],
  date: "2026-07-11",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Route de terre bordée de palmiers longeant l'océan dans le Nordeste brésilien",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Road trip Nordeste sur mesure",
      href: "https://www.jeitinho.fr/experiences",
      description: "Un voyage privé entièrement personnalisé, transport, hébergements et itinéraire inclus.",
    },
  ],
  sections: [
    { type: "p", text: "Le Brésil authentique, au rythme de vos envies. Découvrez le Nordeste à travers un voyage privé conçu exclusivement pour votre groupe, entre villes historiques, plages paradisiaques, canyons impressionnants et villages préservés." },
    { type: "p", text: "Ce guide n'est pas un simple itinéraire figé. C'est ce qu'on dirait à un ami qui prépare son voyage : quelles étapes prévoir, dans quel ordre, et ce qu'il ne faut surtout pas manquer." },

    { type: "h2", text: "Un voyage sur mesure" },
    { type: "p", text: "Chaque itinéraire est entièrement personnalisé selon votre budget, votre rythme et vos envies, pour un voyage de 7 à 10 jours en groupe privé de 2 à 16 voyageurs. Transport privé (SUV, van ou minibus selon la taille du groupe), hébergements sélectionnés (pousadas de charme, boutique hôtels ou établissements premium) et accompagnement Jeitinho du début à la fin composent l'expérience." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Prévoyez de partir en saison sèche, entre septembre et mars, pour profiter pleinement des plages et des activités en extérieur. L'itinéraire reste ajustable selon la météo et le rythme souhaité." },

    { type: "h2", text: "Les 8 destinations de l'itinéraire complet" },
    { type: "h3", text: "Salvador, Bahia" },
    { type: "p", text: "Le berceau de la culture afro-brésilienne. Culture, Pelourinho, églises baroques et gastronomie bahianaise composent cette première étape historique et vivante." },
    { type: "h3", text: "Mangue Seco, Bahia" },
    { type: "p", text: "Village reculé, dunes blanches, plages sauvages et ambiance authentique, accessible en bateau pour une immersion totale loin du tourisme de masse." },
    { type: "h3", text: "Aracaju, Sergipe" },
    { type: "p", text: "Capitale à taille humaine, entre mer et qualité de vie, avec une excellente infrastructure et une cuisine savoureuse." },
    { type: "h3", text: "São Cristóvão, Sergipe" },
    { type: "p", text: "Ville historique classée par l'UNESCO, avec ses musées et ses traditions vivantes dans un cadre colonial préservé." },
    { type: "h3", text: "Xingó, Sergipe" },
    { type: "p", text: "Les canyons majestueux du fleuve São Francisco, à découvrir en catamaran ou bateau, avec des paysages à couper le souffle." },
    { type: "h3", text: "Japaratinga, Alagoas" },
    { type: "p", text: "Plages paradisiaques et eaux cristallines, avec piscines naturelles et baignade dans un cadre préservé." },
    { type: "h3", text: "Porto de Galinhas, Pernambuco" },
    { type: "p", text: "Piscines naturelles et village coloré, où l'on se baigne parmi les poissons dans une ambiance animée et festive." },
    { type: "h3", text: "Recife, Pernambuco" },
    { type: "p", text: "La Venise brésilienne, entre canaux, ponts et culture. Le point final de ce road trip qui clôture le voyage en beauté." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Les départs sont possibles toute l'année, mais la saison sèche (septembre à mars) reste idéale pour un maximum d'activités en extérieur. Le rythme et les activités sont modulables à 100% selon vos envies." },

    { type: "h2", text: "Ce qui est inclus" },
    { type: "ul", items: [
      "Véhicule privé avec chauffeur, adapté à la taille de votre groupe.",
      "Hébergements sélectionnés pour leur charme et leur qualité.",
      "Itinéraire entièrement personnalisé selon vos envies.",
      "Conseils et assistance Jeitinho avant et pendant le séjour.",
      "Flexibilité tout au long du voyage.",
    ]},
    { type: "aeviter", title: "À éviter", text: "N'improvisez pas un road trip dans le Nordeste sans organisation préalable : les distances entre certaines étapes sont importantes et l'offre de transport public reste limitée en dehors des grandes villes. Un véhicule privé ou un accompagnement local reste la solution la plus sûre et confortable." },

    { type: "h2", text: "Exemples d'expériences à vivre" },
    { type: "ul", items: [
      "Balade dans le Pelourinho, quartier historique de Salvador.",
      "Sortie en catamaran ou en bateau sur les canyons du Xingó.",
      "Visite de villes historiques classées UNESCO comme São Cristóvão.",
      "Baignade en piscines naturelles à Porto de Galinhas.",
      "Dégustation de spécialités locales tout au long du parcours.",
    ]},

    { type: "faq", items: [
      { q: "Combien de temps dure ce road trip dans le Nordeste ?", a: "L'itinéraire recommandé dure entre 7 et 10 jours, entièrement personnalisable selon vos envies et votre rythme." },
      { q: "Le road trip est-il adapté aux groupes ?", a: "Oui, il est conçu pour des groupes privés de 2 à 16 voyageurs, avec un véhicule adapté à la taille du groupe (SUV, van ou minibus)." },
      { q: "Comment est établie la tarification ?", a: "Entièrement sur devis, selon le nombre de voyageurs, la catégorie d'hébergement, le type de véhicule, la durée du séjour, les expériences choisies et la période du voyage." },
      { q: "Quelle est la meilleure saison pour ce road trip ?", a: "La saison sèche, de septembre à mars, est idéale pour profiter pleinement des plages, des canyons et des activités en extérieur." },
    ]},

    { type: "p", text: "Un road trip dans le Nordeste, c'est découvrir un Brésil hors des sentiers battus, entre culture afro-brésilienne, paysages spectaculaires et plages encore préservées. Un voyage entièrement pensé pour votre rythme, du début à la fin." },
  ],
};
