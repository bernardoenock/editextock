import { AppBar, Box, Toolbar } from "@mui/material";
import AddImageBtn from "../Btns/Icons/AddImageBtn";
import BoldBtn from "../Btns/Icons/BoldBtn";
import ItalicBtn from "../Btns/Icons/ItalicBtn";
import HighlightBtn from "../Btns/Icons/HighlightBtn";
import ColorTextBtn from "../Btns/Icons/ColorTextBtn";
import StrikeBtn from "../Btns/Icons/StrikeBtn";
import TextAlignBtn from "../Btns/Icons/TextAlignBtn";
import OrderedListBtn from "../Btns/Icons/OrderedListBtn";



export default function HeaderMenu() {


  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static" 
        sx={{borderRadius: "10px"}}
        color="inherit"
        >
        <Toolbar>

          <AddImageBtn />


          <BoldBtn />
          <ItalicBtn />
          <StrikeBtn />

          <ColorTextBtn />
          <HighlightBtn />

          <TextAlignBtn alignment="left"/>
          <TextAlignBtn alignment="center"/>
          <TextAlignBtn alignment="right"/>
          <TextAlignBtn alignment="justify"/>

          <OrderedListBtn />


        </Toolbar>
      
        
      </AppBar>
    
    </Box>
  )
}