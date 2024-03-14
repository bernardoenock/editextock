import { Editor } from "@tiptap/react";
import { create } from "zustand";
import { editorT } from "./editorConfig";

type EditorInstanceType = {
  editor: Editor | null;
  setEditor: (editor: Editor) => void;
  setContentHTML: (contentHTML: string) => void;
  contentHTML: string;
  setContentJson: (contentJson: object) => void;
  contentJson: object;
};

export const useEditorInstance = create<EditorInstanceType>((set) => ({
  editor: editorT,
  contentHTML: editorT.getHTML(),
  contentJson: editorT.getJSON(),
  setEditor: (editor: Editor) => {
    set({ editor });
  },
  setContentHTML: (contentHTML: string) => {
    set({ contentHTML });
  },
  setContentJson: (contentJson: object) => {
    set({ contentJson });
  },
}));