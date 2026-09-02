import type { Article } from "../types";
import hero from "@/assets/hero-home.jpg";

export const article: Article = {
  slug: "rio-en-10-jours-excursions",
  title: "Rio en 10 jours avec excursions : l'itinéraire complet",
  titleAccent: "10 jours",
  description: "Rio de Janeiro et ses excursions en 10 jours : notre itinéraire complet entre la ville, Paraty, Ilha Grande, Búzios et Petrópolis, pour un séjour sans se presser.",
  category: "itineraires",
  tags: ["itinéraire", "10 jours", "excursions", "Rio de Janeiro"],
  date: "2026-09-02",
  author: "equipe-jeitinho",
  hero,
  heroAlt: "Vue panoramique au coucher du soleil sur la côte de Rio de Janeiro",
  featured: false,
  guide: true,
  popular: false,
  relatedServices: [
    {
      label: "Conciergerie sur mesure",
      href: "https://jeitinho.fr/trouver-un-jeitinho",
      description: "On construit votre itinéraire sur mesure sur 10 jours, ville et excursions comprises, transferts inclus.",
    },
  ],
  sections: [
    { type: "p", text: "Dix jours à Rio, c'est le format qui change tout. Assez de temps pour prendre la ville à son rythme, sans cocher les incontournables à la chaîne, et assez pour sortir de Rio quelques jours : une île préservée, un village colonial, une presqu'île chic ou une ville de montagne à l'architecture impériale. De quoi repartir avec bien plus qu'un carnet de plages et de monuments." },
    { type: "p", text: "Ce guide n'est pas un simple copier-coller de plusieurs articles mis bout à bout. C'est ce qu'on dirait à un ami qui a la chance d'avoir dix jours devant lui : comment répartir son temps entre la ville et les excursions, dans quel ordre, et quelles combinaisons ont vraiment du sens géographiquement plutôt que de multiplier les longs trajets." },

    { type: "h2", text: "La structure du séjour en un coup d'œil" },
    { type: "p", text: "L'idée est simple : environ 5 à 6 jours pour explorer Rio elle-même, puis 4 à 5 jours d'excursions ou d'extension hors de la ville, avant de reprendre l'avion. Deux grandes façons d'organiser ce second bloc, selon vos envies — plutôt nature et plage, ou plutôt histoire et culture — que l'on détaille plus bas." },
    { type: "ul", items: [
      "Jours 1 à 5 ou 6 — Rio de Janeiro : Corcovado, Pain de Sucre, plages, forêt de Tijuca, centre historique, immersion favela.",
      "Jours suivants — extension au choix : boucle Paraty et Ilha Grande (nature et plages sauvages), ou Búzios et Petrópolis (presqu'île chic et Rio impérial).",
      "Dernier jour — retour vers Rio et l'aéroport, avec une marge de sécurité selon le trajet retenu.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "Pour un séjour plus court, consultez plutôt notre <a href=\"/blog/itineraire-5-jours-rio\">itinéraire 5 jours à Rio</a> ou notre article dédié à <a href=\"/blog/rio-en-3-jours\">Rio en 3 jours</a>. Cet article-ci part du principe que vous avez le temps de combiner ville et excursions sans vous presser." },

    { type: "h2", text: "Jours 1 à 5-6 — Rio de Janeiro" },
    { type: "p", text: "Pour le détail complet jour par jour, avec horaires et conseils pratiques, notre <a href=\"/blog/itineraire-5-jours-rio\">itinéraire 5 jours à Rio</a> reste la référence : reprenez-le tel quel comme base des cinq premiers jours de ce séjour de 10 jours. Voici les grandes lignes, en condensé." },
    { type: "h3", text: "Jours 1-2 — Les incontournables et la Zona Sul" },
    { type: "p", text: "Christ Rédempteur au Corcovado le matin, Praia Vermelha et ascension du Pain de Sucre en fin de journée pour le coucher de soleil. Puis une journée plus calme entre les plages de la Zona Sul et, si le cœur vous en dit, une escapade à Barra da Tijuca et sur les canaux de l'Ilha da Gigoia." },
    { type: "h3", text: "Jours 3-4 — Nature, sensations et centre historique" },
    { type: "p", text: "Une matinée dans la forêt de Tijuca, l'une des plus grandes forêts urbaines reboisées au monde, avec en option un vol en parapente depuis Pedra Bonita pour les amateurs de sensations fortes. Puis une journée pour découvrir le centre historique — Paço Imperial, Candelária — avant de terminer sur le coucher de soleil, incontournable, à Arpoador." },
    { type: "h3", text: "Jour 5, voire 6 — Immersion et vie carioca" },
    { type: "p", text: "Une journée en immersion dans une favela, toujours accompagné d'un guide local, pour une vision de Rio bien différente de celle de la Zona Sul. Si vous disposez d'un sixième jour à Rio avant de partir en excursion, profitez-en pour flâner sans programme dans un quartier comme Santa Teresa ou Lapa, ou pour vivre une vraie soirée carioca, entre samba et baile funk." },
    { type: "conseil", title: "Le conseil Jeitinho", text: "Ne cherchez pas à tout faire à Rio avant de partir en excursion. Gardez volontairement une marge : c'est justement le luxe d'un séjour de 10 jours plutôt que 5, et la ville se prête très bien à un dernier passage rapide au retour des excursions." },

    { type: "h2", text: "Les 4 à 5 jours d'excursions : deux itinéraires possibles" },
    { type: "p", text: "C'est ici que le séjour de 10 jours prend tout son sens. Plutôt que de multiplier les excursions à la journée depuis Rio, avec plusieurs heures de route à chaque fois, mieux vaut choisir une combinaison cohérente géographiquement. Deux options se distinguent, selon ce que vous cherchez." },

    { type: "h3", text: "Option nature et plage — boucle Paraty et Ilha Grande (5 jours)" },
    { type: "p", text: "La combinaison la plus naturelle pour qui veut sortir de Rio et changer complètement de rythme : direction la côte verte de l'État de Rio, entre village colonial classé et île sans voitures. Les deux se trouvent sur le même axe, ce qui permet d'enchaîner sans revenir à Rio entre les deux." },
    { type: "ol", items: [
      "Jour 6 — Route vers <a href=\"/blog/excursion-paraty-rio\">Paraty</a> (environ 4 heures depuis Rio par la route Rio-Santos, un trajet à faire idéalement de jour pour profiter du littoral). Installation et découverte du centre historique colonial, rues pavées et façades blanches, en fin d'après-midi.",
      "Jour 7 — Journée à Paraty : sortie en bateau (schooner) le long des criques et îles de la baie, ou randonnée vers l'une des plages sauvages des environs comme Trindade.",
      "Jour 8 — Route jusqu'à Angra dos Reis ou Mangaratiba, puis traversée en bateau vers <a href=\"/blog/ilha-grande-excursion\">Ilha Grande</a>. Installation à la Vila do Abraão, seul village de l'île, où aucun véhicule motorisé ne circule.",
      "Jour 9 — Randonnée jusqu'à la plage de Lopes Mendes, l'une des plus belles du Brésil, ou sortie en bateau autour de l'île pour découvrir plusieurs plages et criques.",
      "Jour 10 — Retour en bateau puis en voiture vers Rio pour le vol retour, en prévoyant une marge confortable avant l'horaire de l'avion.",
    ]},
    { type: "bonasavoir", title: "Bon à savoir", text: "Comptez une route d'environ 1h30 à 2h entre Paraty et Angra dos Reis, puis 30 minutes à 1h30 de bateau selon le point d'embarquement retenu pour Ilha Grande. Un chauffeur privé qui connaît l'itinéraire simplifie beaucoup cette boucle, notamment pour caler les horaires de bateau." },

    { type: "h3", text: "Option histoire et culture — Búzios et Petrópolis via Rio (5 jours)" },
    { type: "p", text: "Une combinaison plus contrastée : la fraîcheur des montagnes et l'héritage impérial d'un côté, la presqu'île chic et ses plages abritées de l'autre. Les deux excursions ne sont pas sur le même axe, ce qui implique de repasser par Rio entre les deux, mais chacune reste courte et le contraste vaut le détour." },
    { type: "ol", items: [
      "Jour 6 — Excursion à la journée à <a href=\"/blog/excursion-petropolis-rio\">Petrópolis</a> (environ 1 heure de route par la BR-040) : Museu Imperial, cathédrale São Pedro de Alcântara, maison de Santos Dumont. Retour dormir à Rio le soir.",
      "Jour 7 — Route vers <a href=\"/blog/excursion-buzios-rio\">Búzios</a> (environ 2h30 à 3h depuis Rio). Installation et première baignade en fin de journée.",
      "Jour 8 — Journée plages à Búzios : Praia da Ferradura pour une eau calme, ou Praia de Geribá pour l'ambiance plus animée.",
      "Jour 9 — Matinée plage, puis flânerie et déjeuner dans le centre historique et la Rua das Pedras avant de reprendre la route.",
      "Jour 10 — Retour vers Rio (environ 2h30 à 3h) pour le vol retour, avec éventuellement une dernière halte à Rio selon l'horaire de l'avion.",
    ]},
    { type: "conseil", title: "Le conseil Jeitinho", text: "Cette option demande moins de logistique que la boucle Paraty-Ilha Grande, puisqu'aucune traversée en bateau n'est nécessaire. C'est une bonne alternative si vous préférez limiter les changements de mode de transport, ou si vous voyagez avec des enfants." },

    { type: "h2", text: "Une troisième voie : alléger le programme" },
    { type: "p", text: "Si cinq jours d'excursions vous semblent trop chargés, rien n'empêche de ne garder qu'une seule destination et d'y rester plus longtemps : deux à trois nuits à <a href=\"/blog/ilha-grande-excursion\">Ilha Grande</a> seule, par exemple, pour vraiment prendre le temps de l'île, ou un weekend prolongé à <a href=\"/blog/excursion-buzios-rio\">Búzios</a> complété d'une excursion à la journée à <a href=\"/blog/excursion-petropolis-rio\">Petrópolis</a> avant ou après. L'important est de ne pas transformer votre séjour en une succession de trajets : mieux vaut une excursion bien vécue que trois survolées." },

    { type: "h2", text: "Comment enchaîner Rio et les excursions" },
    { type: "p", text: "Question d'ordre logique : commencer par Rio permet de se poser dès l'arrivée, de gérer le décalage horaire tranquillement en ville, puis de partir en excursion une fois les repères pris. Certains voyageurs préfèrent l'inverse, pour finir leur séjour par l'énergie de Rio plutôt que par la route retour — les deux fonctionnent, selon votre vol retour et votre rythme." },
    { type: "aeviter", title: "À éviter", text: "N'improvisez pas les transferts entre chaque étape à la dernière minute, surtout pour la boucle Paraty-Ilha Grande qui combine route et bateau. Un chauffeur ou une conciergerie qui organise l'ensemble du parcours évite les mauvaises surprises d'horaires, en particulier pour les traversées en bateau." },
    { type: "bonasavoir", title: "Bon à savoir", text: "Pensez à voyager léger pour la partie excursions : un sac de cabine ou un sac à dos suffit largement pour quelques nuits, et c'est nettement plus pratique pour les traversées en bateau vers Ilha Grande ou les ruelles pavées de Paraty et Búzios." },

    { type: "faq", items: [
      { q: "Faut-il réserver les excursions à l'avance pour un séjour de 10 jours ?", a: "C'est recommandé, surtout en haute saison, pour les hébergements à Paraty, Ilha Grande et Búzios ainsi que pour les transferts. La ville de Rio elle-même se gère plus facilement au jour le jour." },
      { q: "Peut-on combiner Paraty, Ilha Grande, Búzios et Petrópolis en 10 jours ?", a: "C'est possible mais peu recommandé : cela multiplie les trajets et laisse peu de temps réel sur chaque site. Mieux vaut choisir une combinaison cohérente géographiquement, comme la boucle Paraty-Ilha Grande ou le duo Búzios-Petrópolis." },
      { q: "Faut-il louer une voiture pour ce séjour de 10 jours ?", a: "Pas nécessairement. À Rio, l'Uber et le métro suffisent. Pour les excursions, un chauffeur privé ou un transfert organisé reste souvent plus simple qu'une location, notamment pour la boucle qui combine route et bateau." },
      { q: "Quelle option choisir entre la boucle nature et le duo histoire-culture ?", a: "La boucle Paraty-Ilha Grande convient à ceux qui cherchent un vrai dépaysement nature, quitte à accepter un peu plus de logistique. Le duo Búzios-Petrópolis est plus simple à organiser et convient bien aux familles ou à un premier voyage au Brésil." },
    ]},

    { type: "p", text: "Dix jours à Rio et ses environs, c'est la promesse d'un vrai contraste : l'énergie de la ville, puis la nature ou l'histoire selon l'excursion choisie. De quoi repartir avec une vision bien plus complète de l'État de Rio de Janeiro qu'un simple passage dans la capitale carioca." },
  ],
};
