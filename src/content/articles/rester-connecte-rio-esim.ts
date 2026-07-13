import type { Article } from "../types";
import hero from "@/assets/article-connecte-rio.jpg";

export const article: Article = {
  slug: "rester-connecte-rio-esim",
  title: "Rester connecté à Rio dès l'arrivée : eSIM et applications indispensables",
  titleAccent: "eSIM",
  description: "eSIM, Uber, WhatsApp, PIX : les applications et bons réflexes pour profiter de Rio dès l'atterrissage, sans stress ni perte de temps.",
  category: "conseils-pratiques",
  tags: ["eSIM", "applications", "internet", "préparer son voyage"],
  date: "2026-07-11",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Baie de Guanabara avec vue sur le Pain de Sucre au lever du jour, Rio de Janeiro",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Pack Connecté Brésil",
      href: "https://www.jeitinho.fr",
      description: "eSIM 16 Go, création de compte PIX, cours complet et assistance dès l'atterrissage.",
    },
  ],
  sections: [
    { type: "p", text: "Aujourd'hui, une connexion Internet est presque indispensable pour profiter pleinement de Rio. Commander un Uber, contacter son hébergement, utiliser Google Maps, communiquer sur WhatsApp ou encore payer avec le PIX : tout devient plus simple avec Internet dès l'atterrissage." },
    { type: "p", text: "Ce guide n'est pas une liste théorique de recommandations. C'est ce qu'on dirait à un ami qui débarque : quoi installer avant de partir, et pourquoi." },

    { type: "h2", text: "Les applications indispensables" },
    { type: "p", text: "La plupart des cariocas utilisent leur téléphone pour se déplacer, commander, payer et communiquer. Installez ces applications avant votre départ et gagnez un temps précieux dès l'arrivée." },
    { type: "h3", text: "Uber" },
    { type: "p", text: "Le moyen le plus simple de se déplacer à Rio : prix affiché à l'avance et paiement directement dans l'application, sans manipulation d'espèces." },
    { type: "h3", text: "WhatsApp" },
    { type: "p", text: "L'application incontournable au Brésil. Restaurants, hôtels, excursions : tout le monde communique via WhatsApp, y compris pour réserver une table ou confirmer un chauffeur." },
    { type: "h3", text: "Google Maps" },
    { type: "p", text: "Indispensable pour préparer vos itinéraires, télécharger les cartes hors ligne avant de partir, et retrouver facilement vos adresses favorites une fois sur place." },
    { type: "h3", text: "ChatGPT" },
    { type: "p", text: "Votre assistant de voyage pour traduire un menu, comprendre une situation ou obtenir des conseils locaux rapidement, en complément des recommandations humaines." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Le Wi-Fi public reste inégal selon les endroits à Rio. Arriver avec une connexion Internet active vous permet de profiter de la ville dès l'atterrissage, sans dépendre du réseau de votre hôtel." },

    { type: "h2", text: "Pourquoi choisir une eSIM plutôt qu'une carte SIM physique" },
    { type: "p", text: "L'eSIM présente plusieurs avantages décisifs pour un voyage à Rio : activation en quelques minutes avant le départ, aucun changement de carte SIM physique, conservation de votre numéro habituel pour rester joignable, et Internet disponible dès l'atterrissage sans passer par un comptoir à l'aéroport." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Avant d'acheter une eSIM, vérifiez votre forfait mobile habituel. Certains opérateurs français incluent déjà un volume de data conséquent au Brésil sans supplément. Si votre forfait est limité ou absent, une eSIM locale reste la solution la plus fiable." },

    { type: "h2", text: "Si vous prenez un numéro brésilien local" },
    { type: "p", text: "Certaines applications fonctionnent encore mieux avec un numéro local. 99 est l'alternative brésilienne à Uber, souvent moins chère selon les horaires ou les zones. iFood est l'application de livraison numéro 1 au Brésil, couvrant restaurants, pharmacies, supermarchés et boissons en quelques clics." },
    { type: "aeviter", title: "À éviter" },
    { type: "ul", items: [
      "N'attendez pas d'être sur place pour installer vos applications : les téléchargements peuvent être lents sur un Wi-Fi d'aéroport surchargé.",
      "Ne comptez pas uniquement sur le Wi-Fi de votre hébergement, souvent instable ou limité en dehors des chambres.",
      "Ne réservez pas de carte SIM physique si votre téléphone est compatible eSIM : c'est plus rapide et plus simple à activer avant le départ.",
    ]},

    { type: "h2", text: "Créer un compte PIX avant de partir" },
    { type: "p", text: "Le PIX, moyen de paiement numéro 1 au Brésil, nécessite une application compatible comme Wanderwallet pour être utilisé sans compte bancaire local. Créer ce compte avant le départ, en plus de l'activation de votre eSIM, vous permet de payer dès votre premier jour comme un vrai carioca." },

    { type: "faq", items: [
      { q: "Faut-il une eSIM même si mon forfait français inclut le Brésil ?", a: "Non, si votre forfait inclut déjà un volume de data suffisant au Brésil sans frais d'itinérance, une eSIM supplémentaire n'est pas nécessaire. Vérifiez les conditions exactes avant de partir." },
      { q: "L'eSIM fonctionne-t-elle dès l'atterrissage ?", a: "Oui, à condition de l'activer avant le départ ou pendant le vol si une connexion Wi-Fi est disponible à bord ; elle est ensuite opérationnelle dès la sortie de l'avion." },
      { q: "Quelles applications télécharger avant de partir à Rio ?", a: "Uber, WhatsApp, Google Maps (avec cartes hors ligne), une application eSIM et une application compatible PIX comme Wanderwallet." },
      { q: "Le Wi-Fi public est-il fiable à Rio ?", a: "Il reste inégal selon les lieux et les quartiers. Une connexion mobile personnelle via eSIM reste la solution la plus fiable pour profiter de la ville sans interruption." },
    ]},

    { type: "p", text: "Arriver connecté, c'est gagner plusieurs heures précieuses dès le premier jour. Quelques minutes de préparation avant le départ, et Rio se dévoile sans accroc dès la sortie de l'aéroport." },
  ],
};
