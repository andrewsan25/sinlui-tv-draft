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
      {suffix ? <span className="text-[#FF5A00]">{suffix}</span> : null}
    </span>
  );
}

function StatCell({ stat }: { stat: StatItem }) {
  return (
    <div className="flex flex-col justify-between p-7 transition-colors duration-200 hover:bg-[#F8FAFC] sm:p-10">
      <div className="flex items-center justify-between font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
        <span>{stat.index}</span>
        <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]/30" />
      </div>

      <div className="mt-6 font-display text-5xl font-bold tracking-[-0.04em] text-[#0F2B5B] lg:text-[3.75rem]">
        <CountUpNumber value={stat.value} suffix={stat.suffix} />
      </div>

      <div className="mt-4">
        <p className="font-display text-base font-bold text-[#0F2B5B]">
          {stat.label}
        </p>
        <p className="mt-1 text-xs leading-relaxed text-slate-500">
          {stat.sublabel}
        </p>
      </div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section
      aria-label="Rekam Jejak Angka Sinlui TV"
      className="border-b border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 divide-y divide-slate-200 sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
          {HOME_STATS.map((stat) => (
            <StatCell key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
