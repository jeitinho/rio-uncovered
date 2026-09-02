import type { Article } from "../types";
import hero from "@/assets/article-zone-ouest-rio.jpg";

export const article: Article = {
  slug: "prainha-grumari-plages-sauvages-rio",
  title: "Prainha et Grumari : les plages sauvages de la Zona Oeste",
  titleAccent: "plages sauvages",
  description:
    "Prainha et Grumari, deux plages protégées de la Zona Oeste de Rio : comment y aller, le surf, l'absence d'infrastructures et la meilleure période pour y aller.",
  category: "plages",
  tags: ["Prainha", "Grumari", "plages", "surf", "Rio de Janeiro"],
  date: "2026-09-02",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Plage sauvage bordée de montagnes et de végétation dans la Zone Ouest de Rio de Janeiro",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Transferts Jeitinho",
      href: "https://jeitinho.fr/trouver-un-jeitinho",
      description: "Un chauffeur privé pour rejoindre Prainha et Grumari, avec attente sur place et retour organisé — l'option la plus simple pour ces plages excentrées.",
    },
  ],
  sections: [
    { type: "p", text: "Dans notre guide des <a href=\"/blog/plages-zone-ouest-rio\">plages de la Zone Ouest</a>, on vous présentait cinq plages sauvages, dont Prainha et Grumari. Ce sont les deux plus emblématiques du secteur, et elles méritent un zoom à part : ce sont les plus protégées, les moins équipées, et probablement celles qui donnent le mieux cette sensation de sortir complètement de Rio sans quitter la ville." },
    { type: "p", text: "Si vous cherchez du sable fin, des kiosques à chaque coin et un accès facile en métro, ce n'est pas ici. Si vous cherchez de la nature brute, de bonnes vagues et un vrai dépaysement, voici ce qu'il faut savoir avant d'y aller." },

    { type: "h2", text: "Deux plages protégées, pas juste \"isolées\"" },
    { type: "p", text: "Prainha et Grumari ne sont pas restées sauvages par hasard : elles sont toutes les deux couvertes par des statuts de protection environnementale qui limitent la construction et préservent la végétation de restinga et la forêt atlantique alentour." },
    { type: "p", text: "Prainha fait partie du Parque Natural Municipal da Prainha, créé en 2001 sur environ 147 hectares, qui relie justement Prainha à Grumari le long de la côte. Grumari, de son côté, se trouve dans l'Área de Proteção Ambiental (APA) do Grumari, une zone de protection environnementale plus ancienne, qui remonte à la fin des années 1980. Résultat concret pour vous : pas d'immeubles en bord de plage, pas de grands hôtels, et une nature qui a gardé son aspect d'origine." },

    { type: "h2", text: "Comment aller à Prainha et Grumari" },
    { type: "p", text: "Les deux plages se trouvent au-delà de Recreio dos Bandeirantes, à l'extrémité ouest de la zone balnéaire de Rio. Comptez environ 1h à 1h15 en voiture depuis Copacabana ou Ipanema, et 20 à 30 minutes depuis Barra da Tijuca ou Recreio selon le trafic." },
    { type: "p", text: "La route qui mène de Recreio à Prainha puis à Grumari est sinueuse, encaissée entre le morne et l'océan, et longe par endroits la forêt du parc naturel. Ce n'est ni un axe rapide ni une route toujours bien indiquée : mieux vaut suivre un GPS à jour ou passer par un chauffeur qui connaît déjà le trajet." },
    { type: "ul", items: [
      "Voiture ou taxi/Uber : l'option la plus simple, surtout depuis la Zona Sul.",
      "Moto-taxi : pratique depuis Recreio ou Barra da Tijuca pour les petits trajets, moins adapté sur longue distance.",
      "Transports en commun : liaison peu fiable, quasi inexistante vers Grumari — à éviter si vous voulez profiter d'une vraie journée sur place.",
    ]},
    { type: "conseil", title: "Le conseil Jeitinho", text: "Arrangez votre retour à l'avance. Sur place, il est parfois difficile de trouver un taxi ou un Uber disponible en fin de journée, surtout à Grumari. Un chauffeur privé qui vous attend reste la solution la plus tranquille." },

    { type: "h2", text: "Prainha, la plage des surfeurs" },
    { type: "p", text: "Prainha est une petite plage en forme de croissant, encadrée par la végétation du parc naturel. C'est l'un des spots de surf les plus réputés de Rio : le fond marin y génère des vagues régulières et puissantes, appréciées aussi bien des surfeurs confirmés que des écoles de surf qui y donnent des cours." },
    { type: "p", text: "Le revers de la médaille, c'est que la mer peut être forte et les courants bien réels, surtout hors des zones habituellement surveillées. Si vous n'êtes pas à l'aise dans l'eau ou si vous voyagez avec de jeunes enfants, restez prudent et privilégiez les zones où d'autres baigneurs sont déjà installés." },

    { type: "h2", text: "Grumari, l'immensité préservée" },
    { type: "p", text: "Grumari, c'est une autre échelle : une longue plage bordée de collines vertes, avec une mer qui peut aussi être formée mais un cadre plus ouvert que Prainha. C'est la plage qui donne le mieux cette impression d'être seul face à l'océan, loin de la densité de la Zona Sul." },
    { type: "p", text: "L'ambiance y est volontairement peu aménagée : quelques kiosques simples, pas de grande promenade, pas de files de transats. C'est précisément ce que viennent chercher ceux qui la choisissent." },

    { type: "h2", text: "Prainha ou Grumari : laquelle choisir ?" },
    { type: "ul", items: [
      "Pour le surf et une ambiance jeune et sportive : Prainha.",
      "Pour l'espace, le calme et une vraie sensation de nature : Grumari.",
      "Pour une famille avec de jeunes enfants : les deux demandent de la prudence face à la mer, Grumari offre un peu plus d'espace pour s'installer à l'écart des vagues.",
      "Pour combiner les deux : elles sont à quelques minutes de route l'une de l'autre, une même journée peut facilement inclure les deux.",
    ]},

    { type: "h2", text: "Aucune infrastructure : ce qu'il faut prévoir" },
    { type: "p", text: "C'est le point le plus important à anticiper. Contrairement à Copacabana ou Ipanema, il n'y a pas de longue avenue de kiosques ni de commerces à chaque pas. Quelques barracas vendent boissons et snacks, mais ne comptez pas dessus pour un vrai repas ou pour trouver facilement de la monnaie." },
    { type: "ul", items: [
      "Emportez de l'eau en quantité, surtout par forte chaleur.",
      "Prévoyez de quoi manger si vous restez plusieurs heures.",
      "Privilégiez l'argent liquide : peu d'établissements acceptent la carte dans ce secteur isolé.",
      "Crème solaire et casquette : peu d'ombre naturelle sur le sable.",
      "Pas de distributeur automatique sur place — retirez de l'argent avant de partir.",
    ]},
    { type: "aeviter", title: "À éviter", text: "Ne laissez rien de valeur visible dans votre véhicule, et évitez de vous baigner seul dans les zones sans surveillance, surtout à Prainha où la mer peut être puissante." },

    { type: "h2", text: "Quand y aller" },
    { type: "p", text: "En semaine, les deux plages sont nettement plus calmes que le week-end, quand les Cariocas eux-mêmes viennent y chercher un peu d'air. La fin d'après-midi est un bon moment pour profiter de la lumière et, à Grumari, d'un coucher de soleil dégagé sur l'océan. Comme pour le reste de la Zona Oeste, la météo et la houle peuvent changer vite : gardez de la souplesse dans votre programme." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Pour approfondir vos options du côté de la Zona Oeste, consultez aussi notre guide <a href=\"/blog/plages-zone-ouest-rio\">plages de la Zone Ouest</a> et notre article <a href=\"/blog/comment-choisir-sa-plage-rio\">comment choisir sa plage à Rio</a> selon l'ambiance recherchée." },

    { type: "faq", items: [
      { q: "Prainha et Grumari sont-elles surveillées ?", a: "La surveillance y est plus limitée qu'à Copacabana ou Ipanema. Restez prudent, en particulier à Prainha où la mer est souvent formée, et évitez de vous baigner seul en dehors des zones fréquentées." },
      { q: "Peut-on visiter Prainha et Grumari le même jour ?", a: "Oui, les deux plages sont à quelques minutes de route l'une de l'autre. C'est même l'option la plus logique si vous avez déjà fait le trajet depuis la Zona Sul." },
      { q: "Y a-t-il des restaurants sur place ?", a: "Non, seulement quelques kiosques simples proposant boissons et snacks. Mieux vaut prévoir votre pique-nique si vous comptez rester plusieurs heures." },
      { q: "Faut-il louer une planche sur place pour surfer à Prainha ?", a: "Des écoles de surf et loueurs sont présents sur la plage, mais l'offre reste plus restreinte qu'à Barra ou Macumba. Réserver à l'avance ou passer par une école reconnue reste la solution la plus simple." },
    ]},

    { type: "p", text: "Prainha et Grumari ne sont pas des plages qu'on coche par habitude : ce sont deux détours qui demandent un peu plus d'organisation, mais qui offrent un Rio bien plus sauvage que celui des cartes postales. Un peu de préparation — transport, eau, liquide — et la Zona Oeste vous le rend largement." },
  ],
};
