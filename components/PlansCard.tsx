import React from 'react'
import { motion } from 'framer-motion';
type Props = {}

function PlansCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden" >
        <motion.img 
        initial= {{
            y:-100,
            opacity: 0,
        }}
        transition={{duration: 1.2}}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{once: true}}
        
        className="max-w-sm xl:h-[50px] xl:w-[320px] object-cover object-center" src="https://www.swiftcentre.org/content/images/2022/06/Untitled-10-1.png" />
        <div className="px-0 md:px-10">
            <h4 text-4xl font-light>Nimble Plan</h4>
            <p className="font-bold text-2xl mt-1">Swift Centre for Applied Forecasting</p>

            <ul className="list-disc space-y-4 ml-5 text-lg">
              <li>Quick forecast with key insight</li>
              <li>Turnaround in less than 72 hours</li>
            </ul>
        </div>

    </article>
  )
}

export default PlansCard