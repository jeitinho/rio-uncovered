import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { getAllArticles } from "@/content";
import { CATEGORIES } from "@/content/categories";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls: { loc: string; lastmod?: string; changefreq?: string; priority?: string }[] = [
          { loc: "/", changefreq: "weekly", priority: "1.0" },
          { loc: "/experiences", changefreq: "monthly", priority: "0.8" },
          { loc: "/conciergerie", changefreq: "monthly", priority: "0.8" },
          { loc: "/a-propos", changefreq: "yearly", priority: "0.5" },
          { loc: "/contact", changefreq: "yearly", priority: "0.5" },
          { loc: "/blog", changefreq: "weekly", priority: "0.9" },
        ];
        for (const c of CATEGORIES) urls.push({ loc: `/blog/categorie/${c.slug}`, changefreq: "weekly", priority: "0.7" });
        for (const a of getAllArticles()) urls.push({ loc: `/blog/${a.slug}`, lastmod: a.date, changefreq: "monthly", priority: "0.8" });

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls.map((u) => [
            "  <url>",
            `    <loc>${BASE_URL}${u.loc}</loc>`,
            u.lastmod ? `    <lastmod>${u.lastmod}</lastmod>` : null,
            u.changefreq ? `    <changefreq>${u.changefreq}</changefreq>` : null,
            u.priority ? `    <priority>${u.priority}</priority>` : null,
            "  </url>",
          ].filter(Boolean).join("\n")),
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
