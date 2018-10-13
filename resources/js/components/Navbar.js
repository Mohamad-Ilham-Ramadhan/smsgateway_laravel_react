import React, { Component } from 'react';

class Navbar extends Component {

	toggleDropdown = (e) => {
		e.preventDefault();
		const dropdown = e.target.closest('.dropdown');
		const dropdownMenu = dropdown.querySelector('.dropdown-menu');
		if (dropdown) {
			dropdownMenu.classList.toggle('show');
		}
	}

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-main flex-nowrap" id="navbarMain">

				<ul class="nav">
					<div class="navbar-burger btn btn-default btn-sm btn-rounded" data-target="sidebarOffcanvas">
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</div>
				</ul>

				<ul class="nav ml-auto">
					<li onClick={ (e) => {this.toggleDropdown(e)} } class="nav-item dropdown">
						<a href="" class="nav-link nav-link-notif dropdown-toggle btn btn-sm btn-default btn-rounded" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
						<i class="fas fa-bell"></i>
							<div id="totalNewInboxsHeader" class="notif-badge position-absolute">
								<span class="badge badge-rounded badge-info bg-aqua position-relative">
									<span></span>
								</span>				
							</div>
						</a>
						<div class="dropdown-menu dropdown-menu-right">
							<a class="dropdown-item" href="{{base_url()}}inbox/new"><small>Lihat semua inboxs baru.</small></a>
						</div>
					</li>

					<li class="nav-item"><a href="" class="nav-link btn btn-sm btn-default btn-rounded">
						<i class="fas fa-home"></i>
					</a></li>

					<li onClick={ (e) => {this.toggleDropdown(e)} } class="nav-item dropdown">
						<a href="" class="nav-link dropdown-toggle btn btn-sm btn-default btn-rounded" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
						<i class="fas fa-user-tie"></i>
						</a>
						<div class="dropdown-menu dropdown-menu-user dropdown-menu-right">
							<div>
								<img src="{{ base_url() }}public/img/avatar5.png" class="img img-thumbnail img-circle" alt=""/>
								<div class="name">Name: </div>
								<div class="privilege">Privilege: </div>
								<div class="d-flex justify-content-between px-2 bg-white pt-2 pb-2">
									<a href="{{ base_url() }}user/{{ user.id }}/edit" class="btn btn-sm btn-default edit">Edit Profile</a>
									<a href="{{ base_url() }}logout" class="btn btn-sm btn-default edit">Logout</a>
								</div>
							</div>
						</div>
					</li>

				</ul>

			</nav>
        );
    }
}

export default Navbar;
