export default function TimeLocation() {
  return (
    <section id="timeLocation" className="timeLocationBG w-full px-4 md:p-12">
      <div className="tc-container mx-auto rounded-[48px] border-4 border-white bg-white/55 py-8 backdrop-blur-3xl md:py-12">
        <div className="mx-auto flex flex-col gap-6 lg:gap-8 lg:px-[72px]">
          <h2 className="sectionTitle text-center font-semibold text-[var(--tc-primary)]">
            Waktu & Lokasi Kegiatan
          </h2>
          <div className="flex flex-col gap-6">
            <div className="flex gap-[10px] rounded-[19px] bg-white p-4 shadow md:p-8">
              <img src="/tc/icons/date_icon.svg" alt="" />
              <div className="flex flex-col justify-center">
                <h3 className="text-[20px] text-[var(--tc-primary)] lg:text-2xl">
                  22 Desember - 29 Desember 2024
                </h3>
              </div>
            </div>
            <div className="flex gap-[10px] rounded-[19px] bg-white p-4 shadow md:p-8">
              <img src="/tc/icons/location_icon.svg" alt="" />
              <div className="flex flex-col justify-center">
                <h3 className="text-[20px] text-[var(--tc-primary)] lg:text-2xl">
                  Masjid Raden Patah
                </h3>
                <h4 className="text-[var(--tc-primary)]">
                  Universitas Brawijaya
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
