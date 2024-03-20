import { useEditorInstance } from '../../../hooks/useEditorInstance'
import FormatStrikethroughIcon from '@mui/icons-material/FormatStrikethrough'
import IconBtnWrapper from '../../Wrappers/IconBtnWrapper'

export default function StrikeBtn() {
  const { editor } = useEditorInstance()

  const handleStrike = () => {
    if (editor)
    editor.chain().focus().toggleStrike().run()
  }

  return (
    <IconBtnWrapper
      title='Strike'
      onClick={handleStrike}
    >
      <FormatStrikethroughIcon />
    </IconBtnWrapper>
  )
}