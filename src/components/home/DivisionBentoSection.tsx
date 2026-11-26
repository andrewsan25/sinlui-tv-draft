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
    <section className="border-b border-slate-200/80 bg-[#F8FAFC] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#F97316]">
              Ekosistem Produksi
            </p>
            <h2 className="mt-1.5 font-display text-3xl font-extrabold text-[#0F2B5B] sm:text-4xl">
              Lima Divisi yang Saling Terhubung
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-600 sm:text-base">
              Setiap hasil dokumentasi dan siaran langsung lahir dari kolaborasi
              lima divisi spesialis dengan peran yang jelas.
            </p>
          </div>

          <Link
            href="/about#divisi"
            className="inline-flex items-center gap-1.5 self-start rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-[#0F2B5B] transition-colors hover:border-[#F97316] hover:text-[#F97316] sm:self-auto"
          >
            <span>Detail Semua Divisi</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          {DIVISIONS.map((division, idx) => {
            const isOrange = division.accent === "orange";

            return (
              <motion.div
                key={division.id}
                initial={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: shouldReduceMotion ? 0 : idx * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  "group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
                  isOrange
                    ? "hover:border-[#F97316]/70 hover:shadow-orange-500/10"
                    : "hover:border-[#2563EB]/60 hover:shadow-blue-500/10",
                  division.bentoSpan
                )}
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={cn(
                        "flex h-11 w-11 items-center justify-center rounded-2xl border",
                        isOrange
                          ? "border-orange-200 bg-orange-50 text-[#F97316]"
                          : "border-blue-200 bg-blue-50 text-[#2563EB]"
                      )}
                    >
                      <DivisionIcon iconKey={division.iconKey} />
                    </span>

                    <Link
                      href={`/about#divisi-${division.id}`}
                      aria-label={`Pelajari divisi ${division.name}`}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-colors group-hover:border-[#0F2B5B] group-hover:text-[#0F2B5B]"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold text-[#0F2B5B]">
                    {division.name}
                  </h3>
                  <p className="mt-1.5 text-sm font-medium text-[#2563EB]">
                    {division.tagline}
                  </p>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {division.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-slate-100 pt-4">
                  {division.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 font-mono text-[11px] font-medium text-slate-600"
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
