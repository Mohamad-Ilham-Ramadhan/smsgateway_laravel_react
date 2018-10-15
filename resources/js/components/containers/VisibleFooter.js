import React from 'react';
import Footer from '@/components/Footer';
import { connect } from 'react-redux';

let VisibleFooter = ({noMatch}) => {
	return !noMatch ? <Footer /> : null;
}

const mapStateToProps = (state, ownProps) => {
    return {
        noMatch: state.route.noMatch
    }
}

VisibleFooter = connect(mapStateToProps)(VisibleFooter);

export default VisibleFooter;

