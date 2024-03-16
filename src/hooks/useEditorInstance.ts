import { Content, Editor } from "@tiptap/react";
import { create } from "zustand";
import { editorConfig } from "./editorConfig";

type EditorInstanceType = {
  editor: Editor | null;
  setEditor: (content?: Content) => void;
  setContentHTML: (editor: Editor) => void;
  contentHTML?: string;
  setContentJson: (editor: Editor) => void;
  contentJson?: object;
  content: Content | undefined
  setContent: (content: Content | undefined) => void
};

export const useEditorInstance = create<EditorInstanceType>((set) => ({
  editor: null,
  contentHTML: undefined,
  contentJson: undefined,
  content: undefined,
  setEditor: (content?: Content) => {
    set({ editor: content ? editorConfig(content) : null });
  },
  setContentHTML: (editor) => {
    set({ contentHTML: editor.getHTML() });
  },
  setContentJson: (editor) => {
    set({ contentJson: editor.getJSON() });
  },
  setContent: (content: Content | undefined) => {
    set({ content });
  }
}));