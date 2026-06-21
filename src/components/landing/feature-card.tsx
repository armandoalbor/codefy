import type { LucideIcon } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group relative h-full overflow-hidden rounded-[var(--radius-card)] border border-surface-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-surface-border-strong hover:bg-surface-strong hover:shadow-[0_24px_60px_-24px_rgba(124,58,237,0.5)]">
      {/* cursor-following glow */}
      <Spotlight variant="card" />

      <span className="relative grid size-11 place-items-center rounded-xl border border-surface-border bg-background-soft text-accent-2 transition-colors duration-300 group-hover:text-text-primary">
        <Icon className="size-5" />
      </span>

      <h3 className="relative mt-5 text-lg font-semibold tracking-tight text-text-primary">
        {title}
      </h3>
      <p className="relative mt-2 text-sm leading-relaxed text-text-secondary">
        {description}
      </p>
    </div>
  );
}
