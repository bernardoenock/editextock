import { Button, MenuItem, Typography } from "@mui/material"

type FromURLbtnProps = {
  onImageUpload: (imageUrl: string) => void;
  onCloseModal: () => void
}

export default function FromURLbtn({ onImageUpload, onCloseModal }: FromURLbtnProps) {

  const addImageByURL = () => {
    const url = window.prompt('URL')

    if (url) {
      onImageUpload(url)
    }
    onCloseModal()
  }
  
  return (
    <MenuItem onClick={addImageByURL}>
      <Typography>From URL</Typography>
    </MenuItem>
  )
}