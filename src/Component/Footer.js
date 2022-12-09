import React from 'react';
import { FaTwitter, FaFacebookSquare,FaInstagramSquare, FaLinkedin, } from "react-icons/fa";
import '../Css/FooterStyle.css';

const Footer =()=>{
  return(
 
    <footer>
     <div className='Container container-flex'>
        <div className='icons'>
        <FaTwitter className='icon'/>
           <FaFacebookSquare className='icon'/>
           <FaInstagramSquare className='icon'/>
           <FaLinkedin className='icon'/>
          
        </div>

        <div className='line'>
            <hr/>
            <hr/>
        </div>

        <div className='copyright'>
            <p>All Rights Reserved &Copy;</p>
            <p>Created By DHEERAJ KUMAR</p>
        </div>
        
     </div>




    </footer>

  )

}


export default Footer;