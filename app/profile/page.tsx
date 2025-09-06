import type { Metadata } from "next";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import about from "@/public/about-mrp.png";
import logobig from "@/public/logo-mrp-big.png";
import tower from "@/public/profile.png";

export const metadata: Metadata = {
  title: "Profile Masjid Raden Patah",
  description: "Sejarah dan filosofi Masjid Raden Patah Universitas Brawijaya",
};

const Page = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 sm:px-6">
        <div className="islamic-pattern absolute inset-0 opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Badge className="mb-4 border-primary bg-primary text-xs font-medium text-primary-foreground sm:mb-6 sm:text-sm">
            Universitas Brawijaya
          </Badge>
          <h1 className="mb-4 text-balance text-4xl font-bold leading-tight text-primary sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Masjid Raden Patah
          </h1>
          <p className="mx-auto max-w-2xl text-pretty px-4 text-lg text-muted-foreground sm:text-xl md:text-2xl">
            Pusat spiritual dan intelektual yang memadukan tradisi Islam dengan
            modernitas akademik
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent sm:h-32" />
      </section>

      {/* History Section */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center sm:mb-12 md:mb-16">
            <Badge className="mb-3 border-accent/20 bg-accent/10 text-accent sm:mb-4">
              Sejarah
            </Badge>
            <h2 className="mb-4 text-3xl font-bold text-primary sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
              Perjalanan Bersejarah
            </h2>
            <p className="mx-auto max-w-3xl px-4 text-lg text-muted-foreground sm:text-xl">
              Dari masjid sederhana hingga menjadi landmark spiritual kampus
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative order-2 lg:order-1">
              <Card className="geometric-border overflow-hidden shadow-2xl">
                <CardContent className="p-0">
                  <Image
                    src={tower}
                    alt="Menara Masjid Raden Patah"
                    width={500}
                    height={600}
                    className="h-[300px] w-full object-cover sm:h-[400px] md:h-[500px] lg:h-[600px]"
                  />
                </CardContent>
              </Card>
              <div className="absolute -bottom-3 -right-3 size-16 rounded-full bg-accent/20 blur-3xl sm:-bottom-6 sm:-right-6 sm:size-32" />
              <div className="absolute -left-3 -top-3 size-12 rounded-full bg-primary/20 blur-2xl sm:-left-6 sm:-top-6 sm:size-24" />
            </div>

            <div className="order-1 space-y-6 sm:space-y-8 lg:order-2">
              <Card className="border-l-4 border-l-primary p-4 shadow-lg sm:p-6 md:p-8">
                <CardContent className="p-0">
                  <div className="mb-3 flex items-center gap-3 sm:mb-4">
                    <div className="size-2 rounded-full bg-primary sm:size-3" />
                    <Badge
                      variant="outline"
                      className="border-primary text-xs text-primary sm:text-sm"
                    >
                      1975
                    </Badge>
                  </div>
                  <p className="text-base leading-relaxed text-card-foreground sm:text-lg">
                    Masjid Raden Patah Universitas Brawijaya (MRP UB) dinamai
                    untuk menghormati Raden Patah, raja Islam pertama di tanah
                    Jawa. Awalnya, masjid ini didirikan dengan kapasitas
                    terbatas, hanya mampu menampung sekitar 200 jamaah.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary p-4 shadow-lg sm:p-6 md:p-8">
                <CardContent className="p-0">
                  <div className="mb-3 flex items-center gap-3 sm:mb-4">
                    <div className="size-2 rounded-full bg-primary sm:size-3" />
                    <Badge
                      variant="outline"
                      className="border-accent text-xs text-primary sm:text-sm"
                    >
                      2010-2014
                    </Badge>
                  </div>
                  <p className="text-base leading-relaxed text-card-foreground sm:text-lg">
                    Pada era Rektor Prof. Dr. Ir. Yogi Sugito, MRP UB menjalani
                    pemugaran total dengan desain bergaya Majapahit yang
                    dirancang oleh arsitek Ir. Ali Sukirno. Proyek pembangunan
                    dimulai dengan anggaran Rp43 miliar.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary p-4 shadow-lg sm:p-6 md:p-8">
                <CardContent className="p-0">
                  <div className="mb-3 flex items-center gap-3 sm:mb-4">
                    <div className="size-2 rounded-full bg-primary sm:size-3" />
                    <Badge
                      variant="outline"
                      className="border-primary text-xs text-primary sm:text-sm"
                    >
                      2018
                    </Badge>
                  </div>
                  <p className="text-base leading-relaxed text-card-foreground sm:text-lg">
                    Pembangunan selesai dengan total anggaran Rp39 miliar.
                    Dengan luas bangunan 6.830 m², masjid kini mampu menampung
                    hingga 4.500 jamaah untuk salat dan lebih dari 7.000 jamaah
                    untuk kegiatan pengajian.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-muted/30 px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <Badge className="mb-3 border-primary/20 bg-primary/10 text-primary sm:mb-4">
                Tentang MRP
              </Badge>
              <h2 className="mb-6 text-balance text-3xl font-bold text-primary sm:mb-8 sm:text-4xl md:text-5xl lg:text-6xl">
                Masjid Kampus Inklusif
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-foreground sm:mb-8 sm:text-xl">
                MRP UB dibangun sebagai masjid kampus yang inklusif, memajukan
                dakwah yang damai, toleran, dan berbasis kearifan lokal. Masjid
                ini menjadi ruang ibadah sekaligus pusat pembinaan mahasiswa,
                pendidikan, dan pengembangan ilmu serta amal.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <Badge className="bg-primary text-xs text-primary-foreground sm:text-sm">
                  Inklusif
                </Badge>
                <Badge className="bg-accent text-xs text-accent-foreground sm:text-sm">
                  Toleran
                </Badge>
                <Badge className="border-primary bg-primary/10 text-xs text-primary sm:text-sm">
                  Kearifan Lokal
                </Badge>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <Card className="geometric-border overflow-hidden shadow-2xl">
                <CardContent className="p-0">
                  <Image
                    src={about}
                    alt="Masjid Raden Patah"
                    width={600}
                    height={500}
                    className="h-[250px] w-full object-cover sm:h-[350px] md:h-[450px] lg:h-[500px]"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Philosophy Section */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center sm:mb-12 md:mb-16">
            <Badge className="mb-3 border-accent/20 bg-accent/10 text-accent sm:mb-4">
              Filosofi
            </Badge>
            <h2 className="mb-4 text-3xl font-bold text-primary sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
              Makna Logo
            </h2>
            <p className="mx-auto max-w-3xl px-4 text-lg text-muted-foreground sm:text-xl">
              Setiap elemen dalam logo memiliki makna mendalam yang mencerminkan
              nilai-nilai Islam dan akademik
            </p>
          </div>

          <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 flex justify-center lg:order-1">
              <Card className="geometric-border bg-gradient-to-br from-primary/5 to-accent/5 p-6 shadow-2xl sm:p-8 md:p-12">
                <CardContent className="p-0">
                  <Image
                    src={logobig}
                    alt="Logo Masjid Raden Patah"
                    width={350}
                    height={450}
                    className="mx-auto h-auto w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px]"
                    quality={100}
                  />
                </CardContent>
              </Card>
            </div>

            <div className="order-1 space-y-6 sm:space-y-8 lg:order-2">
              <Card className="p-4 shadow-lg transition-shadow hover:shadow-xl sm:p-6 md:p-8">
                <CardContent className="p-0">
                  <h3 className="mb-3 text-xl font-bold text-primary sm:mb-4 sm:text-2xl">
                    Inspirasi Gunungan
                  </h3>
                  <p className="text-base leading-relaxed text-card-foreground sm:text-lg">
                    Logo MRP UB terinspirasi dari bentuk gunungan pewayangan,
                    yang bermakna pintu ilmu dan amal, mencerminkan dua aspek
                    fundamental dalam Islam.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-4 shadow-lg transition-shadow hover:shadow-xl sm:p-6 md:p-8">
                <CardContent className="p-0">
                  <h3 className="mb-3 text-xl font-bold text-primary sm:mb-4 sm:text-2xl">
                    Makna Warna Tosca
                  </h3>
                  <p className="text-base leading-relaxed text-card-foreground sm:text-lg">
                    Warna tosca adalah perpaduan hijau (simbol surga & sunnah)
                    dan biru (warna UB, simbol modernitas), menggambarkan
                    harmoni antara spiritualitas dan intelektualitas.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-4 shadow-lg transition-shadow hover:shadow-xl sm:p-6 md:p-8">
                <CardContent className="p-0">
                  <h3 className="mb-3 text-xl font-bold text-primary sm:mb-4 sm:text-2xl">
                    Kaligrafi Kembar
                  </h3>
                  <p className="text-base leading-relaxed text-card-foreground sm:text-lg">
                    Terdapat kaligrafi &#34;Masjid Raden Patah&#34; dalam pola
                    kembar, mencerminkan dua pintu: ilmu dan amal, yang menjadi
                    fondasi tri dharma perguruan tinggi.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <Badge className="mb-4 border-primary/20 bg-primary/10 text-primary sm:mb-6">
            Visi
          </Badge>
          <h2 className="mb-8 text-3xl font-bold text-primary sm:mb-12 sm:text-4xl md:text-5xl lg:text-6xl">
            Visi Kami
          </h2>
          <Card className="bg-card/80 p-6 shadow-2xl backdrop-blur-sm sm:p-8 md:p-12">
            <CardContent className="p-0">
              <blockquote className="text-balance text-xl font-medium leading-relaxed text-foreground sm:text-2xl md:text-3xl lg:text-4xl">
                &#34;Menjadi masjid kampus yang memajukan peradaban dengan
                berbasis pada pengembangan insani serta intelektualitas
                Islami&#34;
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-start gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <Badge className="mb-3 border-accent bg-accent text-accent-foreground sm:mb-4">
                Misi
              </Badge>
              <h2 className="mb-8 text-3xl font-bold text-primary sm:mb-12 sm:text-4xl md:text-5xl lg:text-6xl">
                Misi Kami
              </h2>

              <div className="space-y-4 sm:space-y-6">
                {[
                  "Mengembangkan kreativitas mahasiswa dalam bingkai Islam yang berperadaban",
                  "Menjadikan masjid sebagai pusat kegiatan kemahasiswaan dan kemasyarakatan",
                  "Menjadikan masjid sebagai tempat rekreasi rohani",
                  "Menjadikan masjid sebagai tempat merujuk berbagai persoalan keumatan",
                  "Menjadikan masjid sebagai pesantren dan pusat studi yang bersahabat bagi mahasiswa",
                  "Membangun dan menggerakkan pemikiran Islami yang rahmatan lil 'alamin baik di lingkungan kampus maupun masyarakat",
                ].map((mission, index) => (
                  <Card
                    key={index}
                    className="p-4 shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl sm:p-6"
                  >
                    <CardContent className="p-0">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground sm:size-8 sm:text-sm">
                          {index + 1}
                        </div>
                        <p className="text-base leading-relaxed text-card-foreground sm:text-lg">
                          {mission}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <Card className="geometric-border overflow-hidden shadow-2xl">
                <CardContent className="p-0">
                  <Image
                    src={tower}
                    alt="Menara Masjid Raden Patah"
                    width={500}
                    height={800}
                    className="h-[400px] w-full object-cover sm:h-[500px] md:h-[600px] lg:h-[800px]"
                  />
                </CardContent>
              </Card>
              <div className="absolute -bottom-4 -left-4 size-20 rounded-full bg-primary/20 blur-3xl sm:-bottom-8 sm:-left-8 sm:size-40" />
              <div className="absolute -right-4 -top-4 size-16 rounded-full bg-accent/20 blur-2xl sm:-right-8 sm:-top-8 sm:size-32" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gradient-to-r from-primary to-accent px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-balance text-2xl font-bold text-primary-foreground sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
            Bergabunglah dengan Komunitas Kami
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-primary-foreground/90 sm:mb-8 sm:text-xl">
            Mari bersama membangun peradaban Islam yang rahmatan lil &#39;alamin
            di lingkungan kampus
          </p>
        </div>
      </section>
    </div>
  );
};

export default Page;
