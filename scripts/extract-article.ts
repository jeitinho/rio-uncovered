// Squelette de traduction d'un article : `bun scripts/extract-article.ts <slug>`
// Affiche en JSON le texte à traduire (meta + sections), dans la forme attendue par
// src/content/translations/<locale>/ (voir src/content/i18n/articles.ts).
import { join } from "node:path";

const slug = process.argv[2];
if (!slug) throw new Error("usage: bun scripts/extract-article.ts <slug>");
const { article: a } = await import(join(import.meta.dir, "..", "src", "content", "articles", `${slug}.ts`));

const pick = (o: Record<string, unknown>, keys: string[]) =>
  Object.fromEntries(keys.filter((k) => o[k] !== undefined).map((k) => [k, o[k]]));

const meta = {
  ...pick(a, ["title", "titleAccent", "description", "heroAlt"]),
  ...(a.relatedServices ? { relatedServices: a.relatedServices.map((s: any) => pick(s, ["label", "description"])) } : {}),
};
const sections = a.sections.map((s: any) => {
  switch (s.type) {
    case "image": return pick(s, ["type", "alt", "caption"]);
    case "gallery": return { type: "gallery", images: s.images.map((i: any) => pick(i, ["alt", "caption"])) };
    case "h2": case "h3": return pick(s, ["type", "text"]);
    default: return s;
  }
});
console.log(JSON.stringify({ meta, sections }, null, 2));
