import type { Article } from "../types";
import hero from "@/assets/quartier-lagoa.jpg";
import galerie1 from "@/assets/lagoa-1.jpg";
import galerie2 from "@/assets/lagoa-2.jpg";

export const article: Article = {
  slug: "lagoa-guide-complet",
  title: "Lagoa : le guide complet du quartier autour de la lagune de Rio",
  titleAccent: "lagune",
  description: "Notre guide complet de Lagoa : lagune Rodrigo de Freitas, sport, coucher de soleil et vraies adresses. Écrit par des locaux, pas par Google Traduction.",
  category: "quartiers",
  tags: ["Lagoa", "Zona Sul", "guide de quartier", "sport"],
  date: "2026-07-08",
  author: "equipe",
  hero,
  heroAlt: "Lagune Rodrigo de Freitas au coucher du soleil avec vue sur le Corcovado, Rio de Janeiro",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "On vous ouvre les portes de nos adresses favorites autour de la Lagoa.",
    },
    {
      label: "Expériences nature",
      href: "https://www.jeitinho.fr/experiences",
      description: "Pédalo, vélo et coucher de soleil sur la lagune avec un local.",
    },
  ],
  sections: [
    { type: "p", text: "Lagoa n'est pas tout à fait un quartier au sens classique, mais plutôt une zone qui entoure la lagune Rodrigo de Freitas, à cheval entre <a href=\"/blog/ipanema-guide-complet\">Ipanema</a>, <a href=\"/blog/leblon-guide-complet\">Leblon</a> et le <a href=\"/blog/jardim-botanico-guide-complet\">Jardim Botânico</a>. C'est pourtant l'un des lieux les plus emblématiques du quotidien carioca, où sport, détente et coucher de soleil se conjuguent avec le Corcovado en toile de fond." },
    { type: "p", text: "Ce guide n'est pas une simple carte du plan d'eau. C'est ce qu'on dirait à un ami qui débarque : où marcher, où s'asseoir, où éviter, et à quelle heure faire quoi." },

    { type: "h2", text: "Comprendre Lagoa en cinq minutes" },
    { type: "p", text: "La lagune Rodrigo de Freitas, reliée à l'océan par un canal, est entourée d'une piste continue de 7,5 kilomètres dédiée aux joggeurs, cyclistes et patineurs. Cette ceinture verte, aménagée dans les années 1960, est aujourd'hui l'un des espaces de sport et de loisirs à ciel ouvert les plus fréquentés de Rio, utilisée quotidiennement par des milliers de cariocas." },
    { type: "p", text: "Le quartier résidentiel qui borde la lagune, particulièrement du côté Ipanema-Leblon, compte parmi les adresses les plus recherchées de la ville pour la vue directe sur l'eau et le Corcovado, avec des prix immobiliers parmi les plus élevés du Brésil." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Venez pédaler ou marcher autour de la lagune en fin d'après-midi, une heure avant le coucher du soleil : la lumière sur l'eau et le Corcovado qui se découpe à l'horizon offrent l'une des scènes les plus photogéniques de Rio, sans qu'il soit nécessaire de payer une excursion." },

    { type: "h2", text: "Faire le tour de la lagune" },
    { type: "p", text: "Le tour complet à pied prend environ 1h30 à un rythme tranquille, ou 30 à 40 minutes à vélo. Des stations de vélos en libre-service et plusieurs loueurs de pédalos et de stand-up paddle jalonnent le parcours, en particulier du côté du Parque dos Patins." },
    { type: "p", text: "Le dimanche, comme sur l'Aterro do Flamengo, certaines voies sont fermées à la circulation motorisée, transformant l'ensemble en un immense espace piéton et cyclable très fréquenté par les familles cariocas." },
    { type: "aeviter", title: "À éviter", text: "Évitez de faire le tour complet seul à la nuit tombée dans les portions les moins éclairées, en particulier côté Jardim Botânico. En journée, la fréquentation dense en fait un des espaces les plus sûrs de la ville." },

    { type: "h2", text: "Où manger et boire un verre" },
    { type: "ul", items: [
      "Palaphita Kitch — kiosques flottants illuminés aux torches, cocktails créatifs, l'un des meilleurs spots de coucher de soleil de Rio.",
      "Braseiro da Gávea (à la frontière du quartier) — boteco animé, cuisine brésilienne conviviale.",
      "Quiosques du Parque dos Patins — pour un chope ou un açaí en bord d'eau, ambiance décontractée.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "Les kiosques flottants proposent souvent de la musique live en fin de semaine : arrivez avant 18h pour avoir une bonne table côté eau avant le coup de feu du coucher de soleil." },

    { type: "h2", text: "Que voir et que faire autour de la lagune" },
    { type: "h3", text: "Le Parque dos Patins" },
    { type: "p", text: "Ce petit parc en bord de lagune concentre location de vélos, de pédalos et plusieurs kiosques, en faisant un point de départ pratique pour découvrir le plan d'eau." },
    { type: "h3", text: "Le Jockey Club Brasileiro" },
    { type: "p", text: "L'hippodrome historique de Rio, situé en bordure de la lagune, organise régulièrement des courses hippiques ouvertes au public, avec vue sur le Corcovado en arrière-plan — une expérience atypique loin des sentiers touristiques classiques." },
    { type: "h3", text: "Les illuminations de Noël" },
    { type: "p", text: "Chaque année, un immense sapin flottant illuminé est installé sur la lagune pour les fêtes de fin d'année, devenant l'un des symboles visuels les plus connus du Rio de décembre." },

    { type: "h2", text: "Une demi-journée parfaite autour de la Lagoa" },
    { type: "ol", items: [
      "15h30 — Location de vélo au Parque dos Patins.",
      "16h — Tour complet de la lagune à vélo, environ 40 minutes.",
      "17h — Pause détente et açaí dans un kiosque en bord d'eau.",
      "18h — Cocktail au coucher de soleil au Palaphita Kitch.",
      "20h — Dîner au Braseiro da Gávea ou poursuite vers Leblon.",
    ]},

    { type: "faq", items: [
      { q: "Peut-on se baigner dans la lagune ?", a: "Non, la baignade n'est pas recommandée, l'eau étant davantage dédiée aux activités nautiques encadrées comme l'aviron ou le stand-up paddle qu'à la baignade libre." },
      { q: "Combien de temps pour faire le tour de la lagune ?", a: "Environ 1h30 à pied ou 30 à 40 minutes à vélo pour les 7,5 kilomètres de la boucle complète." },
      { q: "La Lagoa est-elle un bon quartier pour loger ?", a: "C'est surtout une zone résidentielle prisée entourant Ipanema, Leblon et le Jardim Botânico ; l'offre hôtelière directe y est limitée mais les quartiers adjacents constituent d'excellentes bases." },
      { q: "Quand voir le sapin de Noël flottant ?", a: "Il est généralement installé de mi-novembre à début janvier, illuminé chaque soir à la tombée de la nuit." },
    ]},

    { type: "p", text: "La Lagoa, c'est le rendez-vous sportif et contemplatif des cariocas, entre effort physique et coucher de soleil sur fond de Corcovado. Un incontournable pour comprendre comment Rio prend soin de son corps et de sa lumière." },
  ],
};
