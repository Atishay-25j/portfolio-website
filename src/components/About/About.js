import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { Tilt } from 'react-tilt'
import AnimatedTextWord from './AnimatedTextWord'
import { motion } from 'framer-motion';
const About = () => {
  
  const text = "Hello! I'm Atishay, a passionate Full Stack Developer with a love for crafting digital experiences that marry form and function. With a background in Computer Science Engineering, I've honed my skills in both front-end and back-end development, allowing me to create seamless and robust web applications.  I find immense joy in tackling complex problems and turning them into elegant, user-friendly solutions. Whether it's building a responsive website from scratch, optimizing server performance, or creating intuitive user interfaces.";
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
                <small>0+ Yrs Working</small>
              </motion.article>
            </Tilt>
            <Tilt scale={2}>
              <motion.article className="about_card" initial={{ opacity: 0,y:-10 }} viewport={{ once: true }}  whileInView={{ opacity: 1, y: 0 }} transition={{  duration:0.5, delay:1.2}}>
                <FiUsers className='about_icon' />
                <h5>500+ Con.. </h5>
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
