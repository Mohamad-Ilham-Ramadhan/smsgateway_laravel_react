import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section class="footer px-3 py-3">
			<p class="mb-0 text-center"><small><strong>Copyright &copy; 2018</strong><Link to="/dashboard">Puskesmas Rau SMS Gateway</Link>. All rights reserved.</small></p>
		</section>
    );
};


export default Footer;
