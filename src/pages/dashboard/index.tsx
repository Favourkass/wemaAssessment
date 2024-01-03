import React from 'react';

import {Outlet } from 'react-router-dom';

import SideNav from '../../components/sideNav';


const DashBoard = () => {
  


  return (
    <div >
      <div className="headerWrapper">
        

        
      </div>
      <div style={{display:'flex', flexDirection:'row'}}>
        <SideNav />
        <div
          style={{
            width: '83%',
          }}>
          <Outlet />
        </div>
      </div>
     
    </div>
  );
};

export default DashBoard;