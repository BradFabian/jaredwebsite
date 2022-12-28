import React from 'react'
import { motion } from "framer-motion";

type Props = {}

export default function CaseStudies({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-4xl px-10 justify-evenly mx-auto items-center">
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Case Studies</h3>
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
        viewport={{once: true}}
        >
            
        </motion.div>
        <div className="space-y-5 px-0 md:px-10">
       

        </div>
    </div>
  )
}