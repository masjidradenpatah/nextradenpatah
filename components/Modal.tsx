"use client";
import React, { ReactNode, useRef } from "react";
// import { usePathname } from "next/navigation";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

import { useRouter } from "next/navigation";
import { Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Modal = ({
  children,
  className,
  modalTitle,
  fullUrl,
}: {
  children: ReactNode;
  className?: string;
  modalTitle: string;
  fullUrl: string;
}) => {
  const router = useRouter();
  // const pathname = usePathname();
  // const [isGotoFull, setIsGotoFull] = useState<boolean>(false);
  const closeButton = useRef<HTMLButtonElement>(null);
  function handleOpenChange() {
    router.back();
  }

  function handleClick() {
    router.push(fullUrl);
    closeButton.current?.click();
  }

  // useEffect(() => {
  //   if (isGotoFull && fullUrl) {
  //     setIsGotoFull(false);
  //     router.push(fullUrl);
  //   }
  // }, [fullUrl, isGotoFull, router]);

  return (
    <Dialog open={true} defaultOpen={true} onOpenChange={handleOpenChange}>
      <DialogOverlay className={"glassmorphic-lg"}>
        <DialogContent className={cn("overflow-hidden", className)}>
          <DialogTitle className={"h-8"}>{modalTitle}</DialogTitle>
          {children}
          <Button
            variant={"outline"}
            onClick={handleClick}
            className={"ms-auto mt-2"}
          >
            See full detail <Maximize2 />
          </Button>
          <DialogClose ref={closeButton}></DialogClose>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};
export default Modal;
