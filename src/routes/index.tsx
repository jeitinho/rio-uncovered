import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-home.jpg";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { getAllArticles, getFeatured, getGuides, getPopular } from "@/content";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { CategoryCard } from "@/components/blog/CategoryCard";
import { BlogSearch } from "@/components/blog/BlogSearch";
import { Newsletter } from "@/components/blog/Newsletter";
import { CATEGORIES } from "@/content/categories";
import { ArrowRight, BookOpen, MessageCircle, Users } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jeitinho — Le blog francophone sur Rio de Janeiro" },
      { name: "description", content: "Conseils, histoires, interviews et carnet d'adresses sur Rio de Janeiro. Écrit par des locaux passionnés." },
      { property: "og:title", content: "Jeitinho — Le blog francophone sur Rio de Janeiro" },
      { property: "og:description", content: "Conseils, histoires, interviews et carnet d'adresses sur Rio de Janeiro. Écrit par des locaux passionnés." },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" } as never,
    ],
  }),
  component: Home,
});

function Home() {
  const featured = getFeatured().slice(0, 3);
  const latest = getAllArticles().slice(0, 6);
  const popular = getPopular().slice(0, 4);
  const guides = getGuides().slice(0, 4);
  const previewCats = CATEGORIES.slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* HERO */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Rio de Janeiro au coucher du soleil" className="h-full w-full object-cover" width={1920} height={1200} />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="mx-auto max-w-5xl px-5 md:px-8 py-28 md:py-40 text-center">
          <h1 className="text-5xl md:text-7xl leading-[1.05] text-cream">

            Rio de Janeiro <em className="italic font-light text-peach">raconté par des locaux.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-cream/85 text-lg leading-relaxed">
            Conseils, histoires, reviews, interviews et carnet d'adresses. Le guide francophone de référence sur Rio.
          </p>
          <div className="mx-auto mt-10 max-w-xl">
            <BlogSearch />
          </div>
        </div>
      </section>

      {/* PITCH — 3 piliers éditoriaux */}
      <section className="border-y border-border/60 bg-cream-deep/40">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 grid gap-10 md:grid-cols-3">
          {[
            { icon: BookOpen, title: "Conseils & guides", text: "Guides détaillés, itinéraires testés, conseils pratiques. Tout ce qu'on aurait aimé lire avant notre premier séjour." },
            { icon: Users, title: "Histoires & interviews", text: "Rencontres avec des cariocas, portraits d'artisans, histoires de quartiers. Rio par celles et ceux qui la font." },
            { icon: MessageCircle, title: "Reviews & partenariats", text: "Restaurants, hôtels, expériences : nos avis honnêtes, sans complaisance. Nos partenariats sont toujours signalés." },
          ].map((r) => (
            <div key={r.title}>
              <r.icon className="h-5 w-5 text-terracotta" />
              <h2 className="mt-4 text-xl">{r.title}</h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* À LA UNE */}
      {featured.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <p className="tracked-caps text-[10px] text-terracotta">À la Une</p>
              <h2 className="mt-3 text-4xl md:text-5xl">Nos <em>indispensables.</em></h2>
            </div>
            <Link to="/blog" className="inline-flex items-center gap-2 tracked-caps text-[11px] text-terracotta hover:gap-3 transition-all">
              Tous les articles <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {featured.map((a) => <ArticleCard key={a.slug} article={a} />)}
          </div>
        </section>
      )}

      {/* CATÉGORIES */}
      <section className="bg-cream-deep/30">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-24">
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <p className="tracked-caps text-[10px] text-terracotta">Explorer</p>
              <h2 className="mt-3 text-4xl md:text-5xl">Par <em>thématique.</em></h2>
            </div>
            <Link to="/blog" className="inline-flex items-center gap-2 tracked-caps text-[11px] text-terracotta hover:gap-3 transition-all">
              Les 17 catégories <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {previewCats.map((c) => <CategoryCard key={c.slug} category={c} />)}
          </div>
        </div>
      </section>

      {/* DERNIERS */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
        <p className="tracked-caps text-[10px] text-terracotta">Récent</p>
        <h2 className="mt-3 text-4xl md:text-5xl">Derniers <em>articles.</em></h2>
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

      {/* GUIDES PILIERS */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
        <p className="tracked-caps text-[10px] text-terracotta">Guides piliers</p>
        <h2 className="mt-3 text-4xl md:text-5xl">Les <em>grands guides.</em></h2>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {guides.map((g) => (
            <Link key={g.slug} to="/blog/$slug" params={{ slug: g.slug }} className="group block">
              <div className="aspect-[4/5] overflow-hidden rounded-[3px]">
                <img src={g.hero} alt={g.heroAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h3 className="mt-4 text-lg leading-tight group-hover:text-terracotta transition-colors">{g.title}</h3>
            </Link>
          ))}
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
