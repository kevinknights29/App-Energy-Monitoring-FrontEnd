import React, { useState, useEffect } from 'react'
import 'chart.js/auto'
import { Bar } from 'react-chartjs-2'

const Content1 = () => {

  const [vals, setVals] = useState([]);

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

  // const labels = ['January', 'February', 'March', 'April', 'May', 'June']

  const current_vals = vals.filter(vals => vals.unit === "A")
  const data = {
    labels: current_vals.map(current_vals => { return current_vals.id }),
    datasets: [
      {
        label: ' dataset',
        backgroundColor: [
          'rgb(70, 71, 162)'
        ],
        borderColor: [
          'rgb(59, 71, 162)'
        ],
        data: current_vals.map(current_vals => { return current_vals.value })
      }
    ]
  }


  return (
    <div>
      <h1 align='center'>Bar</h1>
      <Bar data={data} width={500} height={270} />
    </div>
  )
}

export default Content1