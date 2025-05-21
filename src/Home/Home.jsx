import React from 'react';
import Slider from '../component/Slider';
import Features from '../component/Feature';
import FreelancePlatforms from '../component/Freelancer';
import Platforms from '../component/Platforms';

const Home = () => {
    return (
        <div>
          <Slider></Slider> 
          <Features></Features>
          <FreelancePlatforms></FreelancePlatforms>
          <Platforms></Platforms>

     </div>
    );
};

export default Home;