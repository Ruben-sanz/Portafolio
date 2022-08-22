import React from 'react'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {FiBook} from 'react-icons/fi';
import {RiMessage2Line, RiServiceLine} from 'react-icons/ri';
import './nav.css'

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><FiBook /></a>
      <a href="#services"><RiServiceLine /></a>
      <a href="#contact"><RiMessage2Line /></a>
    </nav>
  )
}

export default Nav