import React from 'react';
import { NavLink } from 'react-router-dom';
import Webimg from '../Images/Webimg.jpg';


const Card=(props)=>{

    return(
        <>
        <div className='card'>
        <h2>{props.title1}</h2>
        <img src={Webimg} alt='service1' className='serviceImg' /> 
        
        <p>{props.desc1}</p>
        <div className='btnBox'>
          <div className='btn'>
            <NavLink to='/' className='readMore'>{props.btnService}</NavLink>
          </div>
        </div>
        </div>
       
        </>

    )
}
export default Card;