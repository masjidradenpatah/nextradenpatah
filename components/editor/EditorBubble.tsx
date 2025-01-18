"use client";
import React, { Fragment, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { LinkSelector } from "@/components/editor/selectors/LinkSelector";
import { MathSelector } from "@/components/editor/selectors/MathSelector";
import { TextButtons } from "@/components/editor/selectors/TextButtons";
import { ColorSelector } from "@/components/editor/selectors/ColorSelector";
import { EditorBubble, useEditor } from "novel";
import { NodeSelector } from "@/components/editor/selectors/NodeSelector";
import { Button } from "@/components/ui/button";
import { AISelector } from "@/components/editor/generative/ai-selector";
import Magic from "@/components/editor/icons/magic";
import { removeAIHighlight } from "novel/extensions";
import { Editor } from "@tiptap/core";

const EditorBubbleMenu = ({
  open,
  onOpenChange,
  openNode,
  setOpenNode,
  openLink,
  setOpenLink,
  openColor,
  setOpenColor,
}: {
  open: boolean;
  onOpenChange: (item: boolean) => void;
  openNode: boolean;
  setOpenNode: (item: boolean) => void;
  openLink: boolean;
  setOpenLink: (item: boolean) => void;
  openColor: boolean;
  setOpenColor: (item: boolean) => void;
}) => {
  const { editor } = useEditor();

  useEffect(() => {
    if (!open) removeAIHighlight(editor as Editor);
  }, [editor, open]);

  return (
    <EditorBubble
      tippyOptions={{
        placement: open ? "bottom-start" : "top",
        onHidden: () => {
          onOpenChange(false);
          if (!editor) return null;
          editor.chain().unsetHighlight().run();
        },
      }}
      className="flex w-fit max-w-[90vw] overflow-hidden rounded-md border border-muted bg-background shadow-xl"
      pluginKey={""}
    >
      {open && <AISelector open={open} onOpenChange={onOpenChange} />}
      {!open && (
        <Fragment>
          <Button
            className="gap-1 rounded-none text-purple-500"
            variant="ghost"
            onClick={() => {
              return;
              onOpenChange(true);
            }}
            size="sm"
          >
            <Magic className="size-5" />
            Ask AI
          </Button>
          <Separator orientation="vertical" />
          <NodeSelector open={openNode} onOpenChange={setOpenNode} />
          <Separator orientation="vertical" />
          <LinkSelector open={openLink} onOpenChange={setOpenLink} />
          <Separator orientation="vertical" />
          <MathSelector />
          <Separator orientation="vertical" />
          <TextButtons />
          <Separator orientation="vertical" />
          <ColorSelector open={openColor} onOpenChange={setOpenColor} />
        </Fragment>
      )}
    </EditorBubble>
  );
};
export default EditorBubbleMenu;
