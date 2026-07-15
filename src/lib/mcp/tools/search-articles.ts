import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { getAllArticles } from "@/content";

export default defineTool({
  name: "search_articles",
  title: "Rechercher des articles",
  description:
    "Recherche plein texte simple sur les articles du blog Jeitinho (titre, description, tags). Utile pour trouver des guides sur un quartier, une activité, la gastronomie, etc.",
  inputSchema: {
    query: z.string().min(1).describe("Termes de recherche."),
    limit: z.number().int().min(1).max(50).optional().describe("Nombre max de résultats (défaut 10)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query, limit }) => {
    const q = query
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    const norm = (s: string) =>
      s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const terms = q.split(/\s+/).filter(Boolean);
    const scored = getAllArticles()
      .map((a) => {
        const hay = norm(`${a.title} ${a.description} ${a.tags.join(" ")}`);
        const score = terms.reduce((n, t) => n + (hay.includes(t) ? 1 : 0), 0);
        return { a, score };
      })
      .filter((x) => x.score > 0)
      .sort((x, y) => y.score - x.score)
      .slice(0, limit ?? 10)
      .map(({ a }) => ({
        slug: a.slug,
        title: a.title,
        description: a.description,
        category: a.category,
        tags: a.tags,
        url: `https://blog.jeitinho.fr/blog/${a.slug}`,
      }));
    return {
      content: [{ type: "text", text: JSON.stringify({ items: scored }, null, 2) }],
      structuredContent: { items: scored },
    };
  },
});
