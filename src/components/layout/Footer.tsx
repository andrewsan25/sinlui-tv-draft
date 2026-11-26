import Link from "next/link";
import { ArrowUpRight, Instagram, Mail, MapPin, Youtube } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG, SOCIAL_LINKS } from "@/data/site";
import { LogoMark } from "./LogoMark";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-white">
      <div
        aria-hidden="true"
        className="h-[2px] w-full bg-gradient-to-r from-[#0F2B5B] via-[#2563EB] to-[#F97316]"
      />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand Identity */}
          <div className="md:col-span-5">
            <LogoMark showSubtext />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
              {SITE_CONFIG.description}
            </p>
            <div className="mt-5 space-y-2 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#2563EB]" />
                <span>
                  {SITE_CONFIG.schoolName} · {SITE_CONFIG.location}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-[#F97316]" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="font-medium text-[#0F2B5B] transition-colors hover:text-[#F97316]"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#0F2B5B]">
              Navigasi Halaman
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-[#0F2B5B]"
                  >
                    <span className="h-1 w-1 rounded-full bg-slate-300 transition-colors group-hover:bg-[#F97316]" />
                    <span>{link.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100 group-hover:text-[#F97316]" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/about#divisi"
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-[#0F2B5B]"
                >
                  <span className="h-1 w-1 rounded-full bg-slate-300 transition-colors group-hover:bg-[#2563EB]" />
                  <span>Divisi Produksi</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100 group-hover:text-[#2563EB]" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Channels */}
          <div className="md:col-span-4">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#0F2B5B]">
              Kanal Resmi &amp; Media Sosial
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-slate-500">
              Ikuti rilisan aftermovie, galeri foto liputan, dan siaran langsung
              kegiatan sekolah melalui kanal resmi kami.
            </p>
            <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3 md:grid-cols-1">
              {SOCIAL_LINKS.map((item) => {
                const Icon =
                  item.name === "Instagram"
                    ? Instagram
                    : item.name === "YouTube"
                      ? Youtube
                      : TikTokIcon;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/60 px-3.5 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#F97316]/60 hover:bg-white hover:shadow-sm"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#0F2B5B] transition-colors group-hover:border-orange-200 group-hover:text-[#F97316]">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold text-[#0F2B5B]">
                          {item.name}
                        </p>
                        <p className="text-[11px] text-slate-500">
                          {item.handle}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-[#F97316]" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-slate-200/80 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>{SITE_CONFIG.copyright}</p>
          <p className="font-mono text-[11px] text-slate-400">
            Organisasi Dokumentasi &amp; Broadcasting Sekolah · Periode{" "}
            {SITE_CONFIG.period}
          </p>
        </div>
      </div>
    </footer>
  );
}
