import React from "react";
import { getProgramByIdAction } from "@/actions/programActions";
import ProgramPreview from "@/components/ProgramPreview";
import { notFound } from "next/navigation";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const { status, data: program } = await getProgramByIdAction(id);

  if (status === "ERROR" || !program) {
    return notFound();
  }

  return (
    <div
      className={"mt-32 flex size-full flex-col items-center overflow-hidden"}
    >
      <section className={"container flex w-full flex-col gap-32"}>
        <ProgramPreview program={program} className={""} />
      </section>
    </div>
  );
};
export default Page;
