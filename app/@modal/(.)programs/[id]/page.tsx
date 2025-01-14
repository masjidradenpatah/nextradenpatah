import React from "react";
import { getProgramByID } from "@/data/Programs";
import ProgramDetail from "@/components/ProgramDetail";
import Modal from "@/components/Modal";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const program = await getProgramByID(id);

  if (!program) {
    throw new Error("Program doesn't exist");
  }

  return (
    <Modal modalTitle={"Program Masjid Raden Patah"}>
      {/*<section className={"container flex w-full flex-col gap-32"}>*/}
      <ProgramDetail program={program} className={""} />
    </Modal>
  );
};
export default Page;
