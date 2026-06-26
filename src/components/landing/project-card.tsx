import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import type { ProjectStatus } from "@/content/types";

type ProjectCardProps = {
  name: string;
  category: string;
  description: string;
  status: ProjectStatus;
  preview: ReactNode;
};

function StatusBadge({ status }: { status: ProjectStatus }) {
  const isSoon = status === "soon";
  return (
    <span
      className={`absolute right-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-wider backdrop-blur ${
        isSoon ? "bg-black/40 text-text-secondary" : "bg-black/40 text-[#4ade80]"
      }`}
    >
      <span
        className={`size-1.5 rounded-full ${
          isSoon ? "bg-text-muted" : "bg-[#4ade80] shadow-[0_0_8px_#4ade80]"
        }`}
      />
      {isSoon ? "Pronto" : "En vivo"}
    </span>
  );
}

export function ProjectCard({
  name,
  category,
  description,
  status,
  preview,
}: ProjectCardProps) {
  const isSoon = status === "soon";

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-surface-border bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:border-surface-border-strong hover:shadow-[0_28px_64px_-24px_rgba(6,182,212,0.4)]">
      <Spotlight variant="card" />
      <StatusBadge status={status} />

      {/* real UI recreation */}
      <div className="relative h-44 overflow-hidden border-b border-surface-border">
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]">
          {preview}
        </div>
      </div>

      {/* body */}
      <div className="relative flex flex-1 flex-col p-6">
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-accent-2">
          {category}
        </span>
        <h3 className="mt-2 flex items-center gap-1.5 text-lg font-semibold tracking-tight text-text-primary">
          {name}
          {!isSoon && (
            <ArrowUpRight className="size-4 text-text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-text-primary" />
          )}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
          {description}
        </p>
      </div>
    </div>
  );
}
