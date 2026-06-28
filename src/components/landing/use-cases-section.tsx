import { SectionContainer } from "./section-container";
import { FeatureCard } from "./feature-card";
import { Reveal } from "@/components/ui/reveal";
import type { UseCasesContent } from "@/content/types";

type UseCasesSectionProps = { content: UseCasesContent };

/**
 * "Casos de uso" — the bridge between a vertical's capabilities and its final
 * CTA. Helps the visitor self-identify with a real business scenario ("¿esto
 * aplica para mi empresa?").
 *
 * Reuses the shared card visual system (FeatureCard) in a uniform, scannable
 * grid with fade-up/stagger reveal. Server component: it renders the Lucide
 * icons itself, so icon-bearing content never crosses the server→client
 * boundary.
 */
export function UseCasesSection({ content }: UseCasesSectionProps) {
  return (
    <SectionContainer
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {content.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08} className="h-full">
            <FeatureCard {...item} />
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
