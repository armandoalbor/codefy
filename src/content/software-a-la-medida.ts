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
  Package,
  ShoppingCart,
  TrendingUp,
  Settings,
  Gauge,
  Cloud,
} from "lucide-react";
import type { SpokePageContent } from "./types";
import { buildWhatsApp, whatsappMessages } from "./shared";

const softwareContactHref = buildWhatsApp(whatsappMessages.software);

export const softwareContent: SpokePageContent = {
  meta: {
    title: "Software a la Medida, Sistemas Internos y Plataformas SaaS",
    description:
      "Construimos sistemas, dashboards, automatizaciones y plataformas empresariales diseñadas alrededor de tu operación. Tecnología que resuelve problemas reales.",
    canonical: "/software-a-la-medida",
  },

  hero: {
    eyebrow: "Sistemas empresariales",
    headline: [
      "Cuando Excel ya no es suficiente,",
      "es momento de construir tu sistema.",
    ],
    subheadline:
      "Diseñamos y desarrollamos plataformas, dashboards, automatizaciones y software empresarial construido alrededor de tu operación. Tu negocio se adapta a tus procesos, no a las limitaciones de una herramienta genérica.",
    ctaPrimary: {
      label: "Hablemos de tu proyecto",
      href: softwareContactHref,
    },
    heroVisual: "software",
  },

  capabilities: {
    eyebrow: "Qué construimos",
    title: "Tecnología diseñada alrededor de tu operación.",
    description:
      "Cada negocio tiene procesos distintos. Por eso construimos sistemas que se adaptan a la forma en que trabajas, en lugar de obligarte a cambiar para encajar en una plataforma genérica.",
    items: [
      {
        icon: LayoutDashboard,
        title: "Dashboards y monitoreo",
        description:
          "Indicadores, métricas y visualización de datos en tiempo real para tomar mejores decisiones todos los días.",
      },
      {
        icon: SlidersHorizontal,
        title: "Sistemas internos",
        description:
          "Herramientas administrativas, operaciones, inventarios, seguimiento y control diseñados específicamente para tu negocio.",
      },
      {
        icon: Scale,
        title: "Monitoreo de competencia",
        description:
          "Scrapers y plataformas de inteligencia comercial para vigilar precios, productos y movimientos del mercado en tiempo real.",
      },
      {
        icon: Boxes,
        title: "Plataformas SaaS",
        description:
          "Productos multi-tenant listos para crecer, monetizar y escalar desde los primeros usuarios hasta miles de clientes.",
      },
      {
        icon: Plug,
        title: "Integraciones y automatización",
        description:
          "Conectamos APIs, sistemas existentes y procesos operativos para eliminar tareas repetitivas y reducir errores.",
      },
    ],
  },

   useCases: {
    eyebrow: "Casos de uso",
    title: "Cuando el software comercial ya no alcanza.",
    description:
      "Construimos sistemas para procesos específicos que no encajan en soluciones genéricas.",
    items: [
      {
        icon: Package,
        title: "Inventarios",
        description: "Control centralizado de productos y movimientos.",
      },
      {
        icon: ShoppingCart,
        title: "E-commerce",
        description: "Marketplaces, pedidos, pagos y sistemas internos conectados para vender con mayor control.",
      },
      {
        icon: TrendingUp,
        title: "Monitoreo de precios",
        description: "Comparación automática frente a la competencia.",
      },
      {
        icon: Settings,
        title: "Operaciones internas",
        description: "Procesos administrativos adaptados a tu negocio.",
      },
      {
        icon: Gauge,
        title: "Dashboards ejecutivos",
        description: "Indicadores en tiempo real para toma de decisiones.",
      },
      {
        icon: Cloud,
        title: "Plataformas SaaS",
        description: "Productos digitales listos para comercializarse.",
      },
    ],
  },

  finalCta: {
    title: "¿Existe un proceso que podría funcionar mejor?",
    description:
      "Cuéntanos cómo opera tu negocio hoy. Analizaremos el proceso y diseñaremos la tecnología necesaria para hacerlo más eficiente, escalable y fácil de controlar.",
    cta: {
      label: "Hablemos de tu proyecto",
      href: softwareContactHref,
    },
  },
};
