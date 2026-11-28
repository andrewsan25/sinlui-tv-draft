"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import type { Session } from "@supabase/supabase-js";
import {
  ArrowUpRight,
  Check,
  Edit3,
  LogOut,
  Plus,
  RefreshCw,
  Search,
  ShieldCheck,
  Trash2,
} from "lucide-react";
import {
  DIVISION_FILTERS,
  PERIODE_AKTIF,
  type DivisionFilter,
  type MemberTier,
} from "@/data/kepengurusan";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { computeInitials, type MemberRow } from "@/lib/supabase/members";
import { cn } from "@/lib/utils";

const DIVISIONS_ONLY = DIVISION_FILTERS.filter(
  (d): d is Exclude<DivisionFilter, "Semua"> => d !== "Semua"
);

const TIER_OPTIONS: { value: MemberTier; label: string }[] = [
  { value: "pembina", label: "Guru Pembina" },
  { value: "bph-lead", label: "BPH Inti (Ketua / Wakil)" },
  { value: "bph", label: "BPH (Sekretaris / Bendahara)" },
  { value: "koordinator", label: "Koordinator Divisi" },
  { value: "anggota", label: "Anggota Divisi" },
];

interface FormState {
  name: string;
  role: string;
  division: Exclude<DivisionFilter, "Semua">;
  tier: MemberTier;
  kelas: string;
  specialty: string;
  display_order: number;
  photo_url: string;
  quote: string;
  instagram: string;
  portfolio: string;
  is_active: boolean;
}

const DEFAULT_FORM: FormState = {
  name: "",
  role: "",
  division: "Fotografi",
  tier: "anggota",
  kelas: "",
  specialty: "",
  display_order: 25,
  photo_url: "",
  quote: "",
  instagram: "",
  portfolio: "",
  is_active: true,
};

