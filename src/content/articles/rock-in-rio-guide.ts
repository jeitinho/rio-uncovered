import type { Article } from "../types";
import hero from "@/assets/article-reveillon-copacabana.jpg";

export const article: Article = {
  slug: "rock-in-rio-guide",
  title: "Rock in Rio : le guide du festival pour les visiteurs étrangers",
  titleAccent: "Rock in Rio",
  description:
    "Histoire, lieu, billetterie, transports : le guide pratique de Rock in Rio pour les voyageurs étrangers, avec un point important sur la fréquence réelle du festival.",
  category: "evenements",
  tags: ["Rock in Rio", "festival", "musique", "Rio de Janeiro"],
  date: "2026-09-02",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Grande foule assistant à un événement nocturne en plein air à Rio de Janeiro",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Organiser votre séjour festival avec Jeitinho",
      href: "https://jeitinho.fr/trouver-un-jeitinho",
      description:
        "Hébergement bien situé, trajets vers le Parque Olímpico, plan B les jours sans concert : notre équipe vous aide à construire un séjour cohérent autour des dates de Rock in Rio.",
    },
  ],
  sections: [
    { type: "p", text: "Rock in Rio, c'est l'un des plus grands festivals de musique au monde, né à Rio de Janeiro et devenu, au fil des décennies, un nom que tout le monde reconnaît, même sans s'intéresser particulièrement au rock. Mais pour un visiteur étranger, une question compte plus que toutes les autres avant de réserver un vol : le festival n'a pas lieu chaque année à Rio, et ce point mérite d'être clarifié avant de construire un voyage autour." },
    { type: "p", text: "Ce guide fait le point sur ce qu'il faut savoir : l'histoire du festival, où il se déroule aujourd'hui, comment acheter ses billets, comment s'y rendre, ce qu'il faut prévoir pour une journée sur place, et surtout comment vérifier les dates avant de tout organiser autour d'une simple hypothèse." },

    { type: "h2", text: "Rock in Rio, un festival né à Rio en 1985" },
    { type: "p", text: "Rock in Rio a été créé en 1985 par l'entrepreneur brésilien Roberto Medina. Dès sa première édition, le festival marque les esprits par son ampleur : des centaines de milliers de spectateurs, des têtes d'affiche internationales, et un site construit spécialement pour l'occasion à Barra da Tijuca, baptisé « Cidade do Rock » (la Cité du Rock)." },
    { type: "p", text: "Au fil des décennies, Rock in Rio est devenu une référence mondiale des festivals de musique, avec des affiches réunissant aussi bien des légendes du rock que des stars de la pop internationale. Le festival s'est aussi exporté hors du Brésil, avec des éditions organisées à Lisbonne et à Madrid." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Le nom « Cidade do Rock » désigne le site du festival lui-même, pas un quartier de Rio. C'est un espace éphémère (aujourd'hui installé au Parque Olímpico) monté spécialement pour la durée de l'événement, avec plusieurs scènes, zones de restauration et attractions annexes." },

    { type: "h2", text: "Un festival qui n'a pas lieu tous les ans" },
    { type: "p", text: "C'est le point le plus important de cet article : contrairement à ce que son statut de méga-événement pourrait laisser penser, Rock in Rio n'est pas un rendez-vous annuel garanti à Rio de Janeiro. Depuis sa création, les éditions brésiliennes se sont enchaînées de façon irrégulière, avec parfois plusieurs années d'écart entre deux éditions, et pas de rythme fixe annoncé à l'avance sur le très long terme." },
    { type: "p", text: "Concrètement, cela veut dire une chose simple : ne partez jamais du principe qu'« il y aura forcément un Rock in Rio l'année prochaine ». Les organisateurs communiquent les dates d'une édition bien avant qu'elle ait lieu, mais tant qu'une prochaine édition n'a pas été officiellement annoncée pour l'année qui vous intéresse, il ne faut pas la considérer comme acquise." },
    { type: "aeviter", title: "À éviter", text: "Ne réservez jamais des billets d'avion pour Rio « en espérant » que Rock in Rio aura lieu à telle date, sans confirmation officielle. Vérifiez d'abord les dates sur le site officiel du festival avant d'engager quoi que ce soit." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Avant toute réservation de vol ou d'hébergement autour de Rock in Rio, allez vérifier les dates directement sur le site officiel du festival. C'est la seule source fiable : les informations qui circulent ailleurs, y compris dans cet article, peuvent devenir obsolètes d'une édition à l'autre." },

    { type: "h2", text: "Où se déroule Rock in Rio aujourd'hui" },
    { type: "p", text: "Depuis quelques éditions, la Cidade do Rock s'installe au Parque Olímpico, à Barra da Tijuca, l'héritage des Jeux olympiques de 2016 reconverti en grand espace événementiel. C'est aujourd'hui le site de référence du festival à Rio, et c'est celui qu'il faut avoir en tête pour organiser votre trajet depuis votre hébergement." },
    { type: "p", text: "Une édition de Rock in Rio se déroule généralement sur plusieurs jours répartis sur deux semaines, avec des soirées thématiques par style musical ou par tête d'affiche. Chaque jour dispose de son propre billet, ce qui permet de choisir précisément les dates qui vous intéressent plutôt que d'acheter un pass pour l'intégralité du festival." },

    { type: "h2", text: "Comment acheter ses billets" },
    { type: "p", text: "La billetterie de Rock in Rio fonctionne exclusivement via les canaux officiels annoncés par l'organisation pour chaque édition, généralement en ligne, avec parfois des points de vente physiques au Brésil. Les prix varient énormément selon le secteur choisi (accès général type « Gramado » ou zones plus proches de la scène), le jour de la semaine, la tête d'affiche du soir, et le type de tarif (plein tarif, tarif réduit étudiant, offres partenaires bancaires)." },
    { type: "p", text: "Pour donner un ordre de grandeur sans figer un chiffre qui deviendrait vite faux : un billet journalier en secteur général peut coûter l'équivalent de plusieurs centaines de reais, avec un tarif réduit à environ la moitié pour les étudiants et seniors éligibles, et des remises via certains partenaires bancaires du festival. Les jours avec les têtes d'affiche les plus attendues affichent complet en premier, souvent plusieurs semaines à l'avance." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Les prix et les catégories de billets changent d'une édition à l'autre. Ne vous fiez pas à un tarif vu dans un article ou sur un forum datant d'une édition précédente : consultez toujours la grille tarifaire en vigueur sur la billetterie officielle du festival au moment de votre achat." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Si une date qui vous intéresse est annoncée, n'attendez pas pour acheter votre billet. Les soirées avec les artistes les plus populaires se vendent très vite, parfois avant même que vous ayez fini de réserver votre vol." },

    { type: "h2", text: "Comment se rendre au Parque Olímpico depuis la Zona Sul" },
    { type: "p", text: "Si vous logez à Copacabana, Ipanema ou Leblon, comptez généralement entre 45 minutes et une heure de trajet jusqu'au Parque Olímpico, selon l'heure et la circulation. Le trajet le plus simple et le plus fiable pour un visiteur étranger passe par le métro (ligne 4) jusqu'à la station Jardim Oceânico, à Barra da Tijuca, puis une correspondance en BRT jusqu'à la station Parque Olímpico." },
    { type: "p", text: "Évitez de conduire vous-même un jour de concert : les abords du site sont très encombrés en fin de journée, le stationnement est limité, et le retour en pleine nuit avec des dizaines de milliers de personnes qui quittent le site en même temps rend la circulation particulièrement difficile. Un VTC ou un taxi jusqu'à un point de dépose un peu en amont du site reste une option, à condition de prévoir large sur les horaires." },
    { type: "aeviter", title: "À éviter", text: "Ne calez pas d'horaire serré après le festival, que ce soit un dîner, un vol de nuit ou un rendez-vous. La sortie d'un site qui vient d'accueillir plusieurs dizaines de milliers de spectateurs prend du temps, quel que soit le mode de transport choisi." },

    { type: "h2", text: "Ce qu'il faut prévoir pour une journée de festival" },
    { type: "p", text: "Une journée à Rock in Rio est une vraie journée, pas une simple soirée concert. Le site compte plusieurs scènes avec des programmations simultanées, ce qui demande un peu d'organisation si vous voulez voir plusieurs artistes dans la même soirée sans manquer les têtes d'affiche." },
    { type: "ul", items: [
      "Prévoyez des chaussures confortables : le site est vaste, et vous marcherez beaucoup entre les différentes scènes.",
      "Hydratez-vous régulièrement. Rio en septembre reste chaud et humide, et une journée entière en extérieur, debout, demande une vraie vigilance sur ce point.",
      "Repérez à l'avance le programme des scènes qui vous intéressent, les horaires de passage changeant souvent d'une soirée à l'autre.",
      "Voyagez léger : sac transparent ou de petite taille selon les règles annoncées pour l'édition en cours, peu d'affaires de valeur, batterie externe pour votre téléphone.",
      "Prévoyez un point de rendez-vous simple avec vos proches en cas de séparation dans la foule, le réseau mobile pouvant être saturé aux heures de pointe.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "Le site propose généralement des points de restauration et de vente de boissons, mais les prix sur place restent ceux d'un grand événement. Manger avant d'arriver reste une option plus économique si votre budget est serré." },

    { type: "h2", text: "Rock in Rio et le reste de votre séjour" },
    { type: "p", text: "Si vous construisez votre voyage autour du festival, gardez en tête que les jours sans concert méritent d'être occupés autrement : les plages de la Zona Sul, un tour dans une favela accompagné, ou tout simplement du temps pour récupérer d'une soirée qui se termine tard. Pensez aussi à consulter le <a href=\"/blog/calendrier-evenements-rio\">calendrier des événements de Rio</a> pour voir si d'autres rendez-vous se superposent à votre séjour, et à jeter un œil à notre guide du <a href=\"/blog/reveillon-rio-copacabana\">réveillon à Copacabana</a> si votre passage à Rio se prolonge jusqu'à une autre grande date de la ville." },

    { type: "h2", text: "Le mot du jour : rolê" },
    { type: "p", text: "« Rolê » est une expression informelle très utilisée par les cariocas pour désigner une sortie, souvent sans itinéraire fixe. Un festival comme Rock in Rio est justement l'occasion de faire un vrai rolê : passer d'une scène à l'autre, découvrir un artiste sans l'avoir prévu, et se laisser porter par l'ambiance de la soirée." },

    { type: "faq", items: [
      { q: "Rock in Rio a-t-il lieu tous les ans à Rio de Janeiro ?", a: "Non. C'est le point essentiel à retenir : depuis sa création en 1985, le festival n'a pas suivi de rythme annuel fixe à Rio de Janeiro, avec parfois plusieurs années entre deux éditions. Vérifiez toujours les dates officielles avant de réserver un voyage autour de l'événement." },
      { q: "Où se déroule Rock in Rio aujourd'hui ?", a: "Les éditions récentes se tiennent au Parque Olímpico, à Barra da Tijuca, sur un site aménagé pour l'occasion et baptisé Cidade do Rock." },
      { q: "Où acheter ses billets pour Rock in Rio ?", a: "Uniquement via les canaux de billetterie officiels annoncés par l'organisation pour chaque édition. Les prix varient fortement selon le secteur, le jour et le type de tarif : consultez la grille en vigueur au moment de votre achat plutôt qu'un chiffre vu ailleurs." },
      { q: "Comment se rendre au Parque Olímpico depuis Copacabana ou Ipanema ?", a: "Le trajet le plus simple passe par le métro (ligne 4) jusqu'à la station Jardim Oceânico, puis une correspondance en BRT jusqu'à la station Parque Olímpico. Comptez entre 45 minutes et une heure selon l'heure de circulation." },
      { q: "Faut-il prévoir toute une journée pour Rock in Rio ?", a: "Oui. Le site comprend plusieurs scènes avec des programmations simultanées, et une soirée complète sur place, retour compris, occupe généralement une bonne partie de la journée et de la nuit." },
    ]},

    { type: "p", text: "Rock in Rio reste l'un des rendez-vous musicaux les plus impressionnants au monde, et vivre une édition depuis Rio de Janeiro, dans la ville qui l'a vu naître, a quelque chose de particulier. Mais avant de construire un voyage autour de cet événement, un seul réflexe compte vraiment : vérifier les dates officielles, parce que ce festival, justement, ne se tient pas tous les ans." },
  ],
};
