import React, { Component, Fragment } from 'react';

import Card from '@/components/Card';

class GroupContactAdd extends Component {

    render() {
        return (
        	<div className="row pt-4">
				<div className="col">
					<Card
						className="card-main"
						title="Tambah Data Group Contact"
						footer={
							<Fragment>
								<button className="button btn btn-primary btn-sm float-left">Tambahkan</button>
								<button id="buttonReset" className="button btn btn-warning btn-sm float-right">Reset</button>
							</Fragment>
						}
					>
						<form action="{{ base_url() }}autoreply/store" method="POST">

							<input type="hidden" name="{{ csrf_token_name }}" defaultValue="{{ csrf_hash }}" />
							<table className="table table-bordered">
								<tbody>
									<tr>
										<td style={{width: '110px'}}><small><strong>Nama Group</strong></small></td>
										<td>
											<input name="keyword" type="text" className="form-control form-control-sm" />
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

export default GroupContactAdd;
