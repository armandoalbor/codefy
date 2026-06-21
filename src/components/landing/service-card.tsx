import type { LucideIcon } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

/** Compact service card used for the non-featured services. */
export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group relative flex h-full items-start gap-4 overflow-hidden rounded-[var(--radius-card)] border border-surface-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-surface-border-strong hover:bg-surface-strong hover:shadow-[0_24px_60px_-24px_rgba(124,58,237,0.5)]">
      <Spotlight variant="card" />
      <span className="relative grid size-11 shrink-0 place-items-center rounded-xl border border-surface-border bg-background-soft text-accent-2 transition-colors duration-300 group-hover:text-text-primary">
        <Icon className="size-5" />
      </span>
      <div className="relative">
        <h3 className="text-base font-semibold tracking-tight text-text-primary">
          {title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
          {description}
        </p>
      </div>
    </div>
  );
}
