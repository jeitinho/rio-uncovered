// Categories du hub SEO Jeitinho — 17 catégories.
// Chaque catégorie a son slug, nom, description SEO, intro, FAQ optionnelle.

export interface Category {
  slug: string;
  name: string;
  title: string;             // H1 / title SEO
  description: string;       // meta description
  intro: string;             // texte d'intro affiché sur la page
  faq?: { q: string; a: string }[];
}

export const CATEGORIES: Category[] = [
  {
    slug: "quartiers",
    name: "Quartiers",
    title: "Les quartiers de Rio de Janeiro — Guides détaillés",
    description: "Ipanema, Copacabana, Santa Teresa, Lapa, Leblon… Découvrez chaque quartier de Rio avec nos guides écrits par des locaux.",
    intro: "Rio ne se résume pas à Copacabana. Chaque quartier a son âme, sa musique, son rythme. On vous emmène derrière les cartes postales, dans les rues où vivent vraiment les cariocas.",
  },
  {
    slug: "activites",
    name: "Activités",
    title: "Que faire à Rio — Activités et incontournables",
    description: "Toutes les meilleures activités à Rio : Christ Rédempteur, Pain de Sucre, cours de samba, tours privés et expériences insolites.",
    intro: "Des grands classiques revisités aux expériences que seuls les locaux connaissent — voici ce qui vaut vraiment le détour à Rio.",
  },
  {
    slug: "excursions",
    name: "Excursions",
    title: "Excursions au départ de Rio — Ilha Grande, Paraty, Búzios",
    description: "Nos guides pour organiser vos escapades hors de Rio : Ilha Grande, Paraty, Búzios, Arraial do Cabo, Petrópolis.",
    intro: "Le vrai luxe à Rio, c'est de pouvoir en sortir. En deux heures de route ou de bateau, vous êtes dans un tout autre monde.",
  },
  {
    slug: "gastronomie",
    name: "Gastronomie",
    title: "Où manger à Rio — Restaurants, brunchs, botequins",
    description: "Nos adresses de restaurants, brunchs, rodízios, cafés et botequins à Rio — testées et validées par des locaux.",
    intro: "Manger à Rio, c'est plus que se nourrir : c'est comprendre la ville. On vous ouvre notre carnet d'adresses.",
  },
  {
    slug: "vie-nocturne",
    name: "Vie nocturne",
    title: "Sortir à Rio — Bars, clubs, rooftops et samba",
    description: "Les meilleurs bars, clubs, rooftops et lieux de samba à Rio pour sortir comme un carioca.",
    intro: "Rio s'anime après le coucher du soleil. Voici où sortir vraiment — pas les pièges à touristes, les vrais lieux.",
  },
  {
    slug: "carnaval",
    name: "Carnaval",
    title: "Carnaval de Rio — Le guide complet",
    description: "Sambodrome, blocos de rue, camarotes… Tout ce qu'il faut savoir pour vivre le Carnaval de Rio comme un initié.",
    intro: "Le Carnaval de Rio est une expérience de vie. Encore faut-il savoir où aller, quand, et comment. Nos guides vous préparent.",
  },
  {
    slug: "football",
    name: "Football",
    title: "Football à Rio — Maracanã, Flamengo, Fluminense",
    description: "Assister à un match au Maracanã, comprendre le Fla-Flu, choisir son club — le guide football à Rio.",
    intro: "À Rio, le football n'est pas un sport, c'est une religion. Voici comment y assister sans faux pas.",
  },
  {
    slug: "plages",
    name: "Plages",
    title: "Les plages de Rio — Ipanema, Copacabana, Prainha, Grumari",
    description: "Guide complet des plages de Rio, des grandes classiques aux criques secrètes. Codes, sécurité, meilleurs kiosques.",
    intro: "Ipanema, Copacabana… mais aussi Prainha, Grumari, Joatinga. Chaque plage a ses codes, on vous les apprend.",
  },
  {
    slug: "randonnees",
    name: "Randonnées",
    title: "Randonnées à Rio — Dois Irmãos, Pedra Bonita, Pico da Tijuca",
    description: "Les plus belles randonnées de Rio de Janeiro : Dois Irmãos, Pedra Bonita, Pão de Açúcar, Pico da Tijuca.",
    intro: "Rio est une ville-jungle. Ses meilleurs points de vue se méritent — à pied. Nos itinéraires favoris.",
  },
  {
    slug: "culture",
    name: "Culture",
    title: "Culture carioca — Samba, musique, art de vivre",
    description: "Musées, samba, MPB, art de rue, cinéma brésilien : plongez dans la culture de Rio.",
    intro: "La culture carioca ne se visite pas, elle se vit. On vous ouvre les portes.",
  },
  {
    slug: "conseils-pratiques",
    name: "Conseils pratiques",
    title: "Conseils pratiques pour voyager à Rio",
    description: "Visa, langue, monnaie, applications, coutumes, pourboires : tout ce qu'il faut savoir avant de partir à Rio.",
    intro: "Les petits détails qui font la différence entre un séjour subi et un séjour vraiment vécu.",
  },
  {
    slug: "budget",
    name: "Budget",
    title: "Voyage à Rio — Budget, coût de la vie, argent",
    description: "Combien coûte réellement un voyage à Rio ? Nos estimations détaillées et honnêtes, sans langue de bois.",
    intro: "On vous dit tout sur ce que coûte vraiment Rio. Pas d'estimations en l'air : des chiffres testés sur place.",
  },
  {
    slug: "securite",
    name: "Sécurité",
    title: "Sécurité à Rio — Le guide honnête",
    description: "Rio est-elle dangereuse ? Nos conseils réalistes, quartier par quartier, situation par situation.",
    intro: "Rio n'est ni un enfer ni un Disneyland. On parle vrai : ce qui craint, ce qui ne craint pas, et comment se comporter.",
  },
  {
    slug: "transports",
    name: "Transports",
    title: "Se déplacer à Rio — Métro, Uber, bus, taxi",
    description: "Métro, Uber, bus, taxi : comment se déplacer intelligemment à Rio. Codes, tarifs, pièges à éviter.",
    intro: "Bien se déplacer à Rio, c'est débloquer 80 % de la ville. On vous donne les vrais bons réflexes.",
  },
  {
    slug: "hebergements",
    name: "Hébergements",
    title: "Où dormir à Rio — Hôtels, appartements, boutique-hôtels",
    description: "Nos meilleures adresses d'hôtels, boutique-hôtels et appartements à Rio, par quartier et par budget.",
    intro: "Le choix du quartier compte plus que le choix de l'hôtel. On vous aide à choisir les deux.",
  },
  {
    slug: "itineraires",
    name: "Itinéraires",
    title: "Itinéraires à Rio — 3, 5, 7 jours",
    description: "Itinéraires clés en main pour 3, 5 ou 7 jours à Rio, pensés par des locaux.",
    intro: "Un bon itinéraire, ce n'est pas une liste — c'est un rythme. Voici les nôtres.",
  },
  {
    slug: "evenements",
    name: "Évènements",
    title: "Évènements à Rio — Réveillon, Rock in Rio, festivals",
    description: "Réveillon, Rock in Rio, festivals de cinéma, grandes dates du calendrier carioca.",
    intro: "Certains évènements valent le voyage à eux seuls. On vous dit lesquels et quand.",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
