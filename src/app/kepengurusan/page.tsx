import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Settings2 } from "lucide-react";
import { PageTransition } from "@/components/layout/PageTransition";
import { OrgDirectory } from "@/components/kepengurusan/OrgDirectory";
import { PERIODE_AKTIF } from "@/data/kepengurusan";
import { fetchKepengurusanMembers } from "@/lib/supabase/members";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Kepengurusan",
  description: `Susunan Guru Pembina, Badan Pengurus Harian (BPH), koordinator, dan anggota divisi Sinlui TV periode ${PERIODE_AKTIF}.`,
};

export default async function KepengurusanPage() {
  const { members, source } = await fetchKepengurusanMembers();

  const pembinaCount = members.filter((m) => m.tier === "pembina").length;
  const bphCount = members.filter(
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
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 py-1 text-xs font-semibold text-[#F46F15]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F46F15]" />
                  Periode {PERIODE_AKTIF}
                </span>

                {source === "supabase" ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Live · Supabase
                  </span>
                ) : null}
              </div>

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

              <div className="mt-4 flex lg:justify-end">
                <Link
                  href="/admin/kepengurusan"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#0F2B5B]/12 bg-[#F6F8FC] px-3.5 py-1.5 text-xs font-semibold text-[#0F2B5B] transition-colors hover:border-[#F46F15]/40 hover:bg-white hover:text-[#F46F15]"
                >
                  <Settings2 className="h-3.5 w-3.5" />
                  <span>Kelola Data</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OrgDirectory members={members} />
    </PageTransition>
  );
}
