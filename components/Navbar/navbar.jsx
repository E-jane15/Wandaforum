import React from 'react'
import logo from '../src/assets/wandaforum_icon.png'
const Navbar = () => {
  return (
       <div className='text-white w-full'>
        <div className=' flex items-center justify-center md:justify-between px-20 my-6 sticky top-0'>
        <img src={logo} alt="" />
        <a href="" className='text-lg font-medium hover:text-orange'>Home</a>
        <a href="" className='text-lg font-medium hover:text-orange'>Community</a>
        <a href="" className='text-lg text-orange font-medium'>Peermocks</a>
        <a href="" className='text-lg font-medium hover:text-orange'>Pricing</a>
        <button className='bg-purple py-3 px-7 rounded-full'>Signup</button>
        </div>
        </div>
  )
}

export default Navbar