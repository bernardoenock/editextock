import { useEditorInstance } from '../../../hooks/useEditorInstance'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'
import IconBtnWrapper from '../../Wrappers/IconBtnWrapper'

export default function OrderedListBtn() {
  const { editor } = useEditorInstance()

  const handleOrderedList = () => {
    if(editor)
    editor.chain().focus().toggleOrderedList().run()
  }

  return (
    <IconBtnWrapper
      title='Lista numerada'
      onClick={handleOrderedList}
    >
      <FormatListNumberedIcon />
    </IconBtnWrapper>
  )
}