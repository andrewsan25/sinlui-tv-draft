"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  DIVISION_FILTERS,
  MEMBERS,
  type DivisionFilter,
} from "@/data/kepengurusan";
import { cn } from "@/lib/utils";
import { MemberCard } from "./MemberCard";

export function OrgDirectory() {
  const [activeFilter, setActiveFilter] = useState<DivisionFilter>("Semua");
  const shouldReduceMotion = useReducedMotion();

  const countForFilter = (filter: DivisionFilter) => {
    if (filter === "Semua") return MEMBERS.length;
    return MEMBERS.filter((m) => m.division === filter).length;
  };

  const bphLeads = MEMBERS.filter((m) => m.tier === "bph-lead");
  const bphCore = MEMBERS.filter((m) => m.tier === "bph");

  const divisionMembers =
    activeFilter === "Semua"
      ? MEMBERS.filter((m) => m.division !== "BPH")
      : activeFilter === "BPH"
        ? []
        : MEMBERS.filter((m) => m.division === activeFilter);

  const showBphSection = activeFilter === "Semua" || activeFilter === "BPH";
  const showDivisionSection = divisionMembers.length > 0;

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Architectural Underline Filter Tab Bar */}
        <div
          role="tablist"
          aria-label="Filter divisi kepengurusan"
          className="flex flex-wrap gap-x-7 gap-y-2 border-b border-slate-200"
        >
          {DIVISION_FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            const count = countForFilter(filter);

            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "relative inline-flex items-baseline gap-1.5 pb-3.5 text-sm font-semibold transition-colors",
                  isActive
                    ? "text-[#0F2B5B]"
                    : "text-slate-400 hover:text-[#0F2B5B]"
                )}
              >
                <span>{filter}</span>
                <sup
                  className={cn(
                    "font-mono text-[10px]",
                    isActive ? "text-[#FF5A00]" : "text-slate-400"
                  )}
                >
                  {count}
                </sup>

                {isActive ? (
                  <motion.span
                    layoutId="activeFilterTab"
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 420, damping: 34 }
                    }
                    className="absolute inset-x-0 bottom-0 h-[2px] bg-[#FF5A00]"
                  />
                ) : null}
              </button>
            );
          })}
        </div>

        {/* Hierarchy Section 1: BPH */}
        <AnimatePresence mode="popLayout">
          {showBphSection ? (
            <motion.div
              key="bph-section"
              layout={!shouldReduceMotion}
              initial={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.24 }}
              className="mt-12"
            >
              <div className="mb-8 flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-200 pb-4">
                <div>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FF5A00]">
                    01 / PIMPINAN INTI
                  </span>
                  <h2 className="mt-1 font-display text-2xl font-bold text-[#0F2B5B] sm:text-3xl">
                    Badan Pengurus Harian (BPH)
                  </h2>
                </div>
                <span className="font-mono text-xs text-slate-400">
                  06 PERSONEL INTI
                </span>
              </div>

              {/* Ketua & Wakil Ketua Prominent Spread */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {bphLeads.map((member, idx) => (
                  <MemberCard
                    key={member.id}
                    member={member}
                    featured
                    codeLabel={`BPH-0${idx + 1}`}
                  />
                ))}
              </div>

              {/* Sekretaris & Bendahara Row */}
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                {bphCore.map((member, idx) => (
                  <MemberCard
                    key={member.id}
                    member={member}
                    codeLabel={`BPH-0${idx + 3}`}
                  />
                ))}
              </div>
            </motion.div>
          ) : null}

          {/* Hierarchy Section 2: Koordinator & Anggota Divisi */}
          {showDivisionSection ? (
            <motion.div
              key={`divisi-section-${activeFilter}`}
              layout={!shouldReduceMotion}
              initial={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.24 }}
              className={cn(showBphSection ? "mt-20" : "mt-12")}
            >
              <div className="mb-8 flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-200 pb-4">
                <div>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2563EB]">
                    02 / PERSONEL LAPANGAN &amp; STUDIO
                  </span>
                  <h2 className="mt-1 font-display text-2xl font-bold text-[#0F2B5B] sm:text-3xl">
                    {activeFilter === "Semua"
                      ? "Koordinator & Anggota Divisi"
                      : `Divisi ${activeFilter}`}
                  </h2>
                </div>
                <span className="font-mono text-xs text-slate-400">
                  {String(divisionMembers.length).padStart(2, "0")} PERSONEL
                </span>
              </div>

              <motion.div
                layout={!shouldReduceMotion}
                className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              >
                <AnimatePresence mode="popLayout">
                  {divisionMembers.map((member) => (
                    <MemberCard key={member.id} member={member} />
                  ))}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}
