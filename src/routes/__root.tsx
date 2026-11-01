import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext, useRouter, useRouterState, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LocaleLink } from "@/components/i18n/LocaleLink";
import { LOCALE_HTML_TAG, localeFromPathname, localizedPath, type Locale } from "@/i18n/locale";

const OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/P49BNSJXTgReHSSiVmU5EKy19QM2/social-images/social-1783703089998-jeitinho-logo.webp";

const ERRORS: Record<Locale, { notFoundEyebrow: string; notFoundTitle: [string, string]; notFoundBody: string; home: string; errorEyebrow: string; errorTitle: [string, string]; errorBody: string; retry: string; homeShort: string }> = {
  fr: { notFoundEyebrow: "Erreur 404", notFoundTitle: ["Cette page ", "n'existe pas."], notFoundBody: "Elle a peut-être été déplacée, ou l'adresse est incorrecte.", home: "Retour à l'accueil", errorEyebrow: "Oups", errorTitle: ["Cette page ", "n'a pas chargé."], errorBody: "Un petit imprévu de notre côté. Essayez à nouveau ou revenez à l'accueil.", retry: "Réessayer", homeShort: "Accueil" },
  en: { notFoundEyebrow: "Error 404", notFoundTitle: ["This page ", "doesn't exist."], notFoundBody: "It may have moved, or the address may be wrong.", home: "Back to the homepage", errorEyebrow: "Oops", errorTitle: ["This page ", "didn't load."], errorBody: "A small hiccup on our side. Try again or head back to the homepage.", retry: "Try again", homeShort: "Home" },
  es: { notFoundEyebrow: "Error 404", notFoundTitle: ["Esta página ", "no existe."], notFoundBody: "Puede que se haya movido o que la dirección sea incorrecta.", home: "Volver al inicio", errorEyebrow: "Vaya", errorTitle: ["Esta página ", "no ha cargado."], errorBody: "Un pequeño imprevisto por nuestra parte. Vuelve a intentarlo o regresa al inicio.", retry: "Reintentar", homeShort: "Inicio" },
  pt: { notFoundEyebrow: "Erro 404", notFoundTitle: ["Esta página ", "não existe."], notFoundBody: "Talvez ela tenha mudado de lugar, ou o endereço esteja errado.", home: "Voltar para o início", errorEyebrow: "Ops", errorTitle: ["Esta página ", "não carregou."], errorBody: "Um pequeno imprevisto do nosso lado. Tente de novo ou volte para o início.", retry: "Tentar de novo", homeShort: "Início" },
  it: { notFoundEyebrow: "Errore 404", notFoundTitle: ["Questa pagina ", "non esiste."], notFoundBody: "Potrebbe essere stata spostata, oppure l'indirizzo non è corretto.", home: "Torna alla home", errorEyebrow: "Ops", errorTitle: ["Questa pagina ", "non si è caricata."], errorBody: "Un piccolo imprevisto da parte nostra. Riprova o torna alla home.", retry: "Riprova", homeShort: "Home" },
  de: { notFoundEyebrow: "Fehler 404", notFoundTitle: ["Diese Seite ", "gibt es nicht."], notFoundBody: "Vielleicht wurde sie verschoben, oder die Adresse ist falsch.", home: "Zurück zur Startseite", errorEyebrow: "Hoppla", errorTitle: ["Diese Seite ", "wurde nicht geladen."], errorBody: "Ein kleines Problem auf unserer Seite. Versuchen Sie es erneut oder kehren Sie zur Startseite zurück.", retry: "Erneut versuchen", homeShort: "Startseite" },
  ru: { notFoundEyebrow: "Ошибка 404", notFoundTitle: ["Такой страницы ", "не существует."], notFoundBody: "Возможно, её перенесли или адрес указан неверно.", home: "На главную", errorEyebrow: "Упс", errorTitle: ["Страница ", "не загрузилась."], errorBody: "Небольшая заминка с нашей стороны. Попробуйте ещё раз или вернитесь на главную.", retry: "Повторить", homeShort: "Главная" },
};

function usePathLocale(): Locale {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return localeFromPathname(pathname);
}

function NotFoundComponent() {
  const t = ERRORS[usePathLocale()];
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="max-w-md text-center">
          <p className="tracked-caps text-xs text-terracotta">{t.notFoundEyebrow}</p>
          <h1 className="mt-6 text-5xl">{t.notFoundTitle[0]}<em>{t.notFoundTitle[1]}</em></h1>
          <p className="mt-4 text-muted-foreground">{t.notFoundBody}</p>
          <LocaleLink to="/{-$locale}" className="mt-8 inline-flex items-center justify-center rounded-[3px] bg-primary px-6 py-3 tracked-caps text-xs text-primary-foreground hover:bg-terracotta-deep transition-colors">{t.home}</LocaleLink>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const locale = usePathLocale();
  const t = ERRORS[locale];
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="max-w-md text-center">
          <p className="tracked-caps text-xs text-terracotta">{t.errorEyebrow}</p>
          <h1 className="mt-6 text-4xl">{t.errorTitle[0]}<em>{t.errorTitle[1]}</em></h1>
          <p className="mt-4 text-muted-foreground">{t.errorBody}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button onClick={() => { router.invalidate(); reset(); }} className="rounded-[3px] bg-primary px-6 py-3 tracked-caps text-xs text-primary-foreground hover:bg-terracotta-deep transition-colors">{t.retry}</button>
            <a href={localizedPath("/", locale)} className="rounded-[3px] border border-ink px-6 py-3 tracked-caps text-xs text-foreground hover:bg-cream-deep transition-colors">{t.homeShort}</a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

// Le titre, la description, le canonical et les hreflang sont posés par chaque page,
// dans sa langue. Ici : uniquement ce qui est commun à toutes les langues.
export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Jeitinho — Rio de Janeiro" },
      { name: "author", content: "Jeitinho" },
      { property: "og:site_name", content: "Jeitinho" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#F6F2E9" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/og-jeitinho.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/og-jeitinho.png", type: "image/png" },
      { rel: "alternate", type: "application/rss+xml", title: "Le Guide Jeitinho", href: "/rss.xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,300;1,9..144,400&family=Inter:wght@400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Jeitinho Blog",
          description: "Rio de Janeiro guides, tips and interviews written by locals — in French, English, Spanish, Portuguese, Italian, German and Russian.",
          url: "https://blog.jeitinho.fr",
          email: "blog@jeitinho.fr",
          sameAs: ["https://www.instagram.com/jeitinho.fr", "https://jeitinho.fr"],
          areaServed: "Rio de Janeiro, Brazil",
          knowsLanguage: ["fr", "en", "es", "pt-BR", "it", "de", "ru"],
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
  const locale = usePathLocale();
  return (
    <html lang={LOCALE_HTML_TAG[locale]}>
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
