export interface CoverageHighlight {
  id: string;
  title: string;
  category: "Aftermovie" | "Live Broadcast" | "Photo Essay" | "Dokumenter";
  year: string;
  summary: string;
  detailNote: string;
  specs: string;
  durationOrCount: string;
  accent: "orange" | "blue";
  image: string;
  visualMode: "photo" | "multiview" | "letterbox" | "colorgrade";
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  event: string;
  initials: string;
  accent: "orange" | "blue";
}

export interface BtsMoment {
  id: string;
  title: string;
  division: string;
  caption: string;
  gearTag: string;
  timecode: string;
  accent: "orange" | "blue";
}

export const COVERAGE_HIGHLIGHTS: CoverageHighlight[] = [
  {
    id: "dies-natalis-2026",
    title: "Dies Natalis & Pensi Sinlui 2026",
    category: "Aftermovie",
    year: "2026",
    summary:
      "Energi panggung utama, transisi tata cahaya konser, dan atmosfer ribuan siswa dalam satu rilisan aftermovie sinematik.",
    detailNote: "Dirilis kurang dari 24 jam pasca-acara menggunakan 3 unit cinema.",
    specs: "4K · 60fps · 3 Cam",
    durationOrCount: "04:32",
    accent: "orange",
    image: "/images/work-stage.jpg",
    visualMode: "photo",
  },
  {
    id: "dbl-surabaya-tribun",
    title: "DBL Surabaya & Tribun Suporter",
    category: "Photo Essay",
    year: "2026",
    summary:
      "Foto aksi lapangan berkecepatan tinggi dan koreografi tribun yang merekam tensi pertandingan hingga selebrasi akhir.",
    detailNote: "420+ frame terkurasi untuk arsip pers dan publikasi sekolah.",
    specs: "RAW · 20fps · Dual Body",
    durationOrCount: "120+ Foto",
    accent: "blue",
    image: "/images/work-arena.jpg",
    visualMode: "photo",
  },
  {
    id: "misa-syukur-multicam",
    title: "Live Multicam Misa Syukur Sekolah",
    category: "Live Broadcast",
    year: "2026",
    summary:
      "Siaran langsung multi-kamera dengan integrasi audio mixer aula, grafis liturgi real-time, dan kendali sinyal terpusat.",
    detailNote: "Disaksikan serentak oleh orang tua, alumni, dan seluruh kelas.",
    specs: "1080p60 · 4 Cam Switcher",
    durationOrCount: "02:15 Jam",
    accent: "orange",
    image: "/images/hero-broadcast.jpg",
    visualMode: "multiview",
  },
  {
    id: "mpls-orientasi",
    title: "Aftermovie MPLS & Masa Orientasi",
    category: "Aftermovie",
    year: "2026",
    summary:
      "Merangkum hari pertama siswa baru dari sesi pengenalan kampus hingga flashmob penutupan yang penuh kehangatan.",
    detailNote: "Tayang langsung pada sesi penutupan MPLS di hadapan angkatan baru.",
    specs: "4K · Gimbal · S-Log3",
    durationOrCount: "03:45",
    accent: "blue",
    image: "/images/hero-broadcast.jpg",
    visualMode: "photo",
  },
  {
    id: "sinlui-cup-finals",
    title: "Sinlui Cup Finals Highlight Reel",
    category: "Aftermovie",
    year: "2025",
    summary:
      "Cuplikan ritmis cabang basket, futsal, dan e-sports dengan sound design presisi serta slow-motion 120fps.",
    detailNote: "Menjadi rilisan highlight dengan jangkauan tertinggi sepanjang semester.",
    specs: "4K · 120fps · Telephoto",
    durationOrCount: "02:58",
    accent: "orange",
    image: "/images/work-arena.jpg",
    visualMode: "letterbox",
  },
  {
    id: "dokumenter-guru-alumni",
    title: "Dokumenter Profil Guru & Alumni",
    category: "Dokumenter",
    year: "2025",
    summary:
      "Serial wawancara mendalam mengenai dedikasi pendidik dan jejak alumni dengan tata cahaya studio yang bersih.",
    detailNote: "Diproduksi sebagai serial berkala untuk kanal YouTube resmi sekolah.",
    specs: "4K · 24fps · 3-Point Light",
    durationOrCount: "08:14",
    accent: "blue",
    image: "/images/work-stage.jpg",
    visualMode: "colorgrade",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "testi-pensi",
    quote:
      "Tim Sinlui TV selalu sigap dari gladi bersih sampai closing. Same-day edit yang ditayangkan langsung bikin satu aula merinding.",
    author: "Gabriella Tan",
    role: "Ketua Panitia Pensi 2026",
    event: "Dies Natalis",
    initials: "GT",
    accent: "orange",
  },
  {
    id: "testi-osis",
    quote:
      "Koordinasi kru sangat presisi. Mereka membaca alur rundown dengan baik sehingga tidak ada satu pun momen krusial yang terlewat.",
    author: "Andreas Wijaya, S.Pd.",
    role: "Pembina OSIS",
    event: "Pelantikan OSIS",
    initials: "AW",
    accent: "blue",
  },
  {
    id: "testi-kesiswaan",
    quote:
      "Kualitas siaran langsung misa dan upacara meningkat jauh. Orang tua di rumah bisa mengikuti kegiatan dengan visual dan audio yang jernih.",
    author: "Maria Helena, M.Pd.",
    role: "Wakasek Kesiswaan",
    event: "Live Multicam",
    initials: "MH",
    accent: "orange",
  },
  {
    id: "testi-basket",
    quote:
      "Foto pertandingan dan highlight reel Sinlui TV selalu memacu semangat tim sebelum semifinal. Komposisi dan warnanya terasa kelas siaran pro.",
    author: "Kevin Pratama",
    role: "Kapten Tim Basket Putra",
    event: "DBL & Sinlui Cup",
    initials: "KP",
    accent: "blue",
  },
  {
    id: "testi-mpls",
    quote:
      "Sejak hari pertama MPLS hingga penutupan, galeri foto sudah siap dipublikasikan di sore hari. Alur kerja mereka sangat tertata.",
    author: "Clarita Gunawan",
    role: "Koordinator Sie Acara MPLS",
    event: "Orientasi Siswa",
    initials: "CG",
    accent: "orange",
  },
  {
    id: "testi-padus",
    quote:
      "Rekaman audio dan video konser paduan suara kami terdengar bersih dan utuh. Arsip mereka sangat membantu portofolio kompetisi kami.",
    author: "Daniel Hartono",
    role: "Ketua Paduan Suara",
    event: "Konser Tahunan",
    initials: "DH",
    accent: "blue",
  },
];

