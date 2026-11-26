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
    <section className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Floating Pill Filter Bar */}
        <div className="flex justify-start">
          <div
            role="tablist"
            aria-label="Filter divisi kepengurusan"
            className="inline-flex flex-wrap gap-1.5 rounded-3xl border border-[#0F2B5B]/[0.06] bg-[#F6F8FC] p-1.5 sm:rounded-full"
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
                    "relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-colors duration-300 sm:text-sm",
                    isActive
                      ? "text-white"
                      : "text-slate-500 hover:text-[#0F2B5B]"
                  )}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="activeFilterTab"
                      transition={
                        shouldReduceMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 360, damping: 32 }
                      }
                      className="absolute inset-0 rounded-full bg-[#F46F15] shadow-sm shadow-orange-500/20"
                    />
                  ) : null}

                  <span className="relative z-10">{filter}</span>
                  <span
                    className={cn(
                      "relative z-10 rounded-full px-1.5 py-0.5 text-[10px]",
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-white text-slate-500"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Hierarchy Section 1: BPH */}
        <AnimatePresence mode="popLayout">
          {showBphSection ? (
            <motion.div
              key="bph-section"
              layout={!shouldReduceMotion}
              initial={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12"
            >
              <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F46F15]">
                    Pimpinan Inti
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-semibold text-[#0F2B5B] sm:text-3xl">
                    Badan Pengurus Harian (BPH)
                  </h2>
                </div>
                <span className="rounded-full bg-[#F6F8FC] px-3.5 py-1 text-xs font-medium text-slate-500">
                  6 Pengurus Inti
                </span>
              </div>

              {/* Ketua & Wakil Ketua Prominent Spread */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {bphLeads.map((member, idx) => (
                  <MemberCard
                    key={member.id}
                    member={member}
                    featured
                    codeLabel={`BPH · 0${idx + 1}`}
                  />
                ))}
              </div>

              {/* Sekretaris & Bendahara Row */}
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                {bphCore.map((member, idx) => (
                  <MemberCard
                    key={member.id}
                    member={member}
                    codeLabel={`BPH · 0${idx + 3}`}
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
                shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className={cn(showBphSection ? "mt-20" : "mt-12")}
            >
              <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
                    Personel Lapangan &amp; Studio
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-semibold text-[#0F2B5B] sm:text-3xl">
                    {activeFilter === "Semua"
                      ? "Koordinator & Anggota Divisi"
                      : `Divisi ${activeFilter}`}
                  </h2>
                </div>
                <span className="rounded-full bg-[#F6F8FC] px-3.5 py-1 text-xs font-medium text-slate-500">
                  {divisionMembers.length} Personel
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
