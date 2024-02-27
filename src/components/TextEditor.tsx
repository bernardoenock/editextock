import React from 'react'
import { Editor, EditorContent } from '@tiptap/react'
import { Box } from '@mui/material'

type TextEditorProps = {
  editor: Editor | null
}

export default function TextEditor({editor}: TextEditorProps) {

  if (!editor) {
    return <>Algo deu errado... -_-</>
  }


  return (
    <Box component="section" sx={{
      m: 2,
      ".tiptap": {
        p: 2,
        borderStyle: "solid",
        borderRadius: '5px'
      }
    }}>
        <EditorContent editor={editor} />
    </Box>
  )
}