// Registre des auteurs du média Jeitinho.
// Ajouter un auteur = ajouter une entrée ici (ou plus tard, un fichier Markdown).
// L'article référence l'auteur par son `slug`. `equipe-jeitinho` est le fallback
// utilisé pour tous les articles rédigés par la rédaction.
import logo from "@/assets/jeitinho-logo.png";
import liliPhoto from "@/assets/authors/lili.jpg";
import charlinePhoto from "@/assets/authors/charline.jpg";
import rafaelPhoto from "@/assets/authors/rafael.jpg";

export interface AuthorSocial {
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  website?: string;
}

export interface Author {
  slug: string;
  name: string;
  role: string;
  language: "fr" | "pt" | "fr/pt";
  bio: string;
  longBio?: string;
  photo?: string; // URL absolue ou import — laisser vide pour utiliser l'avatar par défaut
  location?: string;
  social?: AuthorSocial;
}

export const AUTHORS: Author[] = [
  {
    slug: "equipe-jeitinho",
    name: "L'Équipe Jeitinho",
    role: "Rédaction",
    language: "fr",
    bio: "La rédaction collective du média Jeitinho — locaux, expatriés et amoureux de Rio de Janeiro.",
    longBio:
      "L'Équipe Jeitinho rassemble des contributeurs francophones et brésiliens installés à Rio. Elle signe les guides collectifs, les mises à jour éditoriales et les articles rédigés à plusieurs mains.",
    location: "Rio de Janeiro",
    photo: logo,
    social: { instagram: "https://www.instagram.com/jeitinho.fr" },
  },
  {
    slug: "lili",
    name: "Lili",
    role: "Regard expatrié",
    language: "fr",
    bio: "Juriste de formation, ancienne barmaid, fraîchement installée à Rio.",
    longBio:
      "Juriste de formation et ancienne barmaid, Lili a complètement changé de vie pour construire son avenir dans le tourisme au Brésil. Fraîchement installée à Rio de Janeiro, elle partage le regard d'une expatriée qui découvre la ville en profondeur.",
    location: "Rio de Janeiro",
  },
  {
    slug: "charline",
    name: "Charline",
    role: "Regard humain & authentique",
    language: "fr",
    bio: "Entrepreneuse et maman, installée dans la favela Santa Marta.",
    longBio:
      "Entrepreneuse et maman installée dans la favela Santa Marta depuis près d'un an, Charline développe un projet innovant autour de Rio. Elle partage un regard humain et authentique sur la ville et ses habitants.",
    location: "Santa Marta, Rio de Janeiro",
  },
  {
    slug: "rafael",
    name: "Rafael",
    role: "Fondateur & directeur éditorial",
    language: "fr/pt",
    bio: "Fondateur de Jeitinho — entrepreneur franco-brésilien, producteur d'événements et guide francophone.",
    longBio:
      "Fondateur de Jeitinho, Rafael est un entrepreneur franco-brésilien, producteur d'événements, guide francophone et concierge spécialisé sur Rio de Janeiro. Il partage son temps entre Rio de Janeiro (six mois par an) et Paris (six mois par an), accompagne les voyageurs avant, pendant et après leur séjour, et dirige la ligne éditoriale du média.",
    location: "Rio de Janeiro / Paris",
    social: { website: "https://www.jeitinho.fr" },
  },
];

const DEFAULT_AUTHOR_SLUG = "equipe-jeitinho";

export function getAuthorBySlug(slug: string): Author | undefined {
  return AUTHORS.find((a) => a.slug === slug);
}

/** Résout un champ `author` d'article. Accepte un slug OU un nom libre. */
export function resolveAuthor(value: string): Author {
  const bySlug = getAuthorBySlug(value);
  if (bySlug) return bySlug;
  // Fallback compat : nom libre → objet minimal
  return {
    slug: DEFAULT_AUTHOR_SLUG,
    name: value,
    role: "Contributeur",
    language: "fr",
    bio: "",
  };
}

export function getDefaultAuthor(): Author {
  return getAuthorBySlug(DEFAULT_AUTHOR_SLUG)!;
}
