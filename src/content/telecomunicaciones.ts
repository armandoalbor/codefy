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
    title: "Software de Call Center y Telefonía Asterisk",
    description:
      "Plataformas omnicanal sobre Asterisk: voz, WhatsApp, control de agentes y métricas en tiempo real. La potencia de un PBX empresarial, con una interfaz que da gusto usar.",
    canonical: "/telecomunicaciones",
  },

  hero: {
    eyebrow: "Plataformas de telecomunicaciones",
    headline: ["Software de call center", "que tu operación toma en serio."],
    subheadline:
      "Construimos plataformas omnicanal sobre Asterisk: voz, WhatsApp, control de agentes y métricas en tiempo real. La potencia de un PBX empresarial, con una interfaz que da gusto usar.",
    ctaPrimary: { label: "Cuéntanos tu operación", href: telecomContactHref },
    heroVisual: "telecom",
  },

  capabilities: {
    eyebrow: "Qué construimos",
    title: "Todo lo que tu operación telefónica necesita.",
    description:
      "Desde la centralita hasta el tablero de métricas. Construimos cada pieza con la robustez de Asterisk y una interfaz pensada para quien la usa todos los días.",
    items: [
      {
        icon: Server,
        title: "Centrales PBX/Asterisk",
        description:
          "Conmutadores y centralitas sobre Asterisk: troncales SIP, IVR, colas y grabación, listos para producción.",
      },
      {
        icon: MessagesSquare,
        title: "Omnicanal voz+WhatsApp",
        description:
          "Voz y WhatsApp en una sola bandeja, para que cada agente atienda todo desde un mismo lugar.",
      },
      {
        icon: Headphones,
        title: "Control de agentes",
        description:
          "Estados, colas, monitoreo en vivo y supervisión. Tu equipo bajo control, sin perderle el pulso a la operación.",
      },
      {
        icon: BarChart3,
        title: "Métricas y reporting",
        description:
          "Tableros claros de llamadas, tiempos y desempeño para decidir con datos, no con corazonadas.",
      },
      {
        icon: Plug,
        title: "Integraciones a medida",
        description:
          "Conectamos tu telefonía con CRMs, ERPs y las herramientas que ya usas. Nada de islas de información.",
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
    eyebrow: "Prueba en producción",
    title: "cc365, funcionando hoy.",
    description:
      "Lo que Issabel resuelve en funcionalidad, cc365 lo lleva más allá: misma robustez de Asterisk pero bonito y usable.",
    product: {
      name: "cc365",
      category: "Plataforma de call center omnicanal",
      status: "live",
    },
    highlights: [
      "Centralita Asterisk lista para producción",
      "Atención por voz y WhatsApp en una sola bandeja",
      "Control de agentes y colas en tiempo real",
      "Reportes claros de toda la operación",
    ],
    // Swap-ready gallery: captions only, screenshots land later (see ProofShot.src).
    shots: [
      { caption: "Bandeja omnicanal — voz y WhatsApp en un solo lugar" },
      { caption: "Panel de agentes y colas en tiempo real" },
      { caption: "Reportes y métricas de la operación" },
    ],
  },

  finalCta: {
    title: "¿Tu call center merece mejor software?",
    description:
      "Cuéntanos cómo opera tu equipo hoy y te mostramos cómo se vería sobre cc365. Sin compromiso, directo al grano.",
    cta: { label: "Cuéntanos tu operación", href: telecomContactHref },
  },
};
