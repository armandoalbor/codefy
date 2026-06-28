"use client";

/**
 * Per-vertical hero visual resolver.
 *
 * Maps a `HeroVisualVariant` to its bespoke showcase. Bespoke verticals are
 * added incrementally; any variant without dedicated art falls back to the home
 * showcase so every route renders a polished visual until its art lands.
 */

import { HeroShowcase } from "./hero-showcase";
import { CommunicationNetworkVisual } from "./hero-visuals/communication-network";
import { LivingDashboardVisual } from "./hero-visuals/living-dashboard";
import { BrowserMockupVisual } from "./hero-visuals/browser-mockup";
import type { HeroVisualVariant } from "@/content/types";

export function HeroVisual({ variant }: { variant: HeroVisualVariant }) {
  switch (variant) {
    case "telecom":
      return <CommunicationNetworkVisual />;
    case "software":
      return <LivingDashboardVisual />;
    case "landing":
      return <BrowserMockupVisual />;
    // Remaining Phase 2 verticals fall back to the home showcase for now.
    case "home":
    case "apps":
    case "seo":
    default:
      return <HeroShowcase />;
  }
}
