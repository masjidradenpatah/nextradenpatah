"use server";

import { User, UserRole } from "@prisma/client";
import { getUserById } from "@/data/User";
import { prisma } from "@/lib/db";
import { error } from "next/dist/build/output/log";

export async function getAllUser(): Promise<User[]> {
  return await prisma.user.findMany();
}

export async function updateUserRole<UserRole>(
  id: string,
  newRole: UserRole,
): Promise<Record<string, string>> {
  try {
    // check if user exist or not
    const user = await getUserById(id);

    // handle if error
    if (!user) return { error: "User doesn't exist" };

    // update the role
    await prisma.user.update({
      data: {
        ...user,
        role: newRole,
      },
      where: {
        id,
      },
    });

    return { success: "Success updating new role" };
  } catch {
    // handle if error
    return { error: "Something went wrong" };
  }
}

export async function deleteManyUserByID(
  ids: string[],
): Promise<Record<string, string>> {
  try {
    // Check if users exist or not
    const users = await prisma.user.findMany({
      where: {
        id: { in: ids },
      },
    });

    if (users.length === 0) {
      return { error: "Users do not exist" };
    }

    // Check for foreign key constraints (e.g., articles related to the users)
    const usersWithArticles = await prisma.article.findMany({
      where: {
        authorId: { in: ids },
      },
      select: {
        authorId: true,
      },
    });

    if (usersWithArticles.length > 0) {
      return {
        error: "Tidak bisa menghapus user yang memiliki artikel.",
      };
    }

    // Delete users in parallel
    const deletePromises = ids.map((id) =>
      prisma.user.delete({
        where: { id },
      }),
    );

    await Promise.all(deletePromises);

    return { success: "Successfully deleted users" };
  } catch (err: unknown) {
    // @ts-expect-error the error object here could be anything
    if (err.code && err.code === "P2003") {
      return {
        error: "Tidak bisa menghapus user yang memiliki artikel.",
      };
    }
    return { error: err.toString() };
  }
}
