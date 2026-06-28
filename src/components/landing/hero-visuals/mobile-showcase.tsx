"use client";

/**
 * APPS hero visual — "Mobile Product Showcase".
 *
 * Two devices in an Apple-keynote arrangement: a MAIN phone in front and a
 * SECONDARY phone behind (offset + dimmed) for depth. Inside the front phone, a
 * modern premium mobile UI: status bar, app header, a featured card, a list, and
 * a bottom tab bar. Communicates producto, usuarios, movilidad, experiencia.
 *
 * Accent: purple + blue. Reuses the shared hero animation language (Stage /
 * Layer / parallax / glow / particles) so it belongs to the same system as the
 * telecom and software visuals. Counters respect reduced motion; the soft float
 * and very light rotation are CSS (also disabled globally under reduced motion).
 */

import { Home, Search, Heart, User, Bell, Star } from "lucide-react";
import {
  Stage,
  Layer,
  AmbientGlow,
  Particles,
  Counter,
  useParallax,
  useDepth,
} from "./shared";

const PURPLE = "#a855f7";
const BLUE = "#3b82f6";

export function MobileShowcaseVisual() {
  const { reduce, sx, sy, onPointerMove, onPointerLeave } = useParallax();
  const glow = useDepth(sx, sy, -22);
  const back = useDepth(sx, sy, -10);
  const front = useDepth(sx, sy, 24);
  const badge = useDepth(sx, sy, 54);
  const dots = useDepth(sx, sy, 66);

  return (
    <Stage onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
      <AmbientGlow
        depth={glow}
        colorA="rgba(168,85,247,0.5)"
        colorB="rgba(59,130,246,0.45)"
      />

      {/* secondary phone — behind, offset and dimmed for depth */}
      <Layer
        depth={back}
        delay={0.35}
        float="animate-float-slower"
        reduce={reduce}
        className="absolute left-1/2 top-1/2 z-0 w-[44%] max-w-[12rem] -translate-x-[78%] -translate-y-[52%]"
      >
        <BackPhone />
      </Layer>

      {/* main phone — front and centered */}
      <Layer
        depth={front}
        delay={0.5}
        float="animate-float-slow"
        reduce={reduce}
        className="absolute left-1/2 top-1/2 z-10 w-[50%] max-w-[14rem] -translate-x-[36%] -translate-y-1/2"
      >
        <FrontPhone reduce={reduce} />
      </Layer>

      {/* floating rating badge */}
      <Layer
        depth={badge}
        delay={0.85}
        float="animate-float-slower"
        reduce={reduce}
        className="absolute right-0 top-10 z-20 hidden w-32 sm:block"
      >
        <RatingBadge />
      </Layer>

      <Particles depth={dots} color="rgba(168,85,247,0.7)" />
    </Stage>
  );
}

function PhoneFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[1.9rem] border border-surface-border-strong bg-[#0a0e1c] p-1.5 shadow-[0_40px_80px_-32px_rgba(2,6,23,0.95)] ${className}`}
    >
      <div className="relative overflow-hidden rounded-[1.5rem] bg-background-soft">
        {/* notch */}
        <span className="absolute left-1/2 top-1.5 z-10 h-1.5 w-12 -translate-x-1/2 rounded-full bg-black/60" />
        {children}
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-3 pb-1 pt-2.5">
      <span className="font-mono text-[0.5rem] font-medium text-text-secondary">
        9:41
      </span>
      <div className="flex items-center gap-1">
        <span className="size-1 rounded-full bg-text-muted" />
        <span className="size-1 rounded-full bg-text-muted" />
        <span className="h-1.5 w-2.5 rounded-[2px] border border-text-muted" />
      </div>
    </div>
  );
}

