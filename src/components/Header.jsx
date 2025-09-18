import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div>
        <div className='text-center mt-20 mb-8'>
         <div className='inline-flex justify-center items-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm'>
          <p>New AI feature integrated</p>
          <img src={assets.star_icon} alt="" className='w-2.5'/>
         </div>
         <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700'>Your own <span className='text-primary '>blogging</span> <br /> platform.</h1>

         <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-500'>This is your space to think out loud,to share what matters,and to write wothout filters,Weather it's one word prr thousands your start here</p>

         <form className='flex justify-between max-w-lg max-sm:scale-75 border border-gray-300 mx-auto bg-white rounded overflow-hidden' >
          <input type="text" placeholder='Search for blogs' className='w-full outline-none pl-4'/>
          <button className='bg-primary text-white hover:scale-105 transition-all rounded-full py-2 px-4 mx-1.5 '>Search</button>
         </form>
        </div>
        <img src={assets.gradientBackground} alt="" className='absolute -top-50 -z-1' />
    </div>
  )
}

export default Header