import type { Metadata } from "next";
import { HeroSection } from "@/components/landing/hero-section";
import { PositioningSection } from "@/components/landing/positioning-section";
import { ServicesSection } from "@/components/landing/services-section";
import { PortfolioSection } from "@/components/landing/portfolio-section";
import { CodefySignatureSection } from "@/components/landing/codefy-signature-section";
import { ProcessSection } from "@/components/landing/process-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { landingPagesContent } from "@/content/landing-pages";

export const metadata: Metadata = {
  title: "Landing Pages Premium",
  description:
    "Landings rápidas, elegantes y orientadas a conversión para validar, vender o presentar tu negocio de forma profesional.",
  alternates: { canonical: "/landing-pages" },
};

export default function LandingPagesPage() {
  const content = landingPagesContent;

  return (
    <main>
      <HeroSection content={content.hero} />
      <PositioningSection content={content.positioning} />
      <ServicesSection content={content.services} />
      <PortfolioSection content={content.portfolio} />
      <CodefySignatureSection content={content.signature} />
      <ProcessSection content={content.process} />
      <FinalCtaSection content={content.finalCta} />
    </main>
  );
}
