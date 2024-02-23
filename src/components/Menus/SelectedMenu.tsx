import { BubbleMenu, Editor } from "@tiptap/react"
import TextAlignBtn from "../Btns/TextAlignBtn"



type SelectedMenuProps = {
  editor: Editor
}

export default function SelectedMenu({editor}: SelectedMenuProps) {
  
  if (!editor) {
    return <>Editor não encontrado...</>
  }


  return (
    <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        strike
      </button>
      {/* <button onClick={() => handleToggleHighlight()} className={editor.isActive('highlight') ? 'is-active' : ''}>
        highlight
      </button> */}

      <TextAlignBtn editor={editor} alignment="left" />

      <TextAlignBtn editor={editor} alignment="center" />
      
      <TextAlignBtn editor={editor} alignment="right" />
      
      <TextAlignBtn editor={editor} alignment="justify" />
    </BubbleMenu>
  )
}