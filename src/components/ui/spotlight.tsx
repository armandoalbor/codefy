"use client";

import { useEffect, useRef } from "react";

type SpotlightProps = {
  /** "spotlight" (section, 420px) or "card-glow" (card, 260px) */
  variant?: "section" | "card";
};

/**
 * Self-wiring cursor light. Drop it as a child of any `position: relative`
 * element — it attaches to its parent, marks it `.spotlight-host`, and feeds
 * `--mx/--my`. CSS handles visibility (hover + pointer:fine only), so it's a
 * no-op on touch and cheap on desktop (rAF-throttled, transform/opacity only).
 */
export function Spotlight({ variant = "section" }: SpotlightProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const parent = ref.current?.parentElement;
    if (!parent) return;
    if (window.matchMedia("(hover: none)").matches) return;

    parent.classList.add("spotlight-host");
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = parent.getBoundingClientRect();
        parent.style.setProperty("--mx", `${e.clientX - r.left}px`);
        parent.style.setProperty("--my", `${e.clientY - r.top}px`);
      });
    };

    parent.addEventListener("pointermove", onMove);
    return () => {
      parent.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <span ref={ref} className={variant === "card" ? "card-glow" : "spotlight"} aria-hidden />;
}
