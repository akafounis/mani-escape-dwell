import { useCallback, useEffect, useRef, useState } from "react";
import { stay } from "@/content/stay";
import { useReveal } from "@/lib/reveal";
import { Reveal } from "@/components/Reveal";

function GalleryImage({
  index,
  onOpen,
}: {
  index: number;
  onOpen: (i: number) => void;
}) {
  const photo = stay.photos[index];
  const { ref, visible } = useReveal<HTMLButtonElement>(0.1);
  const tall = photo.h > photo.w;

  return (
    <button
      ref={ref}
      type="button"
      onClick={() => onOpen(index)}
      data-visible={visible}
      aria-label={`Open photo: ${photo.alt}`}
      className="reveal-image group relative block w-full overflow-hidden bg-muted"
    >
      <img
        src={photo.src}
        alt={photo.alt}
        width={photo.w}
        height={photo.h}
        loading="lazy"
        className={`w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03] ${
          tall ? "aspect-[3/4]" : "aspect-[4/3]"
        }`}
      />
    </button>
  );
}

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const touchStart = useRef<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((direction: 1 | -1) => {
    setOpen((current) =>
      current === null ? current : (current + direction + stay.photos.length) % stay.photos.length,
    );
  }, []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close, step]);

  const active = open === null ? null : stay.photos[open];

  return (
    <section id="photos" className="px-3 pb-24 sm:px-6 md:pb-32">
      <div className="mx-auto max-w-6xl px-3 sm:px-4">
        <Reveal>
          <p className="eyebrow">Photographs</p>
        </Reveal>
      </div>

      <div className="mx-auto mt-8 grid max-w-6xl gap-3 sm:grid-cols-2 md:gap-4">
        <div className="grid gap-3 md:gap-4">
          <GalleryImage index={1} onOpen={setOpen} />
          <GalleryImage index={2} onOpen={setOpen} />
        </div>
        <div className="grid gap-3 md:gap-4 sm:pt-10">
          <GalleryImage index={3} onOpen={setOpen} />
          <GalleryImage index={4} onOpen={setOpen} />
        </div>
        <div className="sm:col-span-2">
          <GalleryImage index={5} onOpen={setOpen} />
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={close}
          onTouchStart={(e) => {
            touchStart.current = e.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={(e) => {
            const start = touchStart.current;
            const end = e.changedTouches[0]?.clientX ?? null;
            touchStart.current = null;
            if (start === null || end === null) return;
            const delta = end - start;
            if (Math.abs(delta) > 45) step(delta < 0 ? 1 : -1);
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 animate-in fade-in duration-300"
          style={{ backgroundColor: "color-mix(in oklab, var(--stone-deep) 94%, transparent)" }}
        >
          <img
            src={active.src}
            alt={active.alt}
            width={active.w}
            height={active.h}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[78svh] w-auto max-w-full object-contain"
          />

          <div
            className="mt-5 flex w-full max-w-md items-center justify-between text-xs tracking-[0.2em] uppercase"
            style={{ color: "color-mix(in oklab, var(--primary-foreground) 75%, transparent)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" onClick={() => step(-1)} className="px-3 py-2" aria-label="Previous photo">
              Prev
            </button>
            <span>
              {(open ?? 0) + 1} / {stay.photos.length}
            </span>
            <button type="button" onClick={() => step(1)} className="px-3 py-2" aria-label="Next photo">
              Next
            </button>
          </div>

          <button
            type="button"
            onClick={close}
            aria-label="Close photo viewer"
            className="absolute top-4 right-5 text-2xl leading-none"
            style={{ color: "var(--primary-foreground)" }}
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
}
