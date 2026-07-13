import type { Article } from "../types";
import hero from "@/assets/article-baile-funk.jpg";

export const article: Article = {
  slug: "baile-funk-guide",
  title: "Baile Funk : le guide pour vivre l'énergie populaire de Rio",
  titleAccent: "Baile Funk",
  description: "Rocinha, Santo Amaro, l'histoire du baile funk et comment y assister en toute sécurité : notre guide complet sur l'expression musicale la plus populaire de Rio.",
  category: "culture",
  tags: ["baile funk", "musique", "culture carioca", "Rio de Janeiro"],
  date: "2026-07-11",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Foule dansant lors d'un baile funk en plein air dans une favela de Rio de Janeiro, éclairages colorés",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Expériences Jeitinho",
      href: "https://www.jeitinho.fr/experiences",
      description: "Accès aux meilleurs bailes de Rio avec accompagnement, sécurité et logistique sur mesure.",
    },
  ],
  sections: [
    { type: "p", text: "Le Baile Funk, c'est l'expression la plus authentique et populaire de la culture carioca. Des basses puissantes, des MCs charismatiques et une ambiance électrisante qui ne s'arrête jamais : une expérience unique à vivre au moins une fois à Rio." },
    { type: "p", text: "Ce guide n'est pas une simple présentation musicale. C'est ce qu'on dirait à un ami curieux : d'où vient ce genre, où le vivre, et comment s'y prendre en toute sécurité." },

    { type: "h2", text: "Comprendre le baile funk" },
    { type: "p", text: "Né dans les communautés populaires de Rio dans les années 1980-90, à partir d'influences du Miami bass américain, le baile funk s'est imposé comme le genre musical le plus écouté au Brésil, porté par des MCs souvent issus des mêmes quartiers qu'ils chantent. C'est une musique 100% brésilienne, à l'ambiance survoltée et à l'énergie contagieuse." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Arrivez tard pour profiter à fond : les meilleurs sets commencent généralement après 23h. Il n'y a pas de file d'attente, et l'ambiance monte progressivement jusqu'au petit matin." },

    { type: "h2", text: "Zone Sud : fréquentée par les touristes" },
    { type: "p", text: "Les bailes de la Zone Sud sont plus facilement accessibles et très fréquentés par les visiteurs, avec une ambiance garantie." },
    { type: "h3", text: "Baile da Rocinha" },
    { type: "p", text: "Le baile funk le plus célèbre de Rio, dans la plus grande favela d'Amérique latine. Ambiance unique du jeudi au dimanche, arrivée recommandée après 23h pour profiter du meilleur de la nuit." },
    { type: "h3", text: "Baile de Santo Amaro" },
    { type: "p", text: "Le rendez-vous du samedi soir, funk et sons du moment dans une ambiance de quartier incroyable." },

    { type: "h2", text: "Zone Nord : authentique et brute" },
    { type: "p", text: "Les bailes de la Zone Nord sont les plus bruts et authentiques, moins accessibles et plus locaux. Ils demandent une logistique spéciale et sont réservés à un accompagnement encadré : Baile do Complexo, Baile do Egito, Baile da Nova Holanda et Baile da Disney figurent parmi les plus réputés, avec des ambiances explosives et 100% cariocas." },
    { type: "aeviter", title: "À éviter", text: "Ne vous rendez jamais seul, sans accompagnement local, dans un baile de la Zone Nord. Ces événements demandent une organisation et une connaissance du terrain que seul un accompagnement local peut garantir." },

    { type: "h2", text: "Comment ça se passe en pratique" },
    { type: "ol", items: [
      "On vous conseille — on vous aide à choisir le meilleur baile selon le jour et vos envies.",
      "Organisation — transport, timing et toute la logistique sont pris en charge.",
      "Arrivée tardive — on arrive après 23h pour éviter l'heure creuse et profiter de la meilleure ambiance.",
      "Expérience — profitez de la soirée en toute sécurité et vivez le meilleur de Rio.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "Tenue décontractée et baskets recommandées. Évitez les objets de valeur, prévoyez du cash pour le paiement sur place, et respectez toujours les lieux et les habitants." },

    { type: "h2", text: "À savoir avant d'y aller" },
    { type: "ul", items: [
      "Les baile de la Zone Sud sont plus accessibles et généralement fréquentés par des touristes.",
      "Les baile de la Zone Nord sont plus authentiques, populaires et réservés aux locaux : une logistique spéciale est indispensable.",
      "Arrivez tard pour profiter des meilleurs sets, qui démarrent généralement après 23h.",
      "Consommez avec modération et restez toujours avec votre groupe.",
    ]},

    { type: "faq", items: [
      { q: "Le baile funk est-il sûr pour les touristes ?", a: "Les bailes de la Zone Sud, plus accessibles, sont fréquentés régulièrement par des visiteurs. Ceux de la Zone Nord nécessitent un accompagnement local pour une expérience sereine et sécurisée." },
      { q: "À quelle heure faut-il arriver à un baile funk ?", a: "Après 23h, c'est le moment où les meilleurs sets démarrent réellement et où l'ambiance commence à monter." },
      { q: "Faut-il réserver pour assister à un baile funk ?", a: "Pour les bailes les plus accessibles de la Zone Sud, ce n'est généralement pas nécessaire. Pour ceux de la Zone Nord, un accompagnement organisé est fortement recommandé." },
      { q: "Quel est le meilleur jour pour un baile funk à Rio ?", a: "Le Baile da Rocinha se tient du jeudi au dimanche, tandis que le Baile de Santo Amaro est traditionnellement le rendez-vous du samedi soir." },
    ]},

    { type: "p", text: "Le baile funk, c'est bien plus qu'une soirée : c'est une plongée dans l'énergie la plus brute et authentique de Rio. Une expérience à vivre au moins une fois, dans les meilleures conditions possibles." },
  ],
};
