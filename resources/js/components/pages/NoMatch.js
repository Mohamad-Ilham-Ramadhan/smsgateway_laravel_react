import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// actions

import setNoMatch from '@/actions/setNoMatch';

class NoMatch extends Component {

	componentWillMount() {
		const { dispatch } = this.props;
		dispatch(setNoMatch(true));

		const body = document.body;
		body.classList.add('no-match');
	}

	componentWillUnmount() {
		const { dispatch } = this.props;
		dispatch(setNoMatch(false));
		const body = document.body;
		body.classList.remove('no-match');
	}

    render() {
        return (
            <div className="container-fluid">
				<h1 className="h1 text-center" 
					style={ {fontSize: '172px', color: '#fff'} }
				>404</h1>
				<div className="text-center">
					<Link to="/dashboard" className="btn btn-primary text-center mt-5" 
						style={{fontSize: '50px', padding: '30px 50px', borderRadius: '10px', background: '#af525a', borderColor: '#cf786b'}}
					>Go Home</Link>
				</div>	
			</div>
        );
    }
}

NoMatch = connect()(NoMatch);

export default NoMatch;
