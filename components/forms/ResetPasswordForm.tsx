"use client";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import z from "zod";
import { resetPasswordSchema } from "@/schemas/authSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordAction } from "@/actions/auth";

const ResetPasswordForm = () => {
  const [message, setMessage] = useState<Record<string, string> | undefined>();
  // 1. Define your form.
  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof resetPasswordSchema>) {
    console.log(values);
    try {
      const response = await resetPasswordAction(values);
      setMessage(response);
    } catch {
      setMessage({ error: "Something went wrong from on submit function" });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="jhondoe@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
              <FormDescription />
            </FormItem>
          )}
        />
        {message?.error && <p>{message.error}</p>}
        {message?.success && (
          <p>Success generating and sending new reset token</p>
        )}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
export default ResetPasswordForm;
