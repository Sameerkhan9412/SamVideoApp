import React from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='h-[3rem] bg-gradient-to-r from-white to-blue-500 flex justify-between items-center px-4 py-1 border-b-4 border-dashed fixed z-20 right-0 left-0' >
      <img src={logo} style={{width:'10rem' , borderLeft:'2px solid cyan'}} alt="" />
      <div className='flex list-none '>
        <Link className='px-2 text-white hover:text-blue-200 transition-all font-extrabold' to={'/'}>About Us</Link>
        <Link className='px-2 text-white hover:text-blue-200 transition-all font-extrabold' to={'/'}>Our Product</Link>
        <Link className='px-2 text-white hover:text-blue-200 transition-all font-extrabold' to={'/'}>Blogs</Link>
       
      </div>
    </div>
  )
}

export default Navbar