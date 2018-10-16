import React, { Component, Fragment } from 'react';

import Card from '@/components/Card';

class SendSMSSingle extends Component {
    

    render() {
        return (
			<div className="row pt-4">
				<div className="col">
					<Card
						className="card-main"
						title="Kirim SMS Single"
						footer={
							<Fragment>
								<button type="submit" className="btn btn-primary float-left">Kirimkan Pesan</button>
								<button id="buttonReset" className="btn btn-warning float-right" role="button">Reset</button>
							</Fragment>
						}
					>
						<form method="POST" action="{{ base_url() }}sms/single/store">

							<input type="hidden" name="{{ csrf_token_name }}" value="{{ csrf_hash }}" />

								<div id="contactCart">

									<div className="form-row">

										<div className="col-12 col-md-6">
											<label htmlFor="">Input no telephone</label>
											<div className="input-group">
												<input id="contactNo" type="number" className="form-control" placeholder="" />
												<div className="input-group-append">
													<a href="javascript:void(0)" id="addContact" className="btn btn-info" role="button">Add</a>
												</div>
											</div>
										</div>

										<div className="col-12 col-md-6">
											<div className="form-group">
												<label htmlFor="">Pilih contact yang tersedia</label>
												<a href="#" role="button" className="btn btn-info d-block text-white" data-toggle="modal" data-target="#modalContactSearch">Cari <span className="far fa-address-book"></span></a>
											</div>
										</div>

									</div>

									<div className="contact-cart text-center position-relative mt-3">
										<div className="contact-cart-icon">
											<span>Kontak ditambahkan <i className="far fa-address-book"></i></span>
										</div>
										<ul className="contact-cart-list" id="contactList">
											{/*<script id="contact-template" type="text/template">
												{% verbatim %}
													{{#contact}}
													<li>
														{{.}}
														<span className="del fas fa-times-circle"></span>
													</li>
													{{/contact}}
												{% endverbatim %}
											</script>*/}
										</ul>

										<textarea name="DestinationNumbers" id="contactListStack" cols="30" rows="10" className="form-control d-none"></textarea>
									</div>	

								</div>

								<div className="sms-input-module">
												
									<div className="form-group">
										<textarea name="TextDecoded" type="text" maxLength="160" className="sms-input form-control" placeholder="Write a message..." style={{height: '150px'}}></textarea>
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
        );
    }
}

export default SendSMSSingle;
