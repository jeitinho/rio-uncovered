import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CATEGORIES } from "@/content/categories";
import { getAllArticles, getFeatured, getPopular, getGuides } from "@/content";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { CategoryCard } from "@/components/blog/CategoryCard";
import { BlogSearch } from "@/components/blog/BlogSearch";
import { Newsletter } from "@/components/blog/Newsletter";
import heroImg from "@/assets/hero-blog.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Le Guide Jeitinho — Blog sur Rio de Janeiro" },
      { name: "description", content: "Le guide francophone de référence sur Rio : quartiers, activités, Carnaval, gastronomie. Écrit par des locaux." },
      { property: "og:title", content: "Le Guide Jeitinho — Blog sur Rio de Janeiro" },
      { property: "og:description", content: "Guides, itinéraires, adresses. Rio par des locaux." },
      { property: "og:url", content: "/blog" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/blog" },
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" } as never,
    ],
  }),
  component: BlogHome,
});

function BlogHome() {
  const featured = getFeatured();
  const latest = getAllArticles().slice(0, 6);
  const popular = getPopular().slice(0, 4);
  const guides = getGuides().slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* HERO */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Rio de Janeiro" className="h-full w-full object-cover" width={1920} height={1000} />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="mx-auto max-w-5xl px-5 md:px-8 py-32 md:py-40 text-center">
          <p className="tracked-caps text-[11px] text-peach">Le Guide Jeitinho</p>
          <h1 className="mt-5 text-5xl md:text-7xl text-cream leading-[1.05]">
            Les meilleurs conseils pour <em className="italic font-light text-peach">découvrir Rio autrement.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-cream/85 text-lg">
            Guides, itinéraires, adresses testées. Sans langue de bois, par des locaux passionnés.
          </p>
          <div className="mx-auto mt-10 max-w-xl">
            <BlogSearch />
          </div>
        </div>
      </section>

      {/* CATÉGORIES */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="tracked-caps text-[10px] text-terracotta">Explorer</p>
            <h2 className="mt-3 text-4xl md:text-5xl">17 <em>catégories.</em></h2>
          </div>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {CATEGORIES.map((c) => <CategoryCard key={c.slug} category={c} />)}
        </div>
      </section>

      {/* À LA UNE */}
      {featured.length > 0 && (
        <section className="bg-cream-deep/30">
          <div className="mx-auto max-w-7xl px-5 md:px-8 py-20">
            <p className="tracked-caps text-[10px] text-terracotta">À la Une</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Nos <em>indispensables.</em></h2>
            <div className="mt-10 grid gap-10 md:grid-cols-3">
              {featured.slice(0, 3).map((a) => <ArticleCard key={a.slug} article={a} size="lg" />)}
            </div>
          </div>
        </section>
      )}

      {/* DERNIERS ARTICLES */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="tracked-caps text-[10px] text-terracotta">Récent</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Derniers <em>articles.</em></h2>
          </div>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((a) => <ArticleCard key={a.slug} article={a} />)}
        </div>
      </section>

      {/* POPULAIRES */}
      {popular.length > 0 && (
        <section className="bg-cream-deep/30">
          <div className="mx-auto max-w-7xl px-5 md:px-8 py-20">
            <p className="tracked-caps text-[10px] text-terracotta">Populaires</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Les plus <em>lus.</em></h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {popular.map((a) => <ArticleCard key={a.slug} article={a} />)}
            </div>
          </div>
        </section>
      )}

      {/* GUIDES INCONTOURNABLES */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <p className="tracked-caps text-[10px] text-terracotta">Guides piliers</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Les <em>incontournables.</em></h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 tracked-caps text-[11px] text-terracotta hover:gap-3 transition-all">
            Voir tout <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {guides.map((g) => <ArticleCard key={g.slug} article={g} />)}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="mx-auto max-w-4xl px-5 md:px-8 pb-20">
        <Newsletter />
      </section>

      <SiteFooter />
    </div>
  );
}
