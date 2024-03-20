import { useEffect } from 'react'
import { Button } from '@mui/material'
import { Content } from '@tiptap/react'
import { useEditorInstance } from '../../hooks/useEditorInstance'

type SetContentExampleProps = {
  contentEx?: Content
}

export default function SetContentExample({ contentEx }: SetContentExampleProps) {
  const { content, setContent, setEditorContent, editor } = useEditorInstance()

  useEffect(()=> {
    if (!contentEx){
      setContent(`
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
      `)
    } else {
      setContent(contentEx)
    }
  }, [])
  
  const handleContent = () => {
    !editor ? setEditorContent(content) : setEditorContent()
  }

  return (
    <Button variant='contained' onClick={handleContent}>
      Content Example
    </Button>
  )
}