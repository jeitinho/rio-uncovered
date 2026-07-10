import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { getAllArticles } from "@/content";

export const Route = createFileRoute("/rss.xml")({
  server: {
    handlers: {
      GET: async () => {
        const articles = getAllArticles();
        const items = articles.map((a) => `
    <item>
      <title><![CDATA[${a.title}]]></title>
      <link>/blog/${a.slug}</link>
      <guid>/blog/${a.slug}</guid>
      <pubDate>${new Date(a.date).toUTCString()}</pubDate>
      <description><![CDATA[${a.description}]]></description>
    </item>`).join("");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Le Guide Jeitinho</title>
    <link>/blog</link>
    <description>Le guide francophone de référence sur Rio de Janeiro.</description>
    <language>fr</language>${items}
  </channel>
</rss>`;

        return new Response(xml, {
          headers: { "Content-Type": "application/rss+xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
