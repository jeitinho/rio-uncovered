import type { Article } from "../types";
import hero from "@/assets/article-itineraire-5-jours-rio.jpg";

export const article: Article = {
  slug: "itineraire-5-jours-rio",
  title: "Itinéraire 5 jours à Rio de Janeiro : notre plan complet",
  titleAccent: "5 jours",
  description: "Zona Sul, Corcovado, Pain de Sucre, Santa Teresa, Barra da Tijuca : notre itinéraire complet jour par jour pour profiter pleinement de Rio en 5 jours.",
  category: "itineraires",
  tags: ["itinéraire", "préparer son voyage", "Rio de Janeiro"],
  date: "2026-07-14",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Vue panoramique de la baie de Guanabara et du Pain de Sucre depuis le Corcovado, Rio de Janeiro",
  featured: true,
  guide: true,
  popular: true,
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "On construit votre itinéraire sur mesure, adapté à votre rythme et vos envies.",
    },
  ],
  sections: [
    { type: "p", text: "Cinq jours à Rio, c'est le format idéal pour découvrir l'essentiel de la ville sans se presser : les incontournables, quelques pépites plus discrètes, et assez de temps pour simplement profiter de la plage entre deux visites." },
    { type: "p", text: "Ce guide n'est pas une liste à cocher mécaniquement. C'est ce qu'on dirait à un ami qui prépare son voyage : quoi faire chaque jour, dans quel ordre, et où souffler un peu." },

    { type: "h2", text: "Jour 1 — Copacabana et prise de repères" },
    { type: "ol", items: [
      "9h — Petit-déjeuner à Copacabana pour bien démarrer.",
      "10h — Balade sur la calçada et visite du Forte de Copacabana.",
      "12h30 — Déjeuner de fruits de mer avec vue sur la mer.",
      "14h30 — Installation à la plage, Posto 4 ou 6 selon l'ambiance recherchée.",
      "17h — Repérage des lieux clés avec Google Maps pour la suite du séjour.",
      "19h30 — Dîner et sanduíche de Cervantes pour l'expérience carioca ultime.",
    ]},
    { type: "conseil", title: "Le conseil Jeitinho", text: "Le premier jour, ne cherchez pas à tout faire. Changez un peu d'argent, achetez une paire de tongs locale, faites quelques courses de base et profitez de la plage. Vous aurez tout le séjour pour découvrir le reste." },

    { type: "h2", text: "Jour 2 — Ipanema, Leblon et coucher de soleil à Arpoador" },
    { type: "ol", items: [
      "9h — Petit-déjeuner à Ipanema.",
      "10h30 — Plage d'Ipanema, baignade et observation de l'altinha.",
      "12h30 — Déjeuner dans un restaurant d'Ipanema.",
      "14h30 — Balade shopping rue Garcia d'Ávila et Visconde de Pirajá.",
      "16h — Passage à Leblon, rue Dias Ferreira et Mirante do Leblon.",
      "17h30 — Coucher de soleil à Arpoador, une tradition carioca incontournable.",
      "20h — Dîner à Leblon ou Ipanema.",
    ]},

    { type: "h2", text: "Jour 3 — Corcovado et Pain de Sucre" },
    { type: "ol", items: [
      "8h — Départ tôt pour éviter la foule.",
      "9h — Ascension du Corcovado en train à crémaillère.",
      "11h30 — Descente et déjeuner léger.",
      "14h30 — Direction Urca pour l'ascension du Pain de Sucre.",
      "16h — Sommet du Morro da Urca puis du Pão de Açúcar.",
      "17h30 — Coucher de soleil depuis le sommet.",
      "19h — Petiscos et bière au Bar Urca sur le muret face à la baie.",
      "20h30 — Dîner à Botafogo.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "Réservez vos billets pour le Corcovado et le Pain de Sucre en ligne à l'avance, en particulier en haute saison (décembre à mars). Les files d'attente sur place peuvent facilement vous faire perdre une à deux heures." },

    { type: "h2", text: "Jour 4 — Santa Teresa, Lapa et centre historique" },
    { type: "ol", items: [
      "9h — Petit-déjeuner dans le centre historique.",
      "10h — Visite du centre : Paço Imperial, Candelária, Boulevard Olímpico.",
      "12h30 — Déjeuner dans le centre.",
      "14h30 — Montée à Santa Teresa en bondinho.",
      "15h30 — Balade dans les ruelles colorées et visite du Parque das Ruínas.",
      "17h30 — Escadaria Selarón au coucher du soleil.",
      "19h30 — Dîner et soirée à Lapa, sous les Arcos.",
    ]},
    { type: "aeviter", title: "À éviter", text: "Ne prévoyez pas une excursion en dehors de Rio (Ilha Grande, Niterói, Petrópolis) le jour 4 : la montée à Santa Teresa et la soirée à Lapa méritent une journée complète sans être pressé par un trajet retour." },

    { type: "h2", text: "Jour 5 — Détente et derniers plaisirs" },
    { type: "ol", items: [
      "9h — Brunch dans une adresse tranquille, au Jardim Botânico ou à Botafogo.",
      "11h — Visite du Jardin botanique ou balade autour de la Lagoa Rodrigo de Freitas.",
      "13h — Déjeuner léger avec vue.",
      "15h — Shopping de dernière minute ou détente à la plage selon vos envies.",
      "17h — Dernier coucher de soleil du séjour, sur la plage de votre choix.",
      "20h — Dîner de fin de séjour dans une adresse coup de cœur découverte pendant la semaine.",
    ]},

    { type: "h2", text: "Aller plus loin selon votre profil" },
    { type: "p", text: "Si vous voyagez en famille ou en groupe et souhaitez découvrir un Rio plus moderne, remplacez le jour 5 par une journée à <a href=\"/blog/barra-da-tijuca-guide-complet\">Barra da Tijuca</a>. Pour approfondir chaque étape, retrouvez nos guides complets de <a href=\"/blog/copacabana-guide-complet\">Copacabana</a>, <a href=\"/blog/ipanema-guide-complet\">Ipanema</a>, <a href=\"/blog/santa-teresa-guide-complet\">Santa Teresa</a> et <a href=\"/blog/lapa-guide-complet\">Lapa</a>." },

    { type: "faq", items: [
      { q: "5 jours suffisent-ils pour bien découvrir Rio ?", a: "Oui, c'est le format idéal pour combiner les incontournables (Corcovado, Pain de Sucre, plages) avec des découvertes plus authentiques comme Santa Teresa, sans se presser." },
      { q: "Dans quel ordre visiter Corcovado et Pain de Sucre ?", a: "L'ordre importe peu, mais réservez toujours le Corcovado tôt le matin pour éviter la foule, et le Pain de Sucre en fin d'après-midi pour profiter du coucher de soleil." },
      { q: "Faut-il louer une voiture pour cet itinéraire ?", a: "Non, cet itinéraire est entièrement réalisable en Uber, métro et à pied, sans nécessiter de véhicule personnel." },
      { q: "Que faire si la météo est mauvaise un des cinq jours ?", a: "Inversez l'ordre des journées : privilégiez le centre historique, Santa Teresa et les musées les jours pluvieux, et gardez plage et sommets pour les journées ensoleillées." },
    ]},

    { type: "p", text: "Cinq jours à Rio permettent de vraiment prendre le temps de comprendre la ville, entre incontournables et instants plus authentiques. Suivez le rythme carioca, et le reste se mettra naturellement en place." },
  ],
};
