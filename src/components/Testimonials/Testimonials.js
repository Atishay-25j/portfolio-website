import React from 'react'
import './testimonials.css'
import { feedbacks } from '../../constants'

import { Swiper, SwiperSlide } from 'swiper/react';
import {motion} from 'framer-motion'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <motion.h5 initial={{ opacity: 0,y:-30 }} viewport={{ once: true }}  whileInView={{ opacity: 1, y: 0 }} transition={{  duration:0.5, delay:0.5}}>Review from clients</motion.h5>
      <motion.h2 initial={{ opacity: 0,y:30 }} viewport={{ once: true }}  whileInView={{ opacity: 1, y: 0 }} transition={{  duration:0.5, delay:0.6}}>Feedbacks</motion.h2>
      <Swiper className="container testimonials_container mySwiper"
        
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          >


          {feedbacks.map((feedback, index) => {
            return (
              <SwiperSlide key={index} className='testimonial' >

                <div className="client_avatar">
                  <p className='quotes'>"</p>
                  <img src={feedback.img} alt="Avatar One" className='client-img' />
                  <h5 className='client_name'>{feedback.name}</h5>
                  <small className='client_review'>
                    {feedback.review}
                  </small>
                </div>

              </SwiperSlide>


            )

          })}
        </Swiper>



    </section >
  )
}

export default Testimonials
