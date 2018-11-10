import React, { Component, Fragment } from 'react';

import 'select2/dist/js/select2.js';
import 'select2/dist/css/select2.css';

import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.js';
import	'bootstrap-datepicker/dist/css/bootstrap-datepicker.css';

import Card from '@/components/Card';
import SelectPerPage from '@/components/SelectPerPage';
import Pagination from '@/components/Pagination';

class PasienEdit extends Component {
	setGroupContactSelect2Ref = (node) => {
		this.groupContactSelect2 = node;
	}

	setTanggalDaftarRef = (node) => {
		this.tanggalDaftar = node;
	}
    
    componentDidMount() {
    	this.$groupContactSelect2 = $(this.groupContactSelect2);
    	this.$groupContactSelect2.select2();

    	this.$tanggalDaftar = $(this.tanggalDaftar);
    	this.$tanggalDaftar.datepicker();
    }

    componentWillUnmount() {
    	this.groupContactSelect2 = null
    	this.$groupContactSelect2.remove();

    	this.tanggalDaftar = null
    	this.$tanggalDaftar.remove();
    }

    render() {
        return (
            <div className="row pt-4">
				<div className="col">
					<Card
						className="card-main"
						title="Edit Data Pasien"
						footer={
							<Fragment>
								<button className="button btn btn-primary btn-sm float-left">Update</button>
								<button id="buttonReset" className="button btn btn-warning btn-sm float-right">Reset</button>
							</Fragment>
						}
					>
						<form action="{{ base_url() }}pasien/store" method="POST">
							<input type="hidden" name="{{ csrf_token_name }}" defaultValue="{{ csrf_hash }}" />
							<table className="table table-bordered">
								<tbody>
									<tr>
										<td style={{ width: '120px'}}><small><strong>Nama Group</strong></small></td>
										<td>
											<div id="groupContactPasien">
												<div className="form-row">
													<div className="col-12 col-md-6">
														<div className="form-group">
															<select ref={this.setGroupContactSelect2Ref} name="group_contact_pasien[]" id="groupContactPasienSelect" className="form-control form-control-sm" multiple="multiple">
																{/*{% for groupContact in group_contacts %}*/}
																	<option className="group-contact-pasien-select-option" defaultValue="groupContact.id">groupContact.nama1</option>
																	<option className="group-contact-pasien-select-option" defaultValue="groupContact.id">groupContact.nama2</option>
																{/*{% endfor %}*/}
															</select>		
														</div>
													</div>
													<div className="col-12 col-md-6">
														<div className="form-group">
															<div className="custom-control custom-checkbox pt-2">
																<input type="checkbox" className="custom-control-input" id="groupContactPasienCheckbox" />
																<label className="custom-control-label" htmlFor="groupContactPasienCheckbox">Pilih Semua Group</label>
															</div>								
														</div>
													</div>
												</div>									
											</div>
										</td>
									</tr>

									<tr>
										<td><small><strong>Nama Pasien</strong></small></td>
										<td>
											<input name="nama" type="text" className="form-control form-control-sm form-resetable" required />
										</td>
									</tr>

									<tr>
										<td><small><strong>No Telepon</strong></small></td>
										<td>
											<input name="no_telpon" type="number" className="form-control form-control-sm form-resetable" min="0" required />
										</td>
									</tr>

									<tr>
										<td><small><strong>Alamat</strong></small></td>
										<td>
											<textarea name="alamat" className="form-control form-resetable" rows="4"></textarea>
										</td>
									</tr>

									<tr>
										<td><small><strong>Jenis Kelamin</strong></small></td>
										<td>
											<select name="jenis_kelamin" className="custom-select custom-select-sm form-resetable" required>
												<option defaultValue="L">Laki-laki</option>
												<option defaultValue="P">Perempuan</option>
											</select>
										</td>
									</tr>

									<tr>
										<td><small><strong>Tanggal Daftar</strong></small></td>
										<td>
											<input ref={this.setTanggalDaftarRef} name="tgl_daftar" id="tglDaftar" type="text" defaultValue="01/01/1995" className="form-control form-control-sm date form-resetable" />
										</td>
									</tr>						
								</tbody>
							</table>
						</form>
						
					</Card>
				</div>
			</div>
        );
    }
}

export default PasienEdit;
