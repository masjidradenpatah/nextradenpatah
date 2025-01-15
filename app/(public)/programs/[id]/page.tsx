import React from "react";
import { getProgramByIdAction } from "@/actions/programActions";
import ProgramDetail from "@/components/ProgramDetail";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const program = await getProgramByIdAction(id);
  return (
    <div
      className={"mt-32 flex size-full flex-col items-center overflow-hidden"}
    >
      <section className={"container flex w-full flex-col gap-32"}>
        <ProgramDetail program={program} className={""} />
      </section>
    </div>
  );
};
export default Page;
