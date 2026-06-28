"use client";

/**
 * SEO hero visual — "Growth Analytics".
 *
 * Represents GROWTH and RESULTS (not code, not search engines): a results panel
 * with KPIs (Visitors, Leads, Ranking, Conversion) counting up, an ASCENDING
 * area chart with a traveling highlight, and positive delta indicators. Floating
 * widgets reinforce ranking gains and lead growth. Communicates visibilidad,
 * resultados, crecimiento, rendimiento.
 *
 * Accent: emerald + cyan. Reuses the shared hero animation language (Stage /
 * Layer / parallax / glow / particles) and the living-dashboard chart pattern so
 * it belongs to the same system as the telecom and software visuals. Counters
 * and chart motion respect reduced motion.
 */

import { TrendingUp, ArrowUp, Users, Target } from "lucide-react";
import {
  Stage,
  Layer,
  AmbientGlow,
  Particles,
  Counter,
  useParallax,
  useDepth,
} from "./shared";

const EMERALD = "#10b981";
const CYAN = "#06b6d4";

type Kpi = {
  label: string;
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  delta: string;
  mobileHidden?: boolean;
};

const KPIS: Kpi[] = [
  { label: "Visitas", to: 18420, delta: "+24%" },
  { label: "Leads", to: 642, delta: "+18%" },
  { label: "Ranking", to: 3, prefix: "#", delta: "+7", mobileHidden: true },
  { label: "Conversión", to: 4.8, suffix: "%", decimals: 1, delta: "+1.2", mobileHidden: true },
];

const KEYWORDS = [
  { term: "agencia digital", pos: 92 },
  { term: "diseño web premium", pos: 78 },
];

export function GrowthAnalyticsVisual() {
  const { reduce, sx, sy, onPointerMove, onPointerLeave } = useParallax();
  const glow = useDepth(sx, sy, -22);
  const main = useDepth(sx, sy, 22);
  const rank = useDepth(sx, sy, 50);
  const leads = useDepth(sx, sy, -48);
  const dots = useDepth(sx, sy, 66);

  return (
    <Stage onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
      <AmbientGlow
        depth={glow}
        colorA="rgba(16,185,129,0.5)"
        colorB="rgba(6,182,212,0.4)"
      />

      {/* main growth panel */}
      <Layer
        depth={main}
        delay={0.45}
        float="animate-float-slow"
        reduce={reduce}
        className="absolute left-1/2 top-1/2 z-10 w-[82%] max-w-[25rem] -translate-x-1/2 -translate-y-1/2"
      >
        <GrowthPanel reduce={reduce} />
      </Layer>

      {/* ranking widget */}
      <Layer
        depth={rank}
        delay={0.8}
        float="animate-float-slower"
        reduce={reduce}
        className="absolute -left-2 top-4 z-20 hidden w-40 sm:left-0 sm:block"
      >
        <RankingWidget />
      </Layer>

      {/* leads widget */}
      <Layer
        depth={leads}
        delay={0.95}
        float="animate-float-slow"
        reduce={reduce}
        className="absolute -right-2 bottom-8 z-20 hidden w-40 sm:right-0 sm:block"
      >
        <LeadsWidget />
      </Layer>

      <Particles depth={dots} color="rgba(52,211,153,0.7)" />
    </Stage>
  );
}

