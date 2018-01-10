import React from 'react';
import { Link } from 'react-router-dom';
import config from '../config';

const About = () => (
  <div id="about">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h2>About Us</h2>
          <p>Krypton8 is a revolutionary crypto-currency technology powered by <a href={`https://nexchange.io/?ref=${config.REFERRAL_CODE}`} target="_blank">Nexchange</a>. It serves your crypto-currency exchange needs by anonymous conversion of crypto majors BTC (Bitcoin), ETH (Ethereum), LTC (Litecoin) and latest altcoins for trading. Buy, sell and mix your crypto-currency.</p><br/>
          <Link to="/about-us" className="btn btn-themed">Read More</Link>
        </div>
      </div>
    </div>
  </div>
);

export default About;
