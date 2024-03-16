import { Menu, MenuItem } from "@mui/material"
import SetHeadingBtn from "../Btns/SetHeadingBtn"

type HeadingModalProps = {
  anchorEl: HTMLButtonElement | null
  handleClose: () => void
}

export default function HeadingModal({anchorEl, handleClose}: HeadingModalProps) {
 
  const open = Boolean(anchorEl);

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>
        <SetHeadingBtn level={1}/>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <SetHeadingBtn level={2}/>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <SetHeadingBtn level={3}/>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <SetHeadingBtn level={4}/>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <SetHeadingBtn level={5}/>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <SetHeadingBtn level={6}/>
      </MenuItem>
    </Menu>
  )
}