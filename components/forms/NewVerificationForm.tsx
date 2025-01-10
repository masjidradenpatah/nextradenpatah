"use client";
import React, { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useSearchParams } from "next/navigation";
import { verifyEmail } from "@/actions/auth";

const NewVerificationForm = () => {
  const [message, setMessage] = useState<Record<string, string> | undefined>();
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (!token) {
      setMessage({ error: "Token is missing" });
      return;
    }

    verifyEmail(token)
      .then((data) => setMessage(data))
      .catch(() => {});
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <Card>
      <CardHeader>Confirm Your Email</CardHeader>
      <CardContent>
        {!message && <BeatLoader />}
        {message && <p>message</p>}
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};
export default NewVerificationForm;
