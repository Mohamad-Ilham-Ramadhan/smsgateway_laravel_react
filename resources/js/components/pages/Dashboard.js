import React, { Component, Fragment } from 'react';
import Chart from 'chart.js';

import Card from '@/components/Card';
import ChartSMS from '@/components/ChartSMS';

class Dashboard extends Component {

  
    render() {
        return (
        	// flash message <--
           <div className="row">
				<div className="col">
					<div className="container">

						<div className="row mt-5">
							<div className="col">

								<Card 
									className="card-main"
									title="Trafik SMS Bulan Ini"
								>
									<ChartSMS />
								</Card>
							</div>
						</div>

						<div className="row">
							<div className="col-lg-7">

								<Card 
									className="card-main mt-5"
									title={<Fragment><span className="far fa-comments mr-2"></span>Inbox</Fragment>}
								>
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
								</Card>	
							</div>

							<div className="col-lg-5">
								<Card
									className="card-main mt-5"
									title={<Fragment><span className="fas fa-envelope mr-2"></span>Quick SMS</Fragment>}
									footer={
										<button type="submit" className="btn float-right"><small>Send <span className="far fa-paper-plane ml-2"></span></small></button>
									}
								>
									<form action="/dashboard/store" method="POST" className="form-quick-sms">

										<input type="hidden" name="{{ csrf_token_name }}" value="{{ csrf_hash }}" />

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

									</form>
								</Card>
							</div>
						</div>

					</div>
				</div>
			</div> 
        );
    }
}

export default Dashboard;
