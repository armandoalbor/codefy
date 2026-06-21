import { CtaButton } from "./cta-button";
import { Reveal } from "@/components/ui/reveal";
import { Spotlight } from "@/components/ui/spotlight";
import { Magnetic } from "@/components/ui/magnetic";
import { LightBeams } from "@/components/brand/light-beams";
import { AmbientParticles } from "@/components/brand/ambient-particles";
import { NeuralFlow, PulseRings } from "@/components/brand/codefy-pulse";
import { finalCta, CONTACT_HREF } from "@/lib/content";

export function FinalCtaSection() {
  return (
    <section
      id="contacto"
      className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-16 sm:px-6 sm:py-24"
    >
      <Reveal>
        <div className="group relative overflow-hidden rounded-[2rem] border border-surface-border-strong bg-background-soft px-6 py-16 text-center sm:px-12 sm:py-24">
          <Spotlight />

          {/* cinematic layers — the final scene */}
          <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" />
          <LightBeams />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_120%_at_50%_0%,rgba(124,58,237,0.32),transparent_60%)]" />
          <div className="aurora animate-breathe left-1/2 top-0 size-96 -translate-x-1/2 bg-accent-2 opacity-25" />
          <div className="aurora animate-breathe left-1/2 top-10 size-64 -translate-x-1/2 bg-accent opacity-20 [animation-delay:-3s]" />
          <AmbientParticles />
          <div className="noise" />

          {/* core glyph motif with Codefy Pulse rings */}
          <div className="relative mx-auto mb-7 grid size-14 place-items-center rounded-2xl text-white core-node">
            <PulseRings count={3} color="border-accent-2/30" className="absolute -inset-2" />
            <svg viewBox="0 0 24 24" fill="none" className="relative size-7">
              <path
                d="M9 5.5 4.5 12 9 18.5M15 5.5 19.5 12 15 18.5"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-semibold leading-[1.12] tracking-tight text-text-primary sm:text-4xl md:text-[2.75rem]">
              {finalCta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-text-secondary sm:text-lg">
              {finalCta.description}
            </p>
            <div className="mt-9 flex justify-center">
              <Magnetic>
                <CtaButton href={CONTACT_HREF} className="px-8 py-3.5 text-base">
                  {finalCta.cta}
                </CtaButton>
              </Magnetic>
            </div>
          </div>

          {/* Codefy Neural Flow — closing the scene */}
          <NeuralFlow className="pointer-events-none absolute inset-x-0 bottom-0 h-8 w-full opacity-70" />
        </div>
      </Reveal>
    </section>
  );
}
