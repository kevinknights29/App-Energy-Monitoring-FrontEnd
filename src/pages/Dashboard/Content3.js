import React, {useState, useEffect} from 'react'
import { Bar } from 'react-chartjs-2'
import 'chart.js/auto'


const Content3 = () => {
  
  const [vals, setVals] = useState([]);

  useEffect(()=>{
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
    labels: current_vals.map(current_vals => {return current_vals.id}),
    datasets: [
      {
        label: 'Current',
        backgroundColor: 'rgb(255, 255, 255)',
        borderColor: 'rgb(255, 99, 132)',
        data: current_vals.map(current_vals => {return current_vals.value})
      }
    ]
  }
  const options = {
    plugins: {
      title: {
        display: true,
        text: "Current vs Id",
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
          title: {
            text: "Id",
            align: "center",
            display: true,
          }
        },
        y: {
          title: {
            text: "Current",
            align: "center",
            display: true,
          }
        }
    }
  }
  return (
    <div>
      <Bar data={data} options={options}/>
    </div>
  )
}

export default Content3
