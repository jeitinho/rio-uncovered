# Fichiers à intégrer dans rio-uncovered

Tous les changements sont **non destructifs** : aucune URL existante ne change, aucun article existant n'est modifié.

## 1. Fichiers à remplacer tels quels

| Fichier fourni | Remplace |
|---|---|
| `categories.ts` | `src/content/categories.ts` |
| `index.ts` | `src/content/index.ts` |
| `SiteHeader.tsx` | `src/components/site/SiteHeader.tsx` |
| `SiteFooter.tsx` | `src/components/site/SiteFooter.tsx` |

## 2. Fichier à ajouter

| Fichier fourni | Nouvel emplacement |
|---|---|
| `pharmacies-a-rio.ts` | `src/content/articles/pharmacies-a-rio.ts` |

Pensez à remplacer l'image `hero` par une vraie photo (voir le commentaire `TODO` en haut du fichier) — le hero générique `hero-blog.jpg` est utilisé en attendant.

## 3. Ce que ça corrige / change

- **Bug corrigé** : `urca-guide-complet.ts` existait mais n'était jamais importé dans `index.ts` — l'article était invisible sur tout le site malgré son contenu déjà rédigé. Il est maintenant réintégré.
- **Nouvelle catégorie** : `vie-pratique-locale`, rattachée au nouveau pilier **Rio au quotidien** (avec Sécurité et Conseils pratiques).
- **5 piliers créés** dans `categories.ts` (`PILLARS`) : Découvrir Rio, Vivre carioca, Manger & sortir, Organiser son séjour, Rio au quotidien. Chaque catégorie existante a reçu un champ `pillar` — **aucun slug de catégorie n'a changé**, donc aucune URL cassée, aucun lien externe ou backlink affecté.
- **Navigation** : le dropdown "Catégories" et le lien "Articles" (qui menaient au même endroit) sont fusionnés en un seul dropdown "Explorer", maintenant organisé par pilier au lieu d'une grille à plat de 17 items.
- **Footer** : remplace le split arbitraire `CATEGORIES.slice(0,8)` / `.slice(8)` par un regroupement par pilier, avec le nom du pilier comme intitulé de colonne.
- **Premier article du cluster "vie pratique locale"** : `pharmacies-a-rio.ts`, signé `equipe-jeitinho`, avec FAQ (le schema `FAQPage` s'en sert automatiquement, aucune action requise).

## 4. Deux petites retouches de texte à faire à la main

Ces mentions de "17" sont maintenant fausses (18 catégories) — remplacez-les par une valeur dynamique :

**`src/routes/blog.index.tsx`**, ligne ~66 :
```diff
- <h2 className="mt-3 text-4xl md:text-5xl">17 <em>catégories.</em></h2>
+ <h2 className="mt-3 text-4xl md:text-5xl">{CATEGORIES.length} <em>catégories.</em></h2>
```

**`src/routes/index.tsx`**, ligne ~105 :
```diff
- Les 17 catégories <ArrowRight className="h-3.5 w-3.5" />
+ Les {CATEGORIES.length} catégories <ArrowRight className="h-3.5 w-3.5" />
```

## 5. Prochaines étapes (contenu)

Une fois ces fichiers intégrés et testés, je peux rédiger les prochains articles courts du cluster "vie pratique locale" au même format que `pharmacies-a-rio.ts`, prêts à déposer dans `src/content/articles/` + une ligne d'import dans `index.ts` :

1. Faire ses courses à Rio (supermarchés, feiras, quitandas)
2. Retirer de l'argent à Rio (distributeurs, sécurité)
3. Se soigner à Rio (pharmacies → cliniques → hôpitaux)
4. Laveries et pressings à Rio
5. Numéros d'urgence et adresses utiles
6. Les horaires "à la carioca" (article pilier du cluster, qui relie tous les précédents)

Dites-moi si vous voulez que je les écrive un par un ou tous à la suite.
