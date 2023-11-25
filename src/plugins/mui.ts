import { ThemeProvider, createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    alpha: Palette['primary'];
    beta: Palette['primary'];
    theta: Palette['primary'];
  }

  interface PaletteOptions {
    alpha?: PaletteOptions['primary'];
    beta?: PaletteOptions['primary'];
    theta?: PaletteOptions['primary'];
  }
}

const theme = createTheme(
  {
    palette: {
      primary: {
        main: '#006d77',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#ffddd2',
      },
    },
  },
  {
    palette: {
      alpha: { main: '#83c5be' },
      beta: { main: '#e29578' },
      theta: { main: '#edf6f9' },
    },
  }
)

export { ThemeProvider, theme }
