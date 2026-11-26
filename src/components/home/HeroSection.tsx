"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, CheckCircle2, Play, X } from "lucide-react";
import { HERO_REEL_MODES, SITE_CONFIG } from "@/data/site";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const [activeModeIndex, setActiveModeIndex] = useState(0);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const activeMode = HERO_REEL_MODES[activeModeIndex];

  useEffect(() => {
    if (shouldReduceMotion || !heroRef.current || !stageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        stageRef.current,
        { scale: 1, y: 0 },
        {
          scale: 1.045,
          y: -16,
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

  return (
    <section ref={heroRef} className="relative bg-white pb-16 pt-12 sm:pb-24 sm:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered Luxury Editorial Opening */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-slate-500"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#F46F15]" />
            <span>
              Sinlui TV · Dokumentasi &amp; Penyiaran Sekolah · Periode{" "}
              {SITE_CONFIG.period}
            </span>
          </motion.p>

          <h1 className="mt-5 font-display text-[2.5rem] font-semibold leading-[1.06] tracking-[-0.035em] text-[#0F2B5B] sm:text-6xl lg:text-[4.5rem]">
            <span className="block overflow-hidden">
              <motion.span
                initial={
                  shouldReduceMotion ? { y: 0 } : { y: "100%", opacity: 0 }
                }
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.75,
                  delay: 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block"
              >
                Lensa resmi yang menghidupkan
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={
                  shouldReduceMotion ? { y: 0 } : { y: "100%", opacity: 0 }
                }
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.75,
                  delay: 0.14,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block"
              >
                setiap{" "}
                <span className="font-serif italic font-normal text-[#2563EB]">
                  momen
                </span>{" "}
                &amp;{" "}
                <span className="font-serif italic font-normal text-[#F46F15]">
                  cerita
                </span>{" "}
                sekolah.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.22,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg"
          >
            Unit produksi kreatif resmi {SITE_CONFIG.schoolName} di bidang
            fotografi, videografi, pascaproduksi, dan penyiaran langsung
            multi-kamera dengan sentuhan sinematik.
          </motion.p>

          {/* Dual Sculpted Pill Buttons */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3.5"
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full bg-[#0F2B5B] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#0F2B5B]/15 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-[#F46F15] hover:shadow-orange-500/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F46F15] focus-visible:ring-offset-2"
            >
              <span>Kenali Sinlui TV</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/kepengurusan"
              className="inline-flex items-center rounded-full border border-[#0F2B5B]/12 bg-white px-7 py-3.5 text-sm font-semibold text-[#0F2B5B] shadow-xs transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-[#0F2B5B]/30 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
            >
              Susunan Kepengurusan
            </Link>
          </motion.div>
        </div>

        {/* Grand Floating 16:9 Cinema Stage */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.85,
            delay: 0.36,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mx-auto mt-12 max-w-6xl sm:mt-16"
        >
          <div className="relative overflow-hidden rounded-[28px] border border-[#0F2B5B]/[0.08] bg-slate-100 shadow-[0_32px_90px_-24px_rgba(15,43,91,0.18)]">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <div ref={stageRef} className="will-change-transform h-full w-full">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeMode.id}
                    src={activeMode.image}
                    alt={activeMode.eventTitle}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : { opacity: 0.35, scale: 1.03 }
                    }
                    animate={{ opacity: 1, scale: 1 }}
                    exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0.35 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full w-full object-cover"
                  />
                </AnimatePresence>
              </div>

              {/* Subtle Top Left Status Pill */}
              <div className="pointer-events-none absolute left-4 top-4 sm:left-6 sm:top-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 text-[11px] font-semibold text-[#0F2B5B] shadow-sm backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F46F15]" />
                  <span>{activeMode.statusLabel}</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-500">{activeMode.resolution}</span>
                </span>
              </div>

              {/* Bottom Floating Frosted Glass Overlays */}
              <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-end justify-between gap-3 sm:inset-x-6 sm:bottom-6">
                <div className="max-w-md rounded-2xl border border-white/60 bg-white/88 px-4 py-3 shadow-lg backdrop-blur-xl sm:px-5 sm:py-3.5">
                  <p className="text-[11px] font-medium text-[#2563EB]">
                    {activeMode.location} · {activeMode.fps} ·{" "}
                    {activeMode.aperture}
                  </p>
                  <p className="mt-0.5 font-display text-sm font-semibold text-[#0F2B5B] sm:text-base">
                    {activeMode.eventTitle}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowreelOpen(true)}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-white/60 bg-white/92 py-2 pl-2.5 pr-4 text-xs font-semibold text-[#0F2B5B] shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0F2B5B] hover:text-white"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F46F15] text-white transition-transform duration-300 group-hover:scale-105">
                    <Play className="ml-0.5 h-3.5 w-3.5 fill-current" />
                  </span>
                  <span>Putar Storyboard</span>
                </button>
              </div>
            </div>
          </div>

          {/* Centered Floating Segmented Chapter Switcher */}
          <div className="mt-6 flex justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-1 rounded-full border border-[#0F2B5B]/[0.06] bg-[#F6F8FC] p-1.5">
              {HERO_REEL_MODES.map((mode, idx) => {
                const isSelected = idx === activeModeIndex;
                return (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => setActiveModeIndex(idx)}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-xs font-semibold transition-colors duration-300 sm:px-5 sm:text-[13px]",
                      isSelected
                        ? "text-[#0F2B5B]"
                        : "text-slate-500 hover:text-[#0F2B5B]"
                    )}
                  >
                    {isSelected ? (
                      <motion.span
                        layoutId="hero-luxury-tab"
                        transition={
                          shouldReduceMotion
                            ? { duration: 0 }
                            : { type: "spring", stiffness: 360, damping: 30 }
                        }
                        className="absolute inset-0 rounded-full bg-white shadow-sm"
                      />
                    ) : null}
                    <span className="relative z-10 inline-flex items-center gap-2">
                      {isSelected ? (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#F46F15]" />
                      ) : null}
                      <span>{mode.label}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Sculpted Luxury Storyboard Modal */}
      <AnimatePresence>
        {showreelOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F2B5B]/35 p-4 backdrop-blur-md"
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
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl rounded-[28px] border border-[#0F2B5B]/[0.08] bg-white p-6 shadow-2xl sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1 text-[11px] font-semibold text-[#F46F15]">
                    {activeMode.label}
                  </span>
                  <h2 className="mt-3 font-display text-2xl font-semibold text-[#0F2B5B]">
                    {activeMode.eventTitle}
                  </h2>
                  <p className="mt-1 text-xs text-slate-500">
                    {activeMode.location} · {activeMode.resolution} ·{" "}
                    {activeMode.fps}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowreelOpen(false)}
                  aria-label="Tutup storyboard"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-[#0F2B5B] hover:text-[#0F2B5B]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-6 rounded-2xl bg-[#F6F8FC] p-5">
                <p className="text-xs font-semibold text-[#2563EB]">
                  Catatan Alur Produksi
                </p>
                <ul className="mt-3.5 space-y-3">
                  {activeMode.storyboardNotes.map((note) => (
                    <li
                      key={note}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#F46F15]" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex items-center justify-between gap-3">
                <Link
                  href="/about#divisi"
                  onClick={() => setShowreelOpen(false)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#0F2B5B]"
                >
                  <span>Eksplorasi divisi produksi</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => setShowreelOpen(false)}
                  className="rounded-full bg-[#0F2B5B] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#F46F15]"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
