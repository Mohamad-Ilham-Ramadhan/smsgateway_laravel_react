import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


import Collapse from '@/components/Collapse';

class Sidebar extends React.Component {

	toggleCollapseCaret = (e) => {
		const toggler = e.target.closest('.collapsed');
		if ( toggler ) {
			toggler.classList.toggle('is-active');
		}
	}

	render() {
		const { isHide, isShow, noMatch}  = this.props;

		if ( !noMatch ) {
		    return (
				<nav className={'nav sidebar-nav flex-column flex-nowrap' + (isHide ? ' is-hide' : '') + (isShow ? ' is-show' : '')} id="sidebarOffcanvas">
					<div role="button" className="nav-link is-heading">Puskesmas Rau 
						<img src="img/logo.png" alt="" style={{width: '28px'}} />
					</div>

					<Link to="/dashboard" className="nav-link"><span className="fas fa-tachometer-alt mr-2"></span>Dashboard</Link>
					<a ref={(node) => {this.sendSMSSubmenuToggler = node;} } onClick={ (e) => { this.toggleCollapseCaret(e) } } id="sendSMSSubmenuToggler" data-target="#sendSMSSubmenu" className="nav-link collapsed" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapse-menu">
						<span className="fas fa-paper-plane mr-2"></span>
						Send SMS
						<span className="caret fas fa-chevron-left float-right"></span>
					</a>
					<Collapse toggler='#sendSMSSubmenuToggler'>
						<div className="collapse" id="sendSMSSubmenu" data-parent="#sidebarOffcanvas">
							<nav className="nav nav-submenu flex-column flex-nowrap">
								<Link to="/send-sms-single/create" className="nav-link"><span className="far fa-circle ml-3 mr-2"></span>Single SMS</Link>
								<Link to="/send-sms-group/create" className="nav-link"><span className="far fa-circle ml-3 mr-2"></span>Group SMS</Link>
								<Link to="/autoreplies" className="nav-link"><span className="far fa-circle ml-3 mr-2"></span>Autoreply</Link>
							</nav>		
						</div>
					</Collapse>
					<Link to="/inboxs" className="nav-link"><span className="fas fa-envelope mr-2"></span>Inbox 
						<span id="totalNewInboxsSidebar" className="float-right">
							<span className="badge badge-rounded badge-info bg-aqua position-relative">
								<span className="total-new-inboxs">9</span>
							</span>
						</span>
					</Link>
					<Link to="/outboxs" className="nav-link"><span className="far fa-envelope mr-2"></span>Outbox</Link>
					<Link to="/sent-items" className="nav-link"><span className="far fa-paper-plane mr-2"></span>Sent item</Link>
					<Link to="/group-contacts" className="nav-link"><span className="far fa-list-alt mr-2"></span>Group Contact</Link>
					<Link to="/pasien" className="nav-link"><span className="far fa-list-alt mr-2"></span>Pasien</Link>
					<Link to="/users" className="nav-link"><span className="fas fa-users mr-2"></span>User</Link>
				</nav>
		    );	
		} else {
			return null;
		}
	}
};

const mapStateToProps = (state, ownProps) => {
    return {
        noMatch: state.noMatch
    }
}

Sidebar = connect(mapStateToProps)(Sidebar);

export default Sidebar;
