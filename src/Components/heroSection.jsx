import React from 'react'
import { Link } from 'react-router-dom'
import bgsvg from "../assets/bgsvg.svg"
import picone from "../assets/picone.png"
import left from "../assets/left.png"
import right from "../assets/right.png"

const HeroSection = () => {
  return (
    <section  style={{ backgroundImage: `url(${bgsvg})` }} className={` bg-[url("${bgsvg}")]    h-full   overflow-hidden relative   flex items-center flex-col  pt-[calc(52.73px+34.77px)]`}>
      <h1 className='lg:text-6xl md:text-5xl sm:text-4xl text-3xl lg:w-[75%] md:w-[70%] sm:w-[80%] w-[90%]   text-center mt-10 text-[#250A63]  '>Automate Your Professional Presence Effortlessly Stay Ahead on<Link><span className='text-[#0B66C2]'>LinkedIn</span></Link> </h1>
   <h4 className=" lg:text-2xl md:text-xl sm:text-lg text-sm lg:w-[65%] md:w-[70%] sm:w-[80%] w-[80%] text-center mt-5 ">Leverage AI to craft optimized posts, brainstorm ideas, and generate stunning branded visuals—all in seconds.</h4>
   <div className='mt-5'><button className='py-3 px-4 text-white cursor-pointer bg-[#6817FF] rounded-full'>Get Started</button> <button className='py-3 px-4 text-[#6817FF] bg-white cursor-pointer rounded-full'>Contact Sales</button></div>
   <div className='relative flex justify-center w-full'>
    <img className='relative w-full h-full' src={picone}/>
    <img className='-left-6 absolute top-1/2 w-[35%] transform -translate-y-1/3' src={left} />
    <img className='-right-6 absolute top-1/2 w-[35%] transform -translate-y-1/3' src={right}/>
    </div> 

    </section>
  )
}

export default HeroSection
