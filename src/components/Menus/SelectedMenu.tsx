import { BubbleMenu, Editor } from "@tiptap/react"
import TextAlignBtn from "../Btns/Icons/TextAlignBtn"
import BoldBtn from "../Btns/Icons/BoldBtn"
import ItalicBtn from "../Btns/Icons/ItalicBtn"
import StrikeBtn from "../Btns/Icons/StrikeBtn"



type SelectedMenuProps = {
  editor: Editor
}

export default function SelectedMenu({editor}: SelectedMenuProps) {
  
  if (!editor) {
    return <>Editor não encontrado...</>
  }


  return (
    <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
      <div style={{backgroundColor: "white"}}>
        <BoldBtn />

        <ItalicBtn />

        <StrikeBtn />

        
        {/* <button onClick={() => handleToggleHighlight()} className={editor.isActive('highlight') ? 'is-active' : ''}>
          highlight
        </button> */}

        <TextAlignBtn alignment="left" />

        <TextAlignBtn alignment="center" />
        
        <TextAlignBtn alignment="right" />
        
        <TextAlignBtn alignment="justify" />
      </div>
    </BubbleMenu>
  )
}