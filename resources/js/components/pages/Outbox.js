import React, { Component } from 'react';

import Card from '@/components/Card';
import Pagination from '@/components/Pagination';
import SelectPerPage from '@/components/SelectPerPage';

class Outbox extends Component {

    render() {
        return (
            <div className="row pt-4">
				<div className="col">
					<Card
						className="card-main"
						title="Data Outbox"
						footer={
							<div className="pagination-wrapper">
								<small>Showing of 1 to 10 entries</small>
								<nav className="d-inline-block float-right" aria-label="Pagination data">
									<Pagination className="pagination-sm"/>
								</nav>
							</div>
						}
					>
						<div className="data-filter">
							<div className="row">
								<div className="col-12 col-md-6">
									<div className="filter-entries">
										<form action="{{ base_url() }}inbox" method="POST">
											<small>Tampilkan</small>
											<SelectPerPage recordsPerPageOptions={[10, 25, 50, 100]} />
										</form>													
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="filter-search">
										<div className="form-group clearfix">
											<form action="{{ base_url() }}inbox" method="POST">
													<label htmlFor="">
													<small>Search:</small>
													<input id="search" name="search" type="text" placeholder="No atau SMS" value="{{ search }}" className="form-control form-control-sm d-inline-block is-medium" />
														<button className="btn btn-default btn-search btn-sm">
															<i className="fas fa-search"></i>
														</button>
													</label>
											</form>
										</div>								
									</div>
								</div>
							</div>
						</div>
							
						{/* if search */}
							<div className="text-center"><small>Hasil untuk: { "{search}" }</small></div>
						{/* endif */}

						<table className="table table-group table-bordered table-striped table-hover table-sm">
							<thead>
								<tr>
									<th scope="col" style={{width: '70px'}}>ID</th>
									<th scope="col">Isi SMS</th>
									<th scope="col" style={ {width: '150px'}}>No Tujuan</th>
									<th scope="col" style={ {width: '145px'}}>Waktu Terima</th>
									<th scope="col" style={ {width: '100px'}}>Action</th>
								</tr>
							</thead>
							<tbody>
								{/* for inbox in inboxs */}						    
								<tr>
									<th scope="row">{ 'inbox.ID' }</th>
									<td>{ 'inbox.TextDecoded' }</td>
									<td>{ 'inbox.SenderNumber' }</td>
									<td>{ 'inbox.ReceivingDateTime' }</td>
									<td className="text-center">
										<form action="{{ base_url() }}inbox/{{ inbox.ID }}/destroy" method="POST">
											<input type="hidden" name="{{ csrf_token_name }}" value="{{ csrf_hash }}" />
											<div className="btn btn-sm btn-danger mx-1" data-toggle="modal" data-target="#inboxModalDelete" data-id="{{ inbox.ID }}" data-no-pengirim="{{ inbox.SenderNumber }}" data-isi-sms="{{ inbox.TextDecoded }}"><i className="fas fa-trash-alt"></i></div>
										</form>
									</td>
								</tr>
								{/* endfor */}
							</tbody>
						</table>
					</Card>
				</div>
			</div>
        );
    }
}

export default Outbox;
