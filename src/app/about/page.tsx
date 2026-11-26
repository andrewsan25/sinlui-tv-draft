import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { PageTransition } from "@/components/layout/PageTransition";
import { DivisionsShowcase } from "@/components/about/DivisionsShowcase";
import { TimelineSection } from "@/components/about/TimelineSection";
import { ABOUT_PROFILE, MISSIONS, ORG_FACTS, VISION } from "@/data/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Profil lengkap, visi dan misi, ruang lingkup lima divisi produksi, serta perjalanan organisasi Sinlui TV.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      {/* Editorial Masthead + Panoramic Studio Visual */}
      <section className="border-b border-slate-200 bg-white pb-16 pt-10 sm:pb-24 sm:pt-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400"
          >
            <Link href="/home" className="hover:text-[#0F2B5B]">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="font-semibold text-[#FF5A00]">About</span>
          </nav>

          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2563EB]">
                {ABOUT_PROFILE.eyebrow}
              </p>
              <h1 className="mt-3 font-display text-4xl font-bold leading-[0.98] tracking-[-0.04em] text-[#0F2B5B] sm:text-6xl">
                {ABOUT_PROFILE.headline}
              </h1>
            </div>

            <div className="lg:col-span-4">
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                {ABOUT_PROFILE.lead}
              </p>
            </div>
          </div>

          {/* Full-Width Panoramic Frame */}
          <div className="relative mt-10 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 sm:mt-14">
            <div className="relative aspect-[16/9] max-h-[460px] w-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-broadcast.jpg"
                alt="Perangkat Produksi Sinlui TV di Auditorium Sekolah"
                className="h-full w-full object-cover"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-4 h-4 w-4 border-l border-t border-white/75"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-4 h-4 w-4 border-r border-t border-white/75"
              />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 bg-white px-5 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-slate-500">
              <span>STUDIO MULTIMEDIA · SINLUI TV</span>
              <span className="text-[#0F2B5B]">
                DOKUMENTASI · VIDEOGRAFI · FOTOGRAFI · BROADCASTING
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Profil & Identitas Magazine Spread */}
      <section className="border-b border-slate-200 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-7">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FF5A00]">
                01 / LATAR BELAKANG &amp; PERAN
              </p>

              <blockquote className="border-l-2 border-[#FF5A00] pl-5 font-display text-2xl font-bold leading-snug text-[#0F2B5B] sm:text-3xl">
                &ldquo;{ABOUT_PROFILE.pullQuote}&rdquo;
              </blockquote>

              <div className="space-y-4 pt-2">
                {ABOUT_PROFILE.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-relaxed text-slate-600 sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Clean Hairline Spec Ledger */}
            <div className="lg:col-span-5">
              <div className="border-y border-slate-200">
                <div className="flex items-center justify-between border-b border-slate-200 py-4">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0F2B5B]">
                    SPESIFIKASI ORGANISASI
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/logo-sinlui-mark.png"
                    alt="Emblem Sinlui TV"
                    className="h-10 w-10 object-contain mix-blend-multiply"
                  />
                </div>
                <dl className="divide-y divide-slate-200">
                  {ORG_FACTS.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                    >
                      <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-slate-400">
                        {fact.label}
                      </dt>
                      <dd className="text-sm font-semibold text-[#0F2B5B] sm:text-right">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-6">
                <Link
                  href="/kepengurusan"
                  className="group inline-flex items-center gap-2 border-b border-[#0F2B5B]/30 pb-1 text-sm font-semibold text-[#0F2B5B] transition-colors hover:border-[#FF5A00] hover:text-[#FF5A00]"
                >
                  <span>Lihat struktur pengurus periode aktif</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi Architectural Hairline Matrix */}
      <section className="border-b border-slate-200 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2563EB]">
              02 / ARAH GERAK ORGANISASI
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.035em] text-[#0F2B5B] sm:text-4xl">
              Visi &amp; Misi Strategis.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-slate-200 bg-slate-200 lg:grid-cols-12">
            {/* Vision Monolith */}
            <div className="relative flex flex-col justify-between bg-[#0F2B5B] p-8 text-white sm:p-10 lg:col-span-5">
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-1.5 w-24 bg-[#FF5A00]"
              />
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FF5A00]">
                  VISI KAMI
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                  {VISION.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-blue-100/90 sm:text-lg">
                  &ldquo;{VISION.statement}&rdquo;
                </p>
              </div>

              <div className="mt-10 border-t border-white/15 pt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-blue-200/80">
                SINLUI TV · CREATIVE BROADCAST UNIT
              </div>
            </div>

            {/* 2x2 Hairline Missions */}
            <div className="grid grid-cols-1 gap-px bg-slate-200 sm:grid-cols-2 lg:col-span-7">
              {MISSIONS.map((mission) => (
                <article
                  key={mission.number}
                  className="flex flex-col justify-between bg-white p-7 transition-colors hover:bg-[#F8FAFC] sm:p-8"
                >
                  <div>
                    <span className="font-mono text-xs font-bold text-[#FF5A00]">
                      {mission.number}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-bold text-[#0F2B5B]">
                      {mission.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {mission.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DivisionsShowcase />
      <TimelineSection />
    </PageTransition>
  );
}
