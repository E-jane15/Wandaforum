import React from 'react'
import join_image from '../../assets/join_image.png'

const Hero2 = () => {
  return (
    <div className='mt-12 text-white px-20 flex items-center justify-between gap-20'>
         
         <div className='basis-2/5'>
            <img src={join_image} alt="" />
        </div>
        
        <div className='basis-3/5'>
            <p className=' text-3xl  font-bold '>Who's <span className='text-orange'>joining</span></p>
            <p className=' text-2xl font-light leading-10 my-9'>
                Anyone and everyone who is involved in cloud computing can practice. Whether you're a
                 beginner or seasoned professional, we offer a rich set of resources. From basic knowledge
                 of AWS to complex Kubernetes deployments, there are thousands of questions to choose from.
            </p>
            
        </div>
       
    </div>
  )
}

export default Hero2