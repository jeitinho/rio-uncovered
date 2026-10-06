import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { getAllArticles } from "@/content";
import { getCategoryBySlug } from "@/content/categories";
import { absoluteUrl } from "@/lib/site";

function escapeXml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export const Route = createFileRoute("/rss.xml")({
  server: {
    handlers: {
      GET: async () => {
        const articles = getAllArticles();
        const items = articles.map((a) => {
          const link = absoluteUrl(`/blog/${a.slug}`);
          const category = getCategoryBySlug(a.category)?.name ?? a.category;
          return `
    <item>
      <title><![CDATA[${a.title}]]></title>
      <link>${link}</link>
      <guid>${link}</guid>
      <pubDate>${new Date(a.date).toUTCString()}</pubDate>
      <category>${escapeXml(category)}</category>
      <description><![CDATA[${a.description}]]></description>
    </item>`;
        }).join("");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Le Guide Jeitinho</title>
    <link>${absoluteUrl("/blog")}</link>
    <description>Le guide francophone de référence sur Rio de Janeiro.</description>
    <language>fr</language>${items}
  </channel>
</rss>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/rss+xml",
            "Cache-Control": "public, max-age=3600",
            "Access-Control-Allow-Origin": "https://manager.jeitinho.fr",
          },
        });
      },
    },
  },
});
