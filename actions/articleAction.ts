"use server";

import { prisma } from "@/lib/db";
import { Article, ArticleStatus } from "@prisma/client";
import { ActionResponse } from "@/types";

interface ArticleColumn extends Article {
  author: { name: string | null };
}

export async function getAllArticle(): Promise<
  ActionResponse<ArticleColumn[]>
> {
  try {
    const allArtilces = await prisma.article.findMany({
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!allArtilces)
      return { status: "ERROR", error: "Article doesn't exist" };

    return {
      status: "SUCCESS",
      success: "Success fetching the article",
      data: allArtilces,
    };
  } catch {
    return { status: "ERROR", error: "Something went wrong" };
  }
}

export async function getArticleTitleById(
  id: string,
): Promise<ActionResponse<string>> {
  try {
    const articleTitle = await prisma.article.findUnique({
      where: { id },
      select: { title: true },
    });

    if (!articleTitle)
      return { status: "ERROR", error: "Article doesn't exist" };

    return {
      status: "SUCCESS",
      success: "Success fetching the article",
      data: articleTitle.title,
    };
  } catch {
    return { status: "ERROR", error: "Something went wrong" };
  }
}

export async function getArticleById(
  id: string,
): Promise<ActionResponse<Article>> {
  try {
    const article = await prisma.article.findUnique({
      where: { id },
    });

    if (!article) return { status: "ERROR", error: "Article not found" };

    return {
      status: "SUCCESS",
      success: "Success fetching the article",
      data: article,
    };
  } catch {
    return { status: "ERROR", error: "Something went wrong" };
  }
}

export async function getUserArticle(
  id: string,
): Promise<ActionResponse<Article[]>> {
  try {
    const article = await prisma.article.findMany({
      where: { authorId: id },
    });

    if (!article) return { status: "ERROR", error: "Article not found" };

    return {
      status: "SUCCESS",
      success: "Success fetching the user article",
      data: article,
    };
  } catch {
    return { status: "ERROR", error: "Something went wrong" };
  }
}

export async function updateArticleById(
  newArticle: Article,
): Promise<ActionResponse<Article>> {
  try {
    const existingArticle = await prisma.article.findUnique({
      where: {
        id: newArticle.id,
      },
    });

    if (!existingArticle) {
      return { status: "ERROR", error: "Article not found" };
    }

    const result = await prisma.article.update({
      data: {
        ...newArticle,
      },
      where: {
        id: existingArticle.id,
      },
    });

    // console.log({ result });
    return {
      status: "SUCCESS",
      success: "Successfully updating article",
      data: result,
    };
  } catch {
    return { status: "ERROR", error: "Something went wrong" };
  }
}

export async function updateArticleStatusById(
  articleId: string,
  newStatus: ArticleStatus,
): Promise<ActionResponse<Article>> {
  try {
    const existingArticle = await prisma.article.findUnique({
      where: {
        id: articleId,
      },
    });

    if (!existingArticle) {
      return { status: "ERROR", error: "Article not found" };
    }

    const result = await prisma.article.update({
      data: {
        status: newStatus,
      },
      where: {
        id: articleId,
      },
    });

    // console.log({ result });
    return {
      status: "SUCCESS",
      success: "Successfully updating article status",
      data: result,
    };
  } catch {
    return { status: "ERROR", error: "Something went wrong" };
  }
}

export async function deleteManyArticlesByID(
  ids: string[],
): Promise<ActionResponse<never>> {
  try {
    // Check if articles exist or not
    const articles = await prisma.article.findMany({
      where: {
        id: { in: ids },
      },
    });

    if (articles.length === 0) {
      return { status: "ERROR", error: "Articles do not exist" };
    }

    // Delete articles in parallel
    const deletePromises = ids.map((id) =>
      prisma.article.delete({
        where: { id },
      }),
    );

    await Promise.all(deletePromises);

    return { status: "SUCCESS", success: "Successfully deleted articles" };
  } catch {
    // handle if error
    return { status: "ERROR", error: "Something went wrong" };
  }
}
