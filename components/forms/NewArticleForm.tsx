"use client";
import React, { ChangeEvent, useMemo, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { newArticleSchema } from "@/schemas/ArticleSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { article } from "@prisma/client";
import {
  deleteManyArticlesByID,
  updateArticleById,
} from "@/actions/articleAction";
import AdvancedEditor from "@/components/editor/advanced-editor";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { toast, useToast } from "@/hooks/use-toast";
import { type EditorInstance, JSONContent } from "novel";
import { LoaderCircle, Send, Trash } from "lucide-react";
import { generateJSON } from "@tiptap/html";
import { defaultExtensions } from "@/components/editor/TailwindEditorExtensions";
import { slashCommand } from "@/components/editor/TailwindEditorSlashCommands";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import ImageUpload from "@/components/ImageUpload";
import ImageUploadDropzone from "@/components/ImageUploadDropzone";

const NewArticleForm = ({
  initialArticle,
  type,
}: {
  initialArticle: article;
  type: "NEW" | "EDIT";
}) => {
  // article sudah ada ketika disini
  // article masih dalam versi draft
  // Jika tipe edit maka akan membuat salinan baru (untuk backup).
  // Hanya ada 1 maksimal salinan untuk 1 article. Jika sudah ada salinan, maka akan mengambil salinan itu

  // Komponen ini tidak tahu apakah ini salinan atau tidak

  const [isPending, startTransition] = useTransition();
  const output = useMemo(() => {
    const extensions = [...defaultExtensions, slashCommand];
    return generateJSON(initialArticle.content, [...extensions]);
  }, [initialArticle.content]);

  const router = useRouter();

  const [showDialog, setShowDialog] = useState<boolean>(false);

  const form = useForm<z.infer<typeof newArticleSchema>>({
    resolver: zodResolver(newArticleSchema),
    defaultValues: {
      ...initialArticle,
    },
  });

  const title = form.watch("title");
  const slug = form.watch("slug");
  const category = form.watch("category");
  // PUBLISH

  function onDelete() {
    // Akan menghapus original dan draftnya
  }

  function onDraft() {
    //  Hanya akan update status menjadi draft
    startTransition(async () => {
      const newArticle: article = {
        ...initialArticle,
        id: initialArticle.id,
        title: form.getValues("title"),
        slug: form.getValues("slug"),
        category: form.getValues("category"),
        content: form.getValues("content"),

        status: "DRAFT",
      };

      const response = await updateArticleById(newArticle);
      console.log({ response });
    });
  }

  function onArchived() {
    startTransition(async () => {
      const newArticle: article = {
        ...initialArticle,
        id: initialArticle.id,
        title: form.getValues("title"),
        slug: form.getValues("slug"),
        category: form.getValues("category"),
        content: form.getValues("content"),

        status: "ARCHIVED",
      };

      const response = await updateArticleById(newArticle);
      console.log({ response });
    });
  }

  function onPublish(event) {
    // const submitType = event.target.;
    // console.log({ submitType });

    // Jika ini murni artikel baru dan tidak punya salinan, maka hanya akan mengubah status nya
    // Jika ini salinan dari yang sudah di publishm, maka akan mengupdate versi publish dan menghapus versi salinan
    setShowDialog(true);
    startTransition(async () => {
      const newArticle: article = {
        ...initialArticle,
        id: initialArticle.id,
        title: form.getValues("title"),
        slug: form.getValues("slug"),
        category: form.getValues("category"),
        content: form.getValues("content"),

        status: "PUBLISHED",
      };

      const response = await updateArticleById(newArticle);
      console.log("PUBLISH");
      console.log({ response });
    });
    setShowDialog(false);
    router.push("/dashboard/articles");
  }

  // const response = await createNewArticle(values);
  // if (response.error) {
  //   toast({
  //     title: "Error",
  //     description: response.error,
  //     variant: "destructive",
  //   });
  // } else if (response.success) {
  //   toast({
  //     title: "Congratulations!!! Success creating new article",
  //     description: response.error,
  //   });
  // }
  // }

  function onUpdate(value: string) {
    form.setValue("content", value);
    form.trigger("content");

    console.log({ value });
    // update to DB
    startTransition(async () => {
      const newArticle: article = {
        ...initialArticle,
        id: initialArticle.id,
        title: form.getValues("title"),
        slug: form.getValues("slug"),
        category: form.getValues("category"),
        content: value,
      };

      const response = await updateArticleById(newArticle);
      console.log({ response });
    });
  }

  function titleChange(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    // console.log({ event });
    const name = event.target.name;
    const value = event.target.value as
      | "title"
      | "slug"
      | "category"
      | "content";
    // console.log({ name, value });
    form.setValue(name, value);
    form.trigger(name);

    debouncedUpdates(name, value);

    // onUpdate(form.getValues("content"));
  }

  const debouncedUpdates = useDebouncedCallback(
    async (name: string, value: string) => {
      // Set nilai setelah debounce selesai
      form.setValue(name, value);
      await form.trigger(name);

      // Panggil callback setelah nilai diupdate
      onUpdate(form.getValues("content"));
    },
    500,
  );

  return (
    <div
      // onSubmit={form.handleSubmit(onSubmit)}
      className={"flex flex-col gap-4"}
      // onChange={onChange}
    >
      {showDialog && (
        <Dialog open={showDialog}>
          <DialogContent>
            <DialogTitle className={"sr-only"}>Loading</DialogTitle>
            <span>Loading </span>
            <LoaderCircle className={"animate-spin"}></LoaderCircle>
          </DialogContent>
        </Dialog>
      )}
      <ImageUpload onFileChange={() => {}}></ImageUpload>
      <div className="flex w-full gap-8">
        <div className={"w-full space-y-2"}>
          <label htmlFor="title" className={"text-sm font-medium"}>
            Title
          </label>
          <Input
            type="text"
            placeholder="Judul artikel"
            value={title}
            onChange={titleChange}
            name={"title"}
          />
        </div>

        <div className={"w-full space-y-2"}>
          <label htmlFor="title" className={"text-sm font-medium"}>
            Slug
          </label>
          <Input
            type="text"
            placeholder="slug"
            value={slug}
            onChange={titleChange}
            name={"slug"}
          />
        </div>
      </div>

      <div className={"space-y-2"}>
        <label htmlFor="title" className={"text-sm font-medium"}>
          Category
        </label>
        <Input
          type="text"
          placeholder="Fiqih, Akidah, dll"
          value={category}
          onChange={titleChange}
          name={"category"}
        />
      </div>

      {/*<p>{JSON.stringify(output)}</p>*/}
      <AdvancedEditor
        // type={type}
        initialData={output as JSONContent}
        onUpdate={onUpdate}
      />
      <div className="flex justify-between gap-4">
        <DeleteArticle id={initialArticle.id} />
        <Button
          className={""}
          variant={"outline"}
          disabled={initialArticle.status === "ARCHIVED"}
          onClick={onArchived}
        >
          Archived
        </Button>
        <Button
          disabled={initialArticle.status === "DRAFT"}
          className={""}
          variant={"outline"}
          onClick={onDraft}
        >
          Draft
        </Button>
        <Button className={"grow"} value={"PUBLISH"} onClick={onPublish}>
          PUBLISH
          <Send />
        </Button>
      </div>
    </div>
  );
};
export default NewArticleForm;

const DeleteArticle = ({ id }: { id: string }) => {
  const router = useRouter();
  const [isPending, startTrasition] = useTransition();

  function handleDelete() {
    startTrasition(async () => {
      const response = await deleteManyArticlesByID([id]);
      if (response.error) {
        toast({
          title: "Error",
          description: response.error,
          variant: "destructive",
        });
      } else if (response.success) {
        toast({
          title: "Succes",
          description: response.success,
        });
      }
    });
    router.push("/dashboard/articles");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={""} variant={"destructive"}>
          Delete
          <Trash />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Are you sure?</DialogTitle>
        {!isPending ? (
          <>
            Are you sure you want to delete this article. You can&apos;t restore
            it.
            <div className="flex gap-4">
              <DialogClose className={"h-auto w-full border px-4"}>
                Cancel{" "}
              </DialogClose>
              <Button
                className={"w-full"}
                variant={"destructive"}
                onClick={handleDelete}
              >
                Delete Anyway <Trash />
              </Button>
            </div>
          </>
        ) : (
          <div className="flex min-h-48 items-center justify-center gap-2">
            <span>Deleting your article</span>
            <LoaderCircle className={"animate-spin"}></LoaderCircle>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
