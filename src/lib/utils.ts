import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPace(minutes: number, seconds: number): string {
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export function formatDistance(km: number): string {
  return `${km} км`;
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatDateShort(date: string): string {
  return new Date(date).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "short",
  });
}

export function pluralize(n: number, forms: [string, string, string]): string {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return forms[0];
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return forms[1];
  return forms[2];
}
