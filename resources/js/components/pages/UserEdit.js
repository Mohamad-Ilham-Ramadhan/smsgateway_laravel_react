import React, { Component, Fragment } from 'react';

import Card from '@/components/Card';

class UserEdit extends Component {

    render() {
        return (
            <div className="row pt-4">
				<div className="col">
					<Card
						className="card-main"
						title="Edit Data User"
						footer={
							<Fragment>
								<button className="button btn btn-primary btn-sm float-left">Update</button>
								<button id="buttonReset" className="button btn btn-warning btn-sm float-right">Reset</button>
							</Fragment>
						}
					>
						<form action="{{ base_url() }}autoreply/store" method="POST">

							<input type="hidden" name="{{ csrf_token_name }}" defaultValue="{{ csrf_hash }}" />
							<table className="table table-bordered">
								<tbody>
									<tr>
										<td style={{width: '110px'}}><small><strong>Username</strong></small></td>
										<td>
											<input name="username" type="text" className="form-control form-control-sm" />
										</td>
									</tr>
									<tr>
										<td style={{width: '110px'}}><small><strong>Password</strong></small></td>
										<td>
											<input name="password" type="password" className="form-control form-control-sm" />
										</td>
									</tr>
									<tr>
										<td style={{width: '110px'}}><small><strong>Nama Lengkap</strong></small></td>
										<td>
											<input name="nama_lengkap" type="text" className="form-control form-control-sm" />
										</td>
									</tr>
									<tr>
										<td style={{width: '110px'}}><small><strong>No Telepon</strong></small></td>
										<td>
											<input name="no_telepon" type="text" className="form-control form-control-sm" />
										</td>
									</tr>
									<tr>
										<td style={{width: '110px'}}><small><strong>Level Privilege</strong></small></td>
										<td>
											<select name="level_privilege" className="form-control form-control-sm">
												<option value="superuser">Superuser</option>
												<option value="user">User</option>
											</select>
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

export default UserEdit;
