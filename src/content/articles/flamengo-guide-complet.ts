import type { Article } from "../types";
import hero from "@/assets/quartier-flamengo.jpg";
import galerie1 from "@/assets/flamengo-1.jpg";
import galerie2 from "@/assets/flamengo-2.jpg";

export const article: Article = {
  slug: "flamengo-guide-complet",
  title: "Flamengo : le guide complet du quartier au grand parc de Rio",
  titleAccent: "grand parc",
  description: "Notre guide complet de Flamengo : Aterro, Museu de Arte Moderna, vie de quartier et vraies adresses. Écrit par des locaux, pas par Google Traduction.",
  category: "quartiers",
  tags: ["Flamengo", "Zona Sul", "guide de quartier", "parc"],
  date: "2026-06-30",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Parc de l'Aterro do Flamengo avec vue sur la baie de Guanabara et le Pain de Sucre, Rio de Janeiro",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "On vous ouvre les portes de nos adresses favorites à Flamengo.",
    },
    {
      label: "City tour privé",
      href: "https://www.jeitinho.fr/experiences",
      description: "Flamengo, Glória, Catete — le Rio historique en une matinée avec un local.",
    },
  ],
  sections: [
    { type: "p", text: "Flamengo est un quartier de transition, entre la Zona Sul balnéaire et le centre historique, mais c'est aussi l'un des poumons verts les plus précieux de Rio grâce à son immense parc en bord de baie, dessiné par Roberto Burle Marx. Un quartier résidentiel, populaire, où l'on trouve encore certains des meilleurs prix de la ville pour un cadre de vie exceptionnel." },
    { type: "p", text: "Ce guide n'est pas une brochure sur le parc. C'est ce qu'on dirait à un ami qui débarque : où marcher, où s'asseoir, où éviter, et à quelle heure faire quoi." },

    { type: "h2", text: "Comprendre Flamengo en cinq minutes" },
    { type: "p", text: "Flamengo s'étend entre <a href=\"/blog/botafogo-guide-complet\">Botafogo</a> au sud et <a href=\"/blog/gloria-guide-complet\">Glória</a> au nord, le long de la baie de Guanabara. Le quartier est structuré autour de deux axes : la rue du Catete, artère commerçante animée, et l'immense parc de l'Aterro do Flamengo qui longe toute la baie jusqu'au centre-ville." },
    { type: "p", text: "Ce parc, aménagé dans les années 1960 sur des terrains gagnés sur la mer lors de la destruction d'une colline voisine, reste l'un des chefs-d'œuvre paysagers du Brésil, mêlant pelouses, terrains de sport, musées et pistes cyclables sur plusieurs kilomètres." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Venez à l'Aterro do Flamengo un dimanche matin : la voie rapide qui longe le parc est fermée à la circulation motorisée jusqu'à midi, transformée en immense piste pour joggeurs, cyclistes et familles. C'est l'un des meilleurs moments pour sentir le rythme dominical carioca." },

    { type: "h2", text: "Le parc du Flamengo : le poumon vert de Rio" },
    { type: "p", text: "L'Aterro do Flamengo s'étend sur plus de trois kilomètres entre Botafogo et le centre-ville, offrant vues sur la baie de Guanabara, le Pain de Sucre et, côté terre, les collines de Santa Teresa. On y trouve des terrains de football et de volley en libre accès, des aires de jeux, et un espace dédié au vol libre où l'on peut voir atterrir les parapentistes venus de la Pedra Bonita." },
    { type: "p", text: "Le Museu de Arte Moderna (MAM), à l'entrée du parc côté centre-ville, est l'un des musées d'art moderne les plus importants d'Amérique latine, dans un bâtiment emblématique signé Affonso Eduardo Reidy." },
    { type: "aeviter", title: "À éviter", text: "Évitez de vous promener seul dans les parties les moins fréquentées du parc après la tombée de la nuit. En journée, la fréquentation dense assure une sécurité globale, mais comme tout grand espace vert ouvert, la vigilance de base reste de mise le soir." },

    { type: "h2", text: "Où manger — nos vraies adresses" },
    { type: "ul", items: [
      "Lamas — institution centenaire de la rue du Catete, ouverte jusqu'à tard, cuisine brésilienne classique et généreuse.",
      "Adega Portugalia (annexe Flamengo) — petiscos portugais et ambiance de quartier sans prétention.",
      "Café Lamas — pour un petit-déjeuner ou un café dans un cadre historique du quartier.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "Flamengo est l'un des meilleurs quartiers de Rio pour manger correctement à petit budget : les prix restent nettement inférieurs à ceux d'Ipanema ou de Leblon pour une cuisine tout aussi authentique." },

    { type: "h2", text: "Que voir et que faire" },
    { type: "h3", text: "Le Palácio do Catete" },
    { type: "p", text: "Ancienne résidence présidentielle transformée en Museu da República, ce palais du XIXe siècle raconte l'histoire politique du Brésil dans un cadre architectural remarquable, entouré d'un jardin ouvert au public gratuitement." },
    { type: "h3", text: "Le Monumento aos Mortos da Segunda Guerra Mundial" },
    { type: "p", text: "Ce mémorial dédié aux soldats brésiliens tombés durant la Seconde Guerre mondiale se dresse à l'entrée du parc, avec une petite crypte et un musée militaire souvent méconnus des visiteurs étrangers." },
    { type: "h3", text: "Vie de quartier" },
    { type: "p", text: "La rue du Catete et ses alentours concentrent une vie de quartier dense et populaire : marchés de rue, petits commerces traditionnels, et immeubles Art déco témoins de l'âge d'or du quartier au début du XXe siècle." },

    { type: "h2", text: "Une journée parfaite à Flamengo" },
    { type: "ol", items: [
      "8h — Petit-déjeuner au Café Lamas, rue du Catete.",
      "9h30 — Visite du Palácio do Catete et de son jardin.",
      "11h — Balade dans l'Aterro do Flamengo, à pied ou à vélo.",
      "12h30 — Déjeuner chez Lamas ou Adega Portugalia.",
      "14h30 — Visite du Museu de Arte Moderna.",
      "16h30 — Détente sur les pelouses du parc face à la baie.",
      "18h — Coucher de soleil vue Pain de Sucre depuis le parc.",
    ]},

    { type: "faq", items: [
      { q: "Flamengo est-il un bon quartier pour loger ?", a: "Oui, c'est un choix pertinent pour un budget maîtrisé avec un accès facile au métro, au parc et au centre historique, même s'il ne compte pas de plage de baignade." },
      { q: "Le parc du Flamengo est-il sûr ?", a: "En journée, oui, il est très fréquenté par les familles et les sportifs. Le soir, restez sur les zones les plus animées et éclairées." },
      { q: "Comment se déplacer depuis Flamengo ?", a: "Le quartier est bien desservi par le métro (ligne 1), avec un accès direct vers le centre-ville, Botafogo et la Zona Sul." },
      { q: "Que faire un dimanche à Flamengo ?", a: "Profitez de la fermeture dominicale de la voie rapide de l'Aterro à la circulation, l'un des meilleurs moments pour marcher, courir ou faire du vélo dans le parc." },
    ]},

    { type: "p", text: "Flamengo n'a pas la carte postale des plages de la Zona Sul, mais il offre quelque chose de plus rare à Rio : un vrai poumon vert au bord de l'eau, où les cariocas de tous les milieux se retrouvent, dimanche après dimanche, dans une gratuité et une simplicité qui font tout le charme du quartier." },
  ],
};
