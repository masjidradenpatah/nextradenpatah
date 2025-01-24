import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.program.createMany({
    data: [
      {
        id: "kelas-psikologi-islam",
        title: "Kelas Psikologi Islam",
        image: "/programs/KPI.png",
        description:
          "Kelas Psikologi Islam (KPI) adalah program yang dirancang untuk membahas isu-isu psikologi dari sudut pandang Islam, memberikan pemahaman tentang bagaimana nilai-nilai Islam dapat menjadi solusi atas berbagai tantangan psikologis dan spiritual di era modern. Program ini dipandu oleh Ustadzah Fuji Astutik, M.Psi., seorang psikolog klinis sekaligus dosen Fakultas Psikologi di UIN Maulana Malik Ibrahim Malang. Dengan keahliannya, Ustadzah Fuji memberikan wawasan yang mendalam dan relevan mengenai hubungan antara psikologi dan ajaran Islam.\n" +
          "\n" +
          "Kegiatan ini diadakan pada Jumat sore pukul 15.00 di Ruang Majelis, Lantai 2, Masjid Raden Patah Universitas Brawijaya, sesuai jadwal yang telah ditentukan. KPI terbuka untuk umum, sehingga siapa saja dapat bergabung tanpa batasan tertentu. Program ini bertujuan membantu peserta menghadapi berbagai tantangan kehidupan modern dengan pendekatan Islam yang menyeluruh, sehingga dapat meningkatkan kesehatan mental sekaligus memperkuat hubungan spiritual dengan Sang Pencipta.",
        content:
          "<p>Kelas Psikologi Islam (KPI) adalah program yang dirancang untuk membahas isu-isu psikologi dari sudut pandang Islam, memberikan" +
          " pemahaman tentang bagaimana nilai-nilai Islam dapat menjadi solusi atas berbagai tantangan psikologis dan spiritual di era modern. Program ini dipandu oleh Ustadzah Fuji Astutik, M.Psi., seorang psikolog klinis sekaligus dosen Fakultas Psikologi di UIN Maulana Malik Ibrahim Malang. Dengan keahliannya, Ustadzah Fuji memberikan wawasan yang mendalam dan relevan mengenai hubungan antara psikologi dan ajaran Islam.\n" +
          "</p>" +
          "<p>Kegiatan ini diadakan pada Jumat sore pukul 15.00 di Ruang Majelis, Lantai 2, Masjid Raden Patah Universitas Brawijaya, sesuai jadwal" +
          " yang telah ditentukan. KPI terbuka untuk umum, sehingga siapa saja dapat bergabung tanpa batasan tertentu. Program ini bertujuan" +
          " membantu peserta menghadapi berbagai tantangan kehidupan modern dengan pendekatan Islam yang menyeluruh, sehingga dapat meningkatkan" +
          " kesehatan mental sekaligus memperkuat hubungan spiritual dengan Sang Pencipta.</p>",
        customeUrl: null,
        type: "DAILY",
      },
      {
        id: "kelas-tahsin",
        title: "Kelas Tahsin",
        image: "/programs/TAHSIN.png",
        description:
          "Kelas Tahsin merupakan program pembelajaran yang bertujuan untuk memperbaiki dan meningkatkan kualitas bacaan Al-Qur'an sesuai dengan kaidah tajwid. Program ini dirancang untuk membantu peserta memahami dan melafalkan ayat-ayat Al-Qur'an dengan benar dan indah, sehingga bacaan mereka menjadi lebih baik dan sesuai dengan tuntunan.\n" +
          "\n" +
          "Kelas ini dipandu oleh Ustadz Ahmadhika Maulana, seorang pembina Imam Muda Center Masjid Raden Patah Universitas Brawijaya yang memiliki pengalaman dalam membimbing para peserta untuk memperbaiki bacaan Al-Qur'an mereka. Kegiatan dilaksanakan setiap hari Selasa pukul 16.00 di Ruang Majelis, Lantai 2, Masjid Raden Patah UB, sesuai dengan jadwal yang telah ditentukan. Program ini terbuka untuk umum, sehingga siapa saja yang ingin memperbaiki bacaan Al-Qur'an mereka dapat bergabung tanpa batasan tertentu.",
        type: "DAILY",
        content:
          "<p>Kelas Tahsin merupakan program pembelajaran yang bertujuan untuk memperbaiki dan meningkatkan kualitas bacaan Al-Qur'an sesuai dengan" +
          " kaidah tajwid. Program ini dirancang untuk membantu peserta memahami dan melafalkan ayat-ayat Al-Qur'an dengan benar dan indah, sehingga bacaan mereka menjadi lebih baik dan sesuai dengan tuntunan.\n" +
          "</p>" +
          "<p>Kelas ini dipandu oleh Ustadz Ahmadhika Maulana, seorang pembina Imam Muda Center Masjid Raden Patah Universitas Brawijaya yang" +
          " memiliki pengalaman dalam membimbing para peserta untuk memperbaiki bacaan Al-Qur'an mereka. Kegiatan dilaksanakan setiap hari Selasa" +
          " pukul 16.00 di Ruang Majelis, Lantai 2, Masjid Raden Patah UB, sesuai dengan jadwal yang telah ditentukan. Program ini terbuka untuk" +
          " umum, sehingga siapa saja yang ingin memperbaiki bacaan Al-Qur'an mereka dapat bergabung tanpa batasan tertentu.</p>",
        customeUrl: null,
      },
      {
        id: "kajian-tafsir-al-munir",
        title: "Kajian Tafsir Al-Munir",
        image: "/programs/TAFSIR MUNIR.png",
        description:
          "Kajian Tafsir Al-Munir adalah program yang mengupas kitab tafsir Al-Munir, memberikan pemahaman yang lebih mendalam tentang ayat-ayat Al-Qur'an dan maknanya dalam kehidupan sehari-hari. Kajian ini bertujuan untuk membantu peserta memahami pesan-pesan Al-Qur'an dengan lebih jelas dan kontekstual, sehingga dapat menjadi panduan dalam menjalani kehidupan.\n" +
          "\n" +
          "Program ini diisi oleh Ustadz Ahmad Winardi, Lc., M.A., yang memiliki keahlian dalam bidang tafsir Al-Qur'an dan syariah. Kajian ini diadakan setiap hari Rabu pukul 16.00 di Ruang Majelis, Lantai 2, Masjid Raden Patah UB, sesuai jadwal yang telah ditentukan. Program ini menjadi wadah yang ideal bagi siapa saja yang ingin memperdalam ilmu tafsir Al-Qur'an dan memahami isinya dengan lebih baik.",
        type: "DAILY",
        content:
          "<p>Kajian Tafsir Al-Munir adalah program yang mengupas kitab tafsir Al-Munir, memberikan pemahaman yang lebih mendalam tentang ayat-ayat" +
          " Al-Qur'an dan maknanya dalam kehidupan sehari-hari. Kajian ini bertujuan untuk membantu peserta memahami pesan-pesan Al-Qur'an dengan lebih jelas dan kontekstual, sehingga dapat menjadi panduan dalam menjalani kehidupan.\n" +
          "</p>" +
          "<p>Program ini diisi oleh Ustadz Ahmad Winardi, Lc., M.A., yang memiliki keahlian dalam bidang tafsir Al-Qur'an dan syariah. Kajian ini" +
          " diadakan setiap hari Rabu pukul 16.00 di Ruang Majelis, Lantai 2, Masjid Raden Patah UB, sesuai jadwal yang telah ditentukan. Program" +
          " ini menjadi wadah yang ideal bagi siapa saja yang ingin memperdalam ilmu tafsir Al-Qur'an dan memahami isinya dengan lebih baik.</p>",
        customeUrl: null,
      },
      {
        id: "kajian-islam-tematik-menjelang-maghrib",
        title: "Kajian Islam Tematik Menjelang Maghrib",
        image: "/programs/KISMALA.png",
        description:
          "Kismala adalah kajian Islam dengan pendekatan tematik yang membahas topik-topik menarik dan relevan yang sedang terjadi di sekitar kita, dilihat dari perspektif Islam. Program ini dirancang untuk memberikan wawasan dan pandangan Islami yang aplikatif terhadap isu-isu kontemporer.\n" +
          "\n" +
          "Kajian ini menghadirkan pemateri yang ahli di bidangnya, sehingga materi yang disampaikan kaya akan pengetahuan dan manfaat. Kismala diadakan setiap hari Senin pukul 16.00, bertempat di basement Masjid Raden Patah Universitas Brawijaya. Sebagai nilai tambah, peserta juga dapat menikmati buka puasa gratis yang disediakan selama kajian berlangsung. Program ini terbuka untuk semua yang ingin memperkaya pengetahuan Islam sekaligus mempererat kebersamaan menjelang Maghrib.",
        type: "DAILY",
        content:
          "<p>Kismala adalah kajian Islam dengan pendekatan tematik yang membahas topik-topik menarik dan relevan yang sedang terjadi di sekitar" +
          " kita, dilihat dari perspektif Islam. Program ini dirancang untuk memberikan wawasan dan pandangan Islami yang aplikatif terhadap isu-isu kontemporer.\n" +
          "</p>" +
          "<p>Kajian ini menghadirkan pemateri yang ahli di bidangnya, sehingga materi yang disampaikan kaya akan pengetahuan dan manfaat. Kismala" +
          " diadakan setiap hari Senin pukul 16.00, bertempat di basement Masjid Raden Patah Universitas Brawijaya. Sebagai nilai tambah, peserta" +
          " juga dapat menikmati buka puasa gratis yang disediakan selama kajian berlangsung. Program ini terbuka untuk semua yang ingin" +
          " memperkaya pengetahuan Islam sekaligus mempererat kebersamaan menjelang Maghrib.</p>",
        customeUrl: null,
      },
      {
        id: "kajian-fiqih-4-mazhab",
        title: "Kajian Fiqih 4 Mazhab",
        image: "/programs/KAJIAN FIQIH.png",
        description:
          "Kajian Fiqih 4 Mazhab adalah program yang mengupas berbagai permasalahan fiqih yang sering muncul di kehidupan sehari-hari dengan menggunakan pendekatan dari pandangan empat mazhab utama dalam Islam. Kajian ini memberikan pemahaman yang luas dan mendalam tentang keberagaman pandangan dalam fiqih, sekaligus membantu peserta menemukan solusi yang sesuai dengan situasi masing-masing.\n" +
          "\n" +
          "Program ini dipandu oleh pemateri yang ahli di bidang fiqih, sehingga peserta dapat memperoleh penjelasan yang mendalam dan terpercaya. Kajian ini diadakan setiap hari Kamis pukul 16.00 di basement Masjid Raden Patah Universitas Brawijaya. Sebagai bagian dari program, peserta juga dapat menikmati buka puasa gratis yang disediakan. Kajian ini terbuka untuk semua yang ingin memperluas wawasan dan pemahaman tentang fiqih dalam perspektif yang komprehensif.",
        type: "DAILY",
        content:
          "<p>Kajian Fiqih 4 Mazhab adalah program yang mengupas berbagai permasalahan fiqih yang sering muncul di kehidupan sehari-hari dengan" +
          " menggunakan pendekatan dari pandangan empat mazhab utama dalam Islam. Kajian ini memberikan pemahaman yang luas dan mendalam tentang keberagaman pandangan dalam fiqih, sekaligus membantu peserta menemukan solusi yang sesuai dengan situasi masing-masing.\n" +
          "</p>" +
          "<p>Program ini dipandu oleh pemateri yang ahli di bidang fiqih, sehingga peserta dapat memperoleh penjelasan yang mendalam dan" +
          " terpercaya. Kajian ini diadakan setiap hari Kamis pukul 16.00 di basement Masjid Raden Patah Universitas Brawijaya. Sebagai bagian" +
          " dari program, peserta juga dapat menikmati buka puasa gratis yang disediakan. Kajian ini terbuka untuk semua yang ingin memperluas" +
          " wawasan dan pemahaman tentang fiqih dalam perspektif yang komprehensif.</p>",
        customeUrl: null,
      },
      {
        id: "baca-tulis-al-quran",
        title: "Baca Tulis Al-Qur'an",
        image: "/programs/BTA.png",
        description:
          "Program Baca Tulis Al-Qur'an adalah bimbingan belajar 1-on-1 yang dirancang untuk membantu peserta mempelajari Al-Qur'an dari nol. Program ini sangat cocok bagi siapa saja yang ingin mulai membaca dan menulis Al-Qur'an dengan bimbingan langsung, sehingga proses belajarnya lebih fokus dan efektif.\n" +
          "\n" +
          "Pendaftaran untuk program ini dibuka dua kali dalam setahun, sementara pelaksanaannya dilakukan secara fleksibel sesuai kesepakatan antara peserta dan pembimbing. Lokasi belajar juga dapat disesuaikan, baik di Masjid Raden Patah Universitas Brawijaya maupun di rumah peserta. Program ini memberikan kesempatan bagi siapa saja untuk memulai perjalanan belajar Al-Qur'an dengan nyaman dan sesuai kebutuhan.",
        type: "DAILY",
        content:
          "Program Baca Tulis Al-Qur'an adalah bimbingan belajar 1-on-1 yang dirancang untuk membantu peserta mempelajari Al-Qur'an dari nol. Program ini sangat cocok bagi siapa saja yang ingin mulai membaca dan menulis Al-Qur'an dengan bimbingan langsung, sehingga proses belajarnya lebih fokus dan efektif.\n" +
          "\n" +
          "Pendaftaran untuk program ini dibuka dua kali dalam setahun, sementara pelaksanaannya dilakukan secara fleksibel sesuai kesepakatan antara peserta dan pembimbing. Lokasi belajar juga dapat disesuaikan, baik di Masjid Raden Patah Universitas Brawijaya maupun di rumah peserta. Program ini memberikan kesempatan bagi siapa saja untuk memulai perjalanan belajar Al-Qur'an dengan nyaman dan sesuai kebutuhan.",
        customeUrl: null,
      },
      {
        id: "kajian-tazkiyatun-nafs",
        title: "Kajian Tazkiyatun Nafs",
        image: "/programs/TAZKIYATUN NAFS.png",
        description:
          "Kajian Tazkiyatun Nafs adalah kajian rutin yang diadakan ba’da Maghrib dengan fokus pada pembahasan tazkiyatun nafs, yaitu penyucian jiwa. Kajian ini menggunakan kitab Al-Mahajjah fi Sairi Dduljah karya Al-Hafiz Imam Ibnu Rojab sebagai rujukan utama, memberikan panduan untuk memperbaiki diri dan mendekatkan hati kepada Allah.\n" +
          "\n" +
          "Program ini diasuh oleh Ustadz Jamalul Akbar, Lc., M.A., seorang ulama yang berkompeten dalam ilmu tazkiyatun nafs dan kajian keislaman. Kajian ini dilaksanakan setiap hari Selasa ba’da Maghrib di ruang utama Masjid Raden Patah Universitas Brawijaya. Program ini terbuka untuk siapa saja yang ingin memperdalam pemahaman dan praktik penyucian jiwa dalam kehidupan sehari-hari.",
        type: "DAILY",
        content:
          "<p>Kajian Tazkiyatun Nafs adalah kajian rutin yang diadakan ba’da Maghrib dengan fokus pada pembahasan tazkiyatun nafs, yaitu penyucian" +
          " jiwa. Kajian ini menggunakan kitab Al-Mahajjah fi Sairi Dduljah karya Al-Hafiz Imam Ibnu Rojab sebagai rujukan utama, memberikan panduan untuk memperbaiki diri dan mendekatkan hati kepada Allah.\n" +
          "</p>" +
          "<p>Program ini diasuh oleh Ustadz Jamalul Akbar, Lc., M.A., seorang ulama yang berkompeten dalam ilmu tazkiyatun nafs dan kajian" +
          " keislaman. Kajian ini dilaksanakan setiap hari Selasa ba’da Maghrib di ruang utama Masjid Raden Patah Universitas Brawijaya. Program" +
          " ini terbuka untuk siapa saja yang ingin memperdalam pemahaman dan praktik penyucian jiwa dalam kehidupan sehari-hari.</p>",
        customeUrl: null,
      },
      {
        id: "kajian-tafsir-surah-al-fatihah",
        title: "Kajian Tafsir Surah Al-Fatihah",
        image: "/programs/TAFSIR FATIHAH.png",
        description:
          "Kajian Tafsir Surah Al-Fatihah adalah program rutin yang diadakan ba’da Maghrib, membahas secara mendalam kandungan dan hikmah dari Surah Al-Fatihah. Kajian ini bertujuan membantu peserta memahami makna dan keutamaan Surah Al-Fatihah sebagai inti dari Al-Qur'an serta panduan hidup sehari-hari.\n" +
          "\n" +
          "Program ini dipandu oleh Ustadz Rohma Rozikin, yang memberikan penjelasan mendalam dan aplikatif tentang tafsir Surah Al-Fatihah. Kajian ini diadakan setiap hari Rabu ba’da Maghrib di ruang utama Masjid Raden Patah Universitas Brawijaya. Program ini terbuka untuk semua yang ingin memperkaya pemahaman tentang Surah Al-Fatihah dalam kehidupan mereka.",
        type: "DAILY",
        content:
          "<p>Kajian Tafsir Surah Al-Fatihah adalah program rutin yang diadakan ba’da Maghrib, membahas secara mendalam kandungan dan hikmah dari" +
          " Surah Al-Fatihah. Kajian ini bertujuan membantu peserta memahami makna dan keutamaan Surah Al-Fatihah sebagai inti dari Al-Qur'an serta panduan hidup sehari-hari.\n" +
          "</p>" +
          "<p>Program ini dipandu oleh Ustadz Rohma Rozikin, yang memberikan penjelasan mendalam dan aplikatif tentang tafsir Surah Al-Fatihah." +
          " Kajian ini diadakan setiap hari Rabu ba’da Maghrib di ruang utama Masjid Raden Patah Universitas Brawijaya. Program ini terbuka untuk" +
          " semua yang ingin memperkaya pemahaman tentang Surah Al-Fatihah dalam kehidupan mereka.</p>",
        customeUrl: null,
      },

      {
        id: "tahfidz-camp",
        title: "Tahfidz Camp",
        image: "/programs/TAHFIDZ CAMP.png",
        description:
          "Tahfidz Camp adalah program intensif yang memberikan kesempatan kepada peserta untuk fokus menghafal Al-Qur'an dalam suasana yang mendukung. Program ini dilaksanakan dengan konsep menginap di Masjid Raden Patah Universitas Brawijaya, menciptakan lingkungan yang kondusif untuk memperdalam interaksi dengan Al-Qur'an.\n" +
          "\n" +
          "Program ini terbuka untuk siapa saja yang ingin memperkuat hafalan Al-Qur'an, baik pemula maupun yang sudah memiliki hafalan sebelumnya. Tahfidz Camp diadakan selama satu minggu penuh pada bulan Desember setiap tahunnya, dengan berbagai kegiatan pendukung seperti halaqah hafalan, murajaah bersama, dan pembinaan ruhiyah. Masjid Raden Patah menjadi tempat utama pelaksanaannya, menghadirkan pengalaman yang tak terlupakan bagi setiap peserta.",
        type: "ANNUALY",
        content:
          "<p>Tahfidz Camp adalah program intensif yang memberikan kesempatan kepada peserta untuk fokus menghafal Al-Qur'an dalam suasana yang" +
          " mendukung. Program ini dilaksanakan dengan konsep menginap di Masjid Raden Patah Universitas Brawijaya, menciptakan lingkungan yang kondusif untuk memperdalam interaksi dengan Al-Qur'an.\n" +
          "</p>" +
          "<p>Program ini terbuka untuk siapa saja yang ingin memperkuat hafalan Al-Qur'an, baik pemula maupun yang sudah memiliki hafalan" +
          " sebelumnya. Tahfidz Camp diadakan selama satu minggu penuh pada bulan Desember setiap tahunnya, dengan berbagai kegiatan pendukung" +
          " seperti halaqah hafalan, murajaah bersama, dan pembinaan ruhiyah. Masjid Raden Patah menjadi tempat utama pelaksanaannya, menghadirkan" +
          " pengalaman yang tak terlupakan bagi setiap peserta.</p>",
        customeUrl: "/tahfidz-camp",
      },
    ],
  });
  // Seed for program executions
  // await prisma.programExecution.createMany({
  //   data: [
  //     {
  //       id: "execution-1",
  //       date: new Date("2025-01-10"),
  //       programId: "kelas-psikologi-islam",
  //       status: "DONE",
  //     },
  //     {
  //       id: "execution-2",
  //       date: new Date("2025-01-11"),
  //       programId: "kelas-tahsin",
  //       status: "DONE",
  //     },
  //     {
  //       id: "execution-3",
  //       date: new Date("2025-01-12"),
  //       programId: "kajian-tafsir-al-munir",
  //       status: "UPCOMING",
  //     },
  //     {
  //       id: "execution-4",
  //       date: new Date("2025-01-13"),
  //       programId: "kajian-islam-tematik-menjelang-maghrib",
  //       status: "UPCOMING",
  //     },
  //     {
  //       id: "execution-5",
  //       date: new Date("2025-01-14"),
  //       programId: "kultum-zuhur",
  //       status: "UPCOMING",
  //     },
  //     {
  //       id: "execution-6",
  //       date: new Date("2025-01-15"),
  //       programId: "kajian-fiqih-4-mazhab",
  //       status: "UPCOMING",
  //     },
  //     {
  //       id: "execution-7",
  //       date: new Date("2025-01-16"),
  //       programId: "baca-tulis-al-quran",
  //       status: "UPCOMING",
  //     },
  //     {
  //       id: "execution-8",
  //       date: new Date("2025-01-17"),
  //       programId: "kelas-pra-nikah-parenting",
  //       status: "UPCOMING",
  //     },
  //     {
  //       id: "execution-9",
  //       date: new Date("2025-01-18"),
  //       programId: "kajian-tazkiyatun-nafs",
  //       status: "UPCOMING",
  //     },
  //     {
  //       id: "execution-10",
  //       date: new Date("2025-01-19"),
  //       programId: "kajian-tafsir-surah-al-fatihah",
  //       status: "UPCOMING",
  //     },
  //     {
  //       id: "execution-11",
  //       date: new Date("2025-01-20"),
  //       programId: "gebyar-ramadhan",
  //       status: "UPCOMING",
  //     },
  //     {
  //       id: "execution-12",
  //       date: new Date("2025-01-21"),
  //       programId: "wisuda-tahfidz",
  //       status: "UPCOMING",
  //     },
  //     {
  //       id: "execution-13",
  //       date: new Date("2025-01-22"),
  //       programId: "mrp-mengabdi",
  //       status: "UPCOMING",
  //     },
  //     {
  //       id: "execution-14",
  //       date: new Date("2025-01-23"),
  //       programId: "cafe-mrp",
  //       status: "UPCOMING",
  //     },
  //     {
  //       id: "execution-15",
  //       date: new Date("2025-01-24"),
  //       programId: "cafe-ramadhan",
  //       status: "UPCOMING",
  //     },
  //     {
  //       id: "execution-16",
  //       date: new Date("2025-01-25"),
  //       programId: "tabligh-akbar",
  //       status: "UPCOMING",
  //     },
  //     {
  //       id: "execution-17",
  //       date: new Date("2025-01-26"),
  //       programId: "seminar-qurani",
  //       status: "UPCOMING",
  //     },
  //     {
  //       id: "execution-18",
  //       date: new Date("2025-01-27"),
  //       programId: "ptq-berkarya",
  //       status: "UPCOMING",
  //     },
  //     {
  //       id: "execution-19",
  //       date: new Date("2025-01-28"),
  //       programId: "tahfidz-camp",
  //       status: "UPCOMING",
  //     },
  //     {
  //       id: "execution-20",
  //       date: new Date("2025-01-29"),
  //       programId: "syiar-dakwah-disabilitas",
  //       status: "UPCOMING",
  //     },
  //   ],
  // });
}

main()
  .then(() => {
    prisma.$disconnect();
  })
  .catch(() => {
    prisma.$disconnect();
    process.exit(1);
  });
