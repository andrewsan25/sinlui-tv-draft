"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Instagram } from "lucide-react";
import type { Member } from "@/data/kepengurusan";
import { cn } from "@/lib/utils";

interface MemberCardProps {
  member: Member;
  featured?: boolean;
}

export function MemberCard({ member, featured = false }: MemberCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const isLead = member.tier === "bph-lead";
  const isBph = member.tier === "bph" || isLead;
  const isKoordinator = member.tier === "koordinator";

  return (
    <motion.article
      layout={!shouldReduceMotion}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        isLead
          ? "border-[#0F2B5B]/20 shadow-md shadow-[#0F2B5B]/5 hover:border-[#F97316] hover:shadow-orange-500/10"
          : isBph
            ? "border-blue-200/90 hover:border-[#2563EB] hover:shadow-blue-500/10"
            : "border-slate-200 hover:border-[#F97316] hover:shadow-orange-500/10"
      )}
    >
      {/* Top accent bar for BPH hierarchy */}
      {isBph ? (
        <div
          aria-hidden="true"
          className={cn(
            "h-1.5 w-full",
            isLead
              ? "bg-gradient-to-r from-[#0F2B5B] via-[#2563EB] to-[#F97316]"
              : "bg-[#2563EB]"
          )}
        />
      ) : null}

      {/* 3:4 Portrait Frame */}
      <div
        className={cn(
          "relative w-full overflow-hidden bg-slate-100",
          featured ? "aspect-[4/4.6] sm:aspect-[3/3.6]" : "aspect-[3/4]"
        )}
      >
        {member.photoUrl ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={member.photoUrl}
            alt={member.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className={cn(
              "relative flex h-full w-full flex-col items-center justify-center p-6",
              isLead
                ? "bg-gradient-to-br from-slate-50 via-blue-50/70 to-orange-50/70"
                : isKoordinator
                  ? "bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-100"
                  : "bg-gradient-to-br from-slate-50 via-white to-slate-100"
            )}
          >
            {/* Viewfinder corner reticles */}
            <span
              aria-hidden="true"
              className="absolute left-3.5 top-3.5 h-3.5 w-3.5 border-l-2 border-t-2 border-[#0F2B5B]/25 transition-colors group-hover:border-[#F97316]"
            />
            <span
              aria-hidden="true"
              className="absolute right-3.5 top-3.5 h-3.5 w-3.5 border-r-2 border-t-2 border-[#0F2B5B]/25 transition-colors group-hover:border-[#F97316]"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-3.5 left-3.5 h-3.5 w-3.5 border-b-2 border-l-2 border-[#0F2B5B]/25 transition-colors group-hover:border-[#F97316]"
            />
            <span
              aria-hidden="true"
              className="absolute bottom-3.5 right-3.5 h-3.5 w-3.5 border-b-2 border-r-2 border-[#0F2B5B]/25 transition-colors group-hover:border-[#F97316]"
            />

            {/* Top division code */}
            <span className="absolute left-5 top-5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              {member.division}
            </span>

            {/* Crisp Studio Monogram */}
            <div
              className={cn(
                "flex items-center justify-center rounded-full border-2 font-display font-extrabold shadow-sm transition-transform duration-300 group-hover:scale-105",
                featured ? "h-24 w-24 text-2xl" : "h-20 w-20 text-xl",
                isLead
                  ? "border-orange-200 bg-[#0F2B5B] text-white"
                  : isKoordinator
                    ? "border-blue-200 bg-[#2563EB] text-white"
                    : "border-slate-200 bg-white text-[#0F2B5B]"
              )}
            >
              {member.initials}
            </div>

            <span className="mt-3 font-mono text-[10px] uppercase tracking-widest text-slate-400">
              FOTO PROFIL 3:4
            </span>
          </div>
        )}

        {/* Hover Social Links Glass Strip */}
        {member.instagram || member.portfolio ? (
          <div className="pointer-events-none absolute inset-x-3 bottom-3 flex items-center justify-between rounded-2xl border border-white/70 bg-white/90 px-3 py-2 opacity-0 shadow-md backdrop-blur-md transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#0F2B5B]">
              Tautan Kru
            </span>
            <div className="flex items-center gap-1.5">
              {member.instagram ? (
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Instagram ${member.name}`}
                  className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#0F2B5B] transition-colors hover:border-[#F97316] hover:text-[#F97316]"
                >
                  <Instagram className="h-3.5 w-3.5" />
                </a>
              ) : null}
              {member.portfolio ? (
                <a
                  href={member.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Portofolio ${member.name}`}
                  className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#0F2B5B] transition-colors hover:border-[#2563EB] hover:text-[#2563EB]"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>

      {/* Card Metadata */}
      <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span
              className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold",
                isLead
                  ? "bg-[#F97316] text-white"
                  : isBph
                    ? "bg-blue-50 text-[#2563EB]"
                    : isKoordinator
                      ? "bg-[#2563EB] text-white"
                      : "bg-slate-100 text-slate-700"
              )}
            >
              {member.role}
            </span>
            <span className="font-mono text-[11px] font-medium text-slate-400">
              {member.kelas}
            </span>
          </div>

          <h3 className="mt-2.5 font-display text-lg font-bold text-[#0F2B5B]">
            {member.name}
          </h3>
        </div>

        <p className="mt-2 border-t border-slate-100 pt-2.5 text-xs leading-relaxed text-slate-500">
          {member.specialty}
        </p>
      </div>
    </motion.article>
  );
}
