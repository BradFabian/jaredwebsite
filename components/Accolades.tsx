import React from 'react'
import { motion } from "framer-motion";
import Accolade from "./Accolade";
type Props = {}

export default function Accolades({}: Props) {
  return (
    <motion.div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-4xl px-10 justify-center mx-auto items-center">
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Accolades</h3>
        <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">Hover over accolades to see more</h3>
       
            
    
        <div className="">
       <Accolade />

        </div>
    </motion.div>
  )
}