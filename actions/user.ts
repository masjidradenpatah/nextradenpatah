"use server";

import { User, UserRole } from "@prisma/client";
import { getUserById } from "@/data/User";
import { prisma } from "@/lib/db";

export async function getAllUser(): Promise<User[]> {
  return await prisma.user.findMany();
}

export async function updateUserRole(
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

    // Delete users in parallel
    const deletePromises = ids.map((id) =>
      prisma.user.delete({
        where: { id },
      }),
    );

    await Promise.all(deletePromises);

    return { success: "Successfully deleted users" };
  } catch {
    // handle if error
    return { error: "Something went wrong" };
  }
}
