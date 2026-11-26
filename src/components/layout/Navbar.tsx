"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/data/site";
import { cn } from "@/lib/utils";
import { LogoMark } from "./LogoMark";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/home"
          className="rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
          aria-label="Sinlui TV Beranda"
        >
          <LogoMark showSubtext />
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Navigasi Utama"
          className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-slate-50/80 p-1 md:flex"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]",
                  isActive
                    ? "text-[#0F2B5B]"
                    : "text-slate-600 hover:text-[#0F2B5B]"
                )}
              >
                {isActive ? (
                  <motion.span
                    layoutId="navbar-active-indicator"
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 380, damping: 32 }
                    }
                    className="absolute inset-0 rounded-full border border-orange-200 bg-white shadow-sm"
                  />
                ) : null}
                <span className="relative z-10 inline-flex items-center gap-1.5">
                  {isActive ? (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />
                  ) : null}
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Right CTA & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <Link
            href="/about#divisi"
            className="hidden items-center gap-1.5 rounded-full bg-[#F97316] px-4 py-2 text-xs font-semibold tracking-wide text-white shadow-sm shadow-orange-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#EA580C] hover:shadow-md hover:shadow-orange-500/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2 sm:inline-flex"
          >
            <span>Divisi &amp; Karya</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0F2B5B] transition-colors hover:border-[#2563EB] hover:text-[#2563EB] md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-slate-200 bg-white md:hidden"
          >
            <div className="mx-auto max-w-7xl space-y-2 px-4 py-4">
              <div className="mb-2 flex items-center justify-between px-2">
                <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-slate-400">
                  Periode {SITE_CONFIG.period}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-2.5 py-0.5 text-[11px] font-semibold text-[#F97316]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />
                  ON AIR
                </span>
              </div>

              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === link.href || pathname.startsWith(`${link.href}/`);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "flex items-center justify-between rounded-xl border px-4 py-3 transition-colors",
                      isActive
                        ? "border-orange-200 bg-orange-50/70 text-[#0F2B5B]"
                        : "border-slate-200/70 bg-slate-50/60 text-slate-700 hover:border-blue-200 hover:bg-blue-50/40"
                    )}
                  >
                    <div>
                      <div className="flex items-center gap-2 font-display text-sm font-bold">
                        {isActive ? (
                          <span className="h-2 w-2 rounded-full bg-[#F97316]" />
                        ) : null}
                        <span>{link.label}</span>
                      </div>
                      <p className="mt-0.5 text-xs text-slate-500">
                        {link.description}
                      </p>
                    </div>
                    <ArrowUpRight
                      className={cn(
                        "h-4 w-4",
                        isActive ? "text-[#F97316]" : "text-slate-400"
                      )}
                    />
                  </Link>
                );
              })}

              <Link
                href="/about#divisi"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0F2B5B] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#193b75]"
              >
                <span>Jelajahi Ruang Lingkup Divisi</span>
                <ArrowUpRight className="h-4 w-4 text-[#F97316]" />
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
