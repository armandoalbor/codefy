import { Phone, MessageCircle, Star } from "lucide-react";

/**
 * High-fidelity CSS recreations of each project's UI (no stock, no generic
 * placeholders). Built to be swapped for real screenshots later without
 * touching layout logic — just replace the inner block with <Image />.
 */

function BrowserChrome({ url }: { url: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-surface-border px-4 py-2.5">
      <span className="size-2.5 rounded-full bg-[#ff5f57]" />
      <span className="size-2.5 rounded-full bg-[#febc2e]" />
      <span className="size-2.5 rounded-full bg-[#28c840]" />
      <span className="ml-3 rounded-md bg-surface px-2.5 py-0.5 font-mono text-[0.6rem] text-text-muted">
        {url}
      </span>
    </div>
  );
}

/** Anny Studio — pastel photography studio landing (featured). */
export function AnnyPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-surface-border bg-background">
      <BrowserChrome url="annystudio.com" />
      <div className="relative h-64 overflow-hidden bg-[linear-gradient(160deg,#fbcfe8_0%,#fde6c8_45%,#a5f3fc_100%)] sm:h-72">
        {/* sun glow */}
        <div className="absolute -right-6 -top-6 size-32 rounded-full bg-white/50 blur-2xl" />
        {/* nav */}
        <div className="relative flex items-center justify-between px-6 pt-5 text-[#7c2d4d]">
          <span className="font-serif text-sm font-semibold italic tracking-tight">
            Anny Studio
          </span>
          <div className="flex gap-4 text-[0.62rem] font-medium">
            <span>Galería</span>
            <span>Sobre mí</span>
            <span className="rounded-full bg-[#7c2d4d] px-2.5 py-1 text-white">
              Reservar
            </span>
          </div>
        </div>
        {/* hero copy */}
        <div className="relative mt-7 px-6 text-[#7c2d4d]">
          <p className="font-serif text-2xl font-semibold italic leading-tight sm:text-3xl">
            Momentos
            <br /> que permanecen
          </p>
          <p className="mt-2 max-w-[16rem] text-[0.62rem] leading-relaxed text-[#9d5577]">
            Fotografía de playa con luz natural y estética cinematográfica.
          </p>
          <span className="mt-3 inline-flex rounded-full bg-[#7c2d4d] px-3 py-1.5 text-[0.62rem] font-semibold text-white shadow-lg">
            Reservar sesión →
          </span>
        </div>
        {/* photo thumbnails */}
        <div className="absolute bottom-4 left-6 right-6 flex gap-2">
          {[
            "from-[#fda4af] to-[#fecdd3]",
            "from-[#fcd34d] to-[#fde68a]",
            "from-[#67e8f9] to-[#a5f3fc]",
            "from-[#f9a8d4] to-[#fbcfe8]",
          ].map((c, i) => (
            <div
              key={i}
              className={`h-12 flex-1 rounded-lg bg-gradient-to-br ${c} ring-1 ring-white/60`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/** CC365 — omnichannel attention SaaS (inbox + voice + whatsapp). */
export function CC365Preview() {
  return (
    <div className="h-full overflow-hidden bg-background-soft">
      <BrowserChrome url="cc365.app" />
      <div className="flex h-[calc(100%-2.6rem)] min-h-[10rem]">
        {/* sidebar */}
        <div className="w-12 shrink-0 space-y-2.5 border-r border-surface-border p-2.5">
          <span className="grid size-7 place-items-center rounded-lg bg-gradient-accent text-white">
            <MessageCircle className="size-3.5" />
          </span>
          <span className="grid size-7 place-items-center rounded-lg bg-surface text-text-muted">
            <Phone className="size-3.5" />
          </span>
        </div>
        {/* conversation */}
        <div className="flex-1 space-y-2 p-3">
          <div className="flex items-center justify-between">
            <span className="text-[0.62rem] font-semibold text-text-primary">
              Conversaciones
            </span>
            <span className="rounded-full bg-[rgba(34,197,94,0.15)] px-1.5 py-0.5 text-[0.55rem] text-[#4ade80]">
              12 activas
            </span>
          </div>
          <div className="max-w-[80%] rounded-lg rounded-tl-sm bg-surface px-2.5 py-1.5 text-[0.6rem] text-text-secondary">
            Hola, ¿siguen abiertos?
          </div>
          <div className="ml-auto max-w-[80%] rounded-lg rounded-tr-sm bg-gradient-accent px-2.5 py-1.5 text-[0.6rem] text-white">
            ¡Sí! ¿Te ayudo con tu pedido? 🎧
          </div>
          <div className="max-w-[70%] rounded-lg rounded-tl-sm bg-surface px-2.5 py-1.5 text-[0.6rem] text-text-secondary">
            Perfecto, gracias
          </div>
        </div>
      </div>
    </div>
  );
}

/** ChilaKillers — dark kitchen menu / ordering. */
export function ChilaPreview() {
  return (
    <div className="h-full overflow-hidden bg-[#1a1206]">
      <BrowserChrome url="chilakillers.com" />
      <div className="space-y-2 p-3">
        <div className="flex items-center justify-between">
          <span className="text-[0.7rem] font-bold uppercase tracking-wide text-[#facc15]">
            🔥 ChilaKillers
          </span>
          <span className="flex items-center gap-0.5 text-[0.55rem] text-[#fb923c]">
            <Star className="size-2.5 fill-[#fb923c]" /> 4.9
          </span>
        </div>
        {[
          { n: "Chilaquiles Killer", p: "$129" },
          { n: "Verdes con pollo", p: "$115" },
          { n: "Divorciados", p: "$135" },
        ].map((item) => (
          <div
            key={item.n}
            className="flex items-center gap-2 rounded-lg border border-[#3a2a10] bg-[#241a09] p-1.5"
          >
            <span className="size-8 rounded-md bg-gradient-to-br from-[#fb923c] to-[#facc15]" />
            <span className="flex-1 text-[0.6rem] font-medium text-[#fde68a]">
              {item.n}
            </span>
            <span className="text-[0.6rem] font-bold text-[#facc15]">
              {item.p}
            </span>
          </div>
        ))}
        <span className="mt-1 block rounded-md bg-gradient-to-r from-[#fb923c] to-[#facc15] py-1.5 text-center text-[0.62rem] font-bold text-[#1a1206]">
          Ordenar ahora
        </span>
      </div>
    </div>
  );
}

/** Próximamente — branded mesh, no content yet. */
export function SoonPreview() {
  return (
    <div className="relative grid h-full min-h-[10rem] place-items-center overflow-hidden bg-background-soft">
      <div className="grid-bg absolute inset-0 opacity-60" />
      <div className="absolute size-20 rounded-full bg-accent/20 blur-2xl" />
      <div className="relative flex flex-col items-center gap-2">
        <span className="grid size-10 place-items-center rounded-xl core-node text-white">
          <svg viewBox="0 0 24 24" fill="none" className="size-5">
            <path
              d="M9 5.5 4.5 12 9 18.5M15 5.5 19.5 12 15 18.5"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-text-muted">
          Nuevos verticales
        </span>
      </div>
    </div>
  );
}
