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
    <footer className="border-t border-[#0F2B5B]/[0.06] bg-[#F6F8FC] pb-10 pt-16 sm:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Serene Editorial Statement */}
        <div className="flex flex-col justify-between gap-8 pb-14 lg:flex-row lg:items-end">
          <div className="max-w-lg">
            <LogoMark size="md" />
            <p className="mt-5 font-display text-2xl font-semibold leading-snug tracking-tight text-[#0F2B5B] sm:text-3xl">
              Mengabadikan setiap cerita sekolah dalam{" "}
              <span className="font-serif italic font-normal text-[#2563EB]">
                bingkai sinematik.
              </span>
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
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
                  className="group inline-flex items-center gap-2.5 rounded-full border border-[#0F2B5B]/[0.08] bg-white px-4 py-2.5 text-xs font-semibold text-[#0F2B5B] shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F46F15]/40 hover:shadow-md"
                >
                  <Icon className="h-4 w-4 text-[#F46F15]" />
                  <span>{item.name}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#F46F15]" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Open Breathable 12-Column Directory */}
        <div className="grid grid-cols-1 gap-10 border-t border-[#0F2B5B]/[0.07] py-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
              Tentang Studio
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
              {SITE_CONFIG.description}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
              Navigasi
            </p>
            <ul className="mt-3.5 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0F2B5B] transition-colors hover:text-[#F46F15]"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/about#divisi"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0F2B5B] transition-colors hover:text-[#2563EB]"
                >
                  <span>Ruang Lingkup Divisi</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
              Kontak &amp; Lokasi
            </p>
            <div className="mt-3.5 space-y-3 text-sm text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" />
                <span>
                  {SITE_CONFIG.schoolName} · {SITE_CONFIG.location}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[#F46F15]" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="font-medium text-[#0F2B5B] transition-colors hover:text-[#F46F15]"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Colophon */}
        <div className="flex flex-col items-start justify-between gap-2 border-t border-[#0F2B5B]/[0.07] pt-8 text-xs text-slate-400 sm:flex-row sm:items-center">
          <span>{SITE_CONFIG.copyright}</span>
          <span>
            Unit Dokumentasi &amp; Penyiaran Sekolah · Periode{" "}
            {SITE_CONFIG.period}
          </span>
        </div>
      </div>
    </footer>
  );
}
