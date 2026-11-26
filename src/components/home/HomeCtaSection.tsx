import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import { SITE_CONFIG } from "@/data/site";

export function HomeCtaSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5 sm:p-12">
          {/* Top accent bar */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#0F2B5B] via-[#2563EB] to-[#F97316]"
          />

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#F97316]">
                PERIODE {SITE_CONFIG.period}
              </span>
              <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-[#0F2B5B] sm:text-3xl lg:text-4xl">
                Kenali Tim di Balik Lensa &amp; Ruang Kontrol Sinlui TV.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Jelajahi visi, sejarah perjalanan organisasi, serta struktur
                lengkap Badan Pengurus Harian dan koordinator divisi yang
                menggerakkan setiap liputan sekolah.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 lg:col-span-4 lg:justify-end">
              <Link
                href="/kepengurusan"
                className="inline-flex items-center gap-2 rounded-full bg-[#0F2B5B] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#193b75]"
              >
                <Users className="h-4 w-4 text-[#F97316]" />
                <span>Lihat Kepengurusan</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-5 py-3.5 text-sm font-semibold text-[#0F2B5B] transition-colors hover:border-[#F97316] hover:bg-white hover:text-[#F97316]"
              >
                <span>Profil Lengkap</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
