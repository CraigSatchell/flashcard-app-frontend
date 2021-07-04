import React from 'react';
import './banner.css';
import logo from './logo.png';
const Banner = () => {
   return (
      <div className='banner'>
         <div>
            <h1><img src={logo} alt='flashcard-logo' />&nbsp;FlashQwiz</h1>
         </div>
   
      </div>
   )
}

export default Banner;
