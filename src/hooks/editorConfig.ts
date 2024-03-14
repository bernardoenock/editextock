import { Editor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Document from '@tiptap/extension-document'
import TextStyle from "@tiptap/extension-text-style"
import TextAlign from '@tiptap/extension-text-align'
import Typography from "@tiptap/extension-typography"
import ListItem from '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'
import Highlight from '@tiptap/extension-highlight'
import Image from '@tiptap/extension-image'
import Placeholder from '@tiptap/extension-placeholder'
import { Color } from '@tiptap/extension-color'
import { useEditorInstance } from "./useEditorInstance"

const CustomDocument = Document.extend({
  content: 'heading block*',
})

export const editorT = new Editor({
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
    content: `
      <p><strong>Qual seria o superpoder mais útil para um panda?</strong></p>
      <p style="width: 20px; height:20px;">
        <img src="https://cdn.pixabay.com/photo/2022/12/19/13/31/panda-7665674_640.jpg"> 
      </p>
      <ol>
        <li>
          <p style="text-align: start">Capacidade de voar e evitar obstáculos enquanto come bambu no topo das árvores.</p>
        </li>
        <li>
          <p style="text-align: start">Invisibilidade para se esgueirar furtivamente em meio à floresta de bambu sem ser notado.</p>
        </li>
        <li>
          <p style="text-align: start">Teletransporte para escapar rapidamente dos pandas irritantes que tentam roubar seu lanche.</p>
        </li>
        <li>
          <p style="text-align: start">Ler mentes para entender por que os humanos estão tão obcecados com eles.</p>
        </li>
      </ol>
    `,
    onUpdate: ({ editor }) => {
      const json = editor.getJSON()
      const html = editor.getHTML()

      useEditorInstance.getState().setContentJson(json);
      useEditorInstance.getState().setContentHTML(html);

      // console.log("json ---", json)
      // console.log("html ---", html)
    }
  }
)


