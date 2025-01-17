import React from "react";
import { auth } from "@/auth";
import SignOutButton from "@/components/SignOutButton";

const Page = async () => {
  const session = await auth();
  const user = session?.user;
  return (
    <div className={"max-w-sm"}>
      {/*{JSON.stringify(session)}*/}
      {/*<SignOutButton />*/}
      haloo
      {/*<div className="flex flex-col gap-4">*/}
      {/*  <p>user id: {user?.id}</p>*/}
      {/*  <p>name: {user?.name}</p>*/}
      {/*  <p>email: {user?.email}</p>*/}
      {/*  <p>email Verified: {user?.emailVerified}</p>*/}
      {/*  <p>password: {user?.password}</p>*/}
      {/*  <p>created at: {user?.createdAt}</p>*/}
      {/*  <p>updated at: {user?.updatedAt}</p>*/}
      {/*</div>*/}
    </div>
  );
};
export default Page;
