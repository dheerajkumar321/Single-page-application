import React from 'react';
import { NavLink } from 'react-router-dom';
import homeimgpng from '../Images/homeimgpng.jpg';


import '../Css/HomeAbout.css';
import Same from './Same';
const Home=()=>{
    return(
   <Same
      title='Learning Made Easy'
      text='This is the Home Page of the web Devlopment course and In this course are different catagory courses are available which about tell in this website '
      imgsrc={homeimgpng}
      btn="Read More"
   />

    )
    
}

export default Home;