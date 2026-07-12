import type { Article } from "../types";
import hero from "@/assets/quartier-santa-teresa.jpg";
import galerie1 from "@/assets/santa-teresa-1.jpg";
import galerie2 from "@/assets/santa-teresa-2.jpg";

export const article: Article = {
  slug: "santa-teresa-guide-complet",
  title: "Santa Teresa : le guide complet du quartier bohème de Rio",
  titleAccent: "bohème",
  description: "Notre guide complet de Santa Teresa : bondinho, ateliers d'artistes, ruelles pavées et vraies adresses. Écrit par des locaux, pas par Google Traduction.",
  category: "quartiers",
  tags: ["Santa Teresa", "centre historique", "guide de quartier", "art"],
  date: "2026-06-22",
  author: "equipe",
  hero,
  heroAlt: "Ruelle pavée bordée de maisons coloniales colorées à Santa Teresa, Rio de Janeiro",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "City tour privé",
      href: "https://www.jeitinho.fr/experiences",
      description: "Santa Teresa, Lapa, centre historique — le vieux Rio en une matinée avec un local.",
    },
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "On vous ouvre les portes de nos ateliers d'artistes et adresses favorites.",
    },
  ],
  sections: [
    { type: "p", text: "Santa Teresa ne ressemble à aucun autre quartier de Rio. Perché sur une colline entre le centre-ville et <a href=\"/blog/lapa-guide-complet\">Lapa</a>, il a longtemps été le repaire des artistes, des architectes et des expatriés amoureux de son charme suranné. Ruelles pavées, maisons coloniales décrépites mais superbes, ateliers ouverts sur la rue : ici, Rio ressemble presque à une petite ville de Méditerranée perdue dans les tropiques." },
    { type: "p", text: "Ce guide n'est pas une liste de « choses à voir ». C'est ce qu'on dirait à un ami qui débarque : où marcher, où s'asseoir, où éviter, et à quelle heure faire quoi." },

    { type: "h2", text: "Comprendre Santa Teresa en cinq minutes" },
    { type: "p", text: "Le quartier occupe le sommet et les flancs du Morro de Santa Teresa, offrant des vues plongeantes sur la baie de Guanabara, le centre historique et le Pain de Sucre au loin. Son relief accidenté, ses rues sinueuses et l'absence de grands axes automobiles en ont fait, dès le XIXe siècle, un lieu de villégiature prisé de la bourgeoisie fuyant les épidémies du centre-ville." },
    { type: "p", text: "Le fameux bondinho, petit tramway jaune datant de 1896, reste le moyen de transport le plus emblématique pour rejoindre le quartier, traversant les arches des Arcos da Lapa avant de grimper la colline dans un tintement caractéristique." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Prenez le bondinho à l'aller pour l'expérience, mais redescendez à pied par la Rua Almirante Alexandrino : c'est la colonne vertébrale du quartier, et chaque virage révèle un atelier, un mirador ou un café improbable." },

    { type: "h2", text: "Un peu d'histoire : de refuge colonial à repaire d'artistes" },
    { type: "p", text: "Le quartier doit son nom à un couvent de religieuses carmélites fondé en 1750. Il se développe véritablement au XIXe siècle avec l'installation de riches familles cherchant l'air plus frais des hauteurs, loin des épidémies de fièvre jaune qui frappaient le centre. Le tramway, inauguré à la fin du siècle, en démocratise l'accès." },
    { type: "p", text: "Dans les années 1960-70, alors que le quartier se dégrade et devient plus abordable, il attire une génération d'artistes, de musiciens et d'intellectuels qui en font le foyer bohème que l'on connaît aujourd'hui. Cette identité artistique perdure : Santa Teresa compte aujourd'hui l'une des plus fortes concentrations d'ateliers d'art et de galeries de tout Rio." },

    { type: "h2", text: "Que voir et que faire" },
    { type: "h3", text: "Le bondinho" },
    { type: "p", text: "Le tramway historique traverse les arches de Lapa avant de grimper vers le quartier. C'est gratuit et c'est l'une des expériences les plus photographiées de la ville, mais prévoyez de l'attente aux heures de pointe touristique." },
    { type: "h3", text: "Le Parque das Ruínas" },
    { type: "p", text: "Ancienne demeure de la mécène Laurinda Santos Lobo, transformée en ruine architecturale ouverte au public, avec l'une des plus belles vues panoramiques sur le centre-ville et la baie. Gratuit, souvent méconnu des touristes pressés." },
    { type: "h3", text: "Le Museu Chácara do Céu" },
    { type: "p", text: "Ancienne résidence du collectionneur Raymundo Ottoni de Castro Maya, aujourd'hui musée abritant des œuvres de Portinari, Miró et Picasso, dans un cadre intimiste et un jardin remarquable." },
    { type: "aeviter", title: "À éviter", text: "Évitez de vous aventurer seul le soir dans les ruelles les moins fréquentées ou vers les favelas voisines sans guide local. Le quartier est globalement sûr en journée et sur les axes principaux, mais son relief et son éclairage limité imposent davantage de prudence après la tombée de la nuit qu'à Ipanema ou Leblon." },

    { type: "h2", text: "Où manger — nos vraies adresses" },
    { type: "ul", items: [
      "Bar do Mineiro — institution de cuisine du Minas Gerais, feijoada le samedi, ambiance de quartier authentique.",
      "Aprazível — restaurant en pleine végétation tropicale, l'une des plus belles terrasses de Rio pour un dîner romantique.",
      "Espírito Santa — cuisine amazonienne créative dans un cadre bohème-chic, jardin caché à l'arrière.",
      "Café do Alto — pour un café ou un brunch simple avec vue sur les toits du quartier.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "Beaucoup de restaurants du quartier ferment le lundi ou en tout début de semaine. Vérifiez les horaires avant de vous déplacer, surtout en dehors du week-end." },

    { type: "h2", text: "Shopping et artisanat" },
    { type: "p", text: "Le quartier regorge d'ateliers de céramistes, de bijoutiers et de peintres qui vendent directement depuis leur atelier, souvent ouvert sur rue. C'est l'endroit idéal pour trouver une pièce d'artisanat brésilien unique, loin des boutiques standardisées d'autres quartiers touristiques." },

    { type: "h2", text: "Une demi-journée parfaite à Santa Teresa" },
    { type: "ol", items: [
      "10h — Départ en bondinho depuis le centre, traversée des Arcos da Lapa.",
      "10h30 — Arrivée sur la colline, balade sur la Rua Almirante Alexandrino.",
      "11h30 — Visite du Parque das Ruínas et de son point de vue.",
      "12h30 — Déjeuner au Bar do Mineiro ou à l'Espírito Santa.",
      "14h30 — Visite du Museu Chácara do Céu.",
      "16h — Flânerie dans les ateliers d'artistes du quartier.",
      "18h — Coucher de soleil depuis un mirador avant de redescendre vers Lapa.",
    ]},

    { type: "faq", items: [
      { q: "Santa Teresa est-il sûr pour les touristes ?", a: "En journée et sur les axes principaux, oui, c'est un quartier globalement sûr et très fréquenté par les visiteurs. La prudence est de mise le soir, comme dans la plupart des quartiers de collines à Rio." },
      { q: "Peut-on loger à Santa Teresa ?", a: "Oui, le quartier compte plusieurs pousadas et maisons d'hôtes de charme, souvent installées dans d'anciennes demeures coloniales, avec vue sur la baie." },
      { q: "Combien de temps prévoir pour la visite ?", a: "Une demi-journée suffit pour l'essentiel, mais une journée complète permet de combiner Santa Teresa avec une descente vers le centre historique ou Lapa." },
      { q: "Comment rejoindre Santa Teresa depuis Ipanema ou Copacabana ?", a: "Le plus simple est un taxi ou un VTC (20 à 30 minutes selon le trafic), puis d'explorer le quartier à pied ou en bondinho une fois sur place." },
    ]},

    { type: "p", text: "Santa Teresa est le contrepoint parfait aux plages de la Zona Sul : un Rio plus lent, plus artistique, où le temps semble s'être arrêté quelque part entre le XIXe siècle et les années 1970." },
  ],
};
