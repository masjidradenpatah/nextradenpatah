import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFormattedDate(date: Date) {
  const formatter = new Intl.DateTimeFormat("id-ID", {
    weekday: "long", // Nama hari (Senin, Selasa, dst.)
    day: "numeric", // Tanggal (1, 2, dst.)
    month: "long", // Nama bulan (Januari, Februari, dst.)
    year: "numeric", // Tahun (2025, dst.)
  });

  return formatter.format(date);
}
