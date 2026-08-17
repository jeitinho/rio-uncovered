import type { Article } from "../types";
import hero from "@/assets/article-marques-bresiliennes.jpg";

export const article: Article = {
  slug: "marques-bresiliennes-a-rapporter",
  title: "Les marques brésiliennes iconiques à rapporter de Rio",
  titleAccent: "iconiques",
  description:
    "Havaianas, Kenner, Farm Rio, Reserva : notre guide complet des marques brésiliennes incontournables, où les trouver et comment repérer les vraies.",
  category: "activites",
  tags: [
    "shopping Rio de Janeiro",
    "marques brésiliennes",
    "Havaianas",
    "Farm Rio",
    "souvenirs",
  ],
  date: "2026-07-11",
  author: "equipe-jeitinho",
  hero,
  heroAlt:
    "Tongs Havaianas colorées posées sur les mosaïques du Calçadão de Copacabana, Rio de Janeiro",
  featured: false,
  guide: true,
  popular: false,

  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://jeitinho.fr/trouver-un-jeitinho",
      description:
        "Conseils locaux et meilleures adresses pour trouver les marques brésiliennes authentiques.",
    },
  ],

  sections: [
    {
      type: "p",
      text:
        "Le Brésil possède ses propres marques devenues cultes, bien au-delà des tongs qu'on connaît déjà en Europe. Entre streetwear carioca, mode tropicale, sandales premium et lifestyle plage, certaines sont nettement moins chères qu'à l'export et représentent un bien meilleur souvenir qu'un aimant à frigo.",
    },
    {
      type: "p",
      text:
        "Ce guide n'est pas un simple catalogue. C'est ce qu'on dirait à un ami qui débarque : quelles marques valent vraiment le détour, où les trouver, et comment éviter de repartir avec une copie.",
    },

    {
      type: "h2",
      text: "Les six marques à connaître",
    },

    {
      type: "h3",
      text: "Havaianas",
    },
    {
      type: "p",
      text:
        "L'icône absolue du Brésil. Les tongs les plus célèbres du monde, nées à Rio dans les années 1960, avec des collections exclusives introuvables hors du pays et la possibilité de personnalisation dans certaines boutiques (initiales, motifs, semelles sur mesure). Un souvenir incontournable, mais aussi le plus facile à trouver n'importe où — l'intérêt est surtout dans les modèles limités.",
    },

    {
      type: "h3",
      text: "Kenner",
    },
    {
      type: "p",
      text:
        "La sandale des cariocas, moins connue à l'international mais omniprésente sur les plages de Rio. Sandales premium ultra résistantes, avec de nombreux modèles exclusifs et un excellent rapport qualité-prix. Si vous voulez repartir avec quelque chose que peu de touristes rapportent, c'est le choix le plus local des deux.",
    },

    {
      type: "h3",
      text: "Farm Rio",
    },
    {
      type: "p",
      text:
        "La mode tropicale version internationale. Imprimés colorés, robes, chemises et accessoires, portés aussi bien à la plage qu'en ville. C'est aujourd'hui l'une des marques brésiliennes les plus reconnues à l'étranger — ce qui veut dire des prix plus élevés qu'à Rio, mais toujours plus doux qu'à l'export.",
    },

    {
      type: "h3",
      text: "Reserva",
    },
    {
      type: "p",
      text:
        "L'élégance décontractée version masculine. Casual chic, t-shirts bien coupés, chemises, sneakers et accessoires : une référence de la mode masculine au Brésil, à mi-chemin entre streetwear soigné et vestiaire de bureau décontracté.",
    },

    {
      type: "h3",
      text: "Oakley",
    },
    {
      type: "p",
      text:
        "Une véritable culture au Brésil. Lunettes, sneakers, vêtements, sacs et accessoires, très populaires notamment sur les plages de la Zona Sul — pas une marque brésilienne d'origine, mais tellement adoptée localement qu'elle fait désormais partie du vestiaire carioca.",
    },

    {
      type: "h3",
      text: "Thug Nine",
    },
    {
      type: "p",
      text:
        "Le streetwear carioca, directement inspiré du funk carioca — voir notre guide dédié au <a href=\"/blog/baile-funk-guide\">baile funk</a> pour comprendre cette culture. Ensembles, t-shirts, shorts, casquettes et accessoires dans un style urbain 100% brésilien, loin des grandes enseignes internationales.",
    },

    {
      type: "conseil",
      title: "Le conseil Jeitinho",
      text:
        "Les meilleures adresses pour retrouver la majorité de ces marques regroupées au même endroit : BarraShopping, Rio Sul, VillageMall et Shopping Leblon. Pendant les périodes de liquidação (soldes), généralement en janvier-février et juin-juillet, les réductions peuvent atteindre 50 à 70%.",
    },

    {
      type: "h2",
      text: "Où trouver ces marques",
    },
    {
      type: "h3",
      text: "BarraShopping — Barra da Tijuca",
    },
    {
      type: "p",
      text:
        "L'un des plus grands centres commerciaux d'Amérique latine, avec la quasi-totalité des marques citées sous un même toit. Pratique si vous voulez tout faire en une seule sortie, moins pratique si vous logez en Zona Sul (comptez un vrai trajet).",
    },
    {
      type: "h3",
      text: "Rio Sul — Botafogo",
    },
    {
      type: "p",
      text:
        "Le plus central et le plus accessible depuis la Zona Sul, à deux pas de <a href=\"/blog/botafogo-guide-complet\">Botafogo</a>. Excellent choix de boutiques sans avoir à traverser toute la ville.",
    },
    {
      type: "h3",
      text: "VillageMall — Barra da Tijuca",
    },
    {
      type: "p",
      text:
        "Plus haut de gamme, avec une sélection resserrée sur le premium : Reserva et les collections les plus qualitatives de Farm Rio s'y trouvent facilement.",
    },
    {
      type: "h3",
      text: "Shopping Leblon — Leblon",
    },
    {
      type: "p",
      text:
        "Pour un shopping plus chic avec vue sur la lagune, dans l'un des quartiers les plus huppés de la ville — voir notre guide de <a href=\"/blog/leblon-guide-complet\">Leblon</a>.",
    },

    {
      type: "h2",
      text: "Le starter pack du cria",
      id: "starter-pack-du-cria",
    },
    {
      type: "p",
      text:
        "Le combo 100% carioca : des lunettes de soleil, un maillot de Flamengo et des Kenner aux pieds. De quoi être prêt pour n'importe quel rôle carioca, de la plage à la soirée entre amis — voir notre guide du <a href=\"/blog/guide-maracana\">Maracanã</a> pour comprendre pourquoi le maillot compte autant ici.",
    },

    {
      type: "bonasavoir",
      title: "Bon à savoir",
      text:
        "Toutes ces marques sont authentiques et faciles à trouver dans les grands centres commerciaux. Les tailles peuvent différer du standard européen : pensez à essayer avant d'acheter. Un dispositif de remboursement de TVA (Tax Free) existe pour les achats significatifs dans les boutiques participantes : renseignez-vous en boutique sur les conditions et pensez à faire la démarche avant votre départ à l'aéroport.",
    },

    {
      type: "h2",
      text: "Le mot du jour : cria",
    },
    {
      type: "p",
      text:
        "Prononcé « kree-a ». En portugais brésilien, il désigne un jeune de la favela, né et élevé dans le quartier. Vous entendrez par exemple « Ele é cria da Rocinha » (il est de Rocinha) ou « Respeita o cria ! » (respecte le gamin, le vrai).",
    },

    {
      type: "aeviter",
      title: "À éviter",
      text:
        "Méfiez-vous des vendeurs de rue proposant des articles de ces marques à des prix anormalement bas, notamment autour des marchés populaires comme <a href=\"/blog/marches-bonnes-affaires-rio\">Saara ou Uruguaiana</a> : privilégiez les boutiques officielles ou les grands centres commerciaux pour garantir l'authenticité de votre achat, en particulier pour les Havaianas et les lunettes de soleil.",
    },

    {
      type: "faq",
      items: [
        {
          q: "Les Havaianas sont-elles vraiment moins chères au Brésil ?",
          a:
            "Oui, généralement bien moins chères qu'en Europe, avec un choix de modèles et de collections exclusives beaucoup plus large.",
        },
        {
          q: "Peut-on personnaliser des Havaianas à Rio ?",
          a:
            "Oui, certaines boutiques proposent la personnalisation directement sur place (initiales, semelles, couleurs), un excellent souvenir sur mesure.",
        },
        {
          q: "Où faire du shopping de marques brésiliennes à Rio ?",
          a:
            "BarraShopping, Rio Sul, VillageMall et Shopping Leblon concentrent la majorité de ces marques dans des centres commerciaux climatisés et sécurisés.",
        },
        {
          q: "Quand profiter des meilleures réductions ?",
          a:
            "Pendant les périodes de liquidação (soldes), généralement en janvier-février et juin-juillet, où les réductions peuvent atteindre 50 à 70%.",
        },
        {
          q: "Comment reconnaître une vraie Havaianas d'une copie ?",
          a:
            "Achetez toujours en boutique officielle ou en centre commercial. Les copies vendues à bas prix dans la rue sont fréquentes et beaucoup moins durables que l'originale.",
        },
        {
          q: "Peut-on faire un remboursement de TVA sur ces achats ?",
          a:
            "Oui, pour les achats significatifs réalisés dans les boutiques participant au programme Tax Free — renseignez-vous en boutique sur le seuil et les conditions en vigueur, et faites la démarche avant votre départ à l'aéroport.",
        },
      ],
    },

    {
      type: "p",
      text:
        "Rapporter une pièce Havaianas, Farm Rio ou Kenner de Rio, c'est ramener un petit morceau d'authenticité carioca chez soi, à un prix souvent bien plus intéressant qu'en Europe — à condition d'acheter au bon endroit.",
    },
  ],
};
