import type { Article } from "../types";
import hero from "@/assets/quartier-leblon.jpg";
import galerie1 from "@/assets/leblon-1.jpg";
import galerie2 from "@/assets/leblon-2.jpg";

export const article: Article = {
  slug: "leblon-guide-complet",
  title: "Leblon : le guide complet du quartier le plus chic de Rio",
  titleAccent: "chic",
  description: "Notre guide complet de Leblon : plage, gastronomie, shopping et adresses discrètes. Écrit par des locaux, pas par Google Traduction.",
  category: "quartiers",
  tags: ["Leblon", "Zona Sul", "guide de quartier", "gastronomie"],
  date: "2026-06-20",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Front de mer de Leblon au coucher du soleil avec la Pedra da Gávea en arrière-plan, Rio de Janeiro",
  featured: false,
  guide: true,
  popular: true,
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "On vous ouvre les portes de nos adresses favorites à Leblon.",
    },
    {
      label: "Expériences gastronomiques",
      href: "https://www.jeitinho.fr/experiences",
      description: "Réservez les meilleures tables de Leblon sans faire la queue.",
    },
  ],
  sections: [
    { type: "p", text: "Si <a href=\"/blog/ipanema-guide-complet\">Ipanema</a> est raffinée, Leblon est carrément haut de gamme. C'est le quartier où vivent une bonne partie des cariocas les plus fortunés, celui où les prix de l'immobilier sont parmi les plus élevés du Brésil, et pourtant il garde une ambiance de village étonnamment décontractée." },
    { type: "p", text: "Ce guide n'est pas une liste d'adresses de luxe pour touristes pressés. C'est ce qu'on dirait à un ami qui débarque : où marcher, où s'asseoir, où éviter, et à quelle heure faire quoi." },

    { type: "h2", text: "Comprendre Leblon en cinq minutes" },
    { type: "p", text: "Leblon prolonge <a href=\"/blog/ipanema-guide-complet\">Ipanema</a> vers l'ouest, séparé par le petit canal du Jardim de Alah qui relie la lagune Rodrigo de Freitas à l'océan. Le quartier est plus compact, plus résidentiel, avec moins de circulation de passage — ce qui explique en grande partie son atmosphère plus feutrée." },
    { type: "p", text: "L'avenue Ataulfo de Paiva est l'artère commerçante principale, bordée de terrasses de café et de boutiques. La rue Dias Ferreira, elle, concentre la plus forte densité de restaurants gastronomiques par mètre carré de tout Rio de Janeiro." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Faites l'aller-retour à pied entre Ipanema et Leblon en longeant la plage : la vue sur la Pedra da Gávea qui surplombe le quartier est l'une des plus spectaculaires de la ville, surtout en fin d'après-midi quand la roche prend une teinte dorée." },

    { type: "h2", text: "La plage : plus tranquille qu'à Ipanema" },
    { type: "p", text: "La plage de Leblon prolonge celle d'Ipanema mais reste plus familiale et moins agitée. Le posto 11 et 12 marquent la frontière avec Ipanema, tandis que l'extrémité proche du canal accueille traditionnellement les familles avec jeunes enfants, grâce à une petite aire de jeux et des sanitaires bien entretenus." },
    { type: "p", text: "Contrairement à d'autres plages de la Zona Sul, Leblon attire moins les grands groupes bruyants et davantage les habitants du quartier qui viennent nager avant le travail ou faire du sport en fin de journée." },
    { type: "aeviter", title: "À éviter", text: "Évitez de vous garer en double file ou de laisser un véhicule de location visible avec des affaires à l'intérieur : la pression immobilière élevée du quartier n'empêche pas les vols opportunistes sur les voitures, un classique partout à Rio." },

    { type: "h2", text: "Où manger — la capitale gastronomique de Rio" },
    { type: "h3", text: "La rue Dias Ferreira, épicentre culinaire" },
    { type: "ul", items: [
      "Zuka — cuisine contemporaine brésilienne, une institution depuis plus de vingt ans.",
      "Sushi Leblon — référence japonaise haut de gamme, réservation indispensable le week-end.",
      "Braseiro da Gávea (à la frontière du quartier) — pour un boteco animé, moins formel.",
    ]},
    { type: "h3", text: "Brunchs et cafés" },
    { type: "ul", items: [
      "Cafeína — brunch copieux, terrasse agréable sur l'avenue Ataulfo de Paiva.",
      "Baixo Leblon — plusieurs bars et restaurants regroupés autour d'une placette, ambiance conviviale en journée.",
    ]},
    { type: "h3", text: "Une expérience à part" },
    { type: "ul", items: [
      "Emporio Jardim — épicerie fine et petite restauration, parfait pour un déjeuner rapide de qualité entre deux boutiques.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "La rue Dias Ferreira se transforme le soir en véritable défilé : beaucoup de restaurants n'ont pas de vitrine sur rue mais valent largement le détour. Réservez systématiquement le vendredi et le samedi soir." },

    { type: "h2", text: "Shopping et vie de quartier" },
    { type: "p", text: "Leblon abrite le centre commercial Shopping Leblon, l'un des plus haut de gamme de la ville, avec vue sur la lagune depuis son toit-terrasse. Le samedi matin, la Feira Orgânica (marché bio) installée sur la Praça Antero de Quental attire les habitants du quartier venus faire leurs courses de la semaine." },
    { type: "p", text: "Le quartier compte également plusieurs galeries d'art et librairies indépendantes, témoins d'une vie culturelle discrète mais bien réelle, loin de l'agitation touristique d'autres zones de la Zona Sul." },

    { type: "h2", text: "Une journée parfaite à Leblon" },
    { type: "ol", items: [
      "9h — Petit-déjeuner terrasse chez Cafeína, avenue Ataulfo de Paiva.",
      "10h30 — Plage côté canal, plus tranquille, avec vue sur la Pedra da Gávea.",
      "13h — Déjeuner léger au Baixo Leblon.",
      "15h — Shopping ou balade dans les rues résidentielles du quartier.",
      "17h — Feira Orgânica si c'est un samedi, sinon détour par le Jardim de Alah.",
      "19h — Apéritif au Shopping Leblon avec vue sur la lagune.",
      "21h — Dîner rue Dias Ferreira, réservation obligatoire.",
    ]},

    { type: "faq", items: [
      { q: "Leblon ou Ipanema : lequel choisir pour loger ?", a: "Leblon est plus calme, plus cher et plus résidentiel. Ipanema offre plus d'animation et un meilleur accès aux transports. Pour un séjour tranquille en couple ou en famille avec un budget confortable, Leblon est idéal." },
      { q: "Leblon est-il adapté aux familles ?", a: "Oui, c'est probablement le quartier le plus familial de la Zona Sul, avec une plage plus calme et des infrastructures pensées pour les enfants." },
      { q: "Quel est le budget moyen à Leblon ?", a: "C'est l'un des quartiers les plus chers de Rio, aussi bien pour l'hébergement que pour la restauration. Comptez un budget supérieur de 20 à 40% par rapport à Ipanema pour un dîner équivalent." },
      { q: "Comment se déplacer entre Leblon et le reste de la ville ?", a: "Il n'y a pas de station de métro directement à Leblon ; le plus simple est de prendre un taxi, une application de VTC, ou de marcher depuis la station Nossa Senhora da Paz à Ipanema." },
    ]},

    { type: "p", text: "Leblon ne cherche pas à impressionner, il se contente d'être excellent, discrètement. C'est peut-être là sa plus grande élégance." },
  ],
};
