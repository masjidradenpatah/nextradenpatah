import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const CircleIcon = ({
  icon,
  className,
}: {
  icon: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("relative size-fit rounded-full shadow", className)}>
      <div
        className={
          "relative size-fit rounded-full bg-white p-2 shadow-[inset_0px_3px_3px_0px_rgba(0,0,0,0.25)]"
        }
      >
        <div className={"relative rounded-full bg-primary p-2 text-white"}>
          {icon}
        </div>
      </div>
    </div>
  );
};
