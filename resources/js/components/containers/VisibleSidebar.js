import React from 'react';
import Sidebar from '@/components/Sidebar';
import { connect } from 'react-redux';

let VisibleSidebar = ({noMatch, ...rest}) => {
	return !noMatch ? <Sidebar {...rest}/> : null;
}


const mapStateToProps = (state, ownProps) => {
    return {
        noMatch: state.noMatch
    }
}

VisibleSidebar = connect(mapStateToProps)(VisibleSidebar);

export default VisibleSidebar;