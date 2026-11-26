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
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2563EB]">
              03 / EKOSISTEM PRODUKSI
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.035em] text-[#0F2B5B] sm:text-5xl">
              Lima Divisi Terstruktur.
            </h2>
          </div>

          <Link
            href="/about#divisi"
            className="group inline-flex items-center gap-1.5 self-start border-b border-[#0F2B5B]/30 pb-1 text-sm font-semibold text-[#0F2B5B] transition-colors hover:border-[#FF5A00] hover:text-[#FF5A00] sm:self-auto"
          >
            <span>Eksplorasi Semua Divisi</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Architectural Hairline Bento Matrix */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-12">
          {DIVISIONS.map((division, idx) => {
            const isVideografi = division.id === "videografi";

            return (
              <motion.div
                key={division.id}
                initial={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.4,
                  delay: shouldReduceMotion ? 0 : idx * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  "group relative flex flex-col justify-between bg-white p-7 transition-colors duration-200 hover:bg-[#F8FAFC] sm:p-8",
                  division.bentoSpan
                )}
              >
                {/* Hover top hairline reveal */}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-[#FF5A00] transition-transform duration-300 group-hover:scale-x-100"
                />

                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#FF5A00]">
                        {division.index}
                      </span>
                      <DivisionIcon
                        iconKey={division.iconKey}
                        className="h-4 w-4 text-[#0F2B5B]"
                      />
                    </div>

                    <Link
                      href={`/about#divisi-${division.id}`}
                      aria-label={`Detail divisi ${division.name}`}
                      className="text-slate-400 transition-colors group-hover:text-[#FF5A00]"
                    >
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>

                  {isVideografi ? (
                    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-12 sm:items-center">
                      <div className="sm:col-span-7">
                        <h3 className="font-display text-2xl font-bold text-[#0F2B5B]">
                          {division.name}
                        </h3>
                        <p className="mt-1.5 text-sm font-medium text-[#2563EB]">
                          {division.tagline}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">
                          {division.description}
                        </p>
                      </div>
                      <div className="overflow-hidden rounded-lg border border-slate-200 sm:col-span-5">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={division.image}
                          alt={division.name}
                          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <h3 className="mt-6 font-display text-2xl font-bold text-[#0F2B5B]">
                        {division.name}
                      </h3>
                      <p className="mt-1.5 text-sm font-medium text-[#2563EB]">
                        {division.tagline}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {division.description}
                      </p>
                    </>
                  )}
                </div>

                <div className="mt-8 border-t border-slate-100 pt-4 font-mono text-[11px] text-slate-400">
                  {division.tools.join(" · ")}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
