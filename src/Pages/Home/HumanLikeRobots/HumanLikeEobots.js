import React from 'react';
import { Link } from 'react-router-dom';
import './HumanLikeRobots.css';


const HumanLikeEobots = () => {
     return (
          <div className="container d-flex justify-content-center">
              <div className="intro-robots">
                    <h1 className="mb-4">Why human-like robots?</h1>
                    <p  className="mb-5"> Robots will soon be everywhere. How can we nurture them to be our friends and useful collaborators? Robots with good aesthetic design, rich personalities, and social cognitive intelligence can potentially connect deeply and meaningfully with humans.</p>

                    <Link to="/robots">
                    <button className="btn-robots">our robots</button>
                    </Link>
              </div>
          </div>
     );
};

export default HumanLikeEobots;