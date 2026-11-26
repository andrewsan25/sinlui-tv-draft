import { Camera, Palette, Radio, Scissors, Video } from "lucide-react";
import type { DivisionIconKey } from "@/data/about";

interface DivisionIconProps {
  iconKey: DivisionIconKey;
  className?: string;
}

export function DivisionIcon({ iconKey, className = "h-5 w-5" }: DivisionIconProps) {
  switch (iconKey) {
    case "camera":
      return <Camera className={className} />;
    case "video":
      return <Video className={className} />;
    case "scissors":
      return <Scissors className={className} />;
    case "radio":
      return <Radio className={className} />;
    case "palette":
      return <Palette className={className} />;
  }
}
