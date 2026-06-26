import type { Metadata } from "next";
import { ComingSoon } from "@/components/landing/coming-soon";

export const metadata: Metadata = {
  title: "Apps móviles",
  description:
    "Aplicaciones móviles con diseño premium e ingeniería sólida. Página en construcción — hablemos de tu proyecto.",
  alternates: { canonical: "/apps-moviles" },
};

export default function AppsMovilesPage() {
  return (
    <ComingSoon
      eyebrow="Apps móviles · Próximamente"
      title="Apps móviles que se sienten premium"
      description="Estamos preparando esta sección. Si tienes una idea de app móvil en mente, cuéntanos: la diseñamos y construimos con el mismo estándar de producto que el resto de nuestro trabajo."
    />
  );
}
