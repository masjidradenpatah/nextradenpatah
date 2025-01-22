import React from "react";
import NewArticleForm from "@/components/forms/NewArticleForm";
import { auth } from "@/auth";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { generateJSON } from "@tiptap/html";
import {
  createNewArticle,
  createNewBlankArticle,
} from "@/actions/articleAction";
import { article } from "@prisma/client";
import { defaultExtensions } from "@/components/editor/TailwindEditorExtensions";
import { slashCommand } from "@/components/editor/TailwindEditorSlashCommands";
import { redirect } from "next/navigation";
import { LoaderCircle } from "lucide-react";

const Page = async () => {
  const session = await auth();
  if (!session) return null;

  let loading = true;
  // Create new article here
  const { status, data } = await createNewBlankArticle(session.user.id);
  loading = false;

  // TODO: show loading status
  if (loading) {
    return (
      <div className={"size-full pt-12"}>
        <Card>
          <CardHeader className={"flex w-full flex-row justify-between"}>
            <h2 className={"text-xl font-medium"}>Membuat Artikel Baru</h2>
          </CardHeader>
          <CardContent>
            <span>Loading </span>
            <LoaderCircle className={"animate-spin"}></LoaderCircle>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (status === "ERROR") {
    return (
      <div className={"size-full pt-12"}>
        <Card>
          <CardHeader className={"flex w-full flex-row justify-between"}>
            <h2 className={"text-xl font-medium"}>Membuat Artikel Baru</h2>
          </CardHeader>
          <CardContent>
            <p>Sorry failed to create new article. Please try again later.</p>
          </CardContent>
        </Card>
      </div>
    );
  } else {
    const blankArticle = data as article;
    redirect(`/dashboard/articles/editor/${blankArticle.id}`);
  }
};
export default Page;
