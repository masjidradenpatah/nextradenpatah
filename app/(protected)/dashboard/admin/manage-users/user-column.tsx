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
import { User } from "@prisma/client";
import { cn } from "@/lib/utils";
import { DataTableColumnHeader } from "@/components/TableHeaderSortable";
import DropdownRole from "@/components/ui/DropdownRole";
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
import { deleteManyUserByID } from "@/actions/user";

type UserColumn = User;

export const columns: ColumnDef<UserColumn>[] = [
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
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"name"} />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"email"} />
    ),
  },
  {
    accessorKey: "emailVerified",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"email verified at"} />
    ),
    cell: ({ row }) => {
      const emailVerifiedAt = row.original.emailVerified;
      let statusColor = "bg-emerald-400";
      if (emailVerifiedAt == null) statusColor = "bg-destructive/50";

      return (
        <div
          className={cn(
            "flex items-center justify-center rounded-md bg-secondary px-2 py-4",
            statusColor,
          )}
        >
          {!emailVerifiedAt
            ? "Not Verified"
            : new Date(row.getValue("emailVerified")).toLocaleString()}
        </div>
      );
    },
  },
  {
    accessorKey: "role",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"role"} />
    ),
    cell: ({ row }) => {
      const role = row.original.role;
      const userId = row.original.id;
      return <DropdownRole role={role} userId={userId}></DropdownRole>;
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
                        deleteManyUserByID([row.original.id]).then(
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
                                  "Congratulations!!! User successfully deleted",
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
