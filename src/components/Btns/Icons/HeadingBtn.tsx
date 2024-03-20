import TitleIcon from '@mui/icons-material/Title'
import { useState } from "react"
import IconBtnWrapper from '../../Wrappers/IconBtnWrapper'
import HeadingModal from '../../Modals/HeadingModal'


export default function HeadingBtn() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  
  const handleCloseHeadingModal = () => {
    setAnchorEl(null)
  }

  const handleOpenHeadingModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <>
      <IconBtnWrapper
        title="Heading"
        onClick={handleOpenHeadingModal}>
        <TitleIcon />
      </IconBtnWrapper>
      <HeadingModal 
        anchorEl={anchorEl}
        handleClose={handleCloseHeadingModal}
      />
    </>
  )
}