function GrowthPanel({ reduce }: { reduce: boolean | null }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-surface-border-strong bg-background-soft shadow-[0_40px_80px_-32px_rgba(2,6,23,0.95)]">
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-surface-border px-3.5 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-[0.55rem] text-text-muted">
          analytics.tumarca.com · Crecimiento
        </span>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between">
          <p className="text-[0.7rem] font-semibold text-text-primary">
            Resultados orgánicos
          </p>
          <span className="inline-flex items-center gap-1 rounded-full bg-[rgba(16,185,129,0.12)] px-1.5 py-0.5 text-[0.55rem] font-medium text-[#34d399]">
            <ArrowUp className="size-2.5" /> 90 días
          </span>
        </div>

        {/* KPI grid */}
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {KPIS.map((k) => (
            <div
              key={k.label}
              className={`rounded-lg border border-surface-border bg-surface p-2${
                k.mobileHidden ? " hidden sm:block" : ""
              }`}
            >
              <p className="font-mono text-[0.45rem] uppercase tracking-wide text-text-muted">
                {k.label}
              </p>
              <p className="text-sm font-semibold text-text-primary">
                <Counter
                  to={k.to}
                  prefix={k.prefix}
                  suffix={k.suffix}
                  decimals={k.decimals}
                />
              </p>
              <span className="inline-flex items-center gap-0.5 text-[0.5rem] font-medium text-[#34d399]">
                <TrendingUp className="size-2.5" /> {k.delta}
              </span>
            </div>
          ))}
        </div>

        {/* ascending area chart with a traveling highlight */}
        <GrowthChart reduce={reduce} />

        {/* keyword ranking progress */}
        <div className="mt-3 space-y-2">
          {KEYWORDS.map((k) => (
            <div key={k.term}>
              <div className="flex items-center justify-between">
                <span className="text-[0.6rem] text-text-secondary">
                  {k.term}
                </span>
                <span className="inline-flex items-center gap-0.5 text-[0.55rem] font-medium text-[#34d399]">
                  <ArrowUp className="size-2.5" /> Top 3
                </span>
              </div>
              <div className="mt-1 h-1.5 w-full rounded-full bg-surface-strong">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${k.pos}%`,
                    background: `linear-gradient(90deg, ${CYAN}, ${EMERALD})`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const CHART_PATH =
  "M0 52 C 22 50 36 46 58 40 C 82 33 98 30 122 23 C 148 16 164 12 190 8 C 212 5 226 4 240 2";

function GrowthChart({ reduce }: { reduce: boolean | null }) {
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
          <linearGradient id="ga-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={EMERALD} stopOpacity="0.35" />
            <stop offset="100%" stopColor={EMERALD} stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ga-stroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={CYAN} />
            <stop offset="100%" stopColor={EMERALD} />
          </linearGradient>
        </defs>
        <path d={`${CHART_PATH} L240 56 L0 56 Z`} fill="url(#ga-fill)" />
        <path
          id="ga-line"
          d={CHART_PATH}
          stroke="url(#ga-stroke)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {!reduce && (
          <circle
            r="2.4"
            fill="#ecfdf5"
            style={{ filter: `drop-shadow(0 0 5px ${EMERALD})` }}
          >
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              keyPoints="0;1"
              keyTimes="0;1"
              calcMode="linear"
            >
              <mpath href="#ga-line" />
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

function RankingWidget() {
  const value = 3;
  const dash = 82;
  return (
    <WidgetShell>
      <span className="inline-flex items-center gap-1 font-mono text-[0.55rem] uppercase tracking-wide text-text-muted">
        <Target className="size-2.5" /> Ranking
      </span>
      <div className="mt-2 flex items-center gap-3">
        <div className="relative size-12 shrink-0">
          <svg
            viewBox="0 0 36 36"
            className="size-full -rotate-90"
            aria-hidden="true"
          >
            <circle
              cx="18"
              cy="18"
              r="15.9"
              fill="none"
              stroke="var(--color-surface-strong)"
              strokeWidth="3"
            />
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
          <span className="absolute inset-0 grid place-items-center text-[0.65rem] font-semibold text-text-primary">
            <Counter to={value} prefix="#" />
          </span>
        </div>
        <div className="flex-1 space-y-1">
          <p className="text-[0.55rem] text-text-secondary">Posición media</p>
          <span className="inline-flex items-center gap-0.5 text-[0.55rem] font-medium text-[#34d399]">
            <ArrowUp className="size-2.5" /> subió 7 lugares
          </span>
        </div>
      </div>
    </WidgetShell>
  );
}

function LeadsWidget() {
  return (
    <WidgetShell>
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center gap-1 font-mono text-[0.55rem] uppercase tracking-wide text-text-muted">
          <Users className="size-2.5" /> Leads
        </span>
        <span className="inline-flex items-center gap-0.5 text-[0.55rem] font-medium text-[#34d399]">
          <TrendingUp className="size-2.5" /> +18%
        </span>
      </div>
      <p className="mt-1 text-lg font-semibold text-text-primary">
        <Counter to={642} />
      </p>
      <div className="mt-2 flex h-8 items-end gap-1">
        {[30, 40, 38, 52, 60, 72, 88].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{
              height: `${h}%`,
              background: `linear-gradient(to top, ${CYAN}55, ${EMERALD}cc)`,
            }}
          />
        ))}
      </div>
    </WidgetShell>
  );
}
