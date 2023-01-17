import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
type Props = {
    
}

function Accolade({}: Props) {
  return (
    <div className="group relative flex cursor-pointer flex-col max-w-[80%]">
        <div className="stripe">
    <p className="stripe__content tracking-[2px]">Good Judgement 2021: 1st Place</p>
</div>
        
         <img className="rounded-full border-double border-8 border-[#FFD700] object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 m-5 drop-shadow-[0_5px_5px_#FFD700]" src="https://forecast-production-gj.s3.amazonaws.com/h80rb3znno7q7quck3q5469sizz6?response-content-disposition=inline%3B%20filename%3D%22fox72.png%22%3B%20filename%2A%3DUTF-8%27%27fox72.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAI5LLM7GNNKEDY5ZA%2F20230116%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230116T172232Z&X-Amz-Expires=604790&X-Amz-SignedHeaders=host&X-Amz-Signature=2060918c25b852542855665f922ec1af4555bff2b8cc8866cc2d91c428435955" />
      
    </div>
   
  )
}

export default Accolade