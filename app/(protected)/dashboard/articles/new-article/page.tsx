import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import TailwindEditor from "@/components/editor/TailwindEditor";
import AdvancedEditor from "@/components/editor/advanced-editor";

const Page = () => {
  return (
    <div>
      {" "}
      <h1>Halooo</h1>
      <AdvancedEditor />
    </div>
  );
};
export default Page;
