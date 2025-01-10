import React from 'react'
import { BiChevronRight } from 'react-icons/bi'

const PricingCard = ({title, heading, billing,amount,time,benefit1, benefit2}) => {
  return (
    <div className='bg-darkpurple rounded-lg  w-72 pt-7 px-6 my-12 cursor-pointer hover:bg-gradient-to-b from-purple to-darkpurple'>
        <div className='text-center px-5'>
            <p className='text-orange text-sm mb-6 '>{title}</p>
            <p className='text-xl font-medium '>{heading}</p>
            <p className='font-semibold mb-8'>{billing}</p>
            <p className='bg-purple3 text-xl mb-6  px-3 py-6 rounded-lg'>$<span className='text-5xl font-bold'>{amount}</span>/{time}</p>
            <ul className='text-xs list-disc text-left mb-5'>
                <li className='mb-2'>{benefit1}</li>
                <li>{benefit2}</li>
            </ul>
          
            <button className='border rounded-full items-center px-6 py-2 text-xs '>Subscribe <BiChevronRight className='size-5 inline-block '/> </button>
            
            <p className='text-[10px] m-8'>Prices are marked in USD</p>
        </div>

    </div>
  )
}

export default PricingCard