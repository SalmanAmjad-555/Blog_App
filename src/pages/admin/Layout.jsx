import React from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
import SideBar from '../../components/admin/SideBar'
import { Outlet } from 'react-router-dom'


const Layout = () => {
    const navigate=useNavigate()
    const logout=()=>{
        navigate('/')
    }
  return (
    <>
    <div className='flex items-center justify-between py-2 h-[70px] px-4 md:px-12 border-b border-x-gray-200'>
        <img src={assets.logo} alt="" className='w-32 md:w-40 cursor-pointer' onClick={()=>navigate('/')}/>
        <button onClick={logout} className='text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer'>Logout</button>
    </div>
   
     <SideBar  />
     <div className="flex-1 p-4">
        <Outlet />
      </div>
   
    
    </>
  )
}

export default Layout