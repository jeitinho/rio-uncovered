import type { Category } from "@/content/categories";
import { getArticlesByCategoryIn } from "@/content/localized";
import { useLocale } from "@/i18n/locale";
import { articleCount } from "@/i18n/common";
import { LocaleLink } from "@/components/i18n/LocaleLink";

/** `category` est déjà dans la langue de la page (voir getCategoriesIn). */
export function CategoryCard({ category }: { category: Category }) {
  const locale = useLocale();
  const count = getArticlesByCategoryIn(category.slug, locale).length;
  return (
    <LocaleLink
      to="/{-$locale}/blog/categorie/$slug"
      params={{ slug: category.slug }}
      className="group block rounded-[3px] bg-cream-deep/50 p-6 hover:bg-cream-deep transition-colors"
    >
      <p className="tracked-caps text-[10px] text-terracotta">{articleCount(count, locale)}</p>
      <h3 className="mt-3 text-xl group-hover:text-terracotta transition-colors">{category.name}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">{category.intro}</p>
    </LocaleLink>
  );
}
