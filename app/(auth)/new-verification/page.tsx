import React, { Suspense } from "react";
import NewVerificationForm from "@/components/forms/NewVerificationForm";

const Page = () => {
  return (
    <div
      className={
        "flex h-full w-full items-center justify-center" + " min-h-screen"
      }
    >
      <Suspense>
        <NewVerificationForm />
      </Suspense>
    </div>
  );
};
export default Page;
