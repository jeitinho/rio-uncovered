import type { Article } from "../types";
import hero from "@/assets/article-calendrier-rio.jpg";

export const article: Article = {
  slug: "quand-partir-a-rio",
  title: "Quand partir à Rio ? Le calendrier mois par mois",
  titleAccent: "mois par mois",
  description: "Météo, affluence, prix et événements : notre calendrier complet mois par mois pour choisir la meilleure période pour votre voyage à Rio.",
  category: "conseils-pratiques",
  tags: ["calendrier", "météo", "préparer son voyage", "Rio de Janeiro"],
  date: "2026-07-11",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Plage de Rio de Janeiro sous un ciel dégagé avec vue sur les montagnes environnantes",
  featured: false,
  guide: true,
  popular: true,
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "On vous aide à choisir la meilleure période selon vos envies et votre budget.",
    },
  ],
  sections: [
    { type: "p", text: "Rio se vit toute l'année. Chaque saison a son ambiance, ses événements et ses avantages. Voici notre calendrier complet, mois par mois, pour choisir la période qui correspond le mieux à votre voyage." },
    { type: "p", text: "Ce guide n'est pas une simple grille météo. C'est ce qu'on dirait à un ami qui hésite sur ses dates : quand partir pour quoi, et à quoi s'attendre selon la période choisie." },

    { type: "h2", text: "Le calendrier complet" },
    { type: "h3", text: "Janvier — été, chaleur et réveillon" },
    { type: "p", text: "Chaude et ensoleillée (24 à 32°C), affluence très élevée, prix élevés. À ne pas manquer : le Réveillon du 31 décembre, feux d'artifice à Copacabana et fêtes sur les plages." },
    { type: "h3", text: "Février — Carnaval, la folie carioca" },
    { type: "p", text: "Chaude et ensoleillée (24 à 32°C), affluence très élevée, prix élevés. Le Carnaval (dates variables) et les blocos de rua animent toute la ville." },
    { type: "h3", text: "Mars — fin de l'été, encore animé" },
    { type: "p", text: "Chaude (24 à 31°C), affluence élevée, prix élevés. Les défilés des écoles de samba au Sambódromo ont généralement lieu ce mois-ci." },
    { type: "h3", text: "Avril — plus calme, météo agréable" },
    { type: "p", text: "Chaude (23 à 30°C), affluence moyenne, prix moyens. Pâques, concerts et événements locaux rythment le mois." },
    { type: "h3", text: "Mai — le meilleur compromis" },
    { type: "p", text: "Douce et ensoleillée (20 à 28°C), affluence faible, bons prix. Moins d'événements, idéal pour profiter tranquillement de la ville." },
    { type: "h3", text: "Juin — début de l'hiver carioca" },
    { type: "p", text: "Douce (19 à 27°C), affluence faible, bons prix. La Festa Junina anime la ville de culture et de tradition." },
    { type: "h3", text: "Juillet — hiver, sec et ensoleillé" },
    { type: "p", text: "Douce (18 à 26°C), affluence faible à moyenne, bons prix. Vacances scolaires (Brésil et France), festivals de musique." },
    { type: "h3", text: "Août — saison idéale" },
    { type: "p", text: "Douce et agréable (18 à 26°C), affluence moyenne, prix moyens. Journée des pères, festivals et événements sportifs." },
    { type: "h3", text: "Septembre — retour des beaux jours" },
    { type: "p", text: "Douce (19 à 27°C), affluence moyenne, prix moyens. Rock in Rio (années paires) marque le début de la haute saison." },
    { type: "h3", text: "Octobre — chaud et ensoleillé" },
    { type: "p", text: "Chaude (21 à 29°C), affluence moyenne à élevée, prix élevés. Dia das Crianças (12 octobre), début des fêtes de fin d'année." },
    { type: "h3", text: "Novembre — chaud, jours qui rallongent" },
    { type: "p", text: "Chaude (22 à 30°C), affluence élevée, prix élevés. Préparation pour le Réveillon, beaucoup d'événements." },
    { type: "h3", text: "Décembre — fêtes, chaleur et réveillon" },
    { type: "p", text: "Très chaude (23 à 31°C), affluence très élevée, prix très élevés. Noël, réveillon du 31 décembre, feux d'artifice à Copacabana." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Pour éviter la foule tout en profitant d'un climat idéal, visez la période de mai à août : moins de monde, prix accessibles et météo idéale pour les visites." },

    { type: "h2", text: "Quelle saison choisir selon vos priorités" },
    { type: "ul", items: [
      "Pour le soleil et la plage (décembre à mars) — chaud, animé, parfait pour profiter de la plage et de la vie nocturne.",
      "Pour éviter la foule (mai à août) — moins de monde, prix accessibles, météo idéale pour les visites.",
      "Pour les événements (février, mars et septembre) — Carnaval, Rock in Rio, Sambódromo : vivez l'énergie carioca à son sommet.",
      "Pour les randonnées (mai à septembre) — températures plus douces, ciel dégagé, idéal pour les treks et points de vue.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "Le mot « verão » (été) désigne la saison la plus chaude et la plus animée de Rio, généralement de décembre à mars. C'est aussi la période où les prix sont les plus élevés, particulièrement autour du Réveillon et du Carnaval." },

    { type: "aeviter", title: "À éviter", text: "Évitez de réserver votre hébergement à la dernière minute pour les périodes du Réveillon ou du Carnaval : les prix grimpent rapidement et les meilleures adresses partent plusieurs mois à l'avance." },

    { type: "faq", items: [
      { q: "Quelle est la meilleure période pour visiter Rio hors budget serré ?", a: "Mai à août offre le meilleur compromis entre météo agréable, faible affluence et prix accessibles toute l'année." },
      { q: "Quand a lieu le Carnaval de Rio ?", a: "Les dates varient chaque année selon le calendrier liturgique, généralement en février ou début mars. Vérifiez les dates exactes de l'année de votre voyage." },
      { q: "Fait-il froid à Rio en hiver ?", a: "Non, l'hiver carioca (juin à août) reste doux, avec des températures entre 18 et 27°C, bien plus clémentes que l'hiver européen." },
      { q: "Quand a lieu le festival Rock in Rio ?", a: "Rock in Rio se tient généralement les années paires, en septembre, et attire un public international pour plusieurs jours de concerts." },
    ]},

    { type: "p", text: "Il n'existe pas de mauvaise saison pour découvrir Rio, seulement des ambiances différentes. Choisissez la vôtre selon vos priorités, et la ville s'adaptera au reste." },
  ],
};
