import React from 'react';
import Sidebar from '@/components/Sidebar';
import { connect } from 'react-redux';

let VisibleSidebar = ({noMatch, ...rest}) => {
	return !noMatch ? <Sidebar {...rest}/> : null;
}


const mapStateToProps = (state, ownProps) => {
    return {
        noMatch: state.route.noMatch,
        isSidebarHide: state.UI.isSidebarHide,
	    isSidebarShowMobile: state.UI.isSidebarShowMobile,
    }
}

VisibleSidebar = connect(mapStateToProps)(VisibleSidebar);

export default VisibleSidebar;