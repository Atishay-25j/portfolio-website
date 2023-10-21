import React from 'react'
import BallCanvas from '../canvas/Ball'
import { technologies } from '../../constants'
import './Tech.css'
const Tech = () => {
  return (
    <div className='tech_container' id='tech'>
      {
        technologies.map((technology)=>{
            return(
                <div className="tech_icon" key={technology.name}>
                    <BallCanvas icon={technology.icon}/>
                </div>
            )
        })
      }
    </div>
  )
}

export default Tech
