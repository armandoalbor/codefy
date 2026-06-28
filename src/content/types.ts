/**
 * Shared content shapes for Codefy's per-route content modules.
 *
 * Each route owns a content module under `src/content/`; these types are the
 * canonical contract the presentational section components consume via props.
 */
import type { LucideIcon } from "lucide-react";

/** A call-to-action: visible label plus its destination. */
export type CtaSpec = { label: string; href: string };

/** Per-route metadata used to drive Next.js `metadata` exports. */
export type RouteMeta = { title: string; description: string; canonical: string };

/**
 * Selects which bespoke hero visual a route renders in the showcase slot.
 * Unset (or any not-yet-built variant) falls back to the default home showcase.
 */
export type HeroVisualVariant =
  | "home"
  | "landing"
  | "telecom"
  | "software"
  | "apps"
  | "seo";

export type HeroContent = {
  eyebrow: string;
  headline: [string, string];
  subheadline: string;
  ctaPrimary: CtaSpec;
  ctaSecondary?: CtaSpec;
  supporting?: string[];
  /** Per-vertical hero visual; defaults to the standard home showcase. */
  heroVisual?: HeroVisualVariant;
};

/** An icon-bearing feature/positioning tile. */
export type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  /** When present, the tile links to a route (used by the services hub). */
  href?: string;
};

export type FeatureGridContent = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: FeatureItem[];
};

/**
 * A single use-case tile: a real business scenario the visitor can recognize.
 * `example` is optional small, discreet supporting text.
 */
export type UseCaseItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  example?: string;
};

/**
 * "Casos de uso" section content — the bridge between technical capabilities
 * and the final CTA. Fully content-driven so each vertical owns its scenarios
 * without touching the component.
 */
export type UseCasesContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: UseCaseItem[];
};

export type FeaturedService = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  cta: CtaSpec;
};

export type ServicesContent = {
  eyebrow?: string;
  title: string;
  description: string;
  featured: FeaturedService;
  others: FeatureItem[];
};

export type ProjectStatus = "live" | "soon";

export type PortfolioMetric = { value: string; label: string };

export type FeaturedProject = {
  name: string;
  category: string;
  description: string;
  story: string;
  status: ProjectStatus;
  accent: string;
  accent2: string;
  /** Optional outcome metrics. Omit when no real numbers are available. */
  metrics?: PortfolioMetric[];
  /** When present, the featured project links to its detail/spoke route. */
  href?: string;
};

export type PortfolioProject = {
  name: string;
  category: string;
  description: string;
  status: ProjectStatus;
  accent: string;
  accent2: string;
  href?: string;
};

export type PortfolioContent = {
  eyebrow?: string;
  title: string;
  description: string;
  featured: FeaturedProject;
  projects: PortfolioProject[];
};

export type ProcessStep = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

export type ProcessContent = {
  eyebrow?: string;
  title: string;
  steps: ProcessStep[];
};

export type SignatureContent = {
  title: string;
  story: string[];
  description: string;
  badge: string;
};

export type FinalCtaContent = {
  title: string;
  description: string;
  cta: CtaSpec;
};

/**
 * A single product screenshot in a proof gallery. `src` is the SWAP POINT:
 * leave it undefined to render a styled placeholder, set it to a real image
 * path once screenshots exist. No metrics — descriptive captions only.
 */
export type ProofShot = {
  caption: string;
  src?: string;
};

/**
 * Single-product proof block for a spoke (e.g. cc365 on /telecomunicaciones).
 * Designed to PROVE a live product through real screenshots and descriptive
 * capabilities — deliberately WITHOUT fabricated metrics.
 */
export type SpokeProofContent = {
  eyebrow?: string;
  title: string;
  description: string;
  /** The product being proven, with its live/soon status badge. */
  product: { name: string; category: string; status: ProjectStatus };
  /** Descriptive capability bullets. NO numbers/metrics. */
  highlights: string[];
  /** Swap-ready screenshot gallery; placeholders until real shots land. */
  shots: ProofShot[];
};

/**
 * Canonical contract for a service "spoke" page (e.g. /telecomunicaciones).
 * Every spoke fills this shape and composes the standard section order.
 */
export type SpokePageContent = {
  meta: RouteMeta;
  hero: HeroContent;
  capabilities: FeatureGridContent;
  offerings?: ServicesContent;
  /** Optional single-product proof block. Omit on spokes with no live product to show yet. */
  proof?: SpokeProofContent;
  /** "Casos de uso" — sits between capabilities and the final CTA. */
  useCases?: UseCasesContent;
  process?: ProcessContent;
  finalCta: FinalCtaContent;
};
