import React from "react";
import { cn } from "@/lib/utils";

export const Shades3 = ({ className }: { className?: string }) => {
  return (
    <div className={cn("absolute -z-10 h-fit w-fit blur-2xl", className)}>
      <div className="inline-flex h-[250.39px] w-[250.39px] items-center justify-center">
        <div className="h-[234.81px] w-[234.81px] rounded-full bg-[#1eaac8] opacity-80"></div>
      </div>
    </div>
  );
};
export const Shades2 = () => {
  return <div>Shades</div>;
};
export const Shades1 = () => {
  return <div>Shades</div>;
};
