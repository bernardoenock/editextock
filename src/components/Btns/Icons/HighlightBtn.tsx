import React, { useState } from 'react'
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh'
import IconBtnWrapper from '../../Wrappers/IconBtnWrapper'
import ColorModal from '../../Modals/ColorModal'
import { useEditorInstance } from '../../../hooks/useEditorInstance'


export default function HighlightBtn() {
  const { editor } = useEditorInstance()

  const [textHighlightColor, setTextHighlightColor] = useState<string>('#000000') 
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleCloseColorModal = () => {
    setAnchorEl(null)
  }

  const handleOpenColorModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleToggleHighlight = (color: any | null = null) => {
    if (editor)
    if(typeof color != 'string') {
      setTextHighlightColor(color.hex)
      editor.chain().focus().toggleHighlight({ color: color.hex }).run()
    } else if (typeof color == 'string'){
      setTextHighlightColor(color)
      editor.chain().focus().toggleHighlight({ color }).run()
    } else {
      editor.chain().focus().toggleHighlight().run()
    }
  }

  return (
    <>
      <IconBtnWrapper
        title='Marcar Texto'
        onClick={handleOpenColorModal}
      >
        <AutoFixHighIcon />
      </IconBtnWrapper>
      <ColorModal 
        anchorEl={anchorEl}
        handleClose={handleCloseColorModal}
        colorValue={textHighlightColor}
        handleColor={handleToggleHighlight}
      />
    </>

   
  )
}