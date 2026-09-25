"use client";

import { useEffect } from "react";

// Scroll animace bez knihovny: prvky s [data-reveal] dostanou [data-visible] při vstupu do viewportu.
// Skrytý výchozí stav platí jen pod html[data-rs-reveal], který se nastaví až zde —
// bez JS nebo při prefers-reduced-motion je obsah vždy vidět.
export function ReefSenseReveal() {
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      return;
    }

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    // co je už vidět při načtení, neschovávej (žádné probliknutí)
    for (const el of elements) {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) el.dataset.visible = "true";
    }
    root.dataset.rsReveal = "";

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.visible = "true";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 }
    );
    for (const el of elements) if (!el.dataset.visible) observer.observe(el);

    return () => {
      observer.disconnect();
      delete root.dataset.rsReveal;
    };
  }, []);

  return null;
}
