/**
 * Minimal ambient particles — a faint sense of life, not a starfield.
 * Positions are deterministic (no Math.random) to avoid hydration mismatch.
 */
const PARTICLES = [
  { left: "8%", top: "24%", size: 1.5, delay: "0s", cyan: false },
  { left: "22%", top: "62%", size: 1, delay: "-1.5s", cyan: true },
  { left: "37%", top: "18%", size: 1, delay: "-3s", cyan: false },
  { left: "52%", top: "78%", size: 1.5, delay: "-2s", cyan: true },
  { left: "64%", top: "32%", size: 1, delay: "-4s", cyan: false },
  { left: "79%", top: "58%", size: 1.5, delay: "-1s", cyan: true },
  { left: "90%", top: "28%", size: 1, delay: "-3.5s", cyan: false },
  { left: "15%", top: "44%", size: 1, delay: "-2.8s", cyan: true },
];

export function AmbientParticles({ className }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className ?? ""}`}
      aria-hidden="true"
    >
      {PARTICLES.map((p) => (
        <span
          key={p.left + p.top}
          className="animate-twinkle absolute rounded-full"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: p.delay,
            background: p.cyan ? "var(--color-accent-2)" : "var(--color-accent)",
            boxShadow: `0 0 8px ${p.cyan ? "var(--color-accent-2)" : "var(--color-accent)"}`,
          }}
        />
      ))}
    </div>
  );
}
