import { stay } from "@/content/stay";
import { Reveal } from "@/components/Reveal";

export function Location() {
  return (
    <section id="location" className="bg-secondary/60 px-6 py-24 sm:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow">Where you are</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-6 max-w-lg text-3xl leading-[1.15] sm:text-4xl">
            Deep Mani, between the olive terraces and the water
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-14">
          <Reveal delay={140}>
            <dl className="text-sm">
              {stay.locationNotes.map(([label, value]) => (
                <div key={label} className="border-b border-border/70 py-4">
                  <dt className="eyebrow">{label}</dt>
                  <dd className="mt-2">{value}</dd>
                </div>
              ))}
            </dl>
            <a
              href={stay.mapLink}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block text-xs tracking-[0.22em] text-primary uppercase underline underline-offset-8"
            >
              Open in Google Maps
            </a>
          </Reveal>

          <Reveal delay={200}>
            <div className="overflow-hidden border border-border">
              <iframe
                title={`Map of ${stay.name} in Mani, Greece`}
                src={stay.mapEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[320px] w-full md:h-[440px]"
                style={{ border: 0, filter: "saturate(0.72) contrast(1.02)" }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
