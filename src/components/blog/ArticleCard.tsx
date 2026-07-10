import { Link } from "@tanstack/react-router";
import type { Article } from "@/content/types";
import { getCategoryBySlug } from "@/content/categories";
import { readingTime } from "@/content/types";


const MONTHS_FR = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS_FR[m - 1]} ${y}`;
}

export function ArticleCard({ article, size = "md" }: { article: Article; size?: "sm" | "md" | "lg" }) {
  const cat = getCategoryBySlug(article.category);
  const isLg = size === "lg";
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: article.slug }}
      className="group block"
    >
      <div className={`overflow-hidden rounded-[3px] bg-cream-deep/40 ${isLg ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
        <img
          src={article.hero}
          alt={article.heroAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        {cat && (
          <p className="tracked-caps text-[10px] text-terracotta">{cat.name}</p>
        )}
        <h3 className={`mt-2 leading-tight ${isLg ? "text-3xl" : "text-xl"}`}>
          {article.title}
        </h3>
        {isLg && (
          <p className="mt-3 text-muted-foreground leading-relaxed line-clamp-2">
            {article.description}
          </p>
        )}
        <p className="mt-3 text-xs text-muted-foreground">
          {formatDate(article.date)} · {readingTime(article.sections)} min de lecture
        </p>
      </div>
    </Link>
  );
}
