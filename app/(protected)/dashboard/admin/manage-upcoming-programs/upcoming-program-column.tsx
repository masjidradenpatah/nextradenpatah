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
import { MoreHorizontal, Trash } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { programExecution } from "@prisma/client";
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
import { toast } from "@/hooks/use-toast";
import { deleteManyUpcomingProgramByID } from "@/actions/programActions";
import { DropdownUpcomingProgramStatus } from "@/components/ui/DropdownUpcomingProgramStatus";

export const columns: ColumnDef<programExecution>[] = [
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
    accessorKey: "date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"date"} />
    ),
    cell: ({ row }) => <div>{row.original.date.toLocaleString()}</div>,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        isSortable={false}
        title={"status"}
      />
    ),
    cell: ({ row }) => {
      const status = row.original.status;
      const userId = row.original.id;
      return (
        <DropdownUpcomingProgramStatus
          status={status}
          userId={userId}
        ></DropdownUpcomingProgramStatus>
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
                        deleteManyUpcomingProgramByID([row.original.id]).then(
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
                                  "Congratulations!!! Upcoming Program successfully deleted",
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
