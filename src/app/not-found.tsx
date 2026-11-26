import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-white px-4 py-20">
      <div className="mx-auto max-w-lg rounded-[32px] border border-[#0F2B5B]/[0.08] bg-white p-8 text-center shadow-luxury sm:p-12">
        <span className="inline-flex rounded-full bg-orange-50 px-3.5 py-1 text-xs font-semibold text-[#F46F15]">
          Halaman Tidak Tersedia · 404
        </span>

        <h1 className="mt-5 font-display text-3xl font-semibold tracking-tight text-[#0F2B5B] sm:text-4xl">
          Saluran tidak{" "}
          <span className="font-serif italic font-normal text-[#2563EB]">
            ditemukan.
          </span>
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-500">
          Halaman yang Anda tuju tidak tersedia atau telah dipindahkan ke jalur
          siaran lain.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <Link
            href="/home"
            className="inline-flex items-center gap-2 rounded-full bg-[#0F2B5B] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#F46F15]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Kembali ke Beranda</span>
          </Link>
          <Link
            href="/kepengurusan"
            className="inline-flex items-center rounded-full border border-[#0F2B5B]/15 bg-white px-6 py-3 text-sm font-semibold text-[#0F2B5B] transition-colors hover:border-[#2563EB] hover:text-[#2563EB]"
          >
            Kepengurusan
          </Link>
        </div>
      </div>
    </section>
  );
}
