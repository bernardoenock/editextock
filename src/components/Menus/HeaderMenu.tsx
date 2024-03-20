import { AppBar, Box, Toolbar } from '@mui/material'
import ItensMenu from './Itens/ItensMenu'

export default function HeaderMenu() {

  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar 
        position='static' 
        sx={{borderRadius: '10px'}}
        color='inherit'
        >
        <Toolbar>
          <ItensMenu />
        </Toolbar> 
      </AppBar>
    </Box>
  )
}