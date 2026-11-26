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
  visualVariant: "stage" | "arena" | "broadcast" | "orientasi" | "cup" | "profile";
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
      "Rekaman panggung utama, transisi lighting konser, dan atmosfer ribuan siswa dalam satu rilisan aftermovie berenergi tinggi.",
    detailNote: "Dirilis kurang dari 24 jam pasca-acara dengan 3 unit kamera cinema.",
    specs: "4K · 60fps · 3 Cam",
    durationOrCount: "04:32 Min",
    accent: "orange",
    visualVariant: "stage",
  },
  {
    id: "dbl-surabaya-tribun",
    title: "DBL Surabaya & Tribun Supporter",
    category: "Photo Essay",
    year: "2026",
    summary:
      "Rangkaian foto aksi lapangan dan koreografi tribun yang menangkap tensi pertandingan hingga momen selebrasi kemenangan.",
    detailNote: "Terkumpul 420+ frame terpilih untuk arsip pers dan media sosial sekolah.",
    specs: "RAW · 20fps · Dual Body",
    durationOrCount: "120+ Foto",
    accent: "blue",
    visualVariant: "arena",
  },
  {
    id: "misa-syukur-multicam",
    title: "Live Multicam Misa Syukur Sekolah",
    category: "Live Broadcast",
    year: "2026",
    summary:
      "Siaran langsung multi-kamera dengan integrasi audio mixer aula, grafis liturgi real-time, dan pemantauan sinyal terpusat.",
    detailNote: "Disaksikan serentak oleh orang tua, alumni, dan seluruh kelas secara jernih.",
    specs: "1080p60 · 4 Cam Switcher",
    durationOrCount: "02:15 Jam",
    accent: "orange",
    visualVariant: "broadcast",
  },
  {
    id: "mpls-orientasi",
    title: "Aftermovie MPLS & Masa Orientasi",
    category: "Aftermovie",
    year: "2026",
    summary:
      "Merangkum hari pertama siswa baru dari sesi pengenalan lingkungan sekolah hingga flashmob penutupan yang penuh kehangatan.",
    detailNote: "Diputar langsung pada acara penutupan MPLS di hadapan seluruh angkatan baru.",
    specs: "4K · Gimbal + Drone",
    durationOrCount: "03:45 Min",
    accent: "blue",
    visualVariant: "orientasi",
  },
  {
    id: "sinlui-cup-finals",
    title: "Sinlui Cup Finals Highlight Reel",
    category: "Aftermovie",
    year: "2025",
    summary:
      "Cuplikan cepat cabang basket, futsal, dan e-sports dengan sound design ritmis serta slow-motion 120fps di momen krusial.",
    detailNote: "Menjadi tayangan highlight dengan engagement tertinggi sepanjang semester.",
    specs: "4K · 120fps · Telephoto",
    durationOrCount: "02:58 Min",
    accent: "orange",
    visualVariant: "cup",
  },
  {
    id: "dokumenter-guru-alumni",
    title: "Dokumenter Profil Guru & Alumni",
    category: "Dokumenter",
    year: "2025",
    summary:
      "Serial wawancara mendalam tentang dedikasi pendidik dan perjalanan alumni inspiratif dengan tata cahaya studio yang intim.",
    detailNote: "Diproduksi dalam format episode pendek untuk kanal YouTube resmi sekolah.",
    specs: "4K · 24fps · 3-Point Light",
    durationOrCount: "08:14 Min",
    accent: "blue",
    visualVariant: "profile",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "testi-pensi",
    quote:
      "Tim Sinlui TV selalu sigap dari gladi bersih sampai closing. Same-day edit yang mereka tayangkan langsung bikin satu aula merinding.",
    author: "Gabriella Tan",
    role: "Ketua Panitia Pensi 2026",
    event: "Dies Natalis & Pensi",
    initials: "GT",
    accent: "orange",
  },
  {
    id: "testi-osis",
    quote:
      "Koordinasi dengan kru sangat rapi. Mereka tidak hanya merekam acara, tapi mengerti alur rundown sehingga tidak ada momen penting yang terlewat.",
    author: "Andreas Wijaya, S.Pd.",
    role: "Pembina OSIS",
    event: "Pelantikan & Rapat Kerja",
    initials: "AW",
    accent: "blue",
  },
  {
    id: "testi-kesiswaan",
    quote:
      "Kualitas siaran langsung upacara dan misa sekolah meningkat drastis. Orang tua di rumah bisa mengikuti kegiatan dengan visual yang sangat jernih.",
    author: "Maria Helena, M.Pd.",
    role: "Wakasek Bidang Kesiswaan",
    event: "Live Streaming Sekolah",
    initials: "MH",
    accent: "orange",
  },
  {
    id: "testi-basket",
    quote:
      "Foto-foto pertandingan dan highlight reel dari Sinlui TV selalu jadi penyemangat tim sebelum babak semifinal. Framing-nya terasa seperti siaran profesional.",
    author: "Kevin Pratama",
    role: "Kapten Tim Basket Putra",
    event: "DBL & Sinlui Cup",
    initials: "KP",
    accent: "blue",
  },
  {
    id: "testi-mpls",
    quote:
      "Dari hari pertama MPLS hingga penutupan, hasil foto langsung siap diunggah di sore hari. Sangat membantu tim publikasi dan dokumentasi panitia.",
    author: "Clarita Gunawan",
    role: "Koordinator Sie Acara MPLS",
    event: "Masa Orientasi Siswa",
    initials: "CG",
    accent: "orange",
  },
  {
    id: "testi-padus",
    quote:
      "Audio dan visual konser paduan suara kami tertangkap sangat bersih dan emosional. Arsip video mereka sangat berharga untuk portofolio lomba kami.",
    author: "Daniel Hartono",
    role: "Ketua Ekstrakurikuler Paduan Suara",
    event: "Konser Tahunan Seni",
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
      "Pemantauan 4 kamera simultan, audio tally, dan transisi lower-third dari meja kontrol belakang panggung.",
    gearTag: "ATEM Switcher · vMix",
    timecode: "TC 08:42:15",
    accent: "orange",
  },
  {
    id: "bts-gimbal-track",
    title: "Gimbal Tracking Shot",
    division: "Videografi",
    caption:
      "Pergerakan kamera dinamis mengikuti perpindahan formasi penampil di atas panggung dengan fokus kontinu.",
    gearTag: "RS4 Gimbal · 24mm f/1.4",
    timecode: "TC 19:14:03",
    accent: "blue",
  },
  {
    id: "bts-color-mix",
    title: "Color Grading & Sound Mix",
    division: "Video Editing",
    caption:
      "Penyelarasan tone warna antar kamera dan mixing efek transisi agar ritme aftermovie terasa menyatu.",
    gearTag: "DaVinci · Premiere Pro",
    timecode: "TC 22:05:49",
    accent: "orange",
  },
  {
    id: "bts-press-pit",
    title: "Press Pit Fotografi Panggung",
    division: "Fotografi",
    caption:
      "Pengambilan sudut rendah di area depan panggung untuk menangkap ekspresi dan tata cahaya secara dramatis.",
    gearTag: "70-200mm f/2.8 · Dual Slot",
    timecode: "TC 20:31:11",
    accent: "blue",
  },
  {
    id: "bts-comms-check",
    title: "Pre-Show Audio & Comms Check",
    division: "Broadcasting",
    caption:
      "Uji interkom kru kamera, sinkronisasi wireless mic pembawa acara, dan pengecekan bitrate sebelum live dimulai.",
    gearTag: "Intercom · 10Mbps Uplink",
    timecode: "TC 06:55:00",
    accent: "orange",
  },
  {
    id: "bts-sde-desk",
    title: "Instant Same-Day Edit (SDE)",
    division: "Editing & Desain",
    caption:
      "Ingest kartu memori langsung di sela acara agar cuplikan highlight bisa diputar pada sesi penutupan hari itu juga.",
    gearTag: "NVMe Scratch · Thumbnail Kit",
    timecode: "TC 16:48:27",
    accent: "blue",
  },
];
