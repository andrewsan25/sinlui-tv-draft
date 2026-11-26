"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TIMELINE_MILESTONES } from "@/data/about";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function TimelineSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (
      shouldReduceMotion ||
      !containerRef.current ||
      !progressBarRef.current
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        progressBarRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom 75%",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#F97316]">
            Perjalanan Organisasi
          </p>
          <h2 className="mt-1.5 font-display text-3xl font-extrabold text-[#0F2B5B] sm:text-4xl">
            Jejak Perkembangan Sinlui TV
          </h2>
          <p className="mt-2.5 text-sm leading-relaxed text-slate-600 sm:text-base">
            Transformasi bertahap dari tim arsip kamera sederhana menjadi unit
            penyiaran dan dokumentasi modern sekolah.
          </p>
        </div>

        <div ref={containerRef} className="relative mt-12 pl-7 sm:pl-10">
          {/* Static background track */}
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-2.5 top-2 w-[2px] rounded-full bg-slate-200 sm:left-3.5"
          />
          {/* GSAP ScrollTrigger scrubbed progress track */}
          <div
            ref={progressBarRef}
            aria-hidden="true"
            className={cn(
              "will-change-transform absolute bottom-2 left-2.5 top-2 w-[2px] origin-top rounded-full bg-gradient-to-b from-[#0F2B5B] via-[#2563EB] to-[#F97316] sm:left-3.5",
              shouldReduceMotion ? "scale-y-100" : ""
            )}
          />

          <div className="space-y-8">
            {TIMELINE_MILESTONES.map((milestone, idx) => {
              const isLatest = idx === TIMELINE_MILESTONES.length - 1;

              return (
                <motion.article
                  key={milestone.year}
                  initial={
                    shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.45,
                    delay: shouldReduceMotion ? 0 : idx * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative"
                >
                  {/* Timeline Node Dot */}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute -left-[25px] top-6 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white shadow-xs sm:-left-[33px]",
                      isLatest ? "bg-[#F97316]" : "bg-[#2563EB]"
                    )}
                  />

                  <div
                    className={cn(
                      "rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md",
                      isLatest
                        ? "border-orange-200 bg-orange-50/35 hover:border-[#F97316]"
                        : "border-slate-200 bg-white hover:border-[#2563EB]/50"
                    )}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-sm font-bold text-[#0F2B5B]">
                        {milestone.year}
                      </span>
                      <span
                        className={cn(
                          "rounded-full px-3 py-0.5 font-mono text-[11px] font-semibold",
                          isLatest
                            ? "bg-[#F97316] text-white"
                            : "border border-blue-200 bg-blue-50 text-[#2563EB]"
                        )}
                      >
                        {milestone.highlightTag}
                      </span>
                    </div>

                    <h3 className="mt-2 font-display text-xl font-bold text-[#0F2B5B]">
                      {milestone.title}
                    </h3>
                    <p className="mt-0.5 text-xs font-semibold text-[#2563EB]">
                      {milestone.subtitle}
                    </p>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                      {milestone.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
