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
    eyebrow: "Estudio de producto digital",
    headline: ["Construimos software serio.", "Y lo hacemos ver excepcional."],
    subheadline:
      "Desde plataformas de telecomunicaciones hasta tu próxima web: ingeniería sólida y diseño premium para negocios que quieren crecer de verdad.",
    ctaPrimary: { label: "Cuéntanos tu proyecto", href: generalContactHref },
    ctaSecondary: { label: "Ver lo que hacemos", href: "#servicios" },
  },

  positioning: {
    title: "No somos una agencia más. Somos tu equipo de producto.",
    description:
      "Diseño, ingeniería y visión de negocio trabajando como un solo equipo. Así construimos productos que se ven y funcionan al nivel de tu ambición.",
    items: [
      {
        icon: Code2,
        title: "Ingeniería real",
        description:
          "Código sólido, arquitectura escalable y buenas prácticas. Construimos para que crezca, no para salir del paso.",
      },
      {
        icon: Sparkles,
        title: "Diseño premium",
        description:
          "Interfaces limpias, modernas y cuidadas al detalle. Tu producto se ve tan serio como la ingeniería que lo sostiene.",
      },
      {
        icon: Target,
        title: "Visión de producto",
        description:
          "Pensamos en negocio, conversión y experiencia. No entregamos pantallas: entregamos resultados.",
      },
      {
        icon: Rocket,
        title: "Entrega ágil",
        description:
          "Iteramos rápido y lanzamos sin sacrificar calidad. Menos espera, más producto en manos de tus usuarios.",
      },
    ],
  },

  services: {
    title: "Lo que construimos",
    description:
      "Desde telecomunicaciones empresariales hasta tu próxima web. Elige por dónde empezar y nosotros nos encargamos del resto.",
    featured: {
      icon: Phone,
      eyebrow: "Vertical destacada",
      title: "Telecomunicaciones",
      description:
        "Plataformas de telefonía, call centers y comunicación omnicanal. Nuestra especialidad técnica más profunda, ya en producción.",
      features: [
        "PBX y conmutadores Asterisk",
        "Call centers y atención",
        "Voz, IVR y grabación",
        "WhatsApp y omnicanal",
        "Integraciones y CRMs",
        "Tableros y métricas",
      ],
      cta: { label: "Ver telecomunicaciones", href: "/telecomunicaciones" },
    },
    others: [
      {
        icon: LayoutDashboard,
        title: "Software a la medida",
        description:
          "Aplicaciones web, dashboards y plataformas SaaS con arquitectura escalable.",
        href: "/software-a-la-medida",
      },
      {
        icon: Rocket,
        title: "Landing Pages",
        description:
          "Landings premium, rápidas y orientadas a conversión para validar y vender.",
        href: "/landing-pages",
      },
      {
        icon: Smartphone,
        title: "Apps móviles",
        description:
          "Experiencias móviles con diseño premium e ingeniería sólida.",
        href: "/apps-moviles",
      },
      {
        icon: Search,
        title: "SEO y optimización",
        description:
          "Performance y posicionamiento técnico para crecer en buscadores.",
        href: "/seo-optimizacion",
      },
    ],
  },

  portfolio: {
    title: "Productos reales, funcionando hoy.",
    description:
      "No mostramos mockups: mostramos producto en producción. Esto es parte de lo que hemos construido.",
    featured: {
      name: "CC365",
      category: "Plataforma de telecomunicaciones",
      description:
        "Plataforma omnicanal para atención, voz y WhatsApp con enfoque SaaS.",
      story:
        "Una plataforma completa de telecomunicaciones: voz, WhatsApp y atención omnicanal en un solo lugar. Es nuestra prueba viva de que construimos software serio, en producción y a escala.",
      status: "live",
      accent: "#818cf8",
      accent2: "#06b6d4",
      href: "/telecomunicaciones",
    },
    projects: [
      {
        name: "Anny Studio",
        category: "Landing premium",
        description:
          "Landing para estudio fotográfico con estética pastel y experiencia cinematográfica.",
        status: "live",
        accent: "#f0abfc",
        accent2: "#22d3ee",
      },
      {
        name: "ChilaKillers",
        category: "Landing / Food brand",
        description:
          "Concepto visual para dark kitchen especializada en chilaquiles, con enfoque de conversión local.",
        status: "live",
        accent: "#fb923c",
        accent2: "#facc15",
      },
      {
        name: "Próximamente",
        category: "Nuevos verticales",
        description:
          "Más producto en camino: software empresarial, automatización y nuevas plataformas.",
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
          "Entendemos tu negocio, tus objetivos y a quién le hablas.",
      },
      {
        number: "02",
        icon: PenTool,
        title: "Diseñamos",
        description:
          "Definimos la experiencia y una propuesta visual premium para tu producto.",
      },
      {
        number: "03",
        icon: Hammer,
        title: "Construimos",
        description:
          "Desarrollamos con ingeniería sólida, escalable y lista para crecer.",
      },
      {
        number: "04",
        icon: Send,
        title: "Lanzamos",
        description:
          "Publicamos, medimos y te acompañamos para que siga mejorando.",
      },
    ],
  },

  finalCta: {
    title: "¿Tienes un proyecto en mente? Construyámoslo bien.",
    description:
      "Cuéntanos qué quieres construir. Te respondemos rápido, con una propuesta clara y sin vueltas.",
    cta: { label: "Cuéntanos tu proyecto", href: generalContactHref },
  },
};
