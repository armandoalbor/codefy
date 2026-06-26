/**
 * Brand-level chrome shared across every route: navigation, footer, and the
 * WhatsApp contact builder. Icon-free by design so it can be consumed by both
 * server and client components (e.g. the route-aware Header).
 *
 * The real-route nav, route→CTA map, and footer chrome defined here are the
 * single source of truth wired directly into the Header and Footer.
 */
import type { CtaSpec } from "./types";

const WHATSAPP_PHONE = "525531140480";

/** Builds a wa.me deep link with a URL-encoded prefilled message. */
export function buildWhatsApp(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

/** Per-audience prefilled WhatsApp messages. */
export const whatsappMessages = {
  landing: "Hola Codefy, quiero cotizar una landing",
  general: "Hola Codefy, quiero hablar de mi proyecto",
  telecom: "Hola Codefy, quiero agendar una demo de telecomunicaciones",
} as const;

/** Landing-specific contact link — preserves the original CONTACT_HREF value. */
export const contactHrefLanding = buildWhatsApp(whatsappMessages.landing);

export type NavEntry = { label: string; href: string; soon?: boolean };

/** Global navigation as real App Router routes (`soon` = Próximamente stub). */
export const siteNav: NavEntry[] = [
  { label: "Inicio", href: "/" },
  { label: "Landing Pages", href: "/landing-pages" },
  { label: "Telecomunicaciones", href: "/telecomunicaciones" },
  { label: "Software", href: "/software-a-la-medida", soon: true },
  { label: "Apps", href: "/apps-moviles", soon: true },
  { label: "SEO", href: "/seo-optimizacion", soon: true },
];

/** Primary CTA per route, keyed by pathname. */
export const routeCta: Record<string, CtaSpec> = {
  "/": {
    label: "Cuéntanos tu proyecto",
    href: buildWhatsApp(whatsappMessages.general),
  },
  "/landing-pages": { label: "Cotizar landing", href: contactHrefLanding },
  "/telecomunicaciones": {
    label: "Cuéntanos tu operación",
    href: buildWhatsApp(whatsappMessages.telecom),
  },
};

export const footerChrome = {
  tagline:
    "Diseño e ingeniería de producto para negocios que quieren crecer en serio.",
  columns: [
    { label: "Inicio", href: "/" },
    { label: "Landing Pages", href: "/landing-pages" },
    { label: "Telecomunicaciones", href: "/telecomunicaciones" },
  ],
  legal: "© 2026 Codefy. Hecho con amor por Codefy.",
} as const;
