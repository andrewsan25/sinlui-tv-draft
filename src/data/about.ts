export interface OrgFact {
  label: string;
  value: string;
}

export interface MissionItem {
  number: string;
  title: string;
  description: string;
}

export type DivisionIconKey = "camera" | "video" | "scissors" | "radio" | "palette";

export interface DivisionDetail {
  id: string;
  name: string;
  shortName: string;
  iconKey: DivisionIconKey;
  tagline: string;
  description: string;
  deliverables: string[];
  tools: string[];
  accent: "orange" | "blue";
  bentoSpan: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  highlightTag: string;
}

export const ABOUT_PROFILE = {
  eyebrow: "TENTANG SINLUI TV",
  headline: "Lebih dari Sekadar Dokumentasi—Kami Merangkai Memori Sekolah Menjadi Karya Visual.",
  lead: "Sinlui TV adalah organisasi resmi di bidang dokumentasi, fotografi, videografi, pascaproduksi, dan penyiaran (broadcasting) sekolah yang menghubungkan setiap momen berharga di dalam maupun di luar kampus dengan kualitas produksi modern.",
  paragraphs: [
    "Berawal dari kebutuhan mengarsipkan dinamika kegiatan siswa secara terstruktur, Sinlui TV berkembang menjadi unit kreatif berbasis tim produksi. Setiap anggota dilatih tidak hanya mengoperasikan perangkat kamera dan perangkat lunak penyuntingan, tetapi juga memahami storytelling, etika jurnalistik sekolah, dan koordinasi lapangan di bawah tekanan acara langsung.",
    "Dari liputan olahraga antarsekolah, misa dan upacara resmi, hingga konser malam puncak berskala besar, Sinlui TV hadir di garda terdepan dengan sistem kerja lintas divisi yang terintegrasi dari pra-produksi sampai publikasi.",
  ],
};

export const ORG_FACTS: OrgFact[] = [
  {
    label: "Didirikan",
    value: "2019 · Unit Media & Penyiaran Resmi",
  },
  {
    label: "Fokus Utama",
    value: "Dokumentasi, Aftermovie & Live Multicam",
  },
  {
    label: "Kanal Resmi",
    value: "YouTube, Instagram, TikTok & Arsip Sekolah",
  },
  {
    label: "Standar Produksi",
    value: "4K Cinema Workflow & 1080p60 Broadcast",
  },
];

export const VISION = {
  title: "Visi Sinlui TV",
  statement:
    "Menjadi pusat dokumentasi dan penyiaran sekolah yang inovatif, disiplin, dan berstandar sinematik—mengabadikan setiap langkah generasi siswa dengan karya visual yang jujur, energik, dan membanggakan.",
};

export const MISSIONS: MissionItem[] = [
  {
    number: "01",
    title: "Standar Produksi Presisi",
    description:
      "Menghadirkan dokumentasi foto, video, dan siaran langsung yang konsisten dalam ketajaman visual, kejernihan audio, dan ketepatan waktu rilis.",
  },
  {
    number: "02",
    title: "Sinergi Lintas Divisi",
    description:
      "Membangun alur kerja terpadu mulai dari pra-produksi, eksekusi lapangan, penyuntingan, hingga publikasi grafis bersama seluruh divisi.",
  },
  {
    number: "03",
    title: "Kaderisasi Talenta Kreatif",
    description:
      "Membina minat dan keterampilan siswa dalam fotografi, sinematografi, editing, broadcasting, dan manajemen produksi melalui proyek nyata.",
  },
  {
    number: "04",
    title: "Arsip & Wajah Digital Sekolah",
    description:
      "Menjaga rekam jejak sejarah sekolah dalam arsip multimedia yang rapi sekaligus menjadi jendela informasi bagi siswa, orang tua, dan alumni.",
  },
];

