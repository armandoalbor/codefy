"use client";

/**
 * SOFTWARE hero visual — "Living Dashboard".
 *
 * A REAL system running (not a landing mockup, not a phone): a control panel
 * with the widgets that matter to an operation — Revenue, Orders, Users,
 * Inventory, Performance. Counters animate up on entrance, a chart carries a
 * traveling highlight, indicators read as live. Communicates control,
 * operation, data, productivity.
 *
 * Accent: indigo + emerald. Reuses the shared hero animation language (Stage /
 * Layer / parallax / glow / particles) so it belongs to the same system as the
 * home showcase. Counters and chart motion respect reduced motion.
 */

import { useEffect, useState } from "react";
import { animate, useReducedMotion } from "motion/react";
import { TrendingUp, Package, Users, Activity } from "lucide-react";
import {
  Stage,
  Layer,
  AmbientGlow,
  Particles,
  EASE,
  useParallax,
  useDepth,
} from "./shared";

const INDIGO = "#6366f1";
const EMERALD = "#10b981";

/** Animated count-up; renders the final value immediately under reduced motion. */
function Counter({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    // animate() drives state via async onUpdate (rAF), so no synchronous
    // setState in the effect body. duration 0 = instant jump for reduced motion.
    const controls = animate(0, to, {
      duration: reduce ? 0 : 1.6,
      ease: EASE,
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [to, reduce]);

  const formatted =
    decimals > 0
      ? value.toFixed(decimals)
      : Math.round(value).toLocaleString("en-US");

  return (
    <>
      {prefix}
      {formatted}
      {suffix}
    </>
  );
}

const INVENTORY = [
  { sku: "SKU-2041", name: "Core Plan", status: "En stock", ok: true },
  { sku: "SKU-1180", name: "Pro Seat", status: "Bajo", ok: false },
  { sku: "SKU-0934", name: "Add-on API", status: "En stock", ok: true },
];

export function LivingDashboardVisual() {
  const { reduce, sx, sy, onPointerMove, onPointerLeave } = useParallax();
  const glow = useDepth(sx, sy, -22);
  const main = useDepth(sx, sy, 22);
  const users = useDepth(sx, sy, 50);
  const perf = useDepth(sx, sy, -48);
  const dots = useDepth(sx, sy, 66);

  return (
    <Stage onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
      <AmbientGlow
        depth={glow}
        colorA="rgba(99,102,241,0.5)"
        colorB="rgba(16,185,129,0.4)"
      />

      {/* main dashboard panel — Revenue, Orders, chart, Inventory */}
      <Layer
        depth={main}
        delay={0.45}
        float="animate-float-slow"
        reduce={reduce}
        className="absolute left-1/2 top-1/2 z-10 w-[80%] max-w-[25rem] -translate-x-1/2 -translate-y-1/2"
      >
        <DashboardPanel reduce={reduce} />
      </Layer>

      {/* Users widget */}
      <Layer
        depth={users}
        delay={0.8}
        float="animate-float-slower"
        reduce={reduce}
        className="absolute -left-2 top-4 z-20 w-40 sm:left-0"
      >
        <UsersWidget />
      </Layer>

      {/* Performance widget */}
      <Layer
        depth={perf}
        delay={0.95}
        float="animate-float-slow"
        reduce={reduce}
        className="absolute -right-2 bottom-8 z-20 w-44 sm:right-0"
      >
        <PerformanceWidget />
      </Layer>

      <Particles depth={dots} color="rgba(52,211,153,0.7)" />
    </Stage>
  );
}

function DashboardPanel({ reduce }: { reduce: boolean | null }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-surface-border-strong bg-background-soft shadow-[0_40px_80px_-32px_rgba(2,6,23,0.95)]">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-surface-border px-3.5 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-[0.55rem] text-text-muted">
          app.acme.io · Operaciones
        </span>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between">
          <p className="text-[0.7rem] font-semibold text-text-primary">
            Panel de operación
          </p>
          <span className="inline-flex items-center gap-1 rounded-full bg-[rgba(16,185,129,0.12)] px-1.5 py-0.5 text-[0.55rem] font-medium text-[#34d399]">
            <span
              className="animate-node-pulse size-1.5 rounded-full"
              style={{ background: EMERALD, boxShadow: `0 0 6px ${EMERALD}` }}
            />
            Live
          </span>
        </div>

        {/* Revenue + Orders KPIs */}
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-lg border border-surface-border bg-surface p-2.5">
            <p className="font-mono text-[0.5rem] uppercase tracking-wide text-text-muted">
              Revenue
            </p>
            <p className="text-sm font-semibold text-text-primary">
              <Counter to={48250} prefix="$" />
            </p>
            <span className="inline-flex items-center gap-0.5 text-[0.55rem] font-medium text-[#34d399]">
              <TrendingUp className="size-2.5" /> +12.4%
            </span>
          </div>
          <div className="rounded-lg border border-surface-border bg-surface p-2.5">
            <p className="font-mono text-[0.5rem] uppercase tracking-wide text-text-muted">
              Orders
            </p>
            <p className="text-sm font-semibold text-text-primary">
              <Counter to={1284} />
            </p>
            <span className="inline-flex items-center gap-0.5 text-[0.55rem] font-medium text-[#818cf8]">
              <TrendingUp className="size-2.5" /> +6.1%
            </span>
          </div>
        </div>

        {/* area chart with a traveling highlight */}
        <RevenueChart reduce={reduce} />

        {/* Inventory table */}
        <div className="mt-3 space-y-1.5">
          {INVENTORY.map((row) => (
            <div
              key={row.sku}
              className="flex items-center justify-between rounded-md border border-surface-border bg-surface px-2 py-1.5"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-[0.5rem] text-text-muted">
                  {row.sku}
                </span>
                <span className="text-[0.6rem] text-text-secondary">
                  {row.name}
                </span>
              </div>
              <span
                className="rounded-full px-1.5 py-0.5 text-[0.5rem] font-medium"
                style={{
                  color: row.ok ? "#34d399" : "#fbbf24",
                  background: row.ok
                    ? "rgba(16,185,129,0.12)"
                    : "rgba(251,191,36,0.12)",
                }}
              >
                {row.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const CHART_PATH =
  "M0 46 C 18 40 30 30 48 32 C 70 34 84 18 108 20 C 132 22 146 8 172 12 C 196 16 210 6 240 4";

function RevenueChart({ reduce }: { reduce: boolean | null }) {
  return (
    <div className="mt-3 h-16 w-full">
      <svg
        viewBox="0 0 240 56"
        fill="none"
        preserveAspectRatio="none"
        className="size-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="ld-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={INDIGO} stopOpacity="0.35" />
            <stop offset="100%" stopColor={INDIGO} stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ld-stroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={INDIGO} />
            <stop offset="100%" stopColor={EMERALD} />
          </linearGradient>
        </defs>
        <path d={`${CHART_PATH} L240 56 L0 56 Z`} fill="url(#ld-fill)" />
        <path
          id="ld-line"
          d={CHART_PATH}
          stroke="url(#ld-stroke)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {!reduce && (
          <circle r="2.4" fill="#ecfdf5" style={{ filter: `drop-shadow(0 0 5px ${EMERALD})` }}>
            <animateMotion dur="4s" repeatCount="indefinite" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
              <mpath href="#ld-line" />
            </animateMotion>
          </circle>
        )}
      </svg>
    </div>
  );
}

function WidgetShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="glass rounded-xl p-3 shadow-[var(--shadow-soft)]">{children}</div>
  );
}

function UsersWidget() {
  return (
    <WidgetShell>
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1 font-mono text-[0.55rem] uppercase tracking-wide text-text-muted">
          <Users className="size-2.5" /> Users
        </span>
        <span className="inline-flex items-center gap-0.5 text-[0.55rem] font-medium text-[#34d399]">
          <TrendingUp className="size-2.5" /> +9%
        </span>
      </div>
      <p className="mt-1 text-lg font-semibold text-text-primary">
        <Counter to={8642} />
      </p>
      <div className="mt-2 flex h-8 items-end gap-1">
        {[42, 58, 50, 70, 60, 86, 74].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{
              height: `${h}%`,
              background: `linear-gradient(to top, ${INDIGO}55, ${EMERALD}cc)`,
            }}
          />
        ))}
      </div>
    </WidgetShell>
  );
}

