import {
  MEMBERS,
  type DivisionFilter,
  type Member,
  type MemberTier,
} from "@/data/kepengurusan";
import { createSupabaseServerClient } from "./client";

export interface MemberRow {
  id: string;
  name: string;
  role: string;
  division: Exclude<DivisionFilter, "Semua">;
  tier: MemberTier;
  kelas: string;
  specialty: string;
  initials: string;
  quote: string | null;
  photo_url: string | null;
  instagram: string | null;
  portfolio: string | null;
  periode: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface MemberInput {
  name: string;
  role: string;
  division: Exclude<DivisionFilter, "Semua">;
  tier: MemberTier;
  kelas: string;
  specialty: string;
  initials?: string;
  quote?: string | null;
  photo_url?: string | null;
  instagram?: string | null;
  portfolio?: string | null;
  periode?: string;
  display_order?: number;
  is_active?: boolean;
}

const ACADEMIC_SUFFIXES = new Set([
  "s.pd",
  "m.pd",
  "s.kom",
  "m.kom",
  "s.sn",
  "m.sn",
  "s.si",
  "m.si",
  "s.sos",
  "s.e",
  "m.m",
  "dr",
  "drs",
  "dra",
  "ir",
]);

export function computeInitials(fullName: string): string {
  const cleaned = fullName
    .split(",")[0]
    .trim()
    .split(/\s+/)
    .filter((word) => {
      const normalized = word.replace(/\./g, "").toLowerCase();
      return word.length > 0 && !ACADEMIC_SUFFIXES.has(normalized);
    });

  if (cleaned.length === 0) return "ST";
  if (cleaned.length === 1) return cleaned[0].slice(0, 2).toUpperCase();
  return `${cleaned[0][0]}${cleaned[1][0]}`.toUpperCase();
}

export function mapRowToMember(row: MemberRow): Member {
  return {
    id: row.id,
    name: row.name,
    role: row.role,
    division: row.division,
    tier: row.tier,
    kelas: row.kelas,
    specialty: row.specialty ?? "",
    initials: row.initials || computeInitials(row.name),
    quote: row.quote ?? undefined,
    photoUrl: row.photo_url ?? undefined,
    instagram: row.instagram ?? undefined,
    portfolio: row.portfolio ?? undefined,
  };
}

export async function fetchKepengurusanMembers(): Promise<{
  members: Member[];
  source: "supabase" | "fallback";
  notice?: string;
}> {
  const supabase = createSupabaseServerClient();
  if (!supabase) {
    return {
      members: MEMBERS,
      source: "fallback",
      notice: "Variabel lingkungan Supabase belum dikonfigurasi.",
    };
  }

  try {
    const { data, error } = await supabase
      .from("sinlui_tv_members")
      .select(
        "id, name, role, division, tier, kelas, specialty, initials, quote, photo_url, instagram, portfolio, periode, display_order, is_active, created_at, updated_at"
      )
      .eq("is_active", true)
      .order("display_order", { ascending: true })
      .order("created_at", { ascending: true });

    if (error) {
      return {
        members: MEMBERS,
        source: "fallback",
        notice: error.message,
      };
    }

    const rows = (data ?? []) as MemberRow[];
    return {
      members: rows.map(mapRowToMember),
      source: "supabase",
    };
  } catch {
    return {
      members: MEMBERS,
      source: "fallback",
      notice: "Koneksi ke Supabase gagal; menampilkan data cadangan lokal.",
    };
  }
}
