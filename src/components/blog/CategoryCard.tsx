import { Link } from "@tanstack/react-router";
import type { Category } from "@/content/categories";
import { getArticlesByCategory } from "@/content";

export function CategoryCard({ category }: { category: Category }) {
  const count = getArticlesByCategory(category.slug).length;
  return (
    <Link
      to="/blog/categorie/$slug"
      params={{ slug: category.slug }}
      className="group block rounded-[3px] bg-cream-deep/50 p-6 hover:bg-cream-deep transition-colors"
    >
      <p className="tracked-caps text-[10px] text-terracotta">{count} article{count > 1 ? "s" : ""}</p>
      <h3 className="mt-3 text-xl group-hover:text-terracotta transition-colors">{category.name}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">{category.intro}</p>
    </Link>
  );
}
