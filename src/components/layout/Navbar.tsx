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
    <header className="sticky top-3 z-50 w-full px-3 sm:px-6">
      <div className="mx-auto flex h-[64px] max-w-5xl items-center justify-between rounded-full border border-[#0F2B5B]/[0.08] bg-white/80 pl-5 pr-2.5 shadow-[0_12px_40px_-12px_rgba(15,43,91,0.10)] backdrop-blur-2xl sm:pr-3">
        <Link
          href="/home"
          className="rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
          aria-label="Sinlui TV Beranda"
        >
          <LogoMark />
        </Link>

        {/* Center Gliding Pill Navigation */}
        <nav
          aria-label="Navigasi Utama"
          className="hidden items-center gap-1 md:flex"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]",
                  isActive
                    ? "text-[#0F2B5B]"
                    : "text-slate-500 hover:text-[#0F2B5B]"
                )}
              >
                {isActive ? (
                  <motion.span
                    layoutId="navbar-luxury-pill"
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 360, damping: 32 }
                    }
                    className="absolute inset-0 rounded-full bg-[#0F2B5B]/[0.06]"
                  />
                ) : null}
                <span className="relative z-10 inline-flex items-center gap-2">
                  {isActive ? (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F46F15]" />
                  ) : null}
                  <span>{link.label}</span>
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Right Sculpted Navy CTA + Circular Orange Medallion */}
        <div className="flex items-center gap-2">
          <Link
            href="/about#divisi"
            className="group hidden items-center gap-2.5 rounded-full bg-[#0F2B5B] py-1.5 pl-4 pr-1.5 text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#173976] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F46F15] sm:inline-flex"
          >
            <span>Divisi &amp; Karya</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F46F15] text-white transition-transform duration-300 group-hover:rotate-12 group-hover:scale-105">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#0F2B5B]/10 bg-white text-[#0F2B5B] transition-colors hover:border-[#F46F15]/40 md:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Floating Frosted Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 0, y: -8, scale: 0.98 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: -8, scale: 0.98 }
            }
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-2.5 max-w-5xl overflow-hidden rounded-[28px] border border-[#0F2B5B]/[0.08] bg-white/95 p-4 shadow-luxury backdrop-blur-2xl md:hidden"
          >
            <div className="mb-3 flex items-center justify-between px-3 text-xs text-slate-400">
              <span>Periode {SITE_CONFIG.period}</span>
              <span className="inline-flex items-center gap-1.5 font-medium text-[#F46F15]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F46F15]" />
                On Air
              </span>
            </div>

            <div className="space-y-1.5">
              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === link.href || pathname.startsWith(`${link.href}/`);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-3 transition-colors",
                      isActive
                        ? "bg-[#F6F8FC] text-[#0F2B5B]"
                        : "text-slate-600 hover:bg-[#F6F8FC]/60 hover:text-[#0F2B5B]"
                    )}
                  >
                    <div>
                      <div className="flex items-center gap-2 font-display text-base font-semibold">
                        {isActive ? (
                          <span className="h-2 w-2 rounded-full bg-[#F46F15]" />
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
                        isActive ? "text-[#F46F15]" : "text-slate-400"
                      )}
                    />
                  </Link>
                );
              })}
            </div>

            <Link
              href="/about#divisi"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-[#0F2B5B] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#F46F15]"
            >
              <span>Jelajahi Divisi &amp; Karya</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
