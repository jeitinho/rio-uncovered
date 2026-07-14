import type { Article } from "../types";
import hero from "@/assets/quartier-urca.jpg";
import galerie1 from "@/assets/urca-1.jpg";
import galerie2 from "@/assets/urca-2.jpg";

export const article: Article = {
  slug: "urca-guide-complet",
  title: "Urca : le guide complet du quartier le plus paisible de Rio",
  titleAccent: "paisible",
  description: "Notre guide complet d'Urca : Pain de Sucre, front de mer tranquille et vraies adresses de quartier. Écrit par des locaux, pas par Google Traduction.",
  category: "quartiers",
  tags: ["Urca", "Pain de Sucre", "guide de quartier", "coucher de soleil"],
  date: "2026-06-24",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Front de mer d'Urca au coucher du soleil avec vue sur le Pain de Sucre, Rio de Janeiro",
  featured: false,
  guide: true,
  popular: true,
  relatedServices: [
    {
      label: "City tour privé",
      href: "https://www.jeitinho.fr/experiences",
      description: "Urca et le Pain de Sucre, un des plus beaux couchers de soleil de Rio avec un local.",
    },
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "On organise votre montée au Pain de Sucre au meilleur horaire, sans la foule.",
    },
  ],
  sections: [
    { type: "p", text: "Urca est le petit village dans la grande ville. Coincé entre la baie de Guanabara et le pied du Pain de Sucre, ce quartier résidentiel discret compte à peine quelques milliers d'habitants et reste, contre toute attente, l'un des secrets les mieux gardés de Rio pour qui cherche du calme à dix minutes de Botafogo." },
    { type: "p", text: "Ce guide n'est pas une simple fiche sur le Pain de Sucre. C'est ce qu'on dirait à un ami qui débarque : où marcher, où s'asseoir, où éviter, et à quelle heure faire quoi." },

    { type: "h2", text: "Comprendre Urca en cinq minutes" },
    { type: "p", text: "Urca occupe une presqu'île gagnée sur la baie au début du XXe siècle, à partir des matériaux d'excavation utilisés pour aplanir des collines du centre-ville. Le quartier est resté volontairement à taille humaine : hauteur des immeubles limitée, faible densité, rues calmes bordées de villas Art déco des années 1920-1940." },
    { type: "p", text: "Le Pain de Sucre (Pão de Açúcar), point de départ du téléphérique le plus célèbre du Brésil, se trouve à l'extrémité du quartier. Mais Urca ne se résume pas à cette ascension : c'est aussi une praia dos Urubus modeste où les cariocas viennent pique-niquer face à la baie, et un campus militaire naval qui occupe une bonne partie du territoire." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Montez au Pain de Sucre en fin d'après-midi, une heure avant le coucher du soleil : la lumière dorée sur la baie de Guanabara et le passage progressif à la vue nocturne illuminée de la ville valent largement d'éviter la cohue de la mi-journée." },

    { type: "h2", text: "Le Pain de Sucre : ce qu'il faut savoir avant d'y aller" },
    { type: "p", text: "L'ascension se fait en deux tronçons de téléphérique : le premier mène au Morro da Urca, une plateforme intermédiaire avec restaurants et vue déjà impressionnante ; le second grimpe jusqu'au sommet du Pão de Açúcar proprement dit, à 396 mètres d'altitude." },
    { type: "p", text: "Achetez vos billets en ligne à l'avance pour éviter la file, et prévoyez au minimum deux heures sur place si vous voulez profiter des deux niveaux sans être pressé. Le Morro da Urca accueille parfois des concerts en soirée, une expérience rare avec vue sur la baie illuminée." },
    { type: "aeviter", title: "À éviter", text: "Évitez de grimper au sommet en pleine mi-journée en haute saison : l'attente peut dépasser une heure et la lumière est plus dure pour les photos. Le petit matin ou la fin d'après-midi restent les créneaux les plus agréables." },

    { type: "h2", text: "Le front de mer et la vie de quartier" },
    { type: "p", text: "La Praia da Urca, minuscule et peu profonde, n'est pas faite pour la baignade sportive mais pour l'ambiance : des habitants du quartier s'y installent en fin de journée avec une glacière, entre pêcheurs et petits groupes d'amis, dans une atmosphère résolument locale, loin de l'agitation des plages de la Zona Sul." },
    { type: "p", text: "La rue principale du quartier, calme et arborée, longe la baie et offre certaines des plus belles vues gratuites sur le Pain de Sucre, sans avoir à payer le téléphérique — un excellent plan B en cas de budget serré ou de billets épuisés." },

    { type: "h2", text: "Où manger — nos vraies adresses" },
    { type: "ul", items: [
      "Bar Urca — institution locale où l'on commande ses petiscos au comptoir pour les manger assis sur le muret face à la baie, coucher de soleil garanti.",
      "Garota da Urca — cuisine brésilienne simple et généreuse, terrasse conviviale.",
      "Círculo Militar da Urca — club historique ouvert au public pour le déjeuner, cadre atypique en bord de mer.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "Le Bar Urca est un rituel carioca à part entière : on achète à emporter et on s'installe sur le muret du front de mer avec les habitants du quartier. Arrivez vers 17h30 pour une bonne place avant le coucher de soleil." },

    { type: "h2", text: "Que voir autour d'Urca" },
    { type: "p", text: "Le quartier jouxte directement <a href=\"/blog/botafogo-guide-complet\">Botafogo</a> à l'ouest, aisément accessible à pied ou en quelques minutes de voiture, et se trouve à courte distance de <a href=\"/blog/copacabana-guide-complet\">Copacabana</a> via le tunnel. C'est une excellente base pour combiner ascension du Pain de Sucre le matin et exploration de Botafogo l'après-midi." },

    { type: "h2", text: "Une demi-journée parfaite à Urca" },
    { type: "ol", items: [
      "15h — Arrivée à Urca, balade sur le front de mer calme du quartier.",
      "15h30 — Ascension du Pain de Sucre en deux tronçons de téléphérique.",
      "16h30 — Pause sur le Morro da Urca pour la vue intermédiaire.",
      "17h30 — Sommet du Pão de Açúcar pour le coucher de soleil.",
      "19h — Redescente et petiscos au Bar Urca, sur le muret face à la baie.",
      "20h30 — Dîner à la Garota da Urca ou poursuite vers Botafogo.",
    ]},

    { type: "faq", items: [
      { q: "Faut-il réserver le Pain de Sucre à l'avance ?", a: "Oui, fortement recommandé en haute saison (décembre à février) pour éviter l'attente, via le site officiel du téléphérique." },
      { q: "Urca est-il un bon quartier pour loger ?", a: "C'est un quartier très calme avec peu d'hébergements, davantage adapté à une visite qu'à un séjour prolongé, sauf si vous cherchez explicitement la tranquillité loin de l'agitation touristique." },
      { q: "Combien de temps prévoir pour le Pain de Sucre ?", a: "Comptez deux à trois heures pour l'ascension complète avec les deux niveaux, en intégrant le temps d'attente pour les billets et le téléphérique." },
      { q: "Peut-on se baigner à Urca ?", a: "La plage est petite et peu profonde, davantage adaptée à la détente qu'à la baignade. Pour nager, mieux vaut se rendre à Copacabana ou Botafogo." },
    ]},

    { type: "p", text: "Urca prouve qu'à Rio, les quartiers les plus discrets cachent souvent les plus beaux moments. Un coucher de soleil sur la baie de Guanabara, un chope sur un muret, et la ville entière semble ralentir." },
  ],
};
