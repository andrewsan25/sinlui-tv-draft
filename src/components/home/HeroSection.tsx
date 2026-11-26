"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Aperture,
  ArrowRight,
  CheckCircle2,
  Film,
  Play,
  Radio,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { HERO_REEL_MODES, SITE_CONFIG } from "@/data/site";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const [activeModeIndex, setActiveModeIndex] = useState(0);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [frameTick, setFrameTick] = useState(12);
  const heroRef = useRef<HTMLElement | null>(null);
  const viewfinderRef = useRef<HTMLDivElement | null>(null);
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
    if (shouldReduceMotion || !heroRef.current || !viewfinderRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(viewfinderRef.current, {
        y: -28,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
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
      className="relative overflow-hidden border-b border-slate-200/80 bg-white bg-editorial-grid"
    >
      {/* Soft top-right ambient tint keeping dominant clean white */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-50/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-orange-50/70 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8 lg:pt-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Editorial Copy */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/80 bg-orange-50/80 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-[#0F2B5B]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F97316] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F97316]" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#F97316]">
                ON AIR · PERIODE {SITE_CONFIG.period}
              </span>
            </div>

            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0F2B5B] sm:text-5xl lg:text-[3.4rem]">
              Mata &amp; Lensa{" "}
              <span className="relative inline-block text-[#2563EB]">
                Dokumentasi
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-[#F97316]/85"
                />
              </span>{" "}
              dan Siaran Kreatif Sekolah.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Sinlui TV hadir sebagai unit dokumentasi, videografi, fotografi,
              dan broadcasting resmi sekolah—mengabadikan setiap detik prestasi,
              dinamika panggung, dan energi kebersamaan dengan standar produksi
              modern.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-[#F97316] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-orange-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#EA580C] hover:shadow-lg hover:shadow-orange-500/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2"
              >
                <span>Kenali Sinlui TV</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/kepengurusan"
                className="inline-flex items-center gap-2 rounded-full border border-[#0F2B5B]/20 bg-white px-6 py-3.5 text-sm font-semibold text-[#0F2B5B] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2563EB] hover:text-[#2563EB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
              >
                <Users className="h-4 w-4 text-[#2563EB]" />
                <span>Susunan Kepengurusan</span>
              </Link>
            </div>

            {/* Quick Capabilities Strip */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-slate-200/80 pt-6 text-xs font-medium text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <Film className="h-3.5 w-3.5 text-[#F97316]" />
                Aftermovie &amp; SDE 4K
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Radio className="h-3.5 w-3.5 text-[#2563EB]" />
                Live Multicam Broadcast
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Aperture className="h-3.5 w-3.5 text-[#0F2B5B]" />
                Editorial &amp; Sport Photo
              </span>
            </div>
          </div>

          {/* Right Interactive Camera Viewfinder / Showreel Frame */}
          <div className="lg:col-span-6">
            <div
              ref={viewfinderRef}
              className="will-change-transform rounded-3xl border border-slate-200 bg-white p-3.5 shadow-xl shadow-slate-900/5 sm:p-5"
            >
              {/* Mode Switcher Bar */}
              <div className="mb-3.5 flex flex-wrap items-center justify-between gap-2">
                <div className="inline-flex flex-wrap items-center gap-1 rounded-full border border-slate-200 bg-slate-50 p-1">
                  {HERO_REEL_MODES.map((mode, idx) => {
                    const selected = idx === activeModeIndex;
                    return (
                      <button
                        key={mode.id}
                        type="button"
                        onClick={() => setActiveModeIndex(idx)}
                        className={cn(
                          "relative rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
                          selected
                            ? "text-[#0F2B5B]"
                            : "text-slate-500 hover:text-[#0F2B5B]"
                        )}
                      >
                        {selected ? (
                          <motion.span
                            layoutId="hero-mode-pill"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                            className="absolute inset-0 rounded-full border border-orange-200 bg-white shadow-sm"
                          />
                        ) : null}
                        <span className="relative z-10">{mode.label}</span>
                      </button>
                    );
                  })}
                </div>

                <span className="font-mono text-[11px] font-semibold text-slate-400">
                  CAM-A · {activeMode.shortTag}
                </span>
              </div>

              {/* Viewfinder Display Canvas */}
              <div className="relative overflow-hidden rounded-2xl border border-[#0F2B5B]/15 bg-[#0F2B5B] p-5 text-white sm:p-6">
                {/* Subtle studio grid inside monitor */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.14) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                {/* Corner Reticle Brackets */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-white/50"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-white/50"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-white/50"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-white/50"
                />

                {/* Top Telemetry HUD */}
                <div className="relative z-10 flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
                    <span
                      className={cn(
                        "h-2 w-2 rounded-full",
                        activeMode.accent === "orange"
                          ? "bg-[#F97316]"
                          : "bg-[#60A5FA]"
                      )}
                    />
                    <span className="font-mono text-[11px] font-semibold tracking-wider text-white">
                      {activeMode.statusLabel}
                    </span>
                  </div>

                  <span className="font-mono text-xs tabular-nums text-blue-100">
                    00:04:28:{paddedFrame}
                  </span>
                </div>

                {/* Center Event Monitor Visual */}
                <div className="relative z-10 my-7 flex flex-col items-start justify-between gap-6 sm:my-8 sm:flex-row sm:items-center">
                  <div className="max-w-sm">
                    <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-orange-300">
                      {activeMode.location}
                    </p>
                    <h2 className="mt-1.5 font-display text-xl font-bold leading-snug text-white sm:text-2xl">
                      {activeMode.eventTitle}
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="rounded-md bg-white/10 px-2 py-0.5 font-mono text-[11px] text-blue-100">
                        {activeMode.resolution}
                      </span>
                      <span className="rounded-md bg-white/10 px-2 py-0.5 font-mono text-[11px] text-blue-100">
                        {activeMode.fps}
                      </span>
                      <span className="rounded-md bg-white/10 px-2 py-0.5 font-mono text-[11px] text-blue-100">
                        {activeMode.lens}
                      </span>
                    </div>
                  </div>

                  {/* Interactive Showreel Trigger */}
                  <button
                    type="button"
                    onClick={() => setShowreelOpen(true)}
                    className="group inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-left backdrop-blur-sm transition-all duration-200 hover:border-[#F97316] hover:bg-[#F97316]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0F2B5B] shadow-sm transition-transform group-hover:scale-105">
                      <Play className="ml-0.5 h-4 w-4 fill-current" />
                    </span>
                    <span>
                      <span className="block text-xs font-bold text-white">
                        Preview Showreel
                      </span>
                      <span className="block font-mono text-[10px] text-blue-100 group-hover:text-orange-50">
                        Storyboard &amp; Notes
                      </span>
                    </span>
                  </button>
                </div>

                {/* Bottom Camera Telemetry + VU Bars */}
                <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-4">
                  <div className="flex items-center gap-4 font-mono text-[11px] text-blue-100/90">
                    <span>{activeMode.iso}</span>
                    <span>{activeMode.aperture}</span>
                    <span>WB 5600K</span>
                  </div>

                  {/* Mini Audio Level Meter */}
                  <div
                    aria-hidden="true"
                    className="flex items-center gap-1.5"
                  >
                    <span className="font-mono text-[10px] text-blue-200">
                      CH1/2
                    </span>
                    <div className="flex items-end gap-0.5">
                      {[10, 14, 18, 12, 16, 11, 15, 8].map((height, i) => (
                        <span
                          key={i}
                          style={{ height: `${height}px` }}
                          className={cn(
                            "w-1 rounded-full",
                            i >= 6 ? "bg-[#F97316]" : "bg-emerald-400"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Monitor Footer Legend */}
              <div className="mt-3.5 flex items-center justify-between px-1 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5 font-medium text-[#0F2B5B]">
                  <Sparkles className="h-3.5 w-3.5 text-[#F97316]" />
                  Mode interaktif · Klik tab di atas
                </span>
                <span className="font-mono text-[11px] text-slate-400">
                  STANDBY READY
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Showreel Storyboard Modal */}
      <AnimatePresence>
        {showreelOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm"
            onClick={() => setShowreelOpen(false)}
          >
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : { opacity: 0, scale: 0.96, y: 12 }
              }
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.96, y: 12 }
              }
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 font-mono text-[11px] font-semibold text-[#F97316]">
                    {activeMode.shortTag} · STORYBOARD PREVIEW
                  </span>
                  <h3 className="mt-2.5 font-display text-xl font-bold text-[#0F2B5B]">
                    {activeMode.eventTitle}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    {activeMode.location} · {activeMode.resolution} ·{" "}
                    {activeMode.fps}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowreelOpen(false)}
                  aria-label="Tutup preview"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-[#0F2B5B] hover:text-[#0F2B5B]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#2563EB]">
                  Catatan Alur Produksi
                </p>
                <ul className="mt-3 space-y-2.5">
                  {activeMode.storyboardNotes.map((note) => (
                    <li
                      key={note}
                      className="flex items-start gap-2.5 text-sm text-slate-700"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#F97316]" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <Link
                  href="/about#divisi"
                  onClick={() => setShowreelOpen(false)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#0F2B5B]"
                >
                  <span>Lihat detail divisi produksi</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => setShowreelOpen(false)}
                  className="rounded-full bg-[#0F2B5B] px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#1a3e7d]"
                >
                  Tutup Preview
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
