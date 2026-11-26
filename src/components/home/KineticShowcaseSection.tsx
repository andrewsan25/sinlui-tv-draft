"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { ArrowUpRight, Camera, Clapperboard, Quote, Radio } from "lucide-react";
import {
  BTS_MOMENTS,
  COVERAGE_HIGHLIGHTS,
  TESTIMONIALS,
  type BtsMoment,
  type CoverageHighlight,
  type TestimonialItem,
} from "@/data/highlights";
import { cn } from "@/lib/utils";

function HighlightVisualArtwork({
  variant,
  accent,
}: {
  variant: CoverageHighlight["visualVariant"];
  accent: CoverageHighlight["accent"];
}) {
  const isOrange = accent === "orange";

  return (
    <div
      className={cn(
        "relative flex h-36 w-full items-end justify-between overflow-hidden rounded-xl border p-4",
        isOrange
          ? "border-orange-200/70 bg-gradient-to-br from-orange-50 via-white to-blue-50"
          : "border-blue-200/70 bg-gradient-to-br from-blue-50 via-white to-slate-50"
      )}
    >
      {/* Subtle geometric studio graphic */}
      <svg
        viewBox="0 0 280 110"
        fill="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-75"
      >
        <circle
          cx="230"
          cy="28"
          r="54"
          stroke={isOrange ? "#F97316" : "#2563EB"}
          strokeOpacity="0.16"
          strokeWidth="1.5"
        />
        <circle
          cx="230"
          cy="28"
          r="32"
          stroke="#0F2B5B"
          strokeOpacity="0.12"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        {variant === "broadcast" || variant === "stage" ? (
          <path
            d="M16 78 Q 62 36, 108 72 T 204 54 T 268 68"
            stroke={isOrange ? "#F97316" : "#2563EB"}
            strokeOpacity="0.35"
            strokeWidth="2"
          />
        ) : (
          <path
            d="M20 82 L 74 44 L 122 68 L 180 28 L 260 76"
            stroke={isOrange ? "#F97316" : "#2563EB"}
            strokeOpacity="0.28"
            strokeWidth="2"
          />
        )}
      </svg>

      {/* Viewfinder Corners */}
      <span className="relative z-10 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/90 px-2.5 py-1 font-mono text-[10px] font-semibold text-[#0F2B5B] shadow-xs">
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full",
            isOrange ? "bg-[#F97316]" : "bg-[#2563EB]"
          )}
        />
        REC ARCHIVE
      </span>

      <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white/90 text-[#0F2B5B] shadow-xs">
        {variant === "broadcast" ? (
          <Radio className="h-4 w-4 text-[#F97316]" />
        ) : variant === "arena" ? (
          <Camera className="h-4 w-4 text-[#2563EB]" />
        ) : (
          <Clapperboard className="h-4 w-4 text-[#0F2B5B]" />
        )}
      </span>
    </div>
  );
}

function HighlightCard({ item }: { item: CoverageHighlight }) {
  const isOrange = item.accent === "orange";

  return (
    <article
      className={cn(
        "group relative flex w-[320px] shrink-0 flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 sm:w-[370px] sm:p-5",
        "hover:-translate-y-1.5 hover:shadow-lg",
        isOrange
          ? "hover:border-[#F97316] hover:shadow-orange-500/10"
          : "hover:border-[#2563EB] hover:shadow-blue-500/10"
      )}
    >
      <div>
        <HighlightVisualArtwork
          variant={item.visualVariant}
          accent={item.accent}
        />

        <div className="mt-4 flex items-center justify-between gap-2">
          <span
            className={cn(
              "rounded-full px-2.5 py-0.5 text-[11px] font-semibold",
              isOrange
                ? "bg-orange-50 text-[#F97316]"
                : "bg-blue-50 text-[#2563EB]"
            )}
          >
            {item.category}
          </span>
          <span className="font-mono text-[11px] text-slate-400">
            {item.year} · {item.durationOrCount}
          </span>
        </div>

        <h3 className="mt-2.5 font-display text-lg font-bold leading-snug text-[#0F2B5B]">
          {item.title}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
          {item.summary}
        </p>
      </div>

      {/* Interactive Hover Detail Strip */}
      <div className="mt-4 border-t border-slate-100 pt-3">
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-[11px] font-medium text-slate-500">
            {item.specs}
          </span>
          <ArrowUpRight
            className={cn(
              "h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
              isOrange
                ? "text-slate-400 group-hover:text-[#F97316]"
                : "text-slate-400 group-hover:text-[#2563EB]"
            )}
          />
        </div>
        <p className="mt-1.5 max-h-0 overflow-hidden text-[11px] text-[#0F2B5B] opacity-0 transition-all duration-300 group-hover:max-h-12 group-hover:opacity-100">
          {item.detailNote}
        </p>
      </div>
    </article>
  );
}

