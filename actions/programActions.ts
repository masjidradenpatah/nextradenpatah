"use server";
import { Program, ProgramExecution } from "@/types/Program";
import { prisma } from "@/lib/db";
import { program, programExecution, programStatus } from "@prisma/client";

export async function getAllPrograms(): Promise<program[]> {
  return await prisma.program.findMany();
}

export async function deleteManyProgramsByID(
  ids: string[],
): Promise<Record<string, string>> {
  try {
    // Check if users exist or not
    const programs = await prisma.program.findMany({
      where: {
        id: { in: ids },
      },
    });

    if (programs.length === 0) {
      return { error: "Programs do not exist" };
    }

    // Delete programs in parallel
    const deletePromises = ids.map((id) =>
      prisma.user.delete({
        where: { id },
      }),
    );

    await Promise.all(deletePromises);

    return { success: "Successfully deleted programs" };
  } catch {
    // handle if error
    return { error: "Something went wrong" };
  }
}

export async function getAllUpcomingProgram(): Promise<programExecution[]> {
  return await prisma.programExecution.findMany();
}

export async function deleteManyUpcomingProgramByID(
  ids: string[],
): Promise<Record<string, string>> {
  try {
    // Check if upcoming program exist or not
    const upcomingPrograms = await prisma.programExecution.findMany({
      where: {
        id: { in: ids },
      },
    });

    if (upcomingPrograms.length === 0) {
      return { error: "Upcoming programs do not exist" };
    }

    // Delete upcomingPrograms in parallel
    const deletePromises = ids.map((id) =>
      prisma.user.delete({
        where: { id },
      }),
    );

    await Promise.all(deletePromises);

    return { success: "Successfully deleted programs" };
  } catch {
    // handle if error
    return { error: "Something went wrong" };
  }
}

export async function updateUpcomingProgramStatus(
  id: string,
  newStatus: programStatus,
): Promise<Record<string, string>> {
  try {
    // check if user exist or not
    const upcomingProgram = await prisma.programExecution.findUnique({
      where: { id },
    });

    // handle if error
    if (!upcomingProgram) return { error: "Upcoming program doesn't exist" };

    // update the role
    await prisma.programExecution.update({
      data: {
        ...upcomingProgram,
        status: newStatus,
      },
      where: {
        id,
      },
    });

    return { success: "Success updating new status" };
  } catch {
    // handle if error
    return { error: "Something went wrong" };
  }
}

export const getUpcomingProgramsAction = async (
  numberItem?: number | "all",
): Promise<ProgramExecution[] | null> => {
  const now = new Date();

  try {
    const programs = await prisma.programExecution.findMany({
      where: {
        status: "UPCOMING",
        date: {
          gt: now, // Hanya ambil program dengan tanggal lebih besar dari sekarang
        },
      },
      orderBy: {
        date: "asc", // Urutkan berdasarkan tanggal terdekat
      },
      take: numberItem === "all" ? undefined : numberItem || 3, // Batasi jumlah hasil
      include: {
        program: true, // Sertakan informasi program jika diperlukan
      },
    });

    return programs as ProgramExecution[];
  } catch {
    return null;
  }
};

export const getProgramsAction = async (
  type: "ALL" | "DAILY" | "ANNUALY" = "ALL",
  numberItem: "all" | number = 3,
): Promise<Program[] | null> => {
  try {
    const programs = await prisma.program.findMany({
      where: type === "ALL" ? undefined : { type },
      take: numberItem === "all" ? undefined : numberItem || 3,
    });

    return programs as Program[];
  } catch {
    return null;
  }
};

export const getProgramByIdAction = async (
  programId: string,
): Promise<Program | null> => {
  try {
    const program = await prisma.program.findUnique({
      where: { id: programId },
    });

    return program;
  } catch {
    return null;
  }
};
