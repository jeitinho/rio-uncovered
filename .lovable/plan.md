
# Plan — Site Jeitinho + Hub SEO blog

Le projet est vide côté code. On construit **la base du site Jeitinho** (pour que la DA existe vraiment), puis on greffe le **Hub SEO blog** dessus. Tout partage les mêmes composants, tokens, header/footer — impossible de distinguer l'avant/l'après.

## 1. Direction artistique (extraite de la fiche officielle)

Tokens injectés dans `src/styles.css` (oklch, semantic Tailwind) :

- `--background` = crème `#F6F2E9` (fond dominant, ~80% des surfaces, jamais blanc pur)
- `--foreground` = noir chaud `#221E1A` (texte, bordures — **jamais noir pur**)
- `--primary` = terracotta `#B15D36` (CTA, accents, "BR" du logo)
- `--accent` = or pêche `#F7CA98` (accent italique rare sur photo sombre)
- `--card`, `--muted`, `--border` dérivés en variations chaudes cohérentes
- Rayons `--radius: 3px` (boutons quasi-droits) ; pilule réservée aux badges

Typographie via `<link>` dans `__root.tsx` head :
- **Fraunces** — serif d'affichage, un mot en italique par titre
- **Inter** — sans-serif UI, uppercase + tracking 0.12em pour boutons/nav/badges

Règles de composition codifiées dans les composants :
- Boutons `variant="primary"` (terracotta plein) / `"outline"` (noir chaud)
- Badge pilule majuscule espacé
- Photo héro toujours avec overlay dégradé sombre
- Beaucoup d'espace négatif

## 2. Base du site (routes)

```
/                       Home Jeitinho (hero photo Rio, pitch, expériences, réassurance, CTA blog + Trouver un Jeitinho)
/experiences            Liste des expériences (Christ Rédempteur, Maracanã, City Tour, Ilha Grande, Paraty, Arraial, Búzios, Dois Irmãos...)
/experiences/$slug      Page expérience (structure prête, 3-4 remplies pour la démo)
/conciergerie           Service conciergerie
/a-propos               Locaux passionnés, notre histoire
/contact                Formulaire + WhatsApp
/blog                   ← Hub SEO (voir §3)
```

Composants partagés dans `src/components/site/` :
`Header`, `Footer`, `Button`, `PillBadge`, `HeroImage`, `SectionHeading` (avec `<em>` italique auto), `ReassuranceBlock`, `CTAJeitinho`, `NewsletterBlock`.

## 3. Hub SEO blog — architecture

```
/blog                                     Homepage magazine
/blog/categorie/$slug                     Page catégorie SEO
/blog/categorie/$slug/$sous              (optionnel, prêt structurellement)
/blog/$slug                               Page article
/blog/guides/$slug                        Guides piliers (Rio, plages, Carnaval, quartiers, gastronomie)
/blog/recherche                           Résultats de recherche
/rss.xml                                  Server route
/sitemap.xml                              Server route dynamique (routes statiques + tous articles + toutes catégories)
```

**17 catégories** créées comme demandé : Quartiers, Activités, Excursions, Gastronomie, Vie nocturne, Carnaval, Football, Plages, Randonnées, Culture, Conseils pratiques, Budget, Sécurité, Transports, Hébergements, Itinéraires, Évènements.

### Homepage `/blog`
Hero immersif (photo Rio + overlay + titre "Le Guide *Jeitinho*") · barre de recherche instantanée · grille catégories illustrées · articles à la Une (3 cartes premium) · derniers articles (grille responsive) · articles populaires · Guides incontournables · Newsletter.

### Page catégorie
H1 nom catégorie · image · intro SEO longue · liste articles · articles populaires de la catégorie · FAQ (si pertinent) · maillage vers guides piliers · CTA services Jeitinho liés.

### Page article
Breadcrumb · hero image · titre `<h1>` avec italique accent · meta (auteur, date, temps lecture, catégorie) · **sommaire automatique** généré depuis les H2/H3 · contenu MDX avec encadrés custom :
- `<ConseilJeitinho>` — fond crème renforcé, bordure terracotta
- `<AEviter>` — accent rouge terre
- `<BonASavoir>` — fond or pêche discret
- `<FAQ>` — accordéon + JSON-LD FAQPage auto
Images optimisées · articles similaires (même catégorie/tags) · CTA vers services Jeitinho pertinents (mapping article→service) · navigation précédent/suivant · partage social + copie lien · retour en haut sticky.

