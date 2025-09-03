import React, { useState, useEffect } from 'react'
import './portfolio.css'
import { projects } from '../../constants/index'
// Import Swiper core and required modules
import { EffectCoverflow, Navigation, Pagination, EffectCards, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';
import 'swiper/css/scrollbar';
import { motion } from 'framer-motion'

const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])
  
  const style = {
    width: 297,
    height: 270,
  };
  
  // Debug: Log projects data
  // console.log('Projects data:', projects);
  
  return (
    <section id='portfolio' className='INNER'>
      <motion.h5 
        initial={{ opacity: 0, x: -30 }} 
        viewport={{ once: true }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        My Recent Work
      </motion.h5>
      <motion.h2 
        initial={{ opacity: 0, x: 30 }} 
        viewport={{ once: true }} 
        whileInView={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Projects
      </motion.h2>
      
      <div className="container portfolio-container">
        
        
        {isMobile ? (
          <Swiper
            className='swiper mySwiper'
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Navigation, Pagination, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            style={{ height: '400px' }}
            onSwiper={(swiper) => console.log('Mobile Swiper initialized:', swiper)}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <article className="portfolio-item" style={{
                  width: 230,
                  height: 210,
                }}>
                  <div className='bg'>
                    <div className="portfolio-item-img">
                      <img src={project.image} alt={project.title} />
                    </div>
                    <h4 style={{ fontSize: '90%' }}>{project.title}</h4>
                  </div>
                  <div className="portfolio-item-cta" style={{ paddingTop: '5px' }}>
                    <a href={project.git} className='btn' target='_blank' rel="noreferrer">Github</a>
                    <a href={project.demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
            style={{ height: '400px' }}
            onSwiper={(swiper) => console.log('Desktop Swiper initialized:', swiper)}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <article className="portfolio-item" style={style}>
                  <div className="portfolio-item-img">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <h4>{project.title}</h4>
                  <div className="portfolio-item-cta" style={{ paddingTop: '10px' }}>
                    <a href={project.git} className='btn' target='_blank' rel="noreferrer">Github</a>
                    <a href={project.demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  )
}

export default Portfolio
