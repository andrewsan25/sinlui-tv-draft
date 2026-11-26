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
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/90 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/home"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
          aria-label="Sinlui TV Beranda"
        >
          <LogoMark />
        </Link>

        {/* Minimalist Bare Links with 2px Bottom Indicator */}
        <nav
          aria-label="Navigasi Utama"
          className="hidden h-full items-center gap-8 md:flex"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative flex h-full items-center text-[13px] font-medium tracking-wide transition-colors duration-200 focus:outline-none focus-visible:text-[#FF5A00]",
                  isActive
                    ? "text-[#0F2B5B]"
                    : "text-slate-500 hover:text-[#0F2B5B]"
                )}
              >
                <span>{link.label}</span>
                {isActive ? (
                  <motion.span
                    layoutId="navbar-active-line"
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 420, damping: 34 }
                    }
                    className="absolute inset-x-0 bottom-0 h-[2px] bg-[#FF5A00]"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        {/* Right Telemetry + Architectural Outline Button */}
        <div className="flex items-center gap-4">
          <span className="hidden font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-slate-400 lg:inline-block">
            SBY · 26/27
          </span>

          <Link
            href="/about#divisi"
            className="hidden items-center gap-1.5 rounded-md border border-[#0F2B5B] px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#0F2B5B] transition-colors duration-200 hover:bg-[#0F2B5B] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] sm:inline-flex"
          >
            <span>Divisi</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-[#0F2B5B] transition-colors hover:border-[#0F2B5B] md:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Architectural Hairline Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-slate-200 bg-white md:hidden"
          >
            <div className="mx-auto max-w-7xl divide-y divide-slate-200 px-4">
              <div className="flex items-center justify-between py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400">
                <span>PERIODE {SITE_CONFIG.period}</span>
                <span className="text-[#FF5A00]">UNIT SIARAN</span>
              </div>

              {NAV_LINKS.map((link, idx) => {
                const isActive =
                  pathname === link.href || pathname.startsWith(`${link.href}/`);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between py-4 transition-colors"
                  >
                    <div className="flex items-baseline gap-3">
                      <span
                        className={cn(
                          "font-mono text-xs",
                          isActive ? "text-[#FF5A00]" : "text-slate-400"
                        )}
                      >
                        0{idx + 1}
                      </span>
                      <div>
                        <span
                          className={cn(
                            "block font-display text-lg font-bold",
                            isActive ? "text-[#0F2B5B]" : "text-slate-700"
                          )}
                        >
                          {link.label}
                        </span>
                        <span className="block text-xs text-slate-500">
                          {link.description}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight
                      className={cn(
                        "h-4 w-4",
                        isActive ? "text-[#FF5A00]" : "text-slate-400"
                      )}
                    />
                  </Link>
                );
              })}

              <div className="py-4">
                <Link
                  href="/about#divisi"
                  className="flex w-full items-center justify-between rounded-md bg-[#0F2B5B] px-4 py-3 text-sm font-medium text-white"
                >
                  <span>Ruang Lingkup Lima Divisi</span>
                  <ArrowUpRight className="h-4 w-4 text-[#FF5A00]" />
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
