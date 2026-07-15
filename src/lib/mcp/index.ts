import { defineMcp } from "@lovable.dev/mcp-js";
import listArticles from "./tools/list-articles";
import searchArticles from "./tools/search-articles";
import getArticle from "./tools/get-article";
import listCategories from "./tools/list-categories";
import listAuthors from "./tools/list-authors";

export default defineMcp({
  name: "jeitinho-blog-mcp",
  title: "Jeitinho — Blog Rio de Janeiro",
  version: "0.1.0",
  instructions:
    "Serveur MCP public du blog Jeitinho (média francophone sur Rio de Janeiro). Utilisez `list_articles` ou `search_articles` pour découvrir le contenu, `get_article` pour lire un article complet, `list_categories` et `list_authors` pour explorer la taxonomie.",
  tools: [listArticles, searchArticles, getArticle, listCategories, listAuthors],
});
