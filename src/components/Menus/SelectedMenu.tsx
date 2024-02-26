import { BubbleMenu, Editor } from "@tiptap/react"
import TextAlignBtn from "../Btns/TextAlignBtn"
import BoldBtn from "../Btns/BoldBtn"
import ItalicBtn from "../Btns/ItalicBtn"
import StrikeBtn from "../Btns/StrikeBtn"



type SelectedMenuProps = {
  editor: Editor
}

export default function SelectedMenu({editor}: SelectedMenuProps) {
  
  if (!editor) {
    return <>Editor não encontrado...</>
  }


  return (
    <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
      
      <BoldBtn editor={editor} />

      <ItalicBtn editor={editor} />

      <StrikeBtn editor={editor} />

      
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