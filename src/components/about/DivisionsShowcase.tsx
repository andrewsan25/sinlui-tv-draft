"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Wrench } from "lucide-react";
import { DIVISIONS } from "@/data/about";
import { DivisionIcon } from "@/components/shared/DivisionIcon";
import { cn } from "@/lib/utils";

export function DivisionsShowcase() {
  const [selectedId, setSelectedId] = useState(DIVISIONS[0].id);
  const shouldReduceMotion = useReducedMotion();

  const activeDivision =
    DIVISIONS.find((div) => div.id === selectedId) ?? DIVISIONS[0];

  return (
    <section
      id="divisi"
      className="scroll-mt-24 border-b border-slate-200/80 bg-[#F8FAFC] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#2563EB]">
            Ruang Lingkup &amp; Divisi Kerja
          </p>
          <h2 className="mt-1.5 font-display text-3xl font-extrabold text-[#0F2B5B] sm:text-4xl">
            Struktur Produksi Lima Divisi
          </h2>
          <p className="mt-2.5 text-sm leading-relaxed text-slate-600 sm:text-base">
            Pilih masing-masing divisi untuk melihat fokus kerja, output utama,
            dan perangkat standar yang digunakan oleh kru Sinlui TV.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left Interactive Selector List */}
          <div className="space-y-3 lg:col-span-5">
            {DIVISIONS.map((division) => {
              const isSelected = division.id === activeDivision.id;
              const isOrange = division.accent === "orange";

              return (
                <button
                  key={division.id}
                  id={`divisi-${division.id}`}
                  type="button"
                  onClick={() => setSelectedId(division.id)}
                  className={cn(
                    "group relative flex w-full items-center justify-between rounded-2xl border p-4 text-left transition-all duration-200",
                    isSelected
                      ? "border-[#0F2B5B]/25 bg-white shadow-md shadow-slate-900/5"
                      : "border-slate-200/80 bg-white/60 hover:border-[#2563EB]/40 hover:bg-white"
                  )}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors",
                        isSelected
                          ? isOrange
                            ? "border-orange-200 bg-[#F97316] text-white"
                            : "border-blue-200 bg-[#2563EB] text-white"
                          : "border-slate-200 bg-slate-50 text-[#0F2B5B]"
                      )}
                    >
                      <DivisionIcon iconKey={division.iconKey} />
                    </span>

                    <div>
                      <h3 className="font-display text-base font-bold text-[#0F2B5B]">
                        {division.name}
                      </h3>
                      <p className="mt-0.5 line-clamp-1 text-xs text-slate-500">
                        {division.tagline}
                      </p>
                    </div>
                  </div>

                  <span
                    className={cn(
                      "ml-3 h-2.5 w-2.5 shrink-0 rounded-full transition-colors",
                      isSelected
                        ? isOrange
                          ? "bg-[#F97316]"
                          : "bg-[#2563EB]"
                        : "bg-slate-200 group-hover:bg-slate-300"
                    )}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Detail Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDivision.id}
                initial={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 0, y: 10 }
                }
                animate={{ opacity: 1, y: 0 }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: -10 }
                }
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/5 sm:p-8"
              >
                <div
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-0 top-0 h-1.5",
                    activeDivision.accent === "orange"
                      ? "bg-[#F97316]"
                      : "bg-[#2563EB]"
                  )}
                />

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2.5">
                    <span
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-xl border",
                        activeDivision.accent === "orange"
                          ? "border-orange-200 bg-orange-50 text-[#F97316]"
                          : "border-blue-200 bg-blue-50 text-[#2563EB]"
                      )}
                    >
                      <DivisionIcon iconKey={activeDivision.iconKey} />
                    </span>
                    <div>
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                        DIVISI PRODUKSI
                      </span>
                      <h3 className="font-display text-2xl font-extrabold text-[#0F2B5B]">
                        {activeDivision.name}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm font-semibold text-[#2563EB] sm:text-base">
                  {activeDivision.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {activeDivision.description}
                </p>

                <div className="mt-7 grid grid-cols-1 gap-6 border-t border-slate-100 pt-6 sm:grid-cols-2">
                  <div>
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F2B5B]">
                      Hasil &amp; Tanggung Jawab
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {activeDivision.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-slate-700"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#F97316]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F2B5B]">
                      <Wrench className="h-3.5 w-3.5 text-[#2563EB]" />
                      <span>Perangkat &amp; Workflow</span>
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {activeDivision.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 font-mono text-xs font-medium text-[#0F2B5B]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
