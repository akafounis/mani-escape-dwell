import hero from "@/assets/hero.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

/**
 * All copy, photography and contact details live here.
 * Replace the values below with the real ones — nothing else needs to change.
 */
export const stay = {
  name: "Petra Studio",
  location: "Mani, Peloponnese — Greece",
  tagline: "A one-room stone studio above the Messinian gulf",
  intro:
    "Built into the terraces of an old olive grove, the studio is a single quiet room of lime plaster, stone and linen — with a shaded terrace where the sea does most of the talking.",
  about: [
    "Petra Studio sleeps two. Everything is within a few steps: a linen-dressed bed, a small kitchen for morning coffee and evening figs, a shower cut from local stone, and a terrace that faces the water.",
    "Days here are slow by design. Swim from the pebble cove below before breakfast, drive fifteen minutes to a tower village for lunch, and come back for the hour when the mountains turn gold.",
  ],
  amenities: [
    "Sleeps 2 · king linen bed",
    "Private shaded terrace",
    "Sea and mountain view",
    "Kitchenette & filter coffee",
    "Stone rain shower",
    "Air conditioning",
    "Fast Wi-Fi",
    "Free parking at the gate",
    "Cove swim, 6 min walk",
  ],
  mapEmbedSrc:
    "https://www.google.com/maps?q=Areopoli,%20Mani,%20Greece&hl=en&z=11&output=embed",
  mapLink: "https://www.google.com/maps?q=Areopoli,+Mani,+Greece",
  locationNotes: [
    ["Nearest village", "Areopoli — 8 minutes by car"],
    ["Beach", "Pebble cove, 6 minutes on foot"],
    ["Airport", "Kalamata (KLX) — 1 h 20 min"],
  ] as const,
  phone: "+30 210 000 0000",
  email: "stay@petrastudio.gr",
  whatsapp: "302100000000",
  photos: [
    { src: hero, alt: "Stone studio and shaded terrace above the sea at golden hour", w: 1600, h: 1920 },
    { src: gallery1, alt: "Minimal interior with linen bed and arched plaster niche", w: 1408, h: 1056 },
    { src: gallery2, alt: "Olive branch in a ceramic jug on a stone window ledge facing the sea", w: 1056, h: 1408 },
    { src: gallery3, alt: "Terrace table for two under linen shade overlooking the coastline", w: 1408, h: 1056 },
    { src: gallery4, alt: "Small kitchenette with ceramics and brass tap", w: 1056, h: 1408 },
    { src: gallery5, alt: "Aerial view of the Mani coastline and tower village at sunset", w: 1408, h: 1056 },
  ],
} as const;

export type Photo = (typeof stay.photos)[number];
