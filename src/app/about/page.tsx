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
      {/* Serene Luxury Masthead + Panoramic Frame */}
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
            <span className="font-semibold text-[#F46F15]">About</span>
          </nav>

          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
                Tentang Sinlui TV
              </p>
              <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.06] tracking-[-0.035em] text-[#0F2B5B] sm:text-6xl">
                Merangkai memori sekolah dengan sentuhan{" "}
                <span className="font-serif italic font-normal text-[#F46F15]">
                  sinema.
                </span>
              </h1>
            </div>

            <div className="lg:col-span-4">
              <p className="text-sm leading-relaxed text-slate-500 sm:text-base">
                {ABOUT_PROFILE.lead}
              </p>
            </div>
          </div>

          {/* Sculpted Panoramic Studio Image */}
          <div className="relative mt-12 overflow-hidden rounded-[32px] border border-[#0F2B5B]/[0.08] bg-slate-100 shadow-[0_32px_90px_-24px_rgba(15,43,91,0.16)] sm:mt-14">
            <div className="relative aspect-[16/9] max-h-[480px] w-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-broadcast.jpg"
                alt="Perangkat Produksi Sinlui TV di Auditorium Sekolah"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full border border-white/60 bg-white/88 px-4 py-2 text-xs font-semibold text-[#0F2B5B] shadow-sm backdrop-blur-xl">
                  Studio Multimedia · Sinlui TV
                </span>
                <span className="hidden rounded-full border border-white/60 bg-white/88 px-4 py-2 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-xl sm:inline-block">
                  Dokumentasi · Videografi · Fotografi · Broadcasting
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profil & Studio Dossier */}
      <section className="bg-white py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
            <div className="space-y-6 lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F46F15]">
                Latar Belakang &amp; Peran
              </p>

              <blockquote className="font-serif text-2xl italic leading-snug text-[#0F2B5B] sm:text-3xl">
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

            {/* Soft Porcelain Studio Dossier Card */}
            <div className="rounded-[28px] border border-[#0F2B5B]/[0.06] bg-[#F6F8FC] p-7 sm:p-8 lg:col-span-5">
              <div className="flex items-center justify-between pb-5">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[#0F2B5B]">
                  Profil Singkat Organisasi
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logo-sinlui-mark.png"
                  alt="Emblem Sinlui TV"
                  className="h-10 w-10 object-contain mix-blend-multiply"
                />
              </div>

              <dl className="space-y-4 border-t border-[#0F2B5B]/[0.07] pt-5">
                {ORG_FACTS.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-xs font-medium text-slate-400">
                      {fact.label}
                    </dt>
                    <dd className="mt-0.5 text-sm font-semibold text-[#0F2B5B]">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-7 border-t border-[#0F2B5B]/[0.07] pt-5">
                <Link
                  href="/kepengurusan"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#0F2B5B] px-5 py-2.5 text-xs font-semibold text-white transition-colors duration-300 hover:bg-[#F46F15]"
                >
                  <span>Lihat susunan pengurus</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="bg-white py-14 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2563EB]">
              Arah &amp; Komitmen
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.03em] text-[#0F2B5B] sm:text-5xl">
              Visi &amp;{" "}
              <span className="font-serif italic font-normal text-[#F46F15]">
                Misi Strategis.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Vision Monolith Card */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-[32px] bg-[#0F2B5B] p-8 text-white shadow-[0_28px_70px_-20px_rgba(15,43,91,0.3)] sm:p-10 lg:col-span-5">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.35),transparent_60%)]"
              />
              <div className="relative z-10">
                <span className="inline-flex rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-semibold text-orange-300">
                  Visi Kami
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-white sm:text-3xl">
                  {VISION.title}
                </h3>
                <p className="mt-4 font-serif text-xl italic leading-relaxed text-blue-100/95 sm:text-2xl">
                  &ldquo;{VISION.statement}&rdquo;
                </p>
              </div>

              <div className="relative z-10 mt-10 border-t border-white/15 pt-5 text-xs text-blue-200/80">
                Sinlui TV · Unit Dokumentasi &amp; Siaran Sekolah
              </div>
            </div>

            {/* 4 Silky White Mission Cards */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
              {MISSIONS.map((mission) => (
                <article
                  key={mission.number}
                  className="flex flex-col justify-between rounded-[24px] border border-[#0F2B5B]/[0.07] bg-white p-6 shadow-luxury transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-luxury-hover sm:p-7"
                >
                  <div>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 text-xs font-semibold text-[#F46F15]">
                      {mission.number}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold text-[#0F2B5B]">
                      {mission.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
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
