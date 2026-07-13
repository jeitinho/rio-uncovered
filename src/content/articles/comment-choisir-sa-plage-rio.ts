import type { Article } from "../types";
import hero from "@/assets/article-choisir-plage-rio.jpg";

export const article: Article = {
  slug: "comment-choisir-sa-plage-rio",
  title: "Comment choisir sa plage à Rio de Janeiro ?",
  titleAccent: "sa plage",
  description: "Leme, Copacabana, Joatinga, Ipanema, Leblon, São Conrado, Vidigal... chaque plage de Rio a sa personnalité. Notre guide pour choisir la vôtre.",
  category: "plages",
  tags: ["plages", "Rio de Janeiro", "guide pratique"],
  date: "2026-07-11",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Calçadão en mosaïque noire et blanche longeant une plage de Rio de Janeiro au lever du soleil",
  featured: false,
  guide: true,
  popular: true,
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "On vous aide à choisir la plage adaptée à votre séjour et vos envies.",
    },
  ],
  sections: [
    { type: "p", text: "À Rio, chaque plage a sa personnalité. Ambiance festive, sport, famille, surf ou tranquillité : voici comment choisir celle qui correspond le mieux à votre séjour, plutôt que de vous fier uniquement aux noms les plus connus." },
    { type: "p", text: "Ce guide n'est pas un simple classement. C'est ce qu'on dirait à un ami qui débarque : quelle plage pour quelle ambiance, et à quoi s'attendre une fois sur place." },

    { type: "h2", text: "Les plages en un coup d'œil" },
    { type: "ul", items: [
      "Leme — le meilleur des deux mondes : le Rasta Beach pour l'ambiance en journée, puis une plage plus paisible en direction du Forte de Leme.",
      "Copacabana — la plage emblématique. Accessible, animée et parfaite pour un premier voyage.",
      "Joatinga — petite plage discrète entre São Conrado et Barra. Parfaite pour se ressourcer au calme.",
      "Ipanema — la plage tendance. Sport, altinha, beach-volley et ambiance locale.",
      "Leblon — plus chic et plus tranquille. Très appréciée des familles.",
      "São Conrado — décollage des parapentes et atterrissage sur la plage. Bon spot de surf.",
      "Praia do Vidigal — ambiance locale et décontractée. Belle vue, bons restaurants et surf au lever du soleil.",
      "Barra da Tijuca — immense plage, idéale pour marcher, courir et éviter la foule.",
      "Praia Vermelha — petite plage charmante au pied du Pain de Sucre. Calme et pleine de charme.",
      "Praia do Flamengo — vue imprenable sur le Pain de Sucre. Parfaite pour se détendre et faire du sport.",
    ]},
    { type: "conseil", title: "Le conseil Jeitinho", text: "Ne commandez jamais un produit dont le prix n'est pas clairement affiché. Si le tarif n'est pas visible, demandez-le avant de consommer. Les établissements sérieux affichent toujours leurs prix, ce qui évite les mauvaises surprises." },

    { type: "h2", text: "Combien coûte une journée à la plage ?" },
    { type: "h3", text: "Installation" },
    { type: "ul", items: [
      "Chaise : 10 à 25 R$.",
      "Parasol classique : 25 à 30 R$.",
      "Grand parasol : 50 à 60 R$.",
    ]},
    { type: "h3", text: "Boissons et en-cas" },
    { type: "ul", items: [
      "Eau de coco : 10 à 15 R$.",
      "Mate : 12 à 15 R$ selon la taille.",
      "Açaí : 10 à 25 R$.",
      "Sandwich naturel : 5 à 20 R$.",
      "Biscoito Globo : 5 à 15 R$.",
      "Brochettes (viande, poulet, crevette) : 15 à 30 R$.",
    ]},
    { type: "aeviter", title: "À éviter absolument" },
    { type: "ul", items: [
      "N'achetez pas de cigarettes ou dérivés auprès des vendeurs ambulants de plage : les tarifs y sont astronomiques et la qualité n'est pas garantie.",
    ]},

    { type: "h2", text: "Comprendre les postos et les barracas" },
    { type: "p", text: "Les postos sont les postes de secours répartis tout au long des plages, qui servent aussi de repère aux cariocas pour se donner rendez-vous : vous entendrez souvent « On se retrouve au Posto 9 ». Les barracas sont les kiosques ou installations privées qui louent chaises, parasols et servent boissons et nourriture. Chaque barraca possède généralement un nom ou un numéro, ce qui permet de retrouver facilement ses amis." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Les vendeurs ambulants font partie de la culture de Rio : produits frais, typiques et souvent délicieux. Mais attention aux prix non affichés, en particulier pour les articles autres que la nourriture et les boissons." },

    { type: "h2", text: "Une journée type à la plage" },
    { type: "ol", items: [
      "Matin — plage calme, sport et baignade tranquille.",
      "Après-midi — ambiance animée, volley, musique et kiosques.",
      "Sunset — le meilleur moment pour le coucher de soleil, notamment à Arpoador.",
      "Soir — dîner et soirée dans les kiosques ou en ville.",
    ]},

    { type: "h2", text: "Aller plus loin : la Zone Ouest et Niterói" },
    { type: "p", text: "Si vous cherchez des plages plus sauvages, loin de la foule de la Zona Sul, direction la <a href=\"/blog/plages-zone-ouest-rio\">Zone Ouest de Rio</a> avec ses plages préservées et ses cascades, ou une excursion aux <a href=\"/blog/plages-niteroi\">plages de Niterói</a>, de l'autre côté de la baie de Guanabara." },

    { type: "faq", items: [
      { q: "Quelle est la plage la plus adaptée pour un premier séjour à Rio ?", a: "Copacabana reste le choix le plus pratique : accessible, animée et proche du métro, idéale pour un premier voyage à Rio." },
      { q: "Quelle plage privilégier pour la tranquillité ?", a: "Leblon, Joatinga ou Praia Vermelha offrent une ambiance plus calme que Copacabana et Ipanema aux heures de pointe." },
      { q: "Où surfer à Rio ?", a: "Arpoador, São Conrado, Praia do Vidigal et les plages de la Zone Ouest comme Macumba et Grumari sont les spots les plus réputés." },
      { q: "Que faire si le prix d'un produit n'est pas affiché sur la plage ?", a: "Demandez systématiquement le tarif avant de consommer. Les établissements sérieux affichent toujours leurs prix, ce qui évite les mauvaises surprises." },
    ]},

    { type: "p", text: "Choisir sa plage à Rio, c'est un peu choisir son ambiance du jour. Entre sport, calme, fête ou surf, la ville offre suffisamment de littoral pour changer d'humeur chaque matin." },
  ],
};
