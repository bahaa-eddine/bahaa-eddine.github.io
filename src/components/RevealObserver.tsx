"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** One observer for every [data-reveal] element on the page. */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Give staggered children increasing delays.
    document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((group) => {
      const gap = Number(group.dataset.stagger) || 0.07;
      group.querySelectorAll<HTMLElement>(":scope > [data-reveal]").forEach((el, i) => {
        el.style.setProperty("--rd", `${(i * gap).toFixed(2)}s`);
      });
    });

    const els = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.01 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
