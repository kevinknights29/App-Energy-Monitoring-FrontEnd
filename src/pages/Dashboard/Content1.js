import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'


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
  const power_vals = vals.filter(vals => vals.unit === "W").slice(-25)
  const data = {
    labels: power_vals.map(power_vals => { return power_vals.datetime }),
    datasets: [
      {
        label: 'Potencia (W)',
        backgroundColor: 'rgb(0, 0, 255)',
        borderColor: 'rgb(125, 125, 125)',
        data: power_vals.map(power_vals => { return power_vals.value })
      }
    ]
  }
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Potencia vs Tiempo",
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
          text: "Potencia",
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

export default Content1

// import React, { useState, useEffect } from 'react'
// import 'chart.js/auto'
// import { Bar } from 'react-chartjs-2'

// const Content1 = () => {

//   const [vals, setVals] = useState([]);

//   useEffect(() => {
//     fetch("https://app-energy-monitoring-api.azurewebsites.net/api/measurements/",
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json"
//         }
//       }
//     ).then(
//       resp => resp.json()
//     ).then(
//       resp => setVals(resp)
//     ).catch(
//       error => console.log(error)
//     )
//   }, [])

//   // const labels = ['January', 'February', 'March', 'April', 'May', 'June']

//   const current_vals = vals.filter(vals => vals.unit === "A")
//   const data = {
//     labels: current_vals.map(current_vals => { return current_vals.id }),
//     datasets: [
//       {
//         label: ' dataset',
//         backgroundColor: [
//           'rgb(70, 71, 162)'
//         ],
//         borderColor: [
//           'rgb(59, 71, 162)'
//         ],
//         data: current_vals.map(current_vals => { return current_vals.value })
//       }
//     ]
//   }


//   return (
//     <div>
//       <h1 align='center'>Bar</h1>
//       <Bar data={data} width={500} height={270} />
//     </div>
//   )
// }

// export default Content1