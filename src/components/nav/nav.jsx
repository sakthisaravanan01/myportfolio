import React from 'react'
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {MdOutlineWork} from 'react-icons/md';
import {RiServiceFill} from 'react-icons/ri';
import {MdContactPhone} from 'react-icons/md';
import { useState } from 'react';

const Nav = () => {
  const [activeNav,isactive]=useState('#')

  return (
    <nav>
      <a href="#" onClick={()=>isactive('#')} className={activeNav==='#'?'active':''}><AiOutlineHome /></a>
      <a href="#about" onClick={()=>isactive('#about')} className={activeNav==='#about'?'active':''}><AiOutlineUser /></a>
      <a href="#experience" onClick={()=>isactive('#experience')} className={activeNav==='#experience'?'active':''}><MdOutlineWork /></a>
      <a href="#service" onClick={()=>isactive('#service')} className={activeNav==='#service'?'active':''}><RiServiceFill /></a>
      <a href="#contact" onClick={()=>isactive('#contact')} className={activeNav==='#contact'?'active':''} ><MdContactPhone /></a>
      
    </nav>
  )
}

export default Nav
