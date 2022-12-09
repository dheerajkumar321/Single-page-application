import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Css/ContactStyle.css';
const Contact = () => {

    return (
        <>
            <h1>Contact us</h1>
            <form className='conatct'>
                <div> 
                    <lable htmlFor='name'>Name</lable>
                    <input type='text' placeholder='Enter your name' />
                </div>
                <div> 
                    <lable htmlFor='name'>Email</lable>
                    <input type='email' placeholder='Enter your email' />
                </div>
                <div> 
                    <lable htmlFor='password'>Password</lable>
                    <input type='password' placeholder='Enter your password' />
                </div>
                <div> 
                    <lable htmlFor='mobile'>Mobile</lable>
                    <input type='mobile' placeholder='Enter your mobile' />
                </div>
                <div className='btnBox'>
                <div className='btn'>
                <NavLink to='/' className='readMore'>Submit Now</NavLink>
                </div>
            </div>
            </form>


        </>
    )
}
export default Contact;