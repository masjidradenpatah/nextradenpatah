import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import NewArticleForm from "@/components/forms/NewArticleForm";
import { getArticleById, getArticleTitleById } from "@/actions/articleAction";
import { article } from "@prisma/client";
import ArticleCoverForm from "@/components/forms/ArticleCoverForm";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const { status, data } = await getArticleById(id);

  if (status === "ERROR" || !data) {
    //TODO: Handle this
    // Bisa di redirect ke page 404 not found
    return null;
  }

  if (data.status === "PUBLISHED") {
    //   TODO: Can't edit article with published status
    // Handle this
    return null;
  }

  return (
    <div className={"size-full pt-12"}>
      <Card>
        <CardHeader className={"flex w-full flex-row justify-between"}>
          <h2 className={"text-xl font-medium"}>Menambahkan Cover Article</h2>
          <div>{data.status}</div>
        </CardHeader>
        <CardContent>
          <ArticleCoverForm initialArticle={data}></ArticleCoverForm>
        </CardContent>
      </Card>
    </div>
  );
};
export default Page;
