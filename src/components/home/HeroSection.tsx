"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Play,
  X,
} from "lucide-react";
import { HERO_REEL_MODES, SITE_CONFIG } from "@/data/site";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const [activeModeIndex, setActiveModeIndex] = useState(0);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [frameTick, setFrameTick] = useState(14);
  const heroRef = useRef<HTMLElement | null>(null);
  const imageWrapRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const activeMode = HERO_REEL_MODES[activeModeIndex];

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setFrameTick((prev) => (prev + 1) % 60);
    }, 1000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (shouldReduceMotion || !heroRef.current || !imageWrapRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageWrapRef.current,
        { scale: 1, y: 0 },
        {
          scale: 1.07,
          y: -18,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (!showreelOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowreelOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showreelOpen]);

  const paddedFrame = String(frameTick).padStart(2, "0");

  return (
    <section
      ref={heroRef}
      className="relative border-b border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 sm:pb-24 sm:pt-8 lg:px-8">
        {/* Top Architectural Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">
          <span>UNIT DOKUMENTASI &amp; PENYIARAN RESMI</span>
          <span className="hidden sm:inline">PERIODE {SITE_CONFIG.period}</span>
          <span className="inline-flex items-center gap-2 text-[#0F2B5B]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A00]" />
            <span className="tabular-nums">REC 00:04:28:{paddedFrame}</span>
          </span>
        </div>

        {/* Monumental Editorial Display Headline */}
        <div className="pt-10 sm:pt-14">
          <h1 className="font-display text-[2.75rem] font-bold uppercase leading-[0.94] tracking-[-0.045em] text-[#0F2B5B] sm:text-6xl lg:text-[5.25rem] xl:text-[6rem]">
            MATA &amp; LENSA RESMI
            <br />
            <span className="text-[#2563EB]">DOKUMENTASI</span> SEKOLAH
            <span className="text-[#FF5A00]">.</span>
          </h1>
        </div>

        {/* Asymmetric 12-Column Studio Split */}
        <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-12 lg:items-end lg:gap-12">
          {/* Left 4 cols: Authoritative Statement & Architectural CTAs */}
          <div className="flex flex-col justify-between lg:col-span-4">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF5A00]">
                SINLUI TV · SURABAYA
              </p>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Unit produksi visual resmi {SITE_CONFIG.schoolName}. Kami
                menghadirkan liputan foto jurnalistik, sinematografi acara,
                hingga penyiaran langsung multi-kamera dengan presisi studio.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 rounded-md bg-[#0F2B5B] px-6 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors duration-200 hover:bg-[#FF5A00] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A00] focus-visible:ring-offset-2"
              >
                <span>Tentang Sinlui TV</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/kepengurusan"
                className="group inline-flex items-center gap-1.5 border-b border-[#0F2B5B]/30 pb-1 text-sm font-semibold text-[#0F2B5B] transition-colors hover:border-[#FF5A00] hover:text-[#FF5A00]"
              >
                <span>Susunan Kepengurusan</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className="mt-10 border-t border-slate-200 pt-5 font-mono text-[11px] uppercase tracking-[0.12em] text-slate-400">
              <span>4K CINEMA WORKFLOW · 1080P60 MULTICAM</span>
            </div>
          </div>

          {/* Right 8 cols: Widescreen 16:9 Cinema Viewfinder Frame */}
          <div className="lg:col-span-8">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                <div ref={imageWrapRef} className="will-change-transform h-full w-full">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeMode.id}
                      src={activeMode.image}
                      alt={activeMode.eventTitle}
                      initial={
                        shouldReduceMotion
                          ? { opacity: 1 }
                          : { opacity: 0.4, scale: 1.03 }
                      }
                      animate={{ opacity: 1, scale: 1 }}
                      exit={
                        shouldReduceMotion ? { opacity: 0 } : { opacity: 0.4 }
                      }
                      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full w-full object-cover"
                    />
                  </AnimatePresence>
                </div>

                {/* Subtle Optical Corner Reticles */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-4 top-4 h-4 w-4 border-l border-t border-white/70"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-4 h-4 w-4 border-r border-t border-white/70"
                />

                {/* Top Live Telemetry Overlay */}
                <div className="pointer-events-none absolute inset-x-4 top-4 flex items-center justify-between px-3">
                  <span className="inline-flex items-center gap-2 rounded-sm bg-[#0F2B5B]/85 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A00]" />
                    {activeMode.statusLabel} · {activeMode.shortTag}
                  </span>
                  <span className="rounded-sm bg-black/45 px-2.5 py-1 font-mono text-[10px] font-medium text-white backdrop-blur-md">
                    {activeMode.lens} · {activeMode.aperture}
                  </span>
                </div>

                {/* Bottom Frosted Caption + Storyboard Modal Trigger */}
                <div className="absolute inset-x-3 bottom-3 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-white/25 bg-[#0F2B5B]/80 px-4 py-3 text-white backdrop-blur-md sm:inset-x-4 sm:bottom-4">
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-orange-300">
                      {activeMode.location} · {activeMode.resolution} ·{" "}
                      {activeMode.fps}
                    </p>
                    <p className="truncate font-display text-sm font-bold text-white sm:text-base">
                      {activeMode.eventTitle}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setShowreelOpen(true)}
                    className="inline-flex items-center gap-2 rounded-md bg-white px-3.5 py-2 text-xs font-semibold text-[#0F2B5B] transition-colors hover:bg-[#FF5A00] hover:text-white"
                  >
                    <Play className="h-3.5 w-3.5 fill-current" />
                    <span>Storyboard</span>
                  </button>
                </div>
              </div>

              {/* 3-Column Hairline Chapter Strip */}
              <div className="grid grid-cols-3 divide-x divide-slate-200 border-t border-slate-200 bg-white">
                {HERO_REEL_MODES.map((mode, idx) => {
                  const isSelected = idx === activeModeIndex;
                  return (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => setActiveModeIndex(idx)}
                      className={cn(
                        "relative px-3 py-3.5 text-left transition-colors sm:px-5",
                        isSelected
                          ? "bg-[#F8FAFC]"
                          : "bg-white hover:bg-slate-50/70"
                      )}
                    >
                      {isSelected ? (
                        <motion.span
                          layoutId="hero-chapter-bar"
                          transition={
                            shouldReduceMotion
                              ? { duration: 0 }
                              : { type: "spring", stiffness: 400, damping: 32 }
                          }
                          className="absolute inset-x-0 top-0 h-[2px] bg-[#FF5A00]"
                        />
                      ) : null}

                      <span
                        className={cn(
                          "block font-mono text-[10px] font-semibold uppercase tracking-[0.14em]",
                          isSelected ? "text-[#FF5A00]" : "text-slate-400"
                        )}
                      >
                        {mode.index} / {mode.shortTag}
                      </span>
                      <span
                        className={cn(
                          "mt-0.5 block truncate font-display text-xs font-bold sm:text-sm",
                          isSelected ? "text-[#0F2B5B]" : "text-slate-600"
                        )}
                      >
                        {mode.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Editorial Storyboard Modal */}
      <AnimatePresence>
        {showreelOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F2B5B]/45 p-4 backdrop-blur-sm"
            onClick={() => setShowreelOpen(false)}
          >
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0, scale: 0.97, y: 10 }
              }
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.97, y: 10 }
              }
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4 border-b border-slate-200 p-6">
                <div>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FF5A00]">
                    {activeMode.shortTag} · CATATAN PRODUKSI
                  </span>
                  <h2 className="mt-1.5 font-display text-xl font-bold text-[#0F2B5B]">
                    {activeMode.eventTitle}
                  </h2>
                  <p className="mt-1 font-mono text-xs text-slate-500">
                    {activeMode.location} · {activeMode.resolution} ·{" "}
                    {activeMode.fps}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowreelOpen(false)}
                  aria-label="Tutup storyboard"
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-500 transition-colors hover:border-[#0F2B5B] hover:text-[#0F2B5B]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="p-6">
                <ul className="divide-y divide-slate-100">
                  {activeMode.storyboardNotes.map((note) => (
                    <li
                      key={note}
                      className="flex items-start gap-3 py-3 first:pt-0 last:pb-0 text-sm text-slate-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#FF5A00]" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5">
                  <Link
                    href="/about#divisi"
                    onClick={() => setShowreelOpen(false)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#0F2B5B]"
                  >
                    <span>Detail alur divisi</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setShowreelOpen(false)}
                    className="rounded-md bg-[#0F2B5B] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#FF5A00]"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
