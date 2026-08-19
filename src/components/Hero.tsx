import { stay } from "@/content/stay";
import heroImage from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImage}
        alt={`${stay.name} — stone studio above the sea in Mani, Greece`}
        width={1600}
        height={1920}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, color-mix(in oklab, var(--stone-deep) 78%, transparent) 0%, color-mix(in oklab, var(--stone-deep) 22%, transparent) 45%, color-mix(in oklab, var(--stone-deep) 26%, transparent) 100%)",
        }}
      />

      <div className="relative flex min-h-[100svh] flex-col justify-between px-6 pt-10 pb-24 sm:px-10 md:pb-16">
        <p
          className="eyebrow"
          style={{ color: "color-mix(in oklab, var(--primary-foreground) 78%, transparent)" }}
        >
          {stay.location}
        </p>

        <div className="max-w-2xl">
          <h1
            className="text-[3.25rem] leading-[0.95] sm:text-7xl md:text-8xl"
            style={{ color: "var(--primary-foreground)" }}
          >
            {stay.name}
          </h1>
          <p
            className="mt-5 max-w-md text-[0.95rem] leading-relaxed"
            style={{ color: "color-mix(in oklab, var(--primary-foreground) 86%, transparent)" }}
          >
            {stay.tagline}. {stay.intro}
          </p>

          <a
            href="#book"
            className="mt-9 inline-flex items-center gap-3 border px-7 py-3.5 text-xs tracking-[0.22em] uppercase transition-colors duration-500"
            style={{
              color: "var(--primary-foreground)",
              borderColor: "color-mix(in oklab, var(--primary-foreground) 55%, transparent)",
              backgroundColor: "color-mix(in oklab, var(--primary-foreground) 6%, transparent)",
            }}
          >
            Book your stay
            <span aria-hidden>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
