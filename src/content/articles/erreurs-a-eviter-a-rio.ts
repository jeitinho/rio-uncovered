import type { Article } from "../types";
import hero from "@/assets/article-erreurs-rio.jpg";

export const article: Article = {
  slug: "erreurs-a-eviter-a-rio",
  title: "Rio vu par un Européen : les vrais chocs culturels",
  titleAccent: "chocs culturels",
  description: "Au-delà des conseils pratiques, les vrais écarts culturels qui surprennent les Européens à Rio : contact physique, franchise, rapport au temps et à la hiérarchie.",
  category: "conseils-pratiques",
  tags: ["culture", "différences culturelles", "préparer son voyage", "Rio de Janeiro"],
  date: "2026-07-11",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Promenade en mosaïque de Copacabana avec des cariocas se promenant au lever du soleil, Rio de Janeiro",
  featured: false,
  guide: true,
  popular: true,
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://www.jeitinho.fr/trouver-un-jeitinho",
      description: "On vous accompagne pour décoder les codes locaux et profiter pleinement de votre séjour.",
    },
  ],
  sections: [
    { type: "p", text: "Les listes de « conseils pratiques » pour Rio se ressemblent toutes : passeport, Uber, crème solaire. Utile, mais ça ne prépare à rien de ce qui surprend vraiment. Le vrai choc, pour un Européen, n'est pas pratique : il est culturel. Voici ce qui déstabilise réellement, au-delà des clichés." },

    { type: "h2", text: "Le contact physique n'a rien à voir" },
    { type: "p", text: "Un Brésilien touche l'épaule, le bras, tient la conversation à quelques centimètres du visage — des codes qui n'existent pas de la même façon en Europe du Nord, et qui surprennent même les Français, pourtant plus tactiles que leurs voisins. Ce n'est jamais une intrusion : c'est la norme sociale. Reculer d'un pas peut même être perçu comme froid ou distant." },

    { type: "h2", text: "Les codes de politesse sont parfois inversés" },
    { type: "p", text: "Renifler bruyamment en public est banal au Brésil ; se moucher devant les autres, en revanche, est mal vu et se fait discrètement, à l'écart. À l'inverse de nombreux pays européens. La musique forte chez un voisin jusqu'à tard dans la nuit est également beaucoup plus tolérée socialement qu'en Europe — la fête prime sur la tranquillité individuelle." },

    { type: "h2", text: "La franchise sur le physique surprend" },
    { type: "p", text: "Des commentaires directs sur le poids, l'apparence ou la tenue vestimentaire, formulés sans détour, ne sont généralement pas perçus comme blessants au Brésil — ils le seraient presque partout en Europe. Ce n'est ni de la méchanceté ni de l'indiscrétion : c'est une culture où l'apparence se commente ouvertement, dans un sens comme dans l'autre." },

    { type: "conseil", title: "Le conseil Jeitinho", text: "Le mot « jeitinho » lui-même résume un vrai trait culturel : au Brésil, on dit rarement « non » de façon frontale. Un « vou ver » (je vais voir) ou un sourire évasif signifie souvent un refus poli. Apprendre à lire ces nuances évite bien des malentendus." },

    { type: "h2", text: "Le rapport au temps se joue sur deux vitesses" },
    { type: "p", text: "Le fameux horário brasileiro (arriver avec du retard) s'applique surtout au cadre social — un dîner entre amis, une fête. Pour un rendez-vous professionnel, une excursion réservée ou un vol, la ponctualité reste attendue comme partout ailleurs. La confusion entre ces deux régimes est une source classique de malentendus pour les visiteurs." },

    { type: "h2", text: "La bureaucratie du quotidien surprend" },
    { type: "p", text: "Le CPF (numéro fiscal brésilien) est demandé pour des achats qui semblent anodins — parfois même en pharmacie ou en boutique. Un système difficile à anticiper pour un visiteur de passage, et qui contraste avec la simplicité attendue de transactions courtes en Europe." },
    { type: "bonasavoir", title: "Bon à savoir", text: "En tant que touriste, on ne vous demandera généralement pas de CPF pour vos achats courants. Si la question se pose, un simple « sou turista » (je suis touriste) suffit à régler la situation dans la grande majorité des cas." },

    { type: "h2", text: "Les inégalités sociales sont visibles, partout" },
    { type: "p", text: "Murs hauts, portails électriques, gardiens en bas des immeubles même dans des quartiers résidentiels tranquilles : l'architecture de la sécurité au Brésil reflète des inégalités sociales bien plus marquées qu'en Europe. Ce contraste, visible dès les premiers jours, mérite d'être observé avec curiosité plutôt que jugé à l'aune de repères européens." },

    { type: "aeviter", title: "Sujets sensibles en conversation légère", text: "La politique et l'avortement (illégal au Brésil sauf exceptions) restent des sujets clivants et personnels. Mieux vaut les aborder avec tact, si le sujet vient naturellement, plutôt que de les lancer en small talk avec des inconnus." },

    { type: "h2", text: "La convivialité prime sur tout le reste" },
    { type: "p", text: "Malgré ces écarts culturels, ce qui frappe le plus reste la générosité de l'accueil : un repas partagé, une soirée qui s'étire, une hospitalité rarement feinte. C'est souvent ce contraste — entre les codes qui déstabilisent et la chaleur humaine qui rassure — qui rend le voyage à Rio si marquant." },

    { type: "h2", text: "Pour les conseils pratiques" },
    { type: "p", text: "Ce guide se concentre sur les écarts culturels. Pour les questions pratiques du quotidien, retrouvez nos guides dédiés : <a href=\"/blog/payer-au-bresil-pix\">le PIX et les paiements</a>, <a href=\"/blog/se-deplacer-a-rio\">se déplacer à Rio</a>, et <a href=\"/blog/securite-a-rio-ce-qu-il-faut-savoir\">la sécurité à Rio</a>." },

    { type: "faq", items: [
      { q: "Le contact physique fréquent est-il vraiment normal partout au Brésil ?", a: "Oui, c'est une norme sociale largement répandue, y compris entre personnes qui se connaissent peu. Ce n'est pas propre à Rio, mais à la culture brésilienne dans son ensemble." },
      { q: "Comment savoir si un Brésilien dit vraiment non ?", a: "Un refus direct est rare socialement. Un « vou ver », un silence ou un sourire évasif valent souvent un non poli. Avec l'habitude, ces nuances se repèrent facilement." },
      { q: "Faut-il éviter de parler politique au Brésil ?", a: "Pas totalement, mais en conversation légère avec des inconnus, mieux vaut laisser le sujet venir naturellement plutôt que de le lancer soi-même." },
      { q: "L'horário brasileiro s'applique-t-il aussi aux excursions touristiques ?", a: "Non — pour tout ce qui est réservé (excursion, transfert, rendez-vous professionnel), la ponctualité brésilienne est similaire aux standards européens." },
    ]},

    { type: "p", text: "Comprendre ces écarts culturels, plus que n'importe quelle liste de conseils pratiques, c'est ce qui transforme un voyage touristique en une vraie rencontre avec Rio." },
  ],
};
