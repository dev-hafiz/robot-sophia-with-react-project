import React from 'react';
import './HerroSection.css';

import heroBanner from '../../../images/banner/banner1.png';

const HerroSection = () => {
     
    
     return (
          <div className="hero-text" style={{ backgroundImage: 'url(' + heroBanner + ')', backgroundSize: 'auto' , height: "100vh"}}>
              <div className="sub-hero">
                   <h1>We bring robots to life</h1>
                   <span>Hanson Robotics is an AI and robotics company dedicated to creating socially intelligent machines that enrich the quality of our lives.
                   </span>
              </div>
          </div>
     );
};

export default HerroSection;