import React from 'react';

import Collapse from '@/components/Collapse';

class Sidebar extends React.Component {

	toggleCollapseCaret = (e) => {
		const toggler = e.target.closest('.collapsed');
		if ( toggler ) {
			toggler.classList.toggle('is-active');
		}
	}

	render() {
		const { isHide, isShow } = this.props;

	    return (
		<nav className={'nav sidebar-nav flex-column flex-nowrap' + (isHide ? ' is-hide' : '') + (isShow ? ' is-show' : '')} id="sidebarOffcanvas">
			<div role="button" className="nav-link is-heading">Puskesmas Rau 
				<img src="img/logo.png" alt="" style={{width: '28px'}} />
			</div>

			<a href="dashboard" className="nav-link"><span className="fas fa-tachometer-alt mr-2"></span>Dashboard</a>
			<a ref={(node) => {this.sendSMSSubmenuToggler = node;} } onClick={ (e) => { this.toggleCollapseCaret(e) } } id="sendSMSSubmenuToggler" data-target="#sendSMSSubmenu" className="nav-link collapsed" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapse-menu">
				<span className="fas fa-paper-plane mr-2"></span>
				Send SMS
				<span className="caret fas fa-chevron-left float-right"></span>
			</a>
			<Collapse toggler='#sendSMSSubmenuToggler'>
				<div className="collapse" id="sendSMSSubmenu" data-parent="#sidebarOffcanvas">
					<nav className="nav nav-submenu flex-column flex-nowrap">
						<a href="sms/single/create" className="nav-link"><span className="far fa-circle ml-3 mr-2"></span>Single SMS</a>
						<a href="sms/group/create" className="nav-link"><span className="far fa-circle ml-3 mr-2"></span>Group SMS</a>
						<a href="autoreply" className="nav-link"><span className="far fa-circle ml-3 mr-2"></span>Autoreply</a>
					</nav>		
				</div>
			</Collapse>
			<a href="inbox" className="nav-link"><span className="fas fa-envelope mr-2"></span>Inbox 
				<span id="totalNewInboxsSidebar" className="float-right">
					<span className="badge badge-rounded badge-info bg-aqua position-relative">
						<span className="total-new-inboxs">9</span>
					</span>
				</span>
			</a>
			<a href="outbox" className="nav-link"><span className="far fa-envelope mr-2"></span>Outbox</a>
			<a href="sent_item" className="nav-link"><span className="far fa-paper-plane mr-2"></span>Sent item</a>
			<a href="group_contact" className="nav-link"><span className="far fa-list-alt mr-2"></span>Group Contact</a>
			<a href="pasien" className="nav-link"><span className="far fa-list-alt mr-2"></span>Pasien</a>
			<a href="user" className="nav-link"><span className="fas fa-users mr-2"></span>User</a>
		</nav>
	    );	
	}
};

export default Sidebar;
