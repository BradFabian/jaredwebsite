import React from 'react'
import { motion } from 'framer-motion';
type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 max-w-[500px] md:w-[500px] xl:w-[500px] snap-center p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden" >
        <img className="max-w-sm xl:h-[50px] xl:w-[320px] object-cover object-center" src="https://www.swiftcentre.org/content/images/2022/06/Untitled-10-1.png" />
       
        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Forecaster</h4>
            <p className="font-bold text-2xl mt-1">Swift Centre for Applied Forecasting</p>

            <ul className="list-disc space-y-4 ml-5 text-lg">
              <li>Deliver forecasting services for publication in various media outlets</li>
              <li>Details available here: <a href="https://www.swiftcentre.org" rel="noreferrer" target="_blank">https://www.swiftcentre.org/</a></li>
            </ul>
        </div>

    </article>
  )
}

export default ExperienceCard