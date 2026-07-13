import type { Article } from "../types";
import hero from "@/assets/article-marques-bresiliennes.jpg";

export const article: Article = {
  slug: "marques-bresiliennes-a-rapporter",
  title: "Les marques brésiliennes iconiques à rapporter de Rio",
  titleAccent: "iconiques",
  description: "Havaianas, Kenner, Farm Rio, Osklen : notre sélection des marques brésiliennes incontournables à rapporter de votre séjour à Rio de Janeiro.",
  category: "activites",
  tags: ["shopping", "marques brésiliennes", "souvenirs", "Rio de Janeiro"],
  date: "2026-07-11",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Tongs Havaianas colorées posées sur les mosaïques du Calçadão de Copacabana, Rio de Janeiro",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "Conseils locaux et meilleures adresses pour trouver les marques brésiliennes authentiques.",
    },
  ],
  sections: [
    { type: "p", text: "Le Brésil possède ses propres marques devenues cultes. Entre streetwear, mode, tongs et lifestyle, certaines sont beaucoup moins chères qu'en Europe et représentent un excellent souvenir de Rio." },
    { type: "p", text: "Ce guide n'est pas un simple catalogue. C'est ce qu'on dirait à un ami qui débarque : quelles marques valent vraiment le détour, et où les trouver." },

    { type: "h2", text: "Les marques à connaître" },
    { type: "h3", text: "Kenner" },
    { type: "p", text: "La sandale des cariocas. Sandales premium ultra résistantes, très populaires à Rio, avec de nombreux modèles exclusifs et un excellent rapport qualité-prix." },
    { type: "h3", text: "Havaianas" },
    { type: "p", text: "L'icône du Brésil. Les tongs les plus célèbres du monde, avec des collections exclusives et la possibilité de personnalisation dans certaines boutiques. Un souvenir incontournable." },
    { type: "h3", text: "Thug Nine" },
    { type: "p", text: "Le streetwear carioca, inspiré du funk carioca. Ensembles, t-shirts, shorts, casquettes et accessoires dans un style urbain 100% brésilien." },
    { type: "h3", text: "Oakley" },
    { type: "p", text: "Une véritable culture au Brésil. Lunettes, sneakers, vêtements, sacs et accessoires, très populaires notamment sur les plages de la Zona Sul." },
    { type: "h3", text: "Farm Rio" },
    { type: "p", text: "La mode tropicale. Imprimés colorés, robes, chemises et accessoires. L'une des marques brésiliennes les plus connues à l'international." },
    { type: "h3", text: "Reserva" },
    { type: "p", text: "L'élégance décontractée. Casual chic, t-shirts, chemises, sneakers et accessoires, une référence de la mode masculine au Brésil." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Les meilleures adresses pour retrouver la majorité de ces marques : BarraShopping, Rio Sul, VillageMall et Shopping Leblon. Pendant les périodes de liquidação (soldes), les réductions peuvent atteindre 50 à 70%." },

    { type: "h2", text: "Le starter pack du cria" },
    { type: "p", text: "Le combo 100% carioca : des lunettes Oakley, un maillot de Flamengo et des Kenner aux pieds. De quoi être prêt pour n'importe quel rôle carioca, de la plage à la soirée entre amis." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Toutes ces marques sont authentiques et faciles à trouver dans les grands centres commerciaux. Les tailles peuvent différer du standard européen : pensez à essayer avant d'acheter. N'oubliez pas votre remboursement de TVA pour les achats de plus de R$ 500." },

    { type: "h2", text: "Le mot du jour : cria" },
    { type: "p", text: "Prononcé « kree-a ». En portugais brésilien, il désigne un jeune de la favela, né et élevé dans le quartier. Vous entendrez par exemple « Ele é cria da Rocinha » (il est de Rocinha) ou « Respeita o cria ! » (respecte le gamin, le vrai)." },

    { type: "aeviter", title: "À éviter", text: "Méfiez-vous des vendeurs de rue proposant des articles de ces marques à des prix anormalement bas : privilégiez les boutiques officielles ou les grands centres commerciaux pour garantir l'authenticité de votre achat." },

    { type: "h2", text: "Où trouver ces marques" },
    { type: "ul", items: [
      "BarraShopping — l'un des plus grands centres commerciaux d'Amérique latine.",
      "Rio Sul — proche de Botafogo, excellent choix de boutiques.",
      "VillageMall — plus haut de gamme, à Barra da Tijuca.",
      "Shopping Leblon — pour un shopping plus chic avec vue sur la lagune.",
    ]},

    { type: "faq", items: [
      { q: "Les Havaianas sont-elles vraiment moins chères au Brésil ?", a: "Oui, généralement bien moins chères qu'en Europe, avec un choix de modèles et de collections exclusives beaucoup plus large." },
      { q: "Peut-on personnaliser des Havaianas à Rio ?", a: "Oui, certaines boutiques proposent la personnalisation directement sur place, un excellent souvenir sur mesure." },
      { q: "Où faire du shopping de marques brésiliennes à Rio ?", a: "BarraShopping, Rio Sul, VillageMall et Shopping Leblon concentrent la majorité de ces marques dans des centres commerciaux climatisés et sécurisés." },
      { q: "Quand profiter des meilleures réductions ?", a: "Pendant les périodes de liquidação (soldes), généralement en janvier-février et juin-juillet, où les réductions peuvent atteindre 50 à 70%." },
    ]},

    { type: "p", text: "Rapporter une pièce Havaianas, Farm Rio ou Kenner de Rio, c'est ramener un petit morceau d'authenticité carioca chez soi, à un prix souvent bien plus intéressant qu'en Europe." },
  ],
};
