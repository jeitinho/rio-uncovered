import type { Article } from "../types";
import hero from "@/assets/article-randonnee-dois-irmaos.jpg";

export const article: Article = {
  slug: "randonnee-dois-irmaos",
  title: "Randonnée aux Dois Irmãos : la vue la plus spectaculaire sur Ipanema",
  titleAccent: "Dois Irmãos",
  description: "Sentier, niveau, accès par Vidigal : notre guide complet pour randonner jusqu'au sommet des Dois Irmãos et admirer la plus belle vue sur Ipanema et Leblon.",
  category: "randonnees",
  tags: ["randonnée", "Dois Irmãos", "Vidigal", "Rio de Janeiro"],
  date: "2026-07-14",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Vue depuis le sommet des Dois Irmãos sur les plages d'Ipanema et Leblon, Rio de Janeiro",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Randonnées Jeitinho",
      href: "https://www.jeitinho.fr/experiences",
      description: "Dois Irmãos, forêt de Tijuca et sommets panoramiques avec un guide local.",
    },
  ],
  sections: [
    { type: "p", text: "Si un seul point de vue devait résumer la beauté de la Zona Sul, ce serait probablement celui-ci : depuis le sommet des Dois Irmãos, Ipanema, Leblon et la lagune Rodrigo de Freitas se déploient d'un seul coup d'œil, avec l'océan à l'infini en toile de fond." },
    { type: "p", text: "Ce guide n'est pas une simple fiche technique de randonnée. C'est ce qu'on dirait à un ami sportif qui débarque : comment y accéder, quel niveau prévoir, et à quelle heure partir pour la meilleure lumière." },

    { type: "h2", text: "Comprendre les Dois Irmãos" },
    { type: "p", text: "Les Dois Irmãos (les deux frères) sont deux pics jumeaux qui dominent la frontière entre <a href=\"/blog/ipanema-guide-complet\">Ipanema</a>, <a href=\"/blog/leblon-guide-complet\">Leblon</a> et la communauté de Vidigal. Le sommet, accessible par un sentier de randonnée, offre l'un des panoramas les plus complets et les plus photographiés de tout Rio de Janeiro." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Partez idéalement en fin d'après-midi pour arriver au sommet avant le coucher du soleil : la lumière dorée sur Ipanema et Leblon à cette heure-là est absolument spectaculaire, bien plus qu'en pleine journée." },

    { type: "h2", text: "Le sentier : niveau et durée" },
    { type: "p", text: "L'accès se fait par la communauté de Vidigal, en passant par le Mirante do Leblon avant de rejoindre le sentier principal. Comptez environ 1h à 1h30 de montée depuis l'entrée du sentier, pour un dénivelé modéré mais soutenu par endroits. Aucune expérience technique particulière n'est nécessaire, mais une bonne condition physique est recommandée." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Le sentier traverse en partie la communauté de Vidigal avant de rejoindre la nature. C'est l'occasion de découvrir un Rio différent, loin des clichés, à condition de rester respectueux et idéalement accompagné d'un guide local pour une première visite." },

    { type: "h2", text: "Comment organiser sa randonnée" },
    { type: "ul", items: [
      "Privilégiez un guide local ou une excursion organisée pour une première visite, notamment pour l'accès via Vidigal.",
      "Portez des chaussures de randonnée adaptées, le sentier étant parfois glissant après la pluie.",
      "Emportez de l'eau, aucun point de ravitaillement n'étant disponible sur le parcours.",
      "Prévoyez un sac léger, la montée étant assez physique sur la dernière portion.",
    ]},
    { type: "aeviter", title: "À éviter", text: "Ne partez jamais seul sur ce sentier sans connaissance préalable du terrain, en particulier pour l'accès via la communauté de Vidigal. Un guide local garantit une expérience sereine et respectueuse du quartier traversé." },

    { type: "h2", text: "Ce qu'on voit depuis le sommet" },
    { type: "p", text: "Depuis les Dois Irmãos, le panorama englobe la plage d'Ipanema, celle de Leblon, la lagune Rodrigo de Freitas, le Corcovado au loin, et la communauté de Vidigal en contrebas. Un point de vue complet sur toute la Zona Sul, difficile à égaler ailleurs dans la ville." },

    { type: "h2", text: "Combiner avec d'autres points de vue de Vidigal" },
    { type: "p", text: "Une fois redescendu, profitez-en pour découvrir les rooftops et bars de Vidigal, comme le <a href=\"/blog/rooftops-bars-vue-rio\">Mirante do Arvrão ou le Bar da Laje</a>, pour prolonger la soirée avec une vue tout aussi spectaculaire mais sans effort supplémentaire." },

    { type: "h2", text: "Une fin d'après-midi type" },
    { type: "ol", items: [
      "15h30 — Arrivée à Vidigal et début de la montée.",
      "16h30 — Passage par le Mirante do Leblon.",
      "17h — Poursuite jusqu'au sentier des Dois Irmãos.",
      "18h — Sommet et coucher de soleil sur Ipanema et Leblon.",
      "19h30 — Redescente et verre au Mirante do Arvrão ou au Bar da Laje.",
    ]},

    { type: "faq", items: [
      { q: "Faut-il un guide pour randonner aux Dois Irmãos ?", a: "Ce n'est pas obligatoire mais fortement recommandé, notamment pour l'accès via la communauté de Vidigal, afin de garantir une expérience sereine et respectueuse du quartier." },
      { q: "Combien de temps dure la randonnée aux Dois Irmãos ?", a: "Comptez environ 1h à 1h30 de montée, pour un dénivelé modéré ne nécessitant pas d'expérience technique particulière." },
      { q: "Quel est le meilleur moment pour randonner aux Dois Irmãos ?", a: "La fin d'après-midi, pour arriver au sommet avant le coucher du soleil et profiter de la lumière dorée sur Ipanema et Leblon." },
      { q: "Peut-on combiner cette randonnée avec un dîner à Vidigal ?", a: "Oui, plusieurs bars et rooftops de Vidigal, comme le Mirante do Arvrão, permettent de prolonger la soirée après la randonnée avec une vue tout aussi impressionnante." },
    ]},

    { type: "p", text: "La randonnée aux Dois Irmãos offre l'un des plus beaux panoramas de Rio, à portée de main d'Ipanema et Leblon. Une expérience à ne pas manquer pour les amateurs de vues à couper le souffle." },
  ],
};
