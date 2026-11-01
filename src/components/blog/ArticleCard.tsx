import type { Article } from "@/content/types";
import { readingTime } from "@/content/types";
import { getCategoryIn } from "@/content/localized";
import { useLocale } from "@/i18n/locale";
import { formatDate } from "@/i18n/seo";
import { readingLabel } from "@/i18n/common";
import { LocaleLink } from "@/components/i18n/LocaleLink";

/** Carte d'article. `article` est déjà dans la langue de la page (voir getArticles). */
export function ArticleCard({ article, size = "md" }: { article: Article; size?: "sm" | "md" | "lg" }) {
  const locale = useLocale();
  const cat = getCategoryIn(article.category, locale);
  const isLg = size === "lg";
  return (
    <LocaleLink to="/{-$locale}/blog/$slug" params={{ slug: article.slug }} className="group block">
      <div className={`overflow-hidden rounded-[3px] bg-cream-deep/40 ${isLg ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
        <img
          src={article.hero}
          alt={article.heroAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        {cat && <p className="tracked-caps text-[10px] text-terracotta">{cat.name}</p>}
        <h3 className={`mt-2 leading-tight ${isLg ? "text-3xl" : "text-xl"}`}>{article.title}</h3>
        {isLg && <p className="mt-3 text-muted-foreground leading-relaxed line-clamp-2">{article.description}</p>}
        <p className="mt-3 text-xs text-muted-foreground">
          {formatDate(article.date, locale)} · {readingLabel(readingTime(article.sections), locale)}
        </p>
      </div>
    </LocaleLink>
  );
}
