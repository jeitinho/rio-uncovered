import type { Article } from "../types";
import hero from "@/assets/hero-blog.jpg";
// TODO: remplacer par une photo de rayon d'un supermarché Zona Sul ou d'une feira de rue

export const article: Article = {
  slug: "courses-supermarches-a-rio",
  title: "Faire ses courses à Rio : supermarchés, feiras et quitandas",
  titleAccent: "courses",
  description: "Zona Sul, Pão de Açúcar, Hortifruti, marchés de rue — où et comment faire ses courses à Rio, et ce que chaque type d'endroit fait mieux que les autres.",
  category: "vie-pratique-locale",
  tags: ["quotidien", "pratique", "budget"],
  date: "2026-07-16",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Étal coloré de fruits tropicaux dans une feira de rue à Rio de Janeiro",
  sections: [
    {
      type: "p",
      text: "Entre un supermarché climatisé, une petite quitanda de quartier et une feira qui n'installe ses étals qu'un jour par semaine, faire ses courses à Rio n'a rien d'évident les premiers jours. Chacun a sa spécialité, et connaître la différence fait vite gagner du temps et de l'argent.",
    },
    { type: "h2", text: "Les grandes chaînes de supermarchés" },
    {
      type: "ul",
      items: [
        "Zona Sul — l'enseigne historique de la Zona Sul, un peu plus chère mais très bien fournie, produits importés compris",
        "Pão de Açúcar — grande chaîne nationale, bon compromis prix/choix, souvent avec un rayon traiteur correct",
        "Hortifruti — spécialisé fruits, légumes et produits frais, qualité au-dessus de la moyenne, prix en conséquence",
        "Mundial — plus abordable, très présent dans les quartiers résidentiels",
      ],
    },
    { type: "h2", text: "Les quitandas et petits marchés de quartier" },
    {
      type: "p",
      text: "Une quitanda est une petite épicerie de quartier, souvent tenue en famille, ouverte tôt et tard. Moins de choix qu'un supermarché, mais des fruits et légumes très frais, et l'occasion d'échanger deux mots en portugais avec le vendeur. Pratique pour un dépannage rapide sans faire la queue.",
    },
    { type: "h2", text: "Les feiras : le marché de rue hebdomadaire" },
    {
      type: "p",
      text: "Chaque quartier de la Zona Sul a sa feira livre, un marché de rue qui s'installe un matin par semaine (jour différent selon le quartier) et disparaît l'après-midi même. C'est là que les cariocas achètent l'essentiel de leurs fruits et légumes : moins cher qu'en supermarché, produits du jour, et souvent un vendeur de jus de canne ou d'açaí à proximité. Les horaires précis varient énormément d'un commerce à l'autre — on détaille toute la logique dans <a href=\"/blog/horaires-a-la-carioca\">notre article sur les horaires à la carioca</a>.",
    },
    {
      type: "conseil",
      title: "Le conseil Jeitinho",
      text: "Demandez à votre hôte ou à votre concierge quel jour et à quelle heure se tient la feira la plus proche — l'info n'est presque jamais affichée en ligne, elle se transmet à l'oral entre habitants du quartier.",
    },
    { type: "h2", text: "Prix et paiement" },
    {
      type: "p",
      text: "Le PIX est accepté quasiment partout, jusque dans les feiras et par certains vendeurs ambulants. Gardez un peu d'espèces pour les petites quitandas qui n'ont pas toujours de terminal de paiement — tout est détaillé dans notre article <a href=\"/blog/retirer-argent-distributeurs-rio\">retirer de l'argent à Rio</a>.",
    },
    {
      type: "bonasavoir",
      title: "Bon à savoir",
      text: "Les prix en feira se négocient rarement, mais achetez en fin de matinée : certains vendeurs baissent leurs prix sur les produits les plus fragiles pour ne pas les remporter.",
    },
    {
      type: "aeviter",
      title: "À éviter",
      text: "Ne comparez pas systématiquement les prix à ceux de France : les produits locaux (fruits tropicaux, légumes brésiliens) sont souvent bien moins chers, mais les produits importés (fromages européens, certaines marques) peuvent coûter deux à trois fois plus cher.",
    },
    {
      type: "faq",
      items: [
        {
          q: "Quel est le supermarché le moins cher à Rio ?",
          a: "Mundial et Pão de Açúcar affichent généralement les prix les plus accessibles pour un usage quotidien. Zona Sul et Hortifruti sont positionnés plus haut de gamme.",
        },
        {
          q: "Peut-on payer par carte étrangère dans les supermarchés ?",
          a: "Oui, sans problème dans toutes les grandes chaînes. Choisissez toujours l'option « crédit » même avec une carte de débit française.",
        },
        {
          q: "Les feiras sont-elles adaptées aux touristes ?",
          a: "Tout à fait — c'est même l'une des façons les plus agréables de découvrir le quotidien carioca. Venez avec un peu d'espèces et un sac, les sacs plastiques ne sont pas toujours fournis.",
        },
      ],
    },
  ],
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "On vous indique la feira et les adresses de quartier les plus proches de votre logement.",
    },
  ],
};
