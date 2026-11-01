import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { getAllArticles } from "@/content";
import { CATEGORIES } from "@/content/categories";
import { AUTHORS } from "@/content/authors";
import { articleLocales } from "@/content/i18n/articles";
import { ALL_LOCALES, LOCALE_HTML_TAG, type Locale } from "@/i18n/locale";
import { localizedUrl } from "@/i18n/seo";

type Page = { path: string; locales: readonly Locale[]; lastmod?: string; changefreq: string; priority: string };

// Une entrée <url> par page et par langue, chacune avec ses alternatives hreflang.
// Un article n'apparaît que dans les langues où il est traduit.
function urlEntries(p: Page): string[] {
  const alternates = [
    ...p.locales.map((l) => `    <xhtml:link rel="alternate" hreflang="${LOCALE_HTML_TAG[l]}" href="${localizedUrl(p.path, l)}"/>`),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${localizedUrl(p.path, "fr")}"/>`,
  ];
  return p.locales.map((l) =>
    [
      "  <url>",
      `    <loc>${localizedUrl(p.path, l)}</loc>`,
      ...alternates,
      p.lastmod ? `    <lastmod>${p.lastmod}</lastmod>` : null,
      `    <changefreq>${p.changefreq}</changefreq>`,
      `    <priority>${p.priority}</priority>`,
      "  </url>",
    ].filter(Boolean).join("\n"),
  );
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const pages: Page[] = [
          { path: "/", locales: ALL_LOCALES, changefreq: "weekly", priority: "1.0" },
          { path: "/blog", locales: ALL_LOCALES, changefreq: "weekly", priority: "0.9" },
          { path: "/auteurs", locales: ALL_LOCALES, changefreq: "monthly", priority: "0.6" },
          { path: "/manuel-jeitinho", locales: ALL_LOCALES, changefreq: "monthly", priority: "0.6" },
          { path: "/a-propos", locales: ALL_LOCALES, changefreq: "yearly", priority: "0.5" },
          { path: "/contact", locales: ALL_LOCALES, changefreq: "yearly", priority: "0.5" },
          ...CATEGORIES.map((c) => ({ path: `/blog/categorie/${c.slug}`, locales: ALL_LOCALES, changefreq: "weekly", priority: "0.7" })),
          ...AUTHORS.map((a) => ({ path: `/auteurs/${a.slug}`, locales: ALL_LOCALES, changefreq: "monthly", priority: "0.5" })),
          ...getAllArticles().map((a) => ({ path: `/blog/${a.slug}`, locales: articleLocales(a.slug), lastmod: a.date, changefreq: "monthly", priority: "0.8" })),
        ];

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
          ...pages.flatMap(urlEntries),
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
