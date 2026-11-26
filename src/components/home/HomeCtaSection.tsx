import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

export function HomeCtaSection() {
  return (
    <section className="bg-[#0F2B5B] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FF5A00]">
              SINLUI TV · PERIODE {SITE_CONFIG.period}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              DI BALIK SETIAP FRAME, ADA TIM YANG PRESISI.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-blue-100/80 sm:text-base">
              Kenali Badan Pengurus Harian (BPH), koordinator divisi, serta
              sejarah perkembangan Sinlui TV sebagai unit media resmi sekolah.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 lg:col-span-4 lg:justify-end">
            <Link
              href="/kepengurusan"
              className="inline-flex items-center gap-2 rounded-md bg-[#FF5A00] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#e04f00]"
            >
              <span>Susunan Kepengurusan</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 rounded-md border border-white/25 px-5 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
            >
              <span>Profil Studio</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
