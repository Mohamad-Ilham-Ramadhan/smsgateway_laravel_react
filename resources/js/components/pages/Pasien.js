import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import Card from '@/components/Card';
import SelectPerPage from '@/components/SelectPerPage';
import Pagination from '@/components/Pagination';

class Pasien extends Component {

    render() {
        return (
            <div className="row pt-4 position-relative" id="tooltipContainer">
				<div className="col">
					<Card
						className='card-main'
						title="Data Pasien"
						extra={
							<Link to="/pasien/create" id="add" className="btn btn-primary btn-sm btn-rounded float-right" data-toggle="tooltip" data-placement="top" data-original-title="Add"><i className="fas fa-plus"></i></Link>
						}
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
										<form action="{{ base_url() }}autoreply" method="POST">
											<small>Tampilkan</small>
												<SelectPerPage 
													recordsPerPageOptions={[10, 25, 50, 100]}
												/>
											<small>Baris</small>															
										</form>													
									</div>
								</div>
								<div className="col-12 col-md-6">
									<div className="filter-search">
										<div className="form-group clearfix">
											<form action="{{ base_url() }}autoreply" method="POST">
													<label htmlFor="">
													<small>Search:</small>
													<input id="search" name="search" type="text" placeholder="Keyword..." defaultValue="{{ search }}" className="form-control form-control-sm d-inline-block is-medium"/>
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

					{/* % if search % */}
							<div className="text-center"><small>Hasil untuk: " search "</small></div>
						{/* % endif % */}

						<table className="table table-group table-bordered table-striped table-hover table-sm">
							<thead>
								<tr>
									<th scope="col">Id</th>
									<th scope="col">Nama</th>
									<th scope="col">No Telpon</th>
									<th scope="col" style={{width: '200px', textAlign: 'center'}}>Action</th>
								</tr>
							</thead>
							<tbody>
								{/*% for autoreply in autoreplies %*/}
									<tr>
										<th scope="row"> pasien.id </th>
										<td> pasien.nama </td>
										<td> pasien.noTelpon </td>
										<td className="text-center">
											<a href="{{ base_url() }}autoreply/{{ autoreply.id }}/edit" className="btn btn-sm btn-success mx-1" data-toggle="tooltip" data-placement="top" data-original-title="edit"><i className="fas fa-edit"></i></a>
											
											<div className="d-inline-block" data-toggle="tooltip" data-placement="top" data-original-title="delete">
												<form action="{{ base_url() }}autoreply/{{ autoreply.id }}/destroy" method="POST">
													<input type="hidden" name="{{ csrf_token_name }}" defaultValue="{{ csrf_hash }}" />
													<div className="btn btn-sm btn-danger mx-1" data-toggle="modal" data-target="#autoreplyModalDelete" data-autoreply-id="{{ autoreply.id }}" data-autoreply-keyword="{{ autoreply.keyword }}"><i className="fas fa-trash-alt"></i></div>				
												</form>
											</div>
											<div className="btn btn-sm btn-default mx-1" data-toggle="tooltip" data-placement="top" data-original-title="show"><i className="far fa-eye"></i></div>
										</td>
									</tr>
								{ /* % endfor % */ }
							</tbody>
						</table>
					</Card>

				</div>
			</div>
        );
    }
}

export default Pasien;
