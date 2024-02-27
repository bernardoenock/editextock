import { Button, Typography } from "@mui/material"
import { useCallback } from "react"


type FromURLbtnProps = {
  onImageUpload: (imageUrl: string) => void;
}

export default function FromURLbtn({ onImageUpload }: FromURLbtnProps) {

  const addImageByURL = () => {
    const url = window.prompt('URL')

    if (url) {
      onImageUpload(url)
    }
  }
  
  return (
    <Button variant="contained" onClick={addImageByURL}>
      <Typography sx={{ p: 2 }}>From URL</Typography>
    </Button>
  )
}