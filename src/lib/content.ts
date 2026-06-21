/**
 * Codefy landing — single source of truth for all copy & data.
 * Components stay presentational; content lives here.
 */
import type { LucideIcon } from "lucide-react";
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
} from "lucide-react";

export const CTA_PRIMARY = "Quiero mi landing";
export const CONTACT_HREF =
  "https://wa.me/525531140480?text=Hola%20Codefy%2C%20quiero%20cotizar%20una%20landing";

export const nav = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const hero = {
  eyebrow: "Product studio · Landings · Software · IA",
  headline: ["Creamos landings premium", "y software a la medida"],
  subheadline:
    "Diseñamos experiencias digitales modernas para negocios que quieren verse mejor, vender más y escalar con tecnología real.",
  ctaPrimary: CTA_PRIMARY,
  ctaSecondary: "Ver proyectos",
  supporting: ["estrategia", "diseño", "código", "IA"],
} as const;

export const positioning = {
  title: "Landings que no parecen plantillas. Software que no se queda en promesas.",
  description:
    "En Codefy combinamos diseño, estrategia y desarrollo para crear productos digitales que se sienten premium desde el primer scroll.",
  cards: [
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
  ] satisfies { icon: LucideIcon; title: string; description: string }[],
} as const;

export const services = {
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
    cta: "Cotizar mi landing",
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
  ] satisfies { icon: LucideIcon; title: string; description: string }[],
} as const;

export type ProjectStatus = "live" | "soon";

export const portfolio = {
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
    status: "live" as ProjectStatus,
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
      status: "live" as ProjectStatus,
      accent: "#818cf8",
      accent2: "#06b6d4",
    },
    {
      name: "ChilaKillers",
      category: "Landing / Food brand",
      description:
        "Concepto visual para dark kitchen especializada en chilaquiles con enfoque de conversión local.",
      status: "live" as ProjectStatus,
      accent: "#fb923c",
      accent2: "#facc15",
    },
    {
      name: "Próximamente",
      category: "Nuevos verticales",
      description:
        "Soluciones para sector inmobiliario, automatización y software empresarial.",
      status: "soon" as ProjectStatus,
      accent: "#94a3b8",
      accent2: "#475569",
    },
  ],
} as const;

export const signature = {
  title: "Un pequeño sello que conecta grandes proyectos",
  story: [
    "Miles de personas visitarán tu landing.",
    "Algunos descubrirán quién la construyó.",
  ],
  description:
    "Por eso cada proyecto puede incluir un sello elegante y discreto: una firma que mantiene visible la calidad detrás del trabajo y conecta nuevos visitantes con nosotros.",
  badge: "Hecho con amor por Codefy",
} as const;

export const process = {
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
      description: "Creamos una propuesta visual premium alineada a tu marca.",
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
  ] satisfies {
    number: string;
    icon: LucideIcon;
    title: string;
    description: string;
  }[],
} as const;

export const finalCta = {
  title: "¿Listo para que tu negocio se vea como una marca premium?",
  description:
    "Empecemos con una landing poderosa, rápida y bien diseñada. Después podemos escalarla a un sistema, dashboard o SaaS completo.",
  cta: "Quiero cotizar mi landing",
} as const;

export const footer = {
  tagline:
    "Diseño, software e inteligencia aplicada para negocios que quieren crecer.",
  columns: [
    { label: "Servicios", href: "#servicios" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ],
  legal: "© 2026 Codefy. Hecho con amor por Codefy.",
} as const;
