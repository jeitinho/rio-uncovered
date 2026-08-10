import type { Article } from "../types";
import hero from "@/assets/article-itineraire-5-jours-rio.jpg";

export const article: Article = {
  slug: "itineraire-5-jours-rio",
  title: "Itinéraire 5 jours à Rio de Janeiro : notre plan complet",
  titleAccent: "5 jours",
  description: "Christ Rédempteur, Pain de Sucre, Barra da Tijuca, forêt de Tijuca, centre historique, favela : notre itinéraire complet jour par jour pour vivre Rio en 5 jours.",
  category: "itineraires",
  tags: ["itinéraire", "préparer son voyage", "Rio de Janeiro"],
  date: "2026-08-10",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Vue panoramique de la baie de Guanabara et du Pain de Sucre depuis le Corcovado, Rio de Janeiro",
  featured: true,
  guide: true,
  popular: true,
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://jeitinho.fr/trouver-un-jeitinho",
      description: "On construit votre itinéraire sur mesure, adapté à votre rythme et vos envies.",
    },
  ],
  sections: [
    { type: "p", text: "Cinq jours à Rio, c'est le format idéal pour découvrir l'essentiel de la ville sans se presser : les incontournables, quelques expériences plus fortes, et une vraie immersion locale." },
    { type: "p", text: "Ce guide n'est pas une liste à cocher mécaniquement. C'est ce qu'on dirait à un ami qui prépare son voyage : quoi faire chaque jour, dans quel ordre, et où on emmène vraiment nos proches." },

    { type: "h2", text: "Jour 1 — Christ Rédempteur et Pain de Sucre" },
    { type: "ol", items: [
      "10h — Ascension du Corcovado pour voir le Christ Rédempteur, idéalement en arrivant tôt pour éviter la foule.",
      "Midi — Descente et direction Praia Vermelha, au pied du Pain de Sucre.",
      "12h30 — Déjeuner au Terra Brasilis, juste devant la plage.",
      "14h — Farniente à Praia Vermelha, une des plages les plus tranquilles de la Zona Sul.",
      "16h30 — Montée au Pain de Sucre.",
      "17h30 — Coucher de soleil depuis le sommet, l'un des plus beaux panoramas de Rio.",
    ]},
    { type: "conseil", title: "Le conseil Jeitinho", text: "Réservez vos billets pour le Corcovado et le Pain de Sucre en ligne à l'avance, en particulier en haute saison. Les files d'attente sur place peuvent facilement vous faire perdre une à deux heures." },

    { type: "h2", text: "Jour 2 — Barra da Tijuca et Ilha da Gigoia" },
    { type: "ol", items: [
      "Matin — Praia dos Amores, au Posto 1 de Barra da Tijuca, pour une matinée plage loin de l'agitation de la Zona Sul.",
      "13h — Déjeuner léger à Barra.",
      "14h30 — Direction Ilha da Gigoia pour un tour en bateau dans l'archipel.",
      "Après-midi — Balade dans les canaux, observation de la faune locale, ambiance îles flottantes en plein Rio.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "L'Ilha da Gigoia se visite uniquement en bateau, avec des embarcadères sur la rive. Comptez une bonne demi-journée pour explorer l'archipel sans être pressé." },

    { type: "h2", text: "Jour 3 — Forêt de Tijuca, entre nature et sensations" },
    { type: "ol", items: [
      "Matin — Tour de la forêt de Tijuca, la plus grande forêt urbaine du monde : cascades, points de vue, nature dense en pleine ville.",
      "Après-midi — Pour les amateurs de sensations fortes : vol en parapente depuis Pedra Bonita, avec atterrissage sur la plage de São Conrado.",
      "Soir — Retour tranquille, dîner selon la zone où vous logez.",
    ]},
    { type: "aeviter", title: "À éviter", text: "Le parapente dépend entièrement de la météo et du vent. Si vous y tenez, prévoyez de la flexibilité dans votre planning plutôt qu'un seul créneau fixe." },

    { type: "h2", text: "Jour 4 — Centre historique et coucher de soleil à Arpoador" },
    { type: "ol", items: [
      "Matin — City tour du centre historique : Paço Imperial, Candelária, Boulevard Olímpico, une facette de Rio bien différente de la Zona Sul.",
      "12h30 — Déjeuner dans le centre.",
      "Après-midi — Retour progressif vers la Zona Sul.",
      "17h30 — Coucher de soleil à Arpoador, une tradition carioca incontournable, entre Ipanema et Copacabana.",
      "Soir — Dîner à Ipanema.",
    ]},

    { type: "h2", text: "Jour 5 — Immersion dans une favela" },
    { type: "p", text: "Une journée complète dans une favela, toujours accompagné d'un guide local qui connaît vraiment le terrain. Rencontres, culture locale, point de vue different sur Rio — loin des clichés, au plus près du quotidien carioca." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Ne visitez jamais une favela seul ou en improvisant. Avec un guide local reconnu, c'est une des expériences les plus marquantes d'un séjour à Rio — sans lui, ça reste hors de portée et pas respectueux des habitants." },

    { type: "h2", text: "Aller plus loin selon votre profil" },
    { type: "p", text: "Pour un premier voyage qui coche tous les incontournables sans se compliquer la vie, notre pack <a href=\"https://jeitinho.fr/packs/rio-decouverte\">Rio Découverte</a> reprend l'essentiel de ce itinéraire clé en main. Pour une expérience plus intense, entre hélicoptère et excursions privées, direction le pack <a href=\"https://jeitinho.fr/packs/le-jeitinho\">Le Jeitinho</a>. Et pour l'immersion favela entre amis, le pack <a href=\"https://jeitinho.fr/packs/entre-amigos\">Entre Amigos</a> combine favela, baile funk et rooftop privatisé." },

    { type: "faq", items: [
      { q: "5 jours suffisent-ils pour bien découvrir Rio ?", a: "Oui, c'est le format idéal pour combiner les incontournables (Corcovado, Pain de Sucre, plages) avec des expériences plus fortes comme la forêt de Tijuca ou l'immersion en favela, sans se presser." },
      { q: "Dans quel ordre visiter Corcovado et Pain de Sucre ?", a: "Réservez le Corcovado tôt le matin pour éviter la foule, puis enchaînez sur Praia Vermelha et le Pain de Sucre en fin d'après-midi pour profiter du coucher de soleil." },
      { q: "Faut-il louer une voiture pour cet itinéraire ?", a: "Non, cet itinéraire est réalisable en Uber, métro et bateau (pour Ilha da Gigoia), sans nécessiter de véhicule personnel." },
      { q: "Le parapente est-il accessible à tous ?", a: "Oui, aucune expérience n'est requise : vous volez en tandem avec un moniteur professionnel. Seule contrainte, la météo, qui peut décaler ou annuler les vols." },
    ]},

    { type: "p", text: "Cinq jours à Rio permettent de vraiment prendre le temps de comprendre la ville, entre incontournables, sensations fortes et immersion locale. Suivez le rythme carioca, et le reste se mettra naturellement en place." },
  ],
};