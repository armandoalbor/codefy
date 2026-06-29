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
      "Diseñamos y desarrollamos apps móviles para iOS y Android. Productos digitales listos para crecer, escalar y generar valor desde el primer lanzamiento.",
    canonical: "/apps-moviles",
  },

  hero: {
    eyebrow: "Apps móviles • iOS • Android",
    headline: [
      "Tu producto,",
      "en el bolsillo de tus usuarios.",
    ],
    subheadline:
      "Diseñamos y desarrollamos aplicaciones móviles para iOS y Android que combinan experiencia de usuario, ingeniería sólida y visión de producto. Desde una idea hasta las tiendas.",
    ctaPrimary: {
      label: "Cuéntanos tu idea",
      href: appsContactHref,
    },
    heroVisual: "apps",
  },

  capabilities: {
    eyebrow: "Qué construimos",
    title: "Apps diseñadas para crecer contigo.",
    description:
      "Desde la primera versión hasta miles de usuarios. Construimos productos móviles que se sienten premium, funcionan con fluidez y evolucionan junto a tu negocio.",
    items: [
      {
        icon: Smartphone,
        title: "iOS y Android",
        description:
          "Una misma solución para ambas plataformas, permitiéndote llegar a más usuarios sin duplicar esfuerzos.",
      },
      {
        icon: Palette,
        title: "Experiencia de usuario",
        description:
          "Interfaces modernas, intuitivas y cuidadas al detalle para ofrecer una experiencia que las personas disfruten usar.",
      },
      {
        icon: Server,
        title: "Backend y servicios",
        description:
          "Infraestructura, autenticación, APIs y almacenamiento preparados para crecer junto con tu aplicación.",
      },
      {
        icon: Store,
        title: "Publicación en tiendas",
        description:
          "Nos encargamos del proceso completo para que tu aplicación llegue a App Store y Google Play sin complicaciones.",
      },
      {
        icon: RefreshCw,
        title: "Evolución continua",
        description:
          "Actualizaciones, métricas y nuevas funcionalidades para que tu producto siga creciendo después del lanzamiento.",
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
    title: "¿Tienes una idea que merece convertirse en una app?",
    description:
      "Cuéntanos qué quieres construir. Te ayudaremos a transformar una idea, proceso o servicio en una experiencia móvil lista para llegar a tus usuarios.",
    cta: {
      label: "Cuéntanos tu idea",
      href: appsContactHref,
    },
  },
};
