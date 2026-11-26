import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PageTransition } from "@/components/layout/PageTransition";
import { OrgDirectory } from "@/components/kepengurusan/OrgDirectory";
import { MEMBERS, PERIODE_AKTIF } from "@/data/kepengurusan";

export const metadata: Metadata = {
  title: "Kepengurusan",
  description: `Susunan Badan Pengurus Harian (BPH), koordinator, dan anggota divisi Sinlui TV periode ${PERIODE_AKTIF}.`,
};

export default function KepengurusanPage() {
  return (
    <PageTransition>
      {/* Editorial Roster Masthead */}
      <section className="border-b border-slate-200 bg-white pb-12 pt-10 sm:pb-16 sm:pt-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400"
          >
            <Link href="/home" className="hover:text-[#0F2B5B]">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-semibold text-[#FF5A00]">Kepengurusan</span>
          </nav>

          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FF5A00]">
                PERIODE AKTIF {PERIODE_AKTIF}
              </p>
              <h1 className="mt-3 font-display text-4xl font-bold uppercase leading-[0.96] tracking-[-0.045em] text-[#0F2B5B] sm:text-6xl">
                SUSUNAN KEPENGURUSAN
              </h1>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400">
                {MEMBERS.length} PERSONEL · 06 BPH · 05 DIVISI
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Pimpinan harian, koordinator, dan kru aktif yang menggerakkan
                produksi dokumentasi serta siaran sekolah.
              </p>
            </div>
          </div>
        </div>
      </section>

      <OrgDirectory />
    </PageTransition>
  );
}
