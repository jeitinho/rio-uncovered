// Article content system — structured sections rendered by <ArticleBody />.
// Adding a new article = adding a file in src/content/articles/ and importing it in index.ts.

export type Section =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string; id?: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; author?: string }
  | { type: "conseil"; title?: string; text: string }
  | { type: "aeviter"; title?: string; text: string }
  | { type: "bonasavoir"; title?: string; text: string }
  | { type: "faq"; items: { q: string; a: string }[] }
  | { type: "image"; src: string; alt: string; caption?: string };

export interface RelatedService {
  label: string;
  href: string;
  description: string;
}

export interface Article {
  slug: string;
  title: string;              // H1 / og:title
  titleAccent?: string;       // word to wrap in <em>
  description: string;        // meta description
  category: string;           // category slug
  tags: string[];
  date: string;               // ISO
  author: string;
  hero: string;               // hero image src (imported url)
  heroAlt: string;
  featured?: boolean;
  popular?: boolean;
  guide?: boolean;            // pillar guide
  relatedServices?: RelatedService[];
  sections: Section[];
}

/** Slugify heading text for TOC anchors. */
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Extract H2/H3 sections for the table of contents. */
export function buildTOC(sections: Section[]): { id: string; text: string; level: 2 | 3 }[] {
  return sections
    .filter((s): s is Extract<Section, { type: "h2" | "h3" }> => s.type === "h2" || s.type === "h3")
    .map((s) => ({
      id: s.id ?? slugifyHeading(s.text),
      text: s.text,
      level: s.type === "h2" ? 2 : 3,
    }));
}

/** Estimate reading time in minutes based on section content. */
export function readingTime(sections: Section[]): number {
  let words = 0;
  for (const s of sections) {
    if ("text" in s) words += s.text.split(/\s+/).length;
    if ("items" in s) words += s.items.join(" ").split(/\s+/).length;
    if (s.type === "faq") words += s.items.map((i) => i.q + " " + i.a).join(" ").split(/\s+/).length;
  }
  return Math.max(2, Math.round(words / 200));
}
