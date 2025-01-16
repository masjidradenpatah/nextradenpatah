"use client";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import z from "zod";
import { signUpSchema } from "@/schemas/authSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpAction } from "@/actions/auth";
import GoogleSignIn from "@/components/GoogleSignIn";
import { FeedbackMessage } from "@/components/FeedbackMessage";

const SignUpForm = () => {
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<string>();
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signUpSchema>) {
    const response = await signUpAction(values);
    if (response.error) {
      setError(response.error);
    } else if (response.success) {
      setSuccess(response.success);
    }
  }
  return (
    <>
      <div className={"flex w-full flex-col items-center justify-center"}>
        <p
          className={
            "mb-12 text-center text-3xl font-semibold text-muted-foreground"
          }
        >
          Selamat Datang di{" "}
          <span className={"text-nowrap text-primary"}>
            {" "}
            Masjid Raden Patah
          </span>
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="text" placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Password Confirmation"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className={"w-full"}>
              Sign Up
            </Button>
            {error && <FeedbackMessage type={"error"} message={error} />}
            {success && <FeedbackMessage type={"success"} message={success} />}
          </form>
        </Form>
      </div>
      <div
        className={
          "flex flex-col items-center justify-center gap-4 text-lg text-muted-foreground"
        }
      >
        <p>Or Sign Up With</p>
        <GoogleSignIn />
      </div>
    </>
  );
};
export default SignUpForm;
