import React from "react";
import { DataTable } from "@/components/TableData";
import { columns } from "@/app/(protected)/dashboard/admin/manage/upcoming-programs/upcoming-program-column";
import {
  deleteManyUpcomingProgramByID,
  getAllUpcomingProgram,
} from "@/actions/programActions";

const Page = () => {
  return (
    <div>
      <DataTable
        queryKey={"all Upcoming Program"}
        queryAction={getAllUpcomingProgram}
        columns={columns}
        deleteFNAction={deleteManyUpcomingProgramByID}
        filterBy={"status"}
      />
    </div>
  );
};
export default Page;
