import React, { useState } from 'react'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {FiBook} from 'react-icons/fi';
import {RiMessage2Line, RiServiceLine} from 'react-icons/ri';
import './nav.css'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

 
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FiBook /></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiMessage2Line /></a>
    </nav>
  )
}

export default Nav