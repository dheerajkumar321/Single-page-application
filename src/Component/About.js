import React from 'react';
import { NavLink } from 'react-router-dom';
import Same from './Same';
import homeimg from '../Images/homeimg.png';
const About=()=>{
  return(
    
<Same 
   title='Know More About us'
   text='This is the About Page of the web Devlopment course and In this course are different catagory courses are available '
   imgsrc={homeimg }
   btn="Know More"
/>

  )

}

export default About;