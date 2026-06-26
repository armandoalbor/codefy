import { SectionContainer } from "./section-container";
import { FeatureCard } from "./feature-card";
import { Reveal } from "@/components/ui/reveal";
import type { FeatureGridContent } from "@/content/types";

type PositioningSectionProps = { content: FeatureGridContent };

export function PositioningSection({ content }: PositioningSectionProps) {
  return (
    <SectionContainer title={content.title} description={content.description}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {content.items.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.08} className="h-full">
            <FeatureCard {...card} />
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
