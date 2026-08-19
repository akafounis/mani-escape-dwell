import { useEffect, useState } from "react";
import { stay } from "@/content/stay";

export function StickyBookBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.7;
      const book = document.getElementById("book");
      const nearForm = book ? book.getBoundingClientRect().top < window.innerHeight * 0.85 : false;
      setShow(past && !nearForm);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur transition-transform duration-500 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm">{stay.name}</p>
          <p className="truncate text-[0.7rem] text-muted-foreground">{stay.location}</p>
        </div>
        <a
          href="#book"
          className="bg-primary px-6 py-3 text-[0.7rem] tracking-[0.18em] text-primary-foreground uppercase"
        >
          Book
        </a>
      </div>
    </div>
  );
}
