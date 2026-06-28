"use client";

/**
 * Shared animation language for the per-vertical HERO VISUAL SYSTEM.
 *
 * Every bespoke visual (telecom, software, …) reuses these primitives so they
 * feel like ONE system alongside the home showcase: the same `EASE`, the same
 * nested pointer-parallax + entrance + idle-float `Layer`, the same breathing
 * ambient glow and drifting particles. The ONLY thing a visual changes is the
 * central art and its accent colors.
 *
 * Patterns intentionally mirror `hero-showcase.tsx` (the home visual) — do not
 * diverge the easing/spring values or the visuals will stop feeling related.
 */

import type { CSSProperties, ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "motion/react";

/** The single easing curve shared across the entire hero visual system. */
export const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/** A pair of parallax-driven motion values for one depth plane. */
export type Depth = { x: MotionValue<number>; y: MotionValue<number> };

/**
 * Pointer parallax shared by every visual. Returns the spring-smoothed source
 * values plus the handlers to wire onto the stage. Parallax is disabled under
 * reduced motion and on touch (hover: none) devices.
 */
export function useParallax() {
  const reduce = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 22, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 120, damping: 22, mass: 0.5 });

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || window.matchMedia("(hover: none)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onPointerLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return { reduce, sx, sy, onPointerMove, onPointerLeave };
}

/**
 * Derives a single depth plane from the parallax springs. `factor` controls how
 * far the plane travels (px ≈ factor / 2); negative pulls it the opposite way
 * for separation between background glow and foreground art.
 */
export function useDepth(
  sx: MotionValue<number>,
  sy: MotionValue<number>,
  factor: number,
): Depth {
  return {
    x: useTransform(sx, (v) => v * factor),
    y: useTransform(sy, (v) => v * factor),
  };
}

/**
 * The visual slot — identical footprint to the home showcase so every variant
 * occupies the same responsive box (aspect-square, max-w ~34rem, perspective).
 */
export function Stage({
  onPointerMove,
  onPointerLeave,
  children,
}: {
  onPointerMove: (e: React.PointerEvent<HTMLDivElement>) => void;
  onPointerLeave: () => void;
  children: ReactNode;
}) {
  return (
    <div
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="relative mx-auto aspect-square w-full max-w-[34rem] [perspective:1200px] lg:max-w-none"
    >
      {children}
    </div>
  );
}

/**
 * Parallax layer: outer = pointer parallax, middle = staggered entrance,
 * inner = idle float. Three nested elements keep the transforms from colliding.
 * (Same structure as the home showcase's `Layer`.)
 */
export function Layer({
  depth,
  delay,
  float,
  className,
  children,
  reduce,
}: {
  depth: Depth;
  delay: number;
  float?: string;
  className?: string;
  children: ReactNode;
  reduce: boolean | null;
}) {
  return (
    <motion.div style={{ x: depth.x, y: depth.y }} className={className}>
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.92, y: 26 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.75, delay, ease: EASE }}
      >
        <div className={float}>{children}</div>
      </motion.div>
    </motion.div>
  );
}

/**
 * Breathing ambient glow behind the central art. Colors are passed per-vertical
 * so the CENTRAL visual carries its own accent while the surrounding HeroSection
 * atmosphere stays Codefy violet/cyan.
 */
export function AmbientGlow({
  depth,
  colorA,
  colorB,
}: {
  depth: Depth;
  colorA: string;
  colorB: string;
}) {
  return (
    <>
      <motion.div
        style={{ x: depth.x, y: depth.y, background: colorA }}
        className="aurora animate-breathe absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        style={{ x: depth.x, y: depth.y, background: colorB }}
        className="aurora animate-breathe absolute left-1/2 top-1/2 size-52 -translate-x-1/2 -translate-y-1/2 [animation-delay:-3s]"
      />
    </>
  );
}

type Particle = { left: string; top: string; delay: string };

const DEFAULT_PARTICLES: Particle[] = [
  { left: "26%", top: "20%", delay: "0s" },
  { left: "74%", top: "70%", delay: "-2s" },
  { left: "60%", top: "14%", delay: "-4s" },
  { left: "38%", top: "82%", delay: "-1.5s" },
];

/** Drifting accent particles — shared "constant subtle activity" layer. */
export function Particles({
  depth,
  color,
  particles = DEFAULT_PARTICLES,
}: {
  depth: Depth;
  color: string;
  particles?: Particle[];
}) {
  const dotStyle = (p: Particle): CSSProperties => ({
    left: p.left,
    top: p.top,
    animationDelay: p.delay,
    background: color,
    boxShadow: `0 0 8px ${color}`,
  });

  return (
    <motion.div
      style={{ x: depth.x, y: depth.y }}
      className="pointer-events-none absolute inset-0 z-0"
    >
      {particles.map((p) => (
        <span
          key={p.left + p.top}
          className="animate-float-slower absolute size-1 rounded-full"
          style={dotStyle(p)}
        />
      ))}
    </motion.div>
  );
}
