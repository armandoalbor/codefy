"use client";

import { useId, type CSSProperties } from "react";
import { useReducedMotion } from "motion/react";

/**
 * CODEFY NEURAL FLOW — the brand's visual signature (not the logo).
 *
 * A calm, continuous digital current — inspired by fiber optics and neural
 * pathways, NOT a graph. The LINE stays still; life comes from luminous nodes
 * (ideas / projects / connections) and tiny particles traveling along the path.
 * Reused across Hero, Portfolio, Signature, CTA and Footer so visitors begin to
 * recognize it as "this belongs to Codefy".
 *
 * Continuous (never dashed), controlled glow (fiber-optic, not neon). Particle
 * motion uses SVG <animateMotion> (no JS loop); disabled under reduced-motion.
 */

// A gentle routing path — long calm runs with soft level changes (────╮────╯──),
// deliberately low-frequency so it never reads as a wave / ECG / audio signal.
const FLOW_PATH =
  "M0 24 C 60 24 84 24 112 24 C 150 24 158 12 196 12 C 236 12 246 24 286 24 C 330 24 350 18 400 18";

// Luminous nodes sitting on the path — ideas / projects / connections.
// Positioned as % so they render as PERFECT circles (an HTML overlay) instead
// of ovals — the line SVG stretches (preserveAspectRatio none) but nodes must
// not. left = x/400, top = y/40 (same coordinate space as the path).
const NODES = [
  { left: "15%", top: "60%", delay: "0s" },
  { left: "49%", top: "30%", delay: "-1.3s" },
  { left: "71.5%", top: "60%", delay: "-2.6s" },
  { left: "90%", top: "45%", delay: "-0.7s" },
];

// Particles circulating along the path — "something is traveling", not loading.
const PARTICLES = [
  { dur: 11, begin: "0s" },
  { dur: 13, begin: "-4.5s" },
  { dur: 12, begin: "-8.5s" },
];

type Tone = "flow" | "cyan" | "violet";

const STOPS: Record<Tone, { o: string; c: string; op?: string }[]> = {
  flow: [
    { o: "0%", c: "var(--color-accent-2)", op: "0" },
    { o: "18%", c: "var(--color-accent-2)" },
    { o: "50%", c: "#3b82f6" },
    { o: "82%", c: "var(--color-accent)" },
    { o: "100%", c: "var(--color-accent)", op: "0" },
  ],
  cyan: [
    { o: "0%", c: "var(--color-accent-2)", op: "0" },
    { o: "22%", c: "var(--color-accent-2)" },
    { o: "50%", c: "#22d3ee" },
    { o: "78%", c: "var(--color-accent-2)" },
    { o: "100%", c: "var(--color-accent-2)", op: "0" },
  ],
  violet: [
    { o: "0%", c: "var(--color-accent)", op: "0" },
    { o: "22%", c: "#818cf8" },
    { o: "50%", c: "var(--color-accent)" },
    { o: "78%", c: "#a78bfa" },
    { o: "100%", c: "var(--color-accent)", op: "0" },
  ],
};

type NeuralFlowProps = {
  className?: string;
  style?: CSSProperties;
  /** color rhythm; default keeps the recognizable cyan→blue→violet current */
  tone?: Tone;
};

export function NeuralFlow({ className, style, tone = "flow" }: NeuralFlowProps) {
  const reduce = useReducedMotion();
  const uid = useId().replace(/:/g, "");
  const gradId = `nf-grad-${uid}`;
  const pathId = `nf-path-${uid}`;
  const stops = STOPS[tone];

  return (
    <div className={className} style={style} aria-hidden="true">
      <div className="relative size-full">
        {/* line + particles live in the stretched SVG (full-width current) */}
        <svg
          viewBox="0 0 400 40"
          fill="none"
          preserveAspectRatio="none"
          className="absolute inset-0 size-full"
        >
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
              {stops.map((s) => (
                <stop key={s.o} offset={s.o} stopColor={s.c} stopOpacity={s.op ?? "0.95"} />
              ))}
            </linearGradient>
          </defs>

          {/* controlled fiber-optic glow underlay */}
          <path
            d={FLOW_PATH}
            stroke={`url(#${gradId})`}
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.4"
            className="blur-[2.5px]"
          />
          {/* crisp continuous current */}
          <path
            id={pathId}
            d={FLOW_PATH}
            stroke={`url(#${gradId})`}
            strokeWidth="1.3"
            strokeLinecap="round"
          />

          {/* particles traveling along the path */}
          {!reduce &&
            PARTICLES.map((p) => (
              <circle
                key={p.begin}
                r="1.3"
                fill="#e0f2fe"
                style={{ filter: "drop-shadow(0 0 4px var(--color-accent-2))" }}
              >
                <animateMotion
                  dur={`${p.dur}s`}
                  begin={p.begin}
                  repeatCount="indefinite"
                  keyPoints="0;1"
                  keyTimes="0;1"
                  calcMode="linear"
                >
                  <mpath href={`#${pathId}`} />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.12;0.88;1"
                  dur={`${p.dur}s`}
                  begin={p.begin}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
        </svg>

        {/* luminous nodes — HTML overlay so they stay PERFECT circles.
            height = 7.5% of the element height = the node's previous vertical
            diameter, so size & brightness are unchanged — only the ovals fixed. */}
        {NODES.map((n) => (
          <span
            key={n.left + n.top}
            className="animate-node-pulse absolute aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              left: n.left,
              top: n.top,
              height: "7.5%",
              background: "#e0f2fe",
              boxShadow:
                "0 0 3px 0.5px var(--color-accent-2), 0 0 6px 1px rgba(6, 182, 212, 0.35)",
              animationDelay: n.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}

type PulseRingsProps = {
  count?: number;
  className?: string;
  /** ring color via Tailwind border-* class */
  color?: string;
};

/** Concentric energy rings emanating from a center point. */
export function PulseRings({
  count = 3,
  className,
  color = "border-accent/30",
}: PulseRingsProps) {
  return (
    <div className={`pointer-events-none ${className ?? ""}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`absolute inset-0 rounded-full border ${color} animate-pulse-ring`}
          style={{ animationDelay: `${i * 1.4}s` }}
        />
      ))}
    </div>
  );
}
