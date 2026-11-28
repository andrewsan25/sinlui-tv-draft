import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PageTransition } from "@/components/layout/PageTransition";
import { OrgDirectory } from "@/components/kepengurusan/OrgDirectory";
import { MEMBERS, PERIODE_AKTIF } from "@/data/kepengurusan";

export const metadata: Metadata = {
  title: "Kepengurusan",
  description: `Susunan Guru Pembina, Badan Pengurus Harian (BPH), koordinator, dan anggota divisi Sinlui TV periode ${PERIODE_AKTIF}.`,
};

export default function KepengurusanPage() {
  const pembinaCount = MEMBERS.filter((m) => m.tier === "pembina").length;
  const bphCount = MEMBERS.filter(
    (m) => m.tier === "bph-lead" || m.tier === "bph"
  ).length;

  return (
    <PageTransition>
      {/* Editorial Roster Masthead */}
      <section className="bg-white pb-8 pt-12 sm:pb-12 sm:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs font-medium text-slate-400"
          >
            <Link href="/home" className="transition-colors hover:text-[#0F2B5B]">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-semibold text-[#F46F15]">Kepengurusan</span>
          </nav>

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 py-1 text-xs font-semibold text-[#F46F15]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F46F15]" />
                Periode {PERIODE_AKTIF}
              </span>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.06] tracking-[-0.035em] text-[#0F2B5B] sm:text-6xl">
                Susunan{" "}
                <span className="font-serif italic font-normal text-[#2563EB]">
                  Kepengurusan
                </span>{" "}
                Sinlui TV.
              </h1>
            </div>

            <div className="lg:col-span-4 lg:text-right">
              <p className="text-xs font-semibold text-[#0F2B5B]">
                {pembinaCount} Pembina · {bphCount} BPH · 5 Divisi
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Guru pembina, pimpinan harian, koordinator, dan kru aktif yang
                menggerakkan produksi dokumentasi serta siaran sekolah.
              </p>
            </div>
          </div>
        </div>
      </section>

      <OrgDirectory />
    </PageTransition>
  );
}
