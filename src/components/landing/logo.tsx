import Image from "next/image";

type LogoProps = {
  className?: string;
  /** set on the above-the-fold header instance for LCP priority */
  priority?: boolean;
};

/** Official Codefy lockup (dark-theme variant derived from public/logo.png). */
export function Logo({ className, priority = false }: LogoProps) {
  return (
    <a
      href="#top"
      className={`inline-flex items-center ${className ?? ""}`}
      aria-label="Codefy — inicio"
    >
      <Image
        src="/logo-dark.png"
        alt="Codefy"
        width={1248}
        height={328}
        priority={priority}
        className="h-9 w-auto"
      />
    </a>
  );
}
