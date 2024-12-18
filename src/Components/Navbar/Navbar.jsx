import React from 'react'
import logo from '../../assets/wandaforum_icon.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
      <nav className='text-white w-full'>
            <div className=' flex items-center justify-center md:justify-between px-20 my-6 sticky top-0'>
            <img src={logo} alt="" />
            <NavLink to="/" className={({isActive})=>
            isActive ? 'text-lg  text-orange font-medium':' text-lg hover:text-orange font-medium' }>
            Home</NavLink>
            <NavLink to="/questionpage" className={({isActive})=>
            isActive ? 'text-lg  text-orange font-medium':' text-lg hover:text-orange font-medium' }>
            Questions</NavLink>
            <NavLink to="/community" className={({isActive})=>
            isActive ? 'text-lg  text-orange font-medium':' text-lg hover:text-orange font-medium' }>
            Community</NavLink>
            <NavLink to="/peermock" className={({isActive})=>
            isActive ? 'text-lg  text-orange font-medium':' text-lg hover:text-orange font-medium' }>
            Peermocks</NavLink>
            <NavLink to="/pricing" className={({isActive})=>
            isActive ? 'text-lg  text-orange font-medium':' text-lg hover:text-orange font-medium' }>
            Pricing</NavLink>
            <button className='bg-purple py-3 px-7 rounded-full'>Signup</button>
            </div>
          
      </nav>
  )
}

export default Navbar