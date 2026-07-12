import type { Article } from "../types";
import hero from "@/assets/quartier-barra-da-tijuca.jpg";
import galerie1 from "@/assets/barra-da-tijuca-1.jpg";
import galerie2 from "@/assets/barra-da-tijuca-2.jpg";

export const article: Article = {
  slug: "barra-da-tijuca-guide-complet",
  title: "Barra da Tijuca : le guide complet du quartier moderne de Rio",
  titleAccent: "moderne",
  description: "Notre guide complet de Barra da Tijuca : plages sans fin, sports de glisse, shopping et vraies adresses. Écrit par des locaux, pas par Google Traduction.",
  category: "quartiers",
  tags: ["Barra da Tijuca", "Zona Oeste", "guide de quartier", "sports nautiques"],
  date: "2026-07-10",
  author: "equipe",
  hero,
  heroAlt: "Longue plage de Barra da Tijuca bordée de tours modernes, Rio de Janeiro",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "On vous ouvre les portes de nos adresses favorites à Barra da Tijuca.",
    },
    {
      label: "Expériences sportives",
      href: "https://www.jeitinho.fr/experiences",
      description: "Surf, kitesurf et parapente à Barra avec un local qui connaît les spots.",
    },
  ],
  sections: [
    { type: "p", text: "Barra da Tijuca est le Rio du XXIe siècle : larges avenues, tours modernes, centres commerciaux climatisés et la plus longue plage de la ville, presque vingt kilomètres de sable qui s'étirent jusqu'à Recreio dos Bandeirantes. Un visage radicalement différent de la Zona Sul historique, qui séduit autant les familles cariocas que les amateurs de sports de glisse." },
    { type: "p", text: "Ce guide n'est pas une brochure immobilière. C'est ce qu'on dirait à un ami qui débarque : où marcher, où s'asseoir, où éviter, et à quelle heure faire quoi." },

    { type: "h2", text: "Comprendre Barra da Tijuca en cinq minutes" },
    { type: "p", text: "Longtemps zone marécageuse peu développée, Barra da Tijuca a connu une urbanisation accélérée à partir des années 1970, pensée dès le départ pour la voiture, avec de larges avenues, des centres commerciaux et des copropriétés fermées. Les Jeux olympiques de 2016, dont le Parc olympique s'y trouve, ont accéléré son développement et sa notoriété internationale." },
    { type: "p", text: "Le quartier se distingue radicalement de la Zona Sul par son urbanisme horizontal et sa dépendance à la voiture : contrairement à Ipanema ou Copacabana, on ne s'y déplace pas aisément à pied d'un point à un autre, les distances étant beaucoup plus importantes." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Louez un vélo ou une trottinette électrique pour explorer la piste cyclable qui longe toute la plage : c'est de loin le meilleur moyen de profiter de Barra sans subir les longues distances en voiture ou en bus." },

    { type: "h2", text: "La plage : la plus longue de Rio" },
    { type: "p", text: "La plage de Barra s'étend sur environ 18 kilomètres, offrant un sable plus large et moins bondé que celui de la Zona Sul, en particulier dans sa partie centrale. Les vagues y sont généralement plus fortes, ce qui en fait un spot privilégié pour le surf et le bodyboard." },
    { type: "p", text: "Certaines zones de la plage, notamment vers Pontal, sont réputées pour le kitesurf et le windsurf grâce à des vents constants, attirant une communauté de sportifs venus de tout le Brésil et de l'étranger." },
    { type: "aeviter", title: "À éviter", text: "Les courants peuvent être forts sur certaines portions de la plage de Barra, davantage exposée à l'océan ouvert que les plages abritées de la Zona Sul. Respectez scrupuleusement les drapeaux de signalisation des sauveteurs." },

    { type: "h2", text: "Où manger — nos vraies adresses" },
    { type: "h3", text: "Restaurants avec vue" },
    { type: "ul", items: [
      "Quadrifoglio Barra — cuisine italienne raffinée, une référence dans le quartier.",
      "Prima Bruschetteria — cadre décontracté, bruschettas et cuisine méditerranée pour un déjeuner léger face à la mer.",
      "Estrela do Mar — fruits de mer généreux, ambiance familiale.",
    ]},
    { type: "h3", text: "Shopping et restauration rapide" },
    { type: "ul", items: [
      "BarraShopping — l'un des plus grands centres commerciaux d'Amérique latine, avec un large choix de restaurants et de boutiques climatisées.",
      "Píer Barra — complexe en bord de plage regroupant plusieurs restaurants avec terrasse vue mer.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "Barra da Tijuca est le quartier le plus adapté aux familles cherchant confort, sécurité et infrastructures modernes, mais il manque du charme historique et de l'ambiance de rue que l'on trouve à Ipanema ou Santa Teresa." },

    { type: "h2", text: "Que voir et que faire" },
    { type: "h3", text: "Le Parque Olímpico" },
    { type: "p", text: "Héritage des Jeux olympiques de 2016, ce complexe sportif accueille aujourd'hui des événements et compétitions, ainsi que des espaces ouverts au public pour le sport amateur." },
    { type: "h3", text: "Les sports de glisse" },
    { type: "p", text: "Barra est reconnue comme l'un des meilleurs spots du Brésil pour le kitesurf et le stand-up paddle, avec plusieurs écoles proposant cours et location de matériel pour tous les niveaux." },
    { type: "h3", text: "Le parapente de la Pedra Bonita" },
    { type: "p", text: "À proximité du quartier, la Pedra Bonita est le point de décollage le plus réputé de Rio pour le vol libre, avec atterrissage directement sur la plage de São Conrado, entre Barra et la Zona Sul." },

    { type: "h2", text: "Une journée parfaite à Barra da Tijuca" },
    { type: "ol", items: [
      "9h — Petit-déjeuner face à la plage au Píer Barra.",
      "10h — Cours de surf ou de stand-up paddle en fonction du niveau.",
      "12h30 — Déjeuner léger chez Prima Bruschetteria.",
      "14h30 — Shopping et climatisation au BarraShopping en cas de forte chaleur.",
      "16h30 — Balade à vélo sur la piste cyclable en bord de plage.",
      "18h30 — Coucher de soleil et dîner de fruits de mer face à l'océan.",
    ]},

    { type: "faq", items: [
      { q: "Barra da Tijuca est-elle loin de la Zona Sul ?", a: "Comptez entre 30 et 50 minutes en voiture depuis Ipanema ou Copacabana selon le trafic, davantage aux heures de pointe. Le métro dessert désormais également le quartier." },
      { q: "Barra est-elle adaptée à un premier séjour à Rio ?", a: "Elle convient surtout aux familles cherchant confort moderne et espace, mais manque de l'ambiance de quartier et du patrimoine historique de la Zona Sul, essentiels pour une première découverte de la ville." },
      { q: "Peut-on surfer à Barra da Tijuca sans expérience ?", a: "Oui, plusieurs écoles proposent des cours pour débutants, mais les vagues peuvent être plus puissantes qu'à Ipanema ; un encadrement est recommandé pour les premiers essais." },
      { q: "Comment se déplacer à Barra da Tijuca ?", a: "La voiture ou le VTC restent les moyens les plus pratiques compte tenu des grandes distances, même si le métro (ligne 4) et des lignes de bus rapides (BRT) desservent désormais le quartier." },
    ]},

    { type: "p", text: "Barra da Tijuca offre un Rio différent, plus américain dans son urbanisme, mais indéniablement efficace pour les sports nautiques et les longues journées de plage. Un bon complément à la Zona Sul historique, pas un substitut." },
  ],
};
