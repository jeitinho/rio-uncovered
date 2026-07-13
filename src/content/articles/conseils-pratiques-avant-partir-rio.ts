import type { Article } from "../types";
import hero from "@/assets/hero-blog.jpg";

export const article: Article = {
  slug: "conseils-pratiques-avant-partir-rio",
  title: "10 conseils pratiques avant de partir à Rio",
  titleAccent: "avant",
  description: "Visa, langue, applications, coutumes : les 10 conseils qu'on aurait aimé avoir avant notre premier séjour à Rio.",
  category: "conseils-pratiques",
  tags: ["conseils", "préparation", "voyage"],
  date: "2026-03-30",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Rue de Rio avec panneaux en portugais",
  sections: [
    { type: "p", text: "Les petits détails qui font qu'on ne perd pas ses deux premiers jours à comprendre comment ça marche." },
    { type: "h2", text: "1. Visa et papiers" },
    { type: "p", text: "Pas de visa pour les Français, Belges, Suisses pour un séjour de moins de 90 jours. Passeport valide 6 mois après retour. Vaccin fièvre jaune non obligatoire mais recommandé si excursions hors ville." },
    { type: "h2", text: "2. Langue" },
    { type: "p", text: "Portugais brésilien. Anglais correct dans l'hôtellerie et la Zona Sul, quasi inexistant ailleurs. Apprendre 20 mots change tout : bom dia, obrigado(a), quanto custa, por favor." },
    { type: "h2", text: "3. Applications" },
    { type: "ul", items: ["Uber / 99 — transport", "iFood — livraison de nourriture", "PIX (via banque française si compatible) — paiement mobile universel", "Google Maps / Waze — navigation", "WhatsApp — les Brésiliens ne communiquent que par WhatsApp"] },
    { type: "h2", text: "4. Argent" },
    { type: "p", text: "Retirer aux distributeurs Banco do Brasil ou Bradesco (les plus fiables). Carte partout. Espèces utiles pour les pourboires et petits vendeurs de plage." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Prenez une eSIM avant de partir (Airalo, Ubigi, ~10 €/semaine). Vous êtes connecté dès l'atterrissage. Fondamental pour Uber et PIX." },
  ],
};
