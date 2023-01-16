import React from 'react'
import { motion } from 'framer-motion';
type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]" >
        <motion.img 
        initial= {{
            y:-100,
            opacity: 0,
        }}
        transition={{duration: 1.2}}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{once: true}}
        
        className="max-w-sm xl:h-[50px] xl:w-[320px] object-cover object-center" src="https://www.swiftcentre.org/content/images/2022/06/Untitled-10-1.png" />
        <div>
            <h4>Forecaster</h4>
            <p>Swift Centre for Applied Forecasting</p>

            <ul clasName="list-disc space-y-4 ml-5 text-lg">
              <li>Deliver forecasting services for publication in various media outlets</li>
              <li>Details available here: <a href="https://www.swiftcentre.org" rel="noreferrer" target="_blank">https://www.swiftcentre.org/</a></li>
            </ul>
        </div>

    </article>
  )
}

export default ExperienceCard