import AddImageBtn from "../../Btns/Icons/AddImageBtn";
import BoldBtn from "../../Btns/Icons/BoldBtn";
import ColorTextBtn from "../../Btns/Icons/ColorTextBtn";
import HeadingBtn from "../../Btns/Icons/HeadingBtn";
import HighlightBtn from "../../Btns/Icons/HighlightBtn";
import ItalicBtn from "../../Btns/Icons/ItalicBtn";
import OrderedListBtn from "../../Btns/Icons/OrderedListBtn";
import StrikeBtn from "../../Btns/Icons/StrikeBtn";
import TextAlignBtn from "../../Btns/Icons/TextAlignBtn";

export default function ItensMenu() {
  return (
    <>
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
      <HeadingBtn />
    </>
  )
}