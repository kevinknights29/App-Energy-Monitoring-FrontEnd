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
  currentDate.setDate(currentDate.getDate() - 30);
  let cDay = currentDate.getDate();
  let cMonth = currentDate.getMonth() + 1;
  let cYear = currentDate.getFullYear();
  let todayDate = cYear.toString() + "-" + cMonth.toString() + "-" + cDay.toString()
  const last_30d_demand_val = vals.filter(vals => ((vals.date === todayDate) && (vals.unit === "Wh")))
  const last_30d_demand_vals = last_30d_demand_val.map(last_30d_demand_val => { return parseFloat(last_30d_demand_val.value) })

  function arrayAverage(arr) {
    //Find the sum
    var sum = 0;
    for (var i in arr) {
      sum += arr[i];
    }
    //Get the length of the array
    var numbersCnt = arr.length;
    //Return the average / mean.
    return (sum / numbersCnt);
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          p: 2,
          minWidth: 300
        }}
      >
        <Box sx={{ color: 'white' }}>
          Consumo total (Últimos 30 días)
        </Box> <br />
        <Box sx={{ color: 'white', fontSize: 34, fontWeight: 'medium' }}>
          {arrayAverage(last_30d_demand_vals)} Wh
        </Box>
      </Box>
    </ThemeProvider>
  )
}
