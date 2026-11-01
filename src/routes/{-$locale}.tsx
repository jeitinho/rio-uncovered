import { createFileRoute, notFound, Outlet } from "@tanstack/react-router";
import { isLocale, DEFAULT_LOCALE } from "@/i18n/locale";

// Toutes les pages du blog vivent sous ce segment optionnel : /blog (français),
// /en/blog, /it/blog… Un premier segment qui n'est pas une langue connue → 404.
export const Route = createFileRoute("/{-$locale}")({
  beforeLoad: ({ params }) => {
    const raw = (params as { locale?: string }).locale;
    if (raw !== undefined && !isLocale(raw)) throw notFound();
    return { locale: raw ?? DEFAULT_LOCALE };
  },
  component: () => <Outlet />,
});
