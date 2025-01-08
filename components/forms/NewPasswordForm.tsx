"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useSearchParams } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import z from "zod";
import { newPasswordSchema } from "@/schemas/authSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { newPasswordAction } from "@/actions/auth";

const NewPasswordForm = () => {
  const [message, setMessage] = useState<Record<string, string> | undefined>();
  const searchParams = useSearchParams();

  // 1. Define your form.
  const form = useForm<z.infer<typeof newPasswordSchema>>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const token = searchParams.get("token");

  async function onSubmit(values: z.infer<typeof newPasswordSchema>) {
    if (!token) {
      setMessage({ error: "Token is missing" });
      return;
    }

    newPasswordAction(values, token)
      .then((data) => setMessage(data))
      .catch(() => console.log("Something wen wrong"));
    console.log(values);
  }

  return (
    <Card>
      <CardHeader>Confirm Your Email</CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="*******" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Reset Password</Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>{message?.first}</CardFooter>
    </Card>
  );
};
export default NewPasswordForm;
