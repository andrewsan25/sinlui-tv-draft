# Sinlui TV — Official Profile Website

Website profil resmi untuk **Sinlui TV**, organisasi dokumentasi, videografi, fotografi, dan broadcasting sekolah. Dibangun dengan Next.js (App Router), TypeScript, Tailwind CSS, Lenis, GSAP (ScrollTrigger), dan Framer Motion, serta siap dideploy ke Vercel.

## Struktur Folder

```text
src/
├── app/
│   ├── globals.css            # Design tokens & gaya global Tailwind v4 + Lenis
│   ├── layout.tsx             # Root layout, Google Fonts, Navbar, Footer, SmoothScrollProvider
│   ├── not-found.tsx          # Halaman 404 bertema broadcast
│   ├── page.tsx               # Redirect otomatis dari / ke /home
│   ├── home/page.tsx          # Halaman Beranda (/home)
│   ├── about/page.tsx         # Halaman Tentang Sinlui TV (/about)
│   └── kepengurusan/page.tsx  # Halaman Susunan Kepengurusan (/kepengurusan)
├── components/
│   ├── about/                 # DivisionsShowcase & TimelineSection (GSAP ScrollTrigger)
│   ├── home/                  # HeroSection, StatsSection, KineticShowcaseSection, DivisionBentoSection, HomeCtaSection
│   ├── kepengurusan/          # OrgDirectory & MemberCard
│   ├── layout/                # LogoMark, Navbar, Footer, PageTransition
│   ├── providers/             # SmoothScrollProvider (Lenis + GSAP ticker sync)
│   └── shared/                # DivisionIcon
├── data/                      # Data terpisah agar mudah diperbarui tiap periode
│   ├── site.ts                # Identitas situs, statistik & mode viewfinder hero
│   ├── highlights.ts          # Showcase karya, testimoni & catatan BTS
│   ├── about.ts               # Profil, visi-misi, ruang lingkup divisi & timeline
│   └── kepengurusan.ts        # Data BPH, koordinator & anggota per divisi
└── lib/
    └── utils.ts               # Helper utility cn()
```

## Menjalankan Proyek Secara Lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` (otomatis diarahkan ke `http://localhost:3000/home`).

## Build Produksi & Deploy ke Vercel

```bash
npm run build
npm run start
```
