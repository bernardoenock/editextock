import { Editor } from "@tiptap/react"
import { create } from "zustand";


type EditorInstanceType = {
  editor: Editor | null;
  setEditor: (editor: Editor) => void;
}

export const useEditorInstance = create<EditorInstanceType>((set) => ({
  editor: null,
  setEditor: (editor: Editor) => {
    set({ editor })
  }
}))