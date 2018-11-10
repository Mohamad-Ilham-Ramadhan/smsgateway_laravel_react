import React, { Component, Fragment } from 'react';

import 'select2/dist/js/select2.js';
import 'select2/dist/css/select2.css';

import Card from '@/components/Card';

class SendSMSGroup extends Component {

	setGroupContactSelect2Ref = (node) => {
		this.groupContactSelect2 = node;
	}

    componentDidMount() {
    	this.$groupContactSelect2 = $(this.groupContactSelect2);
    	this.$groupContactSelect2.select2();
    }

    componentWillUnmount() {
    	this.groupContactSelect2 = null
    	this.$groupContactSelect2.remove();
    }

    render() {
        return (
            <div className="row pt-4">
				<div className="col">

					<Card
						className="card-main"
						title="Kirim SMS Group"
						bodyClassName="px-5"
						footer={
							<Fragment>
								<button type="submit" className="btn btn-primary float-left">Kirimkan Pesan</button>
								<button id="buttonReset" className="btn btn-warning float-right" role="button">Reset</button>
							</Fragment>
						}
					>
						<form action="{{ base_url() }}sms/group/store" method="POST">
							<input type="hidden" name="{{ csrf_token_name }}" value="{{ csrf_hash }}" />
							<div id="groupContact">
								<div className="form-row">
									<div className="col-12 col-md-6">
										<div className="form-group">
											<label htmlFor="">Pilih Group</label>
											<select ref={this.setGroupContactSelect2Ref} name="group_contacts[]" id="groupContactSelect" className="form-control" multiple="multiple" required>
												{ /*% for groupContact in group_contacts %}
													<option className="group-contact-select-option" value="{{ groupContact.id }}">{{ groupContact.nama }}</option>
												{% endfor % */}
												<option className="group-contact-select-option" value="{{ groupContact.id }}">Ilham</option>
												<option className="group-contact-select-option" value="{{ groupContact.id }}">Cekatan</option>
											</select>															
										</div>
									</div>
									<div className="col-12 col-md-6">
										<div className="form-group">
											SMS Ke Semua Group 
											<div className="custom-control custom-checkbox pt-2">
												<input type="checkbox" className="custom-control-input" id="groupContactCheckbox" />
												<label className="custom-control-label" htmlFor="groupContactCheckbox">Pilih Semua Group</label>
											</div>								
										</div>
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
							</div>
						</form>
					</Card>

				</div>
			</div>
        );
    }
}

export default SendSMSGroup;
