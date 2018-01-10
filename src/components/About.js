import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div id="about">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h2>About Us</h2>
          <p>Krypton8 is revolutionary technology powered by Nexchange. It is how digital asset exchange should work. The platform gives you the power to quickly swap between assets – no account required.</p><br/>
          <Link to="/about-us" className="btn btn-themed">Read More</Link>
        </div>
      </div>
    </div>
  </div>
);

export default About;
