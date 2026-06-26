import type { Metadata } from "next";
import { HeroSection } from "@/components/landing/hero-section";
import { SpokeCapabilities } from "@/components/landing/spoke-capabilities";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { seoContent } from "@/content/seo-optimizacion";

export const metadata: Metadata = {
  title: seoContent.meta.title,
  description: seoContent.meta.description,
  alternates: { canonical: seoContent.meta.canonical },
};

/**
 * /seo-optimizacion — service spoke. Server Component (exports metadata)
 * composing the spoke order: hero → capabilities → final CTA. No proof block:
 * there is no live case to show yet. Icon-bearing capabilities are fed to a
 * server section component only; the icon-free hero goes to the client
 * HeroSection. Copy is approved verbatim.
 */
export default function SeoOptimizacionPage() {
  const content = seoContent;

  return (
    <main>
      <HeroSection content={content.hero} />
      <SpokeCapabilities content={content.capabilities} />
      <FinalCtaSection content={content.finalCta} />
    </main>
  );
}
