import { Button } from "@mui/material";
import { useEditorInstance } from "../../hooks/useEditorInstance";
import TitleIcon from '@mui/icons-material/Title';

type SetHeadingBtnProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6
}

export default function SetHeadingBtn({level}: SetHeadingBtnProps) {
  const { editor } = useEditorInstance();

  const handleTitleSize = () => {
    if (editor)
      editor.chain().focus().toggleHeading({ level }).run();
  };

  return (
    <Button startIcon={<TitleIcon />} onClick={handleTitleSize}>
      {level}
    </Button>
  );
}
