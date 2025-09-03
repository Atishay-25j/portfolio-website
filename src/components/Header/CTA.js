import React from 'react'
import CV from '../../assets/atishay.pdf'
import {FaDownload} from 'react-icons/fa'
const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'><FaDownload/> Resume</a>
      <a href="#contact" className='btn btn-primary'>Lets's Talk</a>
    </div>
  )
}

export default CTA
