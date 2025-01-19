"use server";

import z from "zod";
import { newArticleSchema } from "@/schemas/ArticleSchemas";
import { prisma } from "@/lib/db";
import { article } from "@prisma/client";

interface ArticleColumn extends article {
  author: { name: string | null };
}

export async function getAllArticle(): Promise<ArticleColumn[]> {
  return prisma.article.findMany({
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });
}

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

export async function deleteManyArticlesByID(
  ids: string[],
): Promise<Record<string, string>> {
  try {
    // Check if articles exist or not
    const articles = await prisma.article.findMany({
      where: {
        id: { in: ids },
      },
    });

    if (articles.length === 0) {
      return { error: "Articles do not exist" };
    }

    // Delete articles in parallel
    const deletePromises = ids.map((id) =>
      prisma.article.delete({
        where: { id },
      }),
    );

    await Promise.all(deletePromises);

    return { success: "Successfully deleted articles" };
  } catch {
    // handle if error
    return { error: "Something went wrong" };
  }
}
