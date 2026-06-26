/**
 * Transition shim. Route copy now lives in `src/content/*` (per-route modules),
 * and the section components receive their content via props.
 *
 * What remains here is the LEGACY anchor chrome still consumed by Header and
 * Footer, kept verbatim so those components render identically until the chrome
 * migration repoints them at `src/content/shared`. Remove this file once Header
 * and Footer import from `src/content/shared` directly.
 */
export type { ProjectStatus } from "@/content/types";
export {
  buildWhatsApp,
  whatsappMessages,
  contactHrefLanding,
  siteNav,
  routeCta,
  footerChrome,
} from "@/content/shared";

import { contactHrefLanding } from "@/content/shared";

export const CTA_PRIMARY = "Quiero mi landing";
export const CONTACT_HREF = contactHrefLanding;

export const nav = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const footer = {
  tagline:
    "Diseño, software e inteligencia aplicada para negocios que quieren crecer.",
  columns: [
    { label: "Servicios", href: "#servicios" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ],
  legal: "© 2026 Codefy. Hecho con amor por Codefy.",
} as const;
