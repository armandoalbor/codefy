"use client";

import type { ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "motion/react";
import {
  TrendingUp,
  Sparkles,
  Check,
  Search,
  LayoutGrid,
  Image as ImageIcon,
  BarChart3,
  Settings,
} from "lucide-react";
import { PulseRings } from "@/components/brand/codefy-pulse";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/* ----------------------------------------------------------------
   Parallax layer: outer = pointer parallax (motion values),
   middle = staggered entrance, inner = idle float (CSS).
   Three nested elements keep transforms from colliding.
---------------------------------------------------------------- */
function Layer({
  x,
  y,
  delay,
  float,
  className,
  children,
  reduce,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
  delay: number;
  float?: string;
  className?: string;
  children: ReactNode;
  reduce: boolean | null;
}) {
  return (
    <motion.div style={{ x, y }} className={className}>
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

export function HeroShowcase() {
  const reduce = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 22, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 120, damping: 22, mass: 0.5 });

  // depth factors (px travel ≈ factor / 2)
  const f = (factor: number) => ({
    // eslint-disable-next-line react-hooks/rules-of-hooks
    x: useTransform(sx, (v) => v * factor),
    // eslint-disable-next-line react-hooks/rules-of-hooks
    y: useTransform(sy, (v) => v * factor),
  });

  const glow = f(-22);
  const main = f(24);
  const analytics = f(52);
  const ia = f(-46);
  const activity = f(44);
  const automation = f(-56);
  const dots = f(72);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || window.matchMedia("(hover: none)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative mx-auto aspect-square w-full max-w-[34rem] [perspective:1200px] lg:max-w-none"
    >
      {/* central radial glow */}
      <motion.div
        style={glow}
        className="aurora animate-breathe absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 bg-accent"
      />
      <motion.div
        style={glow}
        className="aurora animate-breathe absolute left-1/2 top-1/2 size-56 -translate-x-1/2 -translate-y-1/2 bg-accent-2 [animation-delay:-3s]"
      />
      {/* energy bloom — a power source, not a shadow */}
      <motion.div
        style={glow}
        className="animate-breathe absolute left-1/2 top-1/2 size-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(196,181,253,0.5),rgba(124,58,237,0.22)_42%,transparent_70%)] blur-xl"
      />
      {/* Codefy Pulse rings radiating from the core */}
      <motion.div
        style={glow}
        className="absolute left-1/2 top-1/2 size-60 -translate-x-1/2 -translate-y-1/2"
      >
        <PulseRings count={3} color="border-accent-2/20" className="absolute inset-0" />
      </motion.div>

      {/* ---- Main mockup: a real-looking product app ---- */}
      <Layer
        x={main.x}
        y={main.y}
        delay={0.45}
        float="animate-float-slow"
        reduce={reduce}
        className="absolute left-1/2 top-1/2 z-10 w-[78%] max-w-[24rem] -translate-x-1/2 -translate-y-1/2"
      >
        <MainMockup />
      </Layer>

      {/* ---- Floating widgets (real mini-UIs) ---- */}
      <Layer
        x={analytics.x}
        y={analytics.y}
        delay={0.7}
        float="animate-float-slower"
        reduce={reduce}
        className="absolute -left-2 top-6 z-20 w-40 sm:left-0"
      >
        <AnalyticsWidget />
      </Layer>

      <Layer
        x={ia.x}
        y={ia.y}
        delay={0.85}
        float="animate-float-slow"
        reduce={reduce}
        className="absolute -right-1 top-16 z-20 w-44 sm:right-0"
      >
        <IaWidget />
      </Layer>

      <Layer
        x={automation.x}
        y={automation.y}
        delay={1}
        float="animate-float-slower"
        reduce={reduce}
        className="absolute -right-2 bottom-10 z-0 hidden w-44 opacity-90 blur-[1.1px] sm:block"
      >
        <AutomationWidget />
      </Layer>

      <Layer
        x={activity.x}
        y={activity.y}
        delay={1.15}
        float="animate-float-slow"
        reduce={reduce}
        className="absolute bottom-6 left-0 z-0 w-40 opacity-90 blur-[1px]"
      >
        <ActivityWidget />
      </Layer>

      {/* ---- particles ---- */}
      <motion.div style={dots} className="pointer-events-none absolute inset-0 z-0">
        {[
          { left: "26%", top: "20%", d: "0s" },
          { left: "74%", top: "70%", d: "-2s" },
          { left: "60%", top: "14%", d: "-4s" },
          { left: "38%", top: "82%", d: "-1.5s" },
        ].map((p) => (
          <span
            key={p.left + p.top}
            className="animate-float-slower absolute size-1 rounded-full bg-accent-2/70 shadow-[0_0_8px_var(--color-accent-2)]"
            style={{ left: p.left, top: p.top, animationDelay: p.d }}
          />
        ))}
      </motion.div>
    </div>
  );
}

/* ================================================================
   Mini-UIs — crafted to look like real products, not placeholders
================================================================ */

function MainMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-surface-border-strong bg-background-soft shadow-[0_40px_80px_-32px_rgba(2,6,23,0.95)]">
      {/* top bar */}
      <div className="flex items-center gap-2 border-b border-surface-border px-3.5 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <div className="ml-3 flex flex-1 items-center gap-1.5 rounded-md bg-surface px-2 py-1">
          <Search className="size-2.5 text-text-muted" />
          <span className="font-mono text-[0.55rem] text-text-muted">
            studio.codefy.app
          </span>
        </div>
      </div>

      <div className="flex">
        {/* sidebar */}
        <div className="flex w-11 shrink-0 flex-col items-center gap-3 border-r border-surface-border py-4">
          <span className="grid size-7 place-items-center rounded-lg bg-gradient-accent text-white">
            <LayoutGrid className="size-3.5" />
          </span>
          {[ImageIcon, BarChart3, Settings].map((Icon, i) => (
            <span
              key={i}
              className="grid size-7 place-items-center rounded-lg text-text-muted"
            >
              <Icon className="size-3.5" />
            </span>
          ))}
        </div>

        {/* content */}
        <div className="flex-1 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[0.7rem] font-semibold text-text-primary">
                Buenas, Codefy
              </p>
              <p className="font-mono text-[0.55rem] text-text-muted">
                Resumen de proyectos
              </p>
            </div>
            <span className="size-6 rounded-full bg-gradient-to-br from-accent to-accent-2" />
          </div>

          {/* featured project thumb */}
          <div className="relative mt-3 h-20 overflow-hidden rounded-lg bg-[linear-gradient(150deg,#fbcfe8,#fde6c8_50%,#a5f3fc)]">
            <div className="absolute bottom-2 left-2.5">
              <p className="font-serif text-[0.7rem] font-semibold italic text-[#7c2d4d]">
                Anny Studio
              </p>
              <span className="mt-0.5 inline-block rounded-full bg-[#7c2d4d] px-1.5 py-0.5 text-[0.5rem] text-white">
                Publicado
              </span>
            </div>
          </div>

          {/* KPI row */}
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-surface-border bg-surface p-2">
              <p className="font-mono text-[0.5rem] uppercase tracking-wide text-text-muted">
                Visitas
              </p>
              <p className="text-sm font-semibold text-text-primary">12.4k</p>
            </div>
            <div className="rounded-lg border border-surface-border bg-surface p-2">
              <p className="font-mono text-[0.5rem] uppercase tracking-wide text-text-muted">
                Leads
              </p>
              <p className="text-sm font-semibold text-text-primary">348</p>
            </div>
          </div>

          {/* mini chart */}
          <div className="mt-3 flex h-12 items-end gap-1">
            {[35, 55, 45, 70, 52, 84, 64, 92].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm bg-gradient-to-t from-accent/25 to-accent-2/80"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function WidgetShell({ children }: { children: ReactNode }) {
  return (
    <div className="glass rounded-xl p-3 shadow-[var(--shadow-soft)]">{children}</div>
  );
}

function AnalyticsWidget() {
  return (
    <WidgetShell>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.55rem] uppercase tracking-wide text-text-muted">
          Conversión
        </span>
        <span className="inline-flex items-center gap-0.5 rounded-full bg-[rgba(34,197,94,0.12)] px-1.5 py-0.5 text-[0.55rem] font-medium text-[#4ade80]">
          <TrendingUp className="size-2.5" /> +38%
        </span>
      </div>
      <p className="mt-1 text-lg font-semibold text-text-primary">4.8%</p>
      <div className="mt-2 flex h-8 items-end gap-1">
        {[40, 60, 48, 72, 58, 88].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm bg-gradient-to-t from-accent/30 to-accent-2/80"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </WidgetShell>
  );
}

function IaWidget() {
  return (
    <WidgetShell>
      <div className="flex items-center gap-1.5">
        <span className="grid size-5 place-items-center rounded-md bg-gradient-accent text-white">
          <Sparkles className="size-2.5" />
        </span>
        <span className="font-mono text-[0.55rem] uppercase tracking-wide text-text-secondary">
          IA · Generado
        </span>
      </div>
      <div className="mt-2 space-y-1.5">
        <div className="h-1.5 w-full rounded-full bg-gradient-to-r from-accent/60 to-accent-2/40" />
        <div className="h-1.5 w-4/5 rounded-full bg-surface-strong" />
        <div className="h-1.5 w-3/5 rounded-full bg-surface-strong" />
      </div>
      <p className="mt-2 text-[0.6rem] text-text-secondary">
        Copy optimizado para conversión ✨
      </p>
    </WidgetShell>
  );
}

function AutomationWidget() {
  return (
    <WidgetShell>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.55rem] uppercase tracking-wide text-text-muted">
          Automatización
        </span>
        <span className="inline-flex items-center gap-1 text-[0.55rem] text-[#4ade80]">
          <span className="size-1.5 rounded-full bg-[#4ade80] shadow-[0_0_6px_#4ade80]" />
          Activo
        </span>
      </div>
      <div className="mt-3 flex items-center gap-1.5">
        {["Lead", "WhatsApp", "CRM"].map((step, i) => (
          <div key={step} className="flex flex-1 items-center gap-1.5">
            <div className="flex-1 rounded-md bg-surface px-1.5 py-1 text-center text-[0.5rem] text-text-secondary">
              {step}
            </div>
            {i < 2 && <span className="text-text-muted">›</span>}
          </div>
        ))}
      </div>
    </WidgetShell>
  );
}

function ActivityWidget() {
  return (
    <WidgetShell>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.55rem] uppercase tracking-wide text-text-muted">
          Actividad
        </span>
        <Check className="size-3 text-accent-2" />
      </div>
      <div className="mt-2 space-y-1.5">
        {[
          { c: "from-accent to-accent-2", w: "w-full" },
          { c: "from-[#fb923c] to-[#facc15]", w: "w-4/5" },
          { c: "from-[#22d3ee] to-[#818cf8]", w: "w-3/4" },
        ].map((row, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span className={`size-4 shrink-0 rounded-full bg-gradient-to-br ${row.c}`} />
            <span className={`h-1.5 ${row.w} rounded-full bg-surface-strong`} />
          </div>
        ))}
      </div>
    </WidgetShell>
  );
}
