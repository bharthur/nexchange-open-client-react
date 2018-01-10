import React from 'react';
import { Link } from 'react-router-dom';
import config from '../config';

const Footer = () => (
	<footer>
		<div className="container">
			<ul>
				<li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
				<li><Link to="/privacy">Privacy Policy</Link></li>
				{/*<li><Link to="/refund-cancellation">Refund and Cancellation Policy</Link></li>*/}
			</ul>

			<p className="text-muted">Powered by <a href={`https://nexchange.io/?ref=${config.REFERRAL_CODE}`} target="_blank">Nexchange</a></p>
		</div>
	</footer>
);

export default Footer;
