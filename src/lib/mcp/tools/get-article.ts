import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { getArticleBySlug } from "@/content";
import type { Section } from "@/content/types";

function sectionToText(s: Section): string {
  switch (s.type) {
    case "p":
      return s.text;
    case "h2":
      return `\n## ${s.text}\n`;
    case "h3":
      return `\n### ${s.text}\n`;
    case "ul":
      return s.items.map((i) => `- ${i}`).join("\n");
    case "ol":
      return s.items.map((i, idx) => `${idx + 1}. ${i}`).join("\n");
    case "quote":
      return `> ${s.text}${s.author ? ` — ${s.author}` : ""}`;
    case "conseil":
      return `**Conseil${s.title ? ` — ${s.title}` : ""}** : ${s.text ?? ""}`;
    case "aeviter":
      return `**À éviter${s.title ? ` — ${s.title}` : ""}** : ${s.text ?? ""}`;
    case "bonasavoir":
      return `**Bon à savoir${s.title ? ` — ${s.title}` : ""}** : ${s.text ?? ""}`;
    case "faq":
      return s.items.map((i) => `**Q: ${i.q}**\nR: ${i.a}`).join("\n\n");
    case "image":
    case "gallery":
      return "";
  }
}

export default defineTool({
  name: "get_article",
  title: "Obtenir un article",
  description:
    "Renvoie le contenu complet d'un article du blog Jeitinho à partir de son slug (métadonnées + corps de l'article en texte lisible).",
  inputSchema: {
    slug: z.string().min(1).describe("Slug de l'article (ex: ipanema-guide-complet)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const a = getArticleBySlug(slug);
    if (!a) {
      return {
        content: [{ type: "text", text: `Aucun article trouvé pour le slug "${slug}".` }],
        isError: true,
      };
    }
    const body = a.sections.map(sectionToText).filter(Boolean).join("\n\n");
    const meta = {
      slug: a.slug,
      title: a.title,
      description: a.description,
      category: a.category,
      tags: a.tags,
      date: a.date,
      author: a.author,
      url: `https://blog.jeitinho.fr/blog/${a.slug}`,
    };
    return {
      content: [
        { type: "text", text: `# ${a.title}\n\n${a.description}\n${body}` },
      ],
      structuredContent: { ...meta, body },
    };
  },
});
