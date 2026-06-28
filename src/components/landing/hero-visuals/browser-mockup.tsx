"use client";

/**
 * LANDING hero visual — "Premium Browser Mockup".
 *
 * A refined landing page partially visible inside a browser window — NOT a real
 * screenshot, a tasteful representation: window chrome, a mini nav, a hero with
 * a VISIBLE CTA, and premium gradient image blocks (no clipart). Floating proof
 * cards (conversion, design tokens) read as the outcome of good design work.
 * Communicates diseño, marca, experiencia digital, conversión.
 *
 * Accent: violet + pink. Reuses the shared hero animation language (Stage /
 * Layer / parallax / glow / particles) so it belongs to the same system as the
 * telecom and software visuals. Counters respect reduced motion; float is CSS
 * (also disabled globally under reduced motion).
 */

import { MousePointerClick, TrendingUp, Palette } from "lucide-react";
import {
  Stage,
  Layer,
  AmbientGlow,
  Particles,
  Counter,
  useParallax,
  useDepth,
} from "./shared";

const VIOLET = "#8b5cf6";
const PINK = "#ec4899";

const PALETTE = [VIOLET, PINK, "#f0abfc", "#c4b5fd"];

export function BrowserMockupVisual() {
  const { reduce, sx, sy, onPointerMove, onPointerLeave } = useParallax();
  const glow = useDepth(sx, sy, -22);
  const main = useDepth(sx, sy, 22);
  const proof = useDepth(sx, sy, 52);
  const brand = useDepth(sx, sy, -48);
  const dots = useDepth(sx, sy, 66);

  return (
    <Stage onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
      <AmbientGlow
        depth={glow}
        colorA="rgba(139,92,246,0.5)"
        colorB="rgba(236,72,153,0.4)"
      />

      {/* the landing inside a browser window */}
      <Layer
        depth={main}
        delay={0.45}
        float="animate-float-slow"
        reduce={reduce}
        className="absolute left-1/2 top-1/2 z-10 w-[84%] max-w-[26rem] -translate-x-1/2 -translate-y-1/2"
      >
        <BrowserWindow />
      </Layer>

      {/* conversion proof card */}
      <Layer
        depth={proof}
        delay={0.8}
        float="animate-float-slower"
        reduce={reduce}
        className="absolute -right-2 top-6 z-20 hidden w-40 sm:block sm:right-0"
      >
        <ConversionCard />
      </Layer>

      {/* brand / design tokens card */}
      <Layer
        depth={brand}
        delay={0.95}
        float="animate-float-slow"
        reduce={reduce}
        className="absolute -left-2 bottom-8 z-20 hidden w-40 sm:block sm:left-0"
      >
        <BrandCard />
      </Layer>

      <Particles depth={dots} color="rgba(244,114,182,0.7)" />
    </Stage>
  );
}

function BrowserWindow() {
  return (
    <div className="overflow-hidden rounded-2xl border border-surface-border-strong bg-background-soft shadow-[0_40px_80px_-32px_rgba(2,6,23,0.95)]">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-surface-border px-3.5 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 flex-1 truncate rounded-md bg-surface px-2 py-1 font-mono text-[0.5rem] text-text-muted">
          https://tumarca.com
        </span>
      </div>

      <div className="p-4">
        {/* mini nav */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span
              className="size-3.5 rounded-md"
              style={{ background: `linear-gradient(135deg, ${VIOLET}, ${PINK})` }}
            />
            <span className="h-1.5 w-10 rounded-full bg-surface-strong" />
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <span className="h-1.5 w-6 rounded-full bg-surface-strong" />
            <span className="h-1.5 w-6 rounded-full bg-surface-strong" />
            <span className="h-1.5 w-6 rounded-full bg-surface-strong" />
          </div>
          <span
            className="rounded-full px-2 py-1 text-[0.5rem] font-semibold text-white"
            style={{ background: `linear-gradient(110deg, ${VIOLET}, ${PINK})` }}
          >
            Contacto
          </span>
        </div>

        {/* hero section */}
        <div className="mt-4 grid grid-cols-5 gap-3">
          <div className="col-span-3 flex flex-col justify-center gap-2">
            <span
              className="h-2 w-4/5 rounded-full"
              style={{ background: `linear-gradient(90deg, ${VIOLET}, ${PINK})` }}
            />
            <span className="h-2 w-3/5 rounded-full bg-surface-strong" />
            <span className="mt-1 h-1.5 w-full rounded-full bg-surface" />
            <span className="h-1.5 w-4/5 rounded-full bg-surface" />
            <button
              type="button"
              tabIndex={-1}
              aria-hidden="true"
              className="mt-2 inline-flex w-fit items-center gap-1 rounded-lg px-2.5 py-1.5 text-[0.55rem] font-semibold text-white shadow-[0_8px_20px_-6px_rgba(236,72,153,0.6)]"
              style={{ background: `linear-gradient(110deg, ${VIOLET}, ${PINK})` }}
            >
              <MousePointerClick className="size-3" /> Empezar ahora
            </button>
          </div>
          {/* premium image placeholder */}
          <div
            className="col-span-2 aspect-[4/5] rounded-xl border border-surface-border"
            style={{
              background: `radial-gradient(120% 90% at 20% 0%, rgba(244,114,182,0.45), transparent 60%), linear-gradient(150deg, rgba(139,92,246,0.5), rgba(236,72,153,0.2))`,
            }}
          />
        </div>

        {/* content blocks */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="rounded-lg border border-surface-border bg-surface p-2"
            >
              <div
                className="h-8 w-full rounded-md"
                style={{
                  background: `linear-gradient(135deg, rgba(139,92,246,${
                    0.4 - i * 0.08
                  }), rgba(236,72,153,${0.3 - i * 0.06}))`,
                }}
              />
              <span className="mt-1.5 block h-1.5 w-full rounded-full bg-surface-strong" />
              <span className="mt-1 block h-1.5 w-3/4 rounded-full bg-surface-strong" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProofShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="glass rounded-xl p-3 shadow-[var(--shadow-soft)]">{children}</div>
  );
}

function ConversionCard() {
  return (
    <ProofShell>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.55rem] uppercase tracking-wide text-text-muted">
          Conversión
        </span>
        <span className="inline-flex items-center gap-0.5 text-[0.55rem] font-medium text-[#f0abfc]">
          <TrendingUp className="size-2.5" /> +32%
        </span>
      </div>
      <p className="mt-1 text-lg font-semibold text-text-primary">
        <Counter to={6.8} decimals={1} suffix="%" />
      </p>
      <div className="mt-2 flex h-8 items-end gap-1">
        {[34, 48, 42, 60, 56, 78, 92].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{
              height: `${h}%`,
              background: `linear-gradient(to top, ${VIOLET}55, ${PINK}cc)`,
            }}
          />
        ))}
      </div>
    </ProofShell>
  );
}

function BrandCard() {
  return (
    <ProofShell>
      <span className="inline-flex items-center gap-1 font-mono text-[0.55rem] uppercase tracking-wide text-text-muted">
        <Palette className="size-2.5" /> Marca
      </span>
      <div className="mt-2 flex gap-1.5">
        {PALETTE.map((c) => (
          <span
            key={c}
            className="size-6 flex-1 rounded-md"
            style={{ background: c, boxShadow: `0 0 10px ${c}55` }}
          />
        ))}
      </div>
      <div className="mt-2.5 space-y-1.5">
        <span className="block h-1.5 w-full rounded-full bg-surface-strong" />
        <span className="block h-1.5 w-2/3 rounded-full bg-surface-strong" />
      </div>
    </ProofShell>
  );
}
