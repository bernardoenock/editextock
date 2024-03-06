import { Editor } from "@tiptap/react"
import { create } from "zustand";
import { editorT } from "./editorConfig";


type EditorInstanceType = {
  editor: Editor | null;
  setEditor: (editor: Editor) => void;
}

export const useEditorInstance = create<EditorInstanceType>((set) => ({
  editor: editorT,
  setEditor: (editor: Editor) => {
    set({ editor })
  }
}))