import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  showSubtext?: boolean;
}

export function LogoMark({ className, showSubtext = false }: LogoMarkProps) {
  return (
    <div className={cn("inline-flex items-center gap-2.5", className)}>
      <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-[#0F2B5B] shadow-sm shadow-[#0F2B5B]/15">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          {/* Broadcast viewfinder frame */}
          <rect
            x="2.5"
            y="5"
            width="19"
            height="14"
            rx="3.5"
            stroke="#FFFFFF"
            strokeWidth="1.75"
          />
          {/* Play / Lens Aperture */}
          <path
            d="M10 9.4L15 12L10 14.6V9.4Z"
            fill="#FFFFFF"
          />
          {/* Live orange indicator */}
          <circle cx="17.5" cy="8.5" r="2" fill="#F97316" />
        </svg>
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#F97316]" />
      </div>

      <div className="flex flex-col leading-none">
        <span className="font-display text-lg font-extrabold tracking-tight text-[#0F2B5B]">
          SINLUI <span className="text-[#F97316]">TV</span>
        </span>
        {showSubtext ? (
          <span className="mt-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">
            Broadcast &amp; Media
          </span>
        ) : null}
      </div>
    </div>
  );
}
