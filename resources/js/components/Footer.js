import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

let Footer = () => {
	return (
        <section className="footer px-3 py-3">
			<p className="mb-0 text-center"><small><strong>Copyright &copy; 2018</strong><Link to="/dashboard">Puskesmas Rau SMS Gateway</Link>. All rights reserved.</small></p>
		</section>
	);
};


export default Footer;
