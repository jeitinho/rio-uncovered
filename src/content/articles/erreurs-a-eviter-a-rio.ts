import type { Article } from "../types";
import hero from "@/assets/article-erreurs-rio.jpg";

export const article: Article = {
  slug: "erreurs-a-eviter-a-rio",
  title: "Les 15 erreurs à éviter à Rio de Janeiro",
  titleAccent: "erreurs",
  description: "Les conseils que les cariocas auraient aimé vous donner avant votre arrivée. Profitez de Rio comme un local et évitez les erreurs classiques des touristes.",
  category: "conseils-pratiques",
  tags: ["conseils", "sécurité", "préparer son voyage", "Rio de Janeiro"],
  date: "2026-07-11",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Promenade en mosaïque de Copacabana avec des cariocas se promenant au lever du soleil, Rio de Janeiro",
  featured: false,
  guide: true,
  popular: true,
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "On vous accompagne pour éviter les pièges classiques et profiter pleinement de votre séjour.",
    },
  ],
  sections: [
    { type: "p", text: "Un voyage réussi, ce n'est pas seulement visiter Rio. C'est comprendre comment les cariocas vivent leur ville. Voici les erreurs les plus fréquentes commises par les touristes, et comment les éviter facilement." },
    { type: "p", text: "Ce guide n'est pas une liste de mises en garde alarmistes. C'est ce qu'on dirait à un ami qui débarque : les petits réflexes qui font toute la différence entre un séjour stressant et un séjour serein." },

    { type: "h2", text: "Les 15 erreurs classiques" },
    { type: "ul", items: [
      "Se promener avec son passeport — laissez-le au logement et gardez une copie numérique sur vous.",
      "Garder son téléphone à la main en permanence — sortez-le uniquement lorsque vous en avez besoin.",
      "Porter beaucoup de bijoux — plus vous êtes discret, mieux c'est.",
      "Prendre n'importe quel taxi — utilisez Uber ou un chauffeur recommandé pour vos trajets.",
      "Aller seul dans une favela — toujours avec un guide reconnu et local.",
      "Sous-estimer le soleil — crème solaire, eau et casquette sont indispensables toute l'année.",
      "Arriver en retard à un rendez-vous — soyez toujours ponctuel, en particulier pour une excursion organisée.",
      "Croire que tout Rio est dangereux — certains quartiers sont très sûrs, d'autres demandent plus d'attention.",
      "Manger uniquement dans les restaurants touristiques — testez les petits restaurants locaux, c'est là que se trouve la vraie saveur de Rio.",
      "Refuser de parler portugais — un simple « Bom dia » change complètement l'accueil qu'on vous réserve.",
      "Penser que la pluie dure toute la journée — les averses tropicales sont souvent très courtes.",
      "Rester toujours en baskets — ayez toujours une paire de tongs avec vous, elles se portent partout au quotidien.",
      "Accepter les premiers prix proposés — demandez toujours avant de consommer ou d'acheter.",
      "Vouloir tout voir en une journée — Rio se vit lentement. Profitez, respirez, savourez.",
      "Partir sans demander conseil à des locaux — les meilleurs horaires, quartiers et bons plans font toute la différence sur un séjour.",
    ]},
    { type: "conseil", title: "Le conseil Jeitinho", text: "Ces erreurs ne sont pas des interdits absolus, mais des réflexes à ajuster. Un voyage réussi à Rio se construit surtout avec du bon sens, de la curiosité et un peu de préparation en amont." },

    { type: "h2", text: "Pourquoi ces conseils comptent vraiment" },
    { type: "p", text: "Beaucoup de ces erreurs proviennent d'une méconnaissance des codes locaux plutôt que d'un danger réel. Rio récompense les visiteurs curieux et respectueux du rythme carioca, bien plus que ceux qui cherchent à tout cocher sur une liste en un temps record." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Avoir « visão » à Rio, c'est avoir la capacité de voir juste et de faire les bons choix : anticiper une situation, repérer les bons réflexes et s'adapter au contexte local. C'est une qualité que les cariocas valorisent énormément." },

    { type: "aeviter", title: "À éviter en priorité" },
    { type: "ul", items: [
      "Les zones isolées et mal éclairées la nuit, en particulier en dehors de la Zona Sul.",
      "L'excès de confiance dans des quartiers que vous ne connaissez pas encore.",
      "Le jugement hâtif sur la sécurité de toute la ville à partir d'une seule expérience.",
    ]},

    { type: "h2", text: "Pour aller plus loin" },
    { type: "p", text: "Retrouvez également nos guides sur <a href=\"/blog/payer-au-bresil-pix\">le PIX et les paiements</a>, <a href=\"/blog/se-deplacer-a-rio\">les transports à Rio</a> et <a href=\"/blog/vivre-comme-un-carioca\">les coutumes et expressions locales</a> pour préparer votre séjour dans les meilleures conditions." },

    { type: "faq", items: [
      { q: "Rio est-elle une ville dangereuse pour les touristes ?", a: "Certains quartiers, notamment la Zona Sul, sont très sûrs et très fréquentés. D'autres demandent davantage de vigilance. La prudence de base (pas d'objets de valeur visibles, éviter les zones isolées la nuit) suffit généralement." },
      { q: "Faut-il absolument parler portugais pour bien voyager à Rio ?", a: "Non, mais quelques mots de base changent nettement l'accueil que vous recevrez. Un simple « Bom dia » ou « Obrigado » est très apprécié." },
      { q: "Peut-on visiter une favela sans guide ?", a: "Ce n'est pas recommandé. Privilégiez toujours un guide local reconnu pour une visite respectueuse, sécurisée et enrichissante." },
      { q: "Combien de temps faut-il pour visiter Rio correctement ?", a: "Comptez au minimum une semaine pour profiter des incontournables sans se presser. Vouloir tout voir en quelques jours reste l'une des erreurs les plus fréquentes." },
    ]},

    { type: "p", text: "Ces quinze erreurs ne doivent pas vous inquiéter, mais vous préparer. Avec un minimum de bon sens et de curiosité, Rio se révèle être l'une des villes les plus généreuses et accueillantes du monde." },
  ],
};