export const BTS_MOMENTS: BtsMoment[] = [
  {
    id: "bts-control-room",
    title: "Switchboard Control Room",
    division: "Broadcasting",
    caption:
      "Pemantauan 4 kamera simultan, audio tally, dan lower-third dari meja kontrol belakang panggung.",
    gearTag: "ATEM · vMix",
    timecode: "TC 08:42:15",
    accent: "orange",
  },
  {
    id: "bts-gimbal-track",
    title: "Gimbal Tracking Shot",
    division: "Videografi",
    caption:
      "Pergerakan kamera kontinu mengikuti perpindahan formasi penampil di atas panggung utama.",
    gearTag: "RS4 · 24mm f/1.4",
    timecode: "TC 19:14:03",
    accent: "blue",
  },
  {
    id: "bts-color-mix",
    title: "Color Grading & Sound Mix",
    division: "Editing",
    caption:
      "Penyelarasan profil warna antar kamera dan mixing ritmis agar alur aftermovie menyatu.",
    gearTag: "DaVinci · Premiere",
    timecode: "TC 22:05:49",
    accent: "orange",
  },
  {
    id: "bts-press-pit",
    title: "Press Pit Fotografi Panggung",
    division: "Fotografi",
    caption:
      "Sudut rendah di area depan panggung untuk menangkap ekspresi dan dimensi tata cahaya.",
    gearTag: "70-200mm f/2.8",
    timecode: "TC 20:31:11",
    accent: "blue",
  },
  {
    id: "bts-comms-check",
    title: "Pre-Show Audio & Comms",
    division: "Broadcasting",
    caption:
      "Uji interkom operator kamera dan stabilitas uplink sebelum hitung mundur siaran dimulai.",
    gearTag: "Intercom · 10Mbps",
    timecode: "TC 06:55:00",
    accent: "orange",
  },
  {
    id: "bts-sde-desk",
    title: "Same-Day Edit Desk",
    division: "Editing",
    caption:
      "Ingest kartu memori langsung di sela acara agar highlight bisa diputar saat penutupan.",
    gearTag: "NVMe · SDE Rig",
    timecode: "TC 16:48:27",
    accent: "blue",
  },
];
