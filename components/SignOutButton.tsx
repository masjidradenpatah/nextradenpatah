import React from "react";
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const SignOutButton = () => {

  return (
    <form action={async ()=>{
      'use server'
        await signOut();
    }}>
      <Button>Sign Out</Button>
    </form>
  );
};
export default SignOutButton;
