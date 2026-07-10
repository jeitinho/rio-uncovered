import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="max-w-md text-center">
          <p className="tracked-caps text-xs text-terracotta">Erreur 404</p>
          <h1 className="mt-6 text-5xl">Cette page <em>n'existe pas.</em></h1>
          <p className="mt-4 text-muted-foreground">
            Elle a peut-être été déplacée, ou l'adresse est incorrecte.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center justify-center rounded-[3px] bg-primary px-6 py-3 tracked-caps text-xs text-primary-foreground hover:bg-terracotta-deep transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="max-w-md text-center">
          <p className="tracked-caps text-xs text-terracotta">Oups</p>
          <h1 className="mt-6 text-4xl">Cette page <em>n'a pas chargé.</em></h1>
          <p className="mt-4 text-muted-foreground">
            Un petit imprévu de notre côté. Essayez à nouveau ou revenez à l'accueil.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => { router.invalidate(); reset(); }}
              className="rounded-[3px] bg-primary px-6 py-3 tracked-caps text-xs text-primary-foreground hover:bg-terracotta-deep transition-colors"
            >
              Réessayer
            </button>
            <a
              href="/"
              className="rounded-[3px] border border-ink px-6 py-3 tracked-caps text-xs text-foreground hover:bg-cream-deep transition-colors"
            >
              Accueil
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Jeitinho — Le blog francophone sur Rio de Janeiro" },
      { name: "description", content: "Conseils, guides, histoires, reviews et interviews sur Rio de Janeiro. Le guide francophone de référence, écrit par des locaux passionnés." },
      { name: "author", content: "Jeitinho" },
      { property: "og:site_name", content: "Jeitinho" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_FR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#F6F2E9" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,300;1,9..144,400&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Jeitinho Blog",
          description: "Blog francophone sur Rio de Janeiro : conseils, guides, interviews par des locaux.",
          url: "https://www.jeitinho.fr",
          areaServed: "Rio de Janeiro, Brésil",
          inLanguage: "fr",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
