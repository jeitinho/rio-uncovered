import type { Article } from "../types";
import hero from "@/assets/article-carnaval.jpg";

export const article: Article = {
  slug: "preparer-carnaval-rio",
  title: "Comment préparer son Carnaval de Rio — le guide sérieux",
  titleAccent: "sérieux",
  description: "Sambodrome, blocos, camarotes, hôtels, dates : tout ce qu'il faut savoir pour préparer son Carnaval de Rio comme il faut.",
  category: "carnaval",
  tags: ["Carnaval", "blocos", "Sambodrome", "février"],
  date: "2026-07-01",
  author: "Marina Alves",
  hero,
  heroAlt: "Danseuses de samba en costumes rouges au Carnaval de Rio",
  featured: true,
  guide: true,
  popular: true,
  relatedServices: [
    { label: "Conciergerie Carnaval", href: "/conciergerie", description: "Places Sambodrome, camarotes, logement, transferts — on gère la logistique." },
  ],
  sections: [
    { type: "p", text: "Le Carnaval de Rio est un chef-d'œuvre logistique déguisé en fête. Pour en profiter, il faut préparer — pas improviser. Ce guide est écrit à partir de six éditions vécues sur place." },

    { type: "h2", text: "Choisir ses dates" },
    { type: "p", text: "Le Carnaval officiel dure 5 jours (vendredi au mardi gras). Mais la ville s'anime dès une semaine avant, et les blocos post-Carnaval s'étalent souvent jusqu'à 10 jours après. Notre recommandation : arriver le mercredi précédant le Carnaval officiel, repartir le jeudi suivant. 8 nuits, l'équilibre parfait." },

    { type: "h2", text: "Les trois façons de vivre le Carnaval" },
    { type: "h3", text: "1. Les blocos de rue — l'âme du Carnaval" },
    { type: "p", text: "Ce sont les vrais Carnavals. Des cortèges à pied, gratuits, dans les rues, avec fanfare, chanteurs, foule costumée. Rio en compte plus de 500 pendant le Carnaval, du bloc de 200 personnes au bloc de 400 000." },
    { type: "ul", items: [
      "Cordão da Bola Preta (samedi, Centro) — géant, historique.",
      "Sargento Pimenta (dimanche, Aterro do Flamengo) — répertoire Beatles version samba.",
      "Simpatia É Quase Amor (dimanche, Ipanema) — le bloc chic de la Zona Sul.",
      "Céu na Terra (samedi, Santa Teresa) — le plus poétique.",
    ]},

    { type: "h3", text: "2. Le Sambodrome — le spectacle des écoles de samba" },
    { type: "p", text: "Deux nuits (dimanche et lundi) où les 12 grandes écoles défilent chacune 80 minutes. C'est un show de niveau olympique. Places à partir de 30 € (secteurs 12/13, populaires), jusqu'à 500 € (camarotes, vue centrale). Réservez au moins 3 mois à l'avance." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Le meilleur rapport qualité-prix : le secteur 9 (Frisas). Vue frontale, ambiance, prix corrects. Évitez le secteur 13 si vous voulez vraiment voir : trop éloigné." },

    { type: "h3", text: "3. Les camarotes — le Carnaval version VIP" },
    { type: "p", text: "Camarote da Brahma, Nº1, Allegria : des espaces open bar avec vue sur le Sambodrome, DJs, célébrités. À partir de 400 € par nuit et par personne. Pour qui veut un Carnaval « festival » plus qu'« observation »." },

    { type: "h2", text: "L'hôtel : réservez tôt ou payez trois fois plus" },
    { type: "p", text: "L'hôtellerie de Rio double ou triple ses prix pendant le Carnaval, avec minimum de nuits imposé (souvent 4 à 7). Réservez idéalement 6 mois à l'avance. Zones recommandées : Ipanema, Leblon, Copacabana. Évitez Lapa pour dormir (trop bruyant), gardez-le pour sortir." },

    { type: "h2", text: "Se déplacer pendant le Carnaval" },
    { type: "ul", items: [
      "Uber : disponible mais surtaxé (parfois x3). Prévoyez.",
      "Métro : fonctionne 24/24 pendant le Carnaval — c'est votre meilleur ami.",
      "Blocos : allez-y à pied si possible ; les rues sont fermées.",
      "Sambodrome : uniquement en métro (station Praça Onze). Prévoir 45 min avant l'entrée.",
    ]},
    { type: "aeviter", title: "À éviter", text: "Voiture de location. Circulation impossible, parkings introuvables, risque de vandalisme. Uber + métro + marche couvrent 100 % des besoins." },

    { type: "h2", text: "Costume : oui ou non ?" },
    { type: "p", text: "Oui. Même minimaliste. Une couleur, un accessoire, un chapeau. Personne ne juge — au contraire, ne pas jouer le jeu est vu comme se placer en dehors. Achats sur place au SAARA (marché populaire du Centro) : quelques euros suffisent." },

    { type: "h2", text: "Sécurité pendant le Carnaval" },
    { type: "p", text: "Les blocos sont sûrs. La foule est joyeuse, dense, alcoolisée mais rarement agressive. Précautions : téléphone dans une pochette étanche autour du cou, pas de sac à main, cash divisé en plusieurs poches, bouteille d'eau." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Il fait très chaud (30-40°C) et humide. Casquette, crème solaire, hydratation. Un bloco de 4 heures sous le soleil, c'est physique." },

    { type: "faq", items: [
      { q: "Quand aura lieu le Carnaval de Rio 2027 ?", a: "Du vendredi 5 février au mercredi des Cendres 10 février 2027. Le Sambodrome a lieu dimanche 7 et lundi 8." },
      { q: "Faut-il parler portugais ?", a: "Non, la Zona Sul est très habituée aux étrangers. Quelques mots basiques (obrigado, tudo bem) suffisent pour la chaleur des interactions." },
      { q: "Peut-on aller au Carnaval avec des enfants ?", a: "Oui, plusieurs blocos sont explicitement familiaux (le matin, dans la Zona Sul). Le Sambodrome est possible à partir de 8-10 ans, avec pauses." },
      { q: "Combien coûte le Carnaval au total ?", a: "Pour 8 nuits à deux, milieu de gamme, avec Sambodrome (secteur 9) : compter 3 000 à 4 500 € par personne hors vol." },
    ]},
  ],
};
