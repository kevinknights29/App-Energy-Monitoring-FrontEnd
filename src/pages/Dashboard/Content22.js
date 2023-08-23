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

  let currentDate = new Date()
  let cDay = currentDate.getDate();
  let cMonth = currentDate.getMonth() + 1;
  let cYear = currentDate.getFullYear();
  let todayDate = cYear.toString() + "-" + cMonth.toString() + "-" + cDay.toString()
  const today_demand_val = vals.filter(vals => ((vals.date === todayDate) && (vals.unit === "Wh")))
  const today_demand_vals = today_demand_val.map(today_demand_val => { return parseFloat(today_demand_val.value) })

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          p: 2,
          minWidth: 300
        }}
      >
        <Box sx={{ color: 'white' }}>
          Consumo total (Últimos 24 horas){' '}
        </Box> <br />
        <Box sx={{ color: 'white', fontSize: 34, fontWeight: 'medium' }}>
          {Math.max(...today_demand_vals)} Wh
        </Box>
      </Box>
    </ThemeProvider>
  )
}
