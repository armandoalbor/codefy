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

export type HeroContent = {
  eyebrow: string;
  headline: [string, string];
  subheadline: string;
  ctaPrimary: CtaSpec;
  ctaSecondary?: CtaSpec;
  supporting?: string[];
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
 * Canonical contract for a service "spoke" page (e.g. /telecomunicaciones).
 * Every spoke fills this shape and composes the standard section order.
 */
export type SpokePageContent = {
  meta: RouteMeta;
  hero: HeroContent;
  capabilities: FeatureGridContent;
  offerings?: ServicesContent;
  proof: PortfolioContent;
  process?: ProcessContent;
  finalCta: FinalCtaContent;
};
