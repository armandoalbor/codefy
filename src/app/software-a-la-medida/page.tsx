import type { Metadata } from "next";
import { HeroSection } from "@/components/landing/hero-section";
import { SpokeCapabilities } from "@/components/landing/spoke-capabilities";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { softwareContent } from "@/content/software-a-la-medida";

export const metadata: Metadata = {
  title: softwareContent.meta.title,
  description: softwareContent.meta.description,
  alternates: { canonical: softwareContent.meta.canonical },
};

/**
 * /software-a-la-medida — service spoke. Server Component (exports metadata)
 * composing the spoke order: hero → capabilities → final CTA. No proof block:
 * there is no live product to show yet. Icon-bearing capabilities are fed to a
 * server section component only; the icon-free hero goes to the client
 * HeroSection. Copy is approved verbatim.
 */
export default function SoftwareALaMedidaPage() {
  const content = softwareContent;

  return (
    <main>
      <HeroSection content={content.hero} />
      <SpokeCapabilities content={content.capabilities} />
      <FinalCtaSection content={content.finalCta} />
    </main>
  );
}
