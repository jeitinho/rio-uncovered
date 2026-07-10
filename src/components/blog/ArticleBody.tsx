import type { Section } from "@/content/types";
import { slugifyHeading } from "@/content/types";
import { ConseilJeitinho, AEviter, BonASavoir } from "./Callouts";
import { FAQ } from "./FAQ";

export function ArticleBody({ sections }: { sections: Section[] }) {
  return (
    <div className="prose-jeitinho">
      {sections.map((s, i) => {
        switch (s.type) {
          case "p":
            return <p key={i}>{s.text}</p>;
          case "h2":
            return <h2 key={i} id={s.id ?? slugifyHeading(s.text)}>{s.text}</h2>;
          case "h3":
            return <h3 key={i} id={s.id ?? slugifyHeading(s.text)}>{s.text}</h3>;
          case "ul":
            return <ul key={i}>{s.items.map((it, j) => <li key={j}>{it}</li>)}</ul>;
          case "ol":
            return (
              <ol key={i} className="my-4 space-y-2 counter-reset">
                {s.items.map((it, j) => (
                  <li key={j} className="pl-8 relative">
                    <span className="absolute left-0 top-0 tracked-caps text-xs text-terracotta">{String(j + 1).padStart(2, "0")}</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote key={i} className="my-8 border-l-2 border-terracotta pl-6 italic text-foreground/90">
                « {s.text} »{s.author && <footer className="mt-2 text-xs not-italic tracked-caps text-muted-foreground">— {s.author}</footer>}
              </blockquote>
            );
          case "conseil":
            return <ConseilJeitinho key={i} title={s.title}>{s.text}</ConseilJeitinho>;
          case "aeviter":
            return <AEviter key={i} title={s.title}>{s.text}</AEviter>;
          case "bonasavoir":
            return <BonASavoir key={i} title={s.title}>{s.text}</BonASavoir>;
          case "faq":
            return <FAQ key={i} items={s.items} />;
          case "image":
            return (
              <figure key={i} className="my-8">
                <img src={s.src} alt={s.alt} loading="lazy" className="rounded-[3px]" />
                {s.caption && <figcaption className="mt-2 text-center text-xs text-muted-foreground">{s.caption}</figcaption>}
              </figure>
            );
        }
      })}
    </div>
  );
}
