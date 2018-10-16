import React, { Component } from 'react';

class ChartSMS extends Component {
    setChart = (node) => {
		this.chart = node;
	}

	componentDidMount() {
		this.chart.responsive = true;
		this.ctx = this.chart.getContext('2d')
		this.smsChart = new Chart(this.ctx, {
			type: 'horizontalBar',
			data: {
				labels: ['Inbox', 'Sent item'],
				datasets: [{
					backgroundColor: 'rgb(255, 99, 132)',
					borderColor: 'rgb(255, 99, 132)',
					data:[ 100, 200],
					// data:[{{ total
					// _inboxs_current_month }}, {{ total_sentitems_current_month }}],
				}]
			},
			options: {
				maintainAspectRatio: false,
		        legend: {
		            display: false,
		        },
				scales: {
					xAxes: [
						{ticks: { beginAtZero: true} },
					],
					yAxes: [
						{barPercentage: .5},
					]
				},
			}
		});
	}

	componentWillUnmount() {
		this.chart = null;
		this.ctx = null;
		this.smsChart = null;

		delete this.chart;
		delete this.ctx;
		delete this.smsChart;
	}

    render() {
        return (
			<div className="position-relative" style={ {height: '200px'} }>
				<canvas ref={this.setChart}></canvas>		
			</div>
        );
    }
}

export default ChartSMS;
