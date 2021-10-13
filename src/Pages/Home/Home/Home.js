import React from 'react';
import HerroSection from '../HerroSection/HerroSection';
import HumanLikeEobots from '../HumanLikeRobots/HumanLikeEobots';
import SophiaBackSection from '../SophiaBackSection/SophiaBackSection';
import './Home.css';

const Home = () => {
     return (
          <div>
               <HerroSection/>
               <HumanLikeEobots/>
               <SophiaBackSection/>
          </div>
     );
};

export default Home;