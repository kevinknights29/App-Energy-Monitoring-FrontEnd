import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'


const Content4 = () => {

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
  const demand_vals = vals.filter(vals => vals.unit === "Wh").slice(-25)
  const data = {
    labels: demand_vals.map(demand_vals => { return demand_vals.datetime }),
    datasets: [
      {
        label: 'Consumo (Wh)',
        backgroundColor: 'rgb(255, 0, 0)',
        borderColor: 'rgb(125, 125, 125)',
        data: demand_vals.map(demand_vals => { return demand_vals.value })
      }
    ]
  }
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Consumo vs Tiempo",
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
          text: "Consumo",
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

export default Content4

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

// import React from 'react'
// import { Pie } from 'react-chartjs-2'

// function PieChartGraph() {
//   const data = {
//     labels: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri'],
//     datasets: [
//       {
//         label: 'Attendance for Week 1',
//         data: [25, 24, 25, 25, 23],
//         borderColor: ['rgba(175,71,156,0.2)'],
//         borderWidth: 5,
//         backgroundColor: [
//           'rgba(232,99,132,1)',
//           'rgba(232,211,6,1)',
//           'rgba(54,162,235,1)',
//           'rgba(255,159,64,1)',
//           'rgba(153,102,255,1)'
//         ],
//         pointBackgroundColor: 'rgba(255,206,86,0.2)',
//       }
//     ]
//   }

//   const options = {
//     plugins: {
//       title: {
//         display: true,
//         text: 'Pie Chart',
//         color: 'blue',
//         font: {
//           size: 34
//         },
//         padding: {
//           top: 0,
//           bottom: 0
//         },
//         animation: {
//           animateScale: true
//         }
//       }
//     }
//   }
//   return (
//     <div>
//       <Pie data={data} options={options} />
//     </div>
//   )
// }

// export default PieChartGraph