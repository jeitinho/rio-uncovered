import type { Article } from "../types";
import hero from "@/assets/appart-ppg-vue-panoramique.jpg";

export const article: Article = {
  slug: "guide-favelas-rocinha-vidigal-ppg",
  title: "Favelas & Communautés : Rocinha, Vidigal, PPG",
  titleAccent: "Trois communautés, trois ambiances",
  description: "Guide du Manuel Jeitinho : trois adresses par communauté — une cuisine authentique et des points de vue que peu de visiteurs connaissent.",
  category: "gastronomie",
  tags: ["favela", "Rocinha", "Vidigal", "PPG", "Pavão-Pavãozinho", "où manger", "où boire", "communauté"],
  date: "2026-09-01",
  author: "nawal",
  hero,
  heroAlt: "Vue panoramique depuis les hauteurs de Pavão-Pavãozinho (PPG), toits de la favela au premier plan et baie de Guanabara en arrière-plan",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Immersion favela avec un guide local",
      href: "https://jeitinho.fr/experiences/favelas-immersion-culturelle",
      description: "On vous emmène à Rocinha, Vidigal ou PPG avec un guide qui y a grandi.",
    },
    {
      label: "Conciergerie sur mesure",
      href: "https://jeitinho.fr/trouver-un-jeitinho",
      description: "Pour organiser votre visite au bon moment, avec les bonnes personnes.",
    },
  ],
  sections: [
    { type: "h2", text: "L'essentiel" },
    { type: "p", text: "Les favelas font partie intégrante de la ville et beaucoup se visitent aujourd'hui sereinement, notamment accompagné d'un guide local ou avec du bon sens. Cette page réunit trois adresses par communauté : une cuisine authentique et des points de vue que peu de visiteurs connaissent." },
    { type: "ul", items: [
      "Sors des sentiers touristiques habituels",
      "Cuisine nordestine authentique et prix très accessibles",
      "Panoramas parmi les plus beaux de Rio",
      "Privilégie une visite en journée ou accompagnée",
    ]},

    { type: "h2", text: "Pavão-Pavãozinho (PPG)" },
    { type: "conseil", title: "Conseil Jeitinho", text: "Le Pavão-Pavãozinho (PPG) se rejoint à pied depuis Copacabana ou Ipanema. Une fois dans la communauté, monte à pied jusqu'au Bondinho de la favela Pavão : il est gratuit et dessert cinq stations jusqu'au sommet. Pour cette page, pas de moto-taxi au PPG." },
    
    { type: "p", text: "Bar Panelada" },
    { type: "p", text: "Cuisine nordestine authentique au cœur du PPG. Une adresse locale à découvrir pour son identité populaire et sa cuisine généreuse." },
    
    { type: "p", text: "Bar Encontro Nordestino" },
    { type: "p", text: "Petite enseigne locale : churrasco, tilápia na brasa, coração de bœuf grillé, baião de dois et bières fraîches. À ne pas confondre avec la chaîne Encontro Nordestino Restaurante." },
    
    { type: "p", text: "Bar do Jardim" },
    { type: "p", text: "Petit bar du PPG avec vue et ambiance locale, dans un cadre très communautaire." },

    { type: "h2", text: "Rocinha" },
    
    { type: "p", text: "Mirante da Rocinha" },
    { type: "p", text: "Point de vue et restaurant avec panorama sur la Zona Sul depuis la Rocinha." },
    
    { type: "p", text: "Novo Visual" },
    { type: "p", text: "Restaurant local avec vue panoramique, cuisine brésilienne et ambiance de rooftop communautaire." },
    
    { type: "p", text: "Salinha Bar" },
    { type: "p", text: "Petit bar de quartier à Rocinha, pour une approche plus locale et conviviale." },

    { type: "h2", text: "Vidigal" },
    
    { type: "p", text: "Mirante do Arvrão" },
    { type: "p", text: "Bar-restaurant perché sur les hauteurs du Vidigal, avec panorama exceptionnel sur la Zona Sul." },
    
    { type: "p", text: "Visão" },
    { type: "p", text: "Bar du Vidigal avec vue sur la mer et ambiance locale, particulièrement intéressant au coucher du soleil." },
    
    { type: "p", text: "Bar da Laje" },
    { type: "p", text: "Institution du Vidigal, terrasse en hauteur et ambiance festive face à l'océan." },

    { type: "h2", text: "Accès" },
    { type: "p", text: "Le PPG se rejoint à pied depuis Copacabana ou Ipanema ; le Bondinho gratuit monte jusqu'à la 5e station, au sommet. Pour Rocinha et Vidigal, compte environ R$10 en moto-taxi depuis l'entrée de la communauté." },

    { type: "faq", items: [
      { q: "Peut-on visiter Rocinha, Vidigal ou PPG sans guide ?", a: "Ce n'est pas recommandé. Ce sont des territoires vivants dont la situation peut évoluer rapidement ; un guide local reconnu sait où aller, à quel moment, et comment réagir en cas d'imprévu." },
      { q: "Quelle est la différence entre Rocinha, Vidigal et PPG ?", a: "Rocinha est la plus grande favela du Brésil, presque une ville dans la ville, entre São Conrado et Gávea. Vidigal, au pied du Morro Dois Irmãos entre Leblon et São Conrado, est la plus gentrifiée des trois. PPG (Pavão-Pavãozinho-Cantagalo) surplombe directement Copacabana et Ipanema." },
      { q: "Est-ce dangereux de manger ou boire un verre dans une favela ?", a: "Avec un guide local et en suivant ses conseils, ce sont des sorties qui se passent très bien : le tourisme y est une économie à part entière que personne n'a intérêt à menacer. Le risque vient surtout de l'improvisation en solo, pas de la visite en elle-même." },
      { q: "Quel est le meilleur moment pour visiter ?", a: "Les visites en journée ou en fin d'après-midi sont les plus courantes. Le coucher de soleil depuis ces communautés offre quelques-unes des plus belles vues de Rio." },
    ]},
  ],
};
