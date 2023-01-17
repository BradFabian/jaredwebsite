import React from 'react'
import { motion } from 'framer-motion';
type Props = {}

function PlansCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10  cursor-pointer transition-opacity duration-200 overflow-hidden" >
       
        <div className="px-0 md:px-10">
          
            <p className="font-bold text-2xl mt-1">Nimble Plan</p>

            <ul className="list-disc space-y-4 ml-5 text-lg">
              <li>Quick forecast with key insight</li>
              <li>Turnaround in less than 72 hours</li>
            </ul>
        </div>

    </article>
  )
}

export default PlansCard