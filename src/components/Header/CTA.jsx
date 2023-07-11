import React from 'react'
import './Header.css';
import CV from "../../assets/CV.pdf";
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} target="_blank" className='btn'>Download</a>
        <a href=" " className='btn-primary'>Let's Talk</a>
      
    </div>
  )
}

export default CTA
