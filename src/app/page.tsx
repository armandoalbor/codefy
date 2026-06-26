import type { Metadata } from "next";
import { HeroSection } from "@/components/landing/hero-section";
import { PositioningSection } from "@/components/landing/positioning-section";
import { ServicesSection } from "@/components/landing/services-section";
import { PortfolioSection } from "@/components/landing/portfolio-section";
import { ProcessSection } from "@/components/landing/process-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { homeContent } from "@/content/home";

export const metadata: Metadata = {
  title: { absolute: "Codefy — Estudio de producto e ingeniería" },
  description:
    "Estudio de producto digital: ingeniería sólida y diseño premium, desde plataformas de telecomunicaciones hasta tu próxima web.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const content = homeContent;

  return (
    <main>
      <HeroSection content={content.hero} />
      <PositioningSection content={content.positioning} />
      <ServicesSection content={content.services} />
      <PortfolioSection content={content.portfolio} />
      <ProcessSection content={content.process} />
      <FinalCtaSection content={content.finalCta} />
    </main>
  );
}
