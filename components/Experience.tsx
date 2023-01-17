import React from 'react'
import ExperienceCard from './ExperienceCard';
import { motion } from "framer-motion";

type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div
    initial={{
        x:-100,
        opacity: 0,
    }}
    transition={{
        duration: 1.2,
    }}
    whileInView={{
        x: 0,
        opacity: 1,
    }}
    viewport={{once: true}} className="flex flex-col relative h-screen text-lft overflow-hidden md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>
       
        
        <div className="flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#0a65f7]/80 mx-auto">
            < ExperienceCard />
            < ExperienceCard />
            < ExperienceCard />
            
            {/* Experience Card */}
             {/* Experience Card */}
              {/* Experience Card */}
        </div>
        </motion.div>
  )
}