import type { Article } from "../types";
import hero from "@/assets/article-carnaval.jpg";

export const article: Article = {
  slug: "billets-sambodromo-rio",
  title: "Sambódromo : comment avoir des billets et où s'asseoir",
  titleAccent: "Sambódromo",
  description:
    "Billetterie officielle, revendeurs, secteurs (arquibancadas, frisas, cadeiras, camarotes), nuits à privilégier : le guide pratique pour assister au défilé des écoles de samba au Sambódromo de Rio.",
  category: "carnaval",
  tags: ["Sambódromo", "Carnaval", "défilé samba", "Rio de Janeiro"],
  date: "2026-09-02",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Danseuses de samba en costumes rouges au Carnaval de Rio",
  featured: false,
  guide: true,
  popular: false,

  relatedServices: [
    {
      label: "Billets Sambódromo accompagnés",
      href: "https://jeitinho.fr/trouver-un-jeitinho",
      description:
        "On vous aide à choisir la bonne nuit, le bon secteur et à sécuriser vos billets pour le défilé au Sambódromo.",
    },
  ],

  sections: [
    {
      type: "p",
      text: "Notre article général sur <a href=\"/blog/preparer-carnaval-rio\">le Carnaval de Rio</a> couvre les blocos, les camarotes et l'organisation globale du séjour. Ici, on se concentre sur un seul sujet, en profondeur : comment obtenir des billets pour le défilé au Sambódromo, et où s'asseoir selon ce que vous cherchez.",
    },

    { type: "h2", text: "Le Sambódromo, c'est quoi exactement ?" },
    {
      type: "p",
      text: "Le Sambódromo — officiellement le Sambódromo da Marquês de Sapucaí — est l'avenue-stade construite pour le défilé des écoles de samba, en plein centre de Rio, entre les quartiers de Praça Onze et Cidade Nova. Ce n'est pas une salle de spectacle mais une longue avenue bordée de tribunes en béton sur environ 700 mètres, où chaque école défile avec ses chars, ses percussions (la bateria) et ses milliers de passistas costumés. On vient y voir un spectacle, pas un concert : le défilé se déroule en continu, école après école, toute la nuit.",
    },

    { type: "h2", text: "Le défilé des écoles du Groupe Spécial" },
    {
      type: "p",
      text: "Le Groupe Spécial (Grupo Especial) réunit les meilleures écoles de samba de Rio, celles qu'on voit à la télévision du monde entier. Leur défilé se déroule sur deux à trois nuits consécutives selon les années, généralement le dimanche et le lundi du Carnaval (parfois complétées par une troisième nuit), chaque école disposant d'environ 65 à 70 minutes pour dérouler son thème devant un jury. C'est l'événement le plus demandé, le plus cher et le plus spectaculaire du Sambódromo — et celui auquel pense la plupart des visiteurs quand on parle de « billets pour le Carnaval ».",
    },
    {
      type: "p",
      text: "D'autres soirées existent en dehors du Grupo Especial : le défilé des écoles mirins (enfants), celui des groupes d'accès (le niveau juste en dessous, souvent samedi), et le défilé des champions le week-end suivant, qui réunit les écoles les mieux classées. Ces soirées sont nettement moins chères et moins courues — une bonne option si le budget ou la disponibilité des billets pour le Grupo Especial pose problème.",
    },

    { type: "h2", text: "Les secteurs du Sambódromo : où s'asseoir" },
    {
      type: "p",
      text: "L'avenue est découpée en secteurs numérotés, répartis des deux côtés de la piste, et le choix du secteur change complètement l'expérience — bien plus que dans un stade classique. Il existe quatre grandes familles de places.",
    },

    { type: "h3", text: "Arquibancadas (tribunes populaires)" },
    {
      type: "p",
      text: "Ce sont des gradins en béton, sans siège individuel assigné dans certains secteurs, où l'on s'assoit côte à côte avec des milliers de Cariocas venus vivre le défilé comme une fête plutôt qu'un spectacle assis. C'est l'option la plus abordable et souvent la plus vivante : on chante, on danse, l'ambiance est chaleureuse. En contrepartie, le confort est sommaire (pensez coussin), et certains secteurs sont plus éloignés de la piste que d'autres — mieux vaut se renseigner sur l'emplacement précis avant d'acheter.",
    },

    { type: "h3", text: "Frisas" },
    {
      type: "p",
      text: "Les frisas sont des places assises au niveau de la piste, juste devant les tribunes, avec une vue frontale sur le défilé — souvent considérées comme le meilleur compromis entre proximité, confort et prix parmi les places « sérieuses ». C'est le secteur que recommande généralement notre équipe pour une première expérience au Sambódromo.",
    },

    { type: "h3", text: "Cadeiras (cadeiras de pista)" },
    {
      type: "p",
      text: "Sièges individuels numérotés, plus confortables, situés en général un peu en hauteur par rapport aux frisas. Bon compromis pour qui veut être assis dans un vrai fauteuil toute la nuit sans payer le tarif d'un camarote.",
    },

    { type: "h3", text: "Camarotes" },
    {
      type: "p",
      text: "Espaces privatifs surélevés, souvent avec open bar, buffet et parfois vue sur scène ou animations DJ — l'option « soirée VIP » plus que « place de spectateur ». On y vient autant pour l'ambiance festive que pour regarder le défilé de près. C'est l'option la plus chère, mais aussi la plus confortable pour une nuit qui dure des heures.",
    },

    {
      type: "conseil",
      title: "Le conseil Jeitinho",
      text: "Pour une première fois, on recommande une frisa ou une cadeira plutôt qu'une arquibancada : vous serez assis, proche de la piste, et vous tiendrez mieux la nuit — le défilé dure de longues heures sans réelle pause. Gardez les arquibancadas pour une ambiance plus populaire si vous êtes déjà à l'aise avec de longues soirées debout ou serré dans la foule.",
    },

    { type: "h2", text: "Quelle nuit choisir ?" },
    {
      type: "p",
      text: "Toutes les nuits ne se valent pas. Les deux (ou trois) nuits du Grupo Especial sont les plus demandées, les plus chères et les plus impressionnantes : c'est là que défilent les grandes écoles historiques, avec les budgets et la préparation les plus importants. C'est aussi la soirée la plus longue — comptez que le défilé s'étend souvent jusqu'au petit matin.",
    },
    {
      type: "p",
      text: "Si votre priorité est le budget ou une soirée plus courte, les défilés des groupes d'accès ou le défilé des champions (le week-end suivant) offrent une ambiance très correcte, un niveau de spectacle sérieux, pour une fraction du prix et du monde.",
    },

    { type: "h2", text: "Comment acheter ses billets" },
    {
      type: "p",
      text: "La billetterie officielle du Grupo Especial est gérée par la LIESA (la ligue des écoles de samba de Rio), qui met en vente les arquibancadas populaires et certaines frisas directement, généralement plusieurs mois avant le Carnaval. Les cadeiras et de nombreux camarotes, eux, sont commercialisés par des agences et sites de billetterie partenaires — les places les plus demandées (frisas centrales, camarotes premium) partent vite.",
    },
    {
      type: "ul",
      items: [
        "Ouverture des ventes : les billets officiels s'ouvrent généralement plusieurs mois avant le Carnaval — les meilleures places (secteurs centraux, frisas) partent en premier.",
        "Agences et revendeurs : pratique pour les voyageurs étrangers sans compte brésilien, mais vérifiez toujours la réputation du vendeur avant de payer.",
        "Prix : ils varient fortement selon le secteur, la nuit choisie et l'avancée de la vente — les arquibancadas populaires restent nettement plus abordables que les frisas, cadeiras et camarotes. Mieux vaut se renseigner sur les tarifs de l'année en cours plutôt que de se fier à d'anciens chiffres.",
        "Délai conseillé : réservez dès que possible, idéalement plusieurs mois à l'avance pour le Grupo Especial — les bonnes places pour les nuits les plus demandées se vendent bien avant le Carnaval lui-même.",
      ],
    },

    {
      type: "aeviter",
      title: "Le piège du marché noir",
      text: "À l'approche du Carnaval, des billets circulent hors circuit officiel — dans la rue, sur les réseaux sociaux, parfois à des prix cassés. Le risque de contrefaçon ou de double-vente est réel, et un billet invalide à l'entrée ne se rembourse pas. Achetez uniquement via la billetterie officielle, une agence reconnue, ou un accompagnement de confiance.",
    },

    { type: "h2", text: "Ce qu'il faut prévoir pour une nuit au Sambódromo" },
    {
      type: "p",
      text: "Le défilé du Grupo Especial n'est pas une soirée de deux heures : plusieurs écoles se succèdent sur une seule nuit, et l'ensemble s'étire souvent jusqu'à l'aube. Autant s'y préparer comme pour un vrai marathon festif plutôt qu'un spectacle classique.",
    },
    {
      type: "ul",
      items: [
        "Prévoyez de tenir la nuit entière : mangez avant d'arriver, hydratez-vous, et ne comptez pas forcément dormir avant le lendemain après-midi.",
        "Habillez-vous léger mais couvrant un minimum : les nuits de février-mars restent chaudes et humides, mais l'attente peut être longue.",
        "Prévoyez du liquide et vos documents dans une pochette sécurisée — la foule est dense aux abords et à la sortie.",
        "Repérez votre secteur et son accès à l'avance : le Sambódromo se rejoint principalement en métro (station Praça Onze), l'accès en voiture est déconseillé.",
        "La sortie en fin de nuit peut être aussi longue que l'entrée : prévoyez de la marge avant tout vol ou transfert le lendemain matin.",
      ],
    },

    {
      type: "bonasavoir",
      title: "Bon à savoir",
      text: "Contrairement aux blocos de rue, gratuits et informels, le Sambódromo est un événement payant, encadré, avec des places assises ou attribuées selon le secteur. C'est un format bien différent — plus proche du spectacle organisé que de la fête de rue — et c'est justement ce qui en fait un moment à part du Carnaval.",
    },

    {
      type: "p",
      text: "Pour l'hébergement pendant ces nuits-là, notre article <a href=\"/blog/loger-a-rio-pour-le-carnaval\">où loger à Rio pour le Carnaval</a> détaille les quartiers les plus pratiques pour rejoindre le Sambódromo et rentrer sans stress une fois le défilé terminé.",
    },

    {
      type: "faq",
      items: [
        {
          q: "Où se trouve le Sambódromo de Rio ?",
          a: "Le Sambódromo da Marquês de Sapucaí se trouve dans le centre de Rio, entre les quartiers de Praça Onze et Cidade Nova. Il se rejoint facilement en métro, station Praça Onze.",
        },
        {
          q: "Quelle est la différence entre arquibancada, frisa, cadeira et camarote ?",
          a: "Les arquibancadas sont des tribunes populaires en gradins, plus abordables mais moins confortables. Les frisas sont des places assises au niveau de la piste, avec une vue frontale — souvent le meilleur compromis. Les cadeiras sont des sièges individuels un peu en hauteur, plus confortables. Les camarotes sont des espaces privatifs surélevés, avec services (open bar, buffet), pour une expérience plus festive que « spectateur ».",
        },
        {
          q: "Où acheter ses billets pour le Sambódromo ?",
          a: "La billetterie officielle du Grupo Especial est gérée par la LIESA, qui vend directement les arquibancadas populaires et certaines frisas. Les cadeiras et de nombreux camarotes passent par des agences partenaires. Évitez tout achat hors circuit officiel ou agence reconnue.",
        },
        {
          q: "Combien de temps à l'avance faut-il réserver ses billets ?",
          a: "Le plus tôt possible : les billets officiels s'ouvrent généralement plusieurs mois avant le Carnaval, et les meilleures places pour les nuits du Grupo Especial partent rapidement.",
        },
        {
          q: "Quelle nuit du Sambódromo choisir ?",
          a: "Les nuits du Grupo Especial (dimanche et lundi, parfois une troisième nuit selon les années) réunissent les plus grandes écoles et sont les plus demandées. Le défilé des champions, le week-end suivant, offre une ambiance très correcte pour un budget et une affluence moindres.",
        },
        {
          q: "Combien de temps dure une nuit de défilé ?",
          a: "Plusieurs écoles se succèdent sur une même nuit, chacune disposant d'environ 65 à 70 minutes. L'ensemble s'étend souvent jusqu'au petit matin — mieux vaut se préparer à une nuit complète plutôt qu'à un spectacle de quelques heures.",
        },
        {
          q: "Faut-il se méfier des billets vendus dans la rue ?",
          a: "Oui. Des billets contrefaits ou déjà utilisés circulent à l'approche du Carnaval. Achetez uniquement via la billetterie officielle, une agence reconnue, ou un accompagnement de confiance.",
        },
      ],
    },

    {
      type: "conseil",
      title: "Le conseil Jeitinho",
      text: "Le Sambódromo se prépare comme un événement à part entière du Carnaval, pas comme une simple sortie parmi d'autres. Choisissez d'abord la nuit et le secteur adaptés à ce que vous cherchez — ambiance populaire, vue confortable ou expérience VIP —, sécurisez vos billets tôt, et organisez votre nuit (repas, transport, sortie) en conséquence. C'est à ce prix que le défilé reste un souvenir plutôt qu'une nuit d'épuisement.",
    },
  ],
};
