import { SectionContainer } from "./section-container";
import { FeatureCard } from "./feature-card";
import { Reveal } from "@/components/ui/reveal";
import type { FeatureGridContent } from "@/content/types";

type SpokeCapabilitiesProps = { content: FeatureGridContent };

/**
 * Shared capabilities grid for every service spoke. A bento layout where the
 * lead capability spans two columns so an odd count (5) fills two rows cleanly
 * with no orphan card.
 *
 * Server component: it renders the Lucide icons itself (via FeatureCard), so the
 * icon-bearing content never crosses the server→client boundary.
 */
export function SpokeCapabilities({ content }: SpokeCapabilitiesProps) {
  return (
    <SectionContainer
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {content.items.map((card, i) => (
          <Reveal
            key={card.title}
            delay={i * 0.08}
            className={`h-full ${i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}`}
          >
            <FeatureCard {...card} />
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
