import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { PositioningSection } from "@/components/landing/positioning-section";
import { ServicesSection } from "@/components/landing/services-section";
import { PortfolioSection } from "@/components/landing/portfolio-section";
import { CodefySignatureSection } from "@/components/landing/codefy-signature-section";
import { ProcessSection } from "@/components/landing/process-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { Footer } from "@/components/landing/footer";
import { landingPagesContent } from "@/content/landing-pages";
// import { CodefySignatureBadge } from "@/components/brand/codefy-signature-badge";

export default function Home() {
  const content = landingPagesContent;

  return (
    <>
      <Header />
      <main>
        <HeroSection content={content.hero} />
        <PositioningSection content={content.positioning} />
        <ServicesSection content={content.services} />
        <PortfolioSection content={content.portfolio} />
        <CodefySignatureSection content={content.signature} />
        <ProcessSection content={content.process} />
        <FinalCtaSection content={content.finalCta} />
      </main>
      <Footer />
      {/* Preview of the exportable signature badge. On Codefy's own site it's
          self-referential — remove this line if you only want it on client sites. */}
      {/* <CodefySignatureBadge /> */}
    </>
  );
}
