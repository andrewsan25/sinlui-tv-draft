import Link from "next/link";
import { ArrowLeft, Radio } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center bg-editorial-grid px-4 py-20">
      <div className="mx-auto max-w-lg rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl shadow-slate-900/5 sm:p-10">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3.5 py-1 font-mono text-xs font-semibold text-[#F97316]">
          <Radio className="h-3.5 w-3.5" />
          <span>SIGNAL LOST · 404</span>
        </div>

        <h1 className="mt-5 font-display text-3xl font-extrabold text-[#0F2B5B] sm:text-4xl">
          Saluran Tidak Ditemukan
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Halaman yang Anda cari tidak tersedia atau telah dipindahkan ke jalur
          siaran lain. Silakan kembali ke beranda resmi Sinlui TV.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/home"
            className="inline-flex items-center gap-2 rounded-full bg-[#F97316] px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-orange-500/20 transition-all hover:bg-[#EA580C]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Kembali ke Beranda</span>
          </Link>
          <Link
            href="/kepengurusan"
            className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-[#0F2B5B] transition-colors hover:border-[#2563EB] hover:text-[#2563EB]"
          >
            Lihat Kepengurusan
          </Link>
        </div>
      </div>
    </section>
  );
}
