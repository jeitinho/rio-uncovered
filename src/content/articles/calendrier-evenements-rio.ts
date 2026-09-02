import type { Article } from "../types";
import hero from "@/assets/article-calendrier-rio.jpg";

export const article: Article = {
  slug: "calendrier-evenements-rio",
  title: "Le calendrier des événements de Rio, mois par mois",
  titleAccent: "mois par mois",
  description:
    "Réveillon, Carnaval, Rock in Rio, Festa Junina, Baile Charme : notre calendrier des grands rendez-vous de Rio de Janeiro pour organiser votre voyage.",
  category: "evenements",
  tags: ["événements", "calendrier", "Carnaval", "Rio de Janeiro"],
  date: "2026-09-02",
  author: "equipe-jeitinho",
  hero,
  heroAlt:
    "Plage de Rio de Janeiro sous un ciel dégagé avec vue sur les montagnes environnantes",
  featured: false,
  guide: true,
  popular: false,

  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://jeitinho.fr/trouver-un-jeitinho",
      description:
        "On vous aide à caler vos dates de voyage selon les événements que vous voulez vivre — ou éviter.",
    },
  ],

  sections: [
    {
      type: "p",
      text:
        "Rio a son propre rythme d'événements, et il vaut mieux le connaître avant de réserver vos billets. Deux rendez-vous dominent l'année et changent complètement le visage de la ville. Autour d'eux, quelques temps forts ponctuels et un rendez-vous hebdomadaire qui, lui, ne rate jamais son créneau.",
    },
    {
      type: "p",
      text:
        "Ce guide reste volontairement factuel : on ne liste que ce qu'on peut vérifier ou qualifier honnêtement, sans inventer un agenda qui n'existe pas. Pour la météo et l'affluence mois par mois, direction notre guide <a href=\"/blog/quand-partir-a-rio\">quand partir à Rio</a> — ici, on se concentre sur les événements.",
    },

    {
      type: "h2",
      text: "Les deux piliers : Réveillon et Carnaval",
    },
    {
      type: "p",
      text:
        "Ce sont, de loin, les deux moments qui transforment le plus la ville — en affluence, en prix, en ambiance. Si l'un des deux fait partie de votre projet de voyage, tout le reste s'organise autour de sa date.",
    },
    {
      type: "h3",
      text: "Le Réveillon (31 décembre)",
    },
    {
      type: "p",
      text:
        "Date fixe, chaque année : le 31 décembre. Des millions de personnes se retrouvent sur la plage de Copacabana pour le plus grand réveillon à ciel ouvert du monde, feux d'artifice et concerts inclus. Notre guide complet détaille comment vivre la soirée sereinement : <a href=\"/blog/reveillon-rio-copacabana\">Réveillon à Copacabana</a>.",
    },
    {
      type: "h3",
      text: "Le Carnaval (dates mobiles, février ou mars)",
    },
    {
      type: "p",
      text:
        "Contrairement au Réveillon, le Carnaval n'a pas de date fixe. Il suit le calendrier liturgique chrétien et tombe donc à des dates différentes chaque année, généralement en février, parfois en mars selon les années. Vérifiez systématiquement les dates exactes de l'édition qui vous concerne avant de réserver quoi que ce soit. Notre guide détaillé : <a href=\"/blog/preparer-carnaval-rio\">préparer son Carnaval à Rio</a>.",
    },
    {
      type: "conseil",
      title: "Le conseil Jeitinho",
      text:
        "Si vous visez le Réveillon ou le Carnaval, réservez votre hébergement plusieurs mois à l'avance. Ce sont les deux périodes où les prix grimpent le plus vite et où les meilleures adresses partent en premier.",
    },

    {
      type: "h2",
      text: "Le calendrier, mois par mois",
    },
    {
      type: "p",
      text:
        "En dehors du Réveillon et du Carnaval, l'agenda événementiel de Rio est plus discret qu'on ne l'imagine. Voici ce qu'on peut affirmer avec certitude, mois par mois — sans surcharger la liste d'événements ponctuels ou locaux qu'on ne peut pas garantir d'une année sur l'autre.",
    },
    {
      type: "h3",
      text: "Janvier",
    },
    {
      type: "p",
      text:
        "L'ambiance du Réveillon déborde sur les premiers jours du mois. Le reste de janvier est calme côté grands événements, la ville profitant surtout de l'été et des plages.",
    },
    {
      type: "h3",
      text: "Février",
    },
    {
      type: "p",
      text:
        "Le Carnaval tombe le plus souvent ce mois-ci (dates mobiles — voir plus haut). Quand c'est le cas, c'est le mois le plus animé et le plus cher de l'année après décembre.",
    },
    {
      type: "h3",
      text: "Mars",
    },
    {
      type: "p",
      text:
        "Certaines années, le Carnaval déborde sur les premiers jours de mars, ou s'y tient entièrement selon le calendrier de l'année. En dehors de ça, le mois marque plutôt la fin progressive de la haute saison.",
    },
    {
      type: "h3",
      text: "Avril à mai",
    },
    {
      type: "p",
      text:
        "Pas de grand événement national identifiable à date fixe. C'est une période plus calme sur le plan événementiel, ce qui en fait un bon moment pour visiter sans avoir à composer avec une ville en pleine effervescence.",
    },
    {
      type: "h3",
      text: "Juin",
    },
    {
      type: "p",
      text:
        "La Festa Junina anime le mois. Héritée des fêtes de la Saint-Jean, elle se traduit à Rio par des fêtes de quartier et des événements organisés un peu partout dans la ville pendant tout le mois, autour du maïs, du feu et des danses traditionnelles comme le quadrille (quadrilha). Le calendrier précis varie selon les quartiers et les organisateurs, il est donc préférable de vérifier l'agenda de l'année en amont.",
    },
    {
      type: "h3",
      text: "Juillet à août",
    },
    {
      type: "p",
      text:
        "Période de vacances scolaires au Brésil comme en France, avec une affluence en légère hausse, mais sans grand événement à date fixe à signaler ici.",
    },
    {
      type: "h3",
      text: "Septembre",
    },
    {
      type: "p",
      text:
        "C'est le mois où se tient Rock in Rio, lorsque le festival a lieu (voir la section dédiée ci-dessous : ce n'est pas un rendez-vous annuel).",
    },
    {
      type: "h3",
      text: "Octobre à décembre",
    },
    {
      type: "p",
      text:
        "Rien de récurrent à date fixe à signaler avant les fêtes de fin d'année, qui montent en puissance en décembre jusqu'au Réveillon du 31.",
    },

    {
      type: "bonasavoir",
      title: "Bon à savoir",
      text:
        "Cette liste ne couvre que les rendez-vous qu'on peut vérifier d'une année sur l'autre. Rio accueille aussi, ponctuellement, des concerts, salons et événements sportifs annoncés au fil de l'année — pensez à vérifier l'agenda de la ville à l'approche de votre voyage.",
    },

    {
      type: "h2",
      text: "Rock in Rio : un rendez-vous, pas un rituel annuel",
    },
    {
      type: "p",
      text:
        "Contrairement au Réveillon ou au Carnaval, Rock in Rio ne se tient pas chaque année à Rio de Janeiro. Depuis sa création en 1985, le festival a connu une périodicité irrégulière, avec parfois plusieurs années d'écart entre deux éditions cariocas, avant un rythme plus rapproché sur les éditions les plus récentes. Quand il a lieu, c'est généralement en septembre, sur plusieurs jours de concerts au Parque Olímpico. Avant de baser un voyage dessus, vérifiez qu'une édition est bien programmée pour l'année qui vous intéresse — notre guide dédié fait le point : <a href=\"/blog/rock-in-rio-guide\">Rock in Rio, le guide</a>.",
    },

    {
      type: "h2",
      text: "Le Baile Charme de Madureira : l'événement de toutes les semaines",
    },
    {
      type: "p",
      text:
        "Il n'a pas de date unique dans l'année, pour la bonne raison qu'il revient chaque semaine. Tous les samedis soir, dès 22h, le Baile Charme investit le Viaduto Negrão de Lima à Madureira, en Zona Norte. C'est le plus grand baile charme du Brésil, reconnu patrimoine culturel immatériel de l'État de Rio de Janeiro depuis 2019. On le mentionne ici parce que, contrairement aux autres rendez-vous de cette page, celui-ci fonctionne quelle que soit la période de votre séjour. On en parle plus en détail dans notre article <a href=\"/blog/25-meilleures-choses-a-faire-rio\">25 meilleures choses à faire à Rio</a>.",
    },

    {
      type: "aeviter",
      title: "À éviter",
      text:
        "Ne calez pas un voyage entier sur une date d'événement sans l'avoir vérifiée sur une source officielle récente — c'est particulièrement vrai pour le Carnaval (dates mobiles) et pour Rock in Rio (périodicité irrégulière).",
    },

    {
      type: "faq",
      items: [
        {
          q: "Quel est le seul événement de Rio à date fixe chaque année ?",
          a:
            "Le Réveillon, le 31 décembre. Le Carnaval, lui, change de dates chaque année selon le calendrier liturgique.",
        },
        {
          q: "Le Carnaval de Rio a-t-il toujours lieu en février ?",
          a:
            "Le plus souvent, mais pas systématiquement : certaines années, il tombe en mars. Vérifiez toujours les dates exactes de l'édition qui vous concerne.",
        },
        {
          q: "Rock in Rio a-t-il lieu tous les ans ?",
          a:
            "Non. Ce n'est pas un festival annuel à Rio de Janeiro : ses éditions se sont succédé de façon irrégulière depuis 1985. Vérifiez qu'une édition est programmée avant d'organiser un voyage autour de l'événement.",
        },
        {
          q: "Peut-on voir un Baile Charme en dehors du Carnaval ou du Réveillon ?",
          a:
            "Oui, c'est même l'un des rares événements de cette page à avoir lieu toutes les semaines : tous les samedis soir à Madureira, quelle que soit la période de l'année.",
        },
        {
          q: "Quand a lieu la Festa Junina à Rio ?",
          a:
            "En juin, avec des fêtes de quartier organisées dans toute la ville. Le calendrier précis varie selon les organisateurs, mieux vaut vérifier l'agenda de l'année de votre séjour.",
        },
      ],
    },

    {
      type: "p",
      text:
        "Deux rendez-vous à ne pas rater si vous visez la ville en effervescence, un troisième à vérifier au cas par cas, et un dernier qui, lui, vous attend tous les samedis soir. De quoi caler votre voyage sur le bon tempo carioca.",
    },
  ],
};
