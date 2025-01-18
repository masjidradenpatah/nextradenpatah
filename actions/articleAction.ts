"use server";

import z from "zod";
import { newArticleSchema } from "@/schemas/ArticleSchemas";
import { prisma } from "@/lib/db";

export async function createNewArticle(
  values: z.infer<typeof newArticleSchema>,
): Promise<Record<string, string>> {
  const validatedFields = newArticleSchema.safeParse(values);

  if (!validatedFields.success) return { error: "Invalid input" };
  const { data } = validatedFields;
  console.log(data);

  try {
    await prisma.article.create({
      data,
    });
    return { success: "Success creating new article" };
  } catch {
    return { error: "function hasn't implemented yet" };
  }
}
