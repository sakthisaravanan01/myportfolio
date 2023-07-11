import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import './Header.css';
function HearderSocial() {
  return (
    <div className='header_social'>
        <a href='https://www.linkedin.com/in/sakthi-saravanan01/' target="_blank" className='social'><BsLinkedin /></a>
        <a href=' https://github.com/sakthisaravanan01' target="_blank" className='social'><BsGithub /></a>


    </div>
  )
}

export default HearderSocial