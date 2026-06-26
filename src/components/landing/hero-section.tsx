"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import { CtaButton } from "./cta-button";
import { HeroShowcase } from "./hero-showcase";
import { Spotlight } from "@/components/ui/spotlight";
import { Magnetic } from "@/components/ui/magnetic";
import { LightBeams } from "@/components/brand/light-beams";
import { AmbientParticles } from "@/components/brand/ambient-particles";
import { NeuralFlow } from "@/components/brand/codefy-pulse";
import type { HeroContent } from "@/content/types";

type HeroSectionProps = {
  content: HeroContent;
  /** Optional visual slot; defaults to the standard product showcase. */
  showcase?: ReactNode;
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export function HeroSection({ content, showcase }: HeroSectionProps) {
  const supporting = content.supporting ?? [];

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      {/* Layer 1 — tech grid */}
      <div className="grid-bg pointer-events-none absolute inset-0 -z-30" />
      {/* Layer 2 — radial atmosphere (blue / violet / cyan) */}
      <div className="atmosphere -z-20" />
      {/* Layer 3 — drifting glow + cinematic light beams */}
      <div className="aurora animate-drift left-[-12%] top-[-12%] -z-20 size-[38rem] bg-accent opacity-25" />
      <div className="aurora animate-drift right-[-12%] top-[6%] -z-20 size-[34rem] bg-accent-2 opacity-25 [animation-delay:-9s]" />
      <LightBeams className="-z-20" />
      {/* Layer 6 — ambient particles + film grain + cursor spotlight */}
      <AmbientParticles className="-z-10" />
      <div className="noise -z-10" />
      <Spotlight />

      {/* Codefy Neural Flow — brand current anchoring the hero */}
      <NeuralFlow className="pointer-events-none absolute inset-x-0 bottom-4 -z-10 h-12 w-full opacity-70" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* Layer 5 — content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-text-secondary backdrop-blur"
          >
            <span className="size-1.5 rounded-full bg-accent-2 shadow-[0_0_8px_var(--color-accent-2)]" />
            {content.eyebrow}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
          >
            <span className="text-text-primary">{content.headline[0]}</span>{" "}
            <span className="text-gradient">{content.headline[1]}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-text-secondary sm:text-lg"
          >
            {content.subheadline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
          >
            <Magnetic>
              <CtaButton href={content.ctaPrimary.href}>
                {content.ctaPrimary.label}
              </CtaButton>
            </Magnetic>
            {content.ctaSecondary && (
              <CtaButton
                href={content.ctaSecondary.href}
                variant="secondary"
                withArrow={false}
              >
                {content.ctaSecondary.label}
              </CtaButton>
            )}
          </motion.div>

          {supporting.length > 0 && (
            <motion.p
              variants={item}
              className="mt-8 font-mono text-xs uppercase tracking-[0.15em] text-text-muted"
            >
              Hecho con{" "}
              {supporting.map((word, i) => (
                <span key={word}>
                  <span className="text-text-secondary">{word}</span>
                  {i < supporting.length - 1 && (
                    <span className="mx-1.5 text-accent">·</span>
                  )}
                </span>
              ))}
            </motion.p>
          )}
        </motion.div>

        {/* Layer 4–6 — cinematic product showcase */}
        <div className="relative z-10">{showcase ?? <HeroShowcase />}</div>
      </div>
    </section>
  );
}
