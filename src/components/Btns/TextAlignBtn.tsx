import { Editor } from "@tiptap/react"


type TextAlignBtnProps = {
  editor: Editor
  alignment: 'justify' | 'left' | 'center' | 'right'
}


export default function TextAlignBtn({editor, alignment}: TextAlignBtnProps) {

  if (!editor) {
    return <>Editor não encontrado...</>
  }

  return (
    <button 
      onClick={() => editor.chain().focus().setTextAlign(alignment).run()} 
      className={editor.isActive({ textAlign: alignment }) ? 'is-active' : ''}
    >
        {alignment}
    </button>
  )

}