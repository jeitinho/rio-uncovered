import type { Article } from "../types";
import hero from "@/assets/article-samba-lapa.jpg";

export const article: Article = {
  slug: "samba-a-lapa",
  title: "Samba à Lapa : où vivre la musique vivante de Rio",
  titleAccent: "vivante",
  description:
    "Beco do Rato, Pagode da Garagem, Pedra do Sal : notre guide complet des meilleurs spots de samba et pagode dans le berceau de la nuit carioca.",
  category: "culture",
  tags: [
    "samba Rio de Janeiro",
    "pagode",
    "Lapa",
    "roda de samba",
    "culture carioca",
  ],
  date: "2026-07-11",
  author: "equipe-jeitinho",
  hero,
  heroAlt:
    "Musiciens jouant du cavaquinho et du surdo lors d'une roda de samba de rue à Lapa, Rio de Janeiro",
  featured: false,
  guide: true,
  popular: false,

  relatedServices: [
    {
      label: "Expériences Jeitinho",
      href: "https://jeitinho.fr/experiences",
      description:
        "Accès privilégié aux meilleures rodas de samba, réservations et accompagnement local.",
    },
  ],

  sections: [
    {
      type: "p",
      text:
        "Le samba et le pagode sont bien plus que des styles musicaux : c'est une tradition, un mode de vie. Nés dans les quartiers populaires, ils rassemblent, racontent des histoires et font vibrer Rio depuis près d'un siècle, nulle part avec autant d'intensité qu'à <a href=\"/blog/lapa-guide-complet\">Lapa</a>.",
    },
    {
      type: "p",
      text:
        "Ce guide n'est pas une simple présentation musicale. C'est ce qu'on dirait à un ami curieux : où s'installer, quand y aller, comment reconnaître un bon groupe, et comment se laisser porter sans se sentir perdu.",
    },

    {
      type: "h2",
      text: "Samba et pagode : quelle différence ?",
    },
    {
      type: "p",
      text:
        "Le samba est le cœur battant de la culture brésilienne. Plus traditionnel, il vient des écoles de samba et des rodas de rue. Les instruments comme le surdo, le repique, le tamborim et le cavaquinho donnent un rythme énergique et une richesse percussive unique, pensée pour faire danser une foule entière en même temps.",
    },
    {
      type: "p",
      text:
        "Le pagode est né dans les années 1980 à Rio, en marge des écoles de samba traditionnelles. Plus moderne et intime, il est en général joué en petits groupes avec des instruments comme le tantã, le pandeiro, le banjo et le cavaquinho, et des paroles qui parlent du quotidien, de l'amour et de la vie plutôt que de grandes fresques collectives.",
    },
    {
      type: "conseil",
      title: "Le conseil Jeitinho",
      text:
        "Pour le samba : arrivez tard pour profiter de l'ambiance à son comble. Pour le pagode : arrivez tôt, les meilleures places partent vite, souvent le dimanche après-midi, un créneau très prisé des cariocas.",
    },

    {
      type: "h2",
      text: "Les meilleurs spots samba et pagode",
    },

    {
      type: "h3",
      text: "Beco do Rato — Lapa",
    },
    {
      type: "p",
      text:
        "Institution depuis plus de 20 ans, nichée dans une ruelle discrète en plein cœur de Lapa. Samba de roda authentique, ambiance de rue et public fidèle, entre habitués et curieux de passage. Un classique de tous les jours, dès 21h.",
    },

    {
      type: "h3",
      text: "Pagode da Garagem — Lapa",
    },
    {
      type: "p",
      text:
        "Référence du pagode carioca, dans une ambiance de quartier bien plus intime que Beco do Rato. Musiciens talentueux et énergie garantie jusqu'au petit matin. Tous les jours, dès 22h.",
    },

    {
      type: "h3",
      text: "Samba da Pedra do Sal — Saúde",
    },
    {
      type: "p",
      text:
        "Sur le berceau historique du samba, au cœur de la Pedra do Sal, un ancien site lié à l'histoire afro-brésilienne du port de Rio. Gratuit, populaire et chargé d'histoire, tous les lundis dès 19h — probablement le rendez-vous le plus symbolique de cette liste.",
    },

    {
      type: "h3",
      text: "Samba do Xoxó — Vidigal",
    },
    {
      type: "p",
      text:
        "Samba de roda avec une vue imprenable sur Rio, dans les hauteurs de Vidigal. Ambiance unique au coucher du soleil, tous les dimanches dès 17h : prévoyez d'arriver en avance pour profiter de la lumière autant que de la musique.",
    },

    {
      type: "h3",
      text: "Pagode chez Kauai — Gigoia (Barra da Tijuca)",
    },
    {
      type: "p",
      text:
        "Pagode en plein air dans un cadre paradisiaque, convivial, ensoleillé et avec vue sur le canal de l'Ilha da Gigoia. Un rendez-vous plus détendu et familial que les adresses de Lapa. Les dimanches dès 15h.",
    },

    {
      type: "bonasavoir",
      title: "Bon à savoir",
      text:
        "Le samba et le pagode rassemblent toutes les générations, des enfants aux grands-parents. Chantez, dansez, respectez les artistes et profitez de l'instant. Ici, tout le monde est le bienvenu, quel que soit son niveau de portugais ou de danse.",
    },

    {
      type: "h2",
      text: "Comment profiter au maximum de la soirée",
    },
    {
      type: "ol",
      items: [
        "Arrivez tard pour le samba, afin de sentir l'ambiance monter et profiter du pic de la soirée, généralement après minuit.",
        "Arrivez tôt pour le pagode, les meilleures places partent vite, surtout le dimanche après-midi.",
        "Installez-vous, commandez une boisson, relaxez et laissez-vous porter par le rythme plutôt que de chercher à comprendre toutes les paroles.",
        "Respectez et partagez : saluez les musiciens, participez aux chœurs et vibrez ensemble — c'est exactement ce qui rend une roda de samba magique.",
      ],
    },

    {
      type: "aeviter",
      title: "À éviter",
      text:
        "Certains lieux se déroulent en extérieur : prévoyez un anti-moustique, surtout pour les événements en soirée près de la lagune ou du canal, comme à Gigoia. Évitez également d'arriver les mains vides à une roda gratuite comme celle de la Pedra do Sal : un petit billet glissé dans le chapeau qui circule reste toujours apprécié.",
    },

    {
      type: "h2",
      text: "Lapa, quartier de nuit — le contexte",
    },
    {
      type: "p",
      text:
        "Impossible de parler de samba sans parler du quartier lui-même. Sous les Arcos da Lapa, l'ancien aqueduc devenu symbole de la vie nocturne carioca, les rues se remplissent chaque soir de bars, de rodas improvisées et de groupes qui jouent parfois directement sur le trottoir. Pour comprendre l'ensemble de l'offre nocturne du quartier au-delà du samba, consultez notre guide complet de <a href=\"/blog/lapa-guide-complet\">Lapa</a> et notre panorama de la <a href=\"/blog/comprendre-la-nuit-carioca\">nuit carioca</a>.",
    },

    {
      type: "h2",
      text: "Le mot du jour : roda de samba",
    },
    {
      type: "p",
      text:
        "Vous entendrez souvent « Hoje tem roda de samba ? » (il y a une roda de samba ce soir ?). Une roda de samba est un cercle de musiciens jouant du samba en live, généralement assis, avec le public debout tout autour — l'une des expériences les plus authentiques de Rio, gratuite ou presque dans la majorité des cas.",
    },

    {
      type: "faq",
      items: [
        {
          q: "Le samba de la Pedra do Sal est-il vraiment gratuit ?",
          a:
            "Oui, cet événement historique et populaire du lundi soir est gratuit et accessible à tous, dans le lieu considéré comme le berceau du samba carioca.",
        },
        {
          q: "Quelle est la différence entre Lapa et Madureira pour le samba et le pagode ?",
          a:
            "Lapa concentre l'ambiance la plus touristique et festive, ouverte tous les soirs, tandis que des quartiers comme Madureira offrent une expérience plus locale et traditionnelle, notamment lors des rodas de pagode du week-end.",
        },
        {
          q: "Faut-il réserver pour assister à une roda de samba ?",
          a:
            "Certains événements sont gratuits et en accès libre, d'autres se font sur réservation, notamment pour les meilleures places. Contactez Jeitinho pour connaître les modalités selon la soirée choisie.",
        },
        {
          q: "Le pagode se joue-t-il uniquement le dimanche ?",
          a:
            "Non, mais les meilleurs pagodes ont souvent lieu le dimanche après-midi, un moment traditionnel de convivialité pour de nombreux cariocas.",
        },
        {
          q: "Quelle tenue porter pour une roda de samba à Lapa ?",
          a:
            "Une tenue simple et confortable suffit : short, robe légère ou jean, chaussures dans lesquelles vous pouvez danser. L'ambiance est décontractée, pas du tout habillée.",
        },
        {
          q: "Peut-on danser sans savoir samba ?",
          a:
            "Oui, largement. Personne ne juge et l'énergie collective porte naturellement les débutants. C'est d'ailleurs souvent le meilleur moment pour se lancer.",
        },
      ],
    },

    {
      type: "p",
      text:
        "Vivre une soirée samba ou pagode à Lapa, c'est toucher du doigt l'âme la plus profonde de Rio. Installez-vous, commandez une bière, et laissez-vous porter par le rythme.",
    },
  ],
};
