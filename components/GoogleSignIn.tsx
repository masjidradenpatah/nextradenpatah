'use client'
import React from "react";
import {signIn} from 'next-auth/react'
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { Button } from "@/components/ui/button";

const GoogleSignIn = () => {
  async function onClick() {
    await signIn('google', {
      redirectTo: DEFAULT_LOGIN_REDIRECT
    })
  }
  return (
    <Button onClick={()=> onClick()}>
      Google
    </Button>
  );
};
export default GoogleSignIn;
