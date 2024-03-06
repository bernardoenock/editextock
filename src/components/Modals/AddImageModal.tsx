import { Box, Menu, MenuItem, Popover } from "@mui/material";
import React, { useState } from "react";
import FromURLbtn from "../Btns/Image/FromURLbtn";
import FromFILEbtn from "../Btns/Image/FromFILEbtn";
import { useEditorInstance } from "../../hooks/useEditorInstance";


type AddImageModalProps = {
  anchorEl: HTMLButtonElement | null
  handleClose: () => void
}

export default function AddImageModal({anchorEl, handleClose}: AddImageModalProps) {
  const { editor } = useEditorInstance()
  
  const [imageUrl, setImageUrl] = useState<string>('');

  const open = Boolean(anchorEl);


  const handleImageUpload = (url: string) => {
    setImageUrl(url);
    if (editor) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  console.log("URL da Imagem:", imageUrl)


  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      <MenuItem onClick={handleClose}>
        <FromURLbtn onImageUpload={handleImageUpload}/>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <FromFILEbtn 
          onImageUpload={handleImageUpload} 
          endpoint="/api/upload-image"
        />
      </MenuItem>
    </Menu>
  )
}