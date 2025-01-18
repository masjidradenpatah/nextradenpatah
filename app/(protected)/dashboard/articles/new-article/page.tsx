import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import TailwindEditor from "@/components/editor/TailwindEditor";
import AdvancedEditor from "@/components/editor/advanced-editor";
import NewArticleForm from "@/components/forms/NewArticleForm";
import { auth } from "@/auth";

const Page = async () => {
  const session = await auth();
  if (!session) return null;

  return (
    <div className={""}>
      <h1 className={"mb-8 text-7xl font-bold text-primary"}>
        Membuat Artikel Baru
      </h1>
      <NewArticleForm user={session.user} />
    </div>
  );
};
export default Page;
