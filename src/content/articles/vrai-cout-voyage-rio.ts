import type { Article } from "../types";
import hero from "@/assets/article-budget.jpg";

export const article: Article = {
  slug: "vrai-cout-voyage-rio",
  title: "Le vrai coût d'un voyage à Rio — chiffres à jour",
  titleAccent: "vrai",
  description: "Combien coûte réellement un voyage à Rio ? Nos estimations honnêtes par poste (vols, hôtel, restos, activités, transports) en euros.",
  category: "budget",
  tags: ["budget", "coût", "argent", "planification"],
  date: "2026-05-18",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Billets de reais brésiliens avec un café et un pastel sur une table en bois",
  popular: true,
  relatedServices: [
    { label: "Conciergerie", href: "https://www.jeitinho.fr/trouver-un-jeitinho", description: "On négocie les tarifs locaux pour vous — souvent 20 à 30 % de moins." },
  ],
  sections: [
    { type: "p", text: "Rio a la réputation d'être « cher » ou « pas cher », selon qui parle. La vérité : Rio est modulable. On peut y vivre une semaine avec 700 € comme avec 7 000 €. Voici les chiffres réels, testés récemment." },

    { type: "h2", text: "Le vol depuis la France" },
    { type: "p", text: "Compter entre 700 € et 1 400 € aller-retour selon la saison. Air France (direct), TAP Portugal (via Lisbonne, souvent moins cher), Latam. Réservez 3 à 6 mois à l'avance pour décembre-février. Mai-septembre est la fenêtre la plus abordable." },

    { type: "h2", text: "L'hébergement — quatre gammes" },
    { type: "ul", items: [
      "Auberge / hostel privatif : 30-60 €/nuit à Ipanema ou Santa Teresa.",
      "Appart Airbnb correct à Ipanema/Copacabana : 80-140 €/nuit.",
      "Hôtel 4* type Arena Copacabana : 150-250 €/nuit.",
      "Boutique/luxe (Fasano, Copacabana Palace) : 400-1 200 €/nuit.",
    ]},
    { type: "conseil", title: "Le conseil Jeitinho", text: "L'écart Ipanema/Copacabana peut atteindre 40 % sur un même standing. Copacabana offre plus pour moins, à condition d'accepter une ambiance plus touristique." },

    { type: "h2", text: "Manger : trois budgets" },
    { type: "ul", items: [
      "Petit budget — buffet au kilo à midi (8-12 €), padaria le soir (5-10 €). Total : 20-25 €/jour.",
      "Milieu de gamme — brunch café (10-15 €), déjeuner restaurant simple (18-25 €), dîner correct (30-40 € boissons comprises). Total : 55-70 €/jour.",
      "Haut de gamme — dîner Oro, Olympe, Lasai : 80-150 € par personne, hors vin.",
    ]},

    { type: "h2", text: "Transports sur place" },
    { type: "ul", items: [
      "Uber : 3-8 € pour la plupart des trajets Zona Sul. Compter 20-25 € Aéroport-Ipanema.",
      "Métro : 1,20 € le ticket, très efficace sur l'axe Copacabana-Centro.",
      "Bus : 0,80 €, à éviter si l'on est étranger (complexe, peu confortable).",
      "Vélos Itaú : 1 €/heure, très pratique le long des plages.",
    ]},

    { type: "h2", text: "Les activités phares — prix indicatifs" },
    { type: "ul", items: [
      "Christ Rédempteur avec Jeitinho (3h) : 40 €",
      "Pain de Sucre avec Jeitinho (3h) : 60 €",
      "Expérience Maracanã avec Jeitinho (billet + accompagnement) : 50 €",
      "City Tour Jeitinho (3-4h) : 80 €",
      "Randonnée Dois Irmãos ou Morro da Urca avec Jeitinho : 50 €",
      "Excursion journée Ilha Grande, Búzios ou Arraial do Cabo (groupe) : 50 €",
      "Tour d'hélicoptère (1h) : 185 € · Parapente / Deltaplane : 150 €",
    ]},

    { type: "h2", text: "Budget total pour une semaine (7 nuits)" },
    { type: "p", text: "Sur la base d'un voyage à deux, en dehors du vol :" },
    { type: "ul", items: [
      "Backpacker : 550-700 € / personne",
      "Milieu de gamme confortable : 900-1 200 € / personne",
      "Haut de gamme : 2 000-3 500 € / personne",
      "Luxe assumé : 5 000 €+ / personne",
    ]},

    { type: "aeviter", title: "À éviter", text: "Payer en euros dans un restaurant qui vous le propose : le taux est toujours défavorable. Payez toujours en reais, par carte ou espèces." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Les pourboires : 10 % sont souvent inclus (\"serviço\"). Rien d'obligatoire au-delà. Dans les taxis : arrondir." },

    { type: "faq", items: [
      { q: "Faut-il changer des euros avant de partir ?", a: "Pas trop. Sortez du liquide au distributeur sur place (Banco do Brasil, Bradesco). Prévoyez 200-300 € en cash pour les premiers jours, le reste par carte." },
      { q: "La carte bancaire passe-t-elle partout ?", a: "Oui, y compris sur les plages via le PIX (paiement mobile). L'espèces sert surtout pour les pourboires et petits vendeurs." },
      { q: "Rio est-elle plus chère que Paris ?", a: "Pour l'hôtellerie de luxe et les restaurants haut de gamme : oui. Pour le quotidien (Uber, restos moyens, marchés) : nettement moins chère." },
    ]},
  ],
};
