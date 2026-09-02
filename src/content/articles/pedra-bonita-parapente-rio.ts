import type { Article } from "../types";
import hero from "@/assets/article-couchers-soleil-rio.jpg";

export const article: Article = {
  slug: "pedra-bonita-parapente-rio",
  title: "Pedra Bonita : la rando facile et le plus beau vol en parapente de Rio",
  titleAccent: "Pedra Bonita",
  description: "Une marche de 20 minutes, un point de vue sur São Conrado, et la rampe de décollage la plus mythique de Rio. Notre guide complet pour randonner à la Pedra Bonita et réserver un vol en parapente en tandem.",
  category: "randonnees",
  tags: ["Pedra Bonita", "parapente", "São Conrado", "randonnée", "Rio de Janeiro"],
  date: "2026-09-02",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Vue sur la côte de Rio de Janeiro depuis un promontoire en fin de journée",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Réserver un vol en parapente",
      href: "https://jeitinho.fr/trouver-un-jeitinho",
      description: "On vous met en relation avec un club de vol libre local pour un vol en tandem accompagné, sans stress d'organisation.",
    },
  ],
  sections: [
    { type: "p", text: "Il y a les randonnées de Rio qui demandent des mollets d'acier et deux heures de montée en plein soleil, et il y a la Pedra Bonita : vingt minutes de marche tranquille pour un point de vue à 520 mètres d'altitude sur São Conrado, la forêt de Tijuca et l'océan. Et, cerise sur le gâteau, c'est de là que décollent les parapentistes de Rio depuis des décennies." },
    { type: "p", text: "Si vous cherchez une rando accessible en famille, sans niveau technique particulier, et que l'idée de voir la ville depuis le ciel vous titille, la Pedra Bonita coche toutes les cases. Voici ce qu'on dirait à un ami qui débarque à Rio et qui hésite encore." },

    { type: "h2", text: "Pedra Bonita, c'est quoi exactement ?" },
    { type: "p", text: "La Pedra Bonita est un sommet du Parc National de la Tijuca, au-dessus du quartier de São Conrado, dans la Zona Sul de Rio. Contrairement à des sommets voisins comme la <a href=\"/blog/randonnee-pedra-da-gavea\">Pedra da Gávea</a>, elle ne demande ni escalade ni plusieurs heures d'effort : on y accède en voiture jusqu'à un parking proche du sommet, puis une courte marche suffit pour rejoindre le point de vue." },
    { type: "p", text: "C'est aussi, et surtout, le site de décollage historique du vol libre à Rio. La fameuse rampe de la Pedra Bonita, en béton, surplombe le vide au-dessus de la forêt : les parapentistes et pratiquants d'asa-delta s'y élancent pour atterrir quelques minutes plus tard sur la plage de São Conrado, en contrebas." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Même si vous ne volez pas, montez au moins jusqu'à la rampe : voir les parapentes décoller au-dessus du vide, avec São Conrado et l'océan en arrière-plan, est un spectacle à lui seul." },

    { type: "h2", text: "La randonnée : courte, facile, accessible à tous" },
    { type: "p", text: "C'est la grande différence avec les autres sommets emblématiques de Rio : ici, l'essentiel du dénivelé se fait en voiture. On rejoint en véhicule (ou en excursion organisée) un parking situé près du sommet, dans le Parc National de la Tijuca, puis il ne reste plus qu'une marche d'environ 20 minutes sur un sentier bien tracé pour atteindre le point de vue et la rampe de décollage." },
    { type: "p", text: "Pas de passage technique, pas besoin d'expérience en randonnée : de bonnes chaussures et un peu d'eau suffisent. C'est une sortie qui se fait aisément en famille, avec des enfants ou des personnes peu sportives, contrairement aux <a href=\"/blog/randonnee-dois-irmaos\">Dois Irmãos</a> qui demandent 1h à 1h30 de montée, ou à la Pedra da Gávea qui reste réservée aux randonneurs expérimentés." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Le parking au sommet est limité (une vingtaine de places environ) et l'accès au parc se fait généralement entre 8h et 17h (18h en été). Mieux vaut arriver tôt, surtout le week-end, pour être sûr de trouver une place et d'éviter l'affluence." },

    { type: "h2", text: "Le point de vue depuis le sommet" },
    { type: "p", text: "Depuis la plateforme et la rampe de la Pedra Bonita, la vue embrasse São Conrado et sa plage en croissant, la barre d'immeubles du quartier serrée entre mer et montagne, la Pedra da Gávea juste à côté, et la forêt de Tijuca qui s'étend à perte de vue. Par temps clair, on distingue aussi Ilha Grande au loin vers l'ouest et l'ensemble de la Zona Sul vers l'est." },
    { type: "p", text: "C'est un des rares points de vue de Rio où l'on observe la ville presque à hauteur des oiseaux, littéralement : les parapentes tournoient parfois juste sous vos pieds avant de filer vers la plage." },

    { type: "h2", text: "Décoller en parapente depuis la Pedra Bonita" },
    { type: "p", text: "La Pedra Bonita n'est pas qu'un point de vue : c'est l'un des spots de vol libre les plus réputés du Brésil, fréquenté aussi bien par des pilotes autonomes que par des clubs proposant des vols en tandem. Le principe est simple : vous êtes harnaché avec un pilote expérimenté, vous courez quelques mètres sur la rampe, et vous décollez pour un vol de plusieurs minutes au-dessus de la forêt, avant un atterrissage en douceur sur la plage de São Conrado." },
    { type: "ul", items: [
      "Aucune expérience de vol n'est nécessaire : le vol en tandem est ouvert aux débutants complets.",
      "Comptez généralement entre 5 et 15 minutes de vol effectif, mais prévoyez 2 à 3 heures au total avec l'inscription, l'équipement et le transfert.",
      "Un âge minimum (autour de 14 ans, avec autorisation parentale pour les mineurs) et un poids maximum (autour de 90-100 kg selon les conditions de vent) sont généralement appliqués par les clubs.",
      "Les vols peuvent être annulés ou reportés en cas de conditions météo défavorables : mieux vaut prévoir une marge dans votre planning si le vol est un temps fort de votre séjour.",
    ]},
    { type: "aeviter", title: "À éviter", text: "Ne réservez pas votre vol pour votre dernier jour à Rio sans marge de sécurité. Le vent et la météo peuvent reporter un vol prévu, et il vaut mieux garder un jour de battement plutôt que de rater l'expérience de peu." },

    { type: "h2", text: "Combien coûte un vol en parapente à Rio ?" },
    { type: "p", text: "Les tarifs varient selon les clubs et les prestations incluses (transfert depuis l'hôtel, photos, vidéo embarquée). On trouve généralement des vols en tandem pour plusieurs centaines de reais par personne, les formules avec photos et vidéos étant plus chères que le vol seul. Les prix évoluent régulièrement : le mieux est de se renseigner directement auprès des clubs de vol libre locaux ou de passer par une agence qui centralise la réservation pour vous." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Plutôt que de démarcher vous-même les clubs sur place, <a href=\"https://jeitinho.fr/trouver-un-jeitinho\">passez par Jeitinho</a> : on vous met en relation avec un pilote local fiable, on gère la réservation et le transfert, et vous n'avez plus qu'à profiter du vol." },

    { type: "h2", text: "Quel est le meilleur moment pour voler ?" },
    { type: "p", text: "Le matin est généralement considéré comme le moment le plus favorable pour voler à la Pedra Bonita : les conditions de vent y sont souvent plus stables qu'en début d'après-midi, quand les thermiques peuvent devenir plus irréguliers. C'est aussi le moment où la lumière sur São Conrado et la forêt est la plus belle pour les photos depuis les airs." },
    { type: "p", text: "Dans tous les cas, la décision finale revient toujours au pilote et au club de vol libre le jour même : eux seuls évaluent si les conditions sont sûres pour décoller." },

    { type: "h2", text: "Randonnée et vol : comment organiser sa demi-journée" },
    { type: "ol", items: [
      "Matin — Départ tôt vers le Parc National de la Tijuca et le parking de la Pedra Bonita.",
      "20 minutes plus tard — Arrivée au sommet, premier point de vue sur São Conrado.",
      "Sur place — Inscription au club de vol libre, équipement et briefing avec le pilote.",
      "Décollage — Vol en tandem de quelques minutes au-dessus de la forêt et de la côte.",
      "Atterrissage — Sur la plage de São Conrado, où un transfert vous attend généralement vers votre hébergement.",
    ]},
    { type: "p", text: "Sans vol, comptez à peine une heure sur place pour la randonnée et le point de vue. Avec un vol en tandem, prévoyez plutôt une demi-journée complète pour ne pas être pressé par le temps." },

    { type: "h2", text: "Comparer avec les autres randonnées de Rio" },
    { type: "p", text: "La Pedra Bonita est clairement la plus accessible des grandes randonnées panoramiques de Rio. Si vous voulez un défi plus sportif avec une vue tout aussi spectaculaire sur Ipanema et Leblon, direction les <a href=\"/blog/randonnee-dois-irmaos\">Dois Irmãos</a>, à 1h-1h30 de montée depuis Vidigal. Pour les randonneurs expérimentés en quête d'un vrai objectif technique, la <a href=\"/blog/randonnee-pedra-da-gavea\">Pedra da Gávea</a> reste la référence, avec son passage de corde fixe et sa vue à 360° sur toute la ville." },

    { type: "faq", items: [
      { q: "La randonnée à la Pedra Bonita est-elle difficile ?", a: "Non, c'est l'une des randonnées les plus faciles de Rio. On accède en voiture jusqu'à un parking proche du sommet, puis une marche d'environ 20 minutes sur un sentier facile suffit pour atteindre le point de vue." },
      { q: "Faut-il réserver son vol en parapente à l'avance ?", a: "C'est fortement recommandé, surtout en haute saison, pour garantir un créneau et un pilote disponible. Passer par une agence comme Jeitinho simplifie la réservation et le transfert." },
      { q: "Faut-il une expérience de vol pour faire un vol en tandem ?", a: "Non, aucune expérience n'est nécessaire. Vous êtes harnaché à un pilote expérimenté qui gère l'intégralité du vol, du décollage à l'atterrissage." },
      { q: "Combien coûte un vol en parapente à la Pedra Bonita ?", a: "Les tarifs varient selon les clubs et les options (photos, vidéos, transfert). Comptez plusieurs centaines de reais par personne ; renseignez-vous directement auprès des clubs de vol libre locaux pour un prix à jour." },
      { q: "Quel est le meilleur moment pour voler ?", a: "Le matin offre généralement des conditions de vent plus stables qu'en début d'après-midi, mais la décision finale de décoller revient toujours au pilote le jour même, selon la météo." },
    ]},

    { type: "p", text: "Entre sa rando accessible à tous et son décollage de parapente mythique, la Pedra Bonita est une des expériences les plus faciles à combiner à Rio : un point de vue magnifique en vingt minutes de marche, et, si le cœur vous en dit, une vue imprenable sur la ville depuis le ciel." },
  ],
};
