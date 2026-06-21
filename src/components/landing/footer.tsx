import { Heart } from "lucide-react";
import { Logo } from "./logo";
import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-surface-border">
      <div className="pointer-events-none absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-14 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              {footer.tagline}
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-text-muted">
              Navegación
            </span>
            {footer.columns.map((col) => (
              <a
                key={col.href}
                href={col.href}
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {col.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="divider-glow my-10" />

        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-text-muted">{footer.legal}</p>
          <span className="inline-flex items-center gap-1.5 text-xs text-text-muted">
            Hecho con
            <Heart className="size-3 fill-accent text-accent" />
            por
            <span className="font-semibold text-gradient-accent">Codefy</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
