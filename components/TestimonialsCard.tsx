import React from 'react'
import { motion } from 'framer-motion';
type Props = {}

function TestimonialsCard({}: Props) {
  return (
   

<div className="flex flex-col items-center w-full  gap-4 p-8 mb-8 md:flex-row md:mb-0 flex-between">
    <div className="bg-white dark:bg-gray-800 w-64 min-w-[14rem]  shadow-lg mx-auto rounded-xl p-4">
        <p className="text-gray-600 dark:text-white">
            <span className="text-lg font-bold text-[#0a65f7]">
                “
            </span>
            I am pleased to endorse Jared as an exceptionally talented forecaster. His first-place finishes in the 2021 and 2022 editions of the In the News forecasting challenge—both by wide margins—speak for themselves...
            <span className="text-lg font-bold text-[#0a65f7]">
                ”
            </span>
        </p>
        <div className="flex items-center mt-4">
           
            <div className="flex flex-col justify-between ml-2">
                <span className="text-sm font-semibold text-[#0a65f7]">
                Misha Yagudin - Co-Founder of Arb Research & Samotsvety Forecasting
                </span>
                <span className="flex items-center text-xs dark:text-gray-400">
                
                   
                </span>
            </div>
        </div>
    </div>
   </div>


  )
}

export default TestimonialsCard