import { defineTool } from "@lovable.dev/mcp-js";
import { CATEGORIES } from "@/content/categories";

export default defineTool({
  name: "list_categories",
  title: "Lister les catégories",
  description: "Liste les catégories éditoriales du blog Jeitinho avec leur slug et description.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = CATEGORIES.map((c) => ({
      slug: c.slug,
      name: c.name,
      description: c.description,
      url: `https://blog.jeitinho.fr/blog/categorie/${c.slug}`,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify({ items }, null, 2) }],
      structuredContent: { items },
    };
  },
});
