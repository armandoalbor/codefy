import type { Metadata } from "next";
import { ComingSoon } from "@/components/landing/coming-soon";

export const metadata: Metadata = {
  title: "SEO y optimización",
  description:
    "Posicionamiento, performance y optimización técnica para crecer en buscadores. Página en construcción — hablemos de tu proyecto.",
  alternates: { canonical: "/seo-optimizacion" },
};

export default function SeoOptimizacionPage() {
  return (
    <ComingSoon
      eyebrow="SEO y optimización · Próximamente"
      title="SEO y optimización técnica"
      description="Estamos preparando esta sección. Trabajamos performance, SEO técnico y optimización para que tu producto cargue rápido y crezca en buscadores. Cuéntanos tus objetivos."
    />
  );
}
