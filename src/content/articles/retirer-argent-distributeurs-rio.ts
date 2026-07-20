import type { Article } from "../types";
import hero from "@/assets/hero-blog.jpg";
// TODO: remplacer par une photo d'un distributeur Banco24Horas ou d'un paiement PIX en boutique

export const article: Article = {
  slug: "retirer-argent-distributeurs-rio",
  title: "Retirer de l'argent à Rio : distributeurs, PIX et sécurité",
  titleAccent: "argent",
  description: "Où retirer de l'argent en toute sécurité à Rio, comment fonctionne le PIX au quotidien, et les pièges à éviter avec les distributeurs.",
  category: "vie-pratique-locale",
  tags: ["quotidien", "pratique", "budget", "argent"],
  date: "2026-07-17",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Distributeur automatique de billets dans une rue de Rio de Janeiro",
  sections: [
    {
      type: "p",
      text: "Entre le PIX qui a changé la façon dont les Brésiliens paient au quotidien et les distributeurs qu'il vaut mieux savoir repérer, voici comment gérer son argent à Rio sans mauvaise surprise.",
    },
    { type: "h2", text: "Le PIX, le vrai moyen de paiement du quotidien" },
    {
      type: "p",
      text: "Le PIX est le système de paiement instantané de la Banque Centrale du Brésil : gratuit, immédiat, accepté quasiment partout — restaurants, taxis, kiosques de plage, marchés, et même par de nombreux vendeurs ambulants. En tant que visiteur, une application comme WanderWallet permet de créer un compte PIX et de payer directement depuis son téléphone, sans les frais des distributeurs.",
    },
    {
      type: "conseil",
      title: "Le conseil Jeitinho",
      text: "Utilisez le PIX dès le premier jour, même pour un petit montant (un café, une eau de coco). Deux ou trois paiements suffisent à prendre le réflexe, et vous gagnerez un temps précieux sur tout le reste du séjour.",
    },
    { type: "h2", text: "Où retirer de l'argent en toute sécurité" },
    {
      type: "ul",
      items: [
        "Banco24Horas — le réseau de distributeurs le plus répandu, souvent installé à l'intérieur des <a href=\"/blog/pharmacies-a-rio\">pharmacies</a> et des supermarchés, plutôt fiable",
        "Distributeurs dans les agences bancaires — Bradesco, Itaú, Banco do Brasil, Santander, à privilégier en journée",
        "Évitez les distributeurs isolés en pleine rue le soir, surtout dans les zones peu fréquentées",
      ],
    },
    {
      type: "bonasavoir",
      title: "Bon à savoir",
      text: "Les distributeurs situés à l'intérieur des centres commerciaux ou des supermarchés sont généralement les plus sûrs : accès surveillé, horaires d'ouverture rassurants, moins de risque de skimming.",
    },
    { type: "h2", text: "Le change : où et comment" },
    {
      type: "p",
      text: "Changez seulement une petite somme à votre arrivée (200 à 500 € maximum) et comparez les taux avant de choisir un bureau de change — ils varient sensiblement d'une maison de change à l'autre à Copacabana. Certaines maisons de change proposent même un service de livraison qui vous apporte l'espèce en réal directement à votre logement, pratique pour éviter de transporter de grosses sommes en ville.",
    },
    {
      type: "aeviter",
      title: "À éviter",
      text: "Le bureau de change de l'aéroport : les taux y sont presque toujours moins avantageux qu'en ville. Limitez-vous au strict nécessaire pour le trajet initial si besoin. Et en cas de carte perdue ou volée, gardez sous la main les <a href=\"/blog/numeros-urgence-adresses-utiles-rio\">numéros utiles à Rio</a>.",
    },
    { type: "h2", text: "Carte bancaire : crédit ou débit ?" },
    {
      type: "p",
      text: "Au Brésil, on vous demandera presque systématiquement « Débito ou Crédito ? ». Même avec une carte de débit française, répondez toujours « crédito » : le débit est réservé aux cartes brésiliennes et peut être refusé avec une carte étrangère.",
    },
    {
      type: "faq",
      items: [
        {
          q: "Le PIX est-il accessible aux touristes ?",
          a: "Oui, via des applications comme WanderWallet qui permettent de créer un compte PIX rapidement, sans compte bancaire brésilien classique.",
        },
        {
          q: "Y a-t-il des frais pour retirer de l'argent aux distributeurs ?",
          a: "Oui, en général des frais fixes de votre banque française plus une commission locale. Le PIX permet souvent de les éviter complètement pour les paiements du quotidien.",
        },
        {
          q: "Faut-il prévenir sa banque avant de partir ?",
          a: "C'est recommandé pour éviter un blocage de carte par mesure de sécurité, surtout pour les premiers paiements sur place.",
        },
      ],
    },
  ],
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "Des conseils personnalisés pour gérer votre budget et vos moyens de paiement pendant tout le séjour.",
    },
  ],
};
