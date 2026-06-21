import { SectionContainer } from "./section-container";
import { FeatureCard } from "./feature-card";
import { Reveal } from "@/components/ui/reveal";
import { positioning } from "@/lib/content";

export function PositioningSection() {
  return (
    <SectionContainer
      title={positioning.title}
      description={positioning.description}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {positioning.cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.08} className="h-full">
            <FeatureCard {...card} />
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
