import { useState } from "react";
import { stay } from "@/content/stay";
import { Reveal } from "@/components/Reveal";

const fieldClass =
  "w-full border-b border-border bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

export function BookingForm() {
  const [sent, setSent] = useState(false);

  return (
    <section id="book" className="px-6 py-24 sm:px-10 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="eyebrow">Book your stay</p>
        </Reveal>

        {sent ? (
          <div className="mt-8 border border-border bg-card px-6 py-14 text-center sm:px-12">
            <p className="text-primary text-3xl" aria-hidden>
              ✓
            </p>
            <h2 className="mt-5 text-3xl sm:text-4xl">Your request is on its way</h2>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Thank you — we read every message ourselves and usually reply within a day with
              availability and the total for your dates.
            </p>
            <button
              type="button"
              onClick={() => setSent(false)}
              className="mt-8 text-xs tracking-[0.22em] text-primary uppercase underline underline-offset-8"
            >
              Send another request
            </button>
          </div>
        ) : (
          <>
            <Reveal delay={80}>
              <h2 className="mt-6 max-w-lg text-3xl leading-[1.15] sm:text-4xl">
                Tell us when you'd like to come
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                No instant booking, no fees. Send a short request and we'll confirm personally.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <form
                className="mt-10 grid gap-7 sm:grid-cols-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSent(true);
                }}
              >
                <label className="block">
                  <span className="eyebrow">Name</span>
                  <input required name="name" className={fieldClass} placeholder="Your name" />
                </label>
                <label className="block">
                  <span className="eyebrow">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    className={fieldClass}
                    placeholder="you@email.com"
                  />
                </label>
                <label className="block">
                  <span className="eyebrow">Arrival</span>
                  <input required type="date" name="arrival" className={fieldClass} />
                </label>
                <label className="block">
                  <span className="eyebrow">Departure</span>
                  <input required type="date" name="departure" className={fieldClass} />
                </label>
                <label className="block sm:col-span-2">
                  <span className="eyebrow">Guests</span>
                  <select required name="guests" defaultValue="2" className={fieldClass}>
                    <option value="1">1 guest</option>
                    <option value="2">2 guests</option>
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="eyebrow">Message</span>
                  <textarea
                    name="message"
                    rows={3}
                    className={`${fieldClass} resize-none`}
                    placeholder="Anything we should know?"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-2 bg-primary px-8 py-4 text-xs tracking-[0.22em] text-primary-foreground uppercase transition-opacity hover:opacity-90 sm:col-span-2"
                >
                  Send booking request
                </button>
              </form>
            </Reveal>
          </>
        )}

        <div className="hairline my-16" />

        <Reveal className="flex flex-wrap gap-3">
          <a
            href={`tel:${stay.phone.replace(/\s/g, "")}`}
            className="border border-border px-6 py-3.5 text-xs tracking-[0.18em] uppercase transition-colors hover:bg-accent"
          >
            Call
          </a>
          <a
            href={`mailto:${stay.email}`}
            className="border border-border px-6 py-3.5 text-xs tracking-[0.18em] uppercase transition-colors hover:bg-accent"
          >
            Email
          </a>
          <a
            href={`https://wa.me/${stay.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="border border-border px-6 py-3.5 text-xs tracking-[0.18em] uppercase transition-colors hover:bg-accent"
          >
            WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
