import type { Article } from "../types";
import hero from "@/assets/hero-blog.jpg";

export const article: Article = {
  slug: "securite-rio-guide-honnete",
  title: "Sécurité à Rio : le guide honnête",
  titleAccent: "honnête",
  description: "Rio est-elle dangereuse ? Notre guide sans langue de bois, quartier par quartier, situation par situation.",
  category: "securite",
  tags: ["sécurité", "conseils", "vigilance"],
  date: "2026-06-01",
  author: "Rafael Coelho",
  hero,
  heroAlt: "Rue résidentielle calme d'Ipanema en journée",
  guide: true,
  sections: [
    { type: "p", text: "Ni enfer ni Disneyland. Rio demande du bon sens, pas de la paranoïa. Voici ce qu'on dit aux gens qu'on aime avant leur premier séjour." },
    { type: "h2", text: "Les zones vraiment safe" },
    { type: "p", text: "Ipanema, Leblon, Lagoa, Botafogo, Urca : équivalents à un centre-ville européen classique. Copacabana : très bien en journée, prudence accrue le soir sur les rues perpendiculaires à la plage." },
    { type: "h2", text: "Les zones où il faut être averti" },
    { type: "p", text: "Centro et Lapa la nuit : allez-y en Uber, sortez en Uber. Marchez en groupe. Santa Teresa : très bien en journée, prudence le soir dans les rues secondaires." },
    { type: "h2", text: "Les réflexes qui suffisent 95 % du temps" },
    { type: "ul", items: ["Téléphone rangé dans la rue. Pas de smartphone en main comme GPS visible.", "Pas de bijoux, pas de montre visible.", "Sac fermé devant soi dans les foules.", "Distributeurs uniquement en banque ou en centre commercial, jamais dans la rue.", "Uber plutôt que taxi la nuit."] },
    { type: "conseil", title: "Le conseil Jeitinho", text: "En cas de vol, ne résistez jamais. Donnez ce qu'on vous demande. Un téléphone se remplace." },
    { type: "aeviter", title: "À éviter", text: "Marcher dans une favela sans guide local, même si elle est \"pacifiée\". Un tour organisé oui, une balade improvisée non." },
    { type: "faq", items: [{ q: "Peut-on aller à la plage seul(e) ?", a: "Oui, sans problème. Prenez juste le nécessaire — la plage est le lieu du monde où on ne veut pas se faire piquer son passeport." }] },
  ],
};
