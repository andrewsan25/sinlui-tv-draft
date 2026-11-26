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
    codeLabel ?? (isBph ? "BPH Inti" : member.division);

  return (
    <motion.article
      layout={!shouldReduceMotion}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col"
    >
      {/* Sculpted 3:4 Luxury Studio Portrait Frame */}
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-[24px] border transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1 group-hover:shadow-luxury-hover",
          featured ? "aspect-[4/4.2]" : "aspect-[3/4]",
          isLead
            ? "border-[#0F2B5B]/20 bg-gradient-to-br from-[#0F2B5B] via-[#13326B] to-[#1A438A] shadow-luxury"
            : isKoordinator
              ? "border-blue-200/70 bg-gradient-to-br from-[#EEF3FC] to-[#F7F9FD] shadow-sm group-hover:border-[#2563EB]/45"
              : "border-[#0F2B5B]/[0.07] bg-gradient-to-br from-[#F4F6FB] to-[#FAFBFD] shadow-sm group-hover:border-[#F46F15]/45"
        )}
      >
        {member.photoUrl ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={member.photoUrl}
            alt={member.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
        ) : (
          <div className="editorial-grain relative flex h-full w-full flex-col justify-between p-5">
            {/* Top Subtle Studio Pill */}
            <div className="relative z-10 flex items-center justify-between">
              <span
                className={cn(
                  "rounded-full px-3 py-1 text-[10px] font-semibold",
                  isLead
                    ? "bg-white/12 text-orange-300 backdrop-blur-sm"
                    : "bg-white/90 text-[#0F2B5B] shadow-xs"
                )}
              >
                {plateCode}
              </span>
              <span
                className={cn(
                  "h-2 w-2 rounded-full",
                  isLead
                    ? "bg-[#F46F15]"
                    : isKoordinator
                      ? "bg-[#2563EB]"
                      : "bg-slate-300 transition-colors group-hover:bg-[#F46F15]"
                )}
              />
            </div>

            {/* Graceful Instrument Serif Watermark Monogram */}
            <div
              aria-hidden="true"
              className={cn(
                "pointer-events-none select-none font-serif text-[7rem] italic leading-none tracking-tight transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 sm:text-[8rem]",
                isLead
                  ? "text-white/[0.11]"
                  : isKoordinator
                    ? "text-[#2563EB]/[0.12]"
                    : "text-[#0F2B5B]/[0.08]"
              )}
            >
              {member.initials}
            </div>

            {/* Bottom Signature Initial */}
            <div className="relative z-10 flex items-end justify-between">
              <span
                className={cn(
                  "text-xs font-medium",
                  isLead ? "text-blue-200/80" : "text-slate-400"
                )}
              >
                {member.kelas}
              </span>
              <span
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full font-display text-xs font-semibold",
                  isLead
                    ? "bg-white/15 text-white"
                    : "bg-white text-[#0F2B5B] shadow-xs"
                )}
              >
                {member.initials}
              </span>
            </div>
          </div>
        )}

        {/* Sliding Floating Glass Hover Pill */}
        {member.instagram || member.portfolio ? (
          <div className="pointer-events-none absolute inset-x-3.5 bottom-3.5 flex translate-y-2 items-center justify-between rounded-full border border-white/70 bg-white/92 px-4 py-2 opacity-0 shadow-lg backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
            <span className="text-[11px] font-medium text-slate-400">
              Profil
            </span>
            <div className="flex items-center gap-3 text-xs font-semibold text-[#0F2B5B]">
              {member.instagram ? (
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-0.5 hover:text-[#F46F15]"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ) : null}
              {member.portfolio ? (
                <a
                  href={member.portfolio}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-0.5 hover:text-[#2563EB]"
                >
                  <span>Karya</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>

      {/* Clean Typography Beneath Frame */}
      <div className="mt-4 px-1">
        <div className="flex items-center justify-between gap-2">
          <span
            className={cn(
              "rounded-full px-2.5 py-0.5 text-[11px] font-semibold",
              isLead
                ? "bg-orange-50 text-[#F46F15]"
                : isKoordinator || isBph
                  ? "bg-blue-50 text-[#2563EB]"
                  : "bg-[#F6F8FC] text-slate-600"
            )}
          >
            {member.role}
          </span>
          <span className="text-xs font-medium text-slate-400">
            {member.kelas}
          </span>
        </div>

        <h3 className="mt-2.5 font-display text-lg font-semibold text-[#0F2B5B]">
          {member.name}
        </h3>
        <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
          {member.specialty}
        </p>
      </div>
    </motion.article>
  );
}
