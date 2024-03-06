import HeaderMenu from "./Menus/HeaderMenu";
import TextEditor from "./TextEditor";
import { Container } from '@mui/material'


export default function Template() {

  return (
    <Container>
      <HeaderMenu />
      <TextEditor />
    </Container>
  )
}