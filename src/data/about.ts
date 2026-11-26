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
  index: string;
  name: string;
  shortName: string;
  iconKey: DivisionIconKey;
  tagline: string;
  description: string;
  deliverables: string[];
  tools: string[];
  image: string;
  previewMode: "photo" | "multiview" | "editorial-grid";
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
  eyebrow: "PROFIL STUDIO & ORGANISASI",
  headline: "Merangkai Memori Sekolah dengan Disiplin Studio Siaran.",
  lead: "Sinlui TV adalah organisasi resmi dokumentasi, fotografi, videografi, pascaproduksi, dan penyiaran sekolah yang menghadirkan standar produksi visual modern untuk seluruh kegiatan kampus.",
  pullQuote:
    "Setiap peristiwa di sekolah hanya terjadi satu kali. Tugas kami memastikan energi, emosi, dan detailnya tetap hidup dalam arsip yang presisi.",
  paragraphs: [
    "Berawal dari kebutuhan pengarsipan kegiatan siswa secara terstruktur, Sinlui TV berkembang menjadi unit produksi kreatif lintas bidang. Setiap kru dibekali kemampuan teknis kamera dan penyuntingan sekaligus kepekaan storytelling serta etika dokumentasi lapangan.",
    "Mulai dari liputan kompetisi olahraga, perayaan liturgi dan upacara resmi, hingga konser malam puncak berskala besar, lima divisi kami bekerja dalam satu alur terintegrasi dari pra-produksi hingga publikasi.",
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
    "Menjadi pusat dokumentasi dan penyiaran sekolah yang inovatif, disiplin, dan berstandar sinematik—mengabadikan setiap langkah generasi siswa secara jujur, tajam, dan membanggakan.",
};

export const MISSIONS: MissionItem[] = [
  {
    number: "01",
    title: "Standar Produksi Presisi",
    description:
      "Menghadirkan dokumentasi foto, video, dan siaran langsung yang konsisten dalam ketajaman gambar, kejernihan audio, dan ketepatan rilis.",
  },
  {
    number: "02",
    title: "Sinergi Lintas Divisi",
    description:
      "Menjalankan alur kerja terpadu mulai dari pra-produksi, eksekusi lapangan, penyuntingan, hingga publikasi visual.",
  },
  {
    number: "03",
    title: "Kaderisasi Talenta Kreatif",
    description:
      "Membina minat siswa di bidang fotografi, sinematografi, editing, penyiaran, dan manajemen produksi melalui proyek nyata.",
  },
  {
    number: "04",
    title: "Arsip & Wajah Digital",
    description:
      "Menjaga rekam jejak sejarah sekolah dalam arsip multimedia terkurasi sekaligus menjadi jendela informasi komunitas sekolah.",
  },
];

