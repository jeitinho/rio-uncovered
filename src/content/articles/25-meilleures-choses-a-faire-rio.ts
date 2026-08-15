import type { Article } from "../types";
import hero from "@/assets/article-rio25.jpg";

export const article: Article = {
  slug: "25-meilleures-choses-a-faire-rio",
  title: "Les 25 meilleures choses à faire à Rio de Janeiro",
  titleAccent: "meilleures",
  description: "Notre sélection de 25 pépites à Rio, loin des cartes postales déjà vues partout. Des lieux que les cariocas gardent pour eux.",
  category: "activites",
  tags: ["que faire à Rio", "pépites locales", "activités"],
  date: "2026-06-20",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Vue aérienne de la baie de Guanabara et des collines de Rio de Janeiro au coucher du soleil",
  featured: true,
  guide: true,
  popular: true,
  relatedServices: [
    { label: "City tour privé", href: "https://www.jeitinho.fr/experiences", description: "On condense 25 idées en une journée sur mesure." },
    { label: "Conciergerie", href: "https://www.jeitinho.fr/trouver-un-jeitinho", description: "Réservations, transferts, adresses : on s'occupe de tout." },
  ],
  sections: [
    { type: "p", text: "Il y a mille listes de « choses à faire à Rio », et la plupart se copient entre elles : Christ Rédempteur, Pain de Sucre, Escadaria Selarón. Vous les connaissez déjà, vous les trouverez partout ailleurs. Celle-ci est différente : c'est notre carnet, ce qu'on emmène voir à un ami qui a déjà fait le tour des classiques et qui veut voir le vrai Rio." },

    { type: "h2", text: "Vie locale et nightlife authentique" },
    { type: "ol", items: [
      "Un verre à Arnaldo Quintela — petite rue de Botafogo qui s'anime le soir, bars sans chichi, clientèle locale.",
      "Une soirée à Olegário Maciel — <a href=\"https://www.jeitinho.fr/experiences\">voir le calendrier Jeitinho</a> pour les prochaines dates.",
      "Un match au Maracanã — voir notre guide dédié pour bien préparer votre venue.",
      "Coucher de soleil à Arpoador — la vraie religion carioca, entre Ipanema et Copacabana.",
      "Pédalo sur la Lagoa Rodrigo de Freitas — vue sur le Corcovado depuis l'eau, activité que peu de touristes pensent à faire.",
      "Street food au Centro — les vendeurs de rue du quartier historique, loin des restaurants touristiques.",
      "Feira do Lavradio — marché aux puces mensuel dans Lapa, antiquités et ambiance bohème.",
      "Baile Charme à Madureira — tous les samedis dès 22h sous le Viaduto Negrão de Lima, le plus grand baile charme du Brésil, patrimoine culturel de Rio depuis 2013.",
      "Feira Hippie d'Ipanema — chaque dimanche, artisanat brésilien, ambiance dominicale familiale.",
      "Travessa do Comércio — ruelle pavée du Centro historique, bars after-work fréquentés par les cariocas, pas les touristes.",
      "Mercadão de Madureira — marché populaire monumental en Zona Norte, immersion totale dans le Rio du quotidien.",
    ]},

    { type: "h2", text: "Culture et histoire méconnues" },
    { type: "ol", items: [
      "Église Nossa Senhora da Penha — 382 marches ou funiculaire gratuit, vue sur toute la baie de Guanabara depuis le sommet.",
      "Feira de São Cristóvão — cuisine et forró du Nordeste brésilien, ambiance authentique à des kilomètres de la Zona Sul.",
      "Petit-déjeuner à la Confeitaria Colombo — institution de 1894 au Centro, décor Belle Époque quasi confidentiel pour les étrangers.",
      "Cais do Valongo — site classé UNESCO, vestiges de l'ancien port négrier dans la Zona Portuária, une histoire puissante largement ignorée des visiteurs.",
      "Sítio Roberto Burle Marx — propriété-jardin du paysagiste qui a dessiné les trottoirs de Copacabana, classée UNESCO, quasiment jamais visitée par les étrangers (visite sur réservation).",
      "Ensaio d'école de samba — répétitions ouvertes au public selon la saison (Mangueira, Salgueiro), calendrier à vérifier avant de s'y rendre.",
      "Parque das Ruínas — ruines d'un ancien manoir à Santa Teresa, vue gratuite sur la baie, concerts improvisés parfois.",
    ]},

    { type: "h2", text: "Nature et grand air, loin de la foule" },
    { type: "ol", items: [
      "Randonnée Dois Irmãos — 40 minutes de montée, vue sur Ipanema et Vidigal, bien moins fréquentée que le Corcovado.",
      "Après-midi à Ilha da Gigoia — <a href=\"https://www.jeitinho.fr/experiences\">voir l'expérience Jeitinho</a> pour visiter cet archipel flottant en pleine Barra da Tijuca.",
      "Journée plage à Niterói — de l'autre côté de la baie, ambiance différente, moins de monde.",
      "Ilhas Cagarras — archipel visible depuis Ipanema, accessible en excursion bateau, réserve naturelle marine.",
      "Praia do Meio et Grumari — plages sauvages en Zona Oeste, zéro urbanisation, un Rio complètement différent de la Zona Sul.",
      "Quinta da Boa Vista — ancien parc impérial en Zona Norte, hors radar touristique complet.",
      "Ferry vers l'Ilha de Paquetá — île sans voiture dans la baie, rythme lent, embarcadère à Praça XV.",
    ]},

    { type: "conseil", title: "Le conseil Jeitinho", text: "Ne cherchez pas à cocher les 25 cases. Choisissez-en 6 à 8, faites-les bien, laissez du temps pour l'imprévu. Le meilleur souvenir de Rio n'est jamais celui qu'on avait planifié." },

    { type: "h2", text: "Comment enchaîner tout ça sans s'épuiser" },
    { type: "p", text: "Rio s'organise en trois zones : Zona Sul (plages, vie nocturne), Centro (histoire, culture), Zona Norte et Zona Oeste (pépites hors radar de cette liste). Grouper vos activités par zone évite trois heures de déplacement par jour." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Le trafic à Rio peut multiplier par trois vos temps de trajet en semaine, entre 17h et 20h. Prévoyez large ou décalez, en particulier pour rejoindre la Zona Norte ou la Zona Oeste." },

    { type: "faq", items: [
      { q: "Combien de jours pour explorer ces pépites en plus des incontournables ?", a: "Comptez au moins 2-3 jours supplémentaires au-delà d'un premier séjour classique pour découvrir sérieusement ces lieux moins fréquentés." },
      { q: "Ces lieux sont-ils sûrs pour les touristes ?", a: "Oui dans l'ensemble, mais certains (Zona Norte, marchés populaires) gagnent à être visités avec un guide local la première fois, surtout pour les événements nocturnes." },
      { q: "Faut-il un guide pour ces pépites ?", a: "Pas indispensable pour la plupart, mais recommandé pour la Zona Norte et les événements comme le Baile Charme ou les ensaios de samba. Notre concierge peut arranger ça." },
    ]},
  ],
};
