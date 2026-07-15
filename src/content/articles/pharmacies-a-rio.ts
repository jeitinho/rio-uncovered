import type { Article } from "../types";
import hero from "@/assets/hero-blog.jpg";
// TODO: remplacer par une vraie photo de façade de pharmacie carioca (Droga Raia / Pacheco de nuit, enseigne verte allumée)

export const article: Article = {
  slug: "pharmacies-a-rio",
  title: "Les pharmacies à Rio : ce qu'on y trouve, horaires, comment s'y retrouver",
  titleAccent: "pharmacies",
  description: "En France, la pharmacie c'est le médicament et la parapharmacie. À Rio, c'est aussi les tongs, les boissons, les chargeurs — et souvent ouvert 24h/24. Le guide pour ne plus être surpris.",
  category: "vie-pratique-locale",
  tags: ["quotidien", "pratique", "santé"],
  date: "2026-07-15",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Enseigne lumineuse d'une pharmacie de nuit à Rio de Janeiro",
  guide: true,
  sections: [
    {
      type: "p",
      text: "Première surprise pour beaucoup de voyageurs : à Rio, la pharmacie (farmácia) n'a presque rien à voir avec la pharmacie française. Ici, on y trouve autant de shampoing, de boissons fraîches et de chargeurs de téléphone que de médicaments. Et il y en a partout — littéralement à chaque coin de rue dans certains quartiers.",
    },
    { type: "h2", text: "Ce qu'on trouve vraiment dans une pharmacie carioca" },
    {
      type: "p",
      text: "Une farmácia brésilienne mélange trois univers que les Français ont l'habitude de séparer : le médicament, la parapharmacie, et une partie supérette de dépannage.",
    },
    {
      type: "ul",
      items: [
        "Médicaments avec ou sans ordonnance selon la molécule — beaucoup de génériques (genérico), moins chers que les marques",
        "Parapharmacie classique : crème solaire (indispensable ici), après-soleil, cosmétiques, produits capillaires",
        "Boissons fraîches, eau, sodas — souvent un frigo dédié près de la caisse",
        "Dépannage du quotidien : chargeurs et câbles USB, piles, préservatifs, rasoirs, parfois même des tongs (chinelos)",
        "Petite restauration dans certaines grandes enseignes : sandwichs, snacks emballés",
      ],
    },
    {
      type: "bonasavoir",
      title: "Bon à savoir",
      text: "Beaucoup de médicaments vendus sous ordonnance en France sont en vente libre à Rio (certains antibiotiques, anti-inflammatoires). Ce n'est pas pour autant une invitation à l'auto-médication : en cas de doute, demandez conseil au pharmacien (farmacêutico), présent dans toutes les grandes enseignes.",
    },
    { type: "h2", text: "Les horaires : le poids des 24h/24" },
    {
      type: "p",
      text: "C'est la deuxième surprise : dans les quartiers touristiques et résidentiels de la Zona Sul (Copacabana, Ipanema, Botafogo), il est très courant de trouver une pharmacie ouverte 24h/24, tous les jours de l'année. Cherchez la mention \"24 horas\" sur l'enseigne, souvent en néon vert ou rouge, visible de loin la nuit.",
    },
    {
      type: "ul",
      items: [
        "Pharmacies 24h/24 : fréquentes sur les grands axes de Copacabana et Ipanema (ex. Nossa Senhora de Copacabana, Visconde de Pirajá)",
        "Pharmacies de quartier classiques : généralement 8h–22h, tous les jours y compris dimanche",
        "Aucune fermeture le dimanche ou les jours fériés dans les grandes enseignes — contrairement à la France",
      ],
    },
    { type: "h2", text: "Une densité impressionnante" },
    {
      type: "p",
      text: "Ne soyez pas surpris de croiser trois pharmacies en 200 mètres sur une même avenue, parfois deux enseignes concurrentes presque face à face. Ce maillage extrêmement dense fait partie du paysage urbain carioca — la pharmacie joue un rôle de dépanneur de quartier autant que de professionnel de santé.",
    },
    { type: "h2", text: "Les grandes enseignes à repérer" },
    {
      type: "ul",
      items: [
        "Droga Raia — grande chaîne nationale, souvent 24h/24 dans les zones touristiques",
        "Pacheco — historique à Rio, très présente en Zona Sul",
        "Pague Menos — bon rapport qualité-prix sur les génériques",
        "Extrafarma — présente mais moins dense que les précédentes",
      ],
    },
    {
      type: "conseil",
      title: "Le conseil Jeitinho",
      text: "Repérez la pharmacie 24h/24 la plus proche de votre logement dès votre arrivée — pas pour une urgence médicale (allez à l'hôpital dans ce cas), mais parce que c'est souvent le seul endroit ouvert à 23h pour acheter de l'eau, un chargeur oublié ou de la crème solaire avant la plage du lendemain.",
    },
    {
      type: "aeviter",
      title: "À éviter",
      text: "Ne comparez pas les prix des médicaments à ceux de France : certains génériques sont très abordables, d'autres marques importées peuvent être plus chères qu'en Europe. Si un traitement au long cours vous est indispensable, partez avec votre stock plutôt que de compter sur l'équivalent local.",
    },
    {
      type: "faq",
      items: [
        {
          q: "A-t-on besoin d'une ordonnance pour acheter des médicaments à Rio ?",
          a: "Cela dépend de la molécule. Beaucoup de médicaments courants (antidouleurs, certains antibiotiques) se vendent sans ordonnance, contrairement à la France. Pour tout traitement spécifique, mieux vaut demander conseil directement au pharmacien sur place.",
        },
        {
          q: "Les pharmacies acceptent-elles la carte bancaire étrangère ?",
          a: "Oui, dans les grandes enseignes (Droga Raia, Pacheco, Pague Menos), la carte est acceptée sans problème, tout comme PIX pour les résidents. Prévoyez toujours un peu d'espèces en petite pharmacie de quartier.",
        },
        {
          q: "Comment reconnaître une pharmacie ouverte 24h/24 ?",
          a: "Cherchez la mention \"24 horas\" sur l'enseigne lumineuse, généralement bien visible de nuit. Les grands axes de Copacabana et Ipanema en comptent plusieurs.",
        },
        {
          q: "Peut-on acheter de la crème solaire en pharmacie à Rio ?",
          a: "Oui, c'est même l'un des rayons les plus fournis, vu l'exposition au soleil toute l'année. Les marques locales (comme Sundown) sont efficaces et souvent moins chères que les crèmes importées.",
        },
      ],
    },
  ],
};
