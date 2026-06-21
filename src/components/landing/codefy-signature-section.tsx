"use client";

import { Heart } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Logo } from "./logo";
import { Spotlight } from "@/components/ui/spotlight";
import { NeuralFlow } from "@/components/brand/codefy-pulse";
import { signature } from "@/lib/content";

/** The seal, revealed as if it were being signed by hand. */
function SignatureDraw() {
  const reduce = useReducedMotion();

  return (
    <div className="relative">
      <svg
        viewBox="0 0 320 90"
        fill="none"
        className="h-20 w-full"
        aria-label="Firma de Codefy"
      >
        <motion.path
          d="M22 56 C18 34 40 24 50 38 C58 49 44 64 36 54 C30 47 44 36 64 40 C84 44 80 60 96 58 C112 56 110 38 122 40 C134 42 130 62 144 58 C156 55 152 40 164 42 C178 44 176 60 190 56 C206 51 198 34 214 36 C230 38 226 60 244 54 C262 48 258 36 276 42 C290 47 296 40 304 32"
          stroke="url(#sig-grad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        />
        {/* pen nib that travels with the stroke */}
        {!reduce && (
          <motion.circle
            r="3"
            fill="#fff"
            className="drop-shadow-[0_0_6px_var(--color-accent)]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 1, 1, 0] }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 2.2, ease: "easeInOut", times: [0, 0.05, 0.95, 1] }}
            style={{ offsetPath: "path('M22 56 C18 34 40 24 50 38 C58 49 44 64 36 54 C30 47 44 36 64 40 C84 44 80 60 96 58 C112 56 110 38 122 40 C134 42 130 62 144 58 C156 55 152 40 164 42 C178 44 176 60 190 56 C206 51 198 34 214 36 C230 38 226 60 244 54 C262 48 258 36 276 42 C290 47 296 40 304 32')" }}
          />
        )}
        <defs>
          <linearGradient id="sig-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-accent-2)" />
          </linearGradient>
        </defs>
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: reduce ? 0 : 2 }}
        className="mt-1 flex items-center justify-center gap-2 text-sm text-text-secondary"
      >
        Hecho con
        <Heart className="size-3.5 fill-accent text-accent" />
        por
        <span className="font-semibold text-gradient-accent">Codefy</span>
      </motion.div>
    </div>
  );
}

export function CodefySignatureSection() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-6 sm:py-28">
      <div className="group relative grid items-center gap-10 overflow-hidden rounded-[var(--radius-card)] border border-surface-border bg-background-soft p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
        <Spotlight />
        <div className="pointer-events-none absolute -right-20 top-0 size-64 rounded-full bg-accent/15 blur-3xl" />

        {/* story */}
        <div className="relative">
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent-2">
            El sello Codefy
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-[1.12] tracking-tight text-text-primary sm:text-4xl">
            {signature.title}
          </h2>
          <div className="mt-5 space-y-1">
            {signature.story.map((line) => (
              <p
                key={line}
                className="text-lg font-medium leading-snug text-text-primary"
              >
                {line}
              </p>
            ))}
          </div>
          <p className="mt-4 text-pretty text-base leading-relaxed text-text-secondary">
            {signature.description}
          </p>
          <NeuralFlow tone="violet" className="mt-8 hidden h-8 w-56 opacity-75 lg:block" />
        </div>

        {/* signing canvas */}
        <div className="relative">
          <div className="glass rounded-2xl p-1.5 shadow-[var(--shadow-soft)]">
            <div className="rounded-xl bg-background p-6">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-white/30" />
                <span className="size-2 rounded-full bg-white/20" />
                <span className="size-2 rounded-full bg-white/10" />
                <span className="ml-2 font-mono text-[0.6rem] text-text-muted">
                  tunegocio.com
                </span>
              </div>

              <div className="mt-6 space-y-2">
                <div className="h-2 w-2/3 rounded-full bg-surface-strong" />
                <div className="h-2 w-1/2 rounded-full bg-surface" />
              </div>

              <div className="divider-glow my-6" />

              <div className="mb-4 flex items-center justify-between">
                <Logo />
                <span className="font-mono text-[0.6rem] text-text-muted">
                  © 2026
                </span>
              </div>

              <SignatureDraw />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
