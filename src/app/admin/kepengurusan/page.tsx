import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PageTransition } from "@/components/layout/PageTransition";
import { KepengurusanAdmin } from "@/components/admin/KepengurusanAdmin";

export const metadata: Metadata = {
  title: "Kelola Kepengurusan",
  robots: { index: false, follow: false },
};

export default function AdminKepengurusanPage() {
  return (
    <PageTransition>
      <section className="bg-white pb-16 pt-12 sm:pb-24 sm:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs font-medium text-slate-400"
          >
            <Link href="/home" className="transition-colors hover:text-[#0F2B5B]">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link
              href="/kepengurusan"
              className="transition-colors hover:text-[#0F2B5B]"
            >
              Kepengurusan
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-semibold text-[#F46F15]">Kelola Data</span>
          </nav>

          <div className="mt-6 mb-10 max-w-2xl">
            <h1 className="font-display text-3xl font-semibold tracking-[-0.03em] text-[#0F2B5B] sm:text-5xl">
              Kelola Data{" "}
              <span className="font-serif italic font-normal text-[#F46F15]">
                Kepengurusan.
              </span>
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">
              Tambah, ubah, atau susun ulang nama Guru Pembina, BPH, dan anggota
              divisi Sinlui TV langsung ke database Supabase.
            </p>
          </div>

          <KepengurusanAdmin />
        </div>
      </section>
    </PageTransition>
  );
}
