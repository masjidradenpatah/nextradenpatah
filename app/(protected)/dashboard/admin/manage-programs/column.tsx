"use client";

import { ColumnDef } from "@tanstack/table-core";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  MoreHorizontal,
  ScanSearch,
  Send,
  SquarePen,
  Trash,
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { program } from "@prisma/client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { DataTableColumnHeader } from "@/components/TableHeaderSortable";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { deleteManyUserByID } from "@/actions/user";
import { toast } from "@/hooks/use-toast";
import { deleteManyProgramsByID } from "@/actions/programActions";

export const columns: ColumnDef<program>[] = [
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
      <DataTableColumnHeader column={column} title={"no"} />
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
      <DataTableColumnHeader column={column} title={"title"} />
    ),
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        isSortable={false}
        title={"description"}
      />
    ),
    cell: ({ row }) => {
      return <div>{row.original.description}</div>;
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"type"} />
    ),
    cell: ({ row }) => {
      const status = row.original.type;

      let statusColor = "bg-secondary";
      if (status === "DAILY") statusColor = "bg-gray-400/50";
      else if (status === "ANNUALY") statusColor = "bg-emerald-400";

      return (
        <div
          className={cn(
            "flex items-center justify-center rounded-md bg-secondary px-2 py-4",
            statusColor,
          )}
        >
          {row.original.type}
        </div>
      );
    },
  },

  {
    id: "actions",
    header: () => <div className={"text-center"}>More actions</div>,
    cell: ({ row }) => {
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
            <DropdownMenuItem className={"p-0"} asChild>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="destructive" size="sm">
                    Delete
                    <Trash />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                  </DialogHeader>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </DialogDescription>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="button" className={"w-1/2"}>
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => {
                        deleteManyProgramsByID([row.original.id]).then(
                          (response) => {
                            if (response.error) {
                              toast({
                                title: "Error",
                                description: response.error,
                                variant: "destructive",
                              });
                            } else if (response.success) {
                              toast({
                                title:
                                  "Congratulations!!! Programs successfully deleted",
                                description: response.success,
                              });
                            }
                          },
                        );
                      }}
                      className={"w-1/2"}
                    >
                      Delete Anyway
                      <Trash />
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
