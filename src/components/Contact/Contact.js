import React,{useRef} from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {ImWhatsapp} from 'react-icons/im'
import {motion} from 'framer-motion';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_albvz19', 'template_wez9quh', form.current, 'L3CkzzNIPoxnGxvmo');
    e.target.reset();
  };
  return (
    <section id='contact'>
      <motion.h5 initial={{ opacity: 0,x:-30 }} viewport={{ once: true }}  whileInView={{ opacity: 1, x: 0 }} transition={{  duration:0.5, delay:0.5}}>Get In Touch</motion.h5>
      <motion.h2 initial={{ opacity: 0,x:30 }} viewport={{ once: true }}  whileInView={{ opacity: 1, x: 0 }} transition={{  duration:0.5, delay:0.6}}>Contact Me</motion.h2>

      <div className="container contact_container">
        <div className="contact_options">
          <motion.article className="contact_option" initial={{ opacity: 0,x:-30 }} viewport={{ once: true }}  whileInView={{ opacity: 1, x: 0 }} transition={{  duration:0.3, delay:0.7}}>
            <MdOutlineEmail className='contact_option_icon'/>
            <h4>Email</h4>
            <h6>atishayjainparas7@gmail.com</h6>
            <a href="mailto:atishayjainparas7@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
          </motion.article>
          <motion.article className="contact_option" initial={{ opacity: 0,x:30 }} viewport={{ once: true }}  whileInView={{ opacity: 1, x: 0 }} transition={{  duration:0.3, delay:0.9}}>
            <RiMessengerLine className='contact_option_icon'/>
            <h4>Messenger</h4>
            <h6>Atishay Jain</h6>
            <a href="https://m.me/profile.php?id=100014544226009" target='_blank' rel="noreferrer">Send a message</a>
          </motion.article>
          <motion.article className="contact_option" initial={{ opacity: 0,x:-30 }} viewport={{ once: true }}  whileInView={{ opacity: 1, x: 0 }} transition={{  duration:0.3, delay:1.1}}>
            <ImWhatsapp className='contact_option_icon'/>
            <h4>Whatsapp</h4>
            <h6>+91 9012495495</h6>
            <a href="https://wa.me/+919012495495" target='_blank' rel="noreferrer">Send a message</a>
          </motion.article>
        </div>
        {/* {End of contact option} */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name'  required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" cols="30" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
