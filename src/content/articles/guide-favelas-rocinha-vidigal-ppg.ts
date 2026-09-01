import type { Article } from "../types";
import hero from "@/assets/appart-ppg-vue-panoramique.jpg";

export const article: Article = {
  slug: "guide-favelas-rocinha-vidigal-ppg",
  title: "Rocinha, Vidigal, PPG : où manger et boire un verre dans les favelas de Rio",
  titleAccent: "manger et boire",
  description: "Notre guide pour découvrir Rocinha, Vidigal et Pavão-Pavãozinho (PPG) autrement : bars, restaurants et mirantes locaux, toujours accompagnés d'un guide.",
  category: "activites",
  tags: ["favela", "Rocinha", "Vidigal", "PPG", "Pavão-Pavãozinho", "où manger", "où boire", "sécurité"],
  date: "2026-09-01",
  author: "nawal",
  hero,
  heroAlt: "Vue panoramique depuis les hauteurs de Pavão-Pavãozinho (PPG), toits de la favela au premier plan et baie de Guanabara en arrière-plan",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Immersion favela avec un guide local",
      href: "https://jeitinho.fr/experiences/favelas-immersion-culturelle",
      description: "On vous emmène à Rocinha, Vidigal ou PPG avec un guide qui y a grandi.",
    },
    {
      label: "Conciergerie sur mesure",
      href: "https://jeitinho.fr/trouver-un-jeitinho",
      description: "Pour organiser votre visite au bon moment, avec les bonnes personnes.",
    },
  ],
  sections: [
    { type: "p", text: "Rocinha, Vidigal et Pavão-Pavãozinho (PPG) sont trois communautés (favelas) de la Zona Sul, chacune avec son histoire, son relief et son ambiance. On y trouve aussi certaines des meilleures vues gratuites de Rio, et une poignée de bars et restaurants tenus par des habitants, loin des adresses à touristes de la plage." },
    { type: "p", text: "Ce guide n'est pas un itinéraire à suivre seul. C'est une présentation de ce que ces trois quartiers ont à offrir, pour savoir quoi demander à votre guide le jour venu." },

    { type: "h2", text: "La règle numéro un : jamais seul, toujours avec un guide" },
    { type: "p", text: "Ce ne sont pas des zones à éviter par principe : le tourisme y est aujourd'hui une économie à part entière, organisée, avec ses propres codes. Mais ce sont des territoires où la situation peut changer d'un jour à l'autre, et où seul un guide local qui y vit ou y a grandi sait lire ce qui se passe sur le moment." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Ne montez jamais à Rocinha, Vidigal ou PPG seul ou via une visite improvisée trouvée sur place. Passez par un guide local reconnu, qui connaît le terrain et adapte l'itinéraire à la situation du jour." },
    { type: "aeviter", title: "À éviter", text: "En avril 2026, une opération de police contre un groupe criminel a temporairement bloqué des touristes venus voir le lever du soleil au mirante Dois Irmãos, au-dessus de Vidigal. Personne n'a été blessé et la situation a été résolue en quelques heures, mais l'épisode rappelle que même les zones les plus fréquentées par les visiteurs peuvent connaître des opérations soudaines — une raison de plus de vous fier à un guide qui saura comment réagir plutôt que d'improviser." },

    { type: "h2", text: "Rocinha, la plus grande favela du Brésil" },
    { type: "p", text: "Adossée au Morro Dois Irmãos entre São Conrado et Gávea, Rocinha compte plusieurs dizaines de milliers d'habitants et fonctionne presque comme une ville dans la ville, avec ses propres commerces, ses banques et son marché. Elle fait partie des communautés intégrées au programme officiel de tourisme « Na Favela Turismo », avec des guides enregistrés et des parcours suivis en temps réel pour la sécurité des visiteurs." },
    { type: "ul", items: [
      "Mirante Rocinha — vue panoramique sur la ville depuis l'Estrada da Gávea, ambiance musique live, ouvert en continu.",
      "Amarelinho — l'une des plus anciennes adresses de la favela, chope glacée et côtes grillées.",
      "Boteco da Praça — spot animé de la Pracinha da RS, réputé pour son caldo de mocotó et ses caipirinhas.",
      "Trapiá Bar e Restaurante — self-service le midi, bar ouvert jour et nuit, musique sertaneja en semaine.",
      "Via Ápia Rio Rooftop — terrasse en hauteur, l'une des adresses mises en avant lors du Circuito Favela Gourmet, l'événement gastronomique annuel qui réunit les meilleures tables de Rocinha, Vidigal et PPG.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "Le tissu commercial de Rocinha est dense et vivant en journée comme en soirée — c'est en partie ce qui en fait une communauté plus simple à visiter que d'autres, en dehors des grands axes." },

    { type: "h2", text: "Vidigal, entre plage et sommet" },
    { type: "p", text: "Coincée entre la plage de Leblon et le pied du Morro Dois Irmãos, Vidigal est la plus « gentrifiée » des trois communautés : depuis une quinzaine d'années, hostels, bars branchés et expatriés s'y sont installés aux côtés des habitants historiques, attirés par une vue sur l'océan que peu de quartiers de la ville peuvent offrir." },
    { type: "ul", items: [
      "Bar da Laje — la terrasse la plus connue de Vidigal, vue à 180° sur la côte, prisée au coucher du soleil.",
      "Alto Vidigal — club perché tout en haut de la favela, soirées reggae et funk, réputé pour ses levers de soleil.",
      "Restaurante Sabor Carioca — cuisine brésilienne familiale, portions généreuses, prix locaux.",
      "Flor do Vidigal — une des adresses du Circuito Favela Gourmet, cuisine de quartier.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "C'est au mirante Dois Irmãos, en surplomb de Vidigal, que se rassemblent les visiteurs pour le lever du soleil — un des plus beaux points de vue de Rio, mais aussi celui qui demande le plus de discipline : on y va uniquement encadré, jamais en solo au petit matin." },

    { type: "h2", text: "PPG (Pavão-Pavãozinho-Cantagalo), entre Copacabana et Ipanema" },
    { type: "p", text: "Le complexe de Pavão-Pavãozinho et Cantagalo — que tout le monde appelle PPG — surplombe directement Copacabana et Ipanema, avec des vues qui s'étendent jusqu'à la lagune Rodrigo de Freitas et le Corcovado. Comme Rocinha et Vidigal, il fait désormais partie de la route officielle du tourisme carioca, avec des sentiers balisés et le Museu da Favela." },
    { type: "ul", items: [
      "Brisolão — bar-mirante emblématique pour le coucher de soleil, vue sur la lagune et les montagnes.",
      "Restaurante Pão e Vida — cuisine simple et copieuse, adresse de quartier.",
      "Panela da Comunidade — cuisine communautaire, l'une des adresses portées par des initiatives locales.",
      "Pizzaria Mais Sabor — pour une pizza avant de redescendre vers la plage.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "PPG est probablement la communauté la plus pratique à combiner avec une journée classique à Copacabana ou Ipanema : on peut y monter en fin d'après-midi et être de retour sur la plage à temps pour le dîner. Un trajet en moto-taxi entre PPG et Vidigal coûte environ 25 R$ — toujours en demandant le tarif avant de monter." },

    { type: "h2", text: "Comment organiser la visite" },
    { type: "p", text: "Dans les trois cas, le format qui fonctionne le mieux est le même : une visite de l'après-midi ou de fin de journée, avec un guide qui a grandi sur place, en enchaînant un ou deux points de vue et une pause dans un bar ou un restaurant local — plutôt qu'une simple visite éclair en groupe." },
    { type: "p", text: "Nos guides recommandés à Rocinha, Vidigal et PPG connaissent leur communauté de l'intérieur : ils savent quel bar est calme un mardi soir, quel mirante regarder au bon moment, et surtout, ils savent quand il vaut mieux reporter une visite d'un jour ou modifier l'itinéraire." },

    { type: "faq", items: [
      { q: "Peut-on visiter Rocinha, Vidigal ou PPG sans guide ?", a: "Ce n'est pas recommandé. Ce sont des territoires vivants dont la situation peut évoluer rapidement ; un guide local reconnu sait où aller, à quel moment, et comment réagir en cas d'imprévu." },
      { q: "Quelle est la différence entre Rocinha, Vidigal et PPG ?", a: "Rocinha est la plus grande favela du Brésil, presque une ville dans la ville, entre São Conrado et Gávea. Vidigal, au pied du Morro Dois Irmãos entre Leblon et São Conrado, est la plus touristique et gentrifiée des trois. PPG (Pavão-Pavãozinho-Cantagalo) surplombe directement Copacabana et Ipanema." },
      { q: "Est-ce dangereux de manger ou boire un verre dans une favela ?", a: "Avec un guide local et en suivant ses conseils, ce sont des sorties qui se passent très bien : le tourisme y est une économie à part entière que personne n'a intérêt à menacer. Le risque vient surtout de l'improvisation en solo, pas de la visite en elle-même." },
      { q: "Peut-on assister au coucher ou au lever de soleil depuis ces favelas ?", a: "Oui, ce sont d'ailleurs certains des plus beaux points de vue de Rio — le Brisolão à PPG pour le coucher de soleil, le mirante Dois Irmãos au-dessus de Vidigal pour le lever du soleil. Toujours accompagné, surtout tôt le matin." },
      { q: "Existe-t-il un itinéraire gastronomique officiel dans ces favelas ?", a: "Oui : le Circuito Favela Gourmet réunit chaque année une sélection de restaurants et bars de Rocinha, Vidigal et PPG à prix accessibles. En dehors de cet événement, les mêmes adresses restent ouvertes toute l'année." },
    ]},

    { type: "p", text: "Rocinha, Vidigal et PPG ne se résument pas à un point de vue Instagram : ce sont des quartiers vivants, avec leur économie, leurs bars et leur cuisine — à condition de les aborder comme on aborde n'importe quel quartier qu'on ne connaît pas encore : avec quelqu'un qui le connaît, lui." },
  ],
};
