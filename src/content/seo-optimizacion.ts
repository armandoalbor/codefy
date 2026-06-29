/**
 * /seo-optimizacion spoke content.
 *
 * Voice: Dirección A, product-engineering tone. Copy approved by the user
 * (see engram architecture/spokes-copy-approved). This spoke has NO proof
 * section — no live case to show yet, and fabricated metrics are not allowed
 * (architecture/proof-content-policy). The CTA reuses the shared WhatsApp
 * channel with the seo-scoped prefilled message.
 */
import {
  Search,
  Gauge,
  TrendingUp,
  ClipboardCheck,
  LineChart,
  UtensilsCrossed,
  Building2,
  Stethoscope,
  Scale,
  ShoppingCart,
  MapPin,
} from "lucide-react";
import type { SpokePageContent } from "./types";
import { buildWhatsApp, whatsappMessages } from "./shared";

const seoContactHref = buildWhatsApp(whatsappMessages.seo);

export const seoContent: SpokePageContent = {
  meta: {
    title: "SEO, Posicionamiento Web y Optimización de Rendimiento",
    description:
      "Ayudamos a que tu sitio sea más rápido, más visible y más efectivo para generar oportunidades de negocio.",
    canonical: "/seo-optimizacion",
  },

  hero: {
    eyebrow: "SEO • Optimización",
    headline: [
      "Haz que te encuentren",
      "antes que a tu competencia.",
    ],
    subheadline:
      "Mejoramos la visibilidad, velocidad y rendimiento de tu sitio para atraer más visitantes, generar más oportunidades y convertir mejor.",
    ctaPrimary: {
      label: "Auditemos tu sitio",
      href: seoContactHref,
    },
    heroVisual: "seo",
  },

  capabilities: {
    eyebrow: "Qué optimizamos",
    title: "Tu sitio debería trabajar para tu negocio.",
    description:
      "Desde la velocidad de carga hasta la estructura técnica y el posicionamiento orgánico. Optimizamos cada capa para que tu presencia digital genere resultados reales.",
    items: [
      {
        icon: Search,
        title: "SEO técnico",
        description:
          "Indexación, estructura, metadatos y Core Web Vitals para construir una base sólida que los buscadores puedan entender y posicionar.",
      },
      {
        icon: Gauge,
        title: "Rendimiento web",
        description:
          "Sitios rápidos, fluidos y optimizados para ofrecer una mejor experiencia en cualquier dispositivo.",
      },
      {
        icon: TrendingUp,
        title: "Posicionamiento orgánico",
        description:
          "Estrategias orientadas a ganar visibilidad frente a tu competencia y atraer tráfico relevante de forma constante.",
      },
      {
        icon: ClipboardCheck,
        title: "Auditoría y mejora continua",
        description:
          "Analizamos tu sitio actual, detectamos oportunidades y definimos un plan claro para mejorar sin necesidad de empezar desde cero.",
      },
      {
        icon: LineChart,
        title: "Analítica y conversión",
        description:
          "Medimos tráfico, comportamiento y conversiones para entender qué funciona y dónde existe potencial de crecimiento.",
      },
    ],
  },

   useCases: {
    eyebrow: "Casos de uso",
    title: "Negocios que necesitan ser encontrados.",
    description:
      "El SEO tiene mayor impacto cuando existe una intención real de búsqueda.",
    items: [
      {
        icon: UtensilsCrossed,
        title: "Restaurantes",
        description: "Aparecer cuando alguien busca dónde comer.",
      },
      {
        icon: Building2,
        title: "Inmobiliarias",
        description: "Captar tráfico interesado en comprar o rentar.",
      },
      {
        icon: Stethoscope,
        title: "Clínicas",
        description: "Posicionarse para búsquedas locales y especializadas.",
      },
      {
        icon: Scale,
        title: "Despachos",
        description: "Generar confianza antes del primer contacto.",
      },
      {
        icon: ShoppingCart,
        title: "Ecommerce",
        description: "Aumentar tráfico orgánico hacia productos y categorías.",
      },
      {
        icon: MapPin,
        title: "Negocios locales",
        description: "Ser visibles para clientes cercanos en el momento adecuado.",
      },
    ],
  },

  finalCta: {
    title: "¿Tu sitio está generando los resultados que debería?",
    description:
      "Analizamos tu presencia digital, identificamos qué está frenando su crecimiento y te mostramos oportunidades concretas para mejorar visibilidad, rendimiento y conversión.",
    cta: {
      label: "Auditemos tu sitio",
      href: seoContactHref,
    },
  },
};
