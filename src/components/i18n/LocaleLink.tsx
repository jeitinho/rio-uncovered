import { Link, type LinkComponentProps } from "@tanstack/react-router";
import { useLocale, localeParam } from "@/i18n/locale";

/**
 * Drop-in replacement for `Link` that preserves the current language in the
 * target URL (e.g. staying on /en/... when navigating from an English page).
 * Every route lives under the optional `{-$locale}` segment, so merging this
 * param in works uniformly for any `to`.
 */
export function LocaleLink(props: LinkComponentProps) {
  const locale = useLocale();
  return (
    <Link
      {...props}
      params={{ ...localeParam(locale), ...(props.params as object | undefined) } as never}
    />
  );
}
