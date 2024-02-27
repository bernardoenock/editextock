import { Box, Button, Popover, Typography } from "@mui/material";
import { Editor } from "@tiptap/react";
import React, { useCallback, useState } from "react";
import UploadImage from "../UploadImage";
import FromURLbtn from "../Btns/Image/FromURLbtn";
import FromFILEbtn from "../Btns/Image/FromFILEbtn";


type AddImageModalProps = {
  anchorEl: HTMLButtonElement | null
  handleClose: () => void
  editor: Editor | null
}

export default function AddImageModal({anchorEl, handleClose, editor}: AddImageModalProps) {
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
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Box sx={{m: 2}}>
          <FromURLbtn onImageUpload={handleImageUpload}/>
        </Box>
        <Box sx={{m: 2}}>
          {/* <UploadImage onImageUpload={handleImageUpload}/> */}
          <FromFILEbtn 
            onImageUpload={handleImageUpload} 
            endpoint="/api/upload-image"
          />
        
        </Box>
      </Popover>
  )
}