import { Editor } from "@tiptap/react"
import { useState } from "react";


type HighlightProps = {
  editor: Editor
}


export default function HighlightBtn({editor}: HighlightProps) {
  const [textHighlightColor, setTextHighlightColor] = useState<string>('#000000'); 

  const handleToggleHighlight = (color: string | null = null) => {
    if (editor) {
      if (color) {
        editor.chain().focus().toggleHighlight({ color }).run();
      } else {
        editor.chain().focus().toggleHighlight().run();
      }
    }
  }

  return (

    <div>
        <label>Marcar Texto</label>
        <input
          type="color"
          onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
            setTextHighlightColor(event.target.value);
            handleToggleHighlight(event.target.value)
          }}
          value={textHighlightColor}
          data-testid="setHighlight"
        />
      </div>

  )
}