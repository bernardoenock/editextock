import React, { useState } from 'react';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import IconBtnWrapper from '../../Wrappers/IconBtnWrapper';
import ColorModal from '../../Modals/ColorModal';
import { useEditorInstance } from '../../../hooks/useEditorInstance';

export default function ColorTextBtn() {
  const { editor } = useEditorInstance()

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [colorTextValue, setColorTextValue] = useState<string>('#000000'); 

  const handleCloseColorModal = () => {
    setAnchorEl(null);
  };

  const handleOpenColorModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleColorText = (color: any | null = null) => {
    if(editor) {
      if(typeof color != 'string') { 
        setColorTextValue(color.hex)
        editor.chain().focus().setColor(color.hex).run();
      } else if (typeof color == 'string'){ 
        setColorTextValue(color)
        editor.chain().focus().setColor(color).run();
      } else {
        editor.chain().focus().setColor(colorTextValue).run();
      }
    }
  }

  return (
    <>
      <IconBtnWrapper
        title='Cor do texto'
        onClick={handleOpenColorModal}
      >
        <FormatColorTextIcon />
      </IconBtnWrapper>
      <ColorModal 
        anchorEl={anchorEl}
        handleClose={handleCloseColorModal}
        colorValue={colorTextValue}
        handleColor={handleColorText}
      />
    </>
  )
}