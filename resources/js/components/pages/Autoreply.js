import React, { Component, Fragment } from 'react';

import Card from '@/components/Card';

class Autoreply extends Component {

    render() {
        return (
        	<div className="row pt-4 position-relative" id="tooltipContainer">
				<div className="col">
					<Card
						className='card-main'
						title="Data Autoreply"
						extra={
							<a href="{{ base_url() }}autoreply/create" className="btn btn-primary btn-sm btn-rounded float-right" data-toggle="tooltip" data-placement="top" data-original-title="Add"><i className="fas fa-plus"></i></a>
						}
						footer={
							<div className="pagination-wrapper">
								<small>Showing of 1 to 10 entries</small>
								<nav className="d-inline-block float-right" aria-label="Pagination data">
									{/*{ pagination.create_links | raw }*/} 
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
											<select id="perPage" name="perPage" className="custom-select custom-select-sm form-control form-control-sm is-small d-inline-block">
												{/*
												{% set recordsPerPageOptions = [10, 25, 50, 100] %}
												{% for option in recordsPerPageOptions %}
													<option {% if option == per_page %}selected{% endif %} value="{{ option }}">{{ option }}</option>	
												{% endfor %}
												*/}
											</select>
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
													<input id="search" name="search" type="text" placeholder="Keyword..." value="{{ search }}" className="form-control form-control-sm d-inline-block is-medium"/>
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
									<th scope="col">Keyword</th>
									<th scope="col">Reply</th>
									<th scope="col" style={{width: '200px', textAlign: 'center'}}>Action</th>
								</tr>
							</thead>
							<tbody>
								{/*% for autoreply in autoreplies %*/}
									<tr>
										<th scope="row"> autoreply.id </th>
										<td> autoreply.keyword </td>
										<td> autoreply.reply </td>
										<td className="text-center">
											<a href="{{ base_url() }}autoreply/{{ autoreply.id }}/edit" className="btn btn-sm btn-success mx-1" data-toggle="tooltip" data-placement="top" data-original-title="edit"><i className="fas fa-edit"></i></a>
											
											<div className="d-inline-block" data-toggle="tooltip" data-placement="top" data-original-title="delete">
												<form action="{{ base_url() }}autoreply/{{ autoreply.id }}/destroy" method="POST">
													<input type="hidden" name="{{ csrf_token_name }}" value="{{ csrf_hash }}" />
													<div className="btn btn-sm btn-danger mx-1" data-toggle="modal" data-target="#autoreplyModalDelete" data-autoreply-id="{{ autoreply.id }}" data-autoreply-keyword="{{ autoreply.keyword }}"><i className="fas fa-trash-alt"></i></div>				
												</form>
											</div>
										</td>
									</tr>
								{ /* % endfor % */ }
							</tbody>
						</table>
					</Card>
					{/*<div className="card card-main">
						<div className="card-title clearfix">
							Data Autoreply
							<a href="{{ base_url() }}autoreply/create" className="btn btn-primary btn-sm btn-rounded float-right" data-toggle="tooltip" data-placement="top" data-original-title="Add"><i className="fas fa-plus"></i></a>
						</div>
						<div className="card-body">
							<div className="data-filter">
								<div className="row">
									<div className="col-12 col-md-6">
										<div className="filter-entries">
											<form action="{{ base_url() }}autoreply" method="POST">
												<small>Tampilkan</small>
												<select id="perPage" name="perPage" className="custom-select custom-select-sm form-control form-control-sm is-small d-inline-block">
													{% set recordsPerPageOptions = [10, 25, 50, 100] %}
													{% for option in recordsPerPageOptions %}
														<option {% if option == per_page %}selected{% endif %} value="{{ option }}">{{ option }}</option>	
													{% endfor %}
												</select>
												<small>Baris</small>															
											</form>													
										</div>
									</div>
									<div className="col-12 col-md-6">
										<div className="filter-search">
											<div className="form-group clearfix">
												<form action="{{ base_url() }}autoreply" method="POST">
														<label for="">
														<small>Search:</small>
														<input id="search" name="search" type="text" placeholder="Keyword..." value="{{ search }}" className="form-control form-control-sm d-inline-block is-medium">
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

							{% if search %}
								<div className="text-center"><small>Hasil untuk: "{{ search }}"</small></div>
							{% endif %}
							
							<table className="table table-group table-bordered table-striped table-hover table-sm">
								<thead>
									<tr>
										<th scope="col">Id</th>
										<th scope="col">Keyword</th>
										<th scope="col">Reply</th>
										<th scope="col" style="width: 200px; text-align: center;">Action</th>
									</tr>
								</thead>
								<tbody>
									{% for autoreply in autoreplies %}
										<tr>
											<th scope="row">{{ autoreply.id }}</th>
											<td>{{ autoreply.keyword }}</td>
											<td>{{ autoreply.reply }}</td>
											<td className="text-center">
												<a href="{{ base_url() }}autoreply/{{ autoreply.id }}/edit" className="btn btn-sm btn-success mx-1" data-toggle="tooltip" data-placement="top" data-original-title="edit"><i className="fas fa-edit"></i></a>
												
												<div className="d-inline-block" data-toggle="tooltip" data-placement="top" data-original-title="delete">
													<form action="{{ base_url() }}autoreply/{{ autoreply.id }}/destroy" method="POST">
														<input type="hidden" name="{{ csrf_token_name }}" value="{{ csrf_hash }}">
														<div className="btn btn-sm btn-danger mx-1" data-toggle="modal" data-target="#autoreplyModalDelete" data-autoreply-id="{{ autoreply.id }}" data-autoreply-keyword="{{ autoreply.keyword }}"><i className="fas fa-trash-alt"></i></div>				
													</form>
												</div>
											</td>
										</tr>
									{% endfor %}
								</tbody>
							</table>
						</div>
						<div className="card-footer">
							<div className="pagination-wrapper">
								<small>Showing of 1 to 10 entries</small>
								<nav className="d-inline-block float-right" aria-label="Pagination data">
									{{ pagination.create_links | raw }}
								</nav>
							</div>
						</div>
					</div>*/}
				</div>
			</div>
        );
    }
}

export default Autoreply;
