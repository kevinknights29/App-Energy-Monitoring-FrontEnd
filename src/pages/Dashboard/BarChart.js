import React from 'react';
import { Bar } from 'react-chartjs-2';

export default class BarChart extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const data = {
            labels: this.props.labels,
            datasets: [
                {
                    label: this.props.label,
                    backgroundColor: '#EC932F',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: this.props.data,
                },
            ]
        };

        return (
            <React.Fragment>
                <h2>{this.props.title}</h2>
            <Bar>
                data={data}
                width={300}
                height={300}
            </Bar>
            </React.Fragment>
        );
    }
}
