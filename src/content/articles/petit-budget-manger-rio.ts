import type { Article } from "../types";
import hero from "@/assets/article-petit-budget-rio.jpg";

export const article: Article = {
  slug: "petit-budget-manger-rio",
  title: "Bien manger à Rio sans se ruiner",
  titleAccent: "sans se ruiner",
  description: "Bar do Mineiro, Bip Bip, Comida di Buteco, Galinhada da Iza : notre sélection des meilleures adresses petit budget testées et approuvées à Rio.",
  category: "budget",
  tags: ["budget", "gastronomie", "bons plans", "Rio de Janeiro"],
  date: "2026-07-11",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Plat du jour brésilien avec riz, haricots et viande servi dans un boteco populaire de Rio de Janeiro",
  featured: false,
  guide: true,
  popular: true,
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "On vous recommande les meilleures adresses selon votre budget.",
    },
  ],
  sections: [
    { type: "p", text: "Rio regorge d'adresses locales, savoureuses et abordables, où les cariocas mangent au quotidien. Voici notre sélection testée et approuvée pour régaler vos papilles sans vider votre portefeuille." },
    { type: "p", text: "Ce guide n'est pas une liste de compromis. C'est ce qu'on dirait à un ami qui débarque : où manger bon et pas cher, exactement comme le font les habitants." },

    { type: "h2", text: "Nos adresses coup de cœur, bon, local et pas cher" },
    { type: "h3", text: "Bar do Mineiro — Santa Teresa" },
    { type: "p", text: "Institution à Santa Teresa. Buffet à volonté avec cuisine maison et ambiance conviviale. À tester : feijoada." },
    { type: "h3", text: "Bip Bip — Copacabana" },
    { type: "p", text: "Classique de Copacabana depuis 1948. Parfait pour un déjeuner rapide et gourmand. À tester : bauru." },
    { type: "h3", text: "Comida di Buteco — Lapa" },
    { type: "p", text: "Buffet à volonté avec plats brésiliens traditionnels. Excellent rapport qualité-prix. À tester : parmegiana." },
    { type: "h3", text: "Galinhada da Iza — Centro" },
    { type: "p", text: "Spécialiste de la galinhada (riz au poulet). Simple, délicieux et très abordable. À tester : galinhada." },
    { type: "h3", text: "Armazém São Thiago — Centro" },
    { type: "p", text: "Marché historique avec plusieurs stands où l'on mange très bien pour pas cher. À tester : bolinho de bacalhau." },
    { type: "h3", text: "Paprika-Bistrô — Ipanema" },
    { type: "p", text: "Cuisine maison, plats du jour créatifs et sains. Parfait pour le déjeuner. À tester : plat du jour." },
    { type: "h3", text: "Mané — Ipanema" },
    { type: "p", text: "Petit resto simple et sans prétention. Plats généreux à prix mini. À tester : strogonoff." },
    { type: "h3", text: "Quentinha da Dona — Botafogo" },
    { type: "p", text: "Des « quentinhas » (boîtes repas) copieuses, équilibrées et ultra abordables. À tester : frango grelhado." },
    { type: "h3", text: "Degusta — Leblon" },
    { type: "p", text: "Buffet au kilo avec des options saines et savoureuses. Idéal pour manger bien et léger. À tester : légumes rôtis." },
    { type: "h3", text: "Bar e Restaurante Itahy — Tijuca" },
    { type: "p", text: "Spécialiste des viandes grillées. Portions généreuses et prix imbattables. À tester : picanha." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Déjeunez comme un local ! Le plat du jour (prato feito) est souvent copieux, équilibré et imbattable niveau prix. Privilégiez le déjeuner en semaine pour les meilleurs rapports qualité-prix." },

    { type: "h2", text: "Les bons plans" },
    { type: "ul", items: [
      "Cherchez le « prato feito » (plat du jour) le midi en semaine, généralement le meilleur rapport qualité-prix.",
      "Les buffets au kilo sont vos meilleurs amis pour composer un repas équilibré à votre rythme.",
      "Évitez les zones très touristiques pour vos repas, les prix y sont systématiquement plus élevés.",
      "Les marchés et food courts locaux réservent souvent de belles surprises culinaires.",
    ]},

    { type: "h2", text: "Combien ça coûte ?" },
    { type: "p", text: "Comptez généralement moins de 25 R$ pour des plats simples ou des snacks, entre 25 et 40 R$ pour des plats complets ou un buffet, et plus de 40 R$ pour des repas plus généreux ou des spécialités (prix moyens constatés)." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Le service (taxa de serviço) de 10% n'est pas toujours inclus dans l'addition. Vérifiez systématiquement la note avant de payer, en particulier dans les établissements moins touristiques." },

    { type: "aeviter", title: "À éviter", text: "Ne mangez pas uniquement dans les restaurants situés à moins de deux rues de la plage dans les zones les plus touristiques : les prix y sont généralement gonflés pour une qualité équivalente à ce que vous trouverez un peu plus loin, dans les rues commerçantes des quartiers." },

    { type: "h2", text: "À tester absolument" },
    { type: "ul", items: [
      "Feijoada — le plat national brésilien, riche en haricots noirs et viandes.",
      "Prato feito — le plat du jour typique, complet et abordable.",
      "Pastel — chausson frit, snack incontournable des marchés et foires.",
      "Açaí na tigela — bowl d'açaí, parfait pour l'énergie de la journée.",
      "Sucos naturais — jus de fruits frais, disponibles absolument partout à petit prix.",
    ]},

    { type: "faq", items: [
      { q: "Quel est le budget moyen d'un repas pas cher à Rio ?", a: "Comptez généralement entre 25 et 40 R$ pour un plat complet dans une adresse locale de type buffet au kilo ou plat du jour." },
      { q: "Qu'est-ce qu'un prato feito ?", a: "C'est le plat du jour typique brésilien, généralement composé de riz, haricots, une viande et une salade, servi à prix fixe le midi en semaine." },
      { q: "Le service est-il obligatoire dans les restaurants brésiliens ?", a: "Non, la taxa de serviço de 10% ajoutée à l'addition n'est pas obligatoire : vous pouvez demander à la retirer en cas de service décevant." },
      { q: "Où trouver les meilleurs prix pour manger à Rio ?", a: "Éloignez-vous des rues directement en bord de plage et privilégiez les rues commerçantes situées à quelques centaines de mètres, où les prix sont généralement bien plus raisonnables." },
    ]},

    { type: "p", text: "Bien manger à Rio, c'est découvrir la vraie culture carioca, souvent loin des adresses les plus visibles. Les meilleures surprises se trouvent généralement là où mangent les habitants eux-mêmes." },
  ],
};
