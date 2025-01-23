import Program from "@/app/(public)/programs/[id]/page";

const Page = async (Props: { params: Promise<{ id: string }> }) => {
  return <Program {...Props} />;
};
export default Page;
