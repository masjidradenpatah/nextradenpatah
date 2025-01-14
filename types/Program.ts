export interface Program {
  id: string;
  title: string;
  image: string;
  description: string;
  type: "DAILY" | "ANNUALY";
}

export interface ProgramExecution {
  id: string;
  date?: Date | null | undefined;
  program: Program;
  programId: string;
  status: "UPCOMING" | "CANCELED" | "DONE";
}
