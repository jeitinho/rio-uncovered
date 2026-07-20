import type { Article } from "../types";
import hero from "@/assets/hero-blog.jpg";
// TODO: remplacer par une photo de façade d'un hôpital privé de la Zona Sul

export const article: Article = {
  slug: "se-soigner-a-rio",
  title: "Se soigner à Rio : pharmacies, cliniques et hôpitaux pour voyageurs",
  titleAccent: "soigner",
  description: "De la pharmacie de quartier à l'hôpital privé, voici comment se soigner à Rio en tant que voyageur, avec les adresses qui comptent vraiment en cas de besoin.",
  category: "vie-pratique-locale",
  tags: ["quotidien", "pratique", "santé"],
  date: "2026-07-18",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Entrée d'un hôpital privé moderne à Copacabana, Rio de Janeiro",
  sections: [
    {
      type: "p",
      text: "La suite logique de <a href=\"/blog/pharmacies-a-rio\">notre article sur les pharmacies</a> : que faire quand un conseil de pharmacien ne suffit plus ? Voici comment se soigner à Rio, du plus léger au plus sérieux, avec les adresses qui font la différence.",
    },
    { type: "h2", text: "Premier réflexe : la pharmacie" },
    {
      type: "p",
      text: "Pour un souci léger (mal de tête, petite blessure, coup de soleil), la pharmacie reste le premier point de contact. Beaucoup de pharmaciens brésiliens conseillent volontiers sans rendez-vous, et de nombreux médicaments courants s'achètent sans ordonnance.",
    },
    { type: "h2", text: "Les UPA : les urgences de proximité" },
    {
      type: "p",
      text: "Les UPA (Unidade de Pronto Atendimento) sont des unités d'urgence publiques, ouvertes 24h/24, pour les soins qui ne nécessitent pas un hôpital complet. Deux adresses utiles en Zona Sul :",
    },
    {
      type: "ul",
      items: [
        "UPA Copacabana — Av. Princesa Isabel, 270, Copacabana — +55 21 2548-4576",
        "UPA Botafogo — Rua General Polidoro, 72, Botafogo — +55 21 2542-8350",
      ],
    },
    { type: "h2", text: "Les hôpitaux privés de la Zona Sul" },
    {
      type: "p",
      text: "Pour un problème plus sérieux, les hôpitaux privés de la Zona Sul offrent un niveau de soin élevé, avec souvent un personnel parlant anglais :",
    },
    {
      type: "ul",
      items: [
        "Copa Star — Rua Figueiredo de Magalhães, 700, Copacabana — +55 21 2546-5000, urgences 24h/24",
        "Hospital Copa D'Or — Rua Figueiredo de Magalhães, 875, Copacabana — +55 21 2546-9000, urgences toutes spécialités",
        "Clínica São Vicente — Rua João Borges, 204, Gávea — +55 21 2528-7600, urgences privées 24h/24",
      ],
    },
    {
      type: "bonasavoir",
      title: "Bon à savoir",
      text: "Il existe aussi un hôpital public de référence en Zona Sul, l'Hospital Municipal Miguel Couto (Av. Bartolomeu Mitre, 1108, Leblon — +55 21 3207-4555), avec des urgences 24h/24. La prise en charge y est gratuite mais les délais d'attente peuvent être plus longs qu'en clinique privée.",
    },
    { type: "h2", text: "Assurance voyage : l'indispensable" },
    {
      type: "p",
      text: "Les hôpitaux privés brésiliens peuvent facturer des montants élevés sans couverture. Souscrire une assurance voyage couvrant les frais médicaux avant le départ n'est pas une option — c'est la base, y compris pour un séjour de quelques jours.",
    },
    {
      type: "conseil",
      title: "Le conseil Jeitinho",
      text: "Gardez une copie numérique (cloud ou photo sur votre téléphone) de votre carte d'assurance voyage et du numéro d'assistance associé — c'est ce qu'on vous demandera en priorité à l'accueil d'une clinique privée.",
    },
    {
      type: "aeviter",
      title: "À éviter",
      text: "N'attendez pas d'être sur place pour comprendre les modalités de votre assurance. Certaines demandent une avance de frais avec remboursement ultérieur, d'autres une prise en charge directe — la différence change tout en cas d'urgence. Gardez aussi à portée de main notre page <a href=\"/blog/numeros-urgence-adresses-utiles-rio\">numéros d'urgence et adresses utiles</a>.",
    },
    {
      type: "faq",
      items: [
        {
          q: "Le personnel médical parle-t-il anglais à Rio ?",
          a: "Dans les grands hôpitaux privés de la Zona Sul, oui, généralement. Dans le système public, c'est moins systématique.",
        },
        {
          q: "Faut-il payer d'avance dans un hôpital privé ?",
          a: "Souvent oui, sauf accord préalable entre votre assurance et l'établissement. Vérifiez les modalités exactes de votre contrat avant de partir.",
        },
        {
          q: "Peut-on se faire soigner gratuitement dans le système public ?",
          a: "Les urgences publiques (UPA, hôpitaux municipaux) prennent en charge tout le monde, y compris les visiteurs étrangers, mais les délais peuvent être longs pour les cas non vitaux.",
        },
      ],
    },
  ],
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "En cas de besoin médical pendant votre séjour, notre équipe locale vous oriente vers la bonne adresse.",
    },
  ],
};
