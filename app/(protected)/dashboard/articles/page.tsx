import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CirclePlus } from "lucide-react";

const Page = () => {
  return (
    <div className={"flex w-full justify-end"}>
      <Button asChild>
        <Link href={"/dashboard/articles/new-article"}>
          Create New Article <CirclePlus />{" "}
        </Link>
      </Button>
    </div>
  );
};
export default Page;
