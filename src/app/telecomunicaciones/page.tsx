import type { Metadata } from "next";
import { HeroSection } from "@/components/landing/hero-section";
import { TelecomCapabilities } from "@/components/landing/telecom-capabilities";
import { TelecomProof } from "@/components/landing/telecom-proof";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { telecomContent } from "@/content/telecomunicaciones";

export const metadata: Metadata = {
  title: telecomContent.meta.title,
  description: telecomContent.meta.description,
  alternates: { canonical: telecomContent.meta.canonical },
};

/**
 * /telecomunicaciones — the hero-niche spoke. Server Component (exports
 * metadata) composing the standard spoke order: hero → capabilities → cc365
 * proof → final CTA. Icon-bearing slices (capabilities, proof) are fed to
 * server section components only; the icon-free hero goes to the client
 * HeroSection. Copy is approved verbatim; proof carries no fabricated metrics.
 */
export default function TelecomunicacionesPage() {
  const content = telecomContent;

  return (
    <main>
      <HeroSection content={content.hero} />
      <TelecomCapabilities content={content.capabilities} />
      <TelecomProof content={content.proof} />
      <FinalCtaSection content={content.finalCta} />
    </main>
  );
}
