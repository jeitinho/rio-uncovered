import type { Article } from "../types";
import hero from "@/assets/hero-blog.jpg";

export const article: Article = {
  slug: "culture-carioca-samba",
  title: "Comprendre la culture carioca en trois soirées",
  titleAccent: "comprendre",
  description: "Samba, MPB, art de rue : notre plan pour toucher la culture carioca en trois soirées bien choisies.",
  category: "culture",
  tags: ["samba", "culture", "musique"],
  date: "2026-04-15",
  author: "Marina Alves",
  hero,
  heroAlt: "Roda de samba dans une rue de Lapa à Rio",
  sections: [
    { type: "p", text: "La culture carioca ne se lit pas — elle s'écoute et se danse. Voici trois soirées pour la toucher du doigt." },
    { type: "h2", text: "Soirée 1 — Roda de samba à Pedra do Sal" },
    { type: "p", text: "Lundi soir, quartier historique afro-brésilien. Roda gratuite, ambiance familiale, vraie samba de terreiro." },
    { type: "h2", text: "Soirée 2 — Concert à Rio Scenarium" },
    { type: "p", text: "Trois étages, samba live, décor de brocanteur poète. Le lieu emblématique de Lapa." },
    { type: "h2", text: "Soirée 3 — MPB au Beco das Garrafas" },
    { type: "p", text: "Le berceau de la bossa nova. Petites salles intimes, musiciens de niveau."} ,
    { type: "conseil", title: "Le conseil Jeitinho", text: "Un cours d'initiation à la samba (1h, 30 €) avant votre première roda vous change complètement l'expérience." },
  ],
};
