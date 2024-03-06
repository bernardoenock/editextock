import { useEditorInstance } from "../../../hooks/useEditorInstance";
import IconBtnWrapper from "../../Wrappers/IconBtnWrapper"
import FormatItalicIcon from '@mui/icons-material/FormatItalic';

export default function ItalicBtn() {
  const { editor } = useEditorInstance()
  
  const handleItalic = () => {
    if (editor)
    editor.chain().focus().toggleItalic().run()
  }

  return (
    <IconBtnWrapper
      title="Italic"
      onClick={handleItalic}
    >
      <FormatItalicIcon />
    </IconBtnWrapper>
  )
}