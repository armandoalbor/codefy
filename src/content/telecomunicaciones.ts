/**
 * /telecomunicaciones spoke content — Codefy's hero niche.
 *
 * Voice: Dirección A with an enterprise tone. Copy approved by the user
 * (see engram architecture/telecom-copy-approved). Proof is the live cc365
 * product shown through swap-ready screenshots WITHOUT fabricated metrics
 * (architecture/proof-content-policy). The CTA reuses the shared WhatsApp
 * channel with the telecom-scoped prefilled message (architecture/contact-cta-strategy).
 */
import {
  Server,
  MessagesSquare,
  Headphones,
  BarChart3,
  Plug,
  Headset,
  Banknote,
  PhoneCall,
  MessageCircle,
  LifeBuoy,
  Network,
} from "lucide-react";
import type { SpokePageContent } from "./types";
import { buildWhatsApp, whatsappMessages } from "./shared";

const telecomContactHref = buildWhatsApp(whatsappMessages.telecom);

export const telecomContent: SpokePageContent = {
  meta: {
    title: "Software de Call Center, PBX y Comunicación Omnicanal",
    description:
      "Plataformas empresariales sobre Asterisk: voz, WhatsApp, agentes, métricas e integraciones. Toda tu operación de comunicación en un solo lugar.",
    canonical: "/telecomunicaciones",
  },

  hero: {
    eyebrow: "Telecomunicaciones empresariales",
    headline: [
      "La infraestructura de comunicación",
      "que tu operación necesita.",
    ],
    subheadline:
      "Construimos plataformas de voz, WhatsApp, atención omnicanal y monitoreo en tiempo real sobre tecnología probada como Asterisk. La robustez de un PBX empresarial con una experiencia moderna y fácil de usar.",
    ctaPrimary: {
      label: "Heblemos de tu operación",
      href: telecomContactHref,
    },
    heroVisual: "telecom",
  },

  capabilities: {
    eyebrow: "Qué construimos",
    title: "Todo lo que tu equipo necesita para atender mejor.",
    description:
      "Desde la infraestructura de comunicación hasta la inteligencia operativa. Construimos soluciones conectadas que ayudan a tu organización a atender mejor, supervisar en tiempo real y tomar decisiones con mayor confianza.",
    items: [
      {
        icon: Server,
        title: "PBX y Asterisk empresarial",
        description:
          "Conmutadores, IVRs, colas, grabaciones y troncales SIP listos para producción y diseñados para crecer contigo.",
      },
      {
        icon: MessagesSquare,
        title: "Voz + WhatsApp omnicanal",
        description:
          "Todas las conversaciones en una sola plataforma para que tus agentes trabajen desde un único lugar.",
      },
      {
        icon: Headphones,
        title: "Gestión de agentes",
        description:
          "Monitoreo en vivo, estados, colas, supervisión y control operativo para mantener la calidad del servicio.",
      },
      {
        icon: BarChart3,
        title: "Métricas y analítica",
        description:
          "Indicadores claros de productividad, tiempos de atención y desempeño para tomar decisiones con datos.",
      },
      {
        icon: Plug,
        title: "Integraciones empresariales",
        description:
          "Conectamos telefonía, CRMs, ERPs y sistemas internos para eliminar silos de información.",
      },
    ],
  },

  useCases: {
    eyebrow: "Casos de uso",
    title: "Diseñado para operaciones que dependen de la comunicación.",
    description: "Desde equipos pequeños hasta centros de atención completos.",
    items: [
      {
        icon: Headset,
        title: "Call Centers",
        description: "Gestión de agentes, colas, grabaciones y métricas.",
      },
      {
        icon: Banknote,
        title: "Cobranza",
        description: "Seguimiento eficiente de campañas y desempeño operativo.",
      },
      {
        icon: PhoneCall,
        title: "Ventas telefónicas",
        description: "Monitoreo de productividad y control de llamadas.",
      },
      {
        icon: MessageCircle,
        title: "Atención al cliente",
        description: "Unificación de voz y WhatsApp en una sola plataforma.",
      },
      {
        icon: LifeBuoy,
        title: "Soporte técnico",
        description: "Atención estructurada y trazabilidad completa.",
      },
      {
        icon: Network,
        title: "Operaciones distribuidas",
        description:
          "Equipos trabajando desde distintas ubicaciones bajo una sola operación.",
      },
    ],
  },

  proof: {
    eyebrow: "Producto en producción",
    title: "cc365, construido para operar hoy.",
    description:
      "No es una idea ni un prototipo. cc365 es nuestra plataforma de telecomunicaciones empresariales, diseñada para ofrecer la robustez de Asterisk con una experiencia moderna que los equipos realmente disfrutan usar.",
    product: {
      name: "cc365",
      category: "Plataforma omnicanal empresarial",
      status: "live",
    },
    highlights: [
      "Infraestructura Asterisk lista para producción",
      "Voz y WhatsApp en una sola bandeja",
      "Gestión de agentes y colas en tiempo real",
      "Métricas operativas claras y accionables",
    ],
    shots: [
      {
        caption: "Bandeja omnicanal para voz y WhatsApp",
      },
      {
        caption: "Supervisión de agentes y colas en tiempo real",
      },
      {
        caption: "Indicadores y reportes de toda la operación",
      },
    ],
  },

  finalCta: {
    title: "¿Tu operación merece mejor tecnología?",
    description:
      "Cuéntanos cómo funciona hoy tu comunicación. Analizamos tu proceso y te mostramos cómo podría operar sobre una plataforma moderna, escalable y diseñada para crecer contigo.",
    cta: {
      label: "Heblemos de tu operación",
      href: telecomContactHref,
    },
  },
};
