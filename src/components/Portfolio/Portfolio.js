import React, { useState, useEffect } from 'react'
import './portfolio.css'
// import { Carousel } from 'react-carousel3';
import { projects } from '../../constants/index'
// import Swiper core and required modules
import { EffectCoverflow, Navigation, Pagination, EffectCards, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/scrollbar';
import { motion } from 'framer-motion'
import 'swiper/css';
import 'swiper/css/effect-cards';
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
  return (

    <section id='portfolio' className='INNER'>
      <motion.h5 initial={{ opacity: 0, x: -30 }} viewport={{ once: true }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>My Recent Work</motion.h5>
      <motion.h2 initial={{ opacity: 0, x: 30 }} viewport={{ once: true }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>Projects</motion.h2>
      <div className="container portfolio-container" style={{
        display: 'flex',
        justifyContent: 'center',
        // background: 'linear-gradient(to bottom, #16235e 0%, #020223 100%)',
      }}>
        {
          isMobile ?

            <Swiper
              className=' swiper mySwiper'
              // effect={'cards'}
              grabCursor={true}
              modules={[EffectCards, Navigation, Pagination, A11y]}
              spaceBetween={50}
              slidesPerView={1}

              // navigation
              pagination={{ clickable: true }}

            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide>
                    <article className="portfolio-item" style={{
                      width: 230,
                      height: 210,
                    }} key={index} >
                      <div className='bg'>
                        <div className="portfolio-item-img">
                          <img src={project.image} alt="" />
                        </div>
                        <h4 style={{ fontSize: '90%' }}>{project.title}</h4>

                      </div>


                      <div className="portfolio-item-cta" style={{ paddingTop: '5px' }}>
                        <a href={project.git} className='btn'>Github</a>
                        <a href={project.demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                      </div>

                    </article>
                  </SwiperSlide>

                )
              })}



            </Swiper>

            :

            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'3'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={{clickable:true}}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >{
                projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <article className="portfolio-item" style={style} key={index} >

                        <div className="portfolio-item-img">
                          <img src={project.image} alt="" />
                        </div>
                        <h4 >{project.title}</h4>


                        <div className="portfolio-item-cta" style={{ paddingTop: '10px' }}>
                          <a href={project.git} className='btn'>Github</a>
                          <a href={project.demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                        </div>

                      </article>
                    </SwiperSlide>
                  )
                })
              }

            </Swiper>
        }
      </div>

    </section >
  )

}

export default Portfolio
