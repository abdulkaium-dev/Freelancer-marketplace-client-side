import React from 'react';
import Slider from '../component/Slider';
import Features from '../component/Feature';
import FreelancePlatforms from '../component/Freelancer';
import Platforms from '../component/Platforms';
import { useLoaderData } from 'react-router';

const Home = () => {
   
    return (
        <div>
          <Slider></Slider> 
          <Features></Features>
          <Platforms></Platforms>
          <FreelancePlatforms></FreelancePlatforms>
        

     </div>
    );
};

export default Home;