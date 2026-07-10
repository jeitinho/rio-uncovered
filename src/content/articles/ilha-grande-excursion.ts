import type { Article } from "../types";
import hero from "@/assets/hero-blog.jpg";

export const article: Article = {
  slug: "ilha-grande-excursion",
  title: "Ilha Grande : l'excursion parfaite au départ de Rio",
  titleAccent: "parfaite",
  description: "Comment organiser son excursion à Ilha Grande depuis Rio : transports, hébergement, plages, randonnées.",
  category: "excursions",
  tags: ["Ilha Grande", "excursion", "plage"],
  date: "2026-05-10",
  author: "Marina Alves",
  hero,
  heroAlt: "Vue tropicale d'Ilha Grande au coucher du soleil",
  relatedServices: [{ label: "Excursion Ilha Grande", href: "https://www.jeitinho.fr/experiences", description: "Transferts, bateau, hôtel, guide — on organise tout." }],
  sections: [
    { type: "p", text: "Ilha Grande, c'est Rio de Janeiro sans les voitures, sans le bruit, avec des dizaines de plages désertes. Deux nuits minimum pour en profiter, trois pour vraiment décrocher." },
    { type: "h2", text: "Y aller depuis Rio" },
    { type: "p", text: "Compter 3h30 en tout : bus ou van jusqu'à Conceição de Jacareí (2h30), puis ferry ou lancha (30 min). Notre concierge organise porte-à-porte pour éviter les correspondances hasardeuses." },
    { type: "h2", text: "Où loger : Abraão ou plus discret ?" },
    { type: "p", text: "Vila do Abraão est le hub — restaurants, agences, animation. Pour plus de calme : Praia do Aventureiro (ambiance camp) ou Pousada Sankay (raffinement isolé)." },
    { type: "h2", text: "Que faire" },
    { type: "ul", items: ["Lopes Mendes — souvent classée dans le top 10 mondial des plages.", "Randonnée du Pico do Papagaio (3h aller, panorama total).", "Tour de bateau des plages du sud (Dois Rios, Aventureiro).", "Snorkeling à Lagoa Azul et Freguesia de Santana."] },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Partez en semaine hors saison si vous pouvez. Le weekend, Ilha Grande se remplit de cariocas. En janvier-février, c'est plein." },
    { type: "faq", items: [{ q: "Combien de jours ?", a: "3 nuits minimum pour profiter de 2 jours de plages + 1 randonnée." }, { q: "Wi-Fi ?", a: "Correct dans les pousadas d'Abraão, faible ailleurs. C'est un plus, pas un moins." }] },
  ],
};
