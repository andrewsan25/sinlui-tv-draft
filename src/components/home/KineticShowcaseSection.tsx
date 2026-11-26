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
      <div className="relative grid h-48 w-full grid-cols-2 grid-rows-2 gap-1 overflow-hidden rounded-[18px] bg-[#0F2B5B] p-1">
        <div className="relative overflow-hidden rounded-tl-[14px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-broadcast.jpg"
            alt="Kamera 1 Aula"
            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />
          <span className="absolute left-2 top-2 rounded-full bg-[#F46F15] px-2 py-0.5 text-[9px] font-semibold text-white">
            Live · Cam 1
          </span>
        </div>
        <div className="relative overflow-hidden rounded-tr-[14px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/work-stage.jpg"
            alt="Kamera 2 Panggung"
            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />
          <span className="absolute left-2 top-2 rounded-full bg-black/50 px-2 py-0.5 text-[9px] font-medium text-white backdrop-blur-sm">
            Cam 2
          </span>
        </div>
        <div className="relative overflow-hidden rounded-bl-[14px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/work-arena.jpg"
            alt="Kamera 3 Tribun"
            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />
          <span className="absolute left-2 top-2 rounded-full bg-black/50 px-2 py-0.5 text-[9px] font-medium text-white backdrop-blur-sm">
            Cam 3
          </span>
        </div>
        <div className="flex flex-col justify-between rounded-br-[14px] bg-[#133570] p-3 text-white">
          <span className="text-[10px] font-medium text-blue-200">
            Multicam Feed
          </span>
          <div className="flex items-end gap-1">
            {[45, 75, 60, 90, 50, 80, 65, 95].map((pct, i) => (
              <span
                key={i}
                style={{ height: `${Math.round(pct * 0.25)}px` }}
                className={cn(
                  "w-1.5 rounded-full",
                  i >= 6 ? "bg-[#F46F15]" : "bg-[#60A5FA]"
                )}
              />
            ))}
          </div>
          <span className="text-[10px] font-semibold text-orange-300">
            1080p60 Sync
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-48 w-full overflow-hidden rounded-[18px] bg-slate-100">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.image}
        alt={item.title}
        className={cn(
          "h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105",
          item.visualMode === "colorgrade" ? "contrast-[1.05] saturate-[1.08]" : ""
        )}
      />

      {item.visualMode === "letterbox" ? (
        <>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-3 bg-[#0F2B5B]/90" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-5 items-center justify-between bg-[#0F2B5B]/90 px-3 text-[10px] font-medium text-blue-100">
            <span>Slow-Motion Cinema</span>
            <span className="text-[#F46F15]">120 fps</span>
          </div>
        </>
      ) : null}

      {item.visualMode === "colorgrade" ? (
        <div className="pointer-events-none absolute inset-x-3 bottom-3 flex items-center justify-between rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold text-[#0F2B5B] shadow-xs backdrop-blur-md">
          <span>Color Profile · Rec.709</span>
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-[#0F2B5B]" />
            <span className="h-2 w-2 rounded-full bg-[#2563EB]" />
            <span className="h-2 w-2 rounded-full bg-[#F46F15]" />
          </div>
        </div>
      ) : null}

      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-[#0F2B5B] shadow-xs backdrop-blur-md">
        {item.category}
      </span>
    </div>
  );
}

function HighlightCard({ item }: { item: CoverageHighlight }) {
  const isOrange = item.accent === "orange";

  return (
    <article
      className={cn(
        "group relative flex w-[340px] shrink-0 flex-col justify-between rounded-[24px] border border-[#0F2B5B]/[0.07] bg-white p-3 shadow-luxury transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:w-[420px]",
        "hover:-translate-y-2 hover:shadow-luxury-hover",
        isOrange ? "hover:border-[#F46F15]/45" : "hover:border-[#2563EB]/45"
      )}
    >
      <div>
        <HighlightMediaFrame item={item} />

        <div className="px-2.5 pb-2 pt-4">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>{item.specs}</span>
            <span className="font-semibold text-[#0F2B5B]">
              {item.durationOrCount}
            </span>
          </div>

          <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-[#0F2B5B] sm:text-xl">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            {item.summary}
          </p>
        </div>
      </div>

      {/* Smooth Hover Detail Reveal */}
      <div className="mt-2 px-2.5 pb-2">
        <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-xs">
          <span className="font-medium text-slate-400">Rilisan {item.year}</span>
          <ArrowUpRight
            className={cn(
              "h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
              isOrange
                ? "text-slate-400 group-hover:text-[#F46F15]"
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
    [1.05 * direction, 0, -1.05 * direction]
  );

  return (
    <motion.article
      style={reducedMotion ? undefined : { rotate }}
      className={cn(
        "group relative flex w-[330px] shrink-0 flex-col justify-between rounded-[24px] border border-[#0F2B5B]/[0.07] bg-white p-7 shadow-luxury transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:w-[400px] sm:p-8",
        "hover:-translate-y-2 hover:shadow-luxury-hover",
        isOrange ? "hover:border-[#F46F15]/45" : "hover:border-[#2563EB]/45"
      )}
    >
      <div>
        <div className="flex items-center justify-between">
          <span
            aria-hidden="true"
            className={cn(
              "font-serif text-5xl leading-none",
              isOrange ? "text-[#F46F15]" : "text-[#2563EB]"
            )}
          >
            &ldquo;
          </span>
          <span
            className={cn(
              "rounded-full px-3 py-1 text-[11px] font-semibold",
              isOrange
                ? "bg-orange-50 text-[#F46F15]"
                : "bg-blue-50 text-[#2563EB]"
            )}
          >
            {item.event}
          </span>
        </div>

        <p className="mt-3 text-[15px] font-medium leading-relaxed text-[#0F2B5B] sm:text-base">
          {item.quote}
        </p>
      </div>

      <div className="mt-7 flex items-center gap-3.5 border-t border-slate-100 pt-5">
        <span
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
            isOrange
              ? "bg-orange-50 text-[#F46F15]"
              : "bg-blue-50 text-[#2563EB]"
          )}
        >
          {item.initials}
        </span>
        <div className="min-w-0">
          <p className="truncate font-display text-sm font-semibold text-[#0F2B5B]">
            {item.author}
          </p>
          <p className="truncate text-xs text-slate-500">{item.role}</p>
        </div>
      </div>
    </motion.article>
  );
}

function BtsCard({ item }: { item: BtsMoment }) {
  const isOrange = item.accent === "orange";

  return (
    <article
      className={cn(
        "group relative flex w-[290px] shrink-0 flex-col justify-between rounded-[20px] border border-[#0F2B5B]/[0.06] bg-white/90 p-5 shadow-sm backdrop-blur-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] sm:w-[335px]",
        "hover:-translate-y-1.5 hover:bg-white hover:shadow-luxury",
        isOrange ? "hover:border-[#F46F15]/40" : "hover:border-[#2563EB]/40"
      )}
    >
      <div>
        <div className="flex items-center justify-between text-[11px]">
          <span
            className={cn(
              "rounded-full px-2.5 py-0.5 font-semibold",
              isOrange
                ? "bg-orange-50 text-[#F46F15]"
                : "bg-blue-50 text-[#2563EB]"
            )}
          >
            {item.division}
          </span>
          <span className="font-mono text-slate-400">{item.timecode}</span>
        </div>

        <h3 className="mt-3.5 font-display text-base font-semibold text-[#0F2B5B]">
          {item.title}
        </h3>
        <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
          {item.caption}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-[11px] font-medium text-slate-400">
        <span>{item.gearTag}</span>
        <span
          className={cn(
            "opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            isOrange ? "text-[#F46F15]" : "text-[#2563EB]"
          )}
        >
          Behind the lens
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
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });

  const scrollVelocity = useVelocity(scrollY);
  const rawSkew = useTransform(scrollVelocity, [-2400, 0, 2400], [-1.5, 0, 1.5]);
  const smoothSkew = useSpring(rawSkew, { stiffness: 160, damping: 28 });

  const row1X = useTransform(smoothProgress, [0, 1], ["4%", "-24%"]);
  const row2X = useTransform(smoothProgress, [0, 1], ["-22%", "4%"]);
  const row3X = useTransform(smoothProgress, [0, 1], ["8%", "-26%"]);

  return (
    <section
      ref={sectionRef}
      aria-label="Sorotan Karya, Testimoni, dan Momen Balik Layar"
      className="mx-2 overflow-x-clip rounded-[36px] border border-[#0F2B5B]/[0.05] bg-[#F6F8FC] py-20 sm:mx-4 sm:rounded-[44px] sm:py-28 lg:mx-6"
    >
      {/* Editorial Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
              Sorotan &amp; Testimoni
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.03em] text-[#0F2B5B] sm:text-5xl">
              Karya pilihan &amp;{" "}
              <span className="font-serif italic font-normal text-[#F46F15]">
                kata mereka.
              </span>
            </h2>
          </div>

          <div className="w-full max-w-sm">
            <p className="text-sm leading-relaxed text-slate-500">
              Gulir perlahan untuk menelusuri liputan unggulan, suara panitia
              serta guru, dan catatan kru di balik lensa.
            </p>
            <div className="mt-4 h-[3px] w-full overflow-hidden rounded-full bg-slate-200/80">
              <motion.div
                style={{ scaleX: shouldReduceMotion ? 1 : smoothProgress }}
                className="h-full origin-left rounded-full bg-[#F46F15]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3 Silky Counter-Scrolling Streams */}
      <div className="mt-14 space-y-8 sm:space-y-10">
        {/* Stream 1: Highlight Liputan (Right -> Left) */}
        <div>
          <div className="mx-auto mb-3.5 flex max-w-7xl items-center justify-between px-4 text-xs font-medium text-slate-400 sm:px-6 lg:px-8">
            <span>Highlight Liputan &amp; Produksi</span>
            <span className="hidden sm:inline">Bergerak ke kiri saat digulir</span>
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

        {/* Stream 2: Kata Mereka (Left -> Right) */}
        <div>
          <div className="mx-auto mb-3.5 flex max-w-7xl items-center justify-between px-4 text-xs font-medium text-[#2563EB] sm:px-6 lg:px-8">
            <span>Kata Mereka — Panitia, Pembina &amp; Guru</span>
            <span className="hidden text-slate-400 sm:inline">
              Mengalir berlawanan arah
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

        {/* Stream 3: Behind The Scenes (Right -> Left, faster parallax) */}
        <div>
          <div className="mx-auto mb-3.5 flex max-w-7xl items-center justify-between px-4 text-xs font-medium text-[#F46F15] sm:px-6 lg:px-8">
            <span>Momen Balik Layar</span>
            <span className="hidden text-slate-400 sm:inline">
              Arahkan kursor pada kartu
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
