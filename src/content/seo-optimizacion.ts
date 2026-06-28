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
    title: "SEO y Optimización de Rendimiento Web",
    description:
      "Posicionamiento orgánico, optimización de rendimiento y mejora de sitios existentes. Tu presencia digital trabajando para tu negocio.",
    canonical: "/seo-optimizacion",
  },

  hero: {
    eyebrow: "SEO y optimización",
    headline: ["Que te encuentren primero.", "Que tu sitio vuele."],
    subheadline:
      "Posicionamiento orgánico, optimización de rendimiento y mejora de sitios existentes. Tu presencia digital trabajando para tu negocio.",
    ctaPrimary: { label: "Auditemos tu sitio", href: seoContactHref },
    heroVisual: "seo",
  },

  capabilities: {
    eyebrow: "Qué optimizamos",
    title: "Tu presencia digital, trabajando para tu negocio.",
    description:
      "Desde la estructura técnica hasta el contenido que posiciona. Afinamos cada capa para que tu sitio cargue rápido y suba en buscadores.",
    items: [
      {
        icon: Search,
        title: "SEO técnico",
        description:
          "Estructura, metadatos, indexación y Core Web Vitals: las bases que los buscadores premian.",
      },
      {
        icon: Gauge,
        title: "Optimización de rendimiento",
        description:
          "Sitios que cargan rápido y se sienten ágiles, en cualquier dispositivo y conexión.",
      },
      {
        icon: TrendingUp,
        title: "Contenido y posicionamiento",
        description:
          "Keywords y autoridad de dominio para ganar terreno frente a tu competencia.",
      },
      {
        icon: ClipboardCheck,
        title: "Auditoría de sitios actuales",
        description:
          "Revisamos tu sitio actual a fondo y trazamos el plan para mejorarlo, sin rehacerlo desde cero.",
      },
      {
        icon: LineChart,
        title: "Analítica",
        description:
          "Medimos tráfico y conversión para que cada decisión tenga datos detrás, no suposiciones.",
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
    title: "¿Tu sitio no aparece donde debería?",
    description:
      "Cuéntanos tus objetivos y auditamos tu sitio para mostrarte qué lo está frenando y cómo despegarlo. Sin compromiso, directo al grano.",
    cta: { label: "Auditemos tu sitio", href: seoContactHref },
  },
};
