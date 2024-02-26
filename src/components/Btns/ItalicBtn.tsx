import { Editor } from "@tiptap/react"


type ItalicBtnProps = {
  editor: Editor
}

export default function ItalicBtn({editor}: ItalicBtnProps) {
  if (!editor) {
    return <>Editor não encontrado...</>
  }

  return (
    <button
      onClick={() => editor.chain().focus().toggleItalic().run()}
      className={editor.isActive('italic') ? 'is-active' : ''}
    >
      italic
    </button>
  )
}