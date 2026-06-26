import type { Metadata } from "next";
import { HeroSection } from "@/components/landing/hero-section";
import { SpokeCapabilities } from "@/components/landing/spoke-capabilities";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { appsContent } from "@/content/apps-moviles";

export const metadata: Metadata = {
  title: appsContent.meta.title,
  description: appsContent.meta.description,
  alternates: { canonical: appsContent.meta.canonical },
};

/**
 * /apps-moviles — service spoke. Server Component (exports metadata) composing
 * the spoke order: hero → capabilities → final CTA. No proof block: there is no
 * live app to show yet. Icon-bearing capabilities are fed to a server section
 * component only; the icon-free hero goes to the client HeroSection. Copy is
 * approved verbatim.
 */
export default function AppsMovilesPage() {
  const content = appsContent;

  return (
    <main>
      <HeroSection content={content.hero} />
      <SpokeCapabilities content={content.capabilities} />
      <FinalCtaSection content={content.finalCta} />
    </main>
  );
}
