export interface NavLinkItem {
  label: string;
  href: string;
  description: string;
}

export interface SocialLinkItem {
  name: "Instagram" | "YouTube" | "TikTok";
  handle: string;
  href: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export interface HeroReelMode {
  id: "broadcast" | "cinema" | "photo";
  label: string;
  shortTag: string;
  eventTitle: string;
  location: string;
  statusLabel: string;
  resolution: string;
  fps: string;
  iso: string;
  aperture: string;
  lens: string;
  accent: "orange" | "blue";
  storyboardNotes: string[];
}

export const SITE_CONFIG = {
  name: "Sinlui TV",
  tagline: "Lensa Resmi & Siaran Kreatif Sekolah",
  subtitle: "Dokumentasi · Videografi · Fotografi · Broadcasting",
  period: "2026/2027",
  schoolName: "SMA Katolik St. Louis 1 Surabaya",
  description:
    "Organisasi dokumentasi, videografi, fotografi, dan broadcasting resmi sekolah yang mengabadikan setiap momen, prestasi, dan energi panggung dengan standar produksi sinematik.",
  email: "sinluitv@sinlui.sch.id",
  location: "Studio Multimedia · Lantai 2 Gedung Utama",
  copyright: "© 2026 Sinlui TV. Seluruh hak cipta dilindungi.",
};

export const NAV_LINKS: NavLinkItem[] = [
  {
    label: "Home",
    href: "/home",
    description: "Beranda & highlight produksi",
  },
  {
    label: "About",
    href: "/about",
    description: "Profil, visi misi & divisi kerja",
  },
  {
    label: "Kepengurusan",
    href: "/kepengurusan",
    description: "Struktur BPH & anggota aktif",
  },
];

export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    name: "Instagram",
    handle: "@sinluitv",
    href: "https://instagram.com",
  },
  {
    name: "YouTube",
    handle: "Sinlui TV Official",
    href: "https://youtube.com",
  },
  {
    name: "TikTok",
    handle: "@sinluitv.official",
    href: "https://tiktok.com",
  },
];

export const HOME_STATS: StatItem[] = [
  {
    id: "events",
    value: 150,
    suffix: "+",
    label: "Event Terliput",
    sublabel: "Akademik, seni, olahraga & perayaan besar",
  },
  {
    id: "hours",
    value: 1200,
    suffix: "+",
    label: "Jam Dokumentasi & Siaran",
    sublabel: "Produksi arsip, aftermovie & live multicam",
  },
  {
    id: "members",
    value: 48,
    suffix: "",
    label: "Anggota & Kru Aktif",
    sublabel: "BPH dan personel lintas 5 divisi produksi",
  },
  {
    id: "divisions",
    value: 5,
    suffix: "",
    label: "Divisi Produksi",
    sublabel: "Fotografi, Videografi, Editing, Broadcast & Desain",
  },
];

export const HERO_REEL_MODES: HeroReelMode[] = [
  {
    id: "broadcast",
    label: "Broadcast Live",
    shortTag: "LIVE PGM",
    eventTitle: "Misa Syukur & Dies Natalis Live Multicam",
    location: "Aula Utama Sekolah",
    statusLabel: "ON AIR · 4 CAM SYNC",
    resolution: "1080p60",
    fps: "60 FPS",
    iso: "ISO 800",
    aperture: "f/2.8",
    lens: "70-200mm GM",
    accent: "orange",
    storyboardNotes: [
      "Switchboard 4-angle real-time dengan lower-third otomatis",
      "Direct audio feed dari mixer panggung & ambient mic",
      "Streaming redundan YouTube dengan latency rendah",
    ],
  },
  {
    id: "cinema",
    label: "Cinema Aftermovie",
    shortTag: "4K LOG",
    eventTitle: "Aftermovie Sinlui Fest & Malam Puncak",
    location: "Lapangan & Panggung Utama",
    statusLabel: "REC · S-LOG3",
    resolution: "4K UHD",
    fps: "120 FPS",
    iso: "ISO 640",
    aperture: "f/1.8",
    lens: "24-70mm GM II",
    accent: "blue",
    storyboardNotes: [
      "Gimbal tracking shot mengikuti koreografi panggung",
      "Sound design dinamis dipadukan sorakan penonton",
      "Same-Day Edit (SDE) tayang sebelum acara ditutup",
    ],
  },
  {
    id: "photo",
    label: "Photo Press",
    shortTag: "RAW BURST",
    eventTitle: "Liputan DBL & Tribun Suporter",
    location: "DBL Arena Surabaya",
    statusLabel: "PRESS PASS · 20 FPS",
    resolution: "33 MP RAW",
    fps: "1/2000s",
    iso: "ISO 1600",
    aperture: "f/2.8",
    lens: "35mm & 70-200mm",
    accent: "orange",
    storyboardNotes: [
      "Liputan sisi lapangan & ekspresi koreo tribun secara real-time",
      "Seleksi cepat & pengiriman galeri instan untuk publikasi OSIS",
      "Arsip foto resolusi tinggi untuk majalah tahunan sekolah",
    ],
  },
];
