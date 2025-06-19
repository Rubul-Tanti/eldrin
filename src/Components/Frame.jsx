import React from 'react'
import framerimg from "../assets/framerimg.png"
import framerpresentation from "../assets/framerpresentation.png"
const Frame = () => {
  return (
    <section className='lg:mt-14 md:mt-10 sm:mt-5 mt-5 w-full bg-slate-100'>
  <h6 className='lg:text-sm sm:text-xs text-[10px]  w-full text-center text-[#535862] font-semibold '>Used by top cotent creators and businesses worldwide</h6>
    <div className='flex items-center w-full flex-col lg:mt-10 md:mt-8 sm:mt-4 mt-4'>
      <img src={framerimg} className='w-[80%]'/>
      <div className='flex md:flex-row max-md:flex-col  lg:flex-row w-[90%] rounded-lg lg:mt-14 md:mt-10 sm:mt-5 mt-5 bg-white p-5 '>
        <div className='flex-1/2 gap-5 flex flex-col justify-around p-5 '>
        <div>
        <h2 className='lg:text-4xl md:text-3xl   max-md:text-2xl  lg:w-4/5 text-[#252B37] font-semibold'>Struggling to Maintain a Consistent LinkedIn Presence?</h2>
        <p className='text-sm  w-4/5 lg:mt-8 md:mt-6 sm:mt-5 mt-3 text-[#535862] font-semibold'>Creating engaging LinkedIn content takes too much time. Eldrin AI automates your strategy with tailored AI tools.</p>
        </div><div>
<button className='bg-[#6817FF] text-white p-2 rounded-md '> Sign Up</button>
        </div>
        </div>
        <div className='flex-1/2 p-5'><img src={framerpresentation}/></div>
      </div>
      </div>
    </section>
  )
}
export default Frame
