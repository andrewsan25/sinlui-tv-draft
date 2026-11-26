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
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
            Jejak Perjalanan
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.03em] text-[#0F2B5B] sm:text-5xl">
            Evolusi studio{" "}
            <span className="font-serif italic font-normal text-[#F46F15]">
              dari masa ke masa.
            </span>
          </h2>
        </div>

        <div ref={containerRef} className="relative mt-14 pl-8 sm:pl-12">
          {/* Soft track */}
          <div
            aria-hidden="true"
            className="absolute bottom-4 left-2.5 top-4 w-[2px] rounded-full bg-slate-200/80 sm:left-3.5"
          />
          {/* GSAP scrubbed progress line */}
          <div
            ref={progressBarRef}
            aria-hidden="true"
            className={cn(
              "will-change-transform absolute bottom-4 left-2.5 top-4 w-[2px] origin-top rounded-full bg-gradient-to-b from-[#0F2B5B] via-[#2563EB] to-[#F46F15] sm:left-3.5",
              shouldReduceMotion ? "scale-y-100" : ""
            )}
          />

          <div className="space-y-6">
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
                    duration: 0.5,
                    delay: shouldReduceMotion ? 0 : idx * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative"
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute -left-[29px] top-8 h-3.5 w-3.5 rounded-full border-2 border-white shadow-sm sm:-left-[41px]",
                      isLatest ? "bg-[#F46F15]" : "bg-[#2563EB]"
                    )}
                  />

                  <div
                    className={cn(
                      "grid grid-cols-1 gap-5 rounded-[24px] border p-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 sm:p-8 md:grid-cols-12 md:items-center",
                      isLatest
                        ? "border-orange-200/80 bg-[#F6F8FC] shadow-luxury"
                        : "border-[#0F2B5B]/[0.07] bg-white shadow-luxury hover:shadow-luxury-hover"
                    )}
                  >
                    <div className="md:col-span-4">
                      <span className="font-serif text-4xl italic text-[#0F2B5B] sm:text-5xl">
                        {milestone.year}
                      </span>
                      <span
                        className={cn(
                          "mt-2 inline-block rounded-full px-3 py-0.5 text-[11px] font-semibold",
                          isLatest
                            ? "bg-[#F46F15] text-white"
                            : "bg-blue-50 text-[#2563EB]"
                        )}
                      >
                        {milestone.highlightTag}
                      </span>
                    </div>

                    <div className="md:col-span-8">
                      <h3 className="font-display text-xl font-semibold text-[#0F2B5B] sm:text-2xl">
                        {milestone.title}
                      </h3>
                      <p className="mt-1 text-xs font-semibold text-[#2563EB]">
                        {milestone.subtitle}
                      </p>
                      <p className="mt-2.5 text-sm leading-relaxed text-slate-500 sm:text-base">
                        {milestone.description}
                      </p>
                    </div>
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
