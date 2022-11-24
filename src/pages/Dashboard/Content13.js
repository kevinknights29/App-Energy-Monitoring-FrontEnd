import React, { useState, useEffect } from 'react'
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
  const [vals, setVals] = useState([])

  useEffect(() => {
    fetch("https://app-energy-monitoring-api.azurewebsites.net/api/measurements/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      }
    ).then(
      resp => resp.json()
    ).then(
      resp => setVals(resp)
    ).catch(
      error => console.log(error)
    )
  }, [])

  const last_current_val = vals.filter(vals => vals.unit === "A").slice(-1)

  return (
    < ThemeProvider theme={theme} >
      <Box
        sx={{
          p: 2,
          minWidth: 300
        }}
      >
        <Box sx={{ color: 'white' }}>AMPERAJE 1</Box> <br />
        <Box sx={{ color: 'white', fontSize: 34, fontWeight: 'medium' }}>
          {last_current_val.map(last_current_val => { return last_current_val.value })}
        </Box>
      </Box>
    </ThemeProvider >
  )
}