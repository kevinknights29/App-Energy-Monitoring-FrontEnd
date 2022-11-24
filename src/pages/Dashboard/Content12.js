import React from 'react'
import { Box, ThemeProvider, createTheme } from '@mui/system'

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff'
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A'
    },
    action: {
      active: '#001E3C'
    },
    success: {
      dark: '#009688'
    }
  }
})

export default function Example() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          p: 2,
          minWidth: 300
        }}
      >
        <Box sx={{ color: 'white' }}>POTENCIA 4</Box> <br />
        <Box sx={{ color: 'white', fontSize: 34, fontWeight: 'medium' }}>
          -
        </Box>

      </Box>
    </ThemeProvider>
  )
}