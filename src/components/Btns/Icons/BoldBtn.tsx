import FormatBoldIcon from '@mui/icons-material/FormatBold'
import { useEditorInstance } from '../../../hooks/useEditorInstance'
import IconBtnWrapper from '../../Wrappers/IconBtnWrapper'

export default function BoldBtn() {
  const { editor } = useEditorInstance()

  const handleBold = () => {
    if (editor)
    editor.chain().focus().toggleBold().run()
  }

  return (
    <IconBtnWrapper
      title='Bold'
      onClick={handleBold}
    >
      <FormatBoldIcon />
    </IconBtnWrapper>
  )
}