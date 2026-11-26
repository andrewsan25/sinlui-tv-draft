"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { DIVISIONS } from "@/data/about";
import { DivisionIcon } from "@/components/shared/DivisionIcon";
import { cn } from "@/lib/utils";

export function DivisionBentoSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
              Ekosistem Produksi
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.03em] text-[#0F2B5B] sm:text-5xl">
              Lima divisi yang{" "}
              <span className="font-serif italic font-normal text-[#F46F15]">
                saling melengkapi.
              </span>
            </h2>
          </div>

          <Link
            href="/about#divisi"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-[#0F2B5B]/12 bg-white px-5 py-2.5 text-xs font-semibold text-[#0F2B5B] shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F46F15]/50 hover:text-[#F46F15] sm:self-auto"
          >
            <span>Lihat Semua Divisi</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Breathable Sculpted Luxury Bento Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
          {DIVISIONS.map((division, idx) => {
            const isVideografi = division.id === "videografi";
            const isBroadcasting = division.id === "broadcasting";
            const isPorcelain =
              division.id === "fotografi" ||
              division.id === "desain-publikasi";

            return (
              <motion.div
                key={division.id}
                initial={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: shouldReduceMotion ? 0 : idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={cn(
                  "group relative flex flex-col justify-between rounded-[28px] p-7 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 sm:p-8",
                  isBroadcasting
                    ? "bg-[#0F2B5B] text-white shadow-[0_28px_70px_-20px_rgba(15,43,91,0.35)]"
                    : isPorcelain
                      ? "border border-[#0F2B5B]/[0.06] bg-[#F6F8FC] hover:bg-white hover:shadow-luxury"
                      : "border border-[#0F2B5B]/[0.07] bg-white shadow-luxury hover:shadow-luxury-hover",
                  division.bentoSpan
                )}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105",
                        isBroadcasting
                          ? "bg-white/10 text-[#F46F15]"
                          : division.accent === "orange"
                            ? "bg-orange-50 text-[#F46F15]"
                            : "bg-blue-50 text-[#2563EB]"
                      )}
                    >
                      <DivisionIcon iconKey={division.iconKey} />
                    </span>

                    <Link
                      href={`/about#divisi-${division.id}`}
                      aria-label={`Detail divisi ${division.name}`}
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-300",
                        isBroadcasting
                          ? "border-white/15 text-blue-200 group-hover:border-[#F46F15] group-hover:bg-[#F46F15] group-hover:text-white"
                          : "border-[#0F2B5B]/10 text-slate-400 group-hover:border-[#F46F15]/40 group-hover:text-[#F46F15]"
                      )}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>

                  {isVideografi ? (
                    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-12 sm:items-center">
                      <div className="sm:col-span-7">
                        <h3 className="font-display text-2xl font-semibold text-[#0F2B5B]">
                          {division.name}
                        </h3>
                        <p className="mt-1.5 text-sm font-medium text-[#2563EB]">
                          {division.tagline}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-slate-500">
                          {division.description}
                        </p>
                      </div>
                      <div className="overflow-hidden rounded-[20px] border border-[#0F2B5B]/[0.06] sm:col-span-5">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={division.image}
                          alt={division.name}
                          className="aspect-[16/11] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <h3
                        className={cn(
                          "mt-6 font-display text-2xl font-semibold",
                          isBroadcasting ? "text-white" : "text-[#0F2B5B]"
                        )}
                      >
                        {division.name}
                      </h3>
                      <p
                        className={cn(
                          "mt-1.5 text-sm font-medium",
                          isBroadcasting ? "text-orange-300" : "text-[#2563EB]"
                        )}
                      >
                        {division.tagline}
                      </p>
                      <p
                        className={cn(
                          "mt-3 text-sm leading-relaxed",
                          isBroadcasting ? "text-blue-100/80" : "text-slate-500"
                        )}
                      >
                        {division.description}
                      </p>
                    </>
                  )}
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {division.tools.map((tool) => (
                    <span
                      key={tool}
                      className={cn(
                        "rounded-full px-3 py-1 text-[11px] font-medium",
                        isBroadcasting
                          ? "bg-white/10 text-blue-100"
                          : isPorcelain
                            ? "bg-white text-slate-600"
                            : "bg-[#F6F8FC] text-slate-600"
                      )}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
