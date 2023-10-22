import React,{useState} from 'react'
import './Navbar.css'
import {AiOutlineHome ,AiOutlineUser} from 'react-icons/ai'
import {BiBook,BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
const Navbar = () => {
  const [navActive , setNavActive] = useState('#home');
  return (
    <navbar>
      <a href="#home" onClick={()=>{setNavActive('#home')}} className={navActive==='#home'?'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>{setNavActive('#about')}} className={navActive==='#about'?'active':''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>{setNavActive('#experience')}} className={navActive==='#experience'?'active':''}><BiBook/></a>
      <a href="#portfolio" onClick={()=>{setNavActive('#services')}} className={navActive==='#services'?'active':''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>{setNavActive('#contact')}} className={navActive==='#contact'?'active':''}><BiMessageSquareDetail/></a>
    </navbar>
  )
}

export default Navbar
