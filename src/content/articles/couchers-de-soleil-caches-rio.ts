import type { Article } from "../types";
import hero from "@/assets/article-couchers-soleil-rio.jpg";

export const article: Article = {
  slug: "couchers-de-soleil-caches-rio",
  title: "Les couchers de soleil cachés que peu de visiteurs connaissent",
  titleAccent: "cachés",
  description: "Brisolão, Mirante do Leblon, Mureta da Urca, Pedra do Pontal : notre sélection des plus beaux couchers de soleil et points de vue secrets de Rio.",
  category: "activites",
  tags: ["coucher de soleil", "mirante", "bons plans", "Rio de Janeiro"],
  date: "2026-07-11",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Coucher de soleil vu depuis un mirante en hauteur sur Rio de Janeiro, avec vue sur la lagune et les montagnes",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "City tour privé",
      href: "https://www.jeitinho.fr/experiences",
      description: "Découvrez les points de vue secrets de Rio avec un local qui connaît les meilleurs horaires.",
    },
  ],
  sections: [
    { type: "p", text: "Les meilleurs souvenirs ne viennent pas toujours des monuments. Ils viennent souvent d'un coucher de soleil inattendu, d'un kiosque où les cariocas vont vraiment, ou d'un point de vue que peu de visiteurs connaissent." },
    { type: "p", text: "Ce guide n'est pas une simple liste de miradors. C'est ce qu'on dirait à un ami qui débarque : où aller, à quelle heure, et pourquoi ça vaut le détour." },

    { type: "h2", text: "Les plus beaux couchers de soleil" },
    { type: "h3", text: "Arpoador" },
    { type: "p", text: "Le grand classique où les cariocas applaudissent le soleil chaque soir. Une tradition, pas une performance touristique." },
    { type: "h3", text: "Brisolão (Pavão-Pavãozinho)" },
    { type: "p", text: "Tout en haut de la communauté, vue spectaculaire sur la Lagoa Rodrigo de Freitas, le Christ Rédempteur, Rocinha et Vidigal." },
    { type: "h3", text: "Mirante do Leblon" },
    { type: "p", text: "Accessible par le haut de Vidigal, panorama exceptionnel sur Leblon, Ipanema et les Dois Irmãos." },
    { type: "h3", text: "Mureta da Urca" },
    { type: "p", text: "Une bière à la main face au Pain de Sucre, un rituel carioca incontournable en fin de journée." },
    { type: "h3", text: "Parque das Ruínas — Santa Teresa" },
    { type: "p", text: "L'un des plus beaux couchers de soleil de Santa Teresa, avec vue sur le centre de Rio et la baie." },
    { type: "h3", text: "Pedra do Pontal" },
    { type: "p", text: "Un des plus beaux spots de la côte ouest, loin de la foule, pour un coucher de soleil paisible." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Les plages sont beaucoup plus calmes avant 10h. Pour les plus belles photos, privilégiez la lumière entre 7h et 9h ou après 17h, quand la lumière rasante sublime les paysages de Rio." },

    { type: "h2", text: "Les points de vue cachés" },
    { type: "ul", items: [
      "Mirante do Pedrão (Vidigal) — panorama peu connu au-dessus de la communauté.",
      "Brisolão (Pavão-Pavãozinho) — vue sur la lagune et les montagnes environnantes.",
      "Parque da Catacumba — mirador accessible après une courte randonnée, vue sur la Lagoa.",
      "Parque das Ruínas — vue gratuite sur le centre historique et la baie.",
      "Mirante Dona Marta — un des panoramas à 360° les plus complets, hors lever ou coucher de soleil pour éviter la foule.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "Les kiosques pratiquent souvent des prix différents selon les produits : demandez toujours la carte. Uber est généralement plus rapide qu'un taxi en sortie d'événement pour rejoindre ces points de vue en hauteur." },

    { type: "h2", text: "Nos kiosques préférés" },
    { type: "ul", items: [
      "Clássico Beach Club — Copacabana.",
      "Sel d'Ipanema — Ipanema.",
      "Espaço Aloha — Barra da Tijuca.",
      "Rasta Beach — Leme.",
    ]},

    { type: "h2", text: "Les petits circuits qu'on adore" },
    { type: "ul", items: [
      "Urca Sunset — Praia Vermelha, Pista Cláudio Coutinho, Mureta da Urca.",
      "Santa Teresa — Escadaria Selarón, Parque das Ruínas, Chácara do Céu.",
      "Ipanema & Leblon — Arpoador, Praia de Ipanema, Mirante do Leblon.",
      "Barra — Praia do Pepê, Canal da Barra, Ilha da Gigoia.",
    ]},
    { type: "aeviter", title: "À éviter", text: "Le Mirante Dona Marta, bien que spectaculaire, est préférable à visiter en journée plutôt qu'au lever ou coucher du soleil, moments où l'affluence et la faible luminosité peuvent poser des enjeux de sécurité en zone isolée. Renseignez-vous localement avant de vous y rendre seul." },

    { type: "h2", text: "Le mot du jour : por do sol" },
    { type: "p", text: "Ce mot portugais signifie « coucher de soleil », le moment préféré des cariocas. C'est aussi souvent le moment où l'on se dit « on est bien à Rio »." },

    { type: "faq", items: [
      { q: "Quel est le meilleur mirador gratuit de Rio ?", a: "Le Parque das Ruínas à Santa Teresa offre l'une des plus belles vues gratuites sur le centre-ville et la baie, sans file d'attente contrairement aux sites payants." },
      { q: "Faut-il un guide pour accéder aux miradors de Vidigal ?", a: "Ce n'est pas obligatoire pour les plus accessibles, mais recommandé pour une première visite afin de bien s'orienter dans la communauté." },
      { q: "Où trouver des toilettes gratuites près de ces points de vue ?", a: "Les stations de métro, les centres commerciaux et la plupart des kiosques de plage disposent de toilettes, généralement pour un coût symbolique de 3 à 6 R$." },
      { q: "Quel est le meilleur moment pour les photos à Rio ?", a: "Entre 7h et 9h le matin, ou après 17h en fin de journée : la lumière rasante offre les plus belles teintes sur les paysages cariocas." },
    ]},

    { type: "p", text: "Rio récompense ceux qui cherchent un peu plus loin que les cartes postales habituelles. Un mirador méconnu, un kiosque local, et la ville se révèle sous un jour encore plus mémorable." },
  ],
};
