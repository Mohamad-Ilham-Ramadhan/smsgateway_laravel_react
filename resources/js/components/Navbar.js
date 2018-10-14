import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    	const { isShow, noMatch } = this.props;
    	if ( !noMatch ) {
	        return (
	            <nav className={"navbar navbar-expand-lg navbar-main flex-nowrap" + (isShow ? ' is-show' : '')} id="navbarMain">

					<ul className="nav">
						<div onClick={ (e) => { this.props.toggleSidebar(e)} } className="navbar-burger btn btn-default btn-sm btn-rounded" data-target="sidebarOffcanvas">
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
						</div>
					</ul>

					<ul className="nav ml-auto">
						<li onClick={ (e) => {this.toggleDropdown(e)} } className="nav-item dropdown">
							<a href="" className="nav-link nav-link-notif dropdown-toggle btn btn-sm btn-default btn-rounded" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
							<i className="fas fa-bell"></i>
								<div id="totalNewInboxsHeader" className="notif-badge position-absolute">
									<span className="badge badge-rounded badge-info bg-aqua position-relative">
										<span></span>
									</span>				
								</div>
							</a>
							<div className="dropdown-menu dropdown-menu-right">
								<a className="dropdown-item" href="{{base_url()}}inbox/new"><small>Lihat semua inboxs baru.</small></a>
							</div>
						</li>

						<li className="nav-item"><a href="" className="nav-link btn btn-sm btn-default btn-rounded">
							<i className="fas fa-home"></i>
						</a></li>

						<li onClick={ (e) => {this.toggleDropdown(e)} } className="nav-item dropdown">
							<a href="" className="nav-link dropdown-toggle btn btn-sm btn-default btn-rounded" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
							<i className="fas fa-user-tie"></i>
							</a>
							<div className="dropdown-menu dropdown-menu-user dropdown-menu-right">
								<div>
									<img src="img/avatar5.png" className="img img-thumbnail img-circle" alt=""/>
									<div className="name">Name: </div>
									<div className="privilege">Privilege: </div>
									<div className="d-flex justify-content-between px-2 bg-white pt-2 pb-2">
										<a href="{{ base_url() }}user/{{ user.id }}/edit" className="btn btn-sm btn-default edit">Edit Profile</a>
										<a href="{{ base_url() }}logout" className="btn btn-sm btn-default edit">Logout</a>
									</div>
								</div>
							</div>
						</li>

					</ul>

				</nav>
	        );
    	} else {
    		return null;
    	}
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        noMatch: state.noMatch
    }
}

Navbar = connect(mapStateToProps)(Navbar);

export default Navbar;
