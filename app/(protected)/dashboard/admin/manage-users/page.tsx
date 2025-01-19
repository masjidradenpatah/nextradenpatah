import React, { Suspense } from "react";
import { prisma } from "@/lib/db";
import { DataTable } from "@/components/TableData";
import { columns } from "@/app/(protected)/dashboard/admin/manage-users/user-column";
import { deleteManyUserByID, getAllUser } from "@/actions/user";

const Page = async () => {
  return (
    <div>
      <DataTable
        queryKey={"allUser"}
        queryAction={getAllUser}
        columns={columns}
        deleteFNAction={deleteManyUserByID}
        filterBy={"name"}
      />
    </div>
  );
};
export default Page;
