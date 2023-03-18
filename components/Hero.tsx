import React from 'react'
import Link from 'next/link'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import myImg from '../images/IMG_8684.jpg'

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
           "Hi, The Name's Jared Leibowich.", "Here's Some Questions I Forecasted.", 'By 2031, will the Global Partnership on AI remain active?', 'How many travelers will the US Transportation Security Administration (TSA) screen in October 2022?', 'How many job openings in the US will the Bureau of Labor Statistics (BLS) report for July 2022?'
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <Image className='relative rounded-full h-32 w-32 mx-auto object-cover' src={myImg} alt="Jared's Profile Pic" width={100} height={100}/>
        <div>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]'>Forecaster</h2>
        <h1 className="text-1xl lg:text-2xl font-semibold px-10">
            <span className="mr-3 text-gray-300">{text}</span>
           
            <Cursor cursorColor='#F7ABBA' />
        </h1>
       
        <div className='pt-5'>
           
           <Link passHref href='/about' >
         <button className="heroButton">ABOUT</button> 
            </Link>
            
            <Link href='#experience'>
          <button className="heroButton">Experience</button> 
            </Link>

            <Link href='#testimonials'>
           <button className="heroButton">Testimonials</button>
            </Link>
        
        
            
            <Link href='#plans'>
            <button className="heroButton">Plans</button>
            </Link>
           
       
        </div>
        </div>
    </div>
  )
}

export default Hero