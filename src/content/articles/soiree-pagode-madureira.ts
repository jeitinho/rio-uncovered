import type { Article } from "../types";
import hero from "@/assets/hero-blog.jpg";

export const article: Article = {
  slug: "soiree-pagode-madureira",
  title: "Une soirée pagode à Madureira : une autre façon de découvrir Rio",
  titleAccent: "pagode",
  description:
    "Récit d'une soirée pagode à Madureira, loin de la Zona Sul. Une autre façon — plus vraie, plus carioca — de découvrir Rio de Janeiro.",
  category: "culture",
  tags: ["Madureira", "Pagode", "Rio de Janeiro", "Culture", "Samba", "Vie nocturne", "Cariocas"],
  date: "2026-07-12",
  author: "lili",
  hero,
  heroAlt: "Roda de pagode dans une rue de Madureira, quartier nord de Rio de Janeiro, en soirée",
  featured: true,
  relatedServices: [
    {
      label: "Une soirée locale avec Jeitinho",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description:
        "On vous emmène là où vont les cariocas — pagode à Madureira, samba à Pedra do Sal, bar de quartier à Vila Isabel.",
    },
    {
      label: "Découvrir la vraie culture carioca",
      href: "https://www.jeitinho.fr",
      description:
        "Musique, quartiers, rencontres : nos expériences pour vivre Rio autrement.",
    },
  ],
  sections: [
    {
      type: "p",
      text: "Il y a des soirées à Rio dont on parle pendant des semaines et dont on ne trouve pourtant aucune trace dans les guides. La mienne, c'était un mercredi soir à Madureira. Pas Copacabana, pas Ipanema, pas Lapa. Madureira. Un quartier de la Zona Norte que la plupart des touristes ne verront jamais — et qui est, sans doute, l'un des cœurs les plus vivants de la culture carioca.",
    },
    {
      type: "p",
      text: "Je suis arrivée à Rio il y a quelques mois, avec le regard un peu naïf d'une expatriée fraîchement débarquée. Je pensais connaître la samba parce que j'avais vu des vidéos. Je croyais avoir compris la ville parce que j'avais marché à Ipanema. Cette soirée à Madureira m'a remise à ma place — dans le bon sens.",
    },

    { type: "h2", text: "Madureira, un autre Rio" },
    {
      type: "p",
      text: "Madureira, c'est le nord. Loin des plages, loin des cartes postales. Un quartier populaire, dense, commerçant, traversé par le train et par une énergie que la Zona Sul n'a pas. Ici, on ne vient pas pour voir : on vient pour vivre quelque chose.",
    },
    {
      type: "p",
      text: "C'est ici qu'est né une bonne partie de la samba moderne. C'est ici que battent Portela et Império Serrano, deux des plus vieilles écoles de samba de Rio. C'est ici, aussi, que le pagode — cette samba plus intime, jouée en cercle autour d'une table — se pratique comme une religion.",
    },
    {
      type: "conseil",
      title: "Le conseil Jeitinho",
      text:
        "N'y allez pas seule un premier soir. Pas par peur — le quartier vit, il n'est pas dangereux quand on y va bien — mais parce que Madureira se comprend mieux accompagnée. Un local, un ami carioca, un guide francophone : quelqu'un qui connaît les codes.",
    },

    { type: "h2", text: "Arriver là-bas" },
    {
      type: "p",
      text: "Depuis la Zona Sul, comptez entre 45 minutes et une heure en Uber selon la circulation. Le métro et le train fonctionnent aussi, mais après une certaine heure, l'Uber reste plus simple pour rentrer.",
    },
    {
      type: "p",
      text: "On m'avait dit : \"habille-toi normalement, sans bijoux, sans téléphone dernier cri à la main.\" C'est le conseil qu'on répète pour à peu près tout Rio, et il tient ici aussi. Rien de plus.",
    },
    {
      type: "bonasavoir",
      title: "Se déplacer intelligemment",
      text:
        "L'Uber reste le moyen le plus sûr et le plus simple d'arriver et de rentrer d'une soirée à Madureira. Prévoyez la connexion 4G et un téléphone chargé.",
    },

    { type: "h2", text: "La roda commence" },
    {
      type: "p",
      text: "On s'est retrouvés dans une petite rue, autour d'un bar sans prétention. Une table au milieu, une nappe blanche, des instruments qui s'installent : cavaquinho, pandeiro, tantã, surdo. Pas de scène, pas de sono, pas de lumière tamisée. Juste une table, des musiciens, et la rue tout autour.",
    },
    {
      type: "p",
      text: "Et puis ça commence. Un accord de cavaquinho, une voix qui lance le premier vers, et immédiatement tout le monde chante. Tout le monde. Les gens attablés, ceux qui passent, ceux qui vendent de la bière au coin. Personne ne se lève pour applaudir : on est déjà dedans.",
    },
    {
      type: "quote",
      text: "À Rio, on ne va pas voir un concert de pagode. On y participe.",
      author: "Un carioca croisé ce soir-là",
    },

    { type: "h2", text: "Ce que je n'avais pas compris avant" },
    {
      type: "p",
      text: "Le pagode, ce n'est pas un spectacle. C'est un cercle. Les musiciens ne jouent pas pour un public : ils jouent avec les gens autour. Les chansons sont connues de tout le monde, transmises depuis des générations. Un enfant de dix ans chante les mêmes refrains que sa grand-mère.",
    },
    {
      type: "p",
      text: "Ce soir-là, j'ai compris quelque chose qu'aucun article, aucun documentaire, aucun cours de samba en salle ne m'avait fait sentir : à Rio, la musique n'est pas une distraction. C'est un ciment social. Elle tient les quartiers, les familles, les générations.",
    },
    {
      type: "ul",
      items: [
        "Ce n'est pas un événement touristique — c'est un rituel de quartier.",
        "Les chansons sont un patrimoine partagé, pas un répertoire.",
        "Chanter faux n'a aucune importance. Chanter, oui.",
        "On y boit de la bière fraîche et on y mange ce qui se trouve — pastel, feijoada, boulettes.",
      ],
    },

    { type: "h2", text: "Une autre façon de découvrir Rio" },
    {
      type: "p",
      text: "Rio, c'est la plage d'Ipanema au coucher du soleil. C'est le Pain de Sucre, le Christ, le Sambodrome au Carnaval. Ce sont des choses qu'il faut voir, oui. Mais Rio, c'est aussi Madureira un mercredi soir. C'est un quartier populaire qui chante ensemble pendant que la ville dort ailleurs.",
    },
    {
      type: "p",
      text: "Si vous venez ici pour comprendre la ville et pas juste pour la photographier, il faut, au moins une fois, sortir de la Zona Sul. Aller vers le nord. Écouter. Chanter, mal, mais chanter quand même.",
    },
    {
      type: "conseil",
      title: "L'astuce",
      text:
        "Les meilleures rodas de pagode ne sont pas annoncées sur Google. Elles se transmettent de bouche à oreille — d'où l'intérêt d'être guidé la première fois, puis d'y retourner seul une fois qu'on a les repères.",
    },

    { type: "h2", text: "Ce que je retiens" },
    {
      type: "p",
      text: "Je suis rentrée tard, un peu ébranlée, très heureuse. Je suis arrivée à Rio en pensant que j'allais l'apprendre. Ce soir-là, à Madureira, c'est elle qui m'a appris quelque chose : qu'on ne visite pas Rio, on s'y laisse traverser.",
    },
    {
      type: "p",
      text: "Si vous préparez un voyage ici, gardez-vous une soirée. Une seule. Pour ça.",
    },

    {
      type: "faq",
      items: [
        {
          q: "Madureira est-il dangereux le soir ?",
          a: "Le quartier vit énormément le soir, notamment autour des lieux de pagode. Il n'est pas dangereux en soi si on y va accompagné, en Uber, sans étalage d'objets de valeur. Comme partout à Rio, on adapte son comportement au contexte.",
        },
        {
          q: "Faut-il parler portugais pour aller à une roda de pagode ?",
          a: "Non. Comprendre les paroles enrichit l'expérience, mais l'énergie de la roda se ressent sans les mots. Un accompagnement francophone la première fois aide surtout à comprendre les codes du lieu.",
        },
        {
          q: "Quand ont lieu les rodas de pagode à Madureira ?",
          a: "Il y a des rodas presque tous les soirs, avec des rendez-vous plus intenses en semaine (mercredi, jeudi) et le dimanche après-midi. Les dates changent souvent — d'où l'intérêt de passer par un local ou un guide.",
        },
        {
          q: "C'est une expérience adaptée à un premier séjour à Rio ?",
          a: "Oui, à condition d'être accompagné et d'avoir déjà pris ses marques dans la ville. C'est même l'une des expériences les plus marquantes pour comprendre ce qu'est vraiment la culture carioca.",
        },
      ],
    },
  ],
};
