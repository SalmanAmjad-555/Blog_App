import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate();
  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32'>
        <img onClick={()=> navigate('/')} src={assets.logo} alt="" className='w-32 sm:w-44 cursor-pointer'/>
        <button onClick={()=> navigate('/admin')} className='flex items-center cursor-pointer gap-2 rounded-full text-sm bg-primary text-white py-2 px-6'>Login 
            <img src={assets.arrow} alt="" className='w-3'/>
        </button>
    </div>
  )
}

export default Navbar