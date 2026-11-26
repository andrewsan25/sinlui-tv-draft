"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { HOME_STATS, type StatItem } from "@/data/site";

function CountUpNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(
    shouldReduceMotion ? value : 0
  );

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) {
      setDisplayValue(value);
      return;
    }

    const controls = animate(0, value, {
      duration: 1.35,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplayValue(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, shouldReduceMotion, value]);

  const formatted = new Intl.NumberFormat("id-ID").format(displayValue);

  return (
    <span ref={ref} className="tabular-nums">
      {formatted}
      {suffix ? <span className="text-[#F97316]">{suffix}</span> : null}
    </span>
  );
}

function StatCard({ stat }: { stat: StatItem }) {
  return (
    <div className="group rounded-2xl border border-slate-200/90 bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2563EB]/40 hover:shadow-md hover:shadow-blue-500/5">
      <div className="font-display text-3xl font-extrabold tracking-tight text-[#0F2B5B] sm:text-4xl">
        <CountUpNumber value={stat.value} suffix={stat.suffix} />
      </div>
      <p className="mt-2 font-display text-sm font-bold text-[#0F2B5B]">
        {stat.label}
      </p>
      <p className="mt-1 text-xs leading-relaxed text-slate-500">
        {stat.sublabel}
      </p>
    </div>
  );
}

export function StatsSection() {
  return (
    <section
      aria-label="Statistik Sinlui TV"
      className="border-b border-slate-200/80 bg-[#F8FAFC] py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#2563EB]">
              Sekilas Angka
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold text-[#0F2B5B] sm:text-3xl">
              Rekam Jejak Produksi &amp; Kolaborasi
            </h2>
          </div>
          <p className="text-xs text-slate-500 sm:text-sm">
            Terus bertumbuh bersama setiap agenda akademik, seni, dan olahraga.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HOME_STATS.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
