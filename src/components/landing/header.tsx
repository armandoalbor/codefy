"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { CtaButton } from "./cta-button";
import { siteNav, routeCta } from "@/content/shared";

const FALLBACK_CTA = routeCta["/"];

function useRouteCta(pathname: string) {
  return routeCta[pathname] ?? FALLBACK_CTA;
}

export function Header() {
  const pathname = usePathname();
  const cta = useRouteCta(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-surface-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-6">
        <Logo priority />

        <nav className="hidden items-center gap-8 md:flex">
          {siteNav.map((item) =>
            item.soon ? (
              <span
                key={item.href}
                className="inline-flex items-center gap-1.5 text-sm text-text-muted"
              >
                {item.label}
                <span className="rounded-full border border-surface-border px-1.5 py-0.5 font-mono text-[0.55rem] uppercase tracking-[0.12em] text-text-muted">
                  Pronto
                </span>
              </span>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`text-sm transition-colors hover:text-text-primary ${
                  pathname === item.href
                    ? "text-text-primary"
                    : "text-text-secondary"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden md:block">
          <CtaButton href={cta.href} withArrow={false} className="px-5 py-2.5">
            {cta.label}
          </CtaButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center rounded-lg text-text-primary transition-colors hover:bg-surface md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-4 mb-3 overflow-hidden rounded-2xl border border-surface-border bg-background-soft/95 p-2 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col">
              {siteNav.map((item) =>
                item.soon ? (
                  <span
                    key={item.href}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-text-muted"
                  >
                    {item.label}
                    <span className="rounded-full border border-surface-border px-1.5 py-0.5 font-mono text-[0.55rem] uppercase tracking-[0.12em]">
                      Pronto
                    </span>
                  </span>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={`rounded-xl px-4 py-3 text-sm transition-colors hover:bg-surface hover:text-text-primary ${
                      pathname === item.href
                        ? "text-text-primary"
                        : "text-text-secondary"
                    }`}
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <CtaButton
                href={cta.href}
                withArrow={false}
                onClick={() => setOpen(false)}
                className="mt-2 w-full"
              >
                {cta.label}
              </CtaButton>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
