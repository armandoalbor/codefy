import type { Metadata } from "next";
import { ComingSoon } from "@/components/landing/coming-soon";

export const metadata: Metadata = {
  title: "Software a la medida",
  description:
    "Aplicaciones web, dashboards y plataformas SaaS construidas con ingeniería sólida. Página en construcción — hablemos de tu proyecto.",
  alternates: { canonical: "/software-a-la-medida" },
};

export default function SoftwareALaMedidaPage() {
  return (
    <ComingSoon
      eyebrow="Software a la medida · Próximamente"
      title="Plataformas y software a la medida"
      description="Estamos preparando esta sección. Mientras tanto, ya construimos aplicaciones web, dashboards y sistemas a la medida con arquitectura escalable. Cuéntanos qué necesitas y lo construimos."
    />
  );
}
