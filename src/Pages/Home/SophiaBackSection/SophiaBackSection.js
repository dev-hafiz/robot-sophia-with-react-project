import React from 'react';
import './SophiaBackSection.css';
import backSophia from '../../../images/other-images/sophiaback.png';
import { Link } from 'react-router-dom';

const SophiaBackSection = () => {
     return (
          <div className="backSophia-section">
               <div className="container">
               <div className="row">
               <div className="col-lg-7 left-sec">
                    <h2>Hanson AI</h2>
                    <h4>Developing Meaningful AI Interactions</h4>
                    <p>Hanson AI develops cognitive architecture and AI-based tools that enable our robots to simulate human personalities, have meaningful interactions with people and evolve from those interactions. Our team of renowned AI scientists conducts advanced research to build the most compelling robotics and AI platform for research, media, and service applications.</p>

                    <Link to="/hansonai">
                    <button className="btn-hanson">Hanson Ai</button>
                    </Link>
               </div>
               <div className="col-lg-5">
                    <img width="100%" src={backSophia} alt="" />
               </div>
               </div>
               </div>
              
          </div>
     );
};

export default SophiaBackSection;