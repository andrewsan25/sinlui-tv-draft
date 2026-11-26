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
      <div className="grid h-60 w-full grid-cols-2 grid-rows-2 gap-1.5 overflow-hidden rounded-[20px] bg-[#0F2B5B] p-1.5">
        <div className="relative overflow-hidden rounded-tl-[16px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-broadcast.jpg"
            alt="Angle 1 Broadcast"
            className="h-full w-full object-cover"
          />
          <span className="absolute left-2.5 top-2.5 rounded-full bg-[#F46F15] px-2.5 py-0.5 text-[10px] font-semibold text-white">
            Live · Cam 1
          </span>
        </div>
        <div className="relative overflow-hidden rounded-tr-[16px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/work-stage.jpg"
            alt="Angle 2 Stage"
            className="h-full w-full object-cover"
          />
          <span className="absolute left-2.5 top-2.5 rounded-full bg-black/50 px-2.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
            Cam 2
          </span>
        </div>
        <div className="relative overflow-hidden rounded-bl-[16px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/work-arena.jpg"
            alt="Angle 3 Arena"
            className="h-full w-full object-cover"
          />
          <span className="absolute left-2.5 top-2.5 rounded-full bg-black/50 px-2.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
            Cam 3
          </span>
        </div>
        <div className="flex flex-col justify-between rounded-br-[16px] bg-[#143773] p-4 text-white">
          <span className="text-[11px] font-medium text-orange-300">
            ATEM Multiview
          </span>
          <span className="font-display text-base font-semibold">
            1080p60 Master Feed
          </span>
          <span className="text-[11px] text-blue-200">
            Audio &amp; Intercom Sync
          </span>
        </div>
      </div>
    );
  }

  if (division.previewMode === "editorial-grid") {
    return (
      <div className="grid h-60 w-full grid-cols-12 gap-3.5 overflow-hidden rounded-[20px] bg-[#F6F8FC] p-4">
        <div className="col-span-7 overflow-hidden rounded-[14px] bg-white shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={division.image}
            alt={division.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="col-span-5 flex flex-col justify-between rounded-[14px] bg-white p-4 shadow-sm">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#F46F15]">
              Brand System
            </span>
            <p className="mt-1 font-display text-base font-semibold text-[#0F2B5B]">
              Sinlui TV Release Kit
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex gap-1.5">
              <span className="h-5 flex-1 rounded-full bg-[#0F2B5B]" />
              <span className="h-5 flex-1 rounded-full bg-[#2563EB]" />
              <span className="h-5 flex-1 rounded-full bg-[#F46F15]" />
            </div>
            <p className="text-[11px] text-slate-400">
              Thumbnail · Poster · Feeds
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-60 w-full overflow-hidden rounded-[20px] bg-slate-100">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={division.image}
        alt={division.name}
        className="h-full w-full object-cover"
      />
      <span className="absolute left-3.5 top-3.5 rounded-full bg-white/90 px-3.5 py-1 text-[11px] font-semibold text-[#0F2B5B] shadow-xs backdrop-blur-md">
        Divisi {division.shortName}
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
      className="scroll-mt-24 bg-white py-14 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F46F15]">
            Ruang Lingkup &amp; Divisi Kerja
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.03em] text-[#0F2B5B] sm:text-5xl">
            Struktur produksi{" "}
            <span className="font-serif italic font-normal text-[#2563EB]">
              lima divisi.
            </span>
          </h2>
        </div>

        {/* Sculpted Porcelain Container */}
        <div className="mt-10 rounded-[36px] border border-[#0F2B5B]/[0.06] bg-[#F6F8FC] p-4 sm:p-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Left Floating Selector Cards */}
            <div className="space-y-2.5 lg:col-span-5">
              {DIVISIONS.map((division) => {
                const isSelected = division.id === activeDivision.id;

                return (
                  <button
                    key={division.id}
                    id={`divisi-${division.id}`}
                    type="button"
                    onClick={() => setSelectedId(division.id)}
                    className={cn(
                      "relative flex w-full items-center justify-between rounded-[22px] p-4 text-left transition-all duration-300 sm:p-5",
                      isSelected
                        ? "bg-white shadow-luxury"
                        : "bg-transparent hover:bg-white/60"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={cn(
                          "flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors",
                          isSelected
                            ? division.accent === "orange"
                              ? "bg-[#F46F15] text-white"
                              : "bg-[#0F2B5B] text-white"
                            : "bg-white text-[#0F2B5B]"
                        )}
                      >
                        <DivisionIcon iconKey={division.iconKey} />
                      </span>
                      <div>
                        <h3 className="font-display text-base font-semibold text-[#0F2B5B]">
                          {division.name}
                        </h3>
                        <p className="mt-0.5 line-clamp-1 text-xs text-slate-500">
                          {division.tagline}
                        </p>
                      </div>
                    </div>

                    <span
                      className={cn(
                        "ml-3 h-2 w-2 shrink-0 rounded-full transition-colors",
                        isSelected ? "bg-[#F46F15]" : "bg-slate-300"
                      )}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Pure White Detail Stage */}
            <div className="rounded-[28px] border border-[#0F2B5B]/[0.06] bg-white p-6 shadow-luxury sm:p-8 lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDivision.id}
                  initial={
                    shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  exit={
                    shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }
                  }
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                >
                  <DivisionVisualPreview division={activeDivision} />

                  <div className="mt-6">
                    <span className="text-xs font-semibold text-[#2563EB]">
                      Divisi {activeDivision.shortName}
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-semibold text-[#0F2B5B]">
                      {activeDivision.name}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-500 sm:text-base">
                      {activeDivision.description}
                    </p>
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-6 border-t border-slate-100 pt-6 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold text-[#0F2B5B]">
                        Output Utama
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {activeDivision.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-slate-600"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#F46F15]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-[#0F2B5B]">
                        Perangkat &amp; Workflow
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {activeDivision.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-full bg-[#F6F8FC] px-3.5 py-1.5 text-xs font-medium text-[#0F2B5B]"
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
      </div>
    </section>
  );
}
