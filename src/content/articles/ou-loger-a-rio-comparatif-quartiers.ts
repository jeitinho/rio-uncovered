import type { Article } from "../types";
import hero from "@/assets/article-ou-loger-rio.jpg";

export const article: Article = {
  slug: "ou-loger-a-rio-comparatif-quartiers",
  title: "Où loger à Rio : notre comparatif quartier par quartier",
  titleAccent: "comparatif",
  description: "Copacabana, Ipanema, Leblon, Botafogo, Centro/Lapa, Barra da Tijuca : notre comparatif complet pour choisir où loger selon votre style de voyage.",
  category: "hebergements",
  tags: ["hébergement", "où loger", "quartiers", "Rio de Janeiro"],
  date: "2026-07-13",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Vue aérienne de la Zona Sul de Rio de Janeiro avec ses immeubles face à la plage",
  featured: false,
  guide: true,
  popular: true,
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "On vous aide gratuitement à trouver l'hébergement adapté à votre style de voyage.",
    },
  ],
  sections: [
    { type: "p", text: "Il n'existe pas un meilleur quartier pour loger à Rio. Il existe celui qui correspond à votre voyage. Voici notre comparatif complet pour vous aider à choisir en quelques minutes, selon votre budget, votre style de voyage et vos priorités." },
    { type: "p", text: "Ce guide n'est pas une liste théorique. C'est ce qu'on dirait à un ami qui hésite : quel quartier pour quel profil de voyageur." },

    { type: "h2", text: "Je viens pour... quel quartier choisir" },
    { type: "ul", items: [
      "Un premier voyage à Rio → <a href=\"/blog/copacabana-guide-complet\">Copacabana</a> : métro à proximité, activités Jeitinho, plages mythiques, ambiance animée.",
      "Restaurants et vie locale → <a href=\"/blog/ipanema-guide-complet\">Ipanema</a> : gastronomie variée, bars et cafés, ambiance carioca, coucher de soleil à Arpoador.",
      "Luxe et confort → Barra da Tijuca : hôtels haut de gamme, resorts et beach clubs, grandes plages, quartiers modernes et sécurisés.",
      "Sorties et rooftops → <a href=\"/blog/botafogo-guide-complet\">Botafogo</a> : bars et rooftops, vie nocturne, ambiance jeune, superbe vue sur la baie.",
      "Culture et patrimoine → Centro / <a href=\"/blog/lapa-guide-complet\">Lapa</a> : patrimoine historique, musées, architecture coloniale, Lapa by night.",
      "Calme et haut de gamme → <a href=\"/blog/leblon-guide-complet\">Leblon</a> : ambiance chic et calme, quartier résidentiel, gastronomie raffinée, plage familiale.",
    ]},
    { type: "conseil", title: "Le conseil Jeitinho", text: "Choisissez votre quartier selon votre style de voyage, pas seulement selon le prix. L'ambiance et le temps de trajet peuvent transformer votre expérience à Rio bien plus qu'une différence de quelques euros sur la nuitée." },

    { type: "h2", text: "En un coup d'œil" },
    { type: "ul", items: [
      "Copacabana — budget moyen, plage 5 étoiles, restaurants 4 étoiles, vie nocturne 4 étoiles, métro disponible. Idéal premier voyage.",
      "Ipanema — budget élevé, plage 5 étoiles, restaurants 5 étoiles, vie nocturne 4 étoiles, métro disponible. Idéal restaurants et vie locale.",
      "Leblon — budget très élevé, plage 5 étoiles, restaurants 5 étoiles, vie nocturne 3 étoiles, métro disponible. Idéal calme et haut de gamme.",
      "Botafogo — budget moyen, plage 2 étoiles, restaurants 5 étoiles, vie nocturne 5 étoiles, métro disponible. Excellent rapport qualité-prix.",
      "Centro / Lapa — budget économique, plage 1 étoile, restaurants 4 étoiles, vie nocturne 5 étoiles, métro disponible. Idéal culture et patrimoine.",
      "Barra da Tijuca — budget très élevé, plage 5 étoiles, restaurants 4 étoiles, vie nocturne 4 étoiles, métro non disponible dans toutes les zones. Idéal luxe et confort.",
    ]},

    { type: "h2", text: "Pour quel type de voyageur" },
    { type: "ul", items: [
      "Couple → <a href=\"/blog/ipanema-guide-complet\">Ipanema</a>, pour l'équilibre entre ambiance, gastronomie et coucher de soleil.",
      "Famille → <a href=\"/blog/leblon-guide-complet\">Leblon</a>, pour le calme et la plage familiale.",
      "Groupe d'amis → <a href=\"/blog/copacabana-guide-complet\">Copacabana</a>, pour l'animation et le rapport qualité-prix.",
      "Digital nomad → <a href=\"/blog/botafogo-guide-complet\">Botafogo</a>, pour le quotidien authentique et bien connecté.",
      "Petit budget → Centro / Lapa, pour l'accès à la culture et aux prix les plus doux.",
      "Road trip luxe et confort → Barra da Tijuca, pour l'espace et le calme résidentiel.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "Les distances peuvent sembler courtes sur une carte, mais le trafic change tout à Rio. Deux quartiers voisins peuvent être séparés par 30 à 40 minutes de circulation aux heures de pointe. Anticipez toujours vos trajets en conséquence." },

    { type: "h2", text: "Une option différente : séjourner dans une communauté" },
    { type: "p", text: "Dans la Zona Sul, il existe des communautés (favelas) comme Rocinha, Vidigal ou Santa Marta. Séjourner avec des habitants peut offrir une expérience authentique, enrichissante et souvent plus abordable, tout en soutenant l'économie locale. C'est une option à considérer pour les voyageurs en quête d'immersion, à condition de bien se renseigner sur l'hébergement choisi au préalable." },
    { type: "aeviter", title: "À éviter", text: "Ne réservez pas votre hébergement uniquement sur la base du prix affiché sans regarder sa localisation précise sur une carte. Un logement « proche de la plage » peut en réalité se trouver à 20 minutes de marche en montée, ce qui change complètement l'expérience quotidienne." },

    { type: "h2", text: "Pour aller plus loin" },
    { type: "p", text: "Retrouvez nos guides complets de chaque quartier : <a href=\"/blog/copacabana-guide-complet\">Copacabana</a>, <a href=\"/blog/ipanema-guide-complet\">Ipanema</a>, <a href=\"/blog/leblon-guide-complet\">Leblon</a>, <a href=\"/blog/botafogo-guide-complet\">Botafogo</a> et <a href=\"/blog/lapa-guide-complet\">Lapa</a>, ainsi que notre article sur le <a href=\"/blog/budget-voyage-rio\">budget à prévoir pour votre séjour</a>." },

    { type: "faq", items: [
      { q: "Quel est le meilleur quartier pour un premier séjour à Rio ?", a: "Copacabana reste le choix le plus pratique : accès facile au métro, activités variées et proximité avec les principaux sites touristiques." },
      { q: "Quel quartier privilégier avec un budget serré ?", a: "Centro et Lapa offrent les prix les plus accessibles, avec un accès direct à la culture et au patrimoine historique de Rio." },
      { q: "Faut-il une voiture pour loger à Barra da Tijuca ?", a: "Oui, une voiture ou un Uber est quasiment indispensable à Barra da Tijuca, les distances y étant plus importantes qu'en Zona Sul." },
      { q: "Peut-on loger dans une favela en tant que touriste ?", a: "Oui, certaines communautés comme Vidigal ou Santa Marta proposent des hébergements chez l'habitant, offrant une expérience authentique et souvent économique." },
    ]},

    { type: "p", text: "Le meilleur souvenir de Rio n'est pas seulement un lieu, mais une émotion. Choisissez votre quartier selon votre rythme, et vivez-le pleinement, quel que soit votre budget." },
  ],
};
