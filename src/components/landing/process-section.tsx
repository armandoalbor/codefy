import { SectionContainer } from "./section-container";
import { Reveal } from "@/components/ui/reveal";
import type { ProcessContent } from "@/content/types";

type ProcessSectionProps = { content: ProcessContent };

export function ProcessSection({ content }: ProcessSectionProps) {
  return (
    <SectionContainer id="proceso" eyebrow="Proceso" title={content.title}>
      <div className="relative">
        {/* connecting line (desktop) */}
        <div className="divider-glow absolute left-0 right-0 top-7 hidden lg:block" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {content.steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.number} delay={i * 0.1} from="up">
                <div className="relative flex flex-col">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                    <span className="relative grid size-14 shrink-0 place-items-center rounded-2xl border border-surface-border bg-background-soft">
                      <Icon className="size-6 text-accent-2" />
                    </span>
                    <span className="font-mono text-4xl font-semibold text-transparent [-webkit-text-stroke:1px_var(--color-surface-border-strong)] lg:absolute lg:right-0 lg:top-0">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
