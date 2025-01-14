"use client";
import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

import { useRouter } from "next/navigation";

const Modal = ({
  children,
  className,
  modalTitle,
}: {
  children: ReactNode;
  className?: string;
  modalTitle: string;
}) => {
  const router = useRouter();

  function handleOpenChange() {
    router.back();
  }
  return (
    <Dialog open={true} defaultOpen={true} onOpenChange={handleOpenChange}>
      <DialogOverlay className={"glassmorphic-lg"}>
        <DialogContent className={cn("overflow-hidden", className)}>
          <DialogTitle>{modalTitle}</DialogTitle>
          {children}
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};
export default Modal;
