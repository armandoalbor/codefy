/**
 * /software-a-la-medida spoke content.
 *
 * Voice: Dirección A, product-engineering tone. Copy approved by the user
 * (see engram architecture/spokes-copy-approved). This spoke has NO proof
 * section — there is no live product to show yet, and fabricated cases are not
 * allowed (architecture/proof-content-policy). The CTA reuses the shared
 * WhatsApp channel with the software-scoped prefilled message.
 */
import {
  LayoutDashboard,
  SlidersHorizontal,
  Scale,
  Boxes,
  Plug,
} from "lucide-react";
import type { SpokePageContent } from "./types";
import { buildWhatsApp, whatsappMessages } from "./shared";

const softwareContactHref = buildWhatsApp(whatsappMessages.software);

export const softwareContent: SpokePageContent = {
  meta: {
    title: "Software a la Medida: Dashboards, Plataformas y SaaS",
    description:
      "Dashboards, plataformas internas, automatizaciones y SaaS. Diseñamos sistemas que se adaptan a tu negocio — no al revés.",
    canonical: "/software-a-la-medida",
  },

  hero: {
    eyebrow: "Software a la medida",
    headline: [
      "El software que tu operación necesita,",
      "construido a tu medida.",
    ],
    subheadline:
      "Dashboards, plataformas internas, automatizaciones y SaaS. Diseñamos sistemas que se adaptan a tu negocio — no al revés.",
    ctaPrimary: { label: "Cuéntanos tu proyecto", href: softwareContactHref },
  },

  capabilities: {
    eyebrow: "Qué construimos",
    title: "Sistemas que se adaptan a tu negocio.",
    description:
      "Desde el tablero que mira tu equipo cada mañana hasta la plataforma que sostiene toda tu operación. Cada pieza, diseñada alrededor de tu proceso.",
    items: [
      {
        icon: LayoutDashboard,
        title: "Dashboards y paneles",
        description:
          "Métricas, monitoreo y reporting en tiempo real para decidir con datos, no con corazonadas.",
      },
      {
        icon: SlidersHorizontal,
        title: "Plataformas internas",
        description:
          "Herramientas de administración moldeadas a tu proceso, no a una plantilla genérica.",
      },
      {
        icon: Scale,
        title: "Comparadores de precios",
        description:
          "Scrapers en tiempo real que vigilan a tu competencia: súper, viajes o el mercado que sea.",
      },
      {
        icon: Boxes,
        title: "SaaS a medida",
        description:
          "Productos multi-tenant escalables, listos para crecer contigo desde el primer cliente.",
      },
      {
        icon: Plug,
        title: "Integraciones",
        description:
          "Conectamos las herramientas, APIs y datos que ya usas. Nada de islas de información.",
      },
    ],
  },

  finalCta: {
    title: "¿Tienes un proceso que el software debería resolver?",
    description:
      "Cuéntanos cómo opera tu negocio hoy y diseñamos el sistema que lo lleva al siguiente nivel. Sin compromiso, directo al grano.",
    cta: { label: "Cuéntanos tu proyecto", href: softwareContactHref },
  },
};
