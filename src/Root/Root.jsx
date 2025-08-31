
import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/Footer';

const Root = () => {
    return (
       <div>
            <Navbar></Navbar>
          <div className='max-w-7xl px-4 md:px-8 lg:px-14'>
              <Outlet></Outlet>
          </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;