// Contrôle des traductions d'articles : `bun scripts/check-translations.ts`
//
// Pour chaque langue : chaque entrée `meta` correspond à un article français et a son
// fichier `sections` ; les sections suivent l'original une à une (même nombre, même type,
// même nombre d'éléments dans les listes, FAQ et galeries) ; aucun texte vide ; les
// balises HTML (<a>, <strong>…) sont conservées en nombre ; aucun titre facultatif n'est
// ajouté ou perdu.
import { readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dir, "..", "src", "content");
const LOCALES = ["en", "es", "pt", "it", "de", "ru"];

type Any = Record<string, any>;
const errors: string[] = [];
const err = (where: string, msg: string) => errors.push(`${where}: ${msg}`);

const tagCount = (s: string, tag: string) => (s.match(new RegExp(`<${tag}\\b`, "gi")) ?? []).length;
function sameTags(where: string, fr: string | undefined, tr: string | undefined) {
  if (!fr || tr === undefined) return;
  for (const tag of ["a", "strong", "em", "br", "b", "i"]) {
    if (tagCount(fr, tag) !== tagCount(tr, tag)) err(where, `<${tag}> ×${tagCount(fr, tag)} en FR, ×${tagCount(tr, tag)} traduit`);
  }
  const frHrefs = [...fr.matchAll(/href="([^"]+)"/g)].map((m) => m[1]).sort().join(" ");
  const trHrefs = [...tr.matchAll(/href="([^"]+)"/g)].map((m) => m[1]).sort().join(" ");
  if (frHrefs !== trHrefs) err(where, `liens différents : FR [${frHrefs}] / traduit [${trHrefs}]`);
}
function text(where: string, fr: string | undefined, tr: unknown) {
  if (fr === undefined) {
    if (tr !== undefined) err(where, "texte présent dans la traduction mais absent de l'original");
    return;
  }
  if (typeof tr !== "string" || !tr.trim()) return err(where, "texte manquant");
  sameTags(where, fr, tr);
}
function list(where: string, fr: string[], tr: unknown) {
  if (!Array.isArray(tr) || tr.length !== fr.length) return err(where, `${fr.length} éléments attendus, ${Array.isArray(tr) ? tr.length : "aucun"} trouvés`);
  fr.forEach((f, i) => text(`${where}[${i}]`, f, tr[i]));
}

for (const locale of LOCALES) {
  const dir = join(ROOT, "translations", locale);
  if (!existsSync(join(dir, "index.ts"))) continue;
  const { meta } = (await import(join(dir, "index.ts"))) as { meta: Record<string, Any> };
  const bodies = new Set(readdirSync(dir).filter((f) => f !== "index.ts").map((f) => f.replace(/\.ts$/, "")));
  for (const slug of bodies) if (!meta[slug]) err(`${locale}/${slug}`, "fichier de sections sans entrée meta");

  for (const [slug, m] of Object.entries(meta)) {
    const where = `${locale}/${slug}`;
    const frPath = join(ROOT, "articles", `${slug}.ts`);
    if (!existsSync(frPath)) { err(where, "aucun article français avec ce slug"); continue; }
    if (!bodies.has(slug)) { err(where, "entrée meta sans fichier de sections"); continue; }
    const { article: fr } = (await import(frPath)) as { article: Any };
    const { sections } = (await import(join(dir, `${slug}.ts`))) as { sections: Any[] };

    text(`${where} title`, fr.title, m.title);
    text(`${where} description`, fr.description, m.description);
    text(`${where} heroAlt`, fr.heroAlt, m.heroAlt);
    if (fr.titleAccent && (!m.titleAccent || !m.title.includes(m.titleAccent))) err(where, "titleAccent manquant ou absent du titre");
    if (fr.relatedServices) {
      if (m.relatedServices?.length !== fr.relatedServices.length) err(where, `relatedServices : ${fr.relatedServices.length} attendus`);
      else fr.relatedServices.forEach((s: Any, i: number) => { text(`${where} service[${i}].label`, s.label, m.relatedServices[i].label); text(`${where} service[${i}].description`, s.description, m.relatedServices[i].description); });
    }

    if (sections.length !== fr.sections.length) { err(where, `${fr.sections.length} sections attendues, ${sections.length} trouvées`); continue; }
    fr.sections.forEach((s: Any, i: number) => {
      const t = sections[i];
      const w = `${where} §${i} (${s.type})`;
      if (!t || t.type !== s.type) return err(w, `type « ${t?.type} » au lieu de « ${s.type} »`);
      switch (s.type) {
        case "p": case "h2": case "h3": return text(w, s.text, t.text);
        case "ul": case "ol": return list(w, s.items, t.items);
        case "quote": text(w, s.text, t.text); return;
        case "conseil": case "aeviter": case "bonasavoir": text(`${w} title`, s.title, t.title); text(`${w} text`, s.text, t.text); return;
        case "faq":
          if (t.items?.length !== s.items.length) return err(w, `${s.items.length} questions attendues`);
          s.items.forEach((it: Any, j: number) => { text(`${w} q${j}`, it.q, t.items[j].q); text(`${w} a${j}`, it.a, t.items[j].a); });
          return;
        case "image": text(`${w} alt`, s.alt, t.alt); text(`${w} caption`, s.caption, t.caption); return;
        case "gallery":
          if (t.images?.length !== s.images.length) return err(w, `${s.images.length} images attendues`);
          s.images.forEach((img: Any, j: number) => { text(`${w} img${j}.alt`, img.alt, t.images[j].alt); text(`${w} img${j}.caption`, img.caption, t.images[j].caption); });
          return;
      }
    });
  }
  console.log(`${locale} : ${Object.keys(meta).length} article(s)`);
}

if (errors.length) {
  console.error(`\n${errors.length} problème(s) :\n` + errors.map((e) => `  - ${e}`).join("\n"));
  process.exit(1);
}
console.log("Traductions OK");
