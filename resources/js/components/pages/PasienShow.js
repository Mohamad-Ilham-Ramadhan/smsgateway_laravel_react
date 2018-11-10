import React, { Component, Fragment } from 'react';

import { Link } from 'react-router-dom';

import Card from '@/components/Card';

class PasienShow extends Component {

    render() {
        return (
            <div className="row pt-4">
            	<div className="col">
            		<Card 
            			className="card-main"
            			title="Data Pasien"
            		>
            			<table className="table table-group table-bordered table-striped table-hover table-sm">
						<thead>
							<tr>
								<th scope="col">Nama Pasien</th>
								<th scope="col">No Telepon</th>
								<th scope="col">Alamat</th>
								<th scope="col">Jenis Kelamin</th>
								<th scope="col">Tanggal Daftar</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>pasien.nama</td>
								<td>pasien.no_telpon</td>
								<td>pasien.alamat</td>
								<td>pasien.jenis_kelamin</td>
								<td>pasien.tgl_daftar</td>
							</tr>
						</tbody>
					</table>

					<div className="alert alert-info">
						Terdaftar Dalam group: 
						<span>
							<i>Gigi, Anak...</i>
						</span>
					</div>

					<div className="mt-3">
						<Link to="/pasien" className="btn btn-primary">Pasien List</Link>
					</div>
            		</Card>
            	</div>
            </div>
        );
    }
}

export default PasienShow;