function PerformanceWidget() {
  const value = 99.9;
  const dash = (value / 100) * 100;
  return (
    <WidgetShell>
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1 font-mono text-[0.55rem] uppercase tracking-wide text-text-muted">
          <Activity className="size-2.5" /> Performance
        </span>
        <span className="inline-flex items-center gap-1 text-[0.55rem] text-[#34d399]">
          <span
            className="animate-node-pulse size-1.5 rounded-full"
            style={{ background: EMERALD, boxShadow: `0 0 6px ${EMERALD}` }}
          />
          Activo
        </span>
      </div>
      <div className="mt-2 flex items-center gap-3">
        <div className="relative size-12 shrink-0">
          <svg viewBox="0 0 36 36" className="size-full -rotate-90" aria-hidden="true">
            <circle cx="18" cy="18" r="15.9" fill="none" stroke="var(--color-surface-strong)" strokeWidth="3" />
            <circle
              cx="18"
              cy="18"
              r="15.9"
              fill="none"
              stroke={EMERALD}
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`${dash} 100`}
              style={{ filter: `drop-shadow(0 0 3px ${EMERALD})` }}
            />
          </svg>
          <span className="absolute inset-0 grid place-items-center text-[0.6rem] font-semibold text-text-primary">
            <Counter to={value} decimals={1} suffix="%" />
          </span>
        </div>
        <div className="flex-1 space-y-1.5">
          <div className="flex items-center gap-1.5">
            <Package className="size-2.5 text-[#818cf8]" />
            <span className="text-[0.55rem] text-text-secondary">Uptime</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-surface-strong">
            <div className="h-full w-[94%] rounded-full" style={{ background: INDIGO }} />
          </div>
          <div className="h-1.5 w-4/5 rounded-full bg-surface-strong">
            <div className="h-full w-3/4 rounded-full" style={{ background: EMERALD }} />
          </div>
        </div>
      </div>
    </WidgetShell>
  );
}
