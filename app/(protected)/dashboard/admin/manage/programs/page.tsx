import React from "react";
import { DataTable } from "@/components/TableData";
import { columns } from "@/app/(protected)/dashboard/admin/manage/programs/column";
import {
  deleteManyProgramsByID,
  getAllPrograms,
} from "@/actions/programActions";

const Page = () => {
  return (
    <div>
      <DataTable
        queryKey={"all programs"}
        queryAction={getAllPrograms}
        columns={columns}
        filterBy={"title"}
        deleteFNAction={deleteManyProgramsByID}
      ></DataTable>
    </div>
  );
};
export default Page;
