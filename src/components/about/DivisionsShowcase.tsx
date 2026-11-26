"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { DIVISIONS, type DivisionDetail } from "@/data/about";
import { DivisionIcon } from "@/components/shared/DivisionIcon";
import { cn } from "@/lib/utils";

function DivisionVisualPreview({ division }: { division: DivisionDetail }) {
  if (division.previewMode === "multiview") {
    return (
      <div className="grid h-56 w-full grid-cols-2 grid-rows-2 gap-0.5 overflow-hidden rounded-lg border border-slate-200 bg-[#0F2B5B]">
        <div className="relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-broadcast.jpg"
            alt="Angle 1 Broadcast"
            className="h-full w-full object-cover"
          />
          <span className="absolute left-2 top-2 bg-[#FF5A00] px-1.5 py-0.5 font-mono text-[9px] font-bold text-white">
            PGM · CAM 1
          </span>
        </div>
        <div className="relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/work-stage.jpg"
            alt="Angle 2 Stage"
            className="h-full w-full object-cover"
          />
          <span className="absolute left-2 top-2 bg-black/60 px-1.5 py-0.5 font-mono text-[9px] text-white">
            PVW · CAM 2
          </span>
        </div>
        <div className="relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/work-arena.jpg"
            alt="Angle 3 Arena"
            className="h-full w-full object-cover"
          />
          <span className="absolute left-2 top-2 bg-black/60 px-1.5 py-0.5 font-mono text-[9px] text-white">
            AUX · CAM 3
          </span>
        </div>
        <div className="flex flex-col justify-between bg-[#0F2B5B] p-3 text-white">
          <span className="font-mono text-[10px] uppercase tracking-widest text-orange-300">
            ATEM MULTIVIEW
          </span>
          <span className="font-display text-sm font-bold">
            1080p60 Master Feed
          </span>
          <span className="font-mono text-[10px] text-blue-200">
            COMMS + AUDIO TALLY
          </span>
        </div>
      </div>
    );
  }

  if (division.previewMode === "editorial-grid") {
    return (
      <div className="grid h-56 w-full grid-cols-12 gap-3 overflow-hidden rounded-lg border border-slate-200 bg-[#F8FAFC] p-4">
        <div className="col-span-7 overflow-hidden rounded-md border border-slate-200 bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={division.image}
            alt={division.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="col-span-5 flex flex-col justify-between rounded-md border border-slate-200 bg-white p-3.5">
          <div>
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#FF5A00]">
              BRAND SYSTEM
            </span>
            <p className="mt-1 font-display text-sm font-bold text-[#0F2B5B]">
              Sinlui TV Release Kit
            </p>
          </div>
          <div className="space-y-1.5">
            <div className="flex gap-1.5">
              <span className="h-5 flex-1 rounded-xs bg-[#0F2B5B]" />
              <span className="h-5 flex-1 rounded-xs bg-[#2563EB]" />
              <span className="h-5 flex-1 rounded-xs bg-[#FF5A00]" />
            </div>
            <p className="font-mono text-[9px] text-slate-400">
              THUMBNAIL · POSTER · IG
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-56 w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={division.image}
        alt={division.name}
        className="h-full w-full object-cover"
      />
      <span className="absolute left-3 top-3 rounded-sm bg-[#0F2B5B]/85 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
        DIVISI {division.index} · {division.shortName}
      </span>
    </div>
  );
}

export function DivisionsShowcase() {
  const [selectedId, setSelectedId] = useState(DIVISIONS[0].id);
  const shouldReduceMotion = useReducedMotion();

  const activeDivision =
    DIVISIONS.find((div) => div.id === selectedId) ?? DIVISIONS[0];

  return (
    <section
      id="divisi"
      className="scroll-mt-24 border-b border-slate-200 bg-[#F8FAFC] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FF5A00]">
            03 / RUANG LINGKUP &amp; DIVISI KERJA
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.035em] text-[#0F2B5B] sm:text-4xl">
            Struktur Produksi Lima Divisi.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 overflow-hidden rounded-xl border border-slate-200 bg-white lg:grid-cols-12">
          {/* Left Hairline Interactive Index */}
          <div className="divide-y divide-slate-200 border-b border-slate-200 lg:col-span-5 lg:border-b-0 lg:border-r">
            {DIVISIONS.map((division) => {
              const isSelected = division.id === activeDivision.id;

              return (
                <button
                  key={division.id}
                  id={`divisi-${division.id}`}
                  type="button"
                  onClick={() => setSelectedId(division.id)}
                  className={cn(
                    "relative flex w-full items-center justify-between px-6 py-5 text-left transition-colors",
                    isSelected
                      ? "bg-[#F8FAFC]"
                      : "bg-white hover:bg-slate-50/70"
                  )}
                >
                  {isSelected ? (
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-0 left-0 w-[3px] bg-[#FF5A00]"
                    />
                  ) : null}

                  <div className="flex items-start gap-4">
                    <span
                      className={cn(
                        "mt-0.5 font-mono text-xs font-bold",
                        isSelected ? "text-[#FF5A00]" : "text-slate-400"
                      )}
                    >
                      {division.index}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-[#0F2B5B]">
                        {division.name}
                      </h3>
                      <p className="mt-0.5 line-clamp-1 text-xs text-slate-500">
                        {division.tagline}
                      </p>
                    </div>
                  </div>

                  <DivisionIcon
                    iconKey={division.iconKey}
                    className={cn(
                      "ml-3 h-4 w-4 shrink-0",
                      isSelected ? "text-[#0F2B5B]" : "text-slate-400"
                    )}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Specification Sheet */}
          <div className="p-6 sm:p-8 lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDivision.id}
                initial={
                  shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }
                }
                animate={{ opacity: 1, y: 0 }}
                exit={
                  shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }
                }
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              >
                <DivisionVisualPreview division={activeDivision} />

                <div className="mt-6">
                  <div className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
                    <span>DIVISI {activeDivision.index}</span>
                    <span>·</span>
                    <span>{activeDivision.shortName}</span>
                  </div>
                  <h3 className="mt-1.5 font-display text-2xl font-bold text-[#0F2B5B]">
                    {activeDivision.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {activeDivision.description}
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 border-t border-slate-200 pt-6 sm:grid-cols-2">
                  <div>
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F2B5B]">
                      Output Utama
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {activeDivision.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-slate-700"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#FF5A00]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0F2B5B]">
                      Perangkat &amp; Stack
                    </p>
                    <ul className="mt-3 divide-y divide-slate-100 border-y border-slate-100">
                      {activeDivision.tools.map((tool) => (
                        <li
                          key={tool}
                          className="py-2 font-mono text-xs font-medium text-[#0F2B5B]"
                        >
                          {tool}
                        </li>
                      ))}
                    </ul>
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
