import React from 'react'
import { motion } from 'framer-motion';
type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article>
        <motion.img 
        initial= {{
            y:-100,
            opacity: 0,
        }}
        transition={{duration: 1.2}}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{once: true}}
        
        className="max-w-sm xl:h-[200px] xl:w-[200px] object-cover object-center" src="https://www.swiftcentre.org/content/images/2022/06/Untitled-10-1.png" />
        <div>
            <h4>Forecaster</h4>
            <p>Swift Centre for Applied Forecasting</p>
        </div>

    </article>
  )
}

export default ExperienceCard