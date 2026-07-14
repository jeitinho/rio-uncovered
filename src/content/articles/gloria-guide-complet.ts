import type { Article } from "../types";
import hero from "@/assets/quartier-gloria.jpg";
import galerie1 from "@/assets/gloria-1.jpg";
import galerie2 from "@/assets/gloria-2.jpg";

export const article: Article = {
  slug: "gloria-guide-complet",
  title: "Glória : le guide complet du quartier historique méconnu de Rio",
  titleAccent: "méconnu",
  description: "Notre guide complet de Glória : église coloniale, marina, vues sur la baie et vraies adresses. Écrit par des locaux, pas par Google Traduction.",
  category: "quartiers",
  tags: ["Glória", "centre historique", "guide de quartier", "patrimoine"],
  date: "2026-07-02",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Église Nossa Senhora da Glória do Outeiro dominant la baie de Guanabara, Rio de Janeiro",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "City tour privé",
      href: "https://www.jeitinho.fr/experiences",
      description: "Glória, Flamengo, Catete — le Rio historique en une matinée avec un local.",
    },
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "On vous ouvre les portes de nos adresses favorites à Glória.",
    },
  ],
  sections: [
    { type: "p", text: "Glória est l'un des quartiers les plus injustement ignorés de Rio. Coincé entre <a href=\"/blog/flamengo-guide-complet\">Flamengo</a> et le centre-ville, il abrite pourtant l'une des plus belles églises coloniales du Brésil, une marina pittoresque et des rues résidentielles chargées d'histoire que la plupart des touristes traversent en voiture sans jamais s'y arrêter." },
    { type: "p", text: "Ce guide n'est pas une fiche patrimoniale. C'est ce qu'on dirait à un ami qui débarque : où marcher, où s'asseoir, où éviter, et à quelle heure faire quoi." },

    { type: "h2", text: "Comprendre Glória en cinq minutes" },
    { type: "p", text: "Le quartier tire son nom de l'église Nossa Senhora da Glória do Outeiro, perchée sur une petite colline qui domine la baie. Ce lieu de culte du XVIIIe siècle, où fut baptisée la princesse Isabel, future régente ayant signé l'abolition de l'esclavage au Brésil, reste un joyau architectural largement méconnu des circuits touristiques classiques." },
    { type: "p", text: "En contrebas, la Marina da Glória accueille plaisanciers et quelques restaurants avec vue sur la baie, tandis que le quartier résidentiel qui s'étend derrière l'église conserve un charme suranné, avec ses immeubles Art déco et ses rues calmes en pente douce." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Montez à l'église en fin de matinée en semaine : vous aurez souvent l'endroit presque pour vous seul, avec une vue imprenable sur la baie de Guanabara et l'Aterro do Flamengo en contrebas, sans la moindre file d'attente." },

    { type: "h2", text: "Un peu d'histoire" },
    { type: "p", text: "L'église Nossa Senhora da Glória do Outeiro, achevée en 1739, est considérée comme l'un des plus beaux exemples d'architecture baroque coloniale de Rio, avec ses azulejos portugais et son plan octogonal inhabituel. Dom Pedro Ier et sa famille en firent leur lieu de culte privilégié durant l'Empire, cimentant le prestige du quartier au XIXe siècle." },
    { type: "p", text: "La marina, construite au XXe siècle sur des terrains gagnés sur la baie, a accueilli plusieurs grands événements sportifs internationaux, dont des épreuves de voile lors des Jeux olympiques de 2016, confirmant la vocation nautique du quartier." },

    { type: "h2", text: "Que voir et que faire" },
    { type: "h3", text: "L'église Nossa Senhora da Glória do Outeiro" },
    { type: "p", text: "Accessible à pied par un escalier ou en funiculaire depuis la rue, l'église offre un panorama exceptionnel sur la baie de Guanabara. Son petit musée attenant présente une collection d'art sacré et des pièces liées à la famille impériale brésilienne." },
    { type: "h3", text: "La Marina da Glória" },
    { type: "p", text: "Promenade agréable en bord d'eau, avec vue sur le Pain de Sucre et Niterói de l'autre côté de la baie. C'est également un point de départ pour certaines excursions en bateau dans la baie de Guanabara." },
    { type: "h3", text: "Le Museu Carmen Miranda" },
    { type: "p", text: "Petit musée dédié à l'icône brésilienne, avec costumes, photographies et souvenirs retraçant la carrière de la chanteuse qui a incarné l'image du Brésil à Hollywood dans les années 1940." },
    { type: "aeviter", title: "À éviter", text: "Le quartier est calme en journée mais peu fréquenté le soir. Évitez de vous y attarder seul après la tombée de la nuit, en particulier dans les rues résidentielles en pente, moins éclairées et moins passantes que dans la Zona Sul." },

    { type: "h2", text: "Où manger — nos vraies adresses" },
    { type: "ul", items: [
      "Restaurante da Marina da Glória — cuisine de fruits de mer avec vue directe sur la baie, cadre agréable pour un déjeuner tranquille.",
      "Cais do Oriente (proche centre-ville) — cuisine fusion dans un cadre historique, à quelques minutes de Glória.",
      "Padarias locales de la rue do Russel — pour un café ou un pão de queijo rapide entre deux visites.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "Glória compte peu de restaurants comparé aux quartiers voisins : prévoyez plutôt de combiner la visite avec un déjeuner à Flamengo ou Catete, à quelques minutes à pied." },

    { type: "h2", text: "Une demi-journée parfaite à Glória" },
    { type: "ol", items: [
      "9h30 — Montée à l'église Nossa Senhora da Glória do Outeiro pour la vue matinale.",
      "10h30 — Visite du petit musée d'art sacré attenant.",
      "11h30 — Promenade le long de la Marina da Glória.",
      "12h30 — Déjeuner avec vue sur la baie au restaurant de la marina.",
      "14h — Détour par le Museu Carmen Miranda.",
      "15h — Poursuite vers Flamengo ou Catete, à quelques minutes à pied.",
    ]},

    { type: "faq", items: [
      { q: "Glória vaut-il le détour pour un court séjour ?", a: "Oui, si vous avez déjà vu les incontournables de la Zona Sul et cherchez une expérience plus authentique et moins fréquentée par les touristes, avec une forte valeur patrimoniale." },
      { q: "Glória est-il un bon quartier pour loger ?", a: "C'est possible et souvent plus abordable qu'ailleurs, avec un bon accès au métro, mais l'offre d'hébergement et de restauration reste plus limitée qu'à Flamengo ou dans la Zona Sul." },
      { q: "Comment rejoindre Glória ?", a: "Le quartier dispose de sa propre station de métro (ligne 1), ce qui en fait une étape facile à intégrer entre le centre-ville et Flamengo." },
      { q: "Combien de temps prévoir pour la visite ?", a: "Deux à trois heures suffisent pour l'église, le musée et la marina, ce qui en fait une excellente escale d'une demi-journée." },
    ]},

    { type: "p", text: "Glória récompense les curieux qui prennent le temps de sortir des sentiers battus. Entre azulejos coloniaux et vue sur la baie, c'est un des rares endroits de Rio où l'histoire impériale du Brésil se lit encore à ciel ouvert." },
  ],
};
