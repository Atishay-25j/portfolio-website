import React from 'react'
import './header.css'
import CTA from './CTA'
import HeadSocials from './HeadSocials'
// import { motion } from 'framer-motion'
import { ComputersCanvas } from '../canvas'
const Header = () => {
  return (
    <header id='home'>
      <div className="container header_container">
        <div className='d-flex design '>
          <div className='d-flex flex-column design1 '>
            <div className='dot' />
            <div className='line' />
          </div>
          <div>
            <h1>Hi I'm <span style={{ color: '#915eff' }}>Atishay</span></h1>
            <h5 className='text-light'>Fullstack Developer</h5>
            <CTA />
          </div>
        </div>

        <ComputersCanvas className='canvas' />

        <a href="#contact" className='scroll_down'>Scroll Down</a>
        <HeadSocials />

      </div>

    </header>
  )
}

export default Header
