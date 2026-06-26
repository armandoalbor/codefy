import type { Metadata } from "next";
import { ComingSoon } from "@/components/landing/coming-soon";
import { routeCta } from "@/content/shared";

export const metadata: Metadata = {
  title: "Telecomunicaciones — Asterisk, PBX y Call Centers",
  description:
    "Plataformas de telefonía, PBX con Asterisk, call centers y comunicación omnicanal (voz y WhatsApp). Hablemos de tu proyecto enterprise.",
  alternates: { canonical: "/telecomunicaciones" },
};

/**
 * Interim telecom landing. Resolves the flagship route linked from the home and
 * header (no 404) with a telecom-scoped hero and the enterprise CTA. The full
 * spoke composition (capabilities grid + cc365 proof) is the next iteration.
 */
export default function TelecomunicacionesPage() {
  return (
    <ComingSoon
      eyebrow="Telecomunicaciones"
      title="Telefonía, PBX y call centers a la medida"
      description="Construimos plataformas de telecomunicaciones de verdad: PBX con Asterisk, call centers, IVR, grabación y comunicación omnicanal por voz y WhatsApp. Es nuestra especialidad técnica más profunda, ya en producción. Cuéntanos qué necesita tu operación."
      cta={routeCta["/telecomunicaciones"]}
    />
  );
}