function TestimonialCard({ item }: { item: TestimonialItem }) {
  const isOrange = item.accent === "orange";

  return (
    <article
      className={cn(
        "group relative flex w-[310px] shrink-0 flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 sm:w-[350px] sm:p-6",
        "hover:-translate-y-1.5 hover:shadow-lg",
        isOrange
          ? "hover:border-[#F97316] hover:shadow-orange-500/10"
          : "hover:border-[#2563EB] hover:shadow-blue-500/10"
      )}
    >
      <div>
        <div className="flex items-center justify-between">
          <Quote
            className={cn(
              "h-6 w-6",
              isOrange ? "text-[#F97316]" : "text-[#2563EB]"
            )}
          />
          <span
            className={cn(
              "rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide transition-colors",
              isOrange
                ? "border-orange-200 bg-orange-50/70 text-[#F97316]"
                : "border-blue-200 bg-blue-50/70 text-[#2563EB]"
            )}
          >
            {item.event}
          </span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-slate-700">
          &ldquo;{item.quote}&rdquo;
        </p>
      </div>

      <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
        <div
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-xs font-bold text-white",
            isOrange ? "bg-[#F97316]" : "bg-[#0F2B5B]"
          )}
        >
          {item.initials}
        </div>
        <div className="min-w-0">
          <p className="truncate font-display text-sm font-bold text-[#0F2B5B]">
            {item.author}
          </p>
          <p className="truncate text-xs text-slate-500">{item.role}</p>
        </div>
      </div>
    </article>
  );
}

function BtsCard({ item }: { item: BtsMoment }) {
  const isOrange = item.accent === "orange";

  return (
    <article
      className={cn(
        "group relative flex w-[285px] shrink-0 flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/80 p-4 transition-all duration-300 hover:bg-white sm:w-[320px] sm:p-5",
        "hover:-translate-y-1.5 hover:shadow-lg",
        isOrange
          ? "hover:border-[#F97316] hover:shadow-orange-500/10"
          : "hover:border-[#2563EB] hover:shadow-blue-500/10"
      )}
    >
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-[11px] font-semibold text-slate-400">
            {item.timecode}
          </span>
          <span
            className={cn(
              "rounded-md px-2 py-0.5 text-[11px] font-semibold",
              isOrange
                ? "bg-orange-100/70 text-[#F97316]"
                : "bg-blue-100/70 text-[#2563EB]"
            )}
          >
            {item.division}
          </span>
        </div>

        <h3 className="mt-3 font-display text-base font-bold text-[#0F2B5B]">
          {item.title}
        </h3>
        <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
          {item.caption}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-slate-200/70 pt-3 font-mono text-[11px]">
        <span className="text-[#0F2B5B]">{item.gearTag}</span>
        <span
          className={cn(
            "opacity-0 transition-opacity duration-200 group-hover:opacity-100",
            isOrange ? "text-[#F97316]" : "text-[#2563EB]"
          )}
        >
          BTS LOG
        </span>
      </div>
    </article>
  );
}

