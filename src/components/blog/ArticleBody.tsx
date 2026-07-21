import type { Section } from "@/content/types";
import { slugifyHeading } from "@/content/types";
import { ConseilJeitinho, AEviter, BonASavoir } from "./Callouts";
import { FAQ } from "./FAQ";
import { RichText } from "./RichText";
import { autoLink } from "@/lib/interlink";

export function ArticleBody({ sections, currentSlug }: { sections: Section[]; currentSlug?: string }) {
  const exclude = currentSlug ? `/blog/${currentSlug}` : undefined;
  const link = (t: string) => t;
  return (
    <div className="prose-jeitinho">
      {sections.map((s, i) => {
        switch (s.type) {
          case "p":
            return <RichText key={i} as="p" content={link(s.text)} />;
          case "h2":
            return <h2 key={i} id={s.id ?? slugifyHeading(s.text)}>{s.text}</h2>;
          case "h3":
            return <h3 key={i} id={s.id ?? slugifyHeading(s.text)}>{s.text}</h3>;
          case "ul":
            return (
              <ul key={i}>
                {s.items.map((it, j) => <RichText key={j} as="li" content={link(it)} />)}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="my-4 space-y-2 counter-reset">
                {s.items.map((it, j) => (
                  <li key={j} className="pl-8 relative">
                    <span className="absolute left-0 top-0 tracked-caps text-xs text-terracotta">{String(j + 1).padStart(2, "0")}</span>
                    <RichText as="span" content={link(it)} />
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote key={i} className="my-8 border-l-2 border-terracotta pl-6 italic text-foreground/90">
                <RichText content={link(`« ${s.text} »`)} />
                {s.author && <footer className="mt-2 text-xs not-italic tracked-caps text-muted-foreground">— {s.author}</footer>}
              </blockquote>
            );
          case "conseil":
            return <ConseilJeitinho key={i} title={s.title}><RichText content={link(s.text ?? "")} /></ConseilJeitinho>;
          case "aeviter":
            return <AEviter key={i} title={s.title}><RichText content={link(s.text ?? "")} /></AEviter>;
          case "bonasavoir":
            return <BonASavoir key={i} title={s.title}><RichText content={link(s.text ?? "")} /></BonASavoir>;
          case "faq":
            return <FAQ key={i} items={s.items.map((it) => ({ q: it.q, a: link(it.a) }))} />;
          case "image":
            return (
              <figure key={i} className="my-8">
                <img
                  src={s.src}
                  alt={s.alt}
                  loading={s.priority ? "eager" : "lazy"}
                  {...(s.priority ? { fetchPriority: "high" as const } : {})}
                  width={s.width}
                  height={s.height}
                  className="rounded-[3px] w-full h-auto"
                />
                {(s.caption || s.credit) && (
                  <figcaption className="mt-2 text-center text-xs text-muted-foreground">
                    {s.caption}
                    {s.caption && s.credit && " · "}
                    {s.credit && <span className="italic">© {s.credit}</span>}
                  </figcaption>
                )}
              </figure>
            );
          case "gallery":
            return (
              <div key={i} className="my-8 grid gap-3 sm:grid-cols-2">
                {s.images.map((img, j) => (
                  <figure key={j}>
                    <img src={img.src} alt={img.alt} loading="lazy" className="rounded-[3px] w-full h-auto object-cover aspect-[4/3]" />
                    {(img.caption || img.credit) && (
                      <figcaption className="mt-1.5 text-xs text-muted-foreground">
                        {img.caption}
                        {img.caption && img.credit && " · "}
                        {img.credit && <span className="italic">© {img.credit}</span>}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            );
        }
      })}
    </div>
  );
}
