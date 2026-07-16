// src/services/mediaApi.ts
const GOOGLE_MEDIA_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbyDWi_F3LhbV1XQb9R30Id-4klzmEbPwuE8a6h4RxOAQ5VZ704M56XXSq_Vt-9ELTjZog/exec";

export interface NewContentPayload {
  titre: string;
  slug: string;
  collection: string;
  pilier: string;
  type: string;
  seoTarget?: string;
}

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
        statut: "En rédaction"
      }),
    });
    return true;
  } catch (error) {
    console.error("Erreur de liaison Jeitinho Media OS:", error);
    return false;
  }
};