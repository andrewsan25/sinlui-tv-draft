import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-white px-4 py-20">
      <div className="mx-auto max-w-lg rounded-xl border border-slate-200 bg-white p-8 text-center sm:p-12">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FF5A00]">
          SIGNAL LOST · 404
        </p>

        <h1 className="mt-4 font-display text-3xl font-bold tracking-[-0.03em] text-[#0F2B5B] sm:text-4xl">
          Saluran Tidak Ditemukan.
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Halaman yang Anda cari tidak tersedia atau telah dipindahkan ke jalur
          siaran lain.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/home"
            className="inline-flex items-center gap-2 rounded-md bg-[#0F2B5B] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#FF5A00]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Kembali ke Beranda</span>
          </Link>
          <Link
            href="/kepengurusan"
            className="inline-flex items-center rounded-md border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-[#0F2B5B] transition-colors hover:border-[#2563EB] hover:text-[#2563EB]"
          >
            Kepengurusan
          </Link>
        </div>
      </div>
    </section>
  );
}
