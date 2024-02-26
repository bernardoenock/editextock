import { Editor } from "@tiptap/react"


type BoldBtnProps = {
  editor: Editor
}

export default function BoldBtn({editor}: BoldBtnProps) {

  return (
    <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        bold
    </button>
  )
}