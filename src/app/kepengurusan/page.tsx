import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PageTransition } from "@/components/layout/PageTransition";
import { OrgDirectory } from "@/components/kepengurusan/OrgDirectory";
import { PERIODE_AKTIF } from "@/data/kepengurusan";

export const metadata: Metadata = {
  title: "Kepengurusan",
  description: `Susunan Badan Pengurus Harian (BPH), koordinator, dan anggota divisi Sinlui TV periode ${PERIODE_AKTIF}.`,
};

export default function KepengurusanPage() {
  return (
    <PageTransition>
      {/* Editorial Header */}
      <section className="border-b border-slate-200/80 bg-white bg-editorial-grid py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 font-mono text-xs text-slate-500"
          >
            <Link href="/home" className="hover:text-[#0F2B5B]">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="font-semibold text-[#F97316]">Kepengurusan</span>
          </nav>

          <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#F97316]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />
                PERIODE {PERIODE_AKTIF}
              </span>
              <h1 className="mt-4 font-display text-3xl font-extrabold leading-[1.12] tracking-tight text-[#0F2B5B] sm:text-5xl">
                Susunan Kepengurusan Sinlui TV
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                Sinergi Badan Pengurus Harian (BPH), koordinator, dan kru aktif
                lintas lima divisi yang menjaga kualitas liputan dan penyiaran
                sekolah sepanjang periode {PERIODE_AKTIF}.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-3.5 shadow-xs">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                STRUKTUR DATA TERPISAH
              </p>
              <p className="mt-1 text-xs font-medium text-[#0F2B5B]">
                Kelola anggota di{" "}
                <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[11px] text-[#2563EB]">
                  src/data/kepengurusan.ts
                </code>
              </p>
            </div>
          </div>
        </div>
      </section>

      <OrgDirectory />
    </PageTransition>
  );
}
