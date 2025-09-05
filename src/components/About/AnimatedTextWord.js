import React from 'react'
import { motion } from 'framer-motion'
const AnimatedTextWord = ({ text }) => {
    const words = text.split(" ");
    // console.log(words);
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
        })
    };

    
    return (
        <motion.div variants={container} initial='hidden' animate='visible' style={{ textAlign: 'justify', textJustify: 'inter-word' }}>

            {words.map((word, index) => {

                return (
                    <motion.span key={index} style={{ display: 'inline' }} initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileInView={{
                        opacity: 1, y: 0, transition: {
                            type: "spring",
                            damping: 15,
                            stiffness: 100,
                            duration : 2,
                            delay : 1.5

                        }
                    }}>{word} </motion.span>
                )


            })}


        </motion.div>
    )
}

export default AnimatedTextWord
