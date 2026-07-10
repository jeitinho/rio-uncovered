import type { Article } from "../types";
import hero from "@/assets/article-rio25.jpg";

export const article: Article = {
  slug: "25-meilleures-choses-a-faire-rio",
  title: "Les 25 meilleures choses à faire à Rio de Janeiro",
  titleAccent: "meilleures",
  description: "Notre sélection honnête des 25 choses à faire à Rio, des incontournables aux pépites de locaux. Sans langue de bois.",
  category: "activites",
  tags: ["que faire à Rio", "incontournables", "activités"],
  date: "2026-06-20",
  author: "Rafael Coelho",
  hero,
  heroAlt: "Vue aérienne du Christ Rédempteur et de la baie de Guanabara au coucher du soleil",
  featured: true,
  guide: true,
  popular: true,
  relatedServices: [
    { label: "City tour privé", href: "/experiences", description: "On condense 25 idées en une journée sur mesure." },
    { label: "Conciergerie", href: "/conciergerie", description: "Réservations, transferts, adresses : on s'occupe de tout." },
  ],
  sections: [
    { type: "p", text: "Il y a mille listes de « choses à faire à Rio ». La plupart se copient entre elles. Celle-ci est différente : on l'a écrite comme si on préparait le voyage d'un ami. Certaines idées sont évidentes (impossible d'y couper), d'autres sont notre carnet secret." },

    { type: "h2", text: "Les incontournables assumés" },
    { type: "p", text: "Oui, tout le monde y va. Non, ce ne sont pas des pièges — à condition de bien s'y prendre." },
    { type: "ol", items: [
      "Le Christ Rédempteur — au lever du soleil, pas à midi. Le train à crémaillère du Corcovado est plus agréable que la fourgonnette.",
      "Le Pain de Sucre (Pão de Açúcar) — au coucher du soleil. Prévoir 45 minutes d'attente aux téléphériques.",
      "Ipanema, Posto 9 — voir notre guide complet.",
      "Copacabana — marcher toute la calçada, de Leme au Fort. Une leçon d'urbanisme.",
      "Escadaria Selarón — 10 minutes suffisent. Tôt le matin, sans foule.",
      "Santa Teresa — quartier bohème, à parcourir en bondinho (le tram jaune).",
      "Le Maracanã — un match du Flamengo, même sans être fan de foot. Voir notre guide dédié.",
    ]},

    { type: "h2", text: "Les activités que les locaux préfèrent" },
    { type: "ol", items: [
      "Randonnée Dois Irmãos — 40 minutes de montée, la plus belle vue sur Ipanema.",
      "Randonnée Pedra Bonita — plus facile, panoramique à 360°.",
      "Feira Hippie d'Ipanema — chaque dimanche, artisanat brésilien.",
      "Feira de São Cristóvão — cuisine du Nordeste, forró, ambiance authentique.",
      "Sunset à Arpoador — la vraie religion carioca.",
      "Cours de samba dans Lapa — Rio Scenarium ou Carioca da Gema.",
      "Jardin Botanique — 137 hectares, palmiers impériaux, un poumon vert.",
      "Praia do Leme — la plage cachée de Copacabana, calme et locale.",
    ]},

    { type: "h2", text: "Les pépites hors radar" },
    { type: "ol", items: [
      "Prainha et Grumari — les plages sauvages, à 45 min de Zona Sul.",
      "Ilha de Paquetá — une île sans voiture dans la baie, ferry depuis Praça XV.",
      "Copacabana Palace tea time — luxe abordable pour un moment hors du temps.",
      "Instituto Moreira Salles (IMS) — art et jardin, gratuit, souvent vide.",
      "MAR (Musée d'Art de Rio) — architecture spectaculaire, à Praça Mauá.",
      "Confeitaria Colombo — un café dans un décor 1900.",
      "Cristo Vive Roda de Samba — samedis dans Lapa, samba pure.",
      "Cachaçaria Mangue Seco — dégustation de cachaças artisanales.",
      "Praia Vermelha — petite plage sous le Pain de Sucre, sable rouge.",
      "Cavernes de Furnas et Grumari — pour les randonneurs curieux.",
    ]},

    { type: "conseil", title: "Le conseil Jeitinho", text: "Ne cherchez pas à cocher les 25 cases. Choisissez-en 8, faites-les bien, laissez du temps pour l'imprévu. Le meilleur souvenir de Rio n'est jamais celui qu'on avait planifié." },

    { type: "h2", text: "Comment enchaîner tout ça sans s'épuiser" },
    { type: "p", text: "Rio s'organise en trois zones : Zona Sul (plages, restaurants, ce qu'on voit dans les guides), Centro (histoire, musées), Zona Oeste (plages sauvages, quartier de Barra). Grouper vos activités par zone évite trois heures de déplacement par jour." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Le trafic à Rio peut multiplier par trois vos temps de trajet en semaine, entre 17h et 20h. Prévoyez large ou décalez." },

    { type: "faq", items: [
      { q: "Combien de jours pour visiter Rio ?", a: "Minimum 4 pleins, idéal 6 à 7. Moins de 4 jours, vous ferez que des incontournables et repartirez frustrés." },
      { q: "Quel est le meilleur moment pour aller à Rio ?", a: "Mai à octobre : moins chaud, moins humide, prix plus doux. Décembre-janvier : c'est haute saison, chaud, plein, cher — mais aussi le plus beau. Février : Carnaval." },
      { q: "Faut-il un guide ?", a: "Pas obligatoire, mais un city tour privé le premier jour vous fait gagner deux jours. Notre concierge peut arranger ça." },
    ]},
  ],
};
