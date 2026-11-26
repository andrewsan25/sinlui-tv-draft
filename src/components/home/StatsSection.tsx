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
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
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
      {suffix ? <span className="text-[#F46F15]">{suffix}</span> : null}
    </span>
  );
}

function StatItemBlock({ stat }: { stat: StatItem }) {
  return (
    <div className="flex flex-col">
      <span className="h-[2px] w-7 rounded-full bg-[#F46F15]/80" />

      <div className="mt-5 font-display text-5xl font-semibold tracking-[-0.04em] text-[#0F2B5B] lg:text-[3.5rem]">
        <CountUpNumber value={stat.value} suffix={stat.suffix} />
      </div>

      <p className="mt-3 font-display text-base font-semibold text-[#0F2B5B]">
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
      aria-label="Rekam Jejak Angka Sinlui TV"
      className="bg-white py-14 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {HOME_STATS.map((stat) => (
            <StatItemBlock key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
