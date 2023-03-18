import React from 'react'
import { motion } from 'framer-motion';
type Props = {}

function TestimonialsCard({}: Props) {
  return (
   

<div className="flex flex-col items-center w-full gap-4 p-8 mb-8 md:flex-row md:mb-0 flex-between">
    <div className="bg-white dark:bg-gray-800 w-72 shadow-lg mx-auto rounded-xl p-4">
        <p className="text-gray-600 dark:text-white">
            <span className="text-lg font-bold text-[#0a65f7]">
                “
            </span>
            To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
            <span className="text-lg font-bold text-[#0a65f7]">
                ”
            </span>
        </p>
        <div className="flex items-center mt-4">
           
            <div className="flex flex-col justify-between ml-2">
                <span className="text-sm font-semibold text-[#0a65f7]">
                    Jean Miguel
                </span>
                <span className="flex items-center text-xs dark:text-gray-400">
                    User of Tail-Kit
                   
                </span>
            </div>
        </div>
    </div>
   </div>


  )
}

export default TestimonialsCard