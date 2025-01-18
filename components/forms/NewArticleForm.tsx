"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { newArticleSchema } from "@/schemas/ArticleSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@prisma/client";
import { createNewArticle } from "@/actions/articleAction";
import AdvancedEditor from "@/components/editor/advanced-editor";
import { Button } from "@/components/ui/button";
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
import { FeedbackMessage } from "@/components/FeedbackMessage";
import { useToast } from "@/hooks/use-toast";

const NewArticleForm = ({ user }: { user: User }) => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof newArticleSchema>>({
    resolver: zodResolver(newArticleSchema),
    defaultValues: {
      title: "",
      slug: "",
      category: "",
      content: "",
      authorId: user.id,
    },
  });

  async function onSubmit(values: z.infer<typeof newArticleSchema>) {
    const response = await createNewArticle(values);
    if (response.error) {
      toast({
        title: "Error",
        description: response.error,
        variant: "destructive",
      });
    } else if (response.success) {
      toast({
        title: "Congratulations!!! Success creating new article",
        description: response.error,
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={"flex flex-col gap-4"}
      >
        <div className="flex w-full gap-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className={"w-full"}>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Judul artikel" {...field} />
                </FormControl>
                <FormMessage />
                <FormDescription />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem className={"w-full"}>
                <FormLabel>slug</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="judul-artikel" {...field} />
                </FormControl>
                <FormMessage />
                <FormDescription />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kategori</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Fiqih, Akidah, dll"
                  {...field}
                />
              </FormControl>
              <FormMessage />
              <FormDescription />
            </FormItem>
          )}
        />

        <AdvancedEditor
          setContent={(value: string) => {
            form.setValue("content", value);
          }}
        />
        <Button type={"submit"}>Submit</Button>
      </form>
    </Form>
  );
};
export default NewArticleForm;
