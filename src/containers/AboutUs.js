import React from 'react';
import config from '../config';

const AboutUs = (props) => {
	return <div className="container">
		<div className="row">
			<div className="col-xs-12">
				<h2>Welcome to Krypton8</h2>
				<p>Krypton8 is a revolutionary technology that serves your crypto-currency exchange needs by anonymous conversion of crypto majors BTC (Bitcoin), ETH (Ethereum), LTC (Litecoin) and latest altcoins for trading. Buy, sell and mix your crypto-currency.</p>
				<p>Let’s assume you have Bitcoin and you want Ether. It goes like this:</p>
				<ol>
					<li>Select Bitcoin as the input and Ether as the output</li>
					<li>Provide your Ether address from your Ether wallet in the top box and enter amount, then click the Get Started Button.</li>
					<li>Krypton8 will generate a bitcoin deposit address for you (this is the address you will send your bitcoin from your bitcoin wallet to). Please send your bitcoin to this generated address.
					</li>
				</ol>
				<p>That’s it. In a few moments, your Ether will be quickly sent to you.</p><p>No emails or passwords. No lengthy sign­up process. No accounts. No bid and ask orders. No friction. And no sending your money to be held on a centralized exchange.</p><p>Krypton8 goal is to be the fastest, most private, and most convenient way to swap digital currencies, and the exchange rate will always remain competitive.</p><p>Krypton8 is Powered by <a href={`https://nexchange.io/?ref=${config.REFERRAL_CODE}`} target="_blank">Nexchange</a></p>
			</div>
		</div>
	</div>;
};

export default AboutUs;