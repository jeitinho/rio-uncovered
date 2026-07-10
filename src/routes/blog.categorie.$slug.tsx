import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { getCategoryBySlug, CATEGORIES } from "@/content/categories";
import { getArticlesByCategory } from "@/content";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { Breadcrumb } from "@/components/blog/Breadcrumb";
import { FAQ } from "@/components/blog/FAQ";

export const Route = createFileRoute("/blog/categorie/$slug")({
  loader: ({ params }) => {
    const c = getCategoryBySlug(params.slug);
    if (!c) throw notFound();
    return { category: c };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Catégorie introuvable" }, { name: "robots", content: "noindex" }] };
    const c = loaderData.category;
    const url = `/blog/categorie/${params.slug}`;
    return {
      meta: [
        { title: `${c.title} — Le Guide Jeitinho` },
        { name: "description", content: c.description },
        { property: "og:title", content: c.title },
        { property: "og:description", content: c.description },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: c.title,
            description: c.description,
            inLanguage: "fr",
          }),
        },
      ],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const articles = getArticlesByCategory(category.slug);
  const otherCats = CATEGORIES.filter((c) => c.slug !== category.slug).slice(0, 6);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border/60 bg-cream-deep/30">
          <div className="mx-auto max-w-5xl px-5 md:px-8 py-16 md:py-24">
            <Breadcrumb items={[
              { label: "Accueil", to: "/" },
              { label: "Le Guide", to: "/blog" },
              { label: category.name },
            ]} />
            <p className="mt-8 tracked-caps text-[10px] text-terracotta">Catégorie</p>
            <h1 className="mt-3 text-5xl md:text-6xl max-w-3xl">{category.name}</h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">{category.intro}</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
          {articles.length === 0 ? (
            <p className="text-muted-foreground">De nouveaux articles arrivent bientôt dans cette catégorie.</p>
          ) : (
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((a) => <ArticleCard key={a.slug} article={a} />)}
            </div>
          )}
        </section>

        {category.faq && <div className="mx-auto max-w-3xl px-5 md:px-8 pb-16"><FAQ items={category.faq} /></div>}

        <section className="border-t border-border/60 bg-cream-deep/30">
          <div className="mx-auto max-w-7xl px-5 md:px-8 py-16">
            <p className="tracked-caps text-[10px] text-terracotta">Explorer aussi</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Autres <em>catégories.</em></h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {otherCats.map((c) => (
                <Link
                  key={c.slug}
                  to="/blog/categorie/$slug"
                  params={{ slug: c.slug }}
                  className="rounded-full border border-border bg-card px-4 py-2 tracked-caps text-[10px] text-foreground hover:border-terracotta hover:text-terracotta transition-colors"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
