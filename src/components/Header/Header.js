import React from 'react'
import './header.css'
import CTA from './CTA'
import { motion } from 'framer-motion'
import { ComputersCanvas } from '../canvas'
const Header = () => {
  return (
    <header>
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


      <ComputersCanvas/>
      </div>

    </header>
  )
}

export default Header
