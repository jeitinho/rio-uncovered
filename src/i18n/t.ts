import { useLocale, type Locale } from "./locale";

/** Selects the current-locale entry from a `{ fr, en, es, pt }` dictionary defined next to a component. */
export function useDict<T>(dict: Record<Locale, T>): T {
  const locale = useLocale();
  return dict[locale];
}
