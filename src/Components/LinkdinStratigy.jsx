import React from 'react'
import bg from"../assets/bg.png"
import content from"../assets/Content.png"
const LinkdinStratigy = () => {
  return (
    <section className='w-full justify-center  h-full flex-col flex items-center lg:mt-14 md:mt-10 sm:mt-5 mt-5'>
        <h2 className='lg:w-1/2 md:4/5 sm:w-4/5 w-4/5 lg:text-5xl md:text-4xl sm:text-2xl max-sm:text-xl   font-bold  text-[#252B37] '>Transform Your LinkedIn Strategy with Eldrin AI</h2>
        <div className='flex flex-col lg:mt-14 md:mt-10 sm:mt-5 mt-5  lg:flex-row md:flex-col justify-center w-[80%]'>
<div className='flex-1/2 p-5'>
    <div className='p-5 border-l-4 border-[#7300FF]   '>
        <h4 className='text-xl font-semibold text-[#252B37]'>Automate Your Posts</h4>
<p className='text-xsm text-[#666D80] w-4/5'>Eldrin AI crafts engaging posts automatically—keeping you ahead of trends and saving you valuable time.</p>
    </div>
    <div className='p-5   '>
        <h4 className='text-xl font-semibold text-[#252B37]'>Stunning Visuals</h4>
<p className='text-xsm text-[#666D80] w-4/5'>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
    </div>
    <div className='p-5   '>
        <h4 className='text-xl font-semibold text-[#252B37]'>Intelligent Research</h4>
<p className='text-xsm text-[#666D80] w-4/5'>Leverage AI-enhanced search to generate insightful, research-driven posts and position yourself as an industry expert.</p>
    </div>
    <div className='p-5   '>
        <h4 className='text-xl font-semibold text-[#252B37]'>Automated Scheduling</h4>
<p className='text-xsm text-[#666D80] w-4/5'>Keep a consistent brand voice with our automated scheduling, ensuring you never miss a beat.</p>
    </div>
    <div className='p-5   '>
        <h4 className='lg:text-xl md:text-lg font-semibold text-[#252B37]'>SEO-Optimized Content</h4>
<p className='text-xsm text-[#666D80] w-4/5'>Effortlessly generate SEO-friendly blog posts that boost your LinkedIn authority and engagement.</p>
    </div>
</div>
<div className='flex-1/2'>
<img className='w-full ' src={content}/>
</div>
        </div>

<div style={{ backgroundImage: `url(${bg})` }}  className=' mx-10  rounded-3xl overflow-hidden bg-no-repeat bg-cover bg-center h-full text-white lg:p-10 md:p-10 sm:p-5 p-5 '>
    <div>
 <h2 className='lg:w-1/2 md:w-1/2 sm:w-4/5 w-4/5 lg:text-5xl md:text-4xl sm:text-2xl max-sm:text-xl   font-semibold  text-white '>Start Growing Your LinkedIn Instantly with Eldrin AI</h2>
 <p className='text-xsm text-white w-4/5 lg:mt-10 md:mt-8 sm:mt-2 mt-2 '>
Start your 14-day free trial today!</p>
    </div>
 <div className='lg:mt-10 md:mt-8 sm:mt-2 mt-2 flex lg:gap-5 md:gap-5 sm:gap-2 gap-2'><button className='lg:p-3 md:p-2 sm:p-2 p-2 text-white cursor-pointer bg-[#6817FF] rounded-lg'>Sign Up</button> <button className='lg:p-3 md:p-2 sm:p-2 p-2 text-[#6817FF] bg-white cursor-pointer rounded-lg'>Contact Sales</button></div>
</div>

    </section>
  )
}

export default LinkdinStratigy
