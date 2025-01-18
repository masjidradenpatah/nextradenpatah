import React from "react";
import { DataTable } from "@/app/(protected)/dashboard/admin/manage-articles/articles-table";
// import { articles } from "@/data/DummyArticles";
import { columns } from "@/app/(protected)/dashboard/admin/manage-articles/articles-column";
import { prisma } from "@/lib/db";

const Page = async () => {
  const articlesData = await prisma.article.findMany({
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  return (
    <div>
      <DataTable data={articlesData} columns={columns}></DataTable>
    </div>
  );
};
export default Page;
