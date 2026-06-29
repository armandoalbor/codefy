/**
 * Umbrella home content — the studio hub.
 *
 * Voice: Dirección A (confident, direct, telecom-first). Anchors high on
 * product/engineering instead of leading with landings. AI stays an invisible
 * engine — never named as a raw tool. No fabricated metrics: proof is real
 * product in production (cc365). Copy approved by the user.
 */
import {
  Code2,
  Sparkles,
  Target,
  Rocket,
  Phone,
  LayoutDashboard,
  Smartphone,
  Search,
  PenTool,
  Hammer,
  Send,
} from "lucide-react";
import type {
  FeatureGridContent,
  FinalCtaContent,
  HeroContent,
  PortfolioContent,
  ProcessContent,
  ServicesContent,
} from "./types";
import { buildWhatsApp, whatsappMessages } from "./shared";

type HomeContent = {
  hero: HeroContent;
  positioning: FeatureGridContent;
  services: ServicesContent;
  portfolio: PortfolioContent;
  process: ProcessContent;
  finalCta: FinalCtaContent;
};

const generalContactHref = buildWhatsApp(whatsappMessages.general);

export const homeContent: HomeContent = {
  hero: {
    eyebrow: "Ingeniería de software • Telecomunicaciones",
    headline: ["Construimos tecnología", "que impulsa negocios."],
    subheadline:
      "Desde plataformas empresariales y call centers hasta apps móviles y experiencias digitales. Diseñamos, desarrollamos e implementamos software que resuelve problemas reales de operación, ventas y crecimiento.",
    ctaPrimary: { label: "Hablemos de tu idea", href: generalContactHref },
    ctaSecondary: { label: "Ver nuestros productos", href: "#portfolio" },
  },

  positioning: {
    title: "No somos una agencia más. Somos tu equipo de producto.",
    description:
      "Diseño, ingeniería y visión de negocio trabajando como un solo equipo. Construimos tecnología que genera resultados reales: productos que se ven bien, funcionan mejor y están preparados para crecer.",
    items: [
      {
        icon: Code2,
        title: "Ingeniería real",
        description:
          "Arquitectura sólida, código mantenible y decisiones técnicas pensadas para el largo plazo. Construimos para crecer, no para salir del paso.",
      },
      {
        icon: Sparkles,
        title: "Diseño premium",
        description:
          "Interfaces modernas, limpias y cuidadas al detalle. Tu producto transmite la misma calidad que la tecnología que lo sostiene.",
      },
      {
        icon: Target,
        title: "Visión de producto",
        description:
          "Pensamos en tu negocio, usuarios y conversión. No entregamos pantallas: construimos soluciones que generan valor.",
      },
      {
        icon: Rocket,
        title: "Entrega ágil",
        description:
          "Iteramos rápido, validamos temprano y lanzamos con calidad. Menos tiempo esperando, más tiempo creciendo.",
      },
    ],
  },

  services: {
    title: "Lo que construimos",
    description:
      "Desde infraestructura de comunicación hasta plataformas empresariales. Elegimos la tecnología adecuada para resolver el problema correcto.",
    featured: {
      icon: Phone,
      eyebrow: "Vertical destacada",
      title: "Telecomunicaciones",
      description:
        "Telefonía empresarial, call centers, voz, WhatsApp e infraestructura omnicanal. Nuestra especialidad técnica más profunda y el origen de cc365.",
      features: [
        "PBX y conmutadores Asterisk",
        "Call centers omnicanal",
        "Voz, IVR y grabación",
        "WhatsApp empresarial",
        "Integraciones y CRMs",
        "Métricas y monitoreo",
      ],
      cta: { label: "Ver telecomunicaciones", href: "/telecomunicaciones" },
    },
    others: [
      {
        icon: LayoutDashboard,
        title: "Software a la medida",
        description:
          "Sistemas internos, dashboards, automatizaciones y plataformas SaaS construidas alrededor de tu operación.",
        href: "/software-a-la-medida",
      },
      {
        icon: Rocket,
        title: "Landing Pages",
        description:
          "Landing pages premium para validar ideas, generar confianza y convertir visitantes en clientes.",
        href: "/landing-pages",
      },
      {
        icon: Smartphone,
        title: "Apps móviles",
        description:
          "Apps para iOS y Android diseñadas para crecer contigo desde la primera versión.",
        href: "/apps-moviles",
      },
      {
        icon: Search,
        title: "SEO y optimización",
        description:
          "Velocidad, posicionamiento y optimización técnica para que te encuentren antes que a tu competencia.",
        href: "/seo-optimizacion",
      },
    ],
  },

  portfolio: {
    title: "No son conceptos. Son productos reales.",
    description:
      "Mostramos tecnología funcionando en producción. Esto es parte de lo que hemos diseñado, construido y puesto en marcha.",
    featured: {
      name: "CC365",
      category: "Plataforma de telecomunicaciones",
      description:
        "Plataforma omnicanal para atención, voz y WhatsApp diseñada para operaciones que necesitan escalar.",
      story:
        "Una plataforma completa de telecomunicaciones empresariales. Voz, WhatsApp, agentes, métricas y operación en tiempo real dentro de un mismo producto. Construida por Codefy y funcionando en producción.",
      status: "live",
      accent: "#818cf8",
      accent2: "#06b6d4",
      href: "/telecomunicaciones",
    },
    projects: [
      {
        name: "Anny Studio",
        category: "Experiencia digital premium",
        description:
          "Experiencia digital premium para una marca de fotografía especializada en bodas y momentos memorables.",
        status: "live",
        accent: "#f0abfc",
        accent2: "#22d3ee",
      },
      {
        name: "ChilaKillers",
        category: "Landing / Food brand",
        description:
          "Landing orientada a conversión para una dark kitchen enfocada en crecimiento local y pedidos digitales.",
        status: "live",
        accent: "#fb923c",
        accent2: "#facc15",
      },
      {
        name: "Próximamente",
        category: "Nuevos verticales",
        description:
          "Automatización, inteligencia artificial, software empresarial y nuevos productos en desarrollo.",
        status: "soon",
        accent: "#94a3b8",
        accent2: "#475569",
      },
    ],
  },

  process: {
    title: "Un proceso claro, de la idea al producto en producción.",
    steps: [
      {
        number: "01",
        icon: Search,
        title: "Descubrimos",
        description:
          "Entendemos tu negocio, identificamos cuellos de botella y detectamos oportunidades de mejora.",
      },
      {
        number: "02",
        icon: PenTool,
        title: "Diseñamos",
        description:
          "Diseñamos la solución, definimos arquitectura y trazamos el camino hacia producción.",
      },
      {
        number: "03",
        icon: Hammer,
        title: "Construimos",
        description:
          "Construimos con ingeniería sólida, procesos claros y tecnología preparada para escalar.",
      },
      {
        number: "04",
        icon: Send,
        title: "Lanzamos",
        description:
          "Implementamos, medimos y evolucionamos el producto junto contigo.",
      },
    ],
  },

  finalCta: {
    title: "¿Listo para construir tecnología que haga crecer tu negocio?",
    description:
      "Cuéntanos qué desafío quieres resolver. Te ayudaremos a convertir una idea, proceso o necesidad operativa en un producto real.",
    cta: { label: "Cuéntanos tu proyecto", href: generalContactHref },
  },
};
