import { Editor } from "@tiptap/react"


type StrikeBtnProps = {
  editor: Editor
}

export default function StrikeBtn({editor}: StrikeBtnProps) {
  if (!editor) {
    return <>Editor não encontrado...</>
  }

  return (
    <button
      onClick={() => editor.chain().focus().toggleStrike().run()}
      className={editor.isActive('strike') ? 'is-active' : ''}
    >
        strike
    </button>
  )
}