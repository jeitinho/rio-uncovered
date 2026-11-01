// Importe une traduction rédigée en JSON : `bun scripts/import-translation.ts <langue> <fichier.json>…`
// Chaque fichier : { "slug": "...", "meta": {...}, "sections": [...] } (forme de extract-article.ts).
// Écrit src/content/translations/<langue>/<slug>.meta.ts et <slug>.ts.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const [locale, ...files] = process.argv.slice(2);
if (!locale || files.length === 0) throw new Error("usage: bun scripts/import-translation.ts <langue> <fichier.json>…");
const dir = join(import.meta.dir, "..", "src", "content", "translations", locale);
mkdirSync(dir, { recursive: true });

for (const file of files) {
  const { slug, meta, sections } = JSON.parse(readFileSync(file, "utf8"));
  if (!slug || !meta || !Array.isArray(sections)) throw new Error(`${file} : slug, meta et sections attendus`);
  const header = `// Traduction (${locale}) de src/content/articles/${slug}.ts — ne contient que le texte.\n`;
  writeFileSync(
    join(dir, `${slug}.meta.ts`),
    `${header}import type { ArticleMetaTranslation } from "@/content/i18n/articles";\n\nexport const meta: ArticleMetaTranslation = ${JSON.stringify(meta, null, 2)};\n`,
  );
  writeFileSync(
    join(dir, `${slug}.ts`),
    `${header}import type { SectionTranslation } from "@/content/i18n/articles";\n\nexport const sections: SectionTranslation[] = ${JSON.stringify(sections, null, 2)};\n`,
  );
  console.log(`${locale}/${slug} : ${sections.length} sections`);
}
