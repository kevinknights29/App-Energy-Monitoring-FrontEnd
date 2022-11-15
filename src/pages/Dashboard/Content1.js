import React, { Component } from 'react';
import { Bar} from 'react-chartjs-2';

export default class Button extends Component {
  render() {
    const dataBar = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September'],
      datasets: [
        {
          label: 'Mdataset',
          backgroundColor: '#EC932F',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 59, 80, 81, 56, 55, 40, 50, 60]
        },
       
      ]
    };

    return (
      <div>
        <h2>Bar</h2>
        <Bar
          data={dataBar}
          width={300}
          height={300}
        />
        
      </div>
    );

  }
}

