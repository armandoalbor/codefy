/**
 * /apps-moviles spoke content.
 *
 * Voice: Dirección A, product-engineering tone. Copy approved by the user
 * (see engram architecture/spokes-copy-approved). This spoke has NO proof
 * section — no live app to show yet, and fabricated cases are not allowed
 * (architecture/proof-content-policy). The CTA reuses the shared WhatsApp
 * channel with the apps-scoped prefilled message.
 */
import {
  Smartphone,
  Palette,
  Server,
  Store,
  RefreshCw,
  Bike,
  CalendarCheck,
  Gift,
  ShoppingBag,
  Gamepad2,
  HardHat,
} from "lucide-react";
import type { SpokePageContent } from "./types";
import { buildWhatsApp, whatsappMessages } from "./shared";

const appsContactHref = buildWhatsApp(whatsappMessages.apps);

export const appsContent: SpokePageContent = {
  meta: {
    title: "Apps Móviles para iOS y Android",
    description:
      "Apps para iOS y Android, listas para App Store y Google Play. Rápidas, pulidas y pensadas para escalar.",
    canonical: "/apps-moviles",
  },

  hero: {
    eyebrow: "Apps móviles",
    headline: ["Tu producto", "en el bolsillo de tus clientes."],
    subheadline:
      "Apps para iOS y Android, listas para App Store y Google Play. Rápidas, pulidas y pensadas para escalar.",
    ctaPrimary: { label: "Cuéntanos tu idea", href: appsContactHref },
  },

  capabilities: {
    eyebrow: "Qué construimos",
    title: "Todo lo que tu app necesita para llegar lejos.",
    description:
      "Del diseño a las tiendas y más allá. Construimos apps que se sienten premium y siguen mejorando después del lanzamiento.",
    items: [
      {
        icon: Smartphone,
        title: "iOS y Android",
        description:
          "Una sola base de código, ambas tiendas. Tu app donde están tus clientes, sin duplicar esfuerzo.",
      },
      {
        icon: Palette,
        title: "Diseño nativo",
        description:
          "Interfaces premium y fluidas que se sienten como en casa en cada plataforma.",
      },
      {
        icon: Server,
        title: "Backend y APIs",
        description:
          "La infraestructura que sostiene tu app: datos, autenticación y servicios listos para escalar.",
      },
      {
        icon: Store,
        title: "Publicación en tiendas",
        description:
          "Te llevamos hasta App Store y Google Play, con todo el proceso de revisión resuelto.",
      },
      {
        icon: RefreshCw,
        title: "Mantenimiento",
        description:
          "Actualizaciones, métricas y mejoras continuas para que tu app no se quede atrás.",
      },
    ],
  },

  useCases: {
    eyebrow: "Casos de uso",
    title: "Experiencias móviles para conectar con tus usuarios.",
    description:
      "Apps diseñadas para generar interacción, fidelización y crecimiento.",
    items: [
      {
        icon: Bike,
        title: "Delivery",
        description: "Pedidos, seguimiento y comunicación en tiempo real.",
      },
      {
        icon: CalendarCheck,
        title: "Reservaciones",
        description: "Agenda digital para servicios y experiencias.",
      },
      {
        icon: Gift,
        title: "Programas de lealtad",
        description: "Recompensas, puntos y fidelización.",
      },
      {
        icon: ShoppingBag,
        title: "Marketplaces",
        description: "Conectar compradores y vendedores desde una sola app.",
      },
      {
        icon: Gamepad2,
        title: "Gamificación",
        description: "Retos, recompensas y participación continua.",
      },
      {
        icon: HardHat,
        title: "Operación móvil",
        description: "Herramientas internas para equipos de campo.",
      },
    ],
  },

  finalCta: {
    title: "¿Tienes una idea de app en mente?",
    description:
      "Cuéntanos qué quieres construir y la diseñamos con el mismo estándar de producto que el resto de nuestro trabajo. Sin compromiso, directo al grano.",
    cta: { label: "Cuéntanos tu idea", href: appsContactHref },
  },
};
