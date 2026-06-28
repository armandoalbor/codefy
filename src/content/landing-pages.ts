/**
 * Landing Pages route content — the recycled SMB entry tier.
 *
 * This is a verbatim migration of the studio's original landing copy. No
 * wording changes: /landing-pages is the recycled SMB entry tier and renders
 * this content with full fidelity to the pre-reframe home.
 */
import {
  Sparkles,
  Code2,
  Bot,
  Target,
  Rocket,
  LayoutDashboard,
  Compass,
  Workflow,
  Search,
  PenTool,
  Hammer,
  Send,
  Camera,
  UtensilsCrossed,
  Building2,
  Briefcase,
  Stethoscope,
} from "lucide-react";
import type {
  FeatureGridContent,
  FinalCtaContent,
  HeroContent,
  PortfolioContent,
  ProcessContent,
  ServicesContent,
  SignatureContent,
  UseCasesContent,
} from "./types";
import { contactHrefLanding } from "./shared";

type LandingPagesContent = {
  hero: HeroContent;
  positioning: FeatureGridContent;
  services: ServicesContent;
  portfolio: PortfolioContent;
  signature: SignatureContent;
  process: ProcessContent;
  useCases: UseCasesContent;
  finalCta: FinalCtaContent;
};

export const landingPagesContent: LandingPagesContent = {
  hero: {
    eyebrow: "Product studio · Landings · Software · IA",
    headline: ["Creamos landings premium", "y software a la medida"],
    subheadline:
      "Diseñamos experiencias digitales modernas para negocios que quieren verse mejor, vender más y escalar con tecnología real.",
    ctaPrimary: { label: "Quiero mi landing", href: contactHrefLanding },
    ctaSecondary: { label: "Ver proyectos", href: "#proyectos" },
    supporting: ["estrategia", "diseño", "código", "IA"],
  },

  positioning: {
    title:
      "Landings que no parecen plantillas. Software que no se queda en promesas.",
    description:
      "En Codefy combinamos diseño, estrategia y desarrollo para crear productos digitales que se sienten premium desde el primer scroll.",
    items: [
      {
        icon: Sparkles,
        title: "Diseño premium",
        description: "Interfaces modernas, limpias y cuidadas al detalle.",
      },
      {
        icon: Code2,
        title: "Desarrollo moderno",
        description: "Código sólido, escalable y preparado para crecer.",
      },
      {
        icon: Bot,
        title: "IA aplicada",
        description:
          "Usamos herramientas de IA para acelerar procesos sin sacrificar calidad.",
      },
      {
        icon: Target,
        title: "Visión de producto",
        description:
          "No solo construimos pantallas, pensamos en negocio, conversión y experiencia.",
      },
    ],
  },

  services: {
    title: "Servicios para lanzar, validar y escalar",
    description:
      "Empezamos con landings de alto impacto, pero podemos acompañarte hasta convertir tu idea en un producto digital completo.",
    featured: {
      icon: Rocket,
      eyebrow: "Servicio estrella",
      title: "Landing Page Premium",
      description:
        "El punto de entrada perfecto para trabajar con Codefy. Creamos landings rápidas, elegantes y orientadas a conversión para validar, vender o presentar tu negocio de forma profesional.",
      features: [
        "Diseño responsive",
        "Copy orientado a conversión",
        "Formulario o WhatsApp",
        "Analytics básico",
        "Optimización visual",
        "Deploy listo para producción",
      ],
      cta: { label: "Cotizar mi landing", href: contactHrefLanding },
    },
    others: [
      {
        icon: LayoutDashboard,
        title: "Software a la medida",
        description:
          "Aplicaciones web, dashboards, sistemas internos, módulos administrativos y plataformas SaaS construidas con arquitectura moderna.",
      },
      {
        icon: Compass,
        title: "Consultoría tecnológica",
        description:
          "Te ayudamos a definir arquitectura, stack, roadmap técnico y estrategia para construir productos digitales sólidos.",
      },
      {
        icon: Workflow,
        title: "Automatización e IA",
        description:
          "Creamos flujos inteligentes, integraciones, asistentes, bots y procesos automatizados para mejorar la operación de tu negocio.",
      },
    ],
  },

  portfolio: {
    title: "Proyectos que muestran lo que podemos construir",
    description:
      "Cada proyecto es una oportunidad para demostrar que una buena experiencia digital no solo debe verse bien, también debe funcionar, convertir y escalar.",
    featured: {
      name: "Anny Studio",
      category: "Landing premium",
      description:
        "Landing para estudio fotográfico con estética pastel, playa y experiencia visual cinematográfica.",
      story:
        "Diseñamos una experiencia que se siente como una sesión de fotos: paleta pastel, ritmo cinematográfico y un flujo claro hacia la reserva. El objetivo no era una página bonita, era convertir visitantes en clientes.",
      status: "live",
      accent: "#f0abfc",
      accent2: "#22d3ee",
      metrics: [
        { value: "+40%", label: "más reservas" },
        { value: "1.2s", label: "tiempo de carga" },
        { value: "100", label: "score visual" },
      ],
    },
    projects: [
      {
        name: "CC365",
        category: "SaaS / Omnicanal",
        description:
          "Plataforma omnicanal para atención, voz y WhatsApp con enfoque SaaS.",
        status: "live",
        accent: "#818cf8",
        accent2: "#06b6d4",
      },
      {
        name: "ChilaKillers",
        category: "Landing / Food brand",
        description:
          "Concepto visual para dark kitchen especializada en chilaquiles con enfoque de conversión local.",
        status: "live",
        accent: "#fb923c",
        accent2: "#facc15",
      },
      {
        name: "Próximamente",
        category: "Nuevos verticales",
        description:
          "Soluciones para sector inmobiliario, automatización y software empresarial.",
        status: "soon",
        accent: "#94a3b8",
        accent2: "#475569",
      },
    ],
  },

  signature: {
    title: "Un pequeño sello que conecta grandes proyectos",
    story: [
      "Miles de personas visitarán tu landing.",
      "Algunos descubrirán quién la construyó.",
    ],
    description:
      "Por eso cada proyecto puede incluir un sello elegante y discreto: una firma que mantiene visible la calidad detrás del trabajo y conecta nuevos visitantes con nosotros.",
    badge: "Hecho con amor por Codefy",
  },

  process: {
    title: "Un proceso simple para lanzar rápido",
    steps: [
      {
        number: "01",
        icon: Search,
        title: "Descubrimos",
        description:
          "Entendemos tu negocio, objetivo, audiencia y estilo visual.",
      },
      {
        number: "02",
        icon: PenTool,
        title: "Diseñamos",
        description:
          "Creamos una propuesta visual premium alineada a tu marca.",
      },
      {
        number: "03",
        icon: Hammer,
        title: "Construimos",
        description:
          "Desarrollamos tu landing con buenas prácticas, responsive y optimizada.",
      },
      {
        number: "04",
        icon: Send,
        title: "Lanzamos",
        description:
          "Publicamos, conectamos formularios, WhatsApp, analytics y dejamos todo listo.",
      },
    ],
  },

  useCases: {
    eyebrow: "Casos de uso",
    title: "Ideal para negocios que quieren crecer rápido.",
    description:
      "Una landing puede ser el primer paso para validar una idea, generar confianza o comenzar a vender en línea.",
    items: [
      {
        icon: Camera,
        title: "Fotografía y eventos",
        description:
          "Landing profesional para captar reservas y mostrar portafolio.",
      },
      {
        icon: UtensilsCrossed,
        title: "Restaurantes y dark kitchens",
        description:
          "Más pedidos, mejor presencia digital y campañas de temporada.",
      },
      {
        icon: Building2,
        title: "Inmobiliarias",
        description: "Captación de prospectos mediante formularios y campañas.",
      },
      {
        icon: Briefcase,
        title: "Consultorías y despachos",
        description: "Transmitir confianza y generar oportunidades de negocio.",
      },
      {
        icon: Stethoscope,
        title: "Clínicas y servicios profesionales",
        description: "Información clara, contacto rápido y generación de citas.",
      },
      {
        icon: Rocket,
        title: "Emprendimientos y startups",
        description:
          "Validar una idea antes de invertir en una plataforma completa.",
      },
    ],
  },

  finalCta: {
    title: "¿Listo para que tu negocio se vea como una marca premium?",
    description:
      "Empecemos con una landing poderosa, rápida y bien diseñada. Después podemos escalarla a un sistema, dashboard o SaaS completo.",
    cta: { label: "Quiero cotizar mi landing", href: contactHrefLanding },
  },
};
