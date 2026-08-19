import { stay } from "@/content/stay";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24 sm:px-10 md:py-36">
      <Reveal>
        <p className="eyebrow">The studio</p>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="mt-6 max-w-xl text-3xl leading-[1.15] sm:text-4xl md:text-5xl">
          {stay.tagline}
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-16">
        <div className="space-y-5 text-[0.95rem] leading-[1.85] text-muted-foreground">
          {stay.about.map((paragraph, i) => (
            <Reveal key={i} delay={120 + i * 90} as="p">
              {paragraph}
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="eyebrow">In the room</p>
          <ul className="mt-5 space-y-3 text-sm">
            {stay.amenities.map((item) => (
              <li key={item} className="flex items-baseline gap-3 border-b border-border/70 pb-3">
                <span className="text-primary" aria-hidden>
                  —
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