export function KepengurusanAdmin() {
  const supabase = getSupabaseBrowserClient();

  const [session, setSession] = useState<Session | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);
  const [signingIn, setSigningIn] = useState(false);

  const [rows, setRows] = useState<MemberRow[]>([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [dataError, setDataError] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const [form, setForm] = useState<FormState>(DEFAULT_FORM);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  const [filterDivision, setFilterDivision] = useState<DivisionFilter>("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const loadRows = useCallback(async () => {
    if (!supabase) return;
    setDataLoading(true);
    setDataError(null);

    const { data, error } = await supabase
      .from("sinlui_tv_members")
      .select(
        "id, name, role, division, tier, kelas, specialty, initials, quote, photo_url, instagram, portfolio, periode, display_order, is_active, created_at, updated_at"
      )
      .order("display_order", { ascending: true })
      .order("created_at", { ascending: true });

    if (error) {
      setDataError(error.message);
    } else {
      setRows((data ?? []) as MemberRow[]);
    }

    setDataLoading(false);
  }, [supabase]);

  useEffect(() => {
    if (!supabase) {
      setAuthLoading(false);
      return;
    }

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setAuthLoading(false);
      if (data.session) {
        loadRows();
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      if (nextSession) {
        loadRows();
      } else {
        setRows([]);
      }
    });

    return () => subscription.unsubscribe();
  }, [supabase, loadRows]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) return;

    setSigningIn(true);
    setAuthError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      setAuthError(error.message);
    }
    setSigningIn(false);
  };

  const handleSignOut = async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) return;

    setSaving(true);
    setDataError(null);
    setFeedback(null);

    const payload = {
      name: form.name.trim(),
      role: form.role.trim(),
      division: form.division,
      tier: form.tier,
      kelas: form.kelas.trim(),
      specialty: form.specialty.trim(),
      initials: computeInitials(form.name),
      quote: form.quote.trim() || null,
      photo_url: form.photo_url.trim() || null,
      instagram: form.instagram.trim() || null,
      portfolio: form.portfolio.trim() || null,
      periode: PERIODE_AKTIF,
      display_order: Number(form.display_order) || 100,
      is_active: form.is_active,
    };

    if (editingId) {
      const { error } = await supabase
        .from("sinlui_tv_members")
        .update(payload)
        .eq("id", editingId);

      if (error) {
        setDataError(error.message);
      } else {
        setFeedback(`Data "${payload.name}" berhasil diperbarui.`);
        setEditingId(null);
        setForm(DEFAULT_FORM);
        await loadRows();
      }
    } else {
      const { error } = await supabase
        .from("sinlui_tv_members")
        .insert(payload);

      if (error) {
        setDataError(error.message);
      } else {
        setFeedback(`"${payload.name}" berhasil ditambahkan ke Supabase.`);
        setForm({
          ...DEFAULT_FORM,
          display_order: rows.length + 1,
        });
        await loadRows();
      }
    }

    setSaving(false);
  };

  const startEdit = (row: MemberRow) => {
    setEditingId(row.id);
    setFeedback(null);
    setDataError(null);
    setForm({
      name: row.name,
      role: row.role,
      division: row.division,
      tier: row.tier,
      kelas: row.kelas,
      specialty: row.specialty ?? "",
      display_order: row.display_order ?? 100,
      photo_url: row.photo_url ?? "",
      quote: row.quote ?? "",
      instagram: row.instagram ?? "",
      portfolio: row.portfolio ?? "",
      is_active: row.is_active,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: string) => {
    if (!supabase) return;
    setDataError(null);
    setFeedback(null);

    const { error } = await supabase
      .from("sinlui_tv_members")
      .delete()
      .eq("id", id);

    if (error) {
      setDataError(error.message);
    } else {
      setFeedback("Data pengurus dihapus.");
      setConfirmDeleteId(null);
      if (editingId === id) {
        setEditingId(null);
        setForm(DEFAULT_FORM);
      }
      await loadRows();
    }
  };

  if (!supabase) {
    return (
      <div className="mx-auto max-w-xl rounded-[28px] border border-orange-200 bg-orange-50/50 p-8 text-center">
        <p className="font-display text-xl font-semibold text-[#0F2B5B]">
          Konfigurasi Supabase Belum Lengkap
        </p>
        <p className="mt-2 text-sm text-slate-600">
          Pastikan{" "}
          <code className="rounded bg-white px-1.5 py-0.5 text-xs">
            NEXT_PUBLIC_SUPABASE_URL
          </code>{" "}
          dan{" "}
          <code className="rounded bg-white px-1.5 py-0.5 text-xs">
            NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
          </code>{" "}
          sudah terpasang di <code>.env.local</code> atau Vercel Environment
          Variables.
        </p>
      </div>
    );
  }

  if (authLoading) {
    return (
      <div className="mx-auto max-w-md rounded-[28px] border border-[#0F2B5B]/[0.08] bg-[#F6F8FC] p-10 text-center text-sm text-slate-500">
        Memeriksa sesi admin Supabase...
      </div>
    );
  }

  if (!session) {
    return (
      <div className="mx-auto max-w-md rounded-[32px] border border-[#0F2B5B]/[0.08] bg-white p-8 shadow-luxury sm:p-10">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-semibold text-[#2563EB]">
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>Admin Kepengurusan · Supabase Auth</span>
        </div>

        <h2 className="mt-4 font-display text-2xl font-semibold text-[#0F2B5B]">
          Masuk untuk mengelola{" "}
          <span className="font-serif italic font-normal text-[#F46F15]">
            data pengurus.
          </span>
        </h2>
        <p className="mt-2 text-xs leading-relaxed text-slate-500">
          Gunakan akun admin yang terdaftar di Supabase Dashboard →{" "}
          <strong>Authentication → Users</strong>.
        </p>

        <form onSubmit={handleSignIn} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#0F2B5B]">
              Email Admin
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@sinlui.sch.id"
              className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-[#F6F8FC] px-4 py-3 text-sm text-[#0F2B5B] outline-none transition-colors focus:border-[#2563EB] focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0F2B5B]">
              Kata Sandi
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-[#F6F8FC] px-4 py-3 text-sm text-[#0F2B5B] outline-none transition-colors focus:border-[#2563EB] focus:bg-white"
            />
          </div>

          {authError ? (
            <p className="rounded-2xl bg-red-50 px-4 py-2.5 text-xs font-medium text-red-600">
              {authError}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={signingIn}
            className="w-full rounded-full bg-[#0F2B5B] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#F46F15] disabled:opacity-60"
          >
            {signingIn ? "Memverifikasi..." : "Masuk ke Panel Admin"}
          </button>
        </form>
      </div>
    );
  }

  const filteredRows = rows.filter((row) => {
    const matchesDivision =
      filterDivision === "Semua" || row.division === filterDivision;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      row.name.toLowerCase().includes(q) ||
      row.role.toLowerCase().includes(q) ||
      row.kelas.toLowerCase().includes(q);
    return matchesDivision && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Top Admin Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-[24px] border border-[#0F2B5B]/[0.08] bg-[#F6F8FC] px-6 py-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-[#2563EB]">
            Terhubung ke Supabase
          </p>
          <p className="text-sm font-semibold text-[#0F2B5B]">
            Masuk sebagai {session.user.email}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Link
            href="/kepengurusan"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#0F2B5B]/15 bg-white px-4 py-2 text-xs font-semibold text-[#0F2B5B] transition-colors hover:border-[#F46F15] hover:text-[#F46F15]"
          >
            <span>Lihat Halaman Publik</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          <button
            type="button"
            onClick={loadRows}
            disabled={dataLoading}
            className="inline-flex items-center gap-1.5 rounded-full border border-[#0F2B5B]/15 bg-white px-4 py-2 text-xs font-semibold text-[#0F2B5B] transition-colors hover:border-[#2563EB]"
          >
            <RefreshCw
              className={cn("h-3.5 w-3.5", dataLoading ? "animate-spin" : "")}
            />
            <span>Refresh</span>
          </button>

          <button
            type="button"
            onClick={handleSignOut}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#0F2B5B] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#F46F15]"
          >
            <LogOut className="h-3.5 w-3.5" />
            <span>Keluar</span>
          </button>
        </div>
      </div>

      {/* Notices */}
      {dataError ? (
        <div className="rounded-[24px] border border-red-200 bg-red-50 p-5 text-sm text-red-700">
          <p className="font-semibold">Pesan dari Supabase:</p>
          <p className="mt-1">{dataError}</p>
          {dataError.toLowerCase().includes("sinlui_tv_members") ? (
            <p className="mt-2 text-xs text-red-600">
              Jalankan skrip{" "}
              <code className="rounded bg-white px-1.5 py-0.5">
                supabase/sinlui_tv_members.sql
              </code>{" "}
              di Supabase SQL Editor terlebih dahulu untuk membuat tabel dan
              mengisi data awal.
            </p>
          ) : null}
        </div>
      ) : null}

      {feedback ? (
        <div className="flex items-center gap-2 rounded-[20px] border border-emerald-200 bg-emerald-50 px-5 py-3.5 text-sm font-medium text-emerald-800">
          <Check className="h-4 w-4 text-emerald-600" />
          <span>{feedback}</span>
        </div>
      ) : null}

      {/* Form Tambah / Edit */}
      <div className="rounded-[28px] border border-[#0F2B5B]/[0.08] bg-white p-6 shadow-luxury sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <h2 className="font-display text-xl font-semibold text-[#0F2B5B]">
            {editingId
              ? "Edit Data Pengurus / Pembina"
              : "Tambah Nama Baru ke Supabase"}
          </h2>

          {editingId ? (
            <button
              type="button"
              onClick={() => {
                setEditingId(null);
                setForm(DEFAULT_FORM);
              }}
              className="text-xs font-semibold text-[#F46F15] hover:underline"
            >
              Batal Edit
            </button>
          ) : null}
        </div>

        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <label className="block text-xs font-semibold text-[#0F2B5B]">
              Nama Lengkap *
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Contoh: Andreas Wijaya, S.Pd."
              className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-[#F6F8FC] px-4 py-2.5 text-sm text-[#0F2B5B] outline-none focus:border-[#2563EB] focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0F2B5B]">
              Jabatan *
            </label>
            <input
              type="text"
              required
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              placeholder="Contoh: Ketua Umum / Koordinator"
              className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-[#F6F8FC] px-4 py-2.5 text-sm text-[#0F2B5B] outline-none focus:border-[#2563EB] focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0F2B5B]">
              Divisi *
            </label>
            <select
              value={form.division}
              onChange={(e) =>
                setForm({
                  ...form,
                  division: e.target.value as Exclude<DivisionFilter, "Semua">,
                })
              }
              className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-[#F6F8FC] px-4 py-2.5 text-sm text-[#0F2B5B] outline-none focus:border-[#2563EB] focus:bg-white"
            >
              {DIVISIONS_ONLY.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0F2B5B]">
              Tingkat / Hierarki *
            </label>
            <select
              value={form.tier}
              onChange={(e) =>
                setForm({ ...form, tier: e.target.value as MemberTier })
              }
              className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-[#F6F8FC] px-4 py-2.5 text-sm text-[#0F2B5B] outline-none focus:border-[#2563EB] focus:bg-white"
            >
              {TIER_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0F2B5B]">
              Kelas / Unit *
            </label>
            <input
              type="text"
              required
              value={form.kelas}
              onChange={(e) => setForm({ ...form, kelas: e.target.value })}
              placeholder="Contoh: XII MIPA 1 atau Bidang Kesiswaan"
              className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-[#F6F8FC] px-4 py-2.5 text-sm text-[#0F2B5B] outline-none focus:border-[#2563EB] focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0F2B5B]">
              Urutan Tampil
            </label>
            <input
              type="number"
              value={form.display_order}
              onChange={(e) =>
                setForm({ ...form, display_order: Number(e.target.value) })
              }
              className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-[#F6F8FC] px-4 py-2.5 text-sm text-[#0F2B5B] outline-none focus:border-[#2563EB] focus:bg-white"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-[#0F2B5B]">
              Fokus / Spesialisasi
            </label>
            <input
              type="text"
              value={form.specialty}
              onChange={(e) => setForm({ ...form, specialty: e.target.value })}
              placeholder="Contoh: Gimbal Cinematography & Director of Photography"
              className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-[#F6F8FC] px-4 py-2.5 text-sm text-[#0F2B5B] outline-none focus:border-[#2563EB] focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0F2B5B]">
              URL Foto (Opsional)
            </label>
            <input
              type="url"
              value={form.photo_url}
              onChange={(e) => setForm({ ...form, photo_url: e.target.value })}
              placeholder="https://..."
              className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-[#F6F8FC] px-4 py-2.5 text-sm text-[#0F2B5B] outline-none focus:border-[#2563EB] focus:bg-white"
            />
          </div>

          <div className="sm:col-span-2 lg:col-span-3">
            <label className="block text-xs font-semibold text-[#0F2B5B]">
              Kutipan Pembina (Khusus Guru Pembina, Opsional)
            </label>
            <input
              type="text"
              value={form.quote}
              onChange={(e) => setForm({ ...form, quote: e.target.value })}
              placeholder="Pesan singkat pembina..."
              className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-[#F6F8FC] px-4 py-2.5 text-sm text-[#0F2B5B] outline-none focus:border-[#2563EB] focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0F2B5B]">
              URL Instagram (Opsional)
            </label>
            <input
              type="url"
              value={form.instagram}
              onChange={(e) => setForm({ ...form, instagram: e.target.value })}
              placeholder="https://instagram.com/..."
              className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-[#F6F8FC] px-4 py-2.5 text-sm text-[#0F2B5B] outline-none focus:border-[#2563EB] focus:bg-white"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0F2B5B]">
              URL Portofolio (Opsional)
            </label>
            <input
              type="url"
              value={form.portfolio}
              onChange={(e) => setForm({ ...form, portfolio: e.target.value })}
              placeholder="https://youtube.com/..."
              className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-[#F6F8FC] px-4 py-2.5 text-sm text-[#0F2B5B] outline-none focus:border-[#2563EB] focus:bg-white"
            />
          </div>

          <div className="flex items-end pb-2">
            <label className="inline-flex cursor-pointer items-center gap-2.5 text-sm font-medium text-[#0F2B5B]">
              <input
                type="checkbox"
                checked={form.is_active}
                onChange={(e) =>
                  setForm({ ...form, is_active: e.target.checked })
                }
                className="h-4 w-4 rounded accent-[#F46F15]"
              />
              <span>Tampilkan di halaman publik</span>
            </label>
          </div>

          <div className="sm:col-span-2 lg:col-span-3 pt-2">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-2 rounded-full bg-[#F46F15] px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#dc5e0a] disabled:opacity-60"
            >
              <Plus className="h-4 w-4" />
              <span>
                {saving
                  ? "Menyimpan..."
                  : editingId
                    ? "Simpan Perubahan"
                    : "Tambah Pengurus Baru"}
              </span>
            </button>
          </div>
        </form>
      </div>

      {/* Live Roster Table */}
      <div className="rounded-[28px] border border-[#0F2B5B]/[0.08] bg-white p-6 shadow-luxury sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-xl font-semibold text-[#0F2B5B]">
              Daftar Tersimpan di Supabase ({filteredRows.length})
            </h2>
            <p className="text-xs text-slate-500">
              Perubahan di sini langsung tampil di halaman publik{" "}
              <code>/kepengurusan</code>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari nama atau jabatan..."
                className="rounded-full border border-slate-200 bg-[#F6F8FC] py-2 pl-9 pr-4 text-xs text-[#0F2B5B] outline-none focus:border-[#2563EB] focus:bg-white"
              />
            </div>

            <select
              value={filterDivision}
              onChange={(e) =>
                setFilterDivision(e.target.value as DivisionFilter)
              }
              className="rounded-full border border-slate-200 bg-[#F6F8FC] px-4 py-2 text-xs font-semibold text-[#0F2B5B] outline-none"
            >
              {DIVISION_FILTERS.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6 divide-y divide-slate-100">
          {filteredRows.length === 0 ? (
            <p className="py-8 text-center text-sm text-slate-400">
              {dataLoading
                ? "Memuat data dari Supabase..."
                : "Belum ada data yang sesuai filter."}
            </p>
          ) : (
            filteredRows.map((row) => (
              <div
                key={row.id}
                className="flex flex-col justify-between gap-3 py-4 sm:flex-row sm:items-center"
              >
                <div className="flex items-center gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F6F8FC] font-display text-xs font-semibold text-[#0F2B5B]">
                    {row.initials}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-display text-sm font-semibold text-[#0F2B5B]">
                        {row.name}
                      </span>
                      <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-[10px] font-semibold text-[#2563EB]">
                        {row.division}
                      </span>
                      {!row.is_active ? (
                        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-500">
                          Nonaktif
                        </span>
                      ) : null}
                    </div>
                    <p className="text-xs text-slate-500">
                      #{row.display_order} · {row.role} · {row.kelas}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => startEdit(row)}
                    className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-3.5 py-1.5 text-xs font-semibold text-[#0F2B5B] transition-colors hover:border-[#2563EB] hover:text-[#2563EB]"
                  >
                    <Edit3 className="h-3.5 w-3.5" />
                    <span>Edit</span>
                  </button>

                  {confirmDeleteId === row.id ? (
                    <div className="inline-flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => handleDelete(row.id)}
                        className="rounded-full bg-red-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-700"
                      >
                        Yakin Hapus
                      </button>
                      <button
                        type="button"
                        onClick={() => setConfirmDeleteId(null)}
                        className="rounded-full border border-slate-200 px-2.5 py-1.5 text-xs text-slate-500"
                      >
                        Batal
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setConfirmDeleteId(row.id)}
                      className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-3.5 py-1.5 text-xs font-semibold text-slate-500 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      <span>Hapus</span>
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
