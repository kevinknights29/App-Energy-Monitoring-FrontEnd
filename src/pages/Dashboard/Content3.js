import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'


const Content3 = () => {

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
  const current_vals = vals.filter(vals => vals.unit === "A").slice(-25)
  const data = {
    labels: current_vals.map(current_vals => { return current_vals.datetime }),
    datasets: [
      {
        label: 'Corriente (A)',
        backgroundColor: 'rgb(0, 255, 0)',
        borderColor: 'rgb(125, 125, 125)',
        data: current_vals.map(current_vals => { return current_vals.value })
      }
    ]
  }
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Corriente vs Tiempo",
        color: 'black',
        font: {
          size: 16
        },
        padding: {
          top: 0,
          bottom: 0
        },
        animation: {
          animateScale: true
        }
      }
    },
    scales: {
      x: {
        display: false,
        title: {
          text: "Tiempo",
          align: "center",
          display: true,
        }
      },
      y: {
        title: {
          text: "Corriente",
          align: "center",
          display: true,
        }
      }
    }
  }
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  )
}

export default Content3
