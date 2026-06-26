import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionContainer } from "./section-container";
import { ProjectCard } from "./project-card";
import {
  AnnyPreview,
  CC365Preview,
  ChilaPreview,
  SoonPreview,
} from "./project-previews";
import { Spotlight } from "@/components/ui/spotlight";
import { Reveal } from "@/components/ui/reveal";
import { NeuralFlow } from "@/components/brand/codefy-pulse";
import type { PortfolioContent } from "@/content/types";
import type { ReactNode } from "react";

const previews: Record<string, ReactNode> = {
  "Anny Studio": <AnnyPreview />,
  CC365: <CC365Preview />,
  ChilaKillers: <ChilaPreview />,
  Próximamente: <SoonPreview />,
};

type PortfolioSectionProps = { content: PortfolioContent };

export function PortfolioSection({ content }: PortfolioSectionProps) {
  const { featured } = content;
  const featuredPreview = previews[featured.name] ?? <AnnyPreview />;
  const hasMetrics = (featured.metrics?.length ?? 0) > 0;

  return (
    <SectionContainer
      id="proyectos"
      eyebrow="Portafolio"
      title={content.title}
      description={content.description}
    >
      {/* Featured — Anny Studio */}
      <Reveal>
        <div className="group relative mb-5 grid gap-8 overflow-hidden rounded-[var(--radius-card)] border border-surface-border-strong bg-background-soft p-6 sm:p-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          <Spotlight />
          <div
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full blur-3xl"
            style={{ background: `${featured.accent}33` }}
          />
          <div className="pointer-events-none absolute -bottom-24 -left-20 size-72 rounded-full bg-accent-2/15 blur-3xl" />

          {/* preview — showcase piece with contextual glow + subtle float */}
          <div className="relative animate-float-slower">
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-accent-2/10 blur-2xl" />
            {featuredPreview}
          </div>

          {/* storytelling */}
          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-accent-2">
                {featured.category}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgba(34,197,94,0.12)] px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-wider text-[#4ade80]">
                <span className="size-1.5 rounded-full bg-[#4ade80] shadow-[0_0_8px_#4ade80]" />
                Proyecto destacado
              </span>
            </div>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
              {featured.href ? (
                <Link
                  href={featured.href}
                  className="inline-flex items-center gap-2 transition-colors hover:text-gradient-accent"
                >
                  {featured.name}
                  <ArrowUpRight className="size-5 text-text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-text-primary" />
                </Link>
              ) : (
                <span className="inline-flex items-center gap-2">
                  {featured.name}
                  <ArrowUpRight className="size-5 text-text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-text-primary" />
                </span>
              )}
            </h3>

            <p className="mt-4 text-pretty text-sm leading-relaxed text-text-secondary sm:text-base">
              {featured.story}
            </p>

            {/* metrics — Codefy Neural Flow as the brand divider */}
            <NeuralFlow tone="cyan" className="mt-6 h-8 w-full opacity-80" />
            {hasMetrics && (
              <dl className="mt-4 grid grid-cols-3 gap-4">
                {featured.metrics!.map((m) => (
                  <div key={m.label}>
                    <dt className="sr-only">{m.label}</dt>
                    <dd className="text-2xl font-semibold text-gradient-accent">
                      {m.value}
                    </dd>
                    <p className="mt-1 text-xs text-text-muted">{m.label}</p>
                  </div>
                ))}
              </dl>
            )}
          </div>
        </div>
      </Reveal>

      {/* Secondary grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {content.projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.08} className="h-full">
            <ProjectCard {...project} preview={previews[project.name]} />
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}
