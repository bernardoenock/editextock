import React from "react";
import { Editor } from "@tiptap/react"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import IconBtnWrapper from "../Wrappers/IconBtnWrapper";
import AddImageModal from "../Modals/AddImageModal";

type AddImageBtnProps = {
  editor: Editor | null
}

export default function AddImageBtn({ editor }: AddImageBtnProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  
  const handleCloseAddImageModal = () => {
    setAnchorEl(null);
  };

  const handleOpenAddImageModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  
  
  return (
    <> 
      <IconBtnWrapper 
        title="Add Image"
        onClick={handleOpenAddImageModal}
      >
        <AddPhotoAlternateIcon />
      </IconBtnWrapper>
      <AddImageModal 
        anchorEl={anchorEl}
        handleClose={handleCloseAddImageModal}
        editor={editor}
      />
    </>
  )
}