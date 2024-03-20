import { EditorContent } from '@tiptap/react'
import { Box } from '@mui/material'
import { useEditorInstance } from '../hooks/useEditorInstance'
import SelectedMenu from './Menus/SelectedMenu'
import LineMenu from './Menus/LineMenu'

export default function TextEditor() {
  const { editor } = useEditorInstance()
  
  if (editor)

  return (
    <Box component='section' sx={{
      m: 2,
      '.tiptap': {
        p: 2,
        border: 'none',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
        ':focus': {
          outline: 'none',
          boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
        }
      },
    }}>
        <EditorContent editor={editor} />
        <SelectedMenu editor={editor}/>
        <LineMenu editor={editor} />
    </Box>
  )
}