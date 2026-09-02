import type { Article } from "../types";
import hero from "@/assets/article-randonnee-dois-irmaos.jpg";

export const article: Article = {
  slug: "randonnee-pedra-da-gavea",
  title: "Pedra da Gávea : la randonnée la plus spectaculaire de Rio",
  titleAccent: "Pedra da Gávea",
  description:
    "Altitude, durée, passage à corde fixe, sécurité et guide obligatoire ou non : notre guide complet et honnête sur la randonnée de la Pedra da Gávea, la plus difficile et la plus impressionnante de Rio de Janeiro.",
  category: "randonnees",
  tags: ["randonnée", "Pedra da Gávea", "Tijuca", "Rio de Janeiro"],
  date: "2026-09-02",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Vue panoramique depuis un sommet de la Zona Sul de Rio de Janeiro",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Trouver un Jeitinho",
      href: "https://jeitinho.fr/trouver-un-jeitinho",
      description:
        "On vous met en relation avec un guide certifié pour la Pedra da Gávea, seule façon sérieuse d'aborder cette randonnée.",
    },
  ],
  sections: [
    {
      type: "p",
      text: "Il y a les randonnées de Rio qu'on peut se permettre d'improviser, et il y a la Pedra da Gávea. Ce sommet qui domine São Conrado et la Barra da Tijuca n'est pas une simple montée avec une belle vue à l'arrivée : c'est la randonnée la plus exigeante et la plus risquée de la ville, celle où l'à-peu-près n'a pas sa place.",
    },
    {
      type: "p",
      text: "Ce guide n'est pas là pour vous vendre du rêve à tout prix. C'est ce qu'on dirait à un proche en forme, motivé, mais qui n'a jamais mis les pieds sur ce sentier : ce que c'est vraiment, ce que ça demande, et pourquoi on ne s'y engage jamais à la légère.",
    },

    { type: "h2", text: "Comprendre la Pedra da Gávea" },
    {
      type: "p",
      text: "La Pedra da Gávea est un immense monolithe de granit qui culmine à un peu plus de 840 mètres d'altitude, dans le parc national de la Tijuca, juste au-dessus de São Conrado et de la Barra da Tijuca. C'est l'un des sommets qui plongent le plus directement dans l'océan au monde, ce qui explique à la fois sa notoriété et la puissance du panorama qu'on y trouve.",
    },
    {
      type: "p",
      text: "Contrairement à des randonnées urbaines plus douces comme celle des <a href=\"/blog/randonnee-dois-irmaos\">Dois Irmãos</a>, la Pedra da Gávea n'est pas une balade sportive. C'est une véritable ascension, avec un terrain accidenté sur la majeure partie du parcours et un passage final qui relève de l'escalade facile plus que de la marche.",
    },

    {
      type: "conseil",
      title: "Le conseil Jeitinho",
      text: "Si vous hésitez entre les Dois Irmãos et la Pedra da Gávea pour une première randonnée à Rio, commencez par les Dois Irmãos. La Pedra da Gávea se mérite, se prépare et surtout, ne se tente jamais sur un coup de tête.",
    },

    { type: "h2", text: "Pedra da Gávea vs Dois Irmãos : un niveau totalement différent" },
    {
      type: "p",
      text: "On nous pose souvent la question en comparant les deux : est-ce que c'est comme les Dois Irmãos, mais un peu plus haut ? Non. Les Dois Irmãos restent une randonnée accessible, sur un sentier balisé, sans passage technique. La Pedra da Gávea implique un dénivelé bien plus important, un terrain irrégulier sur presque tout le trajet, et surtout une section finale d'escalade exposée qu'on ne retrouve sur aucune autre randonnée populaire de la ville.",
    },
    {
      type: "p",
      text: "Autrement dit : la Pedra da Gávea n'est pas une version « plus dure » des Dois Irmãos, c'est une activité d'une autre nature, qui demande une préparation physique réelle et un encadrement professionnel.",
    },

    { type: "h2", text: "Le sentier : distance, dénivelé et durée" },
    {
      type: "p",
      text: "L'aller-retour représente environ 7 km, pour un dénivelé positif d'environ 800 mètres. Sur le terrain, des randonneurs bien entraînés bouclent l'ascension en 2h30 à 3h de marche pure ; comptez plutôt 4 heures si votre rythme est plus tranquille. En intégrant le trajet jusqu'au départ du sentier, les pauses et le passage technique final, une sortie organisée occupe généralement une bonne partie de la journée, parfois jusqu'à 7 ou 8 heures.",
    },
    {
      type: "bonasavoir",
      title: "Bon à savoir",
      text: "Le parc national de la Tijuca impose des horaires stricts sur ce sentier : il n'est généralement pas permis d'entamer la montée après le début d'après-midi, afin que tout le monde ait le temps de redescendre avant la tombée de la nuit. Partez donc toujours tôt.",
    },

    { type: "h2", text: "La Carrasqueira : le passage à corde fixe qui change tout" },
    {
      type: "p",
      text: "C'est la partie qui distingue vraiment la Pedra da Gávea de toutes les autres randonnées de Rio : la Carrasqueira, une paroi rocheuse d'une trentaine de mètres à franchir juste avant le sommet. Le passage se fait à l'aide de chaînes fixées dans la roche et de planches de bois installées aux endroits les plus exposés, sur un terrain où l'on grimpe autant qu'on marche.",
    },
    {
      type: "p",
      text: "L'exposition y est réelle : ce n'est ni large, ni sécurisé comme une via ferrata classique, et une chute à cet endroit peut avoir des conséquences graves. C'est précisément ce passage, plus que la longueur ou le dénivelé du sentier, qui fait de la Pedra da Gávea une randonnée à part.",
    },
    {
      type: "aeviter",
      title: "À ne jamais faire",
      text: "Ne tentez jamais la Carrasqueira sans guide, sans corde et sans expérience de ce type de terrain, même si vous vous sentez à l'aise en randonnée. Des accidents graves, dont certains mortels, sont déjà survenus sur ce sentier, notamment sur cette section.",
    },

    { type: "h2", text: "Faut-il un guide ? La question qui compte vraiment" },
    {
      type: "p",
      text: "Un guide n'est pas exigé par la loi pour accéder au sentier. Dans les faits, c'est une distinction presque théorique : le taux d'accidents sur ce parcours est nettement plus élevé que sur les autres randonnées populaires de Rio, précisément parce que trop de visiteurs sous-estiment la Carrasqueira ou s'y engagent sans corde et sans expérience.",
    },
    {
      type: "ul",
      items: [
        "Un guide certifié (Cadastur) connaît le terrain, la météo locale et sait quand faire demi-tour si les conditions ne sont pas réunies.",
        "Il apporte le matériel adapté au passage technique (corde, baudrier si nécessaire) et sait l'utiliser correctement.",
        "Il connaît les variantes du sentier, parfois mal balisées, où des randonneurs isolés se sont déjà égarés.",
        "Il peut réagir en cas de brouillard soudain, fréquent en altitude sur ce sommet.",
      ],
    },
    {
      type: "aeviter",
      title: "À éviter",
      text: "Ne partez jamais seul, ni en petit groupe sans expérience, sur la Pedra da Gávea. Ce n'est pas une question de prudence excessive : c'est la principale cause des accidents recensés sur ce sentier.",
    },

    { type: "h2", text: "Équipement nécessaire" },
    {
      type: "ul",
      items: [
        "Chaussures de randonnée à crampons, indispensables sur la roche et dans la Carrasqueira.",
        "Au moins 2 litres d'eau, aucun point de ravitaillement n'existant sur le parcours.",
        "Une casquette ou un chapeau, de la crème solaire et un vêtement léger contre le vent au sommet.",
        "Un petit sac à dos souple, qui ne gêne pas les mouvements pendant le passage technique.",
        "Idéalement, un maillot de bain pour profiter d'une baignade en redescendant vers la Barra da Tijuca ou São Conrado.",
      ],
    },

    { type: "h2", text: "Point de départ et accès" },
    {
      type: "p",
      text: "Le sentier démarre du côté de l'Estrada do Sorimã, dans le quartier de la Barra da Tijuca, tout près de la frontière avec São Conrado, à l'intérieur du parc national de la Tijuca. C'est un point de départ assez éloigné du centre et de la Zona Sul touristique, ce qui rend un transport organisé particulièrement pratique pour ne pas perdre de temps le matin.",
    },

    { type: "h2", text: "Le meilleur moment de la journée" },
    {
      type: "p",
      text: "Partez tôt, sans exception. Le brouillard peut envelopper le sommet de la Pedra da Gávea en quelques minutes, réduisant la visibilité à presque rien et rendant le passage de la Carrasqueira encore plus délicat. Une montée matinale maximise vos chances d'un ciel dégagé au sommet et vous laisse toute la marge nécessaire pour redescendre dans de bonnes conditions avant que le parc ne ferme l'accès au sentier.",
    },

    { type: "h2", text: "Ce qu'on voit depuis le sommet" },
    {
      type: "p",
      text: "L'effort est réel, mais la récompense est à la hauteur. Depuis le plateau sommital, la vue englobe São Conrado et sa plage, la Barra da Tijuca qui s'étire à perte de vue, le morro Dois Irmãos et Vidigal en contrebas, une grande partie de la forêt de Tijuca, et par temps très clair, la Serra dos Órgãos au loin. C'est sans doute le point de vue le plus complet sur la Zona Sul et l'ouest de Rio réunis.",
    },

    { type: "h2", text: "Une sortie type avec guide" },
    {
      type: "ol",
      items: [
        "6h30 — Rendez-vous et transfert vers l'Estrada do Sorimã.",
        "7h30 — Début de la montée, briefing sécurité par le guide.",
        "9h30-10h30 — Approche de la Carrasqueira, mise en place de la corde.",
        "10h30-11h — Franchissement du passage technique et arrivée au sommet.",
        "11h-12h — Pause, panorama et photos au sommet.",
        "12h-14h — Descente, plus prudente encore que la montée sur les sections rocheuses.",
        "14h-15h — Retour au point de départ, éventuelle baignade pour se rafraîchir.",
      ],
    },

    { type: "h2", text: "Organiser votre ascension avec Jeitinho" },
    {
      type: "p",
      text: "Pour une randonnée de ce niveau, l'accompagnement n'est pas un confort, c'est une condition. Chez Jeitinho, nous mettons en relation les voyageurs avec des guides de montagne certifiés, habitués à la Pedra da Gávea, qui adaptent le rythme et le matériel à votre niveau réel et savent annuler ou reporter la sortie si les conditions météo ne sont pas favorables.",
    },
    {
      type: "p",
      text: "→ <a href=\"https://jeitinho.fr/trouver-un-jeitinho\">Trouvez un guide certifié pour votre ascension de la Pedra da Gávea avec Jeitinho</a>.",
    },

    {
      type: "faq",
      items: [
        {
          q: "Quelle est l'altitude de la Pedra da Gávea ?",
          a: "Le sommet culmine à un peu plus de 840 mètres, ce qui en fait l'un des plus hauts sommets urbains du monde à plonger directement dans l'océan.",
        },
        {
          q: "La Pedra da Gávea est-elle plus difficile que les Dois Irmãos ?",
          a: "Oui, nettement. Le dénivelé est plus important, le terrain plus irrégulier sur tout le parcours, et surtout la Pedra da Gávea comporte un passage d'escalade exposé (la Carrasqueira) qu'on ne retrouve pas sur le sentier des Dois Irmãos.",
        },
        {
          q: "Combien de temps dure la randonnée de la Pedra da Gávea ?",
          a: "La marche pure prend généralement entre 2h30 et 4h aller-retour selon le rythme. En comptant le trajet, les pauses et le passage technique, une sortie organisée occupe souvent une bonne partie de la journée.",
        },
        {
          q: "Faut-il obligatoirement un guide pour la Pedra da Gávea ?",
          a: "Ce n'est pas une obligation légale, mais c'est fortement recommandé, voire indispensable dans les faits. Le taux d'accidents sur ce sentier est élevé, en grande partie à cause de randonneurs qui sous-estiment le passage technique final sans encadrement adapté.",
        },
        {
          q: "Qu'est-ce que la Carrasqueira ?",
          a: "C'est le passage le plus délicat de la randonnée : une paroi rocheuse d'environ 30 mètres à franchir juste avant le sommet, équipée de chaînes fixes et de planches de bois, avec une exposition réelle en cas de chute.",
        },
        {
          q: "Cette randonnée est-elle dangereuse ?",
          a: "Oui, c'est la randonnée urbaine la plus risquée de Rio de Janeiro. Des accidents graves, dont certains mortels, s'y sont déjà produits, principalement liés au passage technique final abordé sans expérience ni encadrement. Elle ne doit jamais être tentée seul ou sans préparation.",
        },
        {
          q: "Quel est le meilleur moment de la journée pour y aller ?",
          a: "Tôt le matin, systématiquement. Le brouillard peut couvrir le sommet très rapidement, et un départ matinal laisse la marge nécessaire pour redescendre en toute sécurité avant que l'accès au sentier ne ferme.",
        },
        {
          q: "Où se trouve le point de départ de la randonnée ?",
          a: "Le sentier débute du côté de l'Estrada do Sorimã, entre les quartiers de la Barra da Tijuca et de São Conrado, dans le parc national de la Tijuca.",
        },
        {
          q: "Que voit-on depuis le sommet de la Pedra da Gávea ?",
          a: "Un panorama exceptionnel sur São Conrado, la Barra da Tijuca, le morro Dois Irmãos, Vidigal et une grande partie de la forêt de Tijuca, avec par temps clair la Serra dos Órgãos visible au loin.",
        },
      ],
    },

    {
      type: "p",
      text: "La Pedra da Gávea reste, pour ceux qui s'y préparent correctement et s'y engagent avec un guide, l'une des expériences les plus marquantes de Rio de Janeiro. Mais c'est une expérience qui se mérite et se respecte, jamais une case à cocher entre deux plages.",
    },
  ],
};
