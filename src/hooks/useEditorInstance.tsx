import { createContext, useContext, useState, ReactNode, FC } from 'react'
import { Content, Editor } from '@tiptap/react'
import { editorConfig } from './editorConfig'

interface EditorInstanceType {
  editor: Editor | null
  setEditorContent: (content?: Content) => void
  updateContentHTML: (editor: Editor) => void
  contentHTML?: string
  updateContentJson: (editor: Editor) => void
  contentJson?: object
  content: Content | undefined
  setContent: (content: Content | undefined) => void
}

export const EditorContext = createContext<EditorInstanceType>({} as EditorInstanceType)

export const EditorProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [editor, setEditor] = useState<Editor | null>(null)
  const [contentHTML, setContentHTML] = useState<string | undefined>(undefined)
  const [contentJson, setContentJson] = useState<object | undefined>(undefined)
  const [content, setContent] = useState<Content | undefined>(undefined)

  const setEditorContent = (newContent?: Content) => {
    setEditor(newContent ? editorConfig(newContent) : null)
  }

  const updateContentHTML = (editorInstance: Editor) => {
    setContentHTML(editorInstance.getHTML())
  }

  const updateContentJson = (editorInstance: Editor) => {
    setContentJson(editorInstance.getJSON())
  }

  const value: EditorInstanceType = {
    editor,
    setEditorContent,
    updateContentHTML,
    contentHTML,
    updateContentJson,
    contentJson,
    content,
    setContent,
  }

  return (
    <EditorContext.Provider value={value}>
      {children}
    </EditorContext.Provider>
  )
}

export const useEditorInstance = () => useContext(EditorContext)
