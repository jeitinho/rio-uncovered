import type { Article } from "../types";
import hero from "@/assets/article-conseils-avant-partir.jpg";

export const article: Article = {
  slug: "conseils-pratiques-avant-partir-rio",
  title: "Conseils pratiques avant de partir à Rio de Janeiro",
  titleAccent: "avant de partir",
  description: "Documents, vaccins, applications, assurance, bagages : notre checklist complète pour préparer sereinement votre voyage à Rio de Janeiro.",
  category: "conseils-pratiques",
  tags: ["préparer son voyage", "checklist", "avant de partir", "Rio de Janeiro"],
  date: "2026-07-14",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Valise ouverte avec passeport, appareil photo et accessoires de voyage préparés pour un départ à Rio de Janeiro",
  featured: false,
  guide: true,
  popular: true,
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "On vous accompagne gratuitement dans la préparation de votre séjour.",
    },
  ],
  sections: [
    { type: "p", text: "Un voyage bien préparé, c'est un voyage plus serein. Avant de vous envoler pour Rio, quelques vérifications simples suffisent à vous éviter le stress de dernière minute et à profiter pleinement de la ville dès l'atterrissage." },
    { type: "p", text: "Ce guide n'est pas une liste administrative froide. C'est ce qu'on dirait à un ami qui prépare sa valise : ce qui compte vraiment, et ce qu'on oublie trop souvent." },

    { type: "h2", text: "Documents à vérifier avant le départ" },
    { type: "ul", items: [
      "Vérifiez les conditions d'entrée au Brésil selon votre nationalité (visa ou non, durée de séjour autorisée).",
      "Souscrivez une assurance voyage couvrant les frais médicaux, indispensable au Brésil où les soins privés peuvent être coûteux pour un non-résident.",
      "Sauvegardez une copie numérique de vos documents importants (passeport, billets, réservations) sur un cloud accessible sans connexion locale.",
      "Vérifiez la date de validité de votre passeport : au moins 6 mois après la date de retour est généralement recommandé.",
    ]},
    { type: "conseil", title: "Le conseil Jeitinho", text: "Les voyageurs qui préparent leur séjour avant le départ profitent davantage de Rio. Quelques minutes d'organisation aujourd'hui peuvent vous faire gagner plusieurs heures une fois sur place." },

    { type: "h2", text: "Argent : anticiper avant d'arriver" },
    { type: "p", text: "Vérifiez les frais de votre banque à l'étranger avant de partir, et prévoyez un moyen de paiement de secours en cas de blocage de votre carte principale. Découvrez le fonctionnement du <a href=\"/blog/payer-au-bresil-pix\">PIX</a>, le système de paiement numéro 1 au Brésil, qui vous fera gagner un temps précieux une fois sur place." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Choisissez à l'avance où changer votre argent en évitant le bureau de change de l'aéroport, dont les taux sont systématiquement moins avantageux qu'en ville. Changez seulement une petite somme (200 à 500 €) pour vos premiers jours." },

    { type: "h2", text: "Les applications à installer avant le départ" },
    { type: "p", text: "La plupart des cariocas utilisent leur téléphone pour se déplacer, commander, payer et communiquer. Installez ces applications avant votre départ : Uber, WhatsApp, Google Maps (avec cartes hors ligne téléchargées), une eSIM Brésil et une application compatible PIX comme Wanderwallet. Retrouvez le détail complet dans notre guide sur <a href=\"/blog/rester-connecte-rio-esim\">l'eSIM et les applications indispensables</a>." },

    { type: "h2", text: "Bagages : quoi prévoir" },
    { type: "ul", items: [
      "Des vêtements adaptés à la saison de votre séjour (consultez notre calendrier mois par mois avant de faire votre valise).",
      "Des chaussures confortables pour la marche, en plus d'une paire de tongs indispensable au quotidien.",
      "Une tenue plus habillée pour les rooftops ou certains restaurants qui apprécient une tenue correcte.",
      "Vérifiez la franchise bagages de votre compagnie aérienne, en particulier si vous prévoyez de rapporter des souvenirs ou des articles de mode brésiliens.",
    ]},
    { type: "aeviter", title: "À éviter", text: "Ne partez pas sans avoir vérifié les vaccins recommandés pour un séjour au Brésil (fièvre jaune notamment, selon les zones visitées et votre itinéraire complet). Emportez vos médicaments habituels en quantité suffisante, les équivalents locaux n'étant pas toujours identiques." },

    { type: "h2", text: "Santé et sécurité" },
    { type: "ul", items: [
      "Vérifiez les vaccins recommandés selon votre itinéraire complet, en particulier si vous prévoyez des excursions au-delà de Rio.",
      "Emportez vos médicaments habituels en quantité suffisante pour toute la durée du séjour.",
      "Vérifiez les garanties précises de votre assurance voyage, notamment le rapatriement.",
      "Informez un proche de votre itinéraire général avant le départ.",
    ]},

    { type: "h2", text: "Les premiers réflexes une fois sur place" },
    { type: "p", text: "Dès votre arrivée, changez un peu d'argent, achetez une paire de tongs locale (Kenner ou Havaianas), enregistrez votre hébergement et les adresses clés sur Google Maps, et goûtez une eau de coco ou un açaí pour vous mettre directement dans l'ambiance. Retrouvez le détail complet de notre approche dans notre guide <a href=\"/blog/vivre-comme-un-carioca\">Vivre comme un carioca</a>." },

    { type: "faq", items: [
      { q: "Faut-il un visa pour se rendre à Rio ?", a: "Cela dépend entièrement de votre nationalité. Vérifiez les conditions d'entrée officielles avant de réserver vos billets, les règles pouvant évoluer selon les accords bilatéraux en vigueur." },
      { q: "Quelle assurance voyage choisir pour le Brésil ?", a: "Privilégiez une assurance couvrant largement les frais médicaux et le rapatriement, les soins privés pouvant être coûteux au Brésil pour un non-résident sans couverture adaptée." },
      { q: "Quand faut-il changer de l'argent avant de partir ?", a: "Il est recommandé de changer une petite somme (200 à 500 €) à l'arrivée plutôt qu'avant le départ, et de privilégier ensuite le PIX pour l'essentiel de vos paiements quotidiens." },
      { q: "Quelles applications installer avant de partir à Rio ?", a: "Uber, WhatsApp, Google Maps avec cartes hors ligne, une eSIM Brésil et une application compatible PIX comme Wanderwallet sont les indispensables avant le départ." },
    ]},

    { type: "p", text: "Un voyage bien préparé, c'est la promesse d'un séjour sans stress inutile. Quelques vérifications simples avant le départ, et Rio se dévoile sans accroc dès votre arrivée." },
  ],
};
