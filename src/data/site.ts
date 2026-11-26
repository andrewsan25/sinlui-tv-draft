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
  index: string;
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export interface HeroReelMode {
  id: "broadcast" | "cinema" | "photo";
  index: string;
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
  image: string;
  accent: "orange" | "blue";
  storyboardNotes: string[];
}

export const SITE_CONFIG = {
  name: "Sinlui TV",
  tagline: "Unit Dokumentasi & Penyiaran Resmi",
  subtitle: "Dokumentasi · Videografi · Fotografi · Broadcasting",
  period: "2026/2027",
  schoolName: "SMA Katolik St. Louis 1 Surabaya",
  description:
    "Unit produksi multimedia resmi sekolah untuk dokumentasi editorial, sinematografi acara, foto jurnalistik, dan penyiaran langsung multi-kamera.",
  email: "sinluitv@sinlui.sch.id",
  location: "Studio Multimedia · Lantai 2 Gedung Utama",
  copyright: "© 2026 Sinlui TV. Seluruh hak cipta dilindungi.",
};

export const NAV_LINKS: NavLinkItem[] = [
  {
    label: "Home",
    href: "/home",
    description: "Beranda & arsip produksi",
  },
  {
    label: "About",
    href: "/about",
    description: "Profil studio, visi misi & lima divisi",
  },
  {
    label: "Kepengurusan",
    href: "/kepengurusan",
    description: "Susunan BPH & kru aktif",
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
    index: "01",
    value: 150,
    suffix: "+",
    label: "Event Terliput",
    sublabel: "Agenda akademik, seni, olahraga & perayaan tahunan",
  },
  {
    id: "hours",
    index: "02",
    value: 1200,
    suffix: "+",
    label: "Jam Produksi",
    sublabel: "Arsip kamera cinema, pascaproduksi & siaran langsung",
  },
  {
    id: "members",
    index: "03",
    value: 48,
    suffix: "",
    label: "Kru Aktif",
    sublabel: "Badan Pengurus Harian dan personel spesialis lapangan",
  },
  {
    id: "divisions",
    index: "04",
    value: 5,
    suffix: "",
    label: "Divisi Terpadu",
    sublabel: "Fotografi, Videografi, Editing, Broadcast & Desain",
  },
];

export const HERO_REEL_MODES: HeroReelMode[] = [
  {
    id: "broadcast",
    index: "01",
    label: "Broadcast Live",
    shortTag: "PGM · 4 CAM",
    eventTitle: "Misa Syukur & Dies Natalis Multicam",
    location: "Aula Utama · Surabaya",
    statusLabel: "ON AIR",
    resolution: "1080p60",
    fps: "60 FPS",
    iso: "ISO 800",
    aperture: "f/2.8",
    lens: "70-200mm GM",
    image: "/images/hero-broadcast.jpg",
    accent: "orange",
    storyboardNotes: [
      "Switching 4 sudut kamera real-time dengan lower-third otomatis",
      "Direct audio feed dari mixer panggung & mikrofon ruang",
      "Siaran redundan YouTube dengan pemantauan bitrate terpusat",
    ],
  },
  {
    id: "cinema",
    index: "02",
    label: "Cinema Aftermovie",
    shortTag: "4K · S-LOG3",
    eventTitle: "Aftermovie Sinlui Fest & Malam Puncak",
    location: "Panggung Utama Sekolah",
    statusLabel: "REC 4K",
    resolution: "4K UHD",
    fps: "120 FPS",
    iso: "ISO 640",
    aperture: "f/1.8",
    lens: "24-70mm GM II",
    image: "/images/work-stage.jpg",
    accent: "blue",
    storyboardNotes: [
      "Gimbal tracking shot mengikuti koreografi dan tata lampu panggung",
      "Sound design ritmis dipadukan dengan atmosfer sorakan audiens",
      "Same-Day Edit (SDE) tayang sebelum rangkaian acara ditutup",
    ],
  },
  {
    id: "photo",
    index: "03",
    label: "Photo Press",
    shortTag: "RAW · 20 FPS",
    eventTitle: "Liputan DBL & Tribun Suporter",
    location: "DBL Arena Surabaya",
    statusLabel: "PRESS PASS",
    resolution: "33 MP RAW",
    fps: "1/2000s",
    iso: "ISO 1600",
    aperture: "f/2.8",
    lens: "35mm & 70-200mm",
    image: "/images/work-arena.jpg",
    accent: "orange",
    storyboardNotes: [
      "Liputan sisi lapangan & koreografi tribun berkecepatan tinggi",
      "Seleksi kurasi instan untuk kanal media sosial sekolah",
      "Arsip resolusi penuh untuk publikasi pers dan majalah tahunan",
    ],
  },
];
