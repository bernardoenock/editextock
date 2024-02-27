import { Editor } from "@tiptap/react"
import { Button } from "@mui/material"


type BoldBtnProps = {
  editor: Editor
}

export default function BoldBtn({editor}: BoldBtnProps) {

  return (
    <Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}

        variant="contained"
      >
        bold
    </Button>
  )
}