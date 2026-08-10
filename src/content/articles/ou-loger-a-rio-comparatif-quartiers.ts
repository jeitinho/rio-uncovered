import type { Article } from "../types";
import hero from "@/assets/article-ou-loger-rio.jpg";
import clsSalon from "@/assets/casa-los-santos-salon.jpg";
import clsChambreVue from "@/assets/casa-los-santos-chambre-vue.jpg";
import clsCoucherSoleil from "@/assets/casa-los-santos-coucher-soleil.jpg";
import clsChambre from "@/assets/casa-los-santos-chambre.jpg";
import ppgSalon from "@/assets/appart-ppg-salon.jpg";
import ppgVueMontagne from "@/assets/appart-ppg-vue-montagne.jpg";
import ppgBalcon from "@/assets/appart-ppg-balcon.jpg";
import ppgVuePanoramique from "@/assets/appart-ppg-vue-panoramique.jpg";
import ppgRooftopPiscine from "@/assets/appart-ppg-rooftop-piscine.jpg";
import ppgTerrasse from "@/assets/appart-ppg-terrasse.jpg";
import ppgVueOcean from "@/assets/appart-ppg-vue-ocean.jpg";

export const article: Article = {
  slug: "ou-loger-a-rio-comparatif-quartiers",
  title: "Où loger à Rio : notre comparatif quartier par quartier",
  titleAccent: "comparatif",
  description: "Zona Sul, Centro, Barra da Tijuca : notre comparatif complet pour choisir où loger à Rio selon votre style de voyage.",
  category: "hebergements",
  tags: ["hébergement", "où loger", "quartiers", "Rio de Janeiro"],
  date: "2026-07-13",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Vue aérienne de la Zona Sul de Rio de Janeiro avec ses immeubles face à la plage",
  featured: false,
  guide: true,
  popular: true,
  relatedServices: [
    {
      label: "Nos hébergements partenaires",
      href: "https://jeitinho.fr/services/hebergements",
      description: "Casa Los Santos, appartements en Zona Sul... on vous aide à réserver le logement adapté à votre séjour.",
    },
  ],
  sections: [
    { type: "p", text: "Il n'existe pas un meilleur quartier pour loger à Rio. Il existe celui qui correspond à votre voyage. Voici notre comparatif complet pour vous aider à choisir en quelques minutes, selon votre budget, votre style de voyage et vos priorités." },
    { type: "p", text: "Ce guide n'est pas une liste théorique. C'est ce qu'on dirait à un ami qui hésite : quelle zone pour quel profil de voyageur." },

    { type: "h2", text: "Je viens pour... quelle zone choisir" },
    { type: "ul", items: [
      "Un premier voyage, les plages, l'essentiel de Rio → Zona Sul : Copacabana, Ipanema, Leblon, Botafogo, Lagoa, Jardim Botânico, Urca. Le cœur touristique et résidentiel, tout à portée de main.",
      "La culture, l'histoire, une ambiance plus locale → Centro : Centro historique, Lapa, Santa Teresa, Glória, Catete. Musées, architecture coloniale, botecos brésiliens et Lapa by night.",
      "Le luxe, le confort, une ambiance moderne → Barra da Tijuca : hôtels haut de gamme, restaurants et bars sophistiqués, grandes plages, quartier résidentiel et sécurisé.",
    ]},
    { type: "conseil", title: "Le conseil Jeitinho", text: "Choisissez votre zone selon votre style de voyage, pas seulement selon le prix. L'ambiance et le temps de trajet peuvent transformer votre expérience à Rio bien plus qu'une différence de quelques euros sur la nuitée." },

    { type: "h2", text: "Zona Sul : le cœur du séjour" },
    { type: "p", text: "La Zona Sul regroupe les quartiers les plus connus de Rio, chacun avec sa propre ambiance. Retrouvez nos guides complets de <a href=\"/blog/copacabana-guide-complet\">Copacabana</a>, <a href=\"/blog/ipanema-guide-complet\">Ipanema</a>, <a href=\"/blog/leblon-guide-complet\">Leblon</a>, <a href=\"/blog/botafogo-guide-complet\">Botafogo</a>, <a href=\"/blog/lagoa-guide-complet\">Lagoa</a>, <a href=\"/blog/jardim-botanico-guide-complet\">Jardim Botânico</a> et <a href=\"/blog/urca-guide-complet\">Urca</a> pour approfondir chaque quartier." },

    { type: "h2", text: "Centro : culture et authenticité" },
    { type: "p", text: "Moins touristique, plus vivant au quotidien. Retrouvez nos guides de <a href=\"/blog/lapa-guide-complet\">Lapa</a>, <a href=\"/blog/santa-teresa-guide-complet\">Santa Teresa</a>, <a href=\"/blog/gloria-guide-complet\">Glória</a> et <a href=\"/blog/catete-guide-complet\">Catete</a>." },

    { type: "h2", text: "Barra da Tijuca : luxe et modernité" },
    { type: "p", text: "Un Rio plus récent, pensé pour la voiture. Retrouvez notre guide complet de <a href=\"/blog/barra-da-tijuca-guide-complet\">Barra da Tijuca</a>." },

    { type: "bonasavoir", title: "Bon à savoir", text: "Les distances peuvent sembler courtes sur une carte, mais le trafic change tout à Rio. Deux quartiers voisins peuvent être séparés par 30 à 40 minutes de circulation aux heures de pointe. Anticipez toujours vos trajets en conséquence." },

    { type: "h2", text: "Nos adresses partenaires" },
    { type: "p", text: "En Zona Sul, nous travaillons avec quelques hébergements sélectionnés pour leur emplacement et leur qualité." },

    { type: "h3", text: "Casa Los Santos, Vidigal" },
    { type: "p", text: "Une maison avec vue imprenable sur l'océan, à Vidigal, entre plage et favela authentique. Idéal pour un séjour immersif sans sacrifier le confort." },
    { type: "gallery", images: [
      { src: clsSalon, alt: "Salon lumineux de Casa Los Santos avec vue sur l'océan au coucher du soleil" },
      { src: clsChambreVue, alt: "Chambre de Casa Los Santos avec vue sur la baie" },
      { src: clsCoucherSoleil, alt: "Coucher de soleil depuis Casa Los Santos à Vidigal" },
      { src: clsChambre, alt: "Chambre confortable de Casa Los Santos" },
    ]},

    { type: "h3", text: "Appartement 2 chambres, PPG" },
    { type: "p", text: "Un appartement spacieux entre Copacabana et Ipanema, avec rooftop privatif, piscine et vue panoramique sur la baie de Guanabara." },
    { type: "gallery", images: [
      { src: ppgSalon, alt: "Salon moderne de l'appartement PPG" },
      { src: ppgVueMontagne, alt: "Vue sur les montagnes depuis l'appartement PPG" },
      { src: ppgBalcon, alt: "Balcon de l'appartement PPG avec vue sur le quartier" },
      { src: ppgVuePanoramique, alt: "Vue panoramique sur Rio depuis l'appartement PPG" },
      { src: ppgRooftopPiscine, alt: "Rooftop avec piscine de l'appartement PPG au coucher du soleil" },
      { src: ppgTerrasse, alt: "Terrasse du rooftop de l'appartement PPG" },
      { src: ppgVueOcean, alt: "Vue sur l'océan depuis le rooftop de l'appartement PPG" },
    ]},
    { type: "conseil", title: "Le conseil Jeitinho", text: "Envie de séjourner dans l'une de ces adresses ? Contactez-nous directement, nous nous occupons de la réservation et de tout le reste de votre séjour." },

    { type: "h2", text: "Une option différente : séjourner dans une communauté" },
    { type: "p", text: "Dans la Zona Sul, il existe des communautés (favelas) comme Rocinha, Vidigal ou Santa Marta. Séjourner avec des habitants peut offrir une expérience authentique, enrichissante et souvent plus abordable, tout en soutenant l'économie locale. C'est une option à considérer pour les voyageurs en quête d'immersion, à condition de bien se renseigner sur l'hébergement choisi au préalable." },
    { type: "aeviter", title: "À éviter", text: "Ne réservez pas votre hébergement uniquement sur la base du prix affiché sans regarder sa localisation précise sur une carte. Un logement « proche de la plage » peut en réalité se trouver à 20 minutes de marche en montée, ce qui change complètement l'expérience quotidienne." },

    { type: "faq", items: [
      { q: "Quelle est la meilleure zone pour un premier séjour à Rio ?", a: "La Zona Sul reste le choix le plus pratique : plages, activités, restaurants et transports, tout est concentré et facilement accessible." },
      { q: "Quelle zone privilégier avec un budget serré ?", a: "Le Centro offre les prix les plus accessibles, avec un accès direct à la culture et au patrimoine historique de Rio." },
      { q: "Faut-il une voiture pour loger à Barra da Tijuca ?", a: "Oui, une voiture ou un Uber est quasiment indispensable à Barra da Tijuca, les distances y étant plus importantes qu'en Zona Sul." },
      { q: "Peut-on loger dans une favela en tant que touriste ?", a: "Oui, certaines communautés comme Vidigal ou Santa Marta proposent des hébergements chez l'habitant, offrant une expérience authentique et souvent économique." },
    ]},

    { type: "p", text: "Le meilleur souvenir de Rio n'est pas seulement un lieu, mais une émotion. Choisissez votre zone selon votre rythme, et vivez-la pleinement, quel que soit votre budget." },
  ],
};