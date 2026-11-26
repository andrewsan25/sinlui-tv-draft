import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  size?: "sm" | "md";
}

export function LogoMark({ className, size = "sm" }: LogoMarkProps) {
  return (
    <div className={cn("inline-flex items-center gap-2.5", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logo-sinlui-mark.png"
        alt="Logo Sinlui TV"
        className={cn(
          "shrink-0 object-contain mix-blend-multiply",
          size === "md" ? "h-11 w-11" : "h-9 w-9"
        )}
      />

      <span
        className={cn(
          "font-display font-bold tracking-[-0.03em] text-[#0F2B5B]",
          size === "md" ? "text-xl" : "text-[18px]"
        )}
      >
        SINLUI<span className="text-[#FF5A00]">TV</span>
      </span>
    </div>
  );
}
