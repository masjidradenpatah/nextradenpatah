// FIXME: This file shouldn't be .tsx, it should just .ts
import eyeglasses from "@/public/facilities/eyeglasses.jpg";
import robe from "@/public/facilities/mukena.jpg";
import p3k from "@/public/facilities/kotak_p3k.jpg";
import penitipan_barang from "@/public/facilities/tempat_penitipan_barang.jpg";
import plastik_sepatu from "@/public/facilities/plastik_sepatu.jpg";
import shoes from "@/public/facilities/rak_sepatu.jpg";
import qris_mrp from "@/public/facilities/qris_mrp.jpg";
import proyektor from "@/public/facilities/proyektor.jpg";
import braille from "@/public/facilities/quran_braille.jpg";
import etalase_barang_temuan from "@/public/facilities/etalase_barang_temuan.jpg";
import cctv from "@/public/facilities/cctv.jpg";
import charger_box from "@/public/facilities/charger_box.jpg";
import { Facility } from "@/types/Facility";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";

export const facilities: Facility[] = [
  {
    title: "Kacamata Baca",
    image: eyeglasses,
    icon: <Eye className={"text-white"} />,
  },
  {
    title: "Mukena",
    image: robe,
    icon: <Eye className={"text-white"} />,
  },
  {
    title: "CCTV",
    image: cctv,
    icon: <Eye className={"text-white"} />,
  },
  {
    title: "Kotak P3K ",
    image: p3k,
    icon: <Eye className={"text-white"} />,
  },
  {
    title: "Etalase Barang Temuan ",
    image: etalase_barang_temuan,
    icon: <Eye className={"text-white"} />,
  },
  {
    title: "Charger Box ",
    image: charger_box,
    icon: <Eye className={"text-white"} />,
  },
  {
    title: "Tempat Penitipan Barang",
    image: penitipan_barang,
    icon: <Eye className={"text-white"} />,
  },
  {
    title: "Plastik Alas Kaki Jama'ah",
    image: plastik_sepatu,
    icon: <Eye className={"text-white"} />,
  },
  {
    title: "Kotak Infaq Digital (Qris)",
    image: qris_mrp,
    icon: <Eye className={"text-white"} />,
  },
  {
    title: "Qur'an Braille",
    image: braille,
    icon: <Eye className={"text-white"} />,
  },
  {
    title: "Lemari Alas Kaki",
    image: shoes,
    icon: <Eye className={"text-white"} />,
  },
  {
    title: "Proyektor",
    image: proyektor,
    icon: <Eye className={"text-white"} />,
  },
];
