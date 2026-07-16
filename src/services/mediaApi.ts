// src/services/mediaApi.ts
import { ARTICLES } from "../content/index"; 

export interface NewContentPayload {
  titre: string;
  slug: string;
  collection: string;
  pilier: string;
  type: string;
  seoTarget?: string;
  auteur?: string;
}

const GOOGLE_MEDIA_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbyDWi_F3LhbV1XQb9R30Id-4klzmEbPwuE8a6h4RxOAQ5VZ704M56XXSq_Vt-9ELTjZog/exec";

/**
 * Envoie un article vers le Google Sheets
 */
export const publishToMediaOS = async (payload: NewContentPayload): Promise<boolean> => {
  try {
    await fetch(GOOGLE_MEDIA_WEBHOOK_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...payload,
        canal: "Blog",
        statut: "Publié" 
      }),
    });
    return true;
  } catch (error) {
    console.error("Erreur de liaison Jeitinho Media OS:", error);
    return false;
  }
};

/**
 * Synchronise automatiquement TOUS les articles locaux du code vers le Google Sheets.
 */
export const syncAllLocalArticlesWithSheets = async () => {
  const syncedSlugs = JSON.parse(localStorage.getItem("jeitinho_synced_articles") || "[]");

  console.log("🔄 Lancement de la synchronisation automatique des articles...");

  for (const article of ARTICLES) { 
    const slug = article.slug || "";
    
    if (slug && !syncedSlugs.includes(slug)) {
      console.log(`📤 Synchro en temps réel de : "${article.title}"`);
      
      // Récupération et formatage propre de l'auteur
      const rawAuthor = (article as any).author || (article as any).auteur || "";
      let auteurFormate = "Équipe Jeitinho"; 

      const authorClean = rawAuthor.toLowerCase().trim();
      if (authorClean.includes("rafael")) {
        auteurFormate = "Rafael";
      } else if (authorClean.includes("lili")) {
        auteurFormate = "Lili";
      } else if (authorClean.includes("charline")) {
        auteurFormate = "Charline";
      }

      const success = await publishToMediaOS({
        titre: article.title || "Sans titre",
        slug: slug,
        collection: article.category || "Les Quartiers",
        pilier: "Tourisme",
        type: "Article",
        seoTarget: (article as any).seoTarget || "",
        auteur: auteurFormate
      });

      if (success) {
        syncedSlugs.push(slug);
        localStorage.setItem("jeitinho_synced_articles", JSON.stringify(syncedSlugs));
      }
    }
  }
  console.log("✅ Tous les articles du site sont synchronisés avec le Media OS !");
};