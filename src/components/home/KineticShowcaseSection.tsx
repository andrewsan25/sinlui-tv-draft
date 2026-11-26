"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  type MotionValue,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  BTS_MOMENTS,
  COVERAGE_HIGHLIGHTS,
  TESTIMONIALS,
  type BtsMoment,
  type CoverageHighlight,
  type TestimonialItem,
} from "@/data/highlights";
import { cn } from "@/lib/utils";

function HighlightMediaFrame({ item }: { item: CoverageHighlight }) {
  if (item.visualMode === "multiview") {
    return (
      <div className="relative grid h-48 w-full grid-cols-2 grid-rows-2 gap-0.5 overflow-hidden bg-[#0F2B5B]">
        <div className="relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-broadcast.jpg"
            alt="Kamera 1 Aula"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-1.5 top-1.5 bg-[#FF5A00] px-1.5 py-0.5 font-mono text-[9px] font-bold text-white">
            PGM · CAM 1
          </span>
        </div>
        <div className="relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/work-stage.jpg"
            alt="Kamera 2 Panggung"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-1.5 top-1.5 bg-black/60 px-1.5 py-0.5 font-mono text-[9px] text-white">
            PVW · CAM 2
          </span>
        </div>
        <div className="relative overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/work-arena.jpg"
            alt="Kamera 3 Tribun"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-1.5 top-1.5 bg-black/60 px-1.5 py-0.5 font-mono text-[9px] text-white">
            AUX · CAM 3
          </span>
        </div>
        <div className="flex flex-col justify-between bg-[#0F2B5B] p-2.5 text-white">
          <div className="flex items-center justify-between font-mono text-[9px] text-blue-200">
            <span>SWITCHER</span>
            <span className="text-[#FF5A00]">1080p60</span>
          </div>
          <div className="flex items-end gap-1">
            {[45, 75, 60, 90, 50, 80, 65, 95].map((pct, i) => (
              <span
                key={i}
                style={{ height: `${Math.round(pct * 0.28)}px` }}
                className={cn(
                  "w-1.5 rounded-xs",
                  i >= 6 ? "bg-[#FF5A00]" : "bg-[#2563EB]"
                )}
              />
            ))}
          </div>
          <span className="font-mono text-[9px] uppercase tracking-wider text-blue-100">
            AUDIO SYNC LOCKED
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.image}
        alt={item.title}
        className={cn(
          "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
          item.visualMode === "colorgrade" ? "contrast-[1.06] saturate-[1.08]" : ""
        )}
      />

      {/* Cinematic Letterbox bars for slow-mo highlight */}
      {item.visualMode === "letterbox" ? (
        <>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-3.5 bg-[#0F2B5B]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-5 items-center justify-between bg-[#0F2B5B] px-3 font-mono text-[9px] text-blue-100">
            <span>2.39:1 ANAMORPHIC</span>
            <span className="text-[#FF5A00]">120 FPS</span>
          </div>
        </>
      ) : null}

      {/* Color grade LUT reference bar */}
      {item.visualMode === "colorgrade" ? (
        <div className="pointer-events-none absolute inset-x-3 bottom-3 flex items-center justify-between rounded-sm bg-[#0F2B5B]/85 px-2.5 py-1 font-mono text-[9px] text-white backdrop-blur-sm">
          <span>REC.709 · SINLUI LUT v2</span>
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-xs bg-[#0F2B5B] ring-1 ring-white/40" />
            <span className="h-2 w-2 rounded-xs bg-[#2563EB]" />
            <span className="h-2 w-2 rounded-xs bg-[#FF5A00]" />
            <span className="h-2 w-2 rounded-xs bg-white" />
          </div>
        </div>
      ) : null}

      {/* Top Left Category Pill */}
      <span
        className={cn(
          "absolute left-3 top-3 rounded-sm px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md",
          item.accent === "orange" ? "bg-[#FF5A00]/90" : "bg-[#0F2B5B]/85"
        )}
      >
        {item.category} · {item.year}
      </span>
    </div>
  );
}

function HighlightCard({ item }: { item: CoverageHighlight }) {
  const isOrange = item.accent === "orange";

  return (
    <article
      className={cn(
        "group relative flex w-[340px] shrink-0 flex-col justify-between overflow-hidden rounded-xl border border-slate-200/90 bg-white transition-all duration-300 sm:w-[420px]",
        "hover:-translate-y-1 hover:shadow-xl",
        isOrange
          ? "hover:border-[#FF5A00] hover:shadow-[#0F2B5B]/10"
          : "hover:border-[#2563EB] hover:shadow-[#0F2B5B]/10"
      )}
    >
      <div>
        <HighlightMediaFrame item={item} />

        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between font-mono text-[11px] text-slate-400">
            <span>{item.specs}</span>
            <span className="font-semibold text-[#0F2B5B]">
              {item.durationOrCount}
            </span>
          </div>

          <h3 className="mt-2 font-display text-xl font-bold leading-snug text-[#0F2B5B]">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {item.summary}
          </p>
        </div>
      </div>

      {/* Hover Detail Reveal Footer */}
      <div className="border-t border-slate-100 px-5 py-3.5 sm:px-6">
        <div className="flex items-center justify-between text-xs">
          <span className="font-mono text-[11px] text-slate-400">
            ARSIP PRODUKSI
          </span>
          <ArrowUpRight
            className={cn(
              "h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
              isOrange
                ? "text-slate-400 group-hover:text-[#FF5A00]"
                : "text-slate-400 group-hover:text-[#2563EB]"
            )}
          />
        </div>
        <p className="max-h-0 overflow-hidden text-xs font-medium text-[#0F2B5B] opacity-0 transition-all duration-300 group-hover:mt-1.5 group-hover:max-h-14 group-hover:opacity-100">
          {item.detailNote}
        </p>
      </div>
    </article>
  );
}

function TestimonialCard({
  item,
  index,
  progress,
  reducedMotion,
}: {
  item: TestimonialItem;
  index: number;
  progress: MotionValue<number>;
  reducedMotion: boolean | null;
}) {
  const isOrange = item.accent === "orange";
  const direction = index % 2 === 0 ? 1 : -1;
  const rotate = useTransform(
    progress,
    [0, 0.5, 1],
    [1.1 * direction, 0, -1.1 * direction]
  );

  return (
    <motion.article
      style={reducedMotion ? undefined : { rotate }}
      className={cn(
        "group relative flex w-[330px] shrink-0 flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-6 transition-all duration-300 sm:w-[400px] sm:p-7",
        "hover:-translate-y-1 hover:shadow-xl",
        isOrange
          ? "hover:border-[#FF5A00] hover:shadow-[#0F2B5B]/10"
          : "hover:border-[#2563EB] hover:shadow-[#0F2B5B]/10"
      )}
    >
      <div>
        <div className="flex items-center justify-between border-b border-slate-100 pb-3.5 font-mono text-[11px] uppercase tracking-[0.14em]">
          <span className={isOrange ? "text-[#FF5A00]" : "text-[#2563EB]"}>
            {item.event}
          </span>
          <span className="text-slate-400">0{index + 1}</span>
        </div>

        <p className="mt-5 font-display text-[17px] font-medium leading-relaxed text-[#0F2B5B]">
          &ldquo;{item.quote}&rdquo;
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
        <div className="min-w-0">
          <p className="truncate font-display text-sm font-bold text-[#0F2B5B]">
            {item.author}
          </p>
          <p className="truncate text-xs text-slate-500">{item.role}</p>
        </div>

        <span
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-md font-mono text-xs font-bold text-white",
            isOrange ? "bg-[#FF5A00]" : "bg-[#0F2B5B]"
          )}
        >
          {item.initials}
        </span>
      </div>
    </motion.article>
  );
}

function BtsCard({ item }: { item: BtsMoment }) {
  const isOrange = item.accent === "orange";

  return (
    <article
      className={cn(
        "group relative flex w-[290px] shrink-0 flex-col justify-between rounded-lg border border-slate-200/90 bg-white p-5 transition-all duration-300 sm:w-[340px]",
        "hover:-translate-y-1 hover:shadow-lg",
        isOrange
          ? "hover:border-[#FF5A00] hover:shadow-[#0F2B5B]/10"
          : "hover:border-[#2563EB] hover:shadow-[#0F2B5B]/10"
      )}
    >
      <div>
        <div className="flex items-center justify-between font-mono text-[11px]">
          <span className="text-slate-400">{item.timecode}</span>
          <span
            className={cn(
              "font-semibold uppercase tracking-wider",
              isOrange ? "text-[#FF5A00]" : "text-[#2563EB]"
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

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 font-mono text-[11px] text-slate-500">
        <span>{item.gearTag}</span>
        <span className="text-[#0F2B5B] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          LOG OK
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

  const watermarkX = useTransform(smoothProgress, [0, 1], ["-8%", "10%"]);
  const row1X = useTransform(smoothProgress, [0, 1], ["4%", "-24%"]);
  const row2X = useTransform(smoothProgress, [0, 1], ["-22%", "4%"]);
  const row3X = useTransform(smoothProgress, [0, 1], ["8%", "-28%"]);

  return (
    <section
      ref={sectionRef}
      aria-label="Showcase Karya, Testimoni, dan Behind The Scenes"
      className="relative overflow-x-clip border-b border-slate-200 bg-[#F8FAFC] py-20 sm:py-28"
    >
      {/* Monumental Low-Contrast Background Watermark */}
      {!shouldReduceMotion ? (
        <motion.div
          style={{ x: watermarkX }}
          aria-hidden="true"
          className="pointer-events-none absolute top-14 whitespace-nowrap font-display text-[6rem] font-bold uppercase tracking-[-0.04em] text-[#0F2B5B]/[0.03] sm:text-[9rem]"
        >
          SINLUI TV ARCHIVE · KATA MEREKA · BEHIND THE LENS · SINLUI TV ARCHIVE
        </motion.div>
      ) : null}

      {/* Editorial Header */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FF5A00]">
              02 / ARSIP KARYA &amp; KATA MEREKA
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.035em] text-[#0F2B5B] sm:text-5xl">
              Karya yang Bergerak Bersama Momen.
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm leading-relaxed text-slate-600">
              Gulir halaman untuk menelusuri highlight liputan, tanggapan
              panitia dan guru, serta log kru di balik layar.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-[2px] flex-1 overflow-hidden bg-slate-200">
                <motion.div
                  style={{ scaleX: shouldReduceMotion ? 1 : smoothProgress }}
                  className="h-full origin-left bg-[#FF5A00]"
                />
              </div>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                SCROLL SCRUB
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Opposing Kinetic Scroll Tracks */}
      <div className="relative z-10 mt-14 space-y-8 sm:space-y-10">
        {/* Row 1: Highlight Liputan (Right -> Left) */}
        <div>
          <div className="mx-auto mb-3 flex max-w-7xl items-center justify-between px-4 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400 sm:px-6 lg:px-8">
            <span>01 — HIGHLIGHT LIPUTAN &amp; PRODUKSI</span>
            <span className="hidden sm:inline">← SCROLL KIRI</span>
          </div>

          {shouldReduceMotion ? (
            <div className="flex snap-x gap-5 overflow-x-auto px-4 pb-2 sm:px-6 lg:px-8">
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

        {/* Row 2: Kata Mereka (Left -> Right) */}
        <div>
          <div className="mx-auto mb-3 flex max-w-7xl items-center justify-between px-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[#2563EB] sm:px-6 lg:px-8">
            <span>02 — KATA MEREKA (PANITIA, PEMBINA &amp; GURU)</span>
            <span className="hidden text-slate-400 sm:inline">
              SCROLL KANAN →
            </span>
          </div>

          {shouldReduceMotion ? (
            <div className="flex snap-x gap-5 overflow-x-auto px-4 pb-2 sm:px-6 lg:px-8">
              {TESTIMONIALS.map((item, idx) => (
                <TestimonialCard
                  key={item.id}
                  item={item}
                  index={idx}
                  progress={smoothProgress}
                  reducedMotion={shouldReduceMotion}
                />
              ))}
            </div>
          ) : (
            <motion.div
              style={{ x: row2X, skewX: smoothSkew }}
              className="will-change-transform flex gap-5 px-4 sm:px-8"
            >
              {TESTIMONIALS.map((item, idx) => (
                <TestimonialCard
                  key={item.id}
                  item={item}
                  index={idx}
                  progress={smoothProgress}
                  reducedMotion={shouldReduceMotion}
                />
              ))}
            </motion.div>
          )}
        </div>

        {/* Row 3: Contact-Sheet BTS (Right -> Left, faster parallax) */}
        <div>
          <div className="mx-auto mb-3 flex max-w-7xl items-center justify-between px-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[#FF5A00] sm:px-6 lg:px-8">
            <span>03 — CATATAN BALIK LAYAR (BTS CONTACT SHEET)</span>
            <span className="hidden text-slate-400 sm:inline">
              HOVER UNTUK DETAIL
            </span>
          </div>

          {shouldReduceMotion ? (
            <div className="flex snap-x gap-5 overflow-x-auto px-4 pb-2 sm:px-6 lg:px-8">
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
