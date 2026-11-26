import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

export function HomeCtaSection() {
  return (
    <section className="bg-white pb-20 pt-4 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[36px] bg-[#0F2B5B] p-8 text-white shadow-[0_32px_80px_-24px_rgba(15,43,91,0.35)] sm:p-14 lg:p-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.35),transparent_55%)]"
          />

          <div className="relative z-10 grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-orange-300">
                Periode {SITE_CONFIG.period}
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl">
                Di balik setiap bingkai, ada tim yang{" "}
                <span className="font-serif italic font-normal text-orange-300">
                  berdedikasi.
                </span>
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-blue-100/80 sm:text-base">
                Kenali Badan Pengurus Harian (BPH), koordinator lima divisi, dan
                perjalanan kreatif Sinlui TV sebagai unit media resmi sekolah.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 lg:col-span-4 lg:justify-end">
              <Link
                href="/kepengurusan"
                className="inline-flex items-center gap-2 rounded-full bg-[#F46F15] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff7d26]"
              >
                <span>Susunan Kepengurusan</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15"
              >
                <span>Tentang Kami</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
