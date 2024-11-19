import React from 'react'
import { FaStar } from 'react-icons/fa'

const TestimonialCard = ({test_pic, test_name, test_profession, test_company,testimonial }) => {
  return (
    <div className='bg-purple3 rounded-2xl w-full h-60 pt-7 px-6 my-12'>
        <div className='flex items-center justify-between'>
            <img src={test_pic} alt="" className='bg-white w-17 w-17 rounded-full' />
            <div>
            <p className='text-lg font-semibold'>{test_name}</p>
            <p className='text-sm'> {test_profession}, {test_company}</p>
        </div>
        </div>
        <p className='mt-8'>{testimonial}</p>
        <div className='flex items-center gap-3 mt-4'> 
            <FaStar className='fill-gold'/>  
            <FaStar className='fill-gold'/>
            <FaStar className='fill-gold'/>
            <FaStar className='fill-gold'/>
            <FaStar className='fill-gold'/>
        </div>
        
       
    </div>
  )
}

export default TestimonialCard