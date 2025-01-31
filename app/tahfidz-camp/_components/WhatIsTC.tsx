export default function WhatIsTC() {
  return (
    <section id="what">
      <div className="tc-container mx-auto flex w-full flex-col gap-16">
        <div className="flex flex-col gap-2 rounded-[48px] rounded-br-none bg-[var(--tc-primary)] p-4 shadow md:rounded-[96px] md:p-6 lg:p-12">
          <h2 className="whatTC sectionTitle text-center font-semibold">
            Apa itu Tahfidz Camp ?
          </h2>
          <p className="whatTC text-center text-[16px] lg:text-2xl">
            Tahfidz Camp merupakan kegiatan membersamai Al-Qur&#39;an berupa
            ziyadah, murojaah, tilawah, dan kegiatan interaktif lainnya selama
            satu pekan di Masjid Raden Patah UB. Tahun ini Tahfidz camp
            bertemakan “Make Boundaries, Deepen Connections Through the Qur’an.
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-[48px] rounded-bl-none bg-white p-4 shadow md:rounded-[96px] md:p-6 lg:p-12">
          <h2 className="targetTC sectionTitle text-center">Tujuan Kegiatan</h2>
          <p className="text-center text-[16px] text-[var(--tc-primary)] lg:text-2xl">
            Tahfidz Camp bertujuan untuk memberikan wadah kepada penghafal
            Al-Qur’an untuk menambah dan muroja’ah hafalan Al-Qur’an. Juga untuk
            mengisi kegiatan liburan dengan kegiatan yang bermanfaat.
          </p>
        </div>
      </div>
    </section>
  );
}
