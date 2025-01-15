"use server";
import { Program, ProgramExecution } from "@/types/Program";
import { prisma } from "@/lib/db";

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

    // return programs.map(
    //   (item) =>
    //     ({
    //       id: item.id,
    //       date: item.date,
    //       programId: item.programId,
    //       status: item.status,
    //       program: {
    //         id: item.program.id,
    //         title: item.program.title,
    //         image: item.program.image,
    //         description: item.program.description,
    //         type: item.program.type,
    //       },
    //     }) as ProgramExecution,
    // );

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

    // const formattedPrograms: Program[] = programs.map(
    //   (program) =>
    //     ({
    //       id: program.id,
    //       description: program.description,
    //       type: program.title,
    //       image: program.id,
    //       title: program.title,
    //     }) as Program,
    // );

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
