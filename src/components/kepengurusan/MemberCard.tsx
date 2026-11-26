"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Member } from "@/data/kepengurusan";
import { cn } from "@/lib/utils";

interface MemberCardProps {
  member: Member;
  featured?: boolean;
  codeLabel?: string;
}

export function MemberCard({
  member,
  featured = false,
  codeLabel,
}: MemberCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const isLead = member.tier === "bph-lead";
  const isBph = member.tier === "bph" || isLead;
  const isKoordinator = member.tier === "koordinator";

  const plateCode =
    codeLabel ??
    (isBph
      ? "BPH · 26/27"
      : `${member.division.toUpperCase().slice(0, 5)} · 26/27`);

  return (
    <motion.article
      layout={!shouldReduceMotion}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col"
    >
      {/* 3:4 Editorial Portrait Frame */}
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-lg border transition-colors duration-300",
          featured ? "aspect-[4/4.3]" : "aspect-[3/4]",
          isLead
            ? "border-[#0F2B5B] bg-[#0F2B5B] group-hover:border-[#FF5A00]"
            : isKoordinator
              ? "border-blue-200/90 bg-[#EFF4FB] group-hover:border-[#2563EB]"
              : "border-slate-200 bg-[#F4F6FA] group-hover:border-[#FF5A00]"
        )}
      >
        {member.photoUrl ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={member.photoUrl}
            alt={member.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="editorial-grain relative flex h-full w-full flex-col justify-between p-4 sm:p-5">
            {/* Optical Crop Hairlines */}
            <span
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t transition-colors",
                isLead
                  ? "border-white/30 group-hover:border-[#FF5A00]"
                  : "border-[#0F2B5B]/20 group-hover:border-[#FF5A00]"
              )}
            />
            <span
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t transition-colors",
                isLead
                  ? "border-white/30 group-hover:border-[#FF5A00]"
                  : "border-[#0F2B5B]/20 group-hover:border-[#FF5A00]"
              )}
            />

            {/* Top Studio Plate Index */}
            <div className="relative z-10 flex items-center justify-between pl-1.5 pt-1 font-mono text-[10px] font-semibold uppercase tracking-[0.14em]">
              <span className={isLead ? "text-orange-300" : "text-slate-400"}>
                {plateCode}
              </span>
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  isLead
                    ? "bg-[#FF5A00]"
                    : isKoordinator
                      ? "bg-[#2563EB]"
                      : "bg-slate-300 group-hover:bg-[#FF5A00]"
                )}
              />
            </div>

            {/* Cropped Monumental Architectural Typography Bleed */}
            <div
              aria-hidden="true"
              className={cn(
                "pointer-events-none select-none font-display text-[6.5rem] font-bold leading-none tracking-[-0.06em] transition-transform duration-500 group-hover:scale-[1.04] sm:text-[7.5rem]",
                isLead
                  ? "text-white/[0.08]"
                  : isKoordinator
                    ? "text-[#2563EB]/[0.1]"
                    : "text-[#0F2B5B]/[0.07]"
              )}
            >
              {member.initials}
            </div>

            {/* Minimal Bottom Signature Stamp */}
            <div className="relative z-10 flex items-end justify-between">
              <span
                className={cn(
                  "font-mono text-[10px] uppercase tracking-[0.16em]",
                  isLead ? "text-blue-200/80" : "text-slate-400"
                )}
              >
                {member.kelas}
              </span>
              <span
                className={cn(
                  "font-display text-sm font-bold tracking-tight",
                  isLead ? "text-white" : "text-[#0F2B5B]"
                )}
              >
                {member.initials}
              </span>
            </div>
          </div>
        )}

        {/* Sliding Hover Link Strip */}
        {member.instagram || member.portfolio ? (
          <div className="pointer-events-none absolute inset-x-3 bottom-3 flex items-center justify-between rounded-md border border-slate-200/90 bg-white/95 px-3 py-2 opacity-0 shadow-sm backdrop-blur-md transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
              TAUTAN
            </span>
            <div className="flex items-center gap-3 font-mono text-[11px] font-semibold text-[#0F2B5B]">
              {member.instagram ? (
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-0.5 hover:text-[#FF5A00]"
                >
                  <span>IG</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              ) : null}
              {member.portfolio ? (
                <a
                  href={member.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-0.5 hover:text-[#2563EB]"
                >
                  <span>REEL</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>

      {/* Borderless Editorial Metadata Beneath Frame */}
      <div className="mt-3.5">
        <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em]">
          <span
            className={cn(
              isLead
                ? "text-[#FF5A00]"
                : isKoordinator || isBph
                  ? "text-[#2563EB]"
                  : "text-slate-500"
            )}
          >
            {member.role}
          </span>
          <span className="text-slate-400">{member.kelas}</span>
        </div>

        <h3 className="mt-2.5 font-display text-lg font-bold tracking-tight text-[#0F2B5B]">
          {member.name}
        </h3>
        <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
          {member.specialty}
        </p>
      </div>
    </motion.article>
  );
}