export const DIVISIONS: DivisionDetail[] = [
  {
    id: "fotografi",
    index: "01",
    name: "Fotografi",
    shortName: "Fotografi",
    iconKey: "camera",
    tagline: "Menangkap momen sepersekian detik dengan komposisi editorial.",
    description:
      "Bertanggung jawab atas liputan foto resmi seluruh agenda sekolah, potret profil, foto panggung, hingga jurnalisme olahraga dengan kurasi warna yang konsisten.",
    deliverables: [
      "Liputan foto acara & upacara resmi sekolah",
      "Sport & stage photography berkecepatan tinggi",
      "Kurasi cepat galeri pers untuk kanal digital",
    ],
    tools: ["Sony Alpha Series", "Lightroom Classic", "70-200mm f/2.8"],
    image: "/images/work-arena.jpg",
    previewMode: "photo",
    accent: "blue",
    bentoSpan: "lg:col-span-5",
  },
  {
    id: "videografi",
    index: "02",
    name: "Videografi",
    shortName: "Videografi",
    iconKey: "video",
    tagline: "Merangkai gerakan kamera dan sudut sinematik menjadi narasi hidup.",
    description:
      "Menangani perekaman video lapangan, pergerakan gimbal dinamis, wawancara dokumenter, serta penataan cahaya dasar untuk konten profil.",
    deliverables: [
      "Footage aftermovie acara besar & ekstrakurikuler",
      "Video dokumenter profil dan liputan berita",
      "Koordinasi sudut multi-kamera di lapangan",
    ],
    tools: ["Mirrorless 4K Log", "DJI Gimbal", "Wireless Mic & LED"],
    image: "/images/hero-broadcast.jpg",
    previewMode: "photo",
    accent: "orange",
    bentoSpan: "lg:col-span-7",
  },
  {
    id: "editing",
    index: "03",
    name: "Video Editing",
    shortName: "Editing",
    iconKey: "scissors",
    tagline: "Menyatukan ritme visual, sound design, dan color grading yang presisi.",
    description:
      "Mengolah materi mentah menjadi rilisan utuh—mulai dari aftermovie berenergi tinggi, reels vertikal, hingga Same-Day Edit yang tayang saat penutupan acara.",
    deliverables: [
      "Aftermovie sinematik & highlight reel acara",
      "Same-Day Edit (SDE) cepat di hari kegiatan",
      "Color grading, audio mixing & motion title",
    ],
    tools: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
    image: "/images/work-stage.jpg",
    previewMode: "photo",
    accent: "orange",
    bentoSpan: "lg:col-span-4",
  },
  {
    id: "broadcasting",
    index: "04",
    name: "Live Broadcasting",
    shortName: "Broadcasting",
    iconKey: "radio",
    tagline: "Menyiarkan acara penting secara langsung dengan kendali multicam stabil.",
    description:
      "Mengelola switcher multi-kamera, routing audio panggung, overlay grafis siaran, dan keandalan streaming untuk acara berskala besar.",
    deliverables: [
      "Live streaming YouTube multi-kamera 1080p60",
      "Manajemen tally, interkom & switcher kontrol",
      "Grafis lower-third, bumper & countdown siaran",
    ],
    tools: ["vMix / OBS Studio", "ATEM Switcher", "Intercom System"],
    image: "/images/hero-broadcast.jpg",
    previewMode: "multiview",
    accent: "blue",
    bentoSpan: "lg:col-span-4",
  },
  {
    id: "desain-publikasi",
    index: "05",
    name: "Desain & Publikasi",
    shortName: "Desain & Publikasi",
    iconKey: "palette",
    tagline: "Membingkai karya visual dengan identitas grafis yang tajam.",
    description:
      "Merancang identitas visual setiap rilisan Sinlui TV—dari thumbnail YouTube, poster liputan, carousel editorial, hingga penjadwalan kanal resmi.",
    deliverables: [
      "Desain thumbnail, bumper grafis & poster liputan",
      "Copywriting & manajemen kalender publikasi",
      "Konsistensi identitas visual kanal Sinlui TV",
    ],
    tools: ["Figma", "Illustrator", "Content Planner"],
    image: "/images/work-stage.jpg",
    previewMode: "editorial-grid",
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
      "Sekelompok siswa membentuk tim dokumentasi terkoordinasi untuk merekam kegiatan OSIS, upacara, dan perayaan tahunan sekolah.",
    highlightTag: "Fondasi Awal",
  },
  {
    year: "2021",
    title: "Transformasi Live Streaming",
    subtitle: "Menjembatani Acara Sekolah Secara Daring",
    description:
      "Mengadopsi sistem penyiaran langsung berbasis perangkat lunak agar misa sekolah, seminar, dan pelantikan tetap dapat diikuti dari rumah.",
    highlightTag: "Era Siaran",
  },
  {
    year: "2023",
    title: "Sistem Produksi Multicam HD",
    subtitle: "Standarisasi Switcher & Alur Pascaproduksi",
    description:
      "Memperkenalkan setup multi-kamera dengan komunikasi interkom kru serta alur warna standar untuk aftermovie dan siaran yang lebih rapi.",
    highlightTag: "Upgrade Teknis",
  },
  {
    year: "2025",
    title: "Pipeline 5 Divisi Terintegrasi",
    subtitle: "Kolaborasi End-to-End & Same-Day Edit",
    description:
      "Menata struktur lima divisi spesialis sehingga liputan besar seperti Dies Natalis dan turnamen olahraga mampu merilis highlight di hari yang sama.",
    highlightTag: "Workflow Modern",
  },
  {
    year: "2026/2027",
    title: "Era Broadcasting Generasi Baru",
    subtitle: "Karya Sinematik, Arsip Digital & Portal Resmi",
    description:
      "Memasuki periode kepengurusan 2026/2027 dengan identitas editorial baru dan standar produksi yang semakin dekat dengan studio profesional.",
    highlightTag: "Periode Aktif",
  },
];
