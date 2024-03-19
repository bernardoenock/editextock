import { IconButton, Tooltip } from "@mui/material"
import { MouseEventHandler } from "react"

type IconBtnWrapperProps = {
  title: React.ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
  children: React.ReactElement<any, any>
}

export default function IconBtnWrapper({ 
  title, 
  onClick, 
  children }: IconBtnWrapperProps) {

    return (
      <Tooltip title={title}>
        <IconButton
        sx={{
            borderRadius: '4px', 
          }}
        color="primary"
        size="small"
        onClick={onClick}
        >

          {children}
        </IconButton>

      </Tooltip>
    )
  }