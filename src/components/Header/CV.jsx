import React from 'react'
import MYCV from "../../assets/CV.pdf";
import './CV.css';
const CV = () => {
  return (
    <div>
        <a href={MYCV} target="_blank" className='shining-button'>Download My Resume</a>
      
    </div>
  )
}

export default CV;
