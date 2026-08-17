import type { Article } from "../types";
import hero from "@/assets/article-calendrier-rio.jpg";

export const article: Article = {
  slug: "quand-partir-a-rio",
  title: "Quand partir à Rio ? Le calendrier mois par mois",
  titleAccent: "mois par mois",
  description:
    "Météo, affluence, prix et événements : notre calendrier complet mois par mois pour choisir la meilleure période pour votre voyage à Rio de Janeiro.",
  category: "conseils-pratiques",
  tags: [
    "calendrier Rio",
    "météo Rio de Janeiro",
    "quand partir au Brésil",
    "préparer son voyage",
  ],
  date: "2026-07-11",
  author: "equipe-jeitinho",
  hero,
  heroAlt:
    "Plage de Rio de Janeiro sous un ciel dégagé avec vue sur les montagnes environnantes",
  featured: false,
  guide: true,
  popular: true,

  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://jeitinho.fr/trouver-un-jeitinho",
      description:
        "On vous aide à choisir la meilleure période selon vos envies et votre budget.",
    },
  ],

  sections: [
    {
      type: "p",
      text:
        "Rio se vit toute l'année. Chaque saison a son ambiance, ses événements et ses avantages. Voici notre calendrier complet, mois par mois, pour choisir la période qui correspond le mieux à votre voyage.",
    },
    {
      type: "p",
      text:
        "Ce guide n'est pas une simple grille météo. C'est ce qu'on dirait à un ami qui hésite sur ses dates : quand partir pour quoi, et à quoi s'attendre selon la période choisie.",
    },

    {
      type: "h2",
      text: "Le calendrier complet, mois par mois",
    },

    {
      type: "h3",
      text: "Janvier — été, chaleur et réveillon",
    },
    {
      type: "p",
      text:
        "Chaude et ensoleillée (24 à 32°C), affluence très élevée, prix élevés. À ne pas manquer : le Réveillon du 31 décembre déborde sur les premiers jours de janvier dans l'ambiance, feux d'artifice à Copacabana et fêtes sur les plages — voir notre guide dédié au <a href=\"/blog/reveillon-rio-copacabana\">Réveillon à Copacabana</a>.",
    },

    {
      type: "h3",
      text: "Février — Carnaval, la folie carioca",
    },
    {
      type: "p",
      text:
        "Chaude et ensoleillée (24 à 32°C), affluence très élevée, prix élevés. Le Carnaval (dates variables selon le calendrier liturgique) et les blocos de rua animent toute la ville, jour et nuit — préparez-vous en amont avec notre guide <a href=\"/blog/preparer-carnaval-rio\">préparer son Carnaval à Rio</a>.",
    },

    {
      type: "h3",
      text: "Mars — fin de l'été, encore animé",
    },
    {
      type: "p",
      text:
        "Chaude (24 à 31°C), affluence élevée, prix élevés. Les défilés des écoles de samba au Sambódromo ont généralement lieu ce mois-ci, en fonction des dates exactes du Carnaval de l'année.",
    },

    {
      type: "h3",
      text: "Avril — plus calme, météo agréable",
    },
    {
      type: "p",
      text:
        "Chaude (23 à 30°C), affluence moyenne, prix moyens. Pâques, concerts et événements locaux rythment le mois, dans une ville qui retrouve un rythme plus tranquille après le Carnaval.",
    },

    {
      type: "h3",
      text: "Mai — le meilleur compromis",
    },
    {
      type: "p",
      text:
        "Douce et ensoleillée (20 à 28°C), affluence faible, bons prix. Moins d'événements, idéal pour profiter tranquillement de la ville sans se battre pour une place de plage ni pour une table de restaurant.",
    },

    {
      type: "h3",
      text: "Juin — début de l'hiver carioca",
    },
    {
      type: "p",
      text:
        "Douce (19 à 27°C), affluence faible, bons prix. La Festa Junina anime la ville de culture et de tradition, avec des fêtes de quartier autour du maïs, du feu et des danses traditionnelles.",
    },

    {
      type: "h3",
      text: "Juillet — hiver, sec et ensoleillé",
    },
    {
      type: "p",
      text:
        "Douce (18 à 26°C), affluence faible à moyenne, bons prix. Vacances scolaires (Brésil et France), festivals de musique — c'est aussi un bon mois pour les randonnées, la chaleur étant moins écrasante.",
    },

    {
      type: "h3",
      text: "Août — saison idéale",
    },
    {
      type: "p",
      text:
        "Douce et agréable (18 à 26°C), affluence moyenne, prix moyens. Journée des pères, festivals et événements sportifs se succèdent, dans une ambiance toujours ensoleillée malgré l'hiver.",
    },

    {
      type: "h3",
      text: "Septembre — retour des beaux jours",
    },
    {
      type: "p",
      text:
        "Douce (19 à 27°C), affluence moyenne, prix moyens. Rock in Rio (années paires) marque le début de la haute saison et attire un public international pour plusieurs jours de concerts.",
    },

    {
      type: "h3",
      text: "Octobre — chaud et ensoleillé",
    },
    {
      type: "p",
      text:
        "Chaude (21 à 29°C), affluence moyenne à élevée, prix élevés. Dia das Crianças (12 octobre), début des premières réservations pour les fêtes de fin d'année.",
    },

    {
      type: "h3",
      text: "Novembre — chaud, jours qui rallongent",
    },
    {
      type: "p",
      text:
        "Chaude (22 à 30°C), affluence élevée, prix élevés. Préparation pour le Réveillon, beaucoup d'événements, et une ville qui commence déjà à se décorer pour les fêtes.",
    },

    {
      type: "h3",
      text: "Décembre — fêtes, chaleur et réveillon",
    },
    {
      type: "p",
      text:
        "Très chaude (23 à 31°C), affluence très élevée, prix très élevés. Noël, réveillon du 31 décembre, feux d'artifice à Copacabana : le mois le plus festif et le plus cher de l'année à Rio.",
    },

    {
      type: "conseil",
      title: "Le conseil Jeitinho",
      text:
        "Pour éviter la foule tout en profitant d'un climat idéal, visez la période de mai à août : moins de monde, prix accessibles et météo idéale pour les visites et les randonnées.",
    },

    {
      type: "h2",
      text: "Quelle saison choisir selon vos priorités",
    },
    {
      type: "ul",
      items: [
        "Pour le soleil et la plage (décembre à mars) — chaud, animé, parfait pour profiter de la <a href=\"/blog/comment-choisir-sa-plage-rio\">plage</a> et de la vie nocturne.",
        "Pour éviter la foule (mai à août) — moins de monde, prix accessibles, météo idéale pour les visites.",
        "Pour les événements (février, mars et septembre) — Carnaval, Rock in Rio, Sambódromo : vivez l'énergie carioca à son sommet.",
        "Pour les randonnées (mai à septembre) — températures plus douces, ciel dégagé, idéal pour les treks et points de vue.",
      ],
    },
    {
      type: "bonasavoir",
      title: "Bon à savoir",
      text:
        "Le mot « verão » (été) désigne la saison la plus chaude et la plus animée de Rio, généralement de décembre à mars. C'est aussi la période où les prix sont les plus élevés, particulièrement autour du Réveillon et du Carnaval — réservez tôt si vous visez ces dates.",
    },

    {
      type: "h2",
      text: "Météo et saison des pluies : ce qu'il faut vraiment savoir",
    },
    {
      type: "p",
      text:
        "L'été carioca (décembre à mars) est aussi la saison la plus humide, avec des averses parfois soudaines et intenses en fin de journée, qui ne durent en général qu'une trentaine de minutes avant que le soleil ne revienne. L'hiver (juin à août) est nettement plus sec, ce qui en fait la meilleure période pour les activités en extérieur prévues à l'avance sans risque de pluie.",
    },

    {
      type: "aeviter",
      title: "À éviter",
      text:
        "Évitez de réserver votre hébergement à la dernière minute pour les périodes du Réveillon ou du Carnaval : les prix grimpent rapidement et les meilleures adresses partent plusieurs mois à l'avance.",
    },

    {
      type: "faq",
      items: [
        {
          q: "Quelle est la meilleure période pour visiter Rio hors budget serré ?",
          a:
            "Mai à août offre le meilleur compromis entre météo agréable, faible affluence et prix accessibles toute l'année.",
        },
        {
          q: "Quand a lieu le Carnaval de Rio ?",
          a:
            "Les dates varient chaque année selon le calendrier liturgique, généralement en février ou début mars. Vérifiez les dates exactes de l'année de votre voyage.",
        },
        {
          q: "Fait-il froid à Rio en hiver ?",
          a:
            "Non, l'hiver carioca (juin à août) reste doux, avec des températures entre 18 et 27°C, bien plus clémentes que l'hiver européen.",
        },
        {
          q: "Quand a lieu le festival Rock in Rio ?",
          a:
            "Rock in Rio se tient généralement les années paires, en septembre, et attire un public international pour plusieurs jours de concerts.",
        },
        {
          q: "Quand tombe la saison des pluies à Rio ?",
          a:
            "Principalement entre décembre et mars, sous forme d'averses courtes et intenses en fin de journée plutôt que de pluie continue.",
        },
        {
          q: "Combien de temps à l'avance réserver pour le Réveillon ou le Carnaval ?",
          a:
            "Idéalement plusieurs mois à l'avance : les hébergements et certaines expériences se remplissent rapidement et les prix augmentent à mesure que les dates approchent.",
        },
      ],
    },

    {
      type: "p",
      text:
        "Il n'existe pas de mauvaise saison pour découvrir Rio, seulement des ambiances différentes. Choisissez la vôtre selon vos priorités, et la ville s'adaptera au reste.",
    },
  ],
};
