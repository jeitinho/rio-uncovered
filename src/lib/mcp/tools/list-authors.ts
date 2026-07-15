import { defineTool } from "@lovable.dev/mcp-js";
import { AUTHORS } from "@/content/authors";

export default defineTool({
  name: "list_authors",
  title: "Lister les auteurs",
  description: "Liste les auteurs et contributeurs du blog Jeitinho.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = AUTHORS.map((a) => ({
      slug: a.slug,
      name: a.name,
      role: a.role,
      bio: a.bio,
      location: a.location,
      url: `https://blog.jeitinho.fr/auteurs/${a.slug}`,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify({ items }, null, 2) }],
      structuredContent: { items },
    };
  },
});
