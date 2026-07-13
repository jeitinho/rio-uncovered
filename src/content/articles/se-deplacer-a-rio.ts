import type { Article } from "../types";
import hero from "@/assets/article-se-deplacer-rio.jpg";

export const article: Article = {
  slug: "se-deplacer-a-rio",
  title: "Se déplacer à Rio : Uber, métro, taxi et mise à disposition",
  titleAccent: "se déplacer",
  description: "Uber moto, métro, taxi, mise à disposition de chauffeur : notre guide complet des transports à Rio, ceux que les cariocas utilisent vraiment.",
  category: "transports",
  tags: ["transports", "Uber", "métro", "préparer son voyage"],
  date: "2026-07-11",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Taxi jaune et noir traversant l'avenue en bord de mer avec le Pain de Sucre en arrière-plan, Rio de Janeiro",
  featured: false,
  guide: true,
  popular: true,
  relatedServices: [
    {
      label: "Transferts Jeitinho",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "Chauffeur privé pour vos aéroports, soirées, excursions et Carnaval.",
    },
  ],
  sections: [
    { type: "p", text: "À Rio, il existe plusieurs façons de se déplacer. Voici celles que les cariocas utilisent vraiment, loin des idées reçues sur les taxis qu'on hèle dans la rue ou les longues attentes de bus." },
    { type: "p", text: "Ce guide n'est pas une liste théorique d'options de transport. C'est ce qu'on dirait à un ami qui débarque : quoi utiliser, quand, et pourquoi." },

    { type: "h2", text: "Uber moto : le moyen le plus rapide" },
    { type: "p", text: "C'est le moins cher, il évite les bouchons et il est très utilisé par les habitants eux-mêmes. Disponible presque partout, il est idéal si vous voyagez seul et sans bagage. À titre indicatif : Copacabana → Ipanema coûte entre 6 et 12 R$, Copacabana → Botafogo entre 8 et 15 R$, et Copacabana → Lapa entre 12 et 20 R$." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Uber moto quand vous êtes seul et pressé. Uber classique à deux ou avec des bagages. Réservez une prestation de chauffeur dès que vous voulez optimiser plusieurs déplacements ou profiter de la journée sans vous soucier du transport." },

    { type: "h2", text: "Uber : le meilleur compromis" },
    { type: "p", text: "Climatisation, paiement par carte ou PIX, prix connu avant le départ et disponible partout : Uber reste le meilleur compromis pour la plupart des trajets à Rio, en particulier pour rejoindre l'aéroport, sortir en soirée ou aller à la plage." },

    { type: "h2", text: "Les moto-taxis des communautés" },
    { type: "p", text: "Dans certaines communautés (favelas), les moto-taxis sont le moyen de transport principal. Ils permettent de rejoindre rapidement des rues très pentues, souvent inaccessibles en voiture. Un trajet type, comme PPG (Pavão-Pavãozinho) vers Vidigal, coûte environ 25 R$. Demandez toujours le tarif avant de monter." },

    { type: "h2", text: "Le métro : rapide, économique et climatisé" },
    { type: "p", text: "Idéal pour rejoindre Copacabana, Ipanema, Botafogo, Flamengo, le Centro ou le Maracanã, le métro reste l'un des moyens les plus fiables pour éviter les embouteillages, avec un excellent rapport qualité-prix." },
    { type: "h3", text: "Le taxi" },
    { type: "p", text: "Toujours présent devant les hôtels, aux aéroports et dans les lieux touristiques. Vous pouvez aussi utiliser l'application officielle des taxis municipaux, Taxi.Rio, pour plus de transparence sur les tarifs." },
    { type: "h3", text: "Le bus" },
    { type: "p", text: "Le réseau est vaste et couvre toute la ville, mais il est préférable de le privilégier uniquement si vous connaissez déjà Rio ou si quelqu'un vous accompagne, les lignes et les correspondances pouvant être déroutantes pour un premier séjour." },

    { type: "h2", text: "La mise à disposition de chauffeur" },
    { type: "p", text: "Besoin d'un chauffeur pendant plusieurs heures ou toute une journée ? Le chauffeur reste avec vous, vous attend entre chaque arrêt et adapte le programme selon vos envies. C'est parfait pour un city tour, une journée plage, du shopping ou plusieurs rendez-vous dans la même journée, avec confort, sécurité et flexibilité totale." },
    { type: "bonasavoir", title: "Bon à savoir", text: "À Rio, le temps de trajet dépend surtout de la circulation. Un trajet de 5 km peut parfois prendre plus longtemps qu'un trajet de 15 km selon l'heure et le jour de la semaine. Anticipez toujours vos horaires en conséquence, en particulier avant un vol ou un rendez-vous important." },

    { type: "h2", text: "Le mot du jour : corrida" },
    { type: "p", text: "C'est le mot utilisé pour parler d'une course, que ce soit en Uber, en taxi ou en moto. Vous entendrez souvent « Quanto ficou a corrida ? » (la course a coûté combien ?) ou « Aceitou a corrida ? » (le chauffeur a accepté la course ?)." },

    { type: "aeviter", title: "À éviter", text: "Évitez de héler un taxi non identifié dans la rue en pleine nuit dans les zones peu fréquentées. Privilégiez toujours Uber, l'application Taxi.Rio, ou un chauffeur recommandé pour les trajets nocturnes." },

    { type: "faq", items: [
      { q: "Quel est le moyen de transport le moins cher à Rio ?", a: "L'Uber moto reste le moins cher pour un trajet seul et sans bagage, suivi de près par le métro pour les trajets couverts par le réseau." },
      { q: "Le métro dessert-il les plages de la Zona Sul ?", a: "Oui, il dessert directement Copacabana, Ipanema (station Nossa Senhora da Paz), Botafogo et Flamengo, ce qui en fait un excellent moyen pour explorer ces quartiers." },
      { q: "Faut-il négocier le prix d'un moto-taxi de communauté ?", a: "Il est recommandé de toujours demander le tarif avant de monter, ces trajets n'étant généralement pas encadrés par une application avec prix affiché à l'avance." },
      { q: "Une mise à disposition de chauffeur vaut-elle le coût pour une seule journée ?", a: "Oui, surtout si vous avez plusieurs arrêts prévus (plage, shopping, restaurants) : le gain de temps et de confort compense largement le coût pour un groupe ou une famille." },
    ]},

    { type: "p", text: "À Rio, bien choisir son mode de transport, c'est déjà gagner une bonne partie de sa journée. Adaptez votre choix à votre itinéraire du jour, et laissez la circulation carioca vous surprendre le moins possible." },
  ],
};
