import { Box, Popover } from '@mui/material'
import ColorCirclesPicker from '../Btns/ColorCirclesPicker'
import ColorBallPicker from '../Btns/ColorBallPicker'

type ColorModalProps = {
  anchorEl: HTMLButtonElement | null
  handleClose: () => void
  handleColor: (color?: any | null) => void
  colorValue: string
}

export default function ColorModal ({anchorEl, colorValue, handleClose, handleColor}: ColorModalProps) {
  const open = Boolean(anchorEl)

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
      <Box sx={{mt: 2, width: '100%', display: 'flex', justifyContent: 'center'}} >
        <ColorBallPicker 
          colorValue={colorValue} 
          handleColor={handleColor} 
        />
      </Box>
      <Box sx={{m: 2}} >
        <ColorCirclesPicker 
          colorValue={colorValue} 
          handleColor={handleColor}
        />
      </Box>
    </Popover>
  )
}