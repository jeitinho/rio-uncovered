import type { Article } from "../types";
import hero from "@/assets/article-ilha-grande.jpg";

export const article: Article = {
  slug: "ilha-grande-excursion",
  title: "Ilha Grande : l'excursion nature incontournable depuis Rio",
  titleAccent: "Ilha Grande",
  description: "Lopes Mendes, Praia Preta, Vila do Abraão : notre guide complet pour organiser une excursion ou un séjour à Ilha Grande depuis Rio de Janeiro.",
  category: "excursions",
  tags: ["Ilha Grande", "excursion", "nature", "Rio de Janeiro"],
  date: "2026-07-14",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Plage sauvage bordée de forêt tropicale à Ilha Grande, au large de Rio de Janeiro",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Transferts Jeitinho",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "Organisation complète de votre excursion à Ilha Grande, transferts inclus.",
    },
  ],
  sections: [
    { type: "p", text: "À environ trois heures de Rio se trouve l'une des plus belles îles du Brésil : Ilha Grande. Sans voiture ni scooter autorisés sur place, cette île entièrement préservée offre des plages parmi les plus belles d'Amérique du Sud, dans un cadre de nature quasi intacte." },
    { type: "p", text: "Ce guide n'est pas une simple fiche touristique. C'est ce qu'on dirait à un ami qui hésite entre une excursion d'une journée ou un vrai séjour sur place : comment s'organiser, quoi ne pas manquer, et à quoi s'attendre." },

    { type: "h2", text: "Comprendre Ilha Grande" },
    { type: "p", text: "Ancienne prison de haute sécurité fermée en 1994, l'île a bénéficié de son isolement pour préserver une nature exceptionnelle : plus de cent plages, une forêt tropicale dense classée réserve écologique, et aucune circulation automobile sur l'ensemble du territoire. Tous les déplacements se font à pied ou en bateau, ce qui participe grandement au charme et à la tranquillité du lieu." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Privilégiez un séjour d'au moins une nuit sur place plutôt qu'une excursion à la journée : les trajets en bateau et en voiture représentent déjà plusieurs heures, et une seule journée limite fortement le temps réellement disponible sur l'île." },

    { type: "h2", text: "Comment se rendre à Ilha Grande depuis Rio" },
    { type: "p", text: "Le trajet classique combine environ 2h30 de route jusqu'à Angra dos Reis ou Mangaratiba, puis une traversée en bateau de 30 minutes à 1h30 selon le point de départ choisi. Un chauffeur privé ou un transfert organisé reste la solution la plus confortable, en particulier pour optimiser les horaires de bateau, parfois limités en basse saison." },
    { type: "bonasavoir", title: "Bon à savoir", text: "La Vila do Abraão, principal village de l'île, concentre l'essentiel des hébergements, restaurants et points de départ des randonnées. Aucun véhicule motorisé n'y circule, à l'exception de quelques chariots de transport de bagages." },

    { type: "h2", text: "Les plages à ne pas manquer" },
    { type: "h3", text: "Praia de Lopes Mendes" },
    { type: "p", text: "Considérée comme l'une des plus belles plages du Brésil. Sable blanc fin, eau cristalline et vagues idéales pour le bodyboard. Accessible après une randonnée d'environ 1h30 depuis la Vila do Abraão, ou en bateau depuis le village." },
    { type: "h3", text: "Praia Preta" },
    { type: "p", text: "Plage plus proche du village, facilement accessible à pied, idéale pour une baignade tranquille en fin de journée sans randonnée nécessaire." },
    { type: "h3", text: "Lagoa Azul" },
    { type: "p", text: "Piscine naturelle aux eaux turquoise, accessible en bateau, réputée pour le snorkeling et sa faune marine abondante." },
    { type: "aeviter", title: "À éviter", text: "N'oubliez pas votre crème solaire, répulsif anti-moustique et de bonnes chaussures de marche : plusieurs plages ne sont accessibles qu'à pied par des sentiers en forêt, parfois humides et sans commerce sur le trajet." },

    { type: "h2", text: "Que faire sur l'île" },
    { type: "ul", items: [
      "Randonner jusqu'à Lopes Mendes à travers la forêt tropicale.",
      "Faire une sortie en bateau autour de l'île pour découvrir plusieurs plages et criques dans la même journée.",
      "Visiter les vestiges de l'ancienne prison, aujourd'hui envahis par la végétation.",
      "Faire du snorkeling dans les eaux cristallines de la Lagoa Azul.",
      "Profiter d'un dîner de fruits de mer face au village au coucher du soleil.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "Prévoyez de l'argent liquide pour votre séjour : certains établissements de l'île, plus isolés, n'acceptent pas toujours la carte bancaire, contrairement à ce qui est désormais habituel à Rio." },

    { type: "h2", text: "Excursion d'une journée ou séjour sur place ?" },
    { type: "p", text: "Une excursion d'une journée permet de découvrir la Vila do Abraão et une ou deux plages proches, mais reste frustrante compte tenu du temps de trajet. Un séjour d'une à deux nuits permet de véritablement explorer l'île, randonner jusqu'à Lopes Mendes sans être pressé, et profiter de ses soirées particulièrement calmes, loin de toute pollution lumineuse." },

    { type: "faq", items: [
      { q: "Combien de temps prend le trajet depuis Rio jusqu'à Ilha Grande ?", a: "Comptez environ 2h30 de route jusqu'au point d'embarquement, puis 30 minutes à 1h30 de bateau selon le port de départ choisi." },
      { q: "Faut-il rester plusieurs jours à Ilha Grande ?", a: "C'est fortement recommandé : une excursion d'une journée limite fortement le temps disponible sur place compte tenu du trajet. Une à deux nuits permettent une découverte bien plus complète." },
      { q: "Y a-t-il des voitures sur l'île ?", a: "Non, aucune circulation automobile n'est autorisée sur Ilha Grande. Tous les déplacements se font à pied ou en bateau, ce qui contribue à la tranquillité et à la préservation du lieu." },
      { q: "Quelle est la plage la plus connue d'Ilha Grande ?", a: "Praia de Lopes Mendes, considérée comme l'une des plus belles plages du Brésil, accessible par une randonnée d'environ 1h30 ou en bateau depuis la Vila do Abraão." },
    ]},

    { type: "p", text: "Ilha Grande offre un contraste total avec l'agitation de Rio : nature préservée, plages désertes et rythme ralenti. Une parenthèse indispensable pour qui cherche à se reconnecter le temps de quelques jours." },
  ],
};
