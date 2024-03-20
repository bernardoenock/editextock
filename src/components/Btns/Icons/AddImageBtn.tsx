import React, { useState } from 'react'
import ImageIcon from '@mui/icons-material/Image'
import IconBtnWrapper from '../../Wrappers/IconBtnWrapper'
import AddImageModal from '../../Modals/AddImageModal'

export default function AddImageBtn() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  
  const handleCloseAddImageModal = () => {
    setAnchorEl(null)
  }

  const handleOpenAddImageModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  
  return (
    <> 
      <IconBtnWrapper 
        title='Add Image'
        onClick={handleOpenAddImageModal}
      >
        <ImageIcon />
      </IconBtnWrapper>
      <AddImageModal 
        anchorEl={anchorEl}
        handleClose={handleCloseAddImageModal}
      />
    </>
  )
}