export const DIVISIONS: DivisionDetail[] = [
  {
    id: "fotografi",
    name: "Fotografi",
    shortName: "Fotografi",
    iconKey: "camera",
    tagline: "Menangkap momen sepersekian detik dengan komposisi editorial.",
    description:
      "Bertanggung jawab atas liputan foto resmi seluruh kegiatan sekolah, potret profil, foto panggung, hingga dokumentasi olahraga dengan kurasi warna yang konsisten.",
    deliverables: [
      "Liputan foto acara & upacara resmi sekolah",
      "Sport & stage photography berkecepatan tinggi",
      "Kurasi cepat galeri pers untuk media sosial",
    ],
    tools: ["Sony Alpha Series", "Lightroom Classic", "24-70mm & 70-200mm"],
    accent: "blue",
    bentoSpan: "lg:col-span-5",
  },
  {
    id: "videografi",
    name: "Videografi",
    shortName: "Videografi",
    iconKey: "video",
    tagline: "Merangkai gerakan kamera dan sudut sinematik menjadi narasi hidup.",
    description:
      "Menangani perekaman video lapangan, pengambilan shot dinamis dengan gimbal, wawancara dokumenter, serta pencahayaan dasar untuk kebutuhan konten profil.",
    deliverables: [
      "Footage aftermovie acara besar & ekstrakurikuler",
      "Video dokumenter profil dan liputan berita sekolah",
      "Koordinasi sudut multi-kamera di lapangan",
    ],
    tools: ["Mirrorless 4K Log", "DJI Gimbal", "Wireless Mic & LED"],
    accent: "orange",
    bentoSpan: "lg:col-span-7",
  },
  {
    id: "editing",
    name: "Video Editing",
    shortName: "Editing",
    iconKey: "scissors",
    tagline: "Menyatukan ritme visual, sound design, dan color grading yang memukau.",
    description:
      "Mengolah seluruh materi mentah menjadi karya utuh—mulai dari aftermovie berenergi tinggi, reels vertikal harian, hingga Same-Day Edit yang tayang di akhir acara.",
    deliverables: [
      "Aftermovie sinematik & highlight reel acara",
      "Same-Day Edit (SDE) cepat saat acara berlangsung",
      "Color grading, audio mixing & motion title",
    ],
    tools: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
    accent: "orange",
    bentoSpan: "lg:col-span-4",
  },
  {
    id: "broadcasting",
    name: "Live Broadcasting",
    shortName: "Broadcasting",
    iconKey: "radio",
    tagline: "Menyiarkan acara penting secara langsung dengan kendali multicam stabil.",
    description:
      "Mengelola setup switcher multi-kamera, routing audio panggung, overlay grafis siaran, dan kestabilan jaringan streaming untuk acara sekolah berskala besar.",
    deliverables: [
      "Live streaming YouTube multi-kamera 1080p60",
      "Manajemen audio tally, interkom & switcher meja kontrol",
      "Grafis lower-third, bumper & countdown siaran",
    ],
    tools: ["vMix / OBS Studio", "ATEM Switcher", "Capture Card & Intercom"],
    accent: "blue",
    bentoSpan: "lg:col-span-4",
  },
  {
    id: "desain-publikasi",
    name: "Desain & Publikasi",
    shortName: "Desain & Publikasi",
    iconKey: "palette",
    tagline: "Membingkai karya visual dengan identitas grafis dan strategi rilis yang tajam.",
    description:
      "Merancang identitas visual setiap rilisan Sinlui TV—dari thumbnail YouTube, poster pengumuman liputan, carousel Instagram, hingga penjadwalan kanal resmi.",
    deliverables: [
      "Desain thumbnail, bumper grafis & poster liputan",
      "Copywriting caption & manajemen kalender konten",
      "Identitas visual konsisten untuk kanal Sinlui TV",
    ],
    tools: ["Figma", "Illustrator / Photoshop", "Content Planner"],
    accent: "blue",
    bentoSpan: "lg:col-span-4",
  },
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: "2019",
    title: "Cikal Bakal Tim Dokumentasi",
    subtitle: "Awal Langkah & Pengarsipan Acara Sekolah",
    description:
      "Sekelompok siswa pecinta kamera mulai membentuk tim dokumentasi terkoordinasi untuk merekam kegiatan OSIS, upacara, dan perayaan tahunan sekolah.",
    highlightTag: "Fondasi Awal",
  },
  {
    year: "2021",
    title: "Transformasi Live Streaming",
    subtitle: "Menjembatani Acara Sekolah Secara Daring",
    description:
      "Mengadopsi sistem penyiaran langsung berbasis perangkat lunak agar misa sekolah, seminar, dan pelantikan tetap dapat diikuti seluruh komunitas dari rumah.",
    highlightTag: "Era Siaran",
  },
  {
    year: "2023",
    title: "Sistem Produksi Multicam HD",
    subtitle: "Standarisasi Switcher & Alur Pascaproduksi",
    description:
      "Memperkenalkan setup multi-kamera dengan komunikasi kru interkom serta alur warna standar untuk menghasilkan aftermovie dan siaran yang lebih rapi.",
    highlightTag: "Upgrade Teknis",
  },
  {
    year: "2025",
    title: "Pipeline 5 Divisi Terintegrasi",
    subtitle: "Kolaborasi End-to-End & Same-Day Edit",
    description:
      "Menata struktur lima divisi spesialis sehingga liputan besar seperti Dies Natalis dan kompetisi olahraga mampu merilis highlight di hari yang sama.",
    highlightTag: "Workflow Modern",
  },
  {
    year: "2026/2027",
    title: "Era Broadcasting Generasi Baru",
    subtitle: "Karya Sinematik, Arsip Digital & Wajah Resmi Sinlui TV",
    description:
      "Memasuki periode kepengurusan 2026/2027 dengan identitas visual baru, portal profil resmi, dan standar karya yang semakin dekat dengan industri kreatif.",
    highlightTag: "Periode Aktif",
  },
];
