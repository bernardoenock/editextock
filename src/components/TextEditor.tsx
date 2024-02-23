'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from '@tiptap/extension-image'
import Typography from '@tiptap/extension-typography'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import ListItem from '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'
import { Color } from '@tiptap/extension-color'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'



export default function TextEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
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
    ],
    content: `
      <p><strong>Qual seria o superpoder mais útil para um panda?</strong></p>
      <p>
        <img src="https://source.unsplash.com/8xznAGy4HcY/100x200"> 
        <img src="https://source.unsplash.com/K9QHL52rE2k/100x200">
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
      // send the content to an API here
      // setContent(json)
      console.log("json ---", json)
      console.log("html ---", html)
    }
  })

  if (!editor) {
    return <>Algo deu errado... -_-</>
  }


  return (
    <div>
        <EditorContent editor={editor} />
    </div>
  )
}