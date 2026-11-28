"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  DIVISION_FILTERS,
  MEMBERS,
  type DivisionFilter,
  type Member,
} from "@/data/kepengurusan";
import { cn } from "@/lib/utils";
import { MemberCard } from "./MemberCard";

function PembinaCard({ member }: { member: Member }) {
  return (
    <article className="group flex flex-col gap-6 rounded-[28px] border border-[#0F2B5B]/[0.08] bg-[#F6F8FC] p-5 shadow-luxury transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:bg-white hover:shadow-luxury-hover sm:flex-row sm:items-center sm:p-6">
      {/* Proportional 3:4 Studio Portrait Frame */}
      <div className="relative aspect-[3/4] w-full shrink-0 overflow-hidden rounded-[20px] border border-[#0F2B5B]/15 bg-gradient-to-br from-[#0F2B5B] via-[#13326B] to-[#1A438A] sm:w-44">
        {member.photoUrl ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={member.photoUrl}
            alt={member.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
        ) : (
          <div className="editorial-grain relative flex h-full w-full flex-col justify-between p-4">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-white/12 px-2.5 py-0.5 text-[10px] font-semibold text-orange-300 backdrop-blur-sm">
                Pembina
              </span>
              <span className="h-2 w-2 rounded-full bg-[#F46F15]" />
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none select-none font-serif text-[5.5rem] italic leading-none tracking-tight text-white/[0.12] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
            >
              {member.initials}
            </div>

            <div className="flex items-center justify-between">
              <span className="text-[11px] font-medium text-blue-200/80">
                Sinlui TV
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 font-display text-xs font-semibold text-white">
                {member.initials}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Editorial Bio & Quote */}
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold text-[#2563EB]">
              {member.role}
            </span>
            <span className="text-xs font-medium text-slate-400">
              {member.kelas}
            </span>
          </div>

          <h3 className="mt-3 font-display text-xl font-semibold text-[#0F2B5B] sm:text-2xl">
            {member.name}
          </h3>
          <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
            {member.specialty}
          </p>
        </div>

        {member.quote ? (
          <blockquote className="mt-4 border-t border-[#0F2B5B]/[0.07] pt-4 font-serif text-base italic leading-relaxed text-[#0F2B5B]/90 sm:text-[17px]">
            &ldquo;{member.quote}&rdquo;
          </blockquote>
        ) : null}
      </div>
    </article>
  );
}

export function OrgDirectory({
  members = MEMBERS,
}: {
  members?: Member[];
}) {
  const [activeFilter, setActiveFilter] = useState<DivisionFilter>("Semua");
  const shouldReduceMotion = useReducedMotion();

  const countForFilter = (filter: DivisionFilter) => {
    if (filter === "Semua") return members.length;
    return members.filter((m) => m.division === filter).length;
  };

  const pembinaList = members.filter((m) => m.tier === "pembina");
  const bphLeads = members.filter((m) => m.tier === "bph-lead");
  const bphCore = members.filter((m) => m.tier === "bph");

  const divisionMembers =
    activeFilter === "Semua"
      ? members.filter(
          (m) => m.division !== "BPH" && m.division !== "Pembina"
        )
      : activeFilter === "BPH" || activeFilter === "Pembina"
        ? []
        : members.filter((m) => m.division === activeFilter);

  const showPembinaSection =
    (activeFilter === "Semua" || activeFilter === "Pembina") &&
    pembinaList.length > 0;
  const showBphSection =
    (activeFilter === "Semua" || activeFilter === "BPH") &&
    (bphLeads.length > 0 || bphCore.length > 0);
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

        {/* Empty State */}
        {members.length === 0 ? (
          <div className="mt-12 rounded-[28px] border border-[#0F2B5B]/[0.08] bg-[#F6F8FC] p-10 text-center">
            <h2 className="font-display text-2xl font-semibold text-[#0F2B5B]">
              Belum ada data kepengurusan aktif
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
              Tambahkan nama Guru Pembina, BPH, atau anggota divisi melalui
              Supabase Table Editor maupun panel admin.
            </p>
            <Link
              href="/admin/kepengurusan"
              className="mt-6 inline-flex items-center rounded-full bg-[#0F2B5B] px-6 py-3 text-xs font-semibold text-white transition-colors hover:bg-[#F46F15]"
            >
              Kelola Data Kepengurusan
            </Link>
          </div>
        ) : null}

        {/* Hierarchy Sections */}
        <AnimatePresence mode="popLayout">
          {/* Section 0: Guru Pembina */}
          {showPembinaSection ? (
            <motion.div
              key="pembina-section"
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
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
                    Dewan Pembina
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-semibold text-[#0F2B5B] sm:text-3xl">
                    Guru Pembina Sinlui TV
                  </h2>
                </div>
                <span className="rounded-full bg-[#F6F8FC] px-3.5 py-1 text-xs font-medium text-slate-500">
                  {pembinaList.length} Guru Pembina
                </span>
              </div>

              <div
                className={cn(
                  "grid grid-cols-1 gap-6",
                  pembinaList.length === 1 ? "max-w-3xl" : "lg:grid-cols-2"
                )}
              >
                {pembinaList.map((member) => (
                  <PembinaCard key={member.id} member={member} />
                ))}
              </div>
            </motion.div>
          ) : null}

          {/* Section 1: BPH */}
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
              className={cn(showPembinaSection ? "mt-20" : "mt-12")}
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
                  {bphLeads.length + bphCore.length} Pengurus Inti
                </span>
              </div>

              {/* Ketua & Wakil Ketua Prominent Spread */}
              {bphLeads.length > 0 ? (
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
              ) : null}

              {/* Sekretaris & Bendahara Row */}
              {bphCore.length > 0 ? (
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                  {bphCore.map((member, idx) => (
                    <MemberCard
                      key={member.id}
                      member={member}
                      codeLabel={`BPH · 0${bphLeads.length + idx + 1}`}
                    />
                  ))}
                </div>
              ) : null}
            </motion.div>
          ) : null}

          {/* Section 2: Koordinator & Anggota Divisi */}
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
              className={cn(
                showPembinaSection || showBphSection ? "mt-20" : "mt-12"
              )}
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
