import type { Article } from "../types";
import hero from "@/assets/quartier-jardim-botanico.jpg";
import galerie1 from "@/assets/jardim-botanico-1.jpg";
import galerie2 from "@/assets/jardim-botanico-2.jpg";

export const article: Article = {
  slug: "jardim-botanico-guide-complet",
  title: "Jardim Botânico : le guide complet du quartier vert et résidentiel de Rio",
  titleAccent: "vert",
  description: "Notre guide complet du Jardim Botânico : jardin botanique, gastronomie et vraies adresses de quartier. Écrit par des locaux, pas par Google Traduction.",
  category: "quartiers",
  tags: ["Jardim Botânico", "Zona Sul", "guide de quartier", "nature"],
  date: "2026-07-06",
  author: "equipe",
  hero,
  heroAlt: "Allée de palmiers impériaux du Jardin Botanique de Rio de Janeiro",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "On vous ouvre les portes de nos adresses favorites au Jardim Botânico.",
    },
    {
      label: "Expériences nature",
      href: "https://www.jeitinho.fr/experiences",
      description: "Jardin botanique, Lagoa et Corcovado, la nature de Rio avec un local.",
    },
  ],
  sections: [
    { type: "p", text: "Le Jardim Botânico est le quartier que l'on découvre souvent par accident, en cherchant un restaurant tranquille ou en visitant le jardin qui lui donne son nom, avant de réaliser qu'il s'agit de l'un des coins les plus verts et les plus paisibles de toute la Zona Sul." },
    { type: "p", text: "Ce guide n'est pas une simple fiche botanique. C'est ce qu'on dirait à un ami qui débarque : où marcher, où s'asseoir, où éviter, et à quelle heure faire quoi." },

    { type: "h2", text: "Comprendre le Jardim Botânico en cinq minutes" },
    { type: "p", text: "Le quartier s'étend entre la lagune Rodrigo de Freitas et les contreforts de la forêt de Tijuca, adossé à la Pedra da Gávea qui domine tout l'horizon. Sa faible densité, ses rues arborées et l'absence de grands axes de circulation en font l'un des quartiers résidentiels les plus recherchés de la ville, en particulier par les familles avec enfants et les expatriés en poste durable." },
    { type: "p", text: "Le Jardin botanique lui-même, fondé en 1808, s'étend sur 54 hectares et abrite plus de 6 500 espèces végétales, dont la célèbre allée de palmiers impériaux plantée à l'origine du site. C'est aussi ici que se trouve le siège du Instituto Moreira Salles, référence culturelle incontournable." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Visitez le Jardin botanique tôt le matin, à l'ouverture : la lumière rasante sur l'allée des palmiers impériaux et la fraîcheur encore présente rendent la visite bien plus agréable qu'en pleine chaleur de l'après-midi." },

    { type: "h2", text: "Le Jardin botanique : ce qu'il ne faut pas manquer" },
    { type: "p", text: "Au-delà de l'allée des palmiers impériaux, ne manquez pas la serre aux orchidées, le jardin japonais offert par la communauté nippo-brésilienne, et l'étang aux victorias regias, ces immenses nénuphars amazoniens capables de supporter le poids d'un enfant. Des singes-écureuils et des toucans se laissent parfois observer en liberté dans les frondaisons." },
    { type: "p", text: "Comptez au minimum deux heures pour une visite complète, davantage si vous vous intéressez à la botanique. Le jardin propose également des visites guidées thématiques, notamment sur les plantes médicinales indigènes." },
    { type: "aeviter", title: "À éviter", text: "N'oubliez pas votre répulsif anti-moustiques : le jardin est humide et arboré, particulièrement propice aux moustiques en fin de journée et pendant la saison des pluies (décembre à mars)." },

    { type: "h2", text: "Où manger — nos vraies adresses" },
    { type: "h3", text: "Autour du jardin et de la lagune" },
    { type: "ul", items: [
      "Olympe — table gastronomique franco-brésilienne, l'une des adresses les plus raffinées du quartier.",
      "Guimas — institution familiale et discrète, cuisine brésilienne et internationale de qualité constante depuis des décennies.",
      "Espaço BR (Jardim Botânico) — cadre végétal luxuriant, cuisine brésilienne contemporaine.",
    ]},
    { type: "h3", text: "Cafés et brunchs" },
    { type: "ul", items: [
      "Instituto Moreira Salles (café interne) — pause déjeuner dans un cadre culturel exceptionnel, jardin dessiné par Burle Marx.",
      "Padaria local sur la rua Jardim Botânico — pour un petit-déjeuner simple avant la visite du jardin.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "Le quartier est prisé par une clientèle plus âgée et plus aisée : les restaurants y sont globalement plus chers qu'à Botafogo mais offrent un cadre plus intimiste que ceux d'Ipanema ou Leblon." },

    { type: "h2", text: "Que voir et que faire" },
    { type: "h3", text: "L'Instituto Moreira Salles" },
    { type: "p", text: "Cette fondation culturelle installée dans une ancienne demeure privée organise des expositions de photographie et d'art de très haute qualité, dans un jardin paysager conçu par Roberto Burle Marx, souvent méconnu des visiteurs pressés." },
    { type: "h3", text: "Point de départ vers le Corcovado" },
    { type: "p", text: "Le quartier constitue également l'un des points d'accès pour l'ascension en train à crémaillère vers le Christ Rédempteur, la gare de départ se trouvant à quelques minutes." },
    { type: "h3", text: "La lagune Rodrigo de Freitas" },
    { type: "p", text: "Bordant le quartier, la lagune offre une piste continue pour la course à pied, le vélo ou le pédalo, avec la Pedra da Gávea et le Corcovado en toile de fond." },

    { type: "h2", text: "Une journée parfaite au Jardim Botânico" },
    { type: "ol", items: [
      "8h30 — Petit-déjeuner dans une padaria de quartier.",
      "9h — Ouverture et visite du Jardin botanique, deux heures environ.",
      "11h30 — Détour par l'Instituto Moreira Salles pour l'exposition en cours.",
      "13h — Déjeuner chez Guimas ou Espaço BR.",
      "15h — Balade ou pédalo sur la lagune Rodrigo de Freitas.",
      "17h — Départ vers le Corcovado pour le coucher de soleil, si le programme le permet.",
    ]},

    { type: "faq", items: [
      { q: "Combien de temps prévoir pour le Jardin botanique ?", a: "Comptez deux heures minimum, davantage si vous êtes passionné de botanique ou si vous participez à une visite guidée thématique." },
      { q: "Le Jardim Botânico est-il un bon quartier pour loger ?", a: "Oui pour un séjour calme et vert, notamment en famille, mais l'offre hôtelière y est plus limitée qu'à Ipanema ou Copacabana, avec surtout des locations d'appartements." },
      { q: "Peut-on combiner Jardim Botânico et Corcovado le même jour ?", a: "Oui, le quartier est l'un des points de départ pratiques du train à crémaillère vers le Christ Rédempteur, à réserver en ligne à l'avance." },
      { q: "Le jardin est-il adapté aux enfants ?", a: "Oui, les allées sont larges et ombragées, et la rencontre avec les singes-écureuils en liberté ravit généralement les plus jeunes." },
    ]},

    { type: "p", text: "Le Jardim Botânico offre un Rio plus lent, plus vert, où la nature tropicale reprend ses droits en plein cœur de la Zona Sul. Un quartier à savourer sans presser le pas." },
  ],
};
