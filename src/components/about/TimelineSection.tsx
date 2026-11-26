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
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2563EB]">
            04 / JEJAK PERJALANAN
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.035em] text-[#0F2B5B] sm:text-4xl">
            Evolusi Studio Sinlui TV.
          </h2>
        </div>

        <div ref={containerRef} className="relative mt-12 pl-7 sm:pl-10">
          {/* Hairline vertical guide */}
          <div
            aria-hidden="true"
            className="absolute bottom-2 left-2 top-2 w-px bg-slate-200 sm:left-3"
          />
          <div
            ref={progressBarRef}
            aria-hidden="true"
            className={cn(
              "will-change-transform absolute bottom-2 left-2 top-2 w-px origin-top bg-[#FF5A00] sm:left-3",
              shouldReduceMotion ? "scale-y-100" : ""
            )}
          />

          <div className="divide-y divide-slate-200">
            {TIMELINE_MILESTONES.map((milestone, idx) => {
              const isLatest = idx === TIMELINE_MILESTONES.length - 1;

              return (
                <motion.article
                  key={milestone.year}
                  initial={
                    shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 14 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.4,
                    delay: shouldReduceMotion ? 0 : idx * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative grid grid-cols-1 gap-4 py-8 first:pt-2 last:pb-2 md:grid-cols-12 md:items-baseline"
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute -left-[25px] top-10 h-2.5 w-2.5 rounded-full border-2 border-white first:top-4 sm:-left-[33px]",
                      isLatest ? "bg-[#FF5A00]" : "bg-[#0F2B5B]"
                    )}
                  />

                  <div className="md:col-span-4">
                    <span className="font-display text-3xl font-bold tracking-[-0.04em] text-[#0F2B5B] sm:text-4xl">
                      {milestone.year}
                    </span>
                    <span
                      className={cn(
                        "mt-1 block font-mono text-[11px] font-semibold uppercase tracking-[0.14em]",
                        isLatest ? "text-[#FF5A00]" : "text-[#2563EB]"
                      )}
                    >
                      {milestone.highlightTag}
                    </span>
                  </div>

                  <div className="md:col-span-8">
                    <h3 className="font-display text-xl font-bold text-[#0F2B5B] sm:text-2xl">
                      {milestone.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                      {milestone.subtitle}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
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
