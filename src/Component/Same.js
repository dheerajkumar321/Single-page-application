import React from 'react';
import { NavLink } from 'react-router-dom';
import homeimgpng from '../Images/homeimgpng.jpg';

const Same=(props)=>{
  return(

<div className='mainSection'>
        <div className='ContentBox'>
            <h1>{props.title}</h1>
            <p>{props.text} </p>
            <div className='btnBox'>
                <div className='btn'>
                <NavLink to='/About' className='readMore'>{props.btn}</NavLink>
                </div>
            </div>
        </div>

        <div className='imgcontainer'>
            <img src={props.imgsrc} alt='home' />
        </div>
    </div>


  )

}

export default Same;