import type { Article } from "../types";
import hero from "@/assets/quartier-catete.jpg";
import galerie1 from "@/assets/catete-1.jpg";
import galerie2 from "@/assets/catete-2.jpg";

export const article: Article = {
  slug: "catete-guide-complet",
  title: "Catete : le guide complet du quartier populaire et authentique de Rio",
  titleAccent: "authentique",
  description: "Notre guide complet de Catete : Palácio, vie de quartier populaire et vraies adresses locales. Écrit par des locaux, pas par Google Traduction.",
  category: "quartiers",
  tags: ["Catete", "centre historique", "guide de quartier", "vie locale"],
  date: "2026-07-04",
  author: "equipe",
  hero,
  heroAlt: "Rue animée du quartier de Catete avec ses immeubles Art déco, Rio de Janeiro",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "On vous ouvre les portes de nos adresses favorites à Catete.",
    },
    {
      label: "City tour privé",
      href: "https://www.jeitinho.fr/experiences",
      description: "Catete, Glória, Flamengo — le Rio historique en une matinée avec un local.",
    },
  ],
  sections: [
    { type: "p", text: "Catete est le genre de quartier que les guides internationaux mentionnent en une ligne, coincé entre <a href=\"/blog/gloria-guide-complet\">Glória</a> et <a href=\"/blog/flamengo-guide-complet\">Flamengo</a>, alors qu'il concentre l'un des visages les plus sincères de Rio : une vie de quartier populaire, dense, où l'on croise plus de cariocas en pantoufles que de touristes en tongs." },
    { type: "p", text: "Ce guide n'est pas une fiche patrimoniale de plus. C'est ce qu'on dirait à un ami qui débarque : où marcher, où s'asseoir, où éviter, et à quelle heure faire quoi." },

    { type: "h2", text: "Comprendre Catete en cinq minutes" },
    { type: "p", text: "Catete s'organise essentiellement autour de sa rue principale, la rua do Catete, prolongement direct de celle qui traverse <a href=\"/blog/flamengo-guide-complet\">Flamengo</a>. Ce corridor commerçant continu concentre pharmacies, padarias, magasins de vêtements et petits restaurants, avec une densité et une animation qui rappellent davantage le Rio du quotidien que les zones balnéaires plus policées." },
    { type: "p", text: "Le quartier a connu son âge d'or au début du XXe siècle, lorsque le Palácio do Catete servait de siège à la présidence de la République. Depuis le déplacement de la capitale à Brasília en 1960, il a conservé une architecture Art déco remarquable mais un peu délaissée, aujourd'hui redécouverte par une nouvelle génération de cariocas en quête de loyers plus abordables." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Marchez la rua do Catete un samedi matin, entre 9h et midi : c'est le moment où le quartier est le plus vivant, entre marché de rue, files devant les padarias et habitants qui font leurs courses de la semaine." },

    { type: "h2", text: "Le Palácio do Catete : cœur historique du quartier" },
    { type: "p", text: "Ce palais du XIXe siècle, ancienne résidence présidentielle, est aujourd'hui le Museu da República. On y visite les appartements présidentiels d'époque, dont la chambre où le président Getúlio Vargas s'est suicidé en 1954, un événement qui a marqué profondément l'histoire politique brésilienne." },
    { type: "p", text: "Le jardin du palais, ouvert gratuitement au public, abrite des paons en liberté et constitue un havre de fraîcheur au cœur du quartier, très fréquenté par les familles du voisinage en fin d'après-midi." },
    { type: "aeviter", title: "À éviter", text: "Comme dans la plupart des quartiers populaires du centre, évitez de sortir des objets de valeur ostensiblement dans la rue et privilégiez les axes commerçants animés plutôt que les ruelles adjacentes après la tombée de la nuit." },

    { type: "h2", text: "Où manger — nos vraies adresses" },
    { type: "ul", items: [
      "Estrelas da Babilônia — petit restaurant populaire servant une cuisine brésilienne du jour, prix imbattables et clientèle locale.",
      "Boteco Casual — bar de quartier convivial pour un chope et des petiscos en fin de journée.",
      "Padarias de la rua do Catete — plusieurs boulangeries traditionnelles pour un pão na chapa et un café serré, comme le prennent les cariocas avant le travail.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "Catete est l'un des quartiers les plus économiques de la Zona Sul pour manger : un déjeuner au kilo dans une bonne casa de comida y coûte souvent deux à trois fois moins cher qu'à Ipanema pour une qualité tout aussi honnête." },

    { type: "h2", text: "Que voir et que faire" },
    { type: "h3", text: "Le Museu da República" },
    { type: "p", text: "Au-delà de l'aspect politique, le musée présente une riche collection d'art brésilien du XIXe et XXe siècle, dans un cadre architectural exceptionnel mêlant éléments néoclassiques et tropicaux." },
    { type: "h3", text: "L'architecture Art déco" },
    { type: "p", text: "En vous promenant dans les rues résidentielles perpendiculaires à la rua do Catete, vous découvrirez de nombreux immeubles Art déco des années 1930-1940, souvent dans un état patiné mais avec un charme architectural indéniable, témoins de l'âge d'or du quartier." },
    { type: "h3", text: "Vie de quartier" },
    { type: "p", text: "Catete conserve un commerce de proximité vivant : merceries, cordonniers, marchands de journaux — une scène de rue de plus en plus rare dans les quartiers plus gentrifiés de la Zona Sul." },

    { type: "h2", text: "Une demi-journée parfaite à Catete" },
    { type: "ol", items: [
      "9h — Café et pão na chapa dans une padaria de la rua do Catete.",
      "10h — Visite du Museu da República et de son jardin aux paons.",
      "12h — Déjeuner au kilo dans une casa de comida populaire.",
      "13h30 — Balade dans les rues résidentielles Art déco du quartier.",
      "15h — Poursuite vers Glória ou Flamengo, à quelques minutes à pied.",
    ]},

    { type: "faq", items: [
      { q: "Catete est-il un quartier touristique ?", a: "Non, c'est justement son intérêt : peu de touristes s'y aventurent, ce qui en fait une immersion authentique dans le quotidien carioca, à quelques minutes seulement de la Zona Sul." },
      { q: "Catete est-il un bon quartier pour loger ?", a: "Oui pour les voyageurs cherchant un budget serré et une vie de quartier authentique, avec un bon accès métro. L'offre hôtelière reste toutefois plus limitée qu'ailleurs." },
      { q: "Combien de temps prévoir pour la visite ?", a: "Une demi-journée suffit largement pour le palais, le jardin et une balade dans le quartier." },
      { q: "Comment rejoindre Catete ?", a: "Le quartier dispose de sa propre station de métro (ligne 1), directement reliée au centre-ville et à la Zona Sul." },
    ]},

    { type: "p", text: "Catete n'a rien à vendre aux touristes, et c'est précisément ce qui en fait une étape précieuse pour qui veut comprendre le Rio du quotidien, loin des plages et des clichés." },
  ],
};
