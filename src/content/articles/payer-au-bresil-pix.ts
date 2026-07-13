import type { Article } from "../types";
import hero from "@/assets/article-payer-bresil.jpg";

export const article: Article = {
  slug: "payer-au-bresil-pix",
  title: "Payer comme un Brésilien : PIX, carte et argent liquide à Rio",
  titleAccent: "PIX",
  description: "Comprendre le PIX, choisir crédito ou débito, savoir où utiliser quoi : notre guide complet pour payer sans stress pendant votre séjour à Rio.",
  category: "conseils-pratiques",
  tags: ["PIX", "argent", "paiement", "préparer son voyage"],
  date: "2026-07-11",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Calçadão de Copacabana avec des cariocas se promenant au lever du soleil",
  featured: false,
  guide: true,
  popular: true,
  relatedServices: [
    {
      label: "Pack Connecté Brésil",
      href: "https://www.jeitinho.fr",
      description: "eSIM, création de compte PIX et cours complet inclus, dès l'atterrissage.",
    },
  ],
  sections: [
    { type: "p", text: "Au Brésil, presque tout le monde paie avec PIX. Une fois que vous l'avez compris, la vie devient beaucoup plus simple. Ce système de paiement instantané a changé la façon dont les Brésiliens réglent absolument tout, du restaurant gastronomique au vendeur ambulant sur la plage." },
    { type: "p", text: "Ce guide n'est pas une fiche technique bancaire. C'est ce qu'on dirait à un ami qui débarque : comment payer, où, et quelles erreurs éviter." },

    { type: "h2", text: "Le PIX : le moyen de paiement numéro 1 au Brésil" },
    { type: "p", text: "Le PIX est un système de paiement instantané et gratuit, développé par la Banque Centrale du Brésil. Le paiement est reçu en quelques secondes, il est gratuit pour les particuliers dans la grande majorité des cas, et c'est un système officiel, fiable et très utilisé dans tout le pays." },
    { type: "p", text: "Le PIX est accepté presque partout : restaurants et cafés, commerces et boutiques, kiosques de plage, taxis, Uber et chauffeurs, marchés, artisans et même vendeurs ambulants. Au Brésil, même les vendeurs de rue et de nombreuses personnes en situation de rue ont un QR Code PIX affiché : c'est devenu un standard du quotidien." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Le premier jour, utilisez le PIX plusieurs fois même pour de petits montants (un café, une bouteille d'eau, un açaí). En 2 ou 3 paiements, le geste devient naturel et vous gagnerez un temps fou pendant tout votre séjour." },

    { type: "h2", text: "Comment utiliser le PIX en pratique" },
    { type: "p", text: "Il vous faut d'abord une application compatible PIX, comme Wanderwallet, qui permet de créer un compte facilement en tant qu'étranger. Ensuite, le paiement se déroule en quatre étapes : ouvrez l'application, scannez le QR Code ou saisissez la clé PIX du bénéficiaire, vérifiez le montant et le nom du destinataire, puis confirmez le paiement." },
    { type: "aeviter", title: "Les erreurs à éviter" },
    { type: "ul", items: [
      "Scanner un QR Code avant que le vendeur ait saisi le montant.",
      "Confondre R$ (réal brésilien) et € (euro).",
      "Envoyer un PIX au mauvais destinataire sans vérifier le nom affiché.",
      "Quitter l'application avant la confirmation du paiement.",
    ]},

    { type: "h2", text: "Débito ou crédito : la règle d'or" },
    { type: "p", text: "Au Brésil, on vous demandera presque systématiquement « Débito ou crédito ? » lors d'un paiement par carte. Même avec une carte française de débit, choisissez toujours crédito : c'est le bon choix avec une carte étrangère, ça fonctionne partout et le paiement se fait en une fois. L'option débito est réservée principalement aux cartes brésiliennes et peut être refusée avec une carte étrangère." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Si l'on vous propose un paiement en plusieurs fois (parcelado), répondez « não » : cette option est destinée aux résidents brésiliens et n'a pas d'intérêt pour un paiement en carte étrangère." },

    { type: "h2", text: "Carte ou PIX : quand utiliser quoi" },
    { type: "p", text: "Privilégiez la carte pour les hôtels, les grosses dépenses, les paiements où vous voulez profiter des assurances Visa/Mastercard, et les locations de voiture. Privilégiez le PIX pour les restaurants et cafés, les taxis et transports, les kiosques et vendeurs de rue, les petits commerces, et pour éviter les frais bancaires liés aux transactions par carte à l'étranger." },

    { type: "h2", text: "Les mots que vous allez entendre" },
    { type: "ul", items: [
      "PIX — paiement instantané.",
      "Crédito — paiement par carte, à choisir systématiquement avec une carte étrangère.",
      "Débito — réservé principalement aux cartes brésiliennes.",
      "Parcelado — paiement en plusieurs fois, à éviter avec une carte étrangère.",
      "Aproximação — paiement sans contact.",
    ]},

    { type: "faq", items: [
      { q: "Faut-il un compte bancaire brésilien pour utiliser le PIX ?", a: "Non, des applications comme Wanderwallet permettent de créer un compte compatible PIX en tant qu'étranger, sans compte bancaire local." },
      { q: "Le PIX est-il vraiment gratuit ?", a: "Oui, pour les particuliers, la quasi-totalité des transactions PIX sont gratuites, ce qui en fait une alternative bien plus économique que les frais de carte internationale." },
      { q: "Que répondre si on me demande débito ou crédito ?", a: "Répondez toujours crédito avec une carte étrangère, même s'il s'agit d'une carte de débit dans votre pays d'origine." },
      { q: "Peut-on payer les vendeurs ambulants en PIX ?", a: "Oui, la grande majorité des vendeurs ambulants et des kiosques de plage disposent d'un QR Code PIX, souvent affiché directement sur leur stand." },
    ]},

    { type: "p", text: "Comprendre le PIX, c'est probablement le réflexe le plus utile à acquérir avant de partir à Rio. Une fois maîtrisé, vous paierez comme un vrai carioca, sans stress ni frais superflus." },
  ],
};
