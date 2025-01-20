import React from "react";
import { DataTable } from "@/components/TableData";
import { columns } from "@/app/(protected)/dashboard/admin/manage/articles/articles-column";
import { deleteManyArticlesByID, getAllArticle } from "@/actions/articleAction";

const Page = async () => {
  return (
    <div>
      <DataTable
        queryKey={"all article"}
        queryAction={getAllArticle}
        columns={columns}
        filterBy={"title"}
        deleteFNAction={deleteManyArticlesByID}
      ></DataTable>
    </div>
  );
};
export default Page;
