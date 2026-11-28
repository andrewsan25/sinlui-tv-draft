-- =============================================================================
-- Sinlui TV — Kepengurusan & Dewan Pembina Schema, RLS, Indexes & Initial Seed
-- Jalankan seluruh skrip ini di Supabase Dashboard -> SQL Editor (project Backend-sinlui-tv)
-- =============================================================================

create table if not exists public.sinlui_tv_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text not null,
  division text not null check (
    division in (
      'Pembina',
      'BPH',
      'Fotografi',
      'Videografi',
      'Editing',
      'Broadcasting',
      'Desain & Publikasi'
    )
  ),
  tier text not null check (
    tier in ('pembina', 'bph-lead', 'bph', 'koordinator', 'anggota')
  ),
  kelas text not null,
  specialty text not null default '',
  initials text not null,
  quote text,
  photo_url text,
  instagram text,
  portfolio text,
  periode text not null default '2026/2027',
  display_order integer not null default 100,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Indexes for ordered roster reads & filtered division queries
create index if not exists idx_sinlui_tv_members_active_order
  on public.sinlui_tv_members (is_active, display_order, created_at);

create index if not exists idx_sinlui_tv_members_division
  on public.sinlui_tv_members (division)
  where is_active = true;

-- Automatically maintain updated_at
create or replace function public.set_sinlui_tv_members_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_sinlui_tv_members_updated_at on public.sinlui_tv_members;
create trigger trg_sinlui_tv_members_updated_at
  before update on public.sinlui_tv_members
  for each row
  execute function public.set_sinlui_tv_members_updated_at();

-- Expose table cleanly to Supabase Data API with strict RLS
alter table public.sinlui_tv_members enable row level security;

grant usage on schema public to anon, authenticated;
grant select on public.sinlui_tv_members to anon, authenticated;
grant insert, update, delete on public.sinlui_tv_members to authenticated;

drop policy if exists "Public can view active Sinlui TV members" on public.sinlui_tv_members;
create policy "Public can view active Sinlui TV members"
  on public.sinlui_tv_members
  for select
  to anon, authenticated
  using (is_active = true);

drop policy if exists "Authenticated admins can view all Sinlui TV members" on public.sinlui_tv_members;
create policy "Authenticated admins can view all Sinlui TV members"
  on public.sinlui_tv_members
  for select
  to authenticated
  using ((select auth.uid()) is not null);

drop policy if exists "Authenticated admins can insert Sinlui TV members" on public.sinlui_tv_members;
create policy "Authenticated admins can insert Sinlui TV members"
  on public.sinlui_tv_members
  for insert
  to authenticated
  with check ((select auth.uid()) is not null);

drop policy if exists "Authenticated admins can update Sinlui TV members" on public.sinlui_tv_members;
create policy "Authenticated admins can update Sinlui TV members"
  on public.sinlui_tv_members
  for update
  to authenticated
  using ((select auth.uid()) is not null)
  with check ((select auth.uid()) is not null);

drop policy if exists "Authenticated admins can delete Sinlui TV members" on public.sinlui_tv_members;
create policy "Authenticated admins can delete Sinlui TV members"
  on public.sinlui_tv_members
  for delete
  to authenticated
  using ((select auth.uid()) is not null);

