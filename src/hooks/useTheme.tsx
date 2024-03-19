import { Theme, ThemeOptions, ThemeProvider, createTheme } from "@mui/material";
import { ReactNode } from "react";

export const darkTheme: Theme = createTheme({
  palette: {
    mode: `dark`
  }
})

type ThemeEditextockProps = {
  theme: Theme
  children: ReactNode
}

export const ThemeEditextock = ({theme, children}: ThemeEditextockProps) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}