import React from 'react'
import Eldrinai from ".././assets/Eldrinai.png"
const Footer = () => {
  return (
    <section className='w-full text-gray-800  h-full flex-col  flex  lg:mt-14 md:mt-10 sm:mt-5 mt-5 py-14 px-5 lg:px-10'>
<div className='w-full  h-full lg:flex-row md:flex-row flex-row max-sm:flex-col  mb-14 justify-between flex  '>
<div className='lg:w-1/4 md:w-1/4 sm:w-1/2 w-1/2 max-sm:w-2/3'>
    <img className="h-8 lg:h-8" src={Eldrinai}/>
    <p className='text-[0.8rem] text mt-2  '>Maximize your reach and hiring success by
posting your job ad to 10+ job search sites within one tool and with one single login - for free.</p>
</div>
<div className='w-full flex max-sm:mt-5 gap-5 flex-row justify-evenly  '>

<div className='flex flex-col '>
<a className='font-semibold'>Product</a>
<a>Overview</a>
<a>Features</a>
<a>Pricing</a>
</div>
<div className='flex flex-col '>
<a className='font-semibold'>Cmpany</a>
<a>Blog</a>
<a>About us</a>
</div>
<div className='flex flex-col '>
<a className='font-semibold'>Legal</a>
<a>Terms</a>
<a>Privacy Policy</a>
</div>
</div>
</div>
<div className='flex flex-row text-[#414651] justify-between pt-14 border-t border-gray-200'>
    <p className='text-sm   '>© 2025 Eldrin AI. All rights reserved.</p>
    <div className='flex flex-row gap-5 text-sm'>
        <a>Legal Notice</a>
<a>Terms Corporate</a>
<a>Privacy</a>
    </div>
</div>
    </section>
  )
}

export default Footer
