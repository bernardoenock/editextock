import SetContentExample from "./Btns/SetContentExample";
import HeaderMenu from "./Menus/HeaderMenu";
import TextEditor from "./TextEditor";
import { Container } from '@mui/material'


export default function Template() {

  return (
    <Container>
      <SetContentExample />
      <HeaderMenu />
      <TextEditor />
    </Container>
  )
}