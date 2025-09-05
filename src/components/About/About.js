import React from 'react'
import './about.css'
import ME from '../../assets/me.jpeg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { Tilt } from 'react-tilt'
import AnimatedTextWord from './AnimatedTextWord'
import { motion } from 'framer-motion';
const About = () => {
  
  const text = "Hello! I'm Atishay, a Software Engineer in Test 1 with a background in Computer Science Engineering. I enjoy crafting digital experiences that combine form, function, and quality while contributing across both development and testing. In my current role, I’ve worked on feature development projects and built scalable, user-friendly solutions. Alongside this, I’ve enhanced automation frameworks to ensure smooth and reliable releases. I thrive on solving complex problems, optimizing workflows, and creating robust systems. My work spans front-end, back-end, and automation pipelines, giving me end-to-end impact. For me, technology is about building solutions that truly make a difference.";
  return (
    <section id='about'>
      <motion.h5 initial={{ opacity: 0,x:-30 }} viewport={{ once: true }}  whileInView={{ opacity: 1, x: 0 }} transition={{  duration:0.5, delay:0.1}}>Get To Know</motion.h5>
      <motion.h2 initial={{ opacity: 0,x: 30 }} viewport={{ once: true }}  whileInView={{ opacity: 1, x: 0 }} transition={{  duration:0.5, delay:0.1}}>About Me</motion.h2>

      <motion.div className="container about_container" >
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="AboutImage" />
          </div>
        </div>
        <div className="about_content">
          <motion.div className="about_cards" >
            <Tilt scale={2}>
              <motion.article className="about_card" initial={{ opacity: 0,y:-10 }} viewport={{ once: true }}  whileInView={{ opacity: 1, y: 0 }} transition={{  duration:0.5, delay:1}}>
                <FaAward className='about_icon' />
                <h5>Experience</h5>
                <small>1+ Yrs Working</small>
              </motion.article>
            </Tilt>
            <Tilt scale={2}>
              <motion.article className="about_card" initial={{ opacity: 0,y:-10 }} viewport={{ once: true }}  whileInView={{ opacity: 1, y: 0 }} transition={{  duration:0.5, delay:1.2}}>
                <FiUsers className='about_icon' />
                <h5>1400+ Con.. </h5>
                <small>Linked In</small>
              </motion.article>
            </Tilt>
            <Tilt scale={2} >
              <motion.article className="about_card" initial={{ opacity: 0,y:-10 }} viewport={{ once: true }}  whileInView={{ opacity: 1, y: 0 }} transition={{  duration:0.5, delay:1.4}}>
                <VscFolderLibrary className='about_icon' />
                <h5>Projects</h5>
                <small>10+ Projects</small>
              </motion.article>
            </Tilt>
          </motion.div>
          <p><AnimatedTextWord  text={text} className='aboutText'/></p>
          
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </motion.div>

    </section>
  )
}

export default About
