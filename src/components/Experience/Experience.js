import React from 'react'
import './experience.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {motion} from 'framer-motion'

// import { motion } from 'framer-motion';
import { experiences } from '../../constants';
const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='icon'>
        <img src={experience.icon} alt={experience.company_name} className='iconImg' />

      </div>
    }
  >
    <div>
      <h3 className='experienceh3' style={{marginBottom:'0px'}}>{experience.title}</h3>
      <p className='experienceCN' style={{marginTop:'0px' ,marginBottom : '1rem'}}>{experience.company_name}</p>
    </div>
    <ul className='ulexp'>
      {experience.points.map((point, index) => {
        return (<li className='liexp' key={`experience-point-${index}`}>
          {point}
        </li>)

      })}
    </ul>
  </VerticalTimelineElement>)

const Experience = () => {
  return (
    <section id='experience'>
      <motion.h5 initial={{ opacity: 0,y:-30 }} viewport={{ once: true }}  whileInView={{ opacity: 1, y: 0 }} transition={{  duration:0.5, delay:0.5}}>What Skills I Have</motion.h5>
      <motion.h2 initial={{ opacity: 0,y:30 }} viewport={{ once: true }}  whileInView={{ opacity: 1, y: 0 }} transition={{  duration:0.5, delay:0.6}}>My experience</motion.h2>

      <div className="experience_container">
        <VerticalTimeline>
          {experiences.map((experience, index) => {
            return (
              <ExperienceCard key={index} experience={experience} />

            )
          })}
        </VerticalTimeline>
      </div>



    </section>
  )
}

export default Experience
