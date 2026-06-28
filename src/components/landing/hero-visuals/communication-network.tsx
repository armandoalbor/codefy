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

// Six entities evenly orbiting the CC365 core (60° apart, radius 138).
const NODES: Node[] = [
  { label: "PBX", icon: Server, x: 200, y: 62, begin: "0s" },
  { label: "WhatsApp", icon: MessageCircle, x: 320, y: 131, begin: "-0.7s" },
  { label: "CRM", icon: Database, x: 320, y: 269, begin: "-1.4s" },
  { label: "Agente", icon: Headset, x: 200, y: 338, begin: "-2.1s" },
  { label: "Supervisor", icon: Eye, x: 80, y: 269, begin: "-2.8s" },
  { label: "Cliente", icon: User, x: 80, y: 131, begin: "-3.5s" },
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
        <div className="relative size-full">
          {/* connections + traveling pulses */}
          <svg
            viewBox="0 0 400 400"
            fill="none"
            className="absolute inset-0 size-full"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="cn-line" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor={CYAN} stopOpacity="0.7" />
                <stop offset="100%" stopColor={BLUE} stopOpacity="0.25" />
              </linearGradient>
            </defs>

            {NODES.map((n) => {
              const id = `cn-path-${n.label}`;
              return (
                <g key={n.label}>
                  <path
                    id={id}
                    d={`M200 200 L${n.x} ${n.y}`}
                    stroke="url(#cn-line)"
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

          {/* real-time rings + CC365 core */}
          <div className="absolute left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2">
            <PulseRings
              count={3}
              color="border-[#06b6d4]/25"
              className="absolute inset-0"
            />
          </div>

          <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <div
              className="grid place-items-center rounded-2xl border border-[#06b6d4]/40 bg-background-soft/90 px-5 py-3.5 backdrop-blur"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(6,182,212,0.25), 0 0 28px 4px rgba(6,182,212,0.4)",
              }}
            >
              <span className="font-mono text-base font-semibold tracking-wide text-white">
                CC365
              </span>
              <span className="mt-1 inline-flex items-center gap-1 font-mono text-[0.55rem] uppercase tracking-[0.18em] text-[#67e8f9]">
                <span
                  className="animate-node-pulse size-1.5 rounded-full"
                  style={{ background: LIVE, boxShadow: `0 0 6px ${LIVE}` }}
                />
                En vivo
              </span>
            </div>
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
