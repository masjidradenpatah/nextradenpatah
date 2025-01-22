"use client";
import React, { FormEventHandler, useRef, useState } from "react";
import { article } from "@prisma/client";
import { Images } from "lucide-react";
import { Button } from "@/components/ui/button";
import z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  cover: z.any(),
});

const ArticleCoverForm = ({ initialArticle }: { initialArticle: article }) => {
  const [preview, setPreview] = useState<string>();
  const { handleSubmit, register, formState } = useForm<z.infer<typeof schema>>(
    {
      resolver: zodResolver(schema),
      defaultValues: {
        cover: "",
      },
    },
  );
  function handleCoverChange(event) {
    const file = event.target.files[0];
    // console.log(file);
    const url = URL.createObjectURL(file);
    // console.log({ url });
    setPreview(url);
  }
  console.log("error", formState.errors); // Debug untuk validasi

  const formOnSubmit: SubmitHandler<z.infer<typeof schema>> = (data) => {
    console.log("on submit", data);
  };
  return (
    <form
      className={"flex flex-col gap-8"}
      onSubmit={handleSubmit(formOnSubmit)}
    >
      <div className="flex w-full items-center justify-center">
        <label
          htmlFor={"cover"}
          className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-800"
        >
          <div className="flex flex-col items-center justify-center pb-6 pt-5">
            <Images className={"text-gray-600"}></Images>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            type="file"
            id={"cover"}
            className={"hidden"}
            {...register("cover")}
            // onChange={handleCoverChange}
          />
        </label>
      </div>
      {preview && <img src={preview} />}

      <Button type={"submit"} className={"w-full"}>
        Submit
      </Button>
    </form>
  );
};
export default ArticleCoverForm;
