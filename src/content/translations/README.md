# Traductions des articles

Un dossier par langue (`en`, `es`, `pt`, `it`, `de`, `ru`). L'article français
(`src/content/articles/<slug>.ts`) reste la source : images, date, catégorie,
auteur… Une traduction ne contient que le texte.

```
translations/<langue>/index.ts    export const meta = { "<slug>": { title, titleAccent?, description, heroAlt, relatedServices? }, … }
translations/<langue>/<slug>.ts   export const sections: SectionTranslation[] = [ … ]   // même ordre que l'original
```

- Squelette à traduire : `bun scripts/extract-article.ts <slug>`
- Contrôle (structure, liens, balises) : `bun scripts/check-translations.ts`

Tant qu'un article n'a pas de traduction dans une langue, `/<langue>/blog/<slug>`
redirige vers la version française, et l'article n'apparaît ni dans les listes,
ni dans le sitemap, ni dans les hreflang de cette langue.
