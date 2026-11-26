"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Users } from "lucide-react";
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
    <section className="bg-[#F8FAFC] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Interactive Filter Tabs */}
        <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-xs">
          <div
            role="tablist"
            aria-label="Filter divisi kepengurusan"
            className="flex flex-wrap gap-1.5"
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
                    "relative inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-semibold transition-colors sm:text-sm",
                    isActive
                      ? "text-white"
                      : "text-slate-600 hover:bg-slate-50 hover:text-[#0F2B5B]"
                  )}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="activeFilterTab"
                      transition={
                        shouldReduceMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 32 }
                      }
                      className="absolute inset-0 rounded-xl bg-[#F97316] shadow-sm shadow-orange-500/20"
                    />
                  ) : null}

                  <span className="relative z-10">{filter}</span>
                  <span
                    className={cn(
                      "relative z-10 rounded-full px-1.5 py-0.5 font-mono text-[10px]",
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-500"
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
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="mt-10"
            >
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0F2B5B] text-white">
                    <ShieldCheck className="h-4 w-4 text-[#F97316]" />
                  </span>
                  <div>
                    <h2 className="font-display text-xl font-extrabold text-[#0F2B5B] sm:text-2xl">
                      Badan Pengurus Harian (BPH)
                    </h2>
                    <p className="text-xs text-slate-500">
                      Pimpinan inti pengarah kebijakan, administrasi, dan manajemen produksi.
                    </p>
                  </div>
                </div>
                <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 font-mono text-[11px] font-semibold text-[#F97316]">
                  6 PENGURUS INTI
                </span>
              </div>

              {/* Ketua & Wakil Ketua Prominent Row */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {bphLeads.map((member) => (
                  <MemberCard key={member.id} member={member} featured />
                ))}
              </div>

              {/* Sekretaris & Bendahara Row */}
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {bphCore.map((member) => (
                  <MemberCard key={member.id} member={member} />
                ))}
              </div>
            </motion.div>
          ) : null}

          {/* Hierarchy Section 2: Koordinator & Anggota Divisi */}
          {showDivisionSection ? (
            <motion.div
              key={`divisi-section-${activeFilter}`}
              layout={!shouldReduceMotion}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className={cn(showBphSection ? "mt-14" : "mt-10")}
            >
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2563EB] text-white">
                    <Users className="h-4 w-4" />
                  </span>
                  <div>
                    <h2 className="font-display text-xl font-extrabold text-[#0F2B5B] sm:text-2xl">
                      {activeFilter === "Semua"
                        ? "Koordinator & Anggota Divisi"
                        : `Divisi ${activeFilter}`}
                    </h2>
                    <p className="text-xs text-slate-500">
                      Koordinator pelaksana dan personel aktif di lapangan &amp; studio.
                    </p>
                  </div>
                </div>
                <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 font-mono text-[11px] font-semibold text-[#2563EB]">
                  {divisionMembers.length} PERSONEL
                </span>
              </div>

              <motion.div
                layout={!shouldReduceMotion}
                className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
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
