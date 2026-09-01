import type { Article } from "../types";
import hero from "@/assets/hero-blog.jpg";

export const article: Article = {
  slug: "joa-guide-complet",
  title: "Joá : le guide complet du quartier le plus exclusif de Rio",
  titleAccent: "exclusif",
  description: "Notre guide complet de Joá : villas de luxe, Praia da Joatinga, Mirante do Joá et Pedra da Gávea. Écrit par des locaux, pas par Google Traduction.",
  category: "quartiers",
  tags: ["Joá", "Joatinga", "Zona Oeste", "guide de quartier", "villas"],
  date: "2026-09-01",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Villas nichées dans la végétation du Morro da Joatinga, quartier de Joá, Rio de Janeiro",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://jeitinho.fr/trouver-un-jeitinho",
      description: "On vous ouvre les portes de nos adresses favorites à Joá.",
    },
    {
      label: "Chauffeur privé",
      href: "https://jeitinho.fr/experiences",
      description: "Joá ne se visite pas à pied : on vous organise vos trajets sur mesure.",
    },
  ],
  sections: [
    { type: "p", text: "Joá est un tout petit quartier résidentiel de Rio, coincé entre São Conrado et Barra da Tijuca, connu pour ses villas de luxe accrochées au Morro da Joatinga et pour abriter l'un des plus hauts revenus par habitant de la ville — mais aussi l'un des quartiers les moins peuplés, avec environ 980 habitants." },
    { type: "p", text: "Ce guide n'est pas une fiche immobilière. C'est ce qu'on dirait à un ami qui débarque : où marcher, où s'asseoir, où éviter, et à quelle heure faire quoi." },

    { type: "h2", text: "Joá ou Joatinga ? La confusion à éviter" },
    { type: "p", text: "« Joá » est le nom officiel du quartier (bairro), délimité en 1981, qui s'étend sur seulement 1,69 km². « Joatinga » désigne le morro (colline) qui domine le quartier et la petite plage nichée à son pied — la Praia da Joatinga. Beaucoup de voyageurs, et même certains guides, utilisent « Joatinga » pour parler du quartier tout entier, mais à Rio, on dit bien : « j'habite à Joá » et « je vais à la plage de Joatinga »." },

    { type: "h2", text: "Comprendre Joá en cinq minutes" },
    { type: "p", text: "Le quartier est exclusivement résidentiel : aucun commerce, aucune tour, coincé sur les flancs du Morro da Joatinga entre São Conrado et Barra da Tijuca, à l'ombre de la Pedra da Gávea (842 m), monolithe de granit à la lisière du Parc national de la Tijuca. C'est le deuxième bairro le moins peuplé de Rio, avec l'un des IDH les plus élevés du pays." },
    { type: "p", text: "Le quartier doit son urbanisation à l'Elevado do Joá, route surélevée construite entre 1968 et 1971 le long des falaises pour relier la Zona Sul à une Barra da Tijuca alors quasi désertique, et rénovée en 2016 pour les Jeux Olympiques. Sans cette route, Joá serait resté inaccessible." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Joá ne se visite pas à pied : pas de trottoirs, pas de commerces, une route sinueuse et très fréquentée par les voitures. Prévoyez un chauffeur, un Uber ou une voiture de location pour toute excursion dans le quartier." },

    { type: "h2", text: "La Praia da Joatinga : la plage qu'il faut mériter" },
    { type: "p", text: "Petite plage de moins de 300 mètres, cachée à l'intérieur d'un condominium privé, accessible à pied via un escalier depuis une rue résidentielle (rua Sargento da Silva) puis un petit sentier rocheux. Une piscine naturelle se forme côté droit à marée basse." },
    { type: "aeviter", title: "À éviter", text: "N'y allez jamais sans vérifier les horaires de marée : à marée haute, la bande de sable disparaît presque entièrement. Le parking est limité à une soixantaine de places — arrivez avant 8h le week-end en haute saison." },
    { type: "bonasavoir", title: "Bon à savoir", text: "La plage attire surtout des surfeurs et une clientèle de jeunes cariocas en quête de discrétion, loin de la foule d'Ipanema ou de Copacabana. Peu d'infrastructures sur place : prévoyez votre eau et vos en-cas, même si des vendeurs saisonniers louent parfois chaises et parasols." },

    { type: "h2", text: "Le Mirante do Joá, la plus belle vue gratuite du secteur" },
    { type: "p", text: "Ce petit belvédère (Estrada do Joá, 2360), reconnaissable à son sol carrelé d'azulejos colorés, offre une vue sur l'océan, la plage de São Conrado, Rocinha, le Morro Dois Irmãos et Vidigal. Comptez une trentaine de minutes sur place. Une petite bibliothèque d'échange — une armoire à livres — est installée à côté du point de vue. Il est accessible en une dizaine de minutes à pied depuis la Praia da Joatinga." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Venez le matin ou en tout début d'après-midi : passé 14h, la colline voisine plonge le mirante dans l'ombre. Le stationnement est très limité (trois à quatre voitures) : mieux vaut y aller en Uber ou en taxi." },

    { type: "h2", text: "La Pedra da Gávea, aux portes du quartier" },
    { type: "p", text: "Le monolithe de granit qui domine Joá (842 m) se grimpe depuis un sentier qui débute juste à la frontière du quartier, côté São Conrado (Estrada do Sorimã). C'est une randonnée exigeante de 7 km aller-retour avec 800 m de dénivelé, réputée pour son passage technique de la Carrasqueira (plus de 30 mètres d'escalade de premier degré) — un guide accompagnateur est vivement recommandé, le taux d'accident sur ce sentier n'étant pas négligeable. Privilégiez la saison sèche (avril à septembre) et un départ tôt le matin." },

    { type: "h2", text: "Où manger — le peu qu'il y a, mais qui vaut le détour" },
    { type: "p", text: "Joá n'a presque aucun commerce, mais l'Estrada do Joá abrite deux adresses qui valent le déplacement." },
    { type: "ul", items: [
      "Bar do Oswaldo — institution du quartier depuis 1946, réputée pour ses cocktails et sa feijoada, sur l'Estrada do Joá.",
      "Concha Doce — espace gastronomique de tradition portugaise (boulangerie, pâtisserie, restaurant et pizzeria) sur l'Estrada do Joá.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "En dehors de ces deux adresses, il n'y a quasiment aucun restaurant à Joá : la plupart des habitants et visiteurs redescendent vers São Conrado, Barra da Tijuca ou la Zona Sul pour manger." },

    { type: "h2", text: "Une demi-journée parfaite à Joá" },
    { type: "ol", items: [
      "9h — Départ en voiture ou Uber depuis la Zona Sul, arrivée par l'Elevado do Joá.",
      "9h30 — Vérification des horaires de marée, puis descente à la Praia da Joatinga.",
      "11h — Marche jusqu'au Mirante do Joá pour la vue et la petite bibliothèque d'échange.",
      "12h30 — Déjeuner chez Bar do Oswaldo ou Concha Doce sur l'Estrada do Joá.",
      "14h30 — Retour vers São Conrado ou Barra da Tijuca (les randonneurs peuvent enchaîner vers la Pedra da Gávea tôt le lendemain matin plutôt que l'après-midi).",
    ]},

    { type: "faq", items: [
      { q: "Quelle est la différence entre Joá et Joatinga ?", a: "Joá est le nom officiel du quartier. Joatinga désigne le morro (colline) et la petite plage qui se trouvent à l'intérieur de ce quartier. On dit « habiter à Joá » et « aller à la plage de Joatinga »." },
      { q: "Peut-on visiter Joá sans voiture ?", a: "C'est très difficile : il n'y a pas de trottoirs le long de l'Estrada do Joá et les distances sont importantes. Un Uber, un taxi ou une voiture de location sont indispensables, même si les bus 557 et 332 desservent le secteur." },
      { q: "La Praia da Joatinga est-elle toujours accessible ?", a: "Non : à marée haute, la bande de sable disparaît presque totalement. Vérifiez systématiquement les horaires de marée avant de vous déplacer." },
      { q: "Joá est-il un bon quartier pour loger ?", a: "C'est un choix pertinent pour qui cherche une villa privée et une discrétion totale, mais pas pour un premier séjour : il n'y a aucune vie de quartier, aucun commerce et il faut une voiture pour tout." },
      { q: "Faut-il un guide pour grimper la Pedra da Gávea ?", a: "Ce n'est pas obligatoire mais très fortement recommandé : le sentier comprend un passage d'escalade technique (la Carrasqueira) et le taux d'accident y est élevé pour les randonneurs non accompagnés." },
    ]},

    { type: "p", text: "Joá est le contrepoint total de la Zona Sul balnéaire — un quartier qu'on ne traverse pas par hasard, qu'on choisit pour sa discrétion, ses villas cachées dans la végétation et une poignée de vues qui comptent parmi les plus belles de Rio, à condition d'accepter d'y venir en voiture." },
  ],
};
