import React, { useState } from "react";
import { publishToMediaOS } from "../services/mediaApi";

export const ContentCreator: React.FC = () => {
  const [titre, setTitre] = useState("");
  const [slug, setSlug] = useState("");
  const [collection, setCollection] = useState("Rio Secret");
  const [pilier, setPilier] = useState("Insolite");
  const [type, setType] = useState("Article");
  const [seoTarget, setSeoTarget] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSlugify = (text: string) => {
    setTitre(text);
    setSlug(text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, ""));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    const success = await publishToMediaOS({
      titre,
      slug,
      collection,
      pilier,
      type,
      seoTarget,
      auteur: "Équipe Édito"
    });

    setIsSubmitting(false);
    if (success) {
      setIsSuccess(true);
      setTitre("");
      setSlug("");
      setSeoTarget("");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 rounded-lg border border-[#221E1A] bg-[#F6F2E9] font-sans">
      <h2 className="text-2xl font-bold text-[#221E1A] mb-1 tracking-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
        CRÉER UN CONTENU
      </h2>
      <p className="text-xs italic text-[#B15D36] mb-6 tracking-wider uppercase">JEITINHO MEDIA OS</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-[#221E1A] uppercase tracking-wider mb-1">Titre de l'article</label>
          <input 
            type="text" 
            value={titre} 
            onChange={(e) => handleSlugify(e.target.value)}
            required
            className="w-full p-3 bg-white border border-[#221E1A] text-[#221E1A] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#B15D36]"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-[#221E1A] uppercase tracking-wider mb-1">Slug URL</label>
          <input 
            type="text" 
            value={slug} 
            onChange={(e) => setSlug(e.target.value)}
            required
            className="w-full p-3 bg-white border border-[#221E1A] text-[#221E1A] rounded-sm focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-[#221E1A] uppercase tracking-wider mb-1">Collection</label>
            <select 
              value={collection} 
              onChange={(e) => setCollection(e.target.value)}
              className="w-full p-3 bg-white border border-[#221E1A] text-[#221E1A] rounded-sm focus:outline-none"
            >
              <option value="Les Quartiers">Les Quartiers</option>
              <option value="Rio Secret">Rio Secret</option>
              <option value="Rio Expliqué">Rio Expliqué</option>
              <option value="Une journée à...">Une journée à...</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold text-[#221E1A] uppercase tracking-wider mb-1">Pilier</label>
            <input 
              type="text" 
              value={pilier} 
              onChange={(e) => setPilier(e.target.value)}
              className="w-full p-3 bg-white border border-[#221E1A] text-[#221E1A] rounded-sm focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#221E1A] uppercase tracking-wider mb-1">Mot-clé principal SEO</label>
          <input 
            type="text" 
            value={seoTarget} 
            onChange={(e) => setSeoTarget(e.target.value)}
            placeholder="ex: que faire a copacabana"
            className="w-full p-3 bg-white border border-[#221E1A] text-[#221E1A] rounded-sm focus:outline-none"
          />
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full py-4 bg-[#B15D36] text-white font-bold uppercase text-xs tracking-widest rounded-sm hover:opacity-90 transition-opacity duration-200"
        >
          {isSubmitting ? "ENVOI VERS LE MEDIA OS..." : "SYNCHRONISER ET PLANIFIER →"}
        </button>

        {isSuccess && (
          <div className="p-3 bg-[#D5E8D4] text-[#274E13] text-xs font-semibold text-center uppercase tracking-wider rounded-sm">
            ✓ Synchronisé avec succès dans JEITINHO MEDIA OS !
          </div>
        )}
      </form>
    </div>
  );
};