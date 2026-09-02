import type { Article } from "../types";
import hero from "@/assets/article-itineraire-5-jours-rio.jpg";

export const article: Article = {
  slug: "rio-en-3-jours",
  title: "Rio en 3 jours : l'itinéraire pour un week-end prolongé",
  titleAccent: "3 jours",
  description: "Escale ou week-end prolongé à Rio ? Notre itinéraire condensé en 3 jours : Zona Sul et plages, Christ Rédempteur ou Pain de Sucre, Santa Teresa, et une expérience forte pour repartir avec le vrai Rio en tête.",
  category: "itineraires",
  tags: ["itinéraire", "3 jours", "week-end", "Rio de Janeiro"],
  date: "2026-09-02",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Vue panoramique de la baie de Guanabara et du Pain de Sucre depuis le Corcovado, Rio de Janeiro",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://jeitinho.fr/trouver-un-jeitinho",
      description: "On construit votre itinéraire sur mesure, même serré, pour ne rien perdre en 3 jours.",
    },
  ],
  sections: [
    { type: "p", text: "Trois jours à Rio, ça peut vouloir dire une escale de croisière, un week-end prolongé glissé dans un voyage plus large, ou tout simplement le temps qu'on a pu se libérer. Dans tous les cas, la question est la même : comment ne rien rater d'essentiel sans courir partout ni finir épuisé." },
    { type: "p", text: "Ce guide fait des choix. Pas de liste à cocher interminable : les incontournables qui définissent vraiment Rio, priorisés jour par jour, avec des alternatives claires quand il faut trancher. Si vous avez plus de temps devant vous, notre <a href=\"/blog/itineraire-5-jours-rio\">itinéraire 5 jours</a> approfondit davantage, et <a href=\"/blog/rio-en-10-jours-excursions\">Rio en 10 jours</a> pousse jusqu'aux excursions autour de la ville." },

    { type: "h2", text: "Jour 1 — Zona Sul, plages et premier monument" },
    { type: "p", text: "Le premier jour pose le décor : la Zona Sul, ses plages et son ambiance carioca. C'est aussi le moment de caler le premier des deux monuments emblématiques, selon votre énergie à l'arrivée." },
    { type: "ol", items: [
      "Matin — Balade et bain à <a href=\"/blog/copacabana-guide-complet\">Copacabana</a> ou <a href=\"/blog/ipanema-guide-complet\">Ipanema</a>, pour prendre le pouls de la ville en douceur.",
      "Fin de matinée — Ascension du Corcovado pour voir le Christ Rédempteur (réservez vos billets en ligne à l'avance pour éviter la file).",
      "13h — Déjeuner léger dans la Zona Sul.",
      "Après-midi — Retour plage, farniente, marche sur le sable entre Copacabana et Ipanema.",
      "17h30 — Coucher de soleil à Arpoador, une tradition carioca à ne pas manquer.",
      "Soir — Dîner et première sortie dans le quartier où vous logez.",
    ]},
    { type: "conseil", title: "Le conseil Jeitinho", text: "Si vous arrivez fatigué (vol de nuit, décalage), inversez : plage et repos le matin, Corcovado en fin d'après-midi quand la lumière est plus douce et la queue souvent plus courte." },

    { type: "h2", text: "Jour 2 — L'autre monument, puis Santa Teresa et Lapa" },
    { type: "p", text: "Si vous ne devez choisir qu'un des deux monuments emblématiques le premier jour, gardez celui-ci en réserve pour le deuxième : Corcovado et Pain de Sucre se complètent, mais rarement le même jour sans se presser." },
    { type: "ol", items: [
      "Matin — Praia Vermelha, au pied du Pain de Sucre, pour une baignade plus tranquille que sur les grandes plages.",
      "Midi — Déjeuner près de la plage.",
      "Après-midi — Montée au Pain de Sucre en téléphérique, avec vue sur toute la baie de Guanabara.",
      "Fin d'après-midi — Direction <a href=\"/blog/santa-teresa-guide-complet\">Santa Teresa</a>, le quartier bohème perché sur ses collines : ruelles pavées, ateliers d'artistes, vue sur le centre-ville.",
      "Soir — Descente à <a href=\"/blog/lapa-guide-complet\">Lapa</a> pour dîner puis profiter de l'ambiance sous les Arcos, entre samba et vie nocturne carioca.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "Santa Teresa et Lapa se visitent bien à la suite : la première pour l'ambiance de jour, la seconde pour l'énergie de nuit. Privilégiez un Uber entre les deux le soir plutôt que de marcher." },

    { type: "h2", text: "Jour 3 — Une expérience marquante, puis départ" },
    { type: "p", text: "Le dernier jour, misez sur une expérience qui sort des sentiers battus plutôt que d'essayer de tout caser. Trois options selon vos envies et votre créneau de départ." },
    { type: "ul", items: [
      "Immersion en favela avec un guide local reconnu — jamais seul ni sans guide : c'est souvent l'expérience qui marque le plus un premier séjour à Rio.",
      "Match au Maracanã, si le calendrier tombe bien : l'ambiance d'un stade brésilien en pleine effervescence ne se raconte pas, elle se vit.",
      "Marché local ou feira, pour repartir avec un vrai aperçu du quotidien carioca et quelques souvenirs qui ont du sens.",
    ]},
    { type: "ol", items: [
      "Matin — L'expérience choisie ci-dessus, en priorité si votre vol part en soirée.",
      "Midi — Déjeuner tranquille, dernière vue sur la ville.",
      "Après-midi — Derniers achats ou dernière plage selon le temps restant, puis transfert vers l'aéroport.",
    ]},
    { type: "aeviter", title: "À éviter", text: "Ne calez pas une visite de favela ou une excursion juste avant un vol serré : gardez au moins trois heures de marge avant l'heure d'enregistrement, les trajets à Rio peuvent être imprévisibles." },

    { type: "h2", text: "Et si 3 jours, ce n'est vraiment pas assez" },
    { type: "p", text: "C'est souvent le cas : Rio se dévoile lentement, et 3 jours suffisent à donner envie d'y rester plus longtemps. Pour aller plus loin sans improviser, notre <a href=\"/blog/itineraire-5-jours-rio\">itinéraire 5 jours</a> ajoute la forêt de Tijuca et Barra da Tijuca, et <a href=\"/blog/rio-en-10-jours-excursions\">Rio en 10 jours</a> ouvre sur les excursions aux alentours. Si vous préférez qu'on s'occupe de tout, notre <a href=\"https://jeitinho.fr/trouver-un-jeitinho\">conciergerie sur mesure</a> construit un itinéraire adapté à votre créneau, même très court." },

    { type: "faq", items: [
      { q: "3 jours suffisent-ils pour découvrir Rio ?", a: "Pour un premier aperçu, oui : en priorisant un des deux monuments emblématiques, les plages de la Zona Sul, Santa Teresa/Lapa et une expérience forte comme la favela, vous repartez avec l'essentiel de la ville." },
      { q: "Faut-il choisir entre le Corcovado et le Pain de Sucre ?", a: "Idéalement non, faites les deux sur deux jours différents plutôt que le même jour : chacun demande du temps (ascension, file, vue) et les enchaîner presse trop le programme." },
      { q: "Quel jour prévoir la visite de favela ?", a: "Le dernier jour fonctionne bien si votre vol part en soirée, mais évitez de la coller juste avant un départ serré : gardez de la marge pour les transferts." },
      { q: "Est-ce jouable sans voiture ?", a: "Oui, cet itinéraire se fait entièrement en Uber, métro et à pied entre les quartiers de la Zona Sul, Santa Teresa et Lapa." },
    ]},

    { type: "p", text: "Trois jours à Rio, c'est court, mais largement assez pour comprendre pourquoi tant de voyageurs y reviennent. Priorisez, gardez de la marge, et laissez le rythme carioca faire le reste." },
  ],
};
