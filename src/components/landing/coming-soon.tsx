import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CtaButton } from "./cta-button";
import { LightBeams } from "@/components/brand/light-beams";
import { NeuralFlow } from "@/components/brand/codefy-pulse";
import { buildWhatsApp, whatsappMessages } from "@/content/shared";

type ComingSoonProps = {
  eyebrow: string;
  title: string;
  description: string;
};

/**
 * Shared "Próximamente" screen for deferred spoke routes. Rendered as a Server
 * Component — the route exists (no 404) while the offering is still cooking.
 */
export function ComingSoon({ eyebrow, title, description }: ComingSoonProps) {
  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden px-5 py-32 sm:px-6">
      <div className="grid-bg pointer-events-none absolute inset-0 -z-20" />
      <div className="atmosphere -z-10" />
      <LightBeams className="-z-10" />

      <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-text-secondary backdrop-blur">
          <span className="size-1.5 rounded-full bg-accent-2 shadow-[0_0_8px_var(--color-accent-2)]" />
          {eyebrow}
        </span>

        <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl">
          <span className="text-gradient">{title}</span>
        </h1>

        <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-text-secondary sm:text-lg">
          {description}
        </p>

        <NeuralFlow className="mt-8 h-8 w-56 opacity-75" />

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <CtaButton href={buildWhatsApp(whatsappMessages.general)}>
            Cuéntanos tu proyecto
          </CtaButton>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight text-text-secondary transition-colors hover:text-text-primary"
          >
            <ArrowLeft className="size-4" />
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
