import React from 'react';
import Navbar from '@/components/Navbar';
import { connect } from 'react-redux';

let VisibleNavbar = ({noMatch, ...rest}) => {
	return !noMatch ? <Navbar {...rest}/> : null;
}

const mapStateToProps = (state, ownProps) => {
    return {
        noMatch: state.route.noMatch,
        isSidebarShowMobile: state.UI.isSidebarShowMobile
    }
}

VisibleNavbar = connect(mapStateToProps)(VisibleNavbar);

export default VisibleNavbar;

