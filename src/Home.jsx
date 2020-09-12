import React from 'react';
import { NavLink } from 'react-router-dom';
import hometheme from "../src/home.jpg";
import Common from './Common';

const Home = () => {
    return (
        <>
          <Common
         name="Grow Your Buisness with"
         imgsrc = {hometheme} 
         visit ="/service"
        btnname="Get Started"/>
      

        </>
    );
};

export default Home;