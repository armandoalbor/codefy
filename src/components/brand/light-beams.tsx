/**
 * Subtle cinematic light beams (Tron / Blade Runner / Stripe Sessions).
 * Soft, blurred, never invasive — slow opacity breathing only.
 */
const BEAMS = [
  { left: "18%", rotate: -18, w: "9rem", color: "rgba(124,58,237,0.5)", delay: "0s" },
  { left: "46%", rotate: 12, w: "7rem", color: "rgba(6,182,212,0.45)", delay: "-2.5s" },
  { left: "74%", rotate: -10, w: "8rem", color: "rgba(99,102,241,0.4)", delay: "-4.5s" },
];

export function LightBeams({ className }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
      aria-hidden="true"
    >
      {BEAMS.map((b) => (
        <div
          key={b.left}
          className="animate-beam-glow absolute -top-1/4 h-[150%] blur-2xl"
          style={{
            left: b.left,
            width: b.w,
            transform: `rotate(${b.rotate}deg)`,
            transformOrigin: "top center",
            background: `linear-gradient(to bottom, ${b.color}, transparent 70%)`,
            animationDelay: b.delay,
          }}
        />
      ))}
    </div>
  );
}
