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
    eyebrow: "Landings Premium",
    headline: ["Creamos experiencias digitales", "que impulsan negocios."],
    subheadline:
      "Landing pages premium para negocios que quieren verse mejor, generar confianza y convertir más. El primer paso hacia una presencia digital seria.",
    ctaPrimary: { label: "Quiero mi landing", href: contactHrefLanding },
    ctaSecondary: { label: "Ver proyectos", href: "#proyectos" },
    // supporting: ["estrategia", "diseño", "código", "IA"],
    heroVisual: "landing"
  },

  positioning: {
    title:
      "Landings que no parecen plantillas. Software que no se queda en promesas.",
    description:
      "En Codefy combinamos diseño, estrategia y desarrollo para crear experiencias digitales que se sienten premium desde el primer scroll y generan resultados desde el primer clic.",
    items: [
      {
        icon: Sparkles,
        title: "Diseño premium",
        description:
          "Interfaces modernas, limpias y cuidadas al detalle para transmitir confianza desde el primer vistazo.",
      },
      {
        icon: Code2,
        title: "Desarrollo moderno",
        description:
          "Código sólido, rápido y preparado para crecer junto con tu negocio.",
      },
      {
        icon: Bot,
        title: "IA aplicada",
        description:
          "Integramos inteligencia artificial en tus productos para automatizar tareas y crear nuevas oportunidades de crecimiento.",
      },
      {
        icon: Target,
        title: "Visión de producto",
        description:
          "Entendemos tus objetivos antes de escribir código. Diseñamos soluciones que generan valor real para tu negocio.",
      },
    ],
  },

  services: {
    title: "Servicios para lanzar, validar y escalar",
    description:
      "Podemos empezar con una landing de alto impacto y acompañarte hasta convertir tu idea en una plataforma completa.",
    featured: {
      icon: Rocket,
      eyebrow: "Servicio estrella",
      title: "Landing Page Premium",
      description:
        "La forma más rápida de lanzar una presencia digital profesional. Diseñamos landing pages elegantes, rápidas y enfocadas en convertir visitantes en clientes.",
      features: [
        "Diseño responsive",
        "Copy orientado a conversión",
        "Formulario o WhatsApp",
        "SEO",
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
          "Sistemas internos, dashboards, módulos administrativos y plataformas SaaS construidas alrededor de tu operación.",
      },
      {
        icon: Compass,
        title: "Consultoría tecnológica",
        description:
          "Te ayudamos a definir arquitectura, roadmap técnico y estrategia para construir productos digitales sólidos.",
      },
      {
        icon: Workflow,
        title: "Automatización e IA",
        description:
          "Asistentes, automatizaciones, integraciones y flujos inteligentes que ahorran tiempo y reducen trabajo manual.",
      },
    ],
  },

  portfolio: {
    title: "Proyectos que muestran lo que podemos construir",
    description:
      "Cada proyecto demuestra que una experiencia digital no solo debe verse bien: también debe funcionar, convertir y crecer con el negocio.",
    featured: {
      name: "Anny Studio",
      category: "Landing premium",
      description:
        "Experiencia digital para una marca de fotografía especializada en bodas y momentos memorables.",
      story:
        "Diseñamos una experiencia que se siente como una sesión fotográfica: paleta pastel, ritmo cinematográfico y un flujo claro hacia la reserva. El objetivo nunca fue crear una página bonita; fue convertir visitantes en clientes.",
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
          "Plataforma omnicanal para voz, WhatsApp y atención empresarial construida con enfoque SaaS.",
        status: "live",
        accent: "#818cf8",
        accent2: "#06b6d4",
      },
      {
        name: "ChilaKillers",
        category: "Landing / Food Brand",
        description:
          "Landing enfocada en conversión local para una dark kitchen especializada en chilaquiles.",
        status: "live",
        accent: "#fb923c",
        accent2: "#facc15",
      },
      {
        name: "Próximamente",
        category: "Nuevos verticales",
        description:
          "Automatización, software empresarial, inteligencia artificial y nuevas plataformas en desarrollo.",
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
      "Algunas descubrirán quién la construyó.",
    ],
    description:
      "Por eso cada proyecto puede incluir un sello elegante y discreto. Una firma que conecta nuevos visitantes con nosotros y mantiene visible la calidad detrás del trabajo.",
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
          "Entendemos tu negocio, tus objetivos, tu audiencia y qué quieres lograr.",
      },
      {
        number: "02",
        icon: PenTool,
        title: "Diseñamos",
        description:
          "Creamos una propuesta visual premium alineada con tu marca y tu mercado.",
      },
      {
        number: "03",
        icon: Hammer,
        title: "Construimos",
        description:
          "Desarrollamos una landing rápida, responsive y optimizada para conversión.",
      },
      {
        number: "04",
        icon: Send,
        title: "Lanzamos",
        description:
          "Publicamos, conectamos herramientas, configuramos métricas y dejamos todo listo para crecer.",
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
      "Empecemos con una landing poderosa, rápida y bien diseñada. Después podremos escalarla a sistemas internos, automatizaciones o incluso un SaaS completo.",
    cta: {
      label: "Quiero cotizar mi landing",
      href: contactHrefLanding,
    },
  },
};
