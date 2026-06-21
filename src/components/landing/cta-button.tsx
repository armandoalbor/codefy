import type { ComponentPropsWithoutRef } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary";

type CtaButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: Variant;
  withArrow?: boolean;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-accent text-white shadow-[0_14px_40px_-12px_rgba(124,58,237,0.7)] hover:shadow-[0_18px_55px_-10px_rgba(124,58,237,0.95)] hover:-translate-y-0.5",
  secondary:
    "glass text-text-primary hover:border-surface-border-strong hover:bg-surface-strong",
};

export function CtaButton({
  variant = "primary",
  withArrow = true,
  className,
  children,
  ...props
}: CtaButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className ?? ""}`} {...props}>
      {/* sheen sweep on hover (primary only) */}
      {variant === "primary" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.35)_50%,transparent_70%)] transition-transform duration-700 ease-out group-hover:translate-x-full"
        />
      )}
      <span className="relative inline-flex items-center gap-2">
        {children}
        {withArrow && (
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
    </a>
  );
}
