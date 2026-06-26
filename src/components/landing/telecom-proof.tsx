import { Check, ImageIcon } from "lucide-react";
import { SectionContainer } from "./section-container";
import { CC365Preview } from "./project-previews";
import { Spotlight } from "@/components/ui/spotlight";
import { Reveal } from "@/components/ui/reveal";
import { NeuralFlow } from "@/components/brand/codefy-pulse";
import type { ProofShot, SpokeProofContent } from "@/content/types";

/**
 * Swap-ready screenshot frame. Renders a real <img> once `shot.src` exists;
 * until then it shows a styled empty-state placeholder with the caption.
 *
 * SWAP POINT: when real captures are ready, set `src` on the matching ProofShot
 * in src/content/telecomunicaciones.ts — no layout changes needed here. We do
 * NOT show any metrics, only descriptive captions (proof-content-policy).
 */
function ShotFrame({ shot }: { shot: ProofShot }) {
  return (
    <figure className="group/shot overflow-hidden rounded-2xl border border-surface-border bg-background">
      <div className="flex items-center gap-1.5 border-b border-surface-border px-3 py-2">
        <span className="size-2 rounded-full bg-[#ff5f57]" />
        <span className="size-2 rounded-full bg-[#febc2e]" />
        <span className="size-2 rounded-full bg-[#28c840]" />
      </div>

      {shot.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={shot.src}
          alt={shot.caption}
          className="aspect-video w-full object-cover"
        />
      ) : (
        <div className="relative grid aspect-video place-items-center overflow-hidden bg-background-soft">
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
          <div className="relative flex flex-col items-center gap-2 text-text-muted transition-colors duration-300 group-hover/shot:text-text-secondary">
            <ImageIcon className="size-5" />
            <span className="font-mono text-[0.58rem] uppercase tracking-[0.18em]">
              Captura próximamente
            </span>
          </div>
        </div>
      )}

      <figcaption className="border-t border-surface-border px-3 py-2.5 text-[0.72rem] leading-snug text-text-secondary">
        {shot.caption}
      </figcaption>
    </figure>
  );
}

type TelecomProofProps = { content: SpokeProofContent };

/**
 * cc365 proof block. Leads with the live product UI (CC365Preview, itself a
 * swap-ready recreation) and a captioned, swap-ready gallery. Status badge plus
 * descriptive capability highlights — deliberately NO fabricated metrics.
 *
 * Server component: renders its Lucide icons inline, never passing icon
 * component references across the server→client boundary.
 */
export function TelecomProof({ content }: TelecomProofProps) {
  const { product } = content;
  const isLive = product.status === "live";

  return (
    <SectionContainer
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <Reveal>
        <div className="group relative grid gap-10 overflow-hidden rounded-[var(--radius-card)] border border-surface-border-strong bg-background-soft p-6 sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <Spotlight />
          <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-20 size-72 rounded-full bg-accent-2/15 blur-3xl" />

          {/* Live product UI — swap-ready recreation of the real cc365 app */}
          <div className="relative animate-float-slower">
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-accent-2/10 blur-2xl" />
            <div className="aspect-video overflow-hidden rounded-2xl border border-surface-border">
              <CC365Preview />
            </div>
          </div>

          {/* Story: product badge + descriptive highlights (no metrics) */}
          <div className="relative">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-accent-2">
                {product.category}
              </span>
              {isLive && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(34,197,94,0.12)] px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-wider text-[#4ade80]">
                  <span className="size-1.5 rounded-full bg-[#4ade80] shadow-[0_0_8px_#4ade80]" />
                  En producción
                </span>
              )}
            </div>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
              {product.name}
            </h3>

            <ul className="mt-6 space-y-3">
              {content.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-sm leading-relaxed text-text-secondary sm:text-base"
                >
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border border-surface-border bg-surface text-accent-2">
                    <Check className="size-3" />
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>

            <NeuralFlow tone="cyan" className="mt-7 h-8 w-full opacity-80" />
          </div>
        </div>
      </Reveal>

      {/* Swap-ready gallery — placeholders today, real captures drop in later */}
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {content.shots.map((shot, i) => (
          <Reveal key={shot.caption} delay={i * 0.08} className="h-full">
            <ShotFrame shot={shot} />
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
