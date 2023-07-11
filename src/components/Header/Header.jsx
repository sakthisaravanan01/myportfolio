import React from 'react';
import './Header.css';
import Cta from './CTA';
import Me from '../../assets/My project (1) (1).png';
import HearderSocial from './HearderSocial';
import Cv from './CV';
const Header = () => {
  return (

    <header className='header'>
      
      <div className="container_header_container" >
        <h5>Hello I'm</h5>
        <h1>Sakthi Saravanan</h1>
         < Cta />
         <HearderSocial />
         <div className='sakthi-photo'>
          <div className='photo-sakthi'>
          <img src={Me} />
          </div>
          <div className='paragraph-about-me'>
            <p className='paragrah-tag-profile'>I am full stack web development with the prior 
            experience in reactjs ,nodejs and postgres, 
               .I am also good at 
              dataanalaysis using python additionally i have completed my BE at ECE 
              (Batch:2019-2023).  </p>
              <Cv />
              </div>
              
         
           
            </div>
         <a href='#contact' className='scroll_down'>Scroll Down</a>
         
         

      </div>
    </header>
  )
}

export default Header
