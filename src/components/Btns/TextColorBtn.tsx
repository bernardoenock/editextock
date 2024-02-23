import { useState } from "react";
import { Editor } from "@tiptap/react";


type TextColorBtnProps = {
  editor: Editor
}


export default function TextColorBtn({editor}: TextColorBtnProps) {
  const [textColor, setTextColor] = useState<string>('#000000'); 

  
  if (!editor) {
    return <>Editor não encontrado...</>
  }

  return (
    <div>
        <label>Cor do Texto</label>
        <input
          type="color"
          onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
            setTextColor(event.target.value);
            editor.chain().focus().setColor(event.target.value).run();
          }}
          value={textColor}
          data-testid="setColor"
        />
    </div>
  )
}