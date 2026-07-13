import type { Article } from "../types";
import hero from "@/assets/article-brunch-rio.jpg";

export const article: Article = {
  slug: "petits-dejeuners-brunchs-rio",
  title: "Les meilleurs petits-déjeuners et brunchs de Rio",
  titleAccent: "brunchs",
  description: "Nusa Café, Talho Capixaba, Empório Jardim, The Bakers : notre sélection des meilleures adresses pour bien démarrer la journée à Rio.",
  category: "gastronomie",
  tags: ["brunch", "petit-déjeuner", "gastronomie", "Rio de Janeiro"],
  date: "2026-07-11",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Table de brunch avec bowl açaí, avocado toast et café de spécialité, vue sur la plage de Rio de Janeiro",
  featured: false,
  guide: true,
  popular: true,
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "On vous réserve une table dans les meilleures adresses brunch de Rio.",
    },
  ],
  sections: [
    { type: "p", text: "À Rio, le petit-déjeuner est sacré. Entre cafés de spécialité, produits frais, pâtisseries artisanales et vues de rêve, voici nos meilleures adresses pour bien démarrer la journée comme un carioca." },
    { type: "p", text: "Ce guide n'est pas une simple liste d'adresses tendance. C'est ce qu'on dirait à un ami qui débarque : où aller, à quelle heure, et quoi commander." },

    { type: "h2", text: "Nos adresses incontournables" },
    { type: "h3", text: "Nusa Café — Ipanema" },
    { type: "p", text: "Ambiance tropicale et zen, cuisine d'inspiration australienne. Bowls, avocado toast, jus frais et excellent café de spécialité. À tester : avo toast, açaí bowl, latte noisette." },
    { type: "h3", text: "Só Lo — Jardim Botânico" },
    { type: "p", text: "Cuisine créative, pâtisseries maison et café d'exception. L'un des meilleurs brunchs de Rio. À tester : pancakes, shakshuka, brioche perdue." },
    { type: "h3", text: "Empório Jardim — Botafogo" },
    { type: "p", text: "Institution du brunch carioca. Pancakes, œufs, pains maison et pâtisseries irrésistibles. À tester : pancakes, eggs Benedict, pão na chapa." },
    { type: "h3", text: "The Bakers — Copacabana" },
    { type: "p", text: "Référence à Copacabana pour le petit-déjeuner. Produits frais, faits maison et prix justes. À tester : breakfast The Bakers, granola, cappuccino." },
    { type: "h3", text: "Talho Capixaba — Leblon" },
    { type: "p", text: "Classique chic de Leblon. Ambiance élégante, viennoiseries, cafés et brunch raffiné. À tester : croissant recheado, ovos mexidos, cappuccino." },
    { type: "h3", text: "Plage Café — Jardim Botânico" },
    { type: "p", text: "Au cœur du Parque Lage avec une vue imprenable sur le Corcovado. Expérience unique et photogénique. À tester : brunch complet, jus verts, pão de queijo." },
    { type: "h3", text: "Slow Bakery — Botafogo" },
    { type: "p", text: "Boulangerie artisanale et brunch sain. Pain au levain, options végétariennes et café de qualité. À tester : tartine avocat, cinnamon roll, cold brew." },
    { type: "h3", text: "Gringo Café — Ipanema" },
    { type: "p", text: "Ambiance décontractée, brunch américain généreux, idéal pour les expatriés et voyageurs. À tester : American breakfast, club sandwich, smoothies." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Venez tôt ! Les meilleures adresses se remplissent vite, surtout le week-end. Entre 8h et 10h, vous profiterez du calme et du meilleur choix, avant l'affluence du milieu de matinée." },

    { type: "h2", text: "Ce qu'il ne faut pas manquer pour un brunch parfait" },
    { type: "ul", items: [
      "Un bon café — goûtez un café de spécialité brésilien, vous verrez la différence avec ce qu'on trouve habituellement en Europe.",
      "Le pão de queijo — indispensable, à base de fromage, moelleux et 100% brésilien.",
      "Un açaí bowl — frais, sain et délicieux, parfait pour l'énergie de la journée.",
      "Une terrasse avec vue — profitez du soleil et des vues sublimes qu'offre la ville, la plupart des meilleures adresses en ont une.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "Le rythme d'une matinée type à Rio : petit-déjeuner et brunch vers 8h30, promenade digestive le long de la plage ou en ville vers 10h, puis plage, baignade ou activité en plein air dès 11h30." },

    { type: "faq", items: [
      { q: "À quelle heure prendre un brunch à Rio ?", a: "Entre 8h et 11h reste la période idéale. Le week-end, arrivez tôt (avant 9h) pour éviter l'attente dans les adresses les plus populaires." },
      { q: "Les cartes de paiement sont-elles acceptées dans les cafés de Rio ?", a: "Oui, la carte est acceptée dans la quasi-totalité des adresses de brunch de la Zona Sul, en plus du PIX de plus en plus répandu." },
      { q: "Quel plat brésilien tester absolument au petit-déjeuner ?", a: "Le pão de queijo et le pão na chapa (pain grillé et beurré) sont deux classiques incontournables du petit-déjeuner carioca." },
      { q: "Quel quartier a le plus de bonnes adresses brunch ?", a: "Ipanema, Botafogo et le Jardim Botânico concentrent une belle densité d'adresses de qualité, avec des ambiances assez différentes selon le quartier choisi." },
    ]},

    { type: "p", text: "Un bon petit-déjeuner, c'est souvent le meilleur moyen de démarrer une journée à Rio du bon pied. Prenez le temps de vous installer en terrasse, le reste de la journée s'organisera de lui-même." },
  ],
};
