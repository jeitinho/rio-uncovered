import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-home.jpg";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { getFeatured, getGuides } from "@/content";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { ArrowRight, Heart, Compass, Users } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jeitinho — Découvrez Rio de Janeiro autrement" },
      { name: "description", content: "Conciergerie et expériences authentiques à Rio de Janeiro. Guides, itinéraires et carnet d'adresses écrits par des locaux passionnés." },
      { property: "og:title", content: "Jeitinho — Découvrez Rio autrement" },
      { property: "og:description", content: "Conciergerie et expériences authentiques à Rio de Janeiro." },
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
  const guides = getGuides().slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      {/* HERO */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Rio de Janeiro au coucher du soleil, vue sur la baie" className="h-full w-full object-cover" width={1920} height={1200} />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-32 md:py-44 min-h-[70vh] flex flex-col justify-end">
          <p className="tracked-caps text-[11px] text-peach">Brésil · Expériences · Conciergerie</p>
          <h1 className="mt-5 max-w-3xl text-5xl md:text-7xl leading-[1.05] text-cream">
            Découvrez le Brésil <em className="italic font-light text-peach">autrement.</em>
          </h1>
          <p className="mt-6 max-w-xl text-cream/85 text-lg leading-relaxed">
            Conciergerie et expériences sur mesure à Rio de Janeiro, imaginées par des locaux passionnés.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact" className="rounded-[3px] bg-primary px-7 py-4 tracked-caps text-xs text-primary-foreground hover:bg-terracotta-deep transition-colors">
              Trouver un Jeitinho →
            </Link>
            <Link to="/experiences" className="rounded-[3px] border border-cream/50 px-7 py-4 tracked-caps text-xs text-cream hover:bg-cream/10 transition-colors">
              Explorer les expériences
            </Link>
          </div>
        </div>
      </section>

      {/* PITCH */}
      <section className="mx-auto max-w-4xl px-5 md:px-8 py-24 md:py-32 text-center">
        <p className="tracked-caps text-[10px] text-terracotta">Notre approche</p>
        <p className="mt-6 text-2xl md:text-3xl leading-relaxed">
          Nous sommes des locaux passionnés. Nous ne vendons pas Rio comme une carte postale — nous vous ouvrons la porte de <em className="italic text-terracotta">notre</em> ville.
        </p>
      </section>

      {/* REASSURANCE */}
      <section className="border-y border-border/60 bg-cream-deep/40">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 grid gap-10 md:grid-cols-3">
          {[
            { icon: Heart, title: "Expertise locale", text: "Nés à Rio ou installés depuis dix ans, nous vivons chaque adresse que nous conseillons." },
            { icon: Compass, title: "Accompagnement personnalisé", text: "Chaque voyage est un carnet unique, jamais un package. On construit avec vous, pas pour vous." },
            { icon: Users, title: "Expériences authentiques", text: "Aucun partenariat commercial imposé. Nos recommandations sont celles qu'on ferait à nos amis." },
          ].map((r) => (
            <div key={r.title}>
              <r.icon className="h-5 w-5 text-terracotta" />
              <h3 className="mt-4 text-xl">{r.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GUIDE JEITINHO CTA */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="tracked-caps text-[10px] text-terracotta">Le Guide Jeitinho</p>
            <h2 className="mt-3 text-4xl md:text-5xl">
              Nos meilleurs conseils, <em>en libre accès.</em>
            </h2>
          </div>
          <Link to="/blog" className="inline-flex items-center gap-2 tracked-caps text-[11px] text-terracotta hover:gap-3 transition-all">
            Voir tous les articles <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {featured.map((a) => <ArticleCard key={a.slug} article={a} />)}
        </div>
      </section>

      {/* GUIDES PILIERS */}
      <section className="bg-cream-deep/30">
        <div className="mx-auto max-w-7xl px-5 md:px-8 py-20">
          <p className="tracked-caps text-[10px] text-terracotta">Guides incontournables</p>
          <h2 className="mt-3 text-3xl md:text-4xl">Les <em>grands guides.</em></h2>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {guides.map((g) => (
              <Link key={g.slug} to="/blog/$slug" params={{ slug: g.slug }} className="group block">
                <div className="aspect-[4/5] overflow-hidden rounded-[3px]">
                  <img src={g.hero} alt={g.heroAlt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="mt-4 text-lg leading-tight group-hover:text-terracotta transition-colors">{g.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
