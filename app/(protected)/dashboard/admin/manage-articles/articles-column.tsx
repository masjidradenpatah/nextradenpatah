"use client";

import { ColumnDef } from "@tanstack/table-core";
import { Article } from "@/data/DummyArticles";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  ArrowUpDown,
  MoreHorizontal,
  ScanSearch,
  Send,
  SquarePen,
  Trash,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { article, User } from "@prisma/client";
import { convert } from "html-to-text";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ArticleColumn extends article {
  author: { name: string | null };
}

export const columns: ColumnDef<ArticleColumn>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: boolean) =>
          table.toggleAllPageRowsSelected(value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: boolean) => row.toggleSelected(value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "number",
    header: ({ column }) => (
      <Button
        variant={"ghost"}
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        no <ArrowUpDown className={"ml-2 size-4"} />
      </Button>
    ),
    cell: ({ row, table }) => (
      <div className={"flex justify-center"}>
        {table.getRowModel().rows.indexOf(row) + 1}
      </div>
    ),
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <Button
        variant={"ghost"}
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        title <ArrowUpDown className={"ml-2 size-4"} />
      </Button>
    ),
  },
  {
    accessorKey: "content",
    header: "content",
    cell: ({ row }) => {
      const content = row.original.content;
      const text = convert(content, { wordwrap: 130 });
      return <div>{text}</div>;
    },
  },
  {
    accessorKey: "authorId",
    header: ({ column }) => (
      <Button
        variant={"ghost"}
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        author <ArrowUpDown className={"ml-2 size-4"} />
      </Button>
    ),
    cell: ({ row }) => {
      const rowData = row.original;
      const authorName = rowData.author.name;
      return <div>{authorName}</div>;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <Button
        variant={"ghost"}
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        status <ArrowUpDown className={"ml-2 size-4"} />
      </Button>
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
    // TODO: Change this
    accessorKey: "category",
    header: "category",
    cell: ({ row }) => <div>{row.getValue("category")}</div>,
  },
  {
    accessorKey: "totalView",
    header: () => <div className={"max-w-[100px]"}>views</div>,
    cell: ({ row }) => (
      <div className={"flex w-full justify-center"}>
        {row.getValue("totalView") || 0}
      </div>
    ),
  },
  {
    accessorKey: "slug",
    header: () => <div className={"max-w-[100px]"}>Slug</div>,
    cell: ({ row }) => (
      <div className={"max-w-[100px] overflow-hidden"}>
        {row.getValue("slug")}
      </div>
    ),
  },
  {
    id: "actions",
    header: () => <div className={"text-center"}>More actions</div>,
    cell: ({ row }) => {
      const article = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="size-8 w-full justify-center p-0"
            >
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem asChild>
              <Link href={`/article/${row.getValue("slug")}`}>
                View <ScanSearch />
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => ({
                // navigator.clipboard.writeText(article.id.toString())
              })}
            >
              Publish <Send />
            </DropdownMenuItem>
            <DropdownMenuItem>
              Edit <SquarePen />
            </DropdownMenuItem>
            <DropdownMenuItem className={"p-0"}>
              <Button
                className={"w-full justify-start px-2 py-px"}
                variant={"destructive"}
              >
                Delete <Trash />
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
