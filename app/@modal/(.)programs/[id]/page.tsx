import React from "react";
import { getProgramByIdAction } from "@/actions/programActions";
import ProgramDetail from "@/components/ProgramDetail";
import Modal from "@/components/Modal";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const program = await getProgramByIdAction(id);

  if (!program) {
    throw new Error("Program doesn't exist");
  }

  return (
    <Modal modalTitle={"Program Masjid Raden Patah"}>
      <ProgramDetail program={program} className={""} />
    </Modal>
  );
};
export default Page;
