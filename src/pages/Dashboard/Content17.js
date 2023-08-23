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

  const last_demand_val = vals.filter(vals => vals.unit === "Wh").slice(-1)

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          p: 2,
          minWidth: 300
        }}
      >
        <Box sx={{ color: 'white' }}>CONSUMO EN TIEMPO REAL 1</Box> <br />
        <Box sx={{ color: 'white', fontSize: 34, fontWeight: 'medium' }}>
          {last_demand_val.map(last_demand_val => { return last_demand_val.value })} Wh
        </Box>
      </Box>
    </ThemeProvider>
  )
}