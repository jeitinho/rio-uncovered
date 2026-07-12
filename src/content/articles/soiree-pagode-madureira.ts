import type { Article } from "../types";
import hero from "@/assets/article-soiree-pagode-madureira-rio.jpg";
import quiosque from "@/assets/quiosque-moise-madureira.jpg";

export const article: Article = {
  slug: "soiree-pagode-madureira",
  title: "Une soirée pagode à Madureira : une autre façon de découvrir Rio",
  titleAccent: "pagode",
  description:
    "Récit d'une soirée pagode au Quiosque Moise, dans le Parque Madureira. Une immersion 100 % locale, loin de la Zona Sul, pour vivre le vrai Rio des cariocas.",
  category: "culture",
  tags: ["Madureira", "Pagode", "Rio de Janeiro", "Culture", "Samba", "Vie nocturne", "Cariocas"],
  date: "2026-07-12",
  author: "lili",
  hero: hero,
  heroAlt:
    "Roda de pagode au coucher du soleil à Madureira, Rio de Janeiro — musiciens au cavaquinho et au pandeiro entourés du public qui chante",
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
      text: "Quand on pense à Rio de Janeiro, on imagine souvent Copacabana, Ipanema ou encore le Christ Rédempteur. Pourtant, il suffit de s'éloigner un peu de la Zona Sul pour découvrir une facette beaucoup plus authentique de la ville. C'est exactement ce que j'ai vécu lors d'une soirée à Madureira, dans la zone nord de Rio.",
    },

    { type: "h2", text: "Aller à Madureira depuis la Zona Sul" },
    {
      type: "p",
      text: "Madureira se situe à environ 40 minutes en voiture de la Zona Sul lorsqu'il n'y a pas de circulation. Le soir, le trafic est généralement assez fluide, ce qui permet de s'y rendre facilement. Pour cette sortie, j'ai choisi de prendre un Uber Moto, un moyen de transport très pratique, rapide et économique, très utilisé par les cariocas.",
    },
    {
      type: "bonasavoir",
      title: "Se déplacer intelligemment",
      text:
        "L'Uber (voiture ou moto) reste le moyen le plus simple d'arriver et de rentrer d'une soirée à Madureira. Prévoyez la connexion 4G et un téléphone chargé, et évitez d'exhiber objets de valeur et bijoux.",
    },

    { type: "h2", text: "Le Quiosque Moise, au cœur du Parque Madureira" },
    {
      type: "p",
      text: "Je me suis rendue au Quiosque Moise, situé dans le Parque Madureira. Tout autour, plusieurs kiosques organisent également des rodas de pagode, ce qui crée une ambiance unique où la musique résonne un peu partout dans le parc. Il est même possible de passer d'un pagode à un autre au fil de la soirée, selon l'ambiance qui vous attire le plus.",
    },
    {
      type: "image",
      src: quiosque,
      alt: "Le Quiosque Moise dans le Parque Madureira, avec sa fresque murale colorée et ses tables en bois",
      caption: "Le Quiosque Moise, dans le Parque Madureira.",
    },

    { type: "h2", text: "Le pagode, une musique et une fête" },
    {
      type: "p",
      text: "J'y suis allée avec des amis locaux, dont l'un jouait des percussions dans ce qu'on appelle un pagode. Le pagode est un style de musique brésilienne dérivé de la samba, mais c'est aussi le nom donné aux événements où des musiciens jouent en live pendant que le public chante, danse et profite de l'ambiance. En portugais, on dit tocar pour dire que l'on joue d'un instrument, et c'était un vrai plaisir de le voir mettre l'ambiance tout au long de la soirée.",
    },

    { type: "h2", text: "Un dimanche 100 % local" },
    {
      type: "p",
      text: "J'y suis allée un dimanche, un jour où l'ambiance est particulièrement conviviale. Dès mon arrivée, j'ai tout de suite senti que je vivais une expérience différente de celles que l'on retrouve habituellement dans les quartiers les plus connus de Rio. Ici, l'atmosphère est plus locale, plus spontanée. Beaucoup de personnes se connaissent, reviennent chaque semaine et connaissent les chansons par cœur. Tout le monde chante, danse et vit chaque morceau avec une énergie incroyable. On a vraiment l'impression de partager un moment du quotidien des cariocas.",
    },
    {
      type: "p",
      text: "Le public est très varié. On y croise des familles avec leurs enfants, des groupes d'amis, des couples et des personnes de tous les âges. Lors de ma visite, je n'ai d'ailleurs rencontré aucun touriste. L'ambiance était 100 % locale, avec uniquement des habitants du quartier ou des personnes venues des environs pour profiter de la soirée. C'est justement ce qui fait tout le charme de cette expérience : on découvre un Rio bien différent de celui des cartes postales, loin des circuits touristiques.",
    },
    {
      type: "quote",
      text: "Même si vous ne savez pas danser la samba, c'est presque impossible de rester assis.",
    },
    {
      type: "p",
      text: "La musique est tellement entraînante qu'elle donne naturellement envie de bouger. Et ce que j'ai adoré, c'est la gentillesse des gens. Les cariocas sont très accueillants et n'hésitent pas à vous montrer quelques pas avec le sourire. Personne ne juge votre niveau : le plus important est simplement de passer un bon moment.",
    },

    { type: "h2", text: "Entrée libre, ambiance sans chichis" },
    {
      type: "p",
      text: "L'entrée est gratuite et il n'est même pas obligatoire de consommer. Vous pouvez tout à fait apporter vos propres boissons si vous le souhaitez. Pour ma part, j'ai choisi de boire une Brahma, l'une des bières les plus populaires au Brésil. Une façon simple de vivre cette expérience comme les locaux. En revanche, lors de certaines grandes fêtes qui se prolongent après 22 h, les conditions d'accès peuvent être différentes.",
    },
    {
      type: "bonasavoir",
      title: "Ce qu'il faut savoir avant d'y aller",
      text:
        "Entrée gratuite, consommation non obligatoire, aucun code vestimentaire — short et tongs y sont aussi bienvenus qu'une tenue plus habillée. Personne n'y prête attention, on vient pour la musique.",
    },

    { type: "h2", text: "Après le pagode, la rue prend le relais" },
    {
      type: "p",
      text: "Le pagode se termine généralement aux alentours de 22 h. Mais la soirée, elle, est loin d'être terminée. En se promenant dans les rues voisines, on découvre d'autres pagodes, des bars où résonne du funk et une ambiance festive qui continue jusque tard dans la nuit.",
    },
    {
      type: "p",
      text: "Les rues sont également remplies de vendeurs ambulants. On y trouve de tout : des burgers, des brochettes, du churrasco, des boissons fraîches et de nombreuses spécialités locales. C'est vivant, convivial et cela fait complètement partie de l'expérience.",
    },

    { type: "h2", text: "Ce que je retiens" },
    {
      type: "p",
      text: "Cette soirée m'a rappelé qu'il ne faut pas hésiter à sortir de la Zona Sul pour découvrir un autre visage de Rio. C'est souvent en explorant des quartiers comme Madureira que l'on vit les expériences les plus mémorables et que l'on découvre la culture carioca sous un angle plus authentique.",
    },
    {
      type: "conseil",
      title: "Le conseil Jeitinho",
      text:
        "Allez-y accompagné de personnes qui connaissent les lieux — amis locaux ou habitués. Ils sauront vous guider, vous emmener aux bons kiosques et vous permettront de profiter pleinement de l'expérience, en toute tranquillité.",
    },
    {
      type: "p",
      text: "Si vous recherchez une immersion authentique dans la culture brésilienne, loin des itinéraires les plus classiques, alors une soirée pagode à Madureira est une expérience que je vous recommande sans hésiter. Vous découvrirez un Rio vivant, chaleureux et profondément local, celui que les cariocas vivent au quotidien. C'est sans aucun doute l'un des meilleurs moyens de comprendre l'âme de la ville.",
    },

    {
      type: "faq",
      items: [
        {
          q: "Où se trouve le Quiosque Moise ?",
          a: "Il se trouve à l'intérieur du Parque Madureira, dans la zone nord de Rio. Plusieurs kiosques voisins organisent aussi leurs propres rodas de pagode, ce qui permet de passer de l'un à l'autre au fil de la soirée.",
        },
        {
          q: "Comment aller à Madureira depuis la Zona Sul ?",
          a: "Comptez environ 40 minutes en voiture sans circulation. Le soir, l'Uber (voiture ou moto) reste le moyen le plus simple et le plus utilisé, y compris par les cariocas.",
        },
        {
          q: "Faut-il payer pour entrer au pagode ?",
          a: "Non. L'entrée au Quiosque Moise est gratuite et la consommation n'est pas obligatoire. Vous pouvez même apporter vos propres boissons. Certaines grandes fêtes après 22 h peuvent toutefois avoir des conditions différentes.",
        },
        {
          q: "Est-ce que je dois savoir danser la samba ?",
          a: "Absolument pas. Personne ne juge votre niveau. Les cariocas sont très accueillants et n'hésitent pas à vous montrer quelques pas. L'essentiel est de profiter de la musique.",
        },
        {
          q: "C'est adapté à un premier séjour à Rio ?",
          a: "Oui, à condition d'y aller accompagné de locaux ou d'habitués qui connaissent les lieux. C'est l'une des expériences les plus marquantes pour comprendre ce qu'est vraiment la culture carioca.",
        },
      ],
    },
  ],
};
