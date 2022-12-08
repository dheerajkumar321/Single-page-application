import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch, FaUser, FaPhoneAlt } from "react-icons/fa";
import '../Css/ListStyle.css';



const List =()=>{
 return(
 <header>
  <div className='Container container-flex'>
    <div className='logo'>
      <h1>TECHNOFARM</h1>
    </div>
   <nav className='List'>
    <NavLink to='/' className='listItem' activeclassName='activeItem'>Home</NavLink>
    <NavLink to='/About' className='listItem' activeclassName='activeItem'>About</NavLink>
    <NavLink to='/Services'  className='listItem' activeclassName='activeItem'>Services</NavLink>
    <NavLink to='/Contact' className='listItem' activeclassName='activeItem'>Contact</NavLink>
    <NavLink to='/Policy'  className='listItem' activeclassName='activeItem'>Policy</NavLink>
     </nav>

   <div className='icons'>
    <FaSearch className='icon' />
    <FaUser className='icon' />
   <FaPhoneAlt  className='icon'/>
   </div>


  </div>



 </header>




 )

}

export default List;