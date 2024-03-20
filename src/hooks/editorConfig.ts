import { Content, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Document from '@tiptap/extension-document'
import TextStyle from '@tiptap/extension-text-style'
import TextAlign from '@tiptap/extension-text-align'
import Typography from '@tiptap/extension-typography'
import ListItem from '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'
import Highlight from '@tiptap/extension-highlight'
import Image from '@tiptap/extension-image'
import Placeholder from '@tiptap/extension-placeholder'
import { Color } from '@tiptap/extension-color'

const CustomDocument = Document.extend({
  content: 'heading block*',
})

export const editorConfig = (content?: Content) => {

  return new Editor({
    extensions: [
      StarterKit.configure({
        document: false,
      }),
      Typography,
      TextStyle,
      ListItem,
      OrderedList, 
      Highlight.configure({
        multicolor: true,
      }),
      Color,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Image.configure({
        inline: true,
        allowBase64: true,
      }),
      CustomDocument,
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === 'heading') {
            return 'Qual o título?'
          }

          return 'Era uma vez...'
        },
      }),
    ],
    content,
    // onUpdate: ({ editor }) => {
    //   const json = editor.getJSON()
    //   const html = editor.getHTML()
    // }
  })
}