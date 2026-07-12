import type { Article } from "../types";
import hero from "@/assets/quartier-copacabana.jpg";
import galerie1 from "@/assets/copacabana-1.jpg";
import galerie2 from "@/assets/copacabana-2.jpg";

export const article: Article = {
  slug: "copacabana-guide-complet",
  title: "Copacabana : le guide complet du quartier le plus mythique de Rio",
  titleAccent: "mythique",
  description: "Notre guide complet de Copacabana : plage, histoire, hôtels, restaurants et vraies adresses. Écrit par des locaux, pas par Google Traduction.",
  category: "quartiers",
  tags: ["Copacabana", "Zona Sul", "guide de quartier", "plages"],
  date: "2026-06-18",
  author: "equipe",
  hero,
  heroAlt: "Vue aérienne de la plage de Copacabana avec sa promenade en vagues, Rio de Janeiro",
  featured: true,
  guide: true,
  popular: true,
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "On vous ouvre les portes de nos adresses favorites à Copacabana.",
    },
    {
      label: "City tour privé",
      href: "https://www.jeitinho.fr/experiences",
      description: "Copacabana, Pain de Sucre, Urca — la baie de Guanabara en une matinée avec un local.",
    },
  ],
  sections: [
    { type: "p", text: "Copacabana a mauvaise réputation auprès de ceux qui ne l'ont jamais vraiment regardée. On la dit trop touristique, trop bruyante, dépassée par Ipanema. C'est oublier que ce quartier reste, encore aujourd'hui, l'un des fronts de mer les plus impressionnants du monde, et surtout l'un des plus vivants : ici, toutes les générations de Rio se croisent sur la même calçada." },
    { type: "p", text: "Ce guide n'est pas une carte postale. C'est ce qu'on dirait à un ami qui débarque : où marcher, où s'asseoir, où éviter, et à quelle heure faire quoi." },

    { type: "h2", text: "Comprendre Copacabana en cinq minutes" },
    { type: "p", text: "Copacabana s'étend sur près de quatre kilomètres, du fort militaire qui garde son extrémité sud jusqu'à Leme, son prolongement plus tranquille au nord. La plage suit une courbe presque parfaite, bordée par la célèbre calçada en mosaïque noire et blanche dessinée dans les années 1970 par Roberto Burle Marx, en écho aux pavés du front de mer de Lisbonne." },
    { type: "p", text: "Le quartier est structuré autour de deux axes parallèles à la mer : l'avenue Atlântica, sur la plage, et la rue Nossa Senhora de Copacabana, artère commerçante un peu plus loin dans les terres. Entre les deux, un quadrillage dense de rues résidentielles, d'immeubles Art déco et de petits commerces qui ont traversé les décennies sans prendre une ride." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Ne jugez pas Copacabana un dimanche après-midi bondé. Venez plutôt un mardi matin à 7h : la plage est presque vide, les pêcheurs rentrent leurs filets, et les seniors font leur gymnastique en musique sur la calçada. C'est là qu'on comprend le vrai rythme du quartier." },

    { type: "h2", text: "Un peu d'histoire : de village de pêcheurs à mythe mondial" },
    { type: "p", text: "Jusqu'au début du XXe siècle, Copacabana n'était qu'un hameau de pêcheurs isolé du reste de Rio par les collines. Tout bascule en 1892 avec le percement du tunnel Velho, qui relie enfin le quartier au centre-ville, puis en 1923 avec l'ouverture du Copacabana Palace, premier hôtel de luxe du genre en Amérique du Sud. En quelques années, le quartier devient le symbole du glamour carioca, fréquenté par des stars internationales et des têtes couronnées." },
    { type: "p", text: "Dans les années 1970, le rétrécissement naturel de la plage pousse la ville à un chantier titanesque : agrandir artificiellement le sable côté mer et redessiner toute la promenade. C'est de ce chantier que naît la calçada actuelle, devenue depuis l'un des symboles visuels les plus reconnaissables de Rio, autant que le Christ ou le Pain de Sucre." },

    { type: "h2", text: "La plage : comment la lire" },
    { type: "p", text: "Comme à <a href=\"/blog/ipanema-guide-complet\">Ipanema</a>, la plage de Copacabana est structurée par des postos de sauveteurs, ici numérotés de 1 à 6. Mais l'ambiance change davantage selon les quartiers riverains que selon le poste lui-même." },
    { type: "h3", text: "Posto 1 — Leme, familial et local" },
    { type: "p", text: "L'extrémité nord, plus calme, prisée des familles du quartier et des seniors. Peu de touristes, ambiance de voisinage." },
    { type: "h3", text: "Postos 2 à 4 — le cœur touristique" },
    { type: "p", text: "La zone la plus dense en hôtels, kiosques et vendeurs ambulants. Vivante, bruyante, mais c'est ici que bat le pouls touristique du quartier." },
    { type: "h3", text: "Posto 5 e 6 — vers le fort" },
    { type: "p", text: "Plus résidentiel, plus tranquille, proche du Forte de Copacabana où l'on peut prendre un café face à l'océan dans un cadre historique." },
    { type: "aeviter", title: "À éviter", text: "Ne laissez jamais vos affaires sans surveillance, même deux minutes, et évitez de porter des bijoux visibles sur l'avenue Atlântica la nuit. Le quartier est globalement sûr en journée, mais reste une zone très fréquentée où les vols à l'arraché existent, comme dans toute grande ville touristique." },

    { type: "h2", text: "Où manger — nos vraies adresses" },
    { type: "h3", text: "Institutions et classiques" },
    { type: "ul", items: [
      "Cervantes — le sanduíche de filé com abacaxi (steak-ananas) est un rite de passage carioca, ouvert jusqu'à l'aube.",
      "Bar Lagoa (annexe historique du quartier) — pour un chope glacé et des petiscos sans chichi.",
      "Amir — cuisine libanaise servie depuis des décennies, discrète mais excellente.",
    ]},
    { type: "h3", text: "Tables plus soignées" },
    { type: "ul", items: [
      "Miam Miam (côté Botafogo, à deux pas) — cuisine créative dans un cadre rétro-chic.",
      "Restaurante do Copacabana Palace (Cipriani / Pérgula) — pour un déjeuner d'exception face à la mer.",
      "Marius Degustare — buffet de fruits de mer à volonté, une institution pour les amateurs de poisson.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "Les kiosques de plage (barracas) valent le détour pour une eau de coco ou un chope, mais négociez le prix des en-cas avant de commander, surtout aux heures de forte affluence." },

    { type: "h2", text: "Boire un verre et sortir" },
    { type: "p", text: "Copacabana n'est plus la reine de la nightlife carioca — ce titre appartient à <a href=\"/blog/lapa-guide-complet\">Lapa</a> — mais le quartier garde quelques adresses solides pour une soirée en douceur." },
    { type: "ul", items: [
      "Sirena — bar de plage design, cocktails soignés, coucher de soleil sur l'Atlantique.",
      "Mud Bigode — bar caché façon speakeasy, ambiance intimiste.",
      "Terraço do Copacabana Palace — pour un drink avec vue à l'occasion d'une soirée spéciale.",
    ]},

    { type: "h2", text: "Que voir autour de Copacabana" },
    { type: "p", text: "Le Forte de Copacabana, à l'extrémité sud de la plage, offre l'un des plus beaux points de vue sur la baie et abrite un petit musée militaire. De là, une promenade à pied mène vers Arpoador puis <a href=\"/blog/ipanema-guide-complet\">Ipanema</a>. Vers le nord, le tunnel Velho ou une courte course en voiture permettent de rejoindre <a href=\"/blog/urca-guide-complet\">Urca</a> et le Pain de Sucre, incontournables pour le coucher de soleil." },

    { type: "h2", text: "Une journée parfaite à Copacabana" },
    { type: "ol", items: [
      "7h — Marche matinale sur la calçada, pendant que la plage est encore calme.",
      "9h — Petit-déjeuner et café dans une padaria de la rue Barata Ribeiro.",
      "11h — Plage côté Posto 4, avec une pause eau de coco au kiosque.",
      "13h30 — Déjeuner de fruits de mer chez Marius ou dans une casa de sucos locale.",
      "16h — Visite du Forte de Copacabana pour la vue et l'histoire.",
      "18h — Coucher de soleil vers Arpoador ou Urca.",
      "20h30 — Dîner et sanduíche de Cervantes pour l'expérience carioca ultime.",
    ]},

    { type: "faq", items: [
      { q: "Copacabana ou Ipanema : où loger ?", a: "Copacabana offre un meilleur rapport qualité-prix et une vie de quartier plus authentique et populaire. Ipanema et Leblon sont plus chics et plus chers. Le choix dépend de votre budget et du style de séjour recherché." },
      { q: "Copacabana est-elle sûre ?", a: "Oui, en journée le quartier est très fréquenté et globalement sûr. La nuit, restez sur l'avenue Atlântica et les rues éclairées et évitez d'exhiber des objets de valeur." },
      { q: "Combien de temps pour visiter Copacabana ?", a: "Une demi-journée suffit pour la plage et la calçada, mais comptez une journée complète si vous voulez inclure le Forte de Copacabana et une balade jusqu'à Urca." },
      { q: "Comment venir à Copacabana ?", a: "Le métro (ligne 1) dessert directement le quartier avec plusieurs stations. C'est le moyen le plus simple et le plus sûr depuis le centre-ville ou l'aéroport avec correspondance." },
    ]},

    { type: "p", text: "Copacabana ne cherche pas à séduire, elle est déjà installée dans sa légende depuis un siècle. Marchez sa calçada au lever du jour, et vous comprendrez pourquoi tant de cariocas continuent de l'aimer malgré les modes qui vont et viennent." },
  ],
};
