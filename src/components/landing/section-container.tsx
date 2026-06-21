import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/reveal";

type SectionContainerProps = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
  align?: "center" | "left";
};

export function SectionContainer({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  align = "center",
}: SectionContainerProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 sm:px-6 sm:py-28 ${className ?? ""}`}
    >
      {(eyebrow || title || description) && (
        <div className={`mx-auto flex max-w-3xl flex-col gap-5 ${alignment}`}>
          {eyebrow && (
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-text-secondary">
                <span className="size-1.5 rounded-full bg-accent-2 shadow-[0_0_8px_var(--color-accent-2)]" />
                {eyebrow}
              </span>
            </Reveal>
          )}
          {title && (
            <Reveal delay={0.05}>
              <h2 className="text-balance text-3xl font-semibold leading-[1.1] tracking-tight text-text-primary sm:text-4xl md:text-[2.75rem]">
                {title}
              </h2>
            </Reveal>
          )}
          {description && (
            <Reveal delay={0.1}>
              <p className="text-pretty text-base leading-relaxed text-text-secondary sm:text-lg">
                {description}
              </p>
            </Reveal>
          )}
        </div>
      )}
      <div className={eyebrow || title || description ? "mt-14 sm:mt-16" : ""}>
        {children}
      </div>
    </section>
  );
}
