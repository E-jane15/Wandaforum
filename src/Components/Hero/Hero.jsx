import React from 'react'
import hero_image from '../../assets/hero_image.png'
const Hero = () => {
  return (
    <div className='text-white px-20 flex items-center justify-between'>
        <div className='basis-3/5'>
            <p className=' text-6xl bg-gradient-to-r from-purple2 to-orange/80 bg-clip-text text-transparent font-bold '>Practice with peers, Succeed in careers.</p>
            <p className='text-2xl font-light leading-10 my-9'>Join thousands of tech candidates to practice mock interviews to land  
                their dream job. Practice real interview questions and 
                get real-time feedback.
            </p>
            <button className='bg-purple px-4 py-3 rounded-full'>Schedule a session</button>
        </div>
        <div className='basis-2/5'>
            <img src={hero_image} alt=""  className=' '/>
        </div>
    </div>
  )
}

export default Hero