import Image from "next/image";

/**
 * CODEFY SIGNATURE BADGE — an elegant, non-invasive "made by" signature meant
 * to be dropped into OTHER landings (starting with AnnyStudio).
 *
 * V2 hierarchy: the MESSAGE leads, the BRAND is the reveal —
 *   ¿Te gusta este sitio?     (primary)
 *   Conoce quién lo construyó  (legible curiosity hook)
 *   [Codefy logo] →            (the answer)
 *
 * Portability notes (this file is designed to be copy-pasted out):
 *  - Self-contained: React + next/image + Tailwind only (no app tokens, no
 *    global CSS, no extra libs). Copy this file + /public/logo-dark.png.
 *  - DARK glass on purpose → legible on BOTH dark and light host sites.
 *  - Animations are self-injected CSS (entry slide, passive "breath"), each on
 *    its own element / CSS property so the three transforms never collide.
 *    Honored prefers-reduced-motion. No Motion dependency.
 *  - Remote config (cdn.codefy.mx/badge-config.json) can later feed these props.
 */

const CODEFY_URL = "https://codefy.mx";

type CodefySignatureBadgeProps = {
  href?: string;
  title?: string;
  subtitle?: string;
  variant?: "default" | "compact";
  position?: "bottom-right" | "bottom-center";
};

const POSITIONS: Record<NonNullable<CodefySignatureBadgeProps["position"]>, string> = {
  "bottom-right": "right-4 sm:right-6",
  "bottom-center": "left-1/2 -translate-x-1/2",
};

const STYLES = `
@keyframes codefy-badge-in {
  from { opacity: 0; translate: 0 12px; }
  to   { opacity: 1; translate: 0 0; }
}
@keyframes codefy-badge-breath {
  0%, 85%, 100% { scale: 1; }
  92.5%         { scale: 1.02; }
}
.codefy-badge-motion {
  animation:
    codefy-badge-in 600ms cubic-bezier(0.21,0.47,0.32,0.98) both,
    codefy-badge-breath 7s ease-in-out 2.5s infinite;
}
@media (prefers-reduced-motion: reduce) {
  .codefy-badge-motion { animation: codefy-badge-in 1ms both; }
}
`;

function Arrow() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="size-3.5 shrink-0 text-white/70 transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:text-white"
    >
      <path
        d="M3 8h9M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CodefySignatureBadge({
  href = CODEFY_URL,
  title = "¿Te gusta este sitio?",
  subtitle = "Construido por",
  variant = "default",
  position = "bottom-right",
}: CodefySignatureBadgeProps) {
  const compact = variant === "compact";

  return (
    // Wrapper owns positioning (incl. centering transform) so descendants are
    // free to use their own transforms without conflict.
    <div
      className={`fixed z-40 ${POSITIONS[position]}`}
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <style>{STYLES}</style>

      {/* motion layer: entry slide (translate) + passive breath (scale) */}
      <div className="codefy-badge-motion">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={compact ? `${title} · Codefy` : `${title} ${subtitle} · Codefy`}
          className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0b1020]/70 px-4 py-3 shadow-[0_10px_34px_-12px_rgba(2,6,23,0.85)] backdrop-blur-md transition duration-300 ease-out hover:-translate-y-0.5 hover:border-white/20 hover:bg-[#0b1020]/90 hover:shadow-[0_18px_46px_-12px_rgba(124,58,237,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed]"
        >
          {compact ? (
            <>
              <Image
                src="/logo-dark.png"
                alt="Codefy"
                width={1248}
                height={328}
                className="h-5 w-auto"
              />
              <span className="text-xs font-medium text-white/90 sm:text-sm">
                {title}
              </span>
              <Arrow />
            </>
          ) : (
            <div className="flex flex-col">
              {/* primary: the message leads */}
              <span className="text-center text-[0.9rem] font-semibold leading-snug text-white">
                {title}
              </span>
              {/* the reveal: "Construido por" + inline Codefy logo */}
              <span className="mt-1 flex items-center gap-1.5 text-xs leading-snug text-white/70 sm:text-[0.8rem]">
                {subtitle}
                <Image
                  src="/logo-dark.png"
                  alt="Codefy"
                  width={1248}
                  height={328}
                  className="h-4 w-auto opacity-90 sm:h-[1.1rem]"
                />
              </span>
            </div>
          )}
        </a>
      </div>
    </div>
  );
}
