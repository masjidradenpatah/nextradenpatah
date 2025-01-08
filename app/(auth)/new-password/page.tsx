import React, { Suspense } from "react";
import NewPasswordForm from "@/components/forms/NewPasswordForm";

const Page = () => {
  return (
    <div
      className={
        "flex h-full w-full items-center justify-center" + " min-h-screen"
      }
    >
      <Suspense>
        <NewPasswordForm />
      </Suspense>
    </div>
  );
};
export default Page;