export function KineticShowcaseSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollY, scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
    mass: 0.35,
  });

  const scrollVelocity = useVelocity(scrollY);
  const rawSkew = useTransform(scrollVelocity, [-2400, 0, 2400], [-2, 0, 2]);
  const smoothSkew = useSpring(rawSkew, { stiffness: 180, damping: 28 });

  const row1X = useTransform(smoothProgress, [0, 1], ["4%", "-24%"]);
  const row2X = useTransform(smoothProgress, [0, 1], ["-22%", "4%"]);
  const row3X = useTransform(smoothProgress, [0, 1], ["8%", "-28%"]);

  return (
    <section
      ref={sectionRef}
      aria-label="Highlight Liputan dan Testimoni"
      className="relative overflow-x-clip border-b border-slate-200/80 bg-white py-20 sm:py-24"
    >
      {/* Top Editorial Header + Scroll Progress Track */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/70 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
              <span>Showcase Karya &amp; Kata Mereka</span>
            </div>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#0F2B5B] sm:text-4xl">
              Bergerak Mengikuti Ritme Momen Sekolah
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Gulir halaman untuk menelusuri arsip highlight liputan, testimoni
              panitia serta guru, dan catatan di balik layar produksi Sinlui TV.
            </p>
          </div>

          <div className="w-full max-w-xs">
            <div className="flex items-center justify-between font-mono text-[11px] text-slate-500">
              <span>SCROLL TIMELINE</span>
              <span className="text-[#F97316]">LIVE SCRUB</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
              <motion.div
                style={{
                  scaleX: shouldReduceMotion ? 1 : smoothProgress,
                }}
                className="h-full origin-left rounded-full bg-gradient-to-r from-[#0F2B5B] via-[#2563EB] to-[#F97316]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Kinetic Multi-Row Horizontal Tracks */}
      <div className="mt-12 space-y-6 sm:space-y-8">
        {/* Row 1: Highlight Liputan (Right -> Left) */}
        <div>
          <div className="mx-auto mb-3 flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">
              01 / Highlight Liputan &amp; Karya
            </span>
            <span className="hidden font-mono text-[11px] text-slate-400 sm:inline">
              ← Bergerak ke kiri saat scroll
            </span>
          </div>

          {shouldReduceMotion ? (
            <div className="flex snap-x gap-4 overflow-x-auto px-4 pb-2 sm:px-6 lg:px-8">
              {COVERAGE_HIGHLIGHTS.map((item) => (
                <HighlightCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <motion.div
              style={{ x: row1X, skewX: smoothSkew }}
              className="will-change-transform flex gap-5 px-4 sm:px-8"
            >
              {COVERAGE_HIGHLIGHTS.map((item) => (
                <HighlightCard key={item.id} item={item} />
              ))}
            </motion.div>
          )}
        </div>

        {/* Row 2: Testimoni (Left -> Right, opposite direction) */}
        <div>
          <div className="mx-auto mb-3 flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-[#2563EB]">
              02 / Kata Mereka — Panitia, Pembina &amp; Guru
            </span>
            <span className="hidden font-mono text-[11px] text-slate-400 sm:inline">
              Bergerak berlawanan arah →
            </span>
          </div>

          {shouldReduceMotion ? (
            <div className="flex snap-x gap-4 overflow-x-auto px-4 pb-2 sm:px-6 lg:px-8">
              {TESTIMONIALS.map((item) => (
                <TestimonialCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <motion.div
              style={{ x: row2X, skewX: smoothSkew }}
              className="will-change-transform flex gap-5 px-4 sm:px-8"
            >
              {TESTIMONIALS.map((item) => (
                <TestimonialCard key={item.id} item={item} />
              ))}
            </motion.div>
          )}
        </div>

        {/* Row 3: Behind The Scenes (Right -> Left, faster parallax) */}
        <div>
          <div className="mx-auto mb-3 flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-[#F97316]">
              03 / Momen Balik Layar (BTS Log)
            </span>
            <span className="hidden font-mono text-[11px] text-slate-400 sm:inline">
              Arahkan kursor untuk sorotan detail
            </span>
          </div>

          {shouldReduceMotion ? (
            <div className="flex snap-x gap-4 overflow-x-auto px-4 pb-2 sm:px-6 lg:px-8">
              {BTS_MOMENTS.map((item) => (
                <BtsCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <motion.div
              style={{ x: row3X, skewX: smoothSkew }}
              className="will-change-transform flex gap-5 px-4 sm:px-8"
            >
              {BTS_MOMENTS.map((item) => (
                <BtsCard key={item.id} item={item} />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
