import { Editor, FloatingMenu } from "@tiptap/react"



type LineMenuProps = {
  editor: Editor
}

export default function LineMenu({editor}: LineMenuProps) {
  
  if (!editor) {
    return <>Editor não encontrado...</>
  }


  return (
    <FloatingMenu editor={editor} tippyOptions={{ duration: 100 }}>
      {/* <button onClick={addImage}>setImage</button> */}
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        bullet list
      </button>
    </FloatingMenu>
  )
}