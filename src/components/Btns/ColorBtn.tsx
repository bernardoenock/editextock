import { useState } from "react";
import { Editor } from "@tiptap/react";


type ColorBtnProps = {
  editor: Editor
}


export default function ColorBtn({editor}: ColorBtnProps) {
  const [textColor, setTextColor] = useState<string>('#000000'); 

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