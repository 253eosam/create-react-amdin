import React from 'react'
import { ThemeProvider, theme } from './mui'
import CssBaseline from '@mui/material/CssBaseline'

type Props = {
  children: React.ReactNode
}

const registerPlugins: React.FC<Props> = ({ children }) => {

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </React.Fragment>
  )
}

export default registerPlugins