-- Idempotent seed data (runs only when table is empty)
insert into public.sinlui_tv_members (
  name,
  role,
  division,
  tier,
  kelas,
  specialty,
  initials,
  quote,
  instagram,
  portfolio,
  periode,
  display_order,
  is_active
)
select * from (
  values
    -- Guru Pembina
    ('Andreas Wijaya, S.Pd.', 'Guru Pembina Utama', 'Pembina', 'pembina', 'Pembina Organisasi', 'Pengarah Program, Etika Jurnalistik & Pembinaan Organisasi', 'AW', 'Sinlui TV adalah ruang belajar nyata bagi siswa untuk berkarya dengan disiplin, kepekaan visual, dan tanggung jawab.', null, null, '2026/2027', 1, true),
    ('Maria Helena, M.Pd.', 'Guru Pembina Pendamping', 'Pembina', 'pembina', 'Bidang Kesiswaan', 'Koordinasi Liputan Sekolah & Pengembangan Talenta Media', 'MH', 'Setiap bingkai yang direkam siswa hari ini akan menjadi arsip berharga yang menyatukan seluruh keluarga besar sekolah.', null, null, '2026/2027', 2, true),

    -- BPH Lead
    ('Nathaniel Gunawan', 'Ketua Umum', 'BPH', 'bph-lead', 'XII MIPA 1', 'Executive Producer & Show Direction', 'NG', null, 'https://instagram.com', 'https://youtube.com', '2026/2027', 3, true),
    ('Felicia Widjaja', 'Wakil Ketua', 'BPH', 'bph-lead', 'XII IPS 2', 'Production Management & External Liaison', 'FW', null, 'https://instagram.com', null, '2026/2027', 4, true),

    -- BPH Inti
    ('Audrey Santoso', 'Sekretaris I', 'BPH', 'bph', 'XI MIPA 2', 'Administrasi Liputan & Perizinan', 'AS', null, 'https://instagram.com', null, '2026/2027', 5, true),
    ('Matthew Halim', 'Sekretaris II', 'BPH', 'bph', 'XI IPS 1', 'Arsip Inventaris & Jadwal Kru', 'MH', null, 'https://instagram.com', null, '2026/2027', 6, true),
    ('Michelle Kusuma', 'Bendahara I', 'BPH', 'bph', 'XII MIPA 4', 'Anggaran Produksi & Pengadaan Gear', 'MK', null, 'https://instagram.com', null, '2026/2027', 7, true),
    ('Bryan Tjandra', 'Bendahara II', 'BPH', 'bph', 'XI MIPA 5', 'Logistik & Pemeliharaan Perangkat', 'BT', null, 'https://instagram.com', null, '2026/2027', 8, true),

    -- Divisi Fotografi
    ('Rafael Sutanto', 'Koordinator Fotografi', 'Fotografi', 'koordinator', 'XII MIPA 3', 'Stage & Sport Photojournalism', 'RS', null, 'https://instagram.com', 'https://instagram.com', '2026/2027', 9, true),
    ('Jocelyn Tanoto', 'Anggota Fotografi', 'Fotografi', 'anggota', 'XI MIPA 1', 'Editorial Portrait & Event Coverage', 'JT', null, 'https://instagram.com', null, '2026/2027', 10, true),
    ('Darren Setiawan', 'Anggota Fotografi', 'Fotografi', 'anggota', 'X-4', 'Tribun Action & Candid Documentary', 'DS', null, 'https://instagram.com', null, '2026/2027', 11, true),

    -- Divisi Videografi
    ('Christopher Lim', 'Koordinator Videografi', 'Videografi', 'koordinator', 'XII IPS 1', 'Gimbal Cinematography & Director of Photography', 'CL', null, 'https://instagram.com', 'https://youtube.com', '2026/2027', 12, true),
    ('Evelyn Hartanto', 'Anggota Videografi', 'Videografi', 'anggota', 'XI MIPA 6', 'Docuseries Camera & Lighting Setup', 'EH', null, 'https://instagram.com', null, '2026/2027', 13, true),
    ('Kenneth Wijaya', 'Anggota Videografi', 'Videografi', 'anggota', 'X-2', 'B-Roll & Multi-Angle Camera Operator', 'KW', null, 'https://instagram.com', null, '2026/2027', 14, true),

    -- Divisi Editing
    ('Vanessa Prawira', 'Koordinator Editing', 'Editing', 'koordinator', 'XII MIPA 2', 'Aftermovie Pacing & Color Grading', 'VP', null, 'https://instagram.com', 'https://youtube.com', '2026/2027', 15, true),
    ('Joshua Anggara', 'Anggota Editing', 'Editing', 'anggota', 'XI IPS 3', 'Sound Design & Motion Titles', 'JA', null, 'https://instagram.com', null, '2026/2027', 16, true),
    ('Keira Nathania', 'Anggota Editing', 'Editing', 'anggota', 'X-7', 'Short-Form Reels & Same-Day Edit', 'KN', null, 'https://instagram.com', null, '2026/2027', 17, true),

    -- Divisi Broadcasting
    ('Jonathan Kurniawan', 'Koordinator Broadcasting', 'Broadcasting', 'koordinator', 'XII MIPA 5', 'Technical Director & Multicam Switching', 'JK', null, 'https://instagram.com', null, '2026/2027', 18, true),
    ('Celine Chandra', 'Anggota Broadcasting', 'Broadcasting', 'anggota', 'XI MIPA 4', 'Live Graphics, Lower-Third & vMix', 'CC', null, 'https://instagram.com', null, '2026/2027', 19, true),
    ('Nicholas Budiman', 'Anggota Broadcasting', 'Broadcasting', 'anggota', 'X-1', 'Audio Routing & Network Stream Ops', 'NB', null, 'https://instagram.com', null, '2026/2027', 20, true),

    -- Divisi Desain & Publikasi
    ('Valerie Salim', 'Koordinator Desain & Publikasi', 'Desain & Publikasi', 'koordinator', 'XII IPS 3', 'Visual Identity & Creative Direction', 'VS', null, 'https://instagram.com', 'https://instagram.com', '2026/2027', 21, true),
    ('Tiffany Gunardi', 'Anggota Desain & Publikasi', 'Desain & Publikasi', 'anggota', 'XI IPS 2', 'Thumbnail Kit & Editorial Carousel', 'TG', null, 'https://instagram.com', null, '2026/2027', 22, true),
    ('Adrian Surya', 'Anggota Desain & Publikasi', 'Desain & Publikasi', 'anggota', 'X-6', 'Copywriting & Social Media Publishing', 'AS', null, 'https://instagram.com', null, '2026/2027', 23, true)
) as seed(
  name,
  role,
  division,
  tier,
  kelas,
  specialty,
  initials,
  quote,
  instagram,
  portfolio,
  periode,
  display_order,
  is_active
)
where not exists (select 1 from public.sinlui_tv_members);
