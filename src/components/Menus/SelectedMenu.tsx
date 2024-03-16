import { BubbleMenu, Editor } from "@tiptap/react"
import { Box } from "@mui/material"
import ItensMenu from "./Itens/ItensMenu"

type SelectedMenuProps = {
  editor: Editor
}

export default function SelectedMenu({editor}: SelectedMenuProps) {
  
  if (!editor) {
    return
  }

  return (
    <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
      <Box 
        sx={{
          backgroundColor: "#fff", 
          borderRadius: '6px', 
          width: "27em",
          '@media screen and (max-width: 600px)': {
            width: "100%"
          }
        }}>
        <ItensMenu />
      </Box>
    </BubbleMenu>
  )
}