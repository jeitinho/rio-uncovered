import type { Article } from "../types";
import hero from "@/assets/article-sante-rio.jpg";


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
  heroAlt: "Salle d'attente lumineuse d'une clinique privée à Rio de Janeiro",
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
    { type: "h2", text: "Trouver un médecin francophone à Rio" },
    {
      type: "p",
      text: "Se faire soigner dans une langue qu'on maîtrise change tout, surtout quand il s'agit d'expliquer des symptômes. Rio compte plusieurs médecins et professionnels de santé francophones, mais la bonne source n'est pas un annuaire touristique : c'est la <a href=\"https://br.diplomatie.gouv.fr/fr/liste-de-notoriete\" target=\"_blank\" rel=\"noopener\">liste de notoriété du Consulat général de France</a>, qui recense les médecins généralistes, spécialistes, dentistes et psychologues francophones de la circonscription de Rio. Elle est mise à jour régulièrement — contrairement aux listes qui circulent sur les forums.",
    },
    {
      type: "ul",
      items: [
        "Liste officielle des professionnels de santé francophones : br.diplomatie.gouv.fr/fr/liste-de-notoriete (rubrique « Traducteurs, avocats et professionnels de santé », circonscription de Rio de Janeiro)",
        "Consulat général de France à Rio — Avenida Presidente Antônio Carlos, 58, Centro — accueil sur rendez-vous du lundi au vendredi de 9h à 12h",
        "France Consulaire (plateforme téléphonique du ministère, en français) — +55 11 3351-7043, du lundi au vendredi de 14h à 20h",
        "En cas d'urgence grave impliquant un ressortissant français, le consulat dispose d'une permanence téléphonique joignable 24h/24 via le standard",
      ],
    },
    {
      type: "conseil",
      title: "Le conseil Jeitinho",
      text: "Téléchargez la liste consulaire en PDF avant votre départ et gardez-la hors ligne sur votre téléphone : le jour où vous en aurez besoin, vous n'aurez peut-être ni réseau ni patience pour chercher. Les grands hôpitaux privés de la Zona Sul (Copa Star, Copa D'Or) comptent par ailleurs souvent un médecin francophone ou anglophone de garde — demandez-le à l'accueil.",
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
      href: "https://jeitinho.fr/trouver-un-jeitinho",
      description: "En cas de besoin médical pendant votre séjour, notre équipe locale vous oriente vers la bonne adresse.",
    },
  ],
};
