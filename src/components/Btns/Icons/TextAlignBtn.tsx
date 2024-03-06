import { useEditorInstance } from "../../../hooks/useEditorInstance"
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import IconBtnWrapper from "../../Wrappers/IconBtnWrapper"

type TextAlignBtnProps = {
  alignment: 'justify' | 'left' | 'center' | 'right'
}

export default function TextAlignBtn({alignment}: TextAlignBtnProps) {
  const { editor } = useEditorInstance()

  const handleTextAlign = () => {
    if(editor)
    editor.chain().focus().setTextAlign(alignment).run()
  }

  switch (alignment) {
    case 'left':
      return (
        <IconBtnWrapper
          title="Alinhar à esquerda"
          onClick={handleTextAlign}
        >
          <FormatAlignLeftIcon />
        </IconBtnWrapper>
      )
    case 'center':
      return (
        <IconBtnWrapper
          title="Alinhar no centro"
          onClick={handleTextAlign}
        >
          <FormatAlignCenterIcon />
        </IconBtnWrapper>
      )
    case 'right':
      return (
        <IconBtnWrapper
          title="Alinhar à direita"
          onClick={handleTextAlign}
        >
          <FormatAlignRightIcon />
        </IconBtnWrapper>
      )
    case 'justify':
      return (
        <IconBtnWrapper
          title="Justificar"
          onClick={handleTextAlign}
        >
          <FormatAlignJustifyIcon />
        </IconBtnWrapper>
      )
  }
}