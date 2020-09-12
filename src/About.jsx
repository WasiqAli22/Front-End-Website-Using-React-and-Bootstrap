import React from 'react';
import { NavLink } from 'react-router-dom';
import Common from './Common';
import hometheme from "../src/ab.jpg";


const About = () => {
    return (
        <>
        <Common
         name='Welcome To About Page'
         imgsrc = {hometheme} 
         visit ="/contact"
        btnname="Contact Now "/>
         
        </>
    );
};

export default About;