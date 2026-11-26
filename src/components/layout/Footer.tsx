import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG, SOCIAL_LINKS } from "@/data/site";
import { LogoMark } from "./LogoMark";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Masthead Band */}
        <div className="flex flex-col justify-between gap-6 border-b border-slate-200 py-12 sm:flex-row sm:items-end sm:py-16">
          <div>
            <LogoMark size="md" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
              {SITE_CONFIG.description}
            </p>
          </div>

          <div className="sm:text-right">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-400">
              LOKASI STUDIO
            </p>
            <p className="mt-1 text-sm font-medium text-[#0F2B5B]">
              {SITE_CONFIG.schoolName}
            </p>
            <p className="text-xs text-slate-500">{SITE_CONFIG.location}</p>
          </div>
        </div>

        {/* Hairline 12-Column Directory */}
        <div className="grid grid-cols-1 divide-y divide-slate-200 md:grid-cols-12 md:divide-x md:divide-y-0">
          {/* Contact Column */}
          <div className="py-8 md:col-span-4 md:pr-8">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              01 / KOORDINASI LIPUTAN
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Untuk kebutuhan dokumentasi acara resmi atau kolaborasi media sekolah:
            </p>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="mt-3 inline-flex items-center gap-1.5 border-b border-[#0F2B5B]/30 pb-0.5 font-display text-base font-bold text-[#0F2B5B] transition-colors hover:border-[#FF5A00] hover:text-[#FF5A00]"
            >
              <span>{SITE_CONFIG.email}</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Navigation Index */}
          <div className="py-8 md:col-span-4 md:px-8">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              02 / INDEKS HALAMAN
            </p>
            <ul className="mt-3 divide-y divide-slate-100">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between py-2.5 text-sm font-medium text-[#0F2B5B] transition-colors hover:text-[#FF5A00]"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#FF5A00]" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/about#divisi"
                  className="group flex items-center justify-between py-2.5 text-sm font-medium text-[#0F2B5B] transition-colors hover:text-[#2563EB]"
                >
                  <span>Ruang Lingkup Divisi</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#2563EB]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Channels */}
          <div className="py-8 md:col-span-4 md:pl-8">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              03 / KANAL RESMI
            </p>
            <ul className="mt-3 divide-y divide-slate-100">
              {SOCIAL_LINKS.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between py-2.5 transition-colors"
                  >
                    <div>
                      <span className="block text-sm font-medium text-[#0F2B5B] group-hover:text-[#FF5A00]">
                        {item.name}
                      </span>
                      <span className="block font-mono text-[11px] text-slate-400">
                        {item.handle}
                      </span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#FF5A00]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Colophon Bottom Bar */}
        <div className="flex flex-col items-start justify-between gap-2 border-t border-slate-200 py-6 font-mono text-[11px] text-slate-400 sm:flex-row sm:items-center">
          <span>{SITE_CONFIG.copyright}</span>
          <span>SINLUI TV · DOKUMENTASI &amp; BROADCASTING · {SITE_CONFIG.period}</span>
        </div>
      </div>
    </footer>
  );
}
