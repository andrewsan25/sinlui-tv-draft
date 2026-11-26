import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Compass, Target } from "lucide-react";
import { PageTransition } from "@/components/layout/PageTransition";
import { DivisionsShowcase } from "@/components/about/DivisionsShowcase";
import { TimelineSection } from "@/components/about/TimelineSection";
import { ABOUT_PROFILE, MISSIONS, ORG_FACTS, VISION } from "@/data/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Profil lengkap, visi dan misi, ruang lingkup lima divisi produksi, serta sejarah perkembangan Sinlui TV.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      {/* Editorial Page Header */}
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
            <span className="font-semibold text-[#F97316]">About</span>
          </nav>

          <div className="mt-5 max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
              {ABOUT_PROFILE.eyebrow}
            </span>
            <h1 className="mt-4 font-display text-3xl font-extrabold leading-[1.12] tracking-tight text-[#0F2B5B] sm:text-5xl">
              {ABOUT_PROFILE.headline}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              {ABOUT_PROFILE.lead}
            </p>
          </div>
        </div>
      </section>

      {/* Profil & Identitas Organisasi */}
      <section className="border-b border-slate-200/80 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="space-y-5 lg:col-span-7">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#F97316]">
                Latar Belakang &amp; Peran
              </p>
              <h2 className="font-display text-2xl font-extrabold text-[#0F2B5B] sm:text-3xl">
                Mengabadikan Dinamika Kampus dengan Disiplin Produksi
              </h2>
              {ABOUT_PROFILE.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-sm leading-relaxed text-slate-600 sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-7 lg:col-span-5">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#0F2B5B]">
                Identitas &amp; Spesifikasi Organisasi
              </p>
              <dl className="mt-5 divide-y divide-slate-200/80">
                {ORG_FACTS.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex flex-col gap-1 py-3.5 first:pt-0 last:pb-0"
                  >
                    <dt className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      {fact.label}
                    </dt>
                    <dd className="text-sm font-semibold text-[#0F2B5B]">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 border-t border-slate-200 pt-5">
                <Link
                  href="/kepengurusan"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#F97316] transition-colors hover:text-[#EA580C]"
                >
                  <span>Lihat struktur pengurus periode aktif</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="border-b border-slate-200/80 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Vision Architectural Card */}
            <div className="relative overflow-hidden rounded-3xl bg-[#0F2B5B] p-8 text-white shadow-xl shadow-[#0F2B5B]/15 lg:col-span-5">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1.5 bg-[#F97316]"
              />
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-orange-300">
                <Compass className="h-3.5 w-3.5" />
                <span>VISI KAMI</span>
              </div>

              <h2 className="mt-5 font-display text-2xl font-extrabold text-white sm:text-3xl">
                {VISION.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-blue-100">
                &ldquo;{VISION.statement}&rdquo;
              </p>

              <div className="mt-8 border-t border-white/15 pt-5 font-mono text-xs text-blue-200">
                SINLUI TV · CREATIVE BROADCAST UNIT
              </div>
            </div>

            {/* Missions Grid */}
            <div className="lg:col-span-7">
              <div className="mb-5 flex items-center gap-2">
                <Target className="h-4 w-4 text-[#2563EB]" />
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#2563EB]">
                  Misi Strategis Sinlui TV
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {MISSIONS.map((mission) => (
                  <article
                    key={mission.number}
                    className="rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F97316]/60 hover:shadow-md"
                  >
                    <span className="font-mono text-xs font-bold text-[#F97316]">
                      {mission.number}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-bold text-[#0F2B5B]">
                      {mission.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {mission.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <DivisionsShowcase />
      <TimelineSection />
    </PageTransition>
  );
}
