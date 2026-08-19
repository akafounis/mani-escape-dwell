import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Location } from "@/components/Location";
import { BookingForm } from "@/components/BookingForm";
import { StickyBookBar } from "@/components/StickyBookBar";
import { stay } from "@/content/stay";

const title = "Petra Studio — Stone studio apartment in Mani, Greece";
const description =
  "A minimal one-room stone studio above the sea in Mani, Greece. Private terrace, sea views, olive terraces — send a booking request directly to the owners.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <About />
      <Gallery />
      <Location />
      <BookingForm />

      <footer className="border-t border-border px-6 py-12 pb-28 text-center sm:px-10 md:pb-12">
        <p className="font-[family-name:var(--font-display)] text-2xl">{stay.name}</p>
        <p className="eyebrow mt-3">{stay.location}</p>
        <p className="mt-6 text-xs text-muted-foreground">
          {stay.phone} · {stay.email}
        </p>
      </footer>

      <StickyBookBar />
    </main>
  );
}