function FrontPhone({ reduce }: { reduce: boolean | null }) {
  return (
    <PhoneFrame className="rotate-[-3deg]">
      <StatusBar />

      {/* app header */}
      <div className="flex items-center justify-between px-3 pb-2 pt-1">
        <div>
          <p className="text-[0.5rem] text-text-muted">Bienvenido</p>
          <p className="text-[0.7rem] font-semibold text-text-primary">
            Tu app
          </p>
        </div>
        <span
          className="grid size-6 place-items-center rounded-full"
          style={{ background: `linear-gradient(135deg, ${PURPLE}, ${BLUE})` }}
        >
          <Bell className="size-3 text-white" />
        </span>
      </div>

      {/* featured card */}
      <div className="px-3">
        <div
          className="relative overflow-hidden rounded-xl p-2.5"
          style={{
            background: `radial-gradient(120% 120% at 100% 0%, rgba(59,130,246,0.55), transparent 55%), linear-gradient(135deg, ${PURPLE}, ${BLUE})`,
          }}
        >
          <p className="text-[0.5rem] font-medium text-white/80">Activos hoy</p>
          <p className="text-base font-bold text-white">
            <Counter to={1240} />
          </p>
          <div className="mt-1.5 h-1 w-full rounded-full bg-white/25">
            <div className="h-full w-3/4 rounded-full bg-white" />
          </div>
        </div>
      </div>

      {/* list */}
      <div className="mt-2.5 space-y-1.5 px-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-lg border border-surface-border bg-surface px-2 py-1.5"
          >
            <span
              className="size-6 shrink-0 rounded-lg"
              style={{
                background: `linear-gradient(135deg, ${PURPLE}${
                  i === 0 ? "" : "aa"
                }, ${BLUE}aa)`,
              }}
            />
            <div className="flex-1 space-y-1">
              <span className="block h-1.5 w-3/4 rounded-full bg-surface-strong" />
              <span className="block h-1.5 w-1/2 rounded-full bg-surface" />
            </div>
            <span className="text-[0.55rem] font-semibold text-[#c4b5fd]">
              {reduce ? "+0%" : `+${(i + 1) * 4}%`}
            </span>
          </div>
        ))}
      </div>

      {/* bottom tab bar */}
      <div className="mt-2.5 flex items-center justify-around border-t border-surface-border px-3 py-2">
        <Home className="size-3.5" style={{ color: PURPLE }} />
        <Search className="size-3.5 text-text-muted" />
        <Heart className="size-3.5 text-text-muted" />
        <User className="size-3.5 text-text-muted" />
      </div>
    </PhoneFrame>
  );
}

function BackPhone() {
  return (
    <div className="rotate-[7deg] opacity-55 blur-[0.5px]">
      <PhoneFrame>
        <StatusBar />
        <div className="px-3 pb-3 pt-1">
          <span className="block h-2 w-1/2 rounded-full bg-surface-strong" />
          <div
            className="mt-2 h-16 w-full rounded-xl"
            style={{
              background: `linear-gradient(135deg, rgba(168,85,247,0.45), rgba(59,130,246,0.3))`,
            }}
          />
          <div className="mt-2 grid grid-cols-2 gap-1.5">
            <span className="h-10 rounded-lg bg-surface" />
            <span className="h-10 rounded-lg bg-surface" />
          </div>
          <div className="mt-2 space-y-1.5">
            <span className="block h-1.5 w-full rounded-full bg-surface-strong" />
            <span className="block h-1.5 w-2/3 rounded-full bg-surface" />
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}

function RatingBadge() {
  return (
    <div className="glass rounded-xl p-2.5 shadow-[var(--shadow-soft)]">
      <div className="flex items-center gap-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star
            key={i}
            className="size-2.5"
            style={{ color: "#facc15", fill: "#facc15" }}
          />
        ))}
      </div>
      <p className="mt-1.5 text-sm font-semibold text-text-primary">
        <Counter to={4.9} decimals={1} />
        <span className="ml-1 text-[0.55rem] font-normal text-text-muted">
          en tiendas
        </span>
      </p>
    </div>
  );
}
