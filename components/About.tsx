import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";

type Props = {}

export default function About({}: Props) {
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
    viewport={{once: true}} className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-4xl px-10 justify-evenly mx-auto items-center">
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
       
            
       
        <div className="space-y-5 px-0 md:px-10">
            <h4 className="text-4xl font-semibold"> I   <span className="underline decoration-[#0a65f7]/50">forecast</span> both short-term and long-term topics.</h4>
            <p className="text-sm ">Providing my clients with valuable, timely forecasts, from individuals to nonprofits and businesses. Always striving for nuance in my analysis. It is important to me that my clients understand how I arrived at my forecast. </p>

<h3> Some of the most frequent topics I forecast include: </h3>
<div className="stripe">
    <p className="stripe__content tracking-[2px]">Geopolitical events</p>
</div>
    <div className="stripe" >
        <p  className="tracking-[2px] ">Economic trends</p>
    </div>
    
    <div className="stripe">
    <p className="tracking-[2px]">Epidemics</p>
    </div>
    <div className="stripe">
    <p className="tracking-[2px]">Election results</p>
    </div>

        </div>
        </motion.div>
  )
}