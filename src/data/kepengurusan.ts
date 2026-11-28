export const PERIODE_AKTIF = "2026/2027";

export const DIVISION_FILTERS = [
  "Semua",
  "Pembina",
  "BPH",
  "Fotografi",
  "Videografi",
  "Editing",
  "Broadcasting",
  "Desain & Publikasi",
] as const;

export type DivisionFilter = (typeof DIVISION_FILTERS)[number];

export type MemberTier =
  | "pembina"
  | "bph-lead"
  | "bph"
  | "koordinator"
  | "anggota";

export interface Member {
  id: string;
  name: string;
  role: string;
  division: Exclude<DivisionFilter, "Semua">;
  tier: MemberTier;
  kelas: string;
  specialty: string;
  initials: string;
  quote?: string;
  photoUrl?: string;
  instagram?: string;
  portfolio?: string;
}

export const MEMBERS: Member[] = [
  // ================= GURU PEMBINA =================
  {
    id: "pembina-1",
    name: "Andreas Wijaya, S.Pd.",
    role: "Guru Pembina Utama",
    division: "Pembina",
    tier: "pembina",
    kelas: "Pembina Organisasi",
    specialty: "Pengarah Program, Etika Jurnalistik & Pembinaan Organisasi",
    initials: "AW",
    quote:
      "Sinlui TV adalah ruang belajar nyata bagi siswa untuk berkarya dengan disiplin, kepekaan visual, dan tanggung jawab.",
  },
  {
    id: "pembina-2",
    name: "Maria Helena, M.Pd.",
    role: "Guru Pembina Pendamping",
    division: "Pembina",
    tier: "pembina",
    kelas: "Bidang Kesiswaan",
    specialty: "Koordinasi Liputan Sekolah & Pengembangan Talenta Media",
    initials: "MH",
    quote:
      "Setiap bingkai yang direkam siswa hari ini akan menjadi arsip berharga yang menyatukan seluruh keluarga besar sekolah.",
  },

  // ================= BPH LEAD =================
  {
    id: "bph-ketua",
    name: "Nathaniel Gunawan",
    role: "Ketua Umum",
    division: "BPH",
    tier: "bph-lead",
    kelas: "XII MIPA 1",
    specialty: "Executive Producer & Show Direction",
    initials: "NG",
    instagram: "https://instagram.com",
    portfolio: "https://youtube.com",
  },
  {
    id: "bph-wakil",
    name: "Felicia Widjaja",
    role: "Wakil Ketua",
    division: "BPH",
    tier: "bph-lead",
    kelas: "XII IPS 2",
    specialty: "Production Management & External Liaison",
    initials: "FW",
    instagram: "https://instagram.com",
  },

  // ================= BPH INTI =================
  {
    id: "bph-sekretaris-1",
    name: "Audrey Santoso",
    role: "Sekretaris I",
    division: "BPH",
    tier: "bph",
    kelas: "XI MIPA 2",
    specialty: "Administrasi Liputan & Perizinan",
    initials: "AS",
    instagram: "https://instagram.com",
  },
  {
    id: "bph-sekretaris-2",
    name: "Matthew Halim",
    role: "Sekretaris II",
    division: "BPH",
    tier: "bph",
    kelas: "XI IPS 1",
    specialty: "Arsip Inventaris & Jadwal Kru",
    initials: "MH",
    instagram: "https://instagram.com",
  },
  {
    id: "bph-bendahara-1",
    name: "Michelle Kusuma",
    role: "Bendahara I",
    division: "BPH",
    tier: "bph",
    kelas: "XII MIPA 4",
    specialty: "Anggaran Produksi & Pengadaan Gear",
    initials: "MK",
    instagram: "https://instagram.com",
  },
  {
    id: "bph-bendahara-2",
    name: "Bryan Tjandra",
    role: "Bendahara II",
    division: "BPH",
    tier: "bph",
    kelas: "XI MIPA 5",
    specialty: "Logistik & Pemeliharaan Perangkat",
    initials: "BT",
    instagram: "https://instagram.com",
  },

  // ================= FOTOGRAFI =================
  {
    id: "foto-koor",
    name: "Rafael Sutanto",
    role: "Koordinator Fotografi",
    division: "Fotografi",
    tier: "koordinator",
    kelas: "XII MIPA 3",
    specialty: "Stage & Sport Photojournalism",
    initials: "RS",
    instagram: "https://instagram.com",
    portfolio: "https://instagram.com",
  },
  {
    id: "foto-1",
    name: "Jocelyn Tanoto",
    role: "Anggota Fotografi",
    division: "Fotografi",
    tier: "anggota",
    kelas: "XI MIPA 1",
    specialty: "Editorial Portrait & Event Coverage",
    initials: "JT",
    instagram: "https://instagram.com",
  },
  {
    id: "foto-2",
    name: "Darren Setiawan",
    role: "Anggota Fotografi",
    division: "Fotografi",
    tier: "anggota",
    kelas: "X-4",
    specialty: "Tribun Action & Candid Documentary",
    initials: "DS",
    instagram: "https://instagram.com",
  },

  // ================= VIDEOGRAFI =================
  {
    id: "video-koor",
    name: "Christopher Lim",
    role: "Koordinator Videografi",
    division: "Videografi",
    tier: "koordinator",
    kelas: "XII IPS 1",
    specialty: "Gimbal Cinematography & Director of Photography",
    initials: "CL",
    instagram: "https://instagram.com",
    portfolio: "https://youtube.com",
  },
  {
    id: "video-1",
    name: "Evelyn Hartanto",
    role: "Anggota Videografi",
    division: "Videografi",
    tier: "anggota",
    kelas: "XI MIPA 6",
    specialty: "Docuseries Camera & Lighting Setup",
    initials: "EH",
    instagram: "https://instagram.com",
  },
  {
    id: "video-2",
    name: "Kenneth Wijaya",
    role: "Anggota Videografi",
    division: "Videografi",
    tier: "anggota",
    kelas: "X-2",
    specialty: "B-Roll & Multi-Angle Camera Operator",
    initials: "KW",
    instagram: "https://instagram.com",
  },

  // ================= VIDEO EDITING =================
  {
    id: "edit-koor",
    name: "Vanessa Prawira",
    role: "Koordinator Editing",
    division: "Editing",
    tier: "koordinator",
    kelas: "XII MIPA 2",
    specialty: "Aftermovie Pacing & Color Grading",
    initials: "VP",
    instagram: "https://instagram.com",
    portfolio: "https://youtube.com",
  },
  {
    id: "edit-1",
    name: "Joshua Anggara",
    role: "Anggota Editing",
    division: "Editing",
    tier: "anggota",
    kelas: "XI IPS 3",
    specialty: "Sound Design & Motion Titles",
    initials: "JA",
    instagram: "https://instagram.com",
  },
  {
    id: "edit-2",
    name: "Keira Nathania",
    role: "Anggota Editing",
    division: "Editing",
    tier: "anggota",
    kelas: "X-7",
    specialty: "Short-Form Reels & Same-Day Edit",
    initials: "KN",
    instagram: "https://instagram.com",
  },

  // ================= BROADCASTING =================
  {
    id: "bc-koor",
    name: "Jonathan Kurniawan",
    role: "Koordinator Broadcasting",
    division: "Broadcasting",
    tier: "koordinator",
    kelas: "XII MIPA 5",
    specialty: "Technical Director & Multicam Switching",
    initials: "JK",
    instagram: "https://instagram.com",
  },
  {
    id: "bc-1",
    name: "Celine Chandra",
    role: "Anggota Broadcasting",
    division: "Broadcasting",
    tier: "anggota",
    kelas: "XI MIPA 4",
    specialty: "Live Graphics, Lower-Third & vMix",
    initials: "CC",
    instagram: "https://instagram.com",
  },
  {
    id: "bc-2",
    name: "Nicholas Budiman",
    role: "Anggota Broadcasting",
    division: "Broadcasting",
    tier: "anggota",
    kelas: "X-1",
    specialty: "Audio Routing & Network Stream Ops",
    initials: "NB",
    instagram: "https://instagram.com",
  },

  // ================= DESAIN & PUBLIKASI =================
  {
    id: "desain-koor",
    name: "Valerie Salim",
    role: "Koordinator Desain & Publikasi",
    division: "Desain & Publikasi",
    tier: "koordinator",
    kelas: "XII IPS 3",
    specialty: "Visual Identity & Creative Direction",
    initials: "VS",
    instagram: "https://instagram.com",
    portfolio: "https://instagram.com",
  },
  {
    id: "desain-1",
    name: "Tiffany Gunardi",
    role: "Anggota Desain & Publikasi",
    division: "Desain & Publikasi",
    tier: "anggota",
    kelas: "XI IPS 2",
    specialty: "Thumbnail Kit & Editorial Carousel",
    initials: "TG",
    instagram: "https://instagram.com",
  },
  {
    id: "desain-2",
    name: "Adrian Surya",
    role: "Anggota Desain & Publikasi",
    division: "Desain & Publikasi",
    tier: "anggota",
    kelas: "X-6",
    specialty: "Copywriting & Social Media Publishing",
    initials: "AS",
    instagram: "https://instagram.com",
  },
];
