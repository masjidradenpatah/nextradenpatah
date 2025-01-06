import React from "react";
import ResetPasswordForm from "@/components/forms/ResetPasswordForm";
import Link  from "next/link";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div>
      <ResetPasswordForm />
      <Button asChild={true} variant={'link'}>
        <Link href={'/signIn'}>Back to signIn</Link>
      </Button>
    </div>
  );
};
export default Page;
