import { IconButton, Tooltip } from "@mui/material"
import { MouseEventHandler, ReactNode } from "react"

type IconBtnWrapperProps = {
  title: string
  onClick: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}

export default function IconBtnWrapper({ 
  title, 
  onClick, 
  children }: IconBtnWrapperProps) {

    return (
      <Tooltip title={title}>
        <IconButton
        sx={{borderRadius: '4px'}}
        color="inherit"
        size="small"
        onClick={onClick}
        >

          {children}
        </IconButton>

      </Tooltip>
    )
  }