import React from 'react'
import illustration from "../assets/illustration.png"
import illustration2 from "../assets/2illustration2.png"
import illustration3 from "../assets/3illustration3.png"
import illustration4 from "../assets/4illustration4.png"
const PowerfullAifeature = () => {
  return (
    <section className='w-full  h-full flex-col flex items-center lg:mt-14 md:mt-10 sm:mt-5 mt-5'>
<h2 className='lg:w-1/2 md:4/5 sm:w-4/5 w-4/5 lg:text-5xl md:text-4xl sm:text-2xl max-sm:text-xl  font-bold  text-[#252B37] '>Powerful AI Features for LinkedIn Growth</h2>
  <div className='grid md:grid-col-2 max-sm:grid-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:mt-14 md:mt-10 sm:mt-5 lg:gap-5 md:gap-4 sm:gap3 gap-2 mt-5 p-5 w-[90%] rounded-lg'>
<div className='p-5 flex flex-col bg-white rounded-lg lg:gap-5 md:gap-4 sm:gap3 gap-2 '>
<img src={illustration}/>
<h4 className='lg:text-2xl md:text-xl max-md:text-2xl font-semibold text-[#252B37]'>AI Content & Image Creator</h4>
<p className='text-xsm text-[#666D80]'>Generate engaging posts & visuals in seconds, tailored to your company's brand. Use Eldrin's brainstorming features to generate engaging, optimal content for your voice.</p>
</div>
<div className='p-5 rounded-lg flex flex-col bg-white gap-5'>
<img src={illustration2}/>
<h4 className='lg:text-2xl font-semibold text-[#252B37] sm:text-2xl max-md:text-2xl '>Smart Research Posts</h4>
<p className='text-xsm text-[#666D80]'>Position yourself as a well-read Linkedin professional. Use our AI-powered search & summarization tool to quickly generate insightful research posts.</p>
</div>
<div className='p-5 flex flex-col rounded-lg bg-white gap-5'>
<img src={illustration3}/>
<h4 className='lg:text-2xl font-semibold sm:text-2xl max-md:text-2xl   text-[#252B37]'>Blog Post Generator</h4>
<p className='text-xsm text-[#666D80]'>Create SEO-optimized blog posts directly within Eldrin AI - handle citations, images, and formatting all in one place.</p>
</div>
<div className='p-5 flex flex-col   bg-white  rounded-lg gap-5'>
<img src={illustration4}/>
<h4 className='lg:text-2xl font-semibold text-[#252B37] max-md:text-2xl sm:text-2xl  '>Content Calendar & Scheduling</h4>
<p className='text-xsm text-[#666D80]'>Plan and schedule your LinkedIn content weeks in advance. Easily view and edit all of your posts, or filter between your business or personal account.</p>
</div>
  </div>
    </section>
  )
}

export default PowerfullAifeature
