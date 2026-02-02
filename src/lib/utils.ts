import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPlatformLink(): string {
  const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
  const isAndroid = /Android/i.test(ua);
  const isIOS =
    /iPad|iPhone|iPod/i.test(ua) ||
    (typeof navigator !== "undefined" &&
      navigator.platform === "MacIntel" &&
      (navigator as any).maxTouchPoints > 1);
  if (isAndroid)
    return "https://play.google.com/store/apps/details?id=com.essencialab.app";
  if (isIOS) return "https://apps.apple.com/app/id6756675158";
  return "https://essencialab.app";
}
