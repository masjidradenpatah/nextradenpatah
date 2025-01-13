import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Seed for programs
  const programs = await prisma.program.createMany({
    data: [
      {
        id: "kelas-psikologi-islam",
        title: "Kelas Psikologi Islam",
        image: "kelas-psikologi-islam.jpg",
        description:
          "Program harian membahas psikologi dalam perspektif Islam.",
        type: "DAILY",
      },
      {
        id: "kelas-tahsin",
        title: "Kelas Tahsin",
        image: "kelas-tahsin.jpg",
        description:
          "Program harian untuk meningkatkan kualitas bacaan Al-Qur'an.",
        type: "DAILY",
      },
      {
        id: "kajian-tafsir-al-munir",
        title: "Kajian Tafsir Al-Munir",
        image: "kajian-tafsir-al-munir.jpg",
        description: "Kajian mendalam membahas tafsir kitab Al-Munir.",
        type: "DAILY",
      },
      {
        id: "kajian-islam-tematik-menjelang-maghrib",
        title: "Kajian Islam Tematik Menjelang Maghrib",
        image: "kismala.jpg",
        description: "Kajian tematik membahas isu-isu Islam setiap sore.",
        type: "DAILY",
      },
      {
        id: "kultum-zuhur",
        title: "Kultum Zuhur",
        image: "kultum-zuhur.jpg",
        description: "Ceramah pendek setiap Zuhur di masjid kampus.",
        type: "DAILY",
      },
      {
        id: "kajian-fiqih-4-mazhab",
        title: "Kajian Fiqih 4 Mazhab",
        image: "kajian-fiqih-4-mazhab.jpg",
        description: "Diskusi mendalam tentang fiqih empat mazhab.",
        type: "DAILY",
      },
      {
        id: "baca-tulis-al-quran",
        title: "Baca Tulis Al-Qur'an",
        image: "baca-tulis-al-quran.jpg",
        description: "Program literasi Al-Qur'an untuk pemula.",
        type: "DAILY",
      },
      {
        id: "kelas-pra-nikah-parenting",
        title: "Kelas Pra-Nikah & Parenting",
        image: "kelas-pra-nikah-parenting.jpg",
        description: "Pembekalan pra-nikah dan parenting Islami.",
        type: "DAILY",
      },
      {
        id: "kajian-tazkiyatun-nafs",
        title: "Kajian Tazkiyatun Nafs",
        image: "kajian-tazkiyatun-nafs.jpg",
        description: "Kajian pembersihan hati dan jiwa menurut Islam.",
        type: "DAILY",
      },
      {
        id: "kajian-tafsir-surah-al-fatihah",
        title: "Kajian Tafsir Surah Al-Fatihah",
        image: "kajian-tafsir-surah-al-fatihah.jpg",
        description: "Pembahasan mendalam Surah Al-Fatihah.",
        type: "DAILY",
      },
      {
        id: "gebyar-ramadhan",
        title: "Gebyar Ramadhan",
        image: "gebyar-ramadhan.jpg",
        description: "Kegiatan akbar selama bulan Ramadhan.",
        type: "ANNUALY",
      },
      {
        id: "wisuda-tahfidz",
        title: "Wisuda Tahfidz",
        image: "wisuda-tahfidz.jpg",
        description: "Wisuda santri penghafal Al-Qur'an.",
        type: "ANNUALY",
      },
      {
        id: "mrp-mengabdi",
        title: "MRP Mengabdi",
        image: "mrp-mengabdi.jpg",
        description: "Pengabdian masyarakat oleh Masjid Raden Patah.",
        type: "ANNUALY",
      },
      {
        id: "cafe-mrp",
        title: "Cafe MRP",
        image: "cafe-mrp.jpg",
        description: "Diskusi ringan dan santai di cafe masjid.",
        type: "ANNUALY",
      },
      {
        id: "cafe-ramadhan",
        title: "Cafe Ramadhan",
        image: "cafe-ramadhan.jpg",
        description: "Diskusi Islami santai selama Ramadhan.",
        type: "ANNUALY",
      },
      {
        id: "tabligh-akbar",
        title: "Tabligh Akbar",
        image: "tabligh-akbar.jpg",
        description: "Acara besar dengan tema keislaman tertentu.",
        type: "ANNUALY",
      },
      {
        id: "seminar-qurani",
        title: "Seminar Qur'ani",
        image: "seminar-qurani.jpg",
        description: "Seminar membahas topik Al-Qur'an dan Islam.",
        type: "ANNUALY",
      },
      {
        id: "ptq-berkarya",
        title: "PTQ Berkarya",
        image: "ptq-berkarya.jpg",
        description: "Program Tahfidz Qur'an untuk masyarakat.",
        type: "ANNUALY",
      },
      {
        id: "tahfidz-camp",
        title: "Tahfidz Camp",
        image: "tahfidz-camp.jpg",
        description: "Kegiatan kemah untuk tahfidz Al-Qur'an.",
        type: "ANNUALY",
      },
      {
        id: "syiar-dakwah-disabilitas",
        title: "Syi'ar Dakwah Disabilitas",
        image: "syiar-dakwah-disabilitas.jpg",
        description: "Dakwah Islami untuk masyarakat disabilitas.",
        type: "ANNUALY",
      },
    ],
  });

  console.log(`Seeded ${programs.count} programs.`);

  // Seed for program executions
  const programExecutions = await prisma.programExecution.createMany({
    data: [
      {
        id: "execution-1",
        date: new Date("2025-01-10"),
        programId: "kelas-psikologi-islam",
        status: "DONE",
      },
      {
        id: "execution-2",
        date: new Date("2025-01-11"),
        programId: "kelas-tahsin",
        status: "DONE",
      },
      {
        id: "execution-3",
        date: new Date("2025-01-12"),
        programId: "kajian-tafsir-al-munir",
        status: "UPCOMING",
      },
      {
        id: "execution-4",
        date: new Date("2025-01-13"),
        programId: "kajian-islam-tematik-menjelang-maghrib",
        status: "UPCOMING",
      },
      {
        id: "execution-5",
        date: new Date("2025-01-14"),
        programId: "kultum-zuhur",
        status: "UPCOMING",
      },
      {
        id: "execution-6",
        date: new Date("2025-01-15"),
        programId: "kajian-fiqih-4-mazhab",
        status: "UPCOMING",
      },
      {
        id: "execution-7",
        date: new Date("2025-01-16"),
        programId: "baca-tulis-al-quran",
        status: "UPCOMING",
      },
      {
        id: "execution-8",
        date: new Date("2025-01-17"),
        programId: "kelas-pra-nikah-parenting",
        status: "UPCOMING",
      },
      {
        id: "execution-9",
        date: new Date("2025-01-18"),
        programId: "kajian-tazkiyatun-nafs",
        status: "UPCOMING",
      },
      {
        id: "execution-10",
        date: new Date("2025-01-19"),
        programId: "kajian-tafsir-surah-al-fatihah",
        status: "UPCOMING",
      },
      {
        id: "execution-11",
        date: new Date("2025-01-20"),
        programId: "gebyar-ramadhan",
        status: "UPCOMING",
      },
      {
        id: "execution-12",
        date: new Date("2025-01-21"),
        programId: "wisuda-tahfidz",
        status: "UPCOMING",
      },
      {
        id: "execution-13",
        date: new Date("2025-01-22"),
        programId: "mrp-mengabdi",
        status: "UPCOMING",
      },
      {
        id: "execution-14",
        date: new Date("2025-01-23"),
        programId: "cafe-mrp",
        status: "UPCOMING",
      },
      {
        id: "execution-15",
        date: new Date("2025-01-24"),
        programId: "cafe-ramadhan",
        status: "UPCOMING",
      },
      {
        id: "execution-16",
        date: new Date("2025-01-25"),
        programId: "tabligh-akbar",
        status: "UPCOMING",
      },
      {
        id: "execution-17",
        date: new Date("2025-01-26"),
        programId: "seminar-qurani",
        status: "UPCOMING",
      },
      {
        id: "execution-18",
        date: new Date("2025-01-27"),
        programId: "ptq-berkarya",
        status: "UPCOMING",
      },
      {
        id: "execution-19",
        date: new Date("2025-01-28"),
        programId: "tahfidz-camp",
        status: "UPCOMING",
      },
      {
        id: "execution-20",
        date: new Date("2025-01-29"),
        programId: "syiar-dakwah-disabilitas",
        status: "UPCOMING",
      },
    ],
  });

  console.log(`Seeded ${programExecutions.count} program executions.`);
}

main()
  .then(() => {
    console.log("Seeding completed.");
    prisma.$disconnect();
  })
  .catch((error) => {
    console.error("Error seeding database:", error);
    prisma.$disconnect();
    process.exit(1);
  });
