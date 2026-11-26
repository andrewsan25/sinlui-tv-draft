import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
}

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <div className={cn("inline-flex items-center gap-2.5", className)}>
      <div className="relative flex h-7 w-7 items-center justify-center rounded-md bg-[#0F2B5B]">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="square"
          />
          <circle cx="12" cy="12" r="2.75" fill="#FF5A00" />
        </svg>
      </div>

      <span className="font-display text-[17px] font-bold tracking-[-0.04em] text-[#0F2B5B]">
        SINLUI<span className="text-[#FF5A00]">.TV</span>
      </span>
    </div>
  );
}
