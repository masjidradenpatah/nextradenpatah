import SectionTitle from "@/components/SectionTitle";
import { upcomingProgram } from "@/data/Programs";
import { ProgramCard } from "@/components/ProgramCard";
import { BgSingle, BgTriple } from "@/components/decorations/shades";

const Information = () => {
  return (
    <section className={"w-full"}>
      <div className="container relative flex flex-col items-center gap-8 lg:gap-16">
        {/* Start Background*/}
        <BgSingle
          className={"size-[450px] -translate-x-2/3 -translate-y-1/3"}
          position={"topLeft"}
        />
        <BgTriple
          className={"size-[1000px] translate-x-2/3 translate-y-1/2"}
          position={"bottomRight"}
        />
        {/* End Background*/}
        <SectionTitle
          title={"Agenda Yang Akan Datang"}
          subtitle={"Jangan sampai ketinggalan"}
          className={"sm:w-full"}
        />

        <div
          className={
            "grid w-full grid-cols-1 place-content-center gap-6 max-sm:max-w-[400px] sm:grid-cols-2 lg:grid-cols-3"
          }
        >
          {/* Upcoming Innformation Here */}
          {upcomingProgram.map((program) => {
            return (
              <div key={program.title} className={"flex flex-col gap-7"}>
                <div className="rounded-2xl border-2 border-white bg-gradient-to-br from-[#DCF2F2] via-[#C6EAED] via-50% to-[#46D7F6] py-2 text-center text-2xl font-semibold text-primary">
                  Selasa, 28 Oktober 2024
                </div>
                <ProgramCard {...program} />
              </div>
            );
          })}
          {/* Upcoming Innformation Here */}
        </div>
      </div>
    </section>
  );
};
export default Information;
