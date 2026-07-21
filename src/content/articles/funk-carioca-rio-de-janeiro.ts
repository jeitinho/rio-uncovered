import type { Article } from "../types";

// Importation des photos avec leurs noms exacts du dossier assets
import heroImg from "@/assets/funk-hero.jpg";
import baileFunkImg from "@/assets/baile-funk.jpg";
import passinhoImg from "@/assets/passinho-dance.jpg";
import femmesFunkImg from "@/assets/femmes-funk.jpg";

// Helper pour garantir qu'on extrait la chaîne URL (gestion string vs object de Vite)
const getImageSrc = (img: any): string => (typeof img === "string" ? img : img?.src || img);

export const article: Article = {
  slug: "funk-carioca-rio-de-janeiro",
  title:
    "Funk carioca : le rythme qui fait vibrer Rio et le monde entier",
  titleAccent: "Funk carioca",
  description:
    "Du Miami Bass aux bailes funk des favelas, découvrez l'histoire, la danse passinho et l'impact culturel du funk brésilien à Rio de Janeiro avec Nawal et la team Jeitinho.",
  category: "culture-et-traditions",
  tags: [
    "Rio de Janeiro",
    "Funk carioca",
    "Culture carioca",
    "Baile Funk",
    "Passinho",
    "Anitta",
    "Musique brésilienne",
    "Favela",
  ],
  date: "2026-07-23",
  author: "nawal",
  hero: getImageSrc(heroImg),
  heroAlt:
    "Ambiance survoltée lors d'un baile funk à Rio de Janeiro avec des lumières et une foule en liesse",
  featured: true,
  relatedServices: [
    {
      label: "Initiation à la danse Passinho avec Jeitinho",
      href: "https://www.jeitinho.fr/calendrier",
      description:
        "Apprenez les pas emblématiques du passinho lors d'un cours d'une heure donné par un professeur professionnel à Rio.",
    },
    {
      label: "Découvrir la vraie culture carioca",
      href: "https://www.jeitinho.fr",
      description:
        "Musique, quartiers authentiques, soirées et expériences sur mesure pour vivre Rio comme un vrai habitant.",
    },
  ],
  sections: [
    {
      type: "p",
      text: "Si je vous dis « Brésil », vous pensez probablement aussitôt aux plages de Copacabana, au sable chaud, à la mer, et à vous, une caipirinha fraîche à la main, le tout bercé par une douce mélodie de samba.\n\nMême si la samba brésilienne est mondialement connue, il existe une multitude de styles musicaux différents qui font danser les Brésiliens aux quatre coins du pays.\n\nAujourd'hui, je vais vous parler plus spécifiquement de l'un d'entre eux, qui fait battre le cœur de la jeunesse carioca : le <b>Funk brésilien</b>.",
    },
    {
      type: "p",
      text: "C'est en 2019, alors que j'étais encore en Belgique, qu'une amie me fait découvrir une chanson qui va tout changer :\n\n<i>« MC Bin Laden — Ta Tranquilo Ta Favorável »</i>\n\nLe rythme me plaît immédiatement. C'est différent, les basses sont puissantes, les phrases répétitives et hypnotiques. Je laisse tourner le clip sur YouTube, et d'autres chansons s'enchaînent automatiquement. C'est ainsi que je découvre <b>KONDZILLA</b>, un label emblématique qui me fera découvrir des artistes comme DJ Guuga, MC Livinho et bien d'autres.\n\nFêtes, festivals, trajets en voiture, soirées entre amis ou à la maison… le funk brésilien a commencé à accompagner mon quotidien pour ne plus jamais me quitter.",
    },
    {
      type: "p",
      text: "Et là, vous vous dites probablement :\n\n<i>« Mais Nawal, au fait, c'est quoi exactement le funk brésilien ? »</i>\n\nLe funk brésilien (ou <i>funk carioca</i>) est un genre musical né à Rio de Janeiro, principalement au cours des années 1980 et 1990.\n\nMalgré son nom, il ne vient pas directement du funk américain vintage que l'on associe à James Brown. Ses racines sont plutôt liées à la musique noire américaine, à la soul, au hip-hop et surtout au <b>Miami Bass</b>, un style de musique électronique très rythmé caractérisé par des basses lourdes et puissantes.\n\nLes DJ brésiliens se sont réapproprié ces influences pour les transformer. Les paroles sont passées au portugais, les rythmes ont évolué et les artistes ont commencé à raconter leur propre réalité. C'est ainsi qu'est né le funk carioca : une musique issue d'une influence étrangère devenue profondément et viscéralement brésilienne.",
    },

    { type: "h2", text: "Le baile funk : là où tout commence" },
    {
      type: "p",
      text: "Pour comprendre le funk, il faut impérativement comprendre ce qu'est un <b>baile funk</b>.\n\nUn baile funk est une fête populaire où la musique est diffusée à un volume impressionnant, grâce à des systèmes de son monumentaux (les <i>paredões</i>) émettant des basses que l'on ressent littéralement résonner dans tout son corps.\n\nÀ l'origine, ces fêtes se déroulaient principalement dans les quartiers populaires et les favelas de Rio. Pour beaucoup de jeunes, elles représentaient un espace unique de liberté, de rencontre, de fête et d'expression artistique.",
    },
    {
      type: "image",
      src: getImageSrc(baileFunkImg),
      alt: "Système de son massif et foule dans un baile funk dans une favela de Rio de Janeiro",
      caption: "Le baile funk : des basses puissantes et une énergie collective incomparable.",
    },
    {
      type: "p",
      text: "Longtemps associé exclusivement aux classes populaires, le funk a souvent été stigmatisé par une partie de la société brésilienne. Une musique créée par les populations marginalisées n'a pas toujours été reconnue à sa juste valeur culturelle.\n\nAujourd'hui, il est possible d'assister à certains bailes dans les favelas de Rio.",
    },
    {
      type: "conseil",
      title: "Conseil sécurité Jeitinho",
      text: "Pour participer à un baile funk en toute sérénité, il est vivement conseillé d'être accompagné par un habitant local ou un guide expérimenté. Cela vous permettra de connaître les codes, les règles de sécurité et les comportements à adopter pour profiter pleinement de la fête.",
    },

    { type: "h2", text: "Une musique qui raconte la vie réelle" },
    {
      type: "p",
      text: "L'une des grandes forces du funk réside dans la diversité de ses textes.\n\nCertains morceaux parlent de fête, de séduction, de relations amoureuses ou de liberté sexuelle. D'autres abordent la pauvreté, le racisme, les violences ou les difficultés quotidiennes des quartiers défavorisés.\n\nIl existe notamment le <b>funk consciente</b>, qui possède une forte dimension sociale et politique. Certaines chansons expriment simplement un désir fondamental : pouvoir vivre en paix, rentrer chez soi sans crainte et accéder aux mêmes opportunités que les autres.\n\nÀ l'opposé, le <i>proibidão</i> est un style plus controversé évoquant la réalité brute du quotidien et les tensions de la rue.\n\nC'est pour cela qu'il est impossible de réduire le funk à un message unique : il peut être drôle, romantique, engagé, provocateur, sensuel ou simplement ultra-festif.",
    },

    { type: "h2", text: "Quand le corps devient un instrument : le Passinho" },
    {
      type: "p",
      text: "Au Brésil, le funk ne s'écoute pas seulement : il se vit et se danse avec une intensité incroyable.\n\nL'un des styles de danse les plus emblématiques est le <b>passinho</b>, né au cœur des favelas de Rio. Les danseurs y enchaînent des mouvements de jambes extrêmement rapides, précis et techniques.",
    },
    {
      type: "image",
      src: getImageSrc(passinhoImg),
      alt: "Jeunes danseurs réalisant des mouvements rapides de passinho dans les rues de Rio",
      caption: "Le passinho : un mélange virtuose de funk, samba, breakdance et danses urbaines.",
    },
    {
      type: "p",
      text: "Le passinho fusionne le funk, la samba, le breakdance et d'autres danses urbaines. Aujourd'hui, les vidéos de ces danseurs font le tour des réseaux sociaux dans le monde entier.\n\nJ'ai moi-même commencé à apprendre le passinho il y a quelques mois. Et si vous voulez tester, vous pouvez vivre cette expérience avec notre initiation d'une heure dispensée par un professeur professionnel (et non, je n'ai pas encore le niveau pour vous donner cours moi-même !).",
    },

    { type: "h2", text: "Les femmes prennent le micro" },
    {
      type: "p",
      text: "Pendant longtemps, l'univers du funk a été très masculin. Mais de nombreuses artistes ont progressivement pris les devants pour transformer la scène brésilienne.\n\nDes figures comme Tati Quebra Barraco, Valesca Popozuda, Ludmilla, MC Carol ou Anitta ont donné une visibilité immense aux femmes dans le funk.",
    },
    {
      type: "image",
      src: getImageSrc(femmesFunkImg),
      alt: "Artiste féminine de funk brésilien chantant sur scène devant son public",
      caption: "Les femmes du funk carioca : indépendance, prise de parole et réappropriation de leur image.",
    },
    {
      type: "p",
      text: "Leurs chansons abordent sans détour la liberté, l'indépendance, le pouvoir et la sexualité. Si le genre peut parfois contenir des paroles hypersexualisées, pour beaucoup d'artistes féminines, réinvestir leur corps et leur voix est devenu un moyen fort d'affirmer leur indépendance sans attendre la permission de la société.",
    },

    { type: "h2", text: "De Rio au reste du monde" },
    {
      type: "p",
      text: "Autrefois considéré comme un phénomène strictement local, le funk carioca s'est exporté partout sur la planète. Il influence désormais la pop internationale, le hip-hop et la scène électro.\n\nDes artistes comme <b>Anitta</b>, notamment avec son album <i>Funk Generation</i>, ont propulsé les sonorités des favelas sur les plus grandes scènes mondiales. Cette passion pour le funk m'a d'ailleurs amenée à développer ma propre vocation de DJ en 2024, alors que rien ne m'y préparait !\n\nMais cette expansion pose une belle question : peut-on exporter le son du funk sans oublier les communautés populaires qui l'ont façonné avec créativité et conviction ?",
    },

    { type: "h2", text: "Pourquoi le funk est-il si important à Rio ?" },
    {
      type: "p",
      text: "Parce qu'il raconte une autre facette de la ville.\n\nÀ côté des cartes postales d'Ipanema et du Corcovado, Rio est une métropole marquée par de forts contrastes sociaux. Le funk est la voix des quartiers populaires, le langage d'une génération et le reflet vibrant de la société carioca.\n\nMême sans maîtriser tout le portugais, on comprend vite l'essentiel : <b>le funk brésilien se ressent</b>.",
    },

    {
      type: "bonasavoir",
      title: "La Playlist Funk de Nawal (10 titres incontournables)",
      text: "Pour vous plonger immédiatement dans l'ambiance carioca, voici 10 classiques à écouter d'urgence :\n\n1. Dennis, Nandinho & Nego Bam — Malandramente\n2. Anitta, MC Zaac, Maejor & Tropkillaz — Vai Malandra\n3. MC Fioti — Bum Bum Tam Tam\n4. MC João — Baile de Favela\n5. Bonde do Tigrão — Cerol na Mão\n6. Cidinho & Doca — Rap da Felicidade\n7. MC Livinho & Rennan da Penha — Hoje Eu Vou Parar na Gaiola\n8. Dadá Boladão, Tati Zaqui & OIK — Surtada\n9. Pedro Sampaio, MC Pedrinho & Anitta — Dançarina\n10. Anitta — Funk Rave",
    },

    {
      type: "quote",
      text: "Le funk carioca est bien plus qu'un genre musical : c'est une culture née dans les marges devenue impossible à ignorer. La prochaine fois que vous entendrez une basse résonner dans les rues de Rio, laissez-vous porter ! 🎧🇧🇷",
    },

    {
      type: "faq",
      items: [
        {
          q: "Qu'est-ce qu'un Baile Funk à Rio ?",
          a: "Un baile funk est une grande fête populaire née dans les favelas et quartiers populaires de Rio, où la musique funk est diffusée sur d'imposants systèmes de sonorisation (pasto/paredão) avec d'importantes basses.",
        },
        {
          q: "Qu'est-ce que le Passinho ?",
          a: "Le passinho est un style de danse urbaine rapide et très technique né dans les favelas de Rio au début des années 2000, combinant funk, samba, breakdance et d'autres styles de danses street.",
        },
        {
          q: "Peut-on aller dans un Baile Funk en tant que touriste ?",
          a: "Oui, c'est possible, mais il est fortement recommandé d'y aller accompagné d'un habitant local ou d'un guide pour connaître les codes du quartier et profiter de la fête en toute sécurité.",
        },
        {
          q: "D'où vient le Funk Carioca ?",
          a: "Le funk carioca est né à Rio dans les années 1980-1990 de la fusion du Miami Bass américain avec des rythmes brésiliens et des paroles en portugais racontant le quotidien des locaux.",
        },
      ],
    },
  ],
};