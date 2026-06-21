import { Check } from "lucide-react";
import { SectionContainer } from "./section-container";
import { ServiceCard } from "./service-card";
import { CtaButton } from "./cta-button";
import { Reveal } from "@/components/ui/reveal";
import { services, CONTACT_HREF } from "@/lib/content";

export function ServicesSection() {
  const { featured } = services;
  const FeaturedIcon = featured.icon;

  return (
    <SectionContainer
      id="servicios"
      eyebrow="Servicios"
      title={services.title}
      description={services.description}
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        {/* Featured — protagonist */}
        <Reveal from="left" className="lg:col-span-5">
          <div className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-surface-border-strong bg-background-soft p-7 shadow-[var(--shadow-soft)] sm:p-8">
            {/* gradient atmosphere */}
            <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-accent/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-10 size-48 rounded-full bg-accent-2/20 blur-3xl" />

            <div className="relative flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-xl bg-gradient-accent text-white shadow-[0_10px_30px_-8px_rgba(124,58,237,0.8)]">
                <FeaturedIcon className="size-6" />
              </span>
              <span className="rounded-full border border-surface-border bg-surface px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-accent-2">
                {featured.eyebrow}
              </span>
            </div>

            <h3 className="relative mt-6 text-2xl font-semibold tracking-tight text-text-primary">
              {featured.title}
            </h3>
            <p className="relative mt-3 text-sm leading-relaxed text-text-secondary">
              {featured.description}
            </p>

            <ul className="relative mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {featured.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-text-secondary"
                >
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-accent-soft text-accent-2">
                    <Check className="size-3" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="relative mt-8 pt-2">
              <CtaButton href={CONTACT_HREF}>{featured.cta}</CtaButton>
            </div>
          </div>
        </Reveal>

        {/* Other services — compact stack */}
        <div className="flex flex-col gap-4 lg:col-span-7">
          {services.others.map((service, i) => (
            <Reveal key={service.title} from="right" delay={i * 0.08} className="h-full">
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
