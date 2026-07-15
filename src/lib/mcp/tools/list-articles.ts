import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { getAllArticles } from "@/content";

export default defineTool({
  name: "list_articles",
  title: "Lister les articles",
  description:
    "Liste les articles du blog Jeitinho (Rio de Janeiro), du plus récent au plus ancien. Filtres optionnels par catégorie et par tag. Renvoie slug, titre, description, catégorie, tags, date, auteur.",
  inputSchema: {
    category: z
      .string()
      .optional()
      .describe("Slug de catégorie (ex: quartiers, activites, gastronomie)."),
    tag: z.string().optional().describe("Filtrer par tag."),
    limit: z.number().int().min(1).max(100).optional().describe("Nombre max de résultats (défaut 20)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category, tag, limit }) => {
    let items = getAllArticles();
    if (category) items = items.filter((a) => a.category === category);
    if (tag) items = items.filter((a) => a.tags.includes(tag));
    const capped = items.slice(0, limit ?? 20).map((a) => ({
      slug: a.slug,
      title: a.title,
      description: a.description,
      category: a.category,
      tags: a.tags,
      date: a.date,
      author: a.author,
      url: `https://blog.jeitinho.fr/blog/${a.slug}`,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify({ total: items.length, items: capped }, null, 2) }],
      structuredContent: { total: items.length, items: capped },
    };
  },
});
