"use client";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import z from "zod";
import { signInSchema } from "@/schemas/authSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInAction } from "@/actions/auth";
import GoogleSignIn from "@/components/GoogleSignIn";
import { LogIn, TriangleAlert } from "lucide-react";
import { FeedbackMessage } from "@/components/FeedbackMessage";

const SignInForm = () => {
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<string>();
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signInSchema>) {
    const response = await signInAction(values);
    if (response.error) {
      setError(response.error);
    } else if (response.success) {
      setSuccess(response.success);
    }
  }
  return (
    <>
      <div className={"flex w-full flex-col items-center justify-center"}>
        <p className={"mb-12 text-3xl font-semibold text-primary"}>
          Masjid Raden Patah
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                  <FormDescription />
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
                  <FormDescription />
                </FormItem>
              )}
            />

            <Button type="submit" className={"w-full text-lg"}>
              Sign In <LogIn className={"size-full text-white"}></LogIn>
            </Button>
            {error ? (
              <FeedbackMessage type={"error"} message={error} />
            ) : success ? (
              <FeedbackMessage type={"success"} message={success} />
            ) : null}
          </form>
        </Form>
      </div>
      <div
        className={
          "flex flex-col items-center justify-center gap-4 text-lg text-muted-foreground"
        }
      >
        <p>Or Sign In With</p>
        <GoogleSignIn />
        <p>Forgot Password?</p>
      </div>
    </>
  );
};
export default SignInForm;
