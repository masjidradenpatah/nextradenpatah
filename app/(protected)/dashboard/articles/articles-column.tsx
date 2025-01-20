"use client";

import { ColumnDef } from "@tanstack/table-core";

import { article } from "@prisma/client";
import { convert } from "html-to-text";
import { cn } from "@/lib/utils";
import { DataTableColumnHeader } from "@/components/TableHeaderSortable";
import {
  moreActionColumn,
  numberColumn,
  selectColumn,
} from "@/components/TableData";
import { deleteManyArticlesByID } from "@/actions/articleAction";

export const columns: ColumnDef<article>[] = [
  selectColumn<article>(),
  numberColumn<article>(),
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"title"} />
    ),
  },
  {
    accessorKey: "content",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        isSortable={false}
        title={"content"}
      />
    ),
    cell: ({ row }) => {
      const content = row.original.content;
      const text = convert(content, { wordwrap: 130 });
      return <div>{text}</div>;
    },
  },

  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"status"} />
    ),
    cell: ({ row }) => {
      const status = row.original.status;

      let statusColor = "bg-secondary";
      if (status === "DRAFT") statusColor = "bg-gray-400/50";
      else if (status === "PUBLISHED") statusColor = "bg-emerald-400";
      else if (status === "ARCHIVED") statusColor = "bg-secondary";

      return (
        <div
          className={cn(
            "flex items-center justify-center rounded-md bg-secondary px-2 py-4",
            statusColor,
          )}
        >
          {row.getValue("status")}
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"category"} />
    ),
    cell: ({ row }) => <div>{row.getValue("category")}</div>,
  },
  {
    accessorKey: "totalView",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"views"} />
    ),
    cell: ({ row }) => (
      <div className={"flex w-full justify-center"}>
        {row.getValue("totalView") || 0}
      </div>
    ),
  },
  {
    accessorKey: "slug",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        isSortable={false}
        title={"slug"}
      />
    ),
    cell: ({ row }) => (
      <div className={"max-w-[100px] overflow-hidden"}>
        {row.getValue("slug")}
      </div>
    ),
  },
  moreActionColumn<article>({
    deleteFNAction: deleteManyArticlesByID,
  }),
];