## 4. Contenu — 3-5 articles vitrine complets

1. **Guide complet d'Ipanema** (guide pilier, ~2500 mots, FAQ, encadrés)
2. **Les 25 meilleures choses à faire à Rio** (listicle pilier)
3. **Le vrai coût d'un voyage à Rio** (budget)
4. **Comment préparer son Carnaval** (Carnaval)
5. **Guide du Maracanã** (Football + lié au service Maracanã)

Toutes les autres catégories reçoivent 1 article "placeholder rédigé court" pour que le maillage tienne, plus des slots vides prêts à accueillir de nouveaux MDX sans refonte.

## 5. SEO technique

- `head()` par route : `title`, `description`, `canonical` (relatif), `og:*`, `twitter:*`. Home ne met pas d'`og:image`, chaque article/catégorie oui (leaf uniquement).
- JSON-LD via `head().scripts` : Organization (root), Article + BreadcrumbList (article), FAQPage (si FAQ), CollectionPage (catégorie).
- `sitemap.xml` en server route qui lit le registry d'articles et les catégories.
- `robots.txt` public : `Allow: /` (pas de `Sitemap:` tant que domaine non défini).
- URLs courtes lisibles : `/blog/ipanema-guide-complet`, `/blog/carnaval-rio`, etc.
- H1 unique, hiérarchie H2/H3/H4 stricte, `alt` obligatoires, `aria-*` sur nav/accordéons.

## 6. Performance

- Images WebP via `vite-imagetools`, `loading="lazy"`, `srcset` responsive, dimensions explicites → LCP/CLS OK.
- Preload de l'image hero de la home et de chaque article (via `head().links`).
- Fonts en `preconnect` + `display=swap`.
- Pas de JS lourd : recherche = filtre client sur JSON pré-buildé (index léger).
- Code-split naturel via TanStack Router (route-based).

## 7. Détails techniques

- **Stockage articles** : fichiers MDX dans `src/content/blog/*.mdx` + frontmatter Zod-validé (title, slug, description, category, tags, date, readingTime, hero, author, ogImage, relatedServices[]).
- Registry auto-généré via `import.meta.glob('/src/content/blog/*.mdx', { eager: true })` → fonctions `getAllPosts()`, `getPostBySlug()`, `getPostsByCategory()`, `getRelatedPosts()`.
- MDX rendu via `@mdx-js/rollup` (plugin Vite) avec composants custom (`ConseilJeitinho`, `AEviter`, `BonASavoir`, `FAQ`, `Image`).
- Sommaire auto : plugin remark `remark-toc` + heading IDs via `rehype-slug` + `rehype-autolink-headings`.
- Recherche : index Fuse.js buildé au chargement du hub (léger, ~toutes les entrées titre/description/tags).
- Reading time via `reading-time`.
- Toutes les data côté serveur/SSG — pas de Lovable Cloud (fichiers dans le repo comme demandé).

## 8. Ce que je ne fais pas dans ce lot

- Backend/CMS (Lovable Cloud) — articles en repo comme choisi.
- Commentaires activés — structure prête, désactivée.
- Vraie génération des visuels de tous les articles : je génère 5-6 images hero (home Rio, home blog, 3-5 articles vitrine, catégories principales), les autres catégories utilisent un fallback pattern DA-cohérent.

## 9. Ordre d'exécution

1. Tokens DA + fonts + composants UI de base (Button, Badge, Hero, Section, Card, Newsletter, CTA).
2. Header + Footer + Home site + pages statiques minimales.
3. Système MDX + registry + types.
4. Homepage blog + page catégorie + page article + composants encadrés.
5. Rédaction des 5 articles vitrine + articles courts pour les autres catégories.
6. Sitemap + robots + RSS + JSON-LD + meta par route.
7. Images hero (imagegen) + optimisation.
8. Passage QA : responsive, contraste, Lighthouse, liens internes.
