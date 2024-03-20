import { Editor, FloatingMenu } from '@tiptap/react'
import { Toolbar } from '@mui/material'
import ItensMenu from './Itens/ItensMenu'

type LineMenuProps = {
  editor: Editor
}

export default function LineMenu({editor}: LineMenuProps) {
  
  if (!editor) {
    return
  }

  return (
    <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
      <Toolbar>
        <ItensMenu />
      </Toolbar>
    </FloatingMenu>
  )
}