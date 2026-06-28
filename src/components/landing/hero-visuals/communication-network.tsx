"use client";

/**
 * TELECOM hero visual — "Communication Network".
 *
 * Represents LIVING COMMUNICATION, not a dashboard or a call-center UI: a
 * central CC365 node with connections radiating to the real entities of a
 * telephony operation (PBX, WhatsApp, CRM, Agente, Supervisor, Cliente).
 * Pulses travel the connections (SVG <animateMotion>) to read as real-time
 * traffic; pulse rings around the core reinforce "always on".
 *
 * Accent: cyan + blue. Reuses the shared hero animation language (Stage / Layer
 * / parallax / glow / particles) so it belongs to the same system as the home
 * showcase. Pulses respect reduced motion (disabled), float is CSS (also
 * disabled globally under reduced motion).
 */

import { Server, MessageCircle, Database, Headset, Eye, User } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PulseRings } from "@/components/brand/codefy-pulse";
import {
  Stage,
  Layer,
  AmbientGlow,
  Particles,
  Counter,
  useParallax,
  useDepth,
} from "./shared";

const CYAN = "#06b6d4";
const BLUE = "#3b82f6";
const LIVE = "#34d399";

type Node = {
  label: string;
  icon: LucideIcon;
  /** viewBox (0 0 400 400) coordinates — center is 200,200. */
  x: number;
  y: number;
  begin: string;
};

// Six entities orbiting the CC365 core on a slightly wide ellipse: top/bottom
// sit at the vertical extremes while the four side nodes are pushed further out
// horizontally — the live-ops core is taller than wide, so this keeps every
// connection line clearly visible between the core and each node.
const NODES: Node[] = [
  { label: "PBX", icon: Server, x: 200, y: 35, begin: "0s" },
  { label: "WhatsApp", icon: MessageCircle, x: 358, y: 108, begin: "-0.7s" },
  { label: "CRM", icon: Database, x: 358, y: 292, begin: "-1.4s" },
  { label: "Agente", icon: Headset, x: 200, y: 365, begin: "-2.1s" },
  { label: "Supervisor", icon: Eye, x: 42, y: 292, begin: "-2.8s" },
  { label: "Cliente", icon: User, x: 42, y: 108, begin: "-3.5s" },
];

const pct = (v: number) => `${(v / 400) * 100}%`;

export function CommunicationNetworkVisual() {
  const { reduce, sx, sy, onPointerMove, onPointerLeave } = useParallax();
  const glow = useDepth(sx, sy, -22);
  const network = useDepth(sx, sy, 20);
  const dots = useDepth(sx, sy, 64);

  return (
    <Stage onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
      <AmbientGlow
        depth={glow}
        colorA="rgba(6,182,212,0.55)"
        colorB="rgba(59,130,246,0.5)"
      />

      <Layer
        depth={network}
        delay={0.45}
        float="animate-float-slow"
        reduce={reduce}
        className="absolute inset-0 z-10"
      >
        <div className="relative aspect-square w-full">
          {/* connections + traveling pulses */}
          <svg
            viewBox="0 0 400 400"
            fill="none"
            className="absolute inset-0 size-full"
            aria-hidden="true"
          >
            {NODES.map((n) => {
              const id = `cn-path-${n.label}`;
              const gid = `cn-grad-${n.label}`;
              return (
                <g key={n.label}>
                  {/* userSpaceOnUse so vertical lines (PBX/Agente) still paint:
                      an objectBoundingBox gradient is degenerate at 0 width. */}
                  <linearGradient
                    id={gid}
                    gradientUnits="userSpaceOnUse"
                    x1="200"
                    y1="200"
                    x2={n.x}
                    y2={n.y}
                  >
                    <stop offset="0%" stopColor={CYAN} stopOpacity="0.8" />
                    <stop offset="100%" stopColor={BLUE} stopOpacity="0.2" />
                  </linearGradient>
                  <path
                    id={id}
                    d={`M200 200 L${n.x} ${n.y}`}
                    stroke={`url(#${gid})`}
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                  {!reduce && (
                    <circle
                      r="2.4"
                      fill="#e0f7fa"
                      style={{ filter: `drop-shadow(0 0 5px ${CYAN})` }}
                    >
                      <animateMotion
                        dur="3.4s"
                        begin={n.begin}
                        repeatCount="indefinite"
                        keyPoints="0;1"
                        keyTimes="0;1"
                        calcMode="linear"
                      >
                        <mpath href={`#${id}`} />
                      </animateMotion>
                      <animate
                        attributeName="opacity"
                        values="0;1;1;0"
                        keyTimes="0;0.15;0.85;1"
                        dur="3.4s"
                        begin={n.begin}
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                </g>
              );
            })}
          </svg>

          {/* real-time rings radiating behind the core */}
          <div className="absolute left-1/2 top-1/2 aspect-square w-[64%] max-w-[18rem] -translate-x-1/2 -translate-y-1/2">
            <PulseRings
              count={3}
              color="border-[#06b6d4]/25"
              className="absolute inset-0"
            />
          </div>

          {/* CC365 live-ops core — the brain feeding the network in real time */}
          <div className="absolute left-1/2 top-1/2 z-20 w-[46%] max-w-[14.5rem] -translate-x-1/2 -translate-y-1/2">
            <LiveOpsCore reduce={reduce} />
          </div>

          {/* labeled entity nodes */}
          {NODES.map((n) => {
            const Icon = n.icon;
            return (
              <div
                key={n.label}
                className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                style={{ left: pct(n.x), top: pct(n.y) }}
              >
                <div className="glass flex items-center gap-1.5 rounded-full px-2.5 py-1.5 shadow-[var(--shadow-soft)]">
                  <Icon className="size-3 text-[#22d3ee]" />
                  <span className="text-[0.62rem] font-medium text-text-secondary">
                    {n.label}
                  </span>
                  <span
                    className="animate-node-pulse size-1.5 rounded-full"
                    style={{ background: LIVE, boxShadow: `0 0 6px ${LIVE}` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Layer>

      <Particles depth={dots} color="rgba(34,211,238,0.7)" />
    </Stage>
  );
}

/* ================================================================
   CC365 live-ops core — a compact real-time call-center monitor.
   The hub of the network: active calls, agents online, queue, and a
   live agent strip with call waveforms. Counters animate on entrance.
================================================================ */

const AGENTS: { name: string; live: boolean }[] = [
  { name: "María G.", live: true },
  { name: "Carlos R.", live: true },
  { name: "Lucía P.", live: false },
];

const KPIS: { label: string; to: number; mobileHidden?: boolean }[] = [
  { label: "Activas", to: 24 },
  { label: "Agentes", to: 18 },
  { label: "En cola", to: 3, mobileHidden: true },
];

/** Tiny live call equalizer; flat under reduced motion. */
function Waveform({ reduce }: { reduce: boolean | null }) {
  const delays = [0, 0.15, 0.3, 0.1, 0.22];
  return (
    <span className="hidden h-3 items-end gap-[2px] sm:flex" aria-hidden="true">
      {delays.map((d, i) => (
        <span
          key={i}
          className={reduce ? "" : "animate-eq-bar"}
          style={{
            width: 2,
            height: "100%",
            borderRadius: 1,
            background: CYAN,
            transformOrigin: "bottom",
            animationDelay: `${d}s`,
            ...(reduce ? { transform: "scaleY(0.55)" } : {}),
          }}
        />
      ))}
    </span>
  );
}

function LiveOpsCore({ reduce }: { reduce: boolean | null }) {
  return (
    <div
      className="w-full overflow-hidden rounded-2xl border border-[#06b6d4]/40 bg-background-soft/95 backdrop-blur"
      style={{
        boxShadow:
          "0 0 0 1px rgba(6,182,212,0.25), 0 0 30px 5px rgba(6,182,212,0.38), 0 28px 56px -28px rgba(2,6,23,0.95)",
      }}
    >
      {/* header */}
      <div className="flex items-center justify-between border-b border-[#06b6d4]/15 px-3 py-2">
        <span className="font-mono text-sm font-semibold tracking-wide text-white">
          CC365
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-[rgba(6,182,212,0.12)] px-1.5 py-0.5 font-mono text-[0.5rem] uppercase tracking-[0.16em] text-[#67e8f9]">
          <span
            className="animate-node-pulse size-1.5 rounded-full"
            style={{ background: LIVE, boxShadow: `0 0 6px ${LIVE}` }}
          />
          En vivo
        </span>
      </div>

      <div className="p-2.5">
        {/* live KPIs */}
        <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3">
          {KPIS.map((k) => (
            <div
              key={k.label}
              className={`rounded-lg border border-surface-border bg-surface px-1.5 py-1.5 text-center${
                k.mobileHidden ? " hidden sm:block" : ""
              }`}
            >
              <p className="text-sm font-semibold text-text-primary">
                <Counter to={k.to} />
              </p>
              <p className="font-mono text-[0.45rem] uppercase tracking-wide text-text-muted">
                {k.label}
              </p>
            </div>
          ))}
        </div>

        {/* live agent monitor */}
        <div className="mt-2 space-y-1">
          {AGENTS.map((a) => (
            <div
              key={a.name}
              className="flex items-center gap-2 rounded-md border border-surface-border bg-surface px-2 py-1"
            >
              <span
                className="size-4 shrink-0 rounded-full"
                style={{ background: `linear-gradient(135deg, ${CYAN}, ${BLUE})` }}
              />
              <span className="flex-1 truncate text-[0.6rem] text-text-secondary">
                {a.name}
              </span>
              {a.live ? <Waveform reduce={reduce} /> : null}
              <span
                className="inline-flex items-center gap-1 text-[0.5rem] font-medium"
                style={{ color: a.live ? "#67e8f9" : "#94a3b8" }}
              >
                <span
                  className="size-1.5 rounded-full"
                  style={{
                    background: a.live ? LIVE : "#64748b",
                    boxShadow: a.live ? `0 0 6px ${LIVE}` : "none",
                  }}
                />
                <span className="hidden sm:inline">
                  {a.live ? "En llamada" : "Libre"}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
