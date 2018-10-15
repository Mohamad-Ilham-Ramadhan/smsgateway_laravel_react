import React, { Component } from 'react';
import Chart from 'chart.js';


class Dashboard extends Component {

	componentDidMount() {
		var ctxInit = this.chart.getContext('2d')
		var smsChartInit = new Chart(ctxInit, {
			type: 'horizontalBar',
			data: {
				labels: ['Inbox', 'Sent item'],
				datasets: [{
					backgroundColor: 'rgb(255, 99, 132)',
					borderColor: 'rgb(255, 99, 132)',
					data:[ 100, 200],
					// data:[{{ total_inboxs_current_month }}, {{ total_sentitems_current_month }}],
				}]
			},
			options: {
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
  
    render() {
        return (
        	// flash message <--
           <div className="row">
				<div className="col">
					<div className="container">

						<div className="row mt-5">
							<div className="col">
								<div className="card card-main">
									<div className="card-title">
										Trafik SMS Bulan Ini
									</div>
									<canvas ref={ (chart => this.chart = chart)} height="200px"></canvas>		
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-lg-7">
										
								<div className="card card-main mt-5">
									<div className="card-title">
										<span className="far fa-comments mr-2"></span>
										Inbox
									</div>
									<div id="newInboxs" className="card-body">
									{/* loop */}
										<div className="message">
											<div className="message-icon d-inline-block">
												<span className="far fa-user"></span>
											</div>
											<span className="message-contact ml-5 text-danger">
												{/*inbox.SenderNumber*/}
												<span className="message-date float-right">{/*inbox.ReceivingDateTime*/}</span>
											</span>
											<p className="message-text ml-5">{/*inbox.TextDecoded*/}</p>
										</div>
									</div>
								</div>
							</div>

							<div className="col-lg-5">
								<div className="card card-main mt-5">
									<div className="card-title">
										<span className="fas fa-envelope mr-2"></span>
										Quick SMS
									</div>
									<form action="/dashboard/store" method="POST" className="form-quick-sms">
										<input type="hidden" name="{{ csrf_token_name }}" value="{{ csrf_hash }}" />
										<div className="card-body">
											<div className="form-group">
												<input name="DestinationNumber" type="number" className="form-control" placeholder="Phone number..." />
											</div>
											<div className="sms-input-module">
												
												<div className="form-group">
													<textarea name="TextDecoded" type="text" maxLength="160" className="sms-input form-control" placeholder="Write a message..." style={ {height: '150px'} }></textarea>
												</div>
												<div className="form-group">
													<input data-char-left='1' type="number" className="sms-char-left form-control is-small d-inline-block" value="160" readOnly />
													<small className="text-right">Sisa Karakter</small>
												</div>
												
											</div>
										</div>
										<div className="card-footer clearfix">
											<button type="submit" className="btn float-right"><small>Send <span className="far fa-paper-plane ml-2"></span></small></button>
										</div>
									</form>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div> 
        );
    }
}

export default Dashboard;
