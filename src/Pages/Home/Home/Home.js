import React from 'react';
import BeingSophia from '../BeingSophia/BeingSophia';
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
               <BeingSophia/>
          </div>
     );
};

export default Home;