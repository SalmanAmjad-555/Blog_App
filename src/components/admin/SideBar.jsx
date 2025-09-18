// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { assets } from '../../assets/assets'

// const SideBar = () => {
//   return (
//   <div className='flex flex-col border-r border-gray-200 min-h-full pt-6 bg-white '>
//    <NavLink end={true} to="/admin"
//     className={({ isActive }) =>
//     `w-fit px-3 py-2 md:px-6 md:py-2 rounded-lg cursor-pointer transition-all duration-150  ${
//       isActive ? 'bg-white border-r-4 border-primary' : 'hover:bg-primary'}`}>
//     <div className="flex items-center gap-3">
//      <img src={assets.home_icon} alt="" className="min-w-4 w-5" />
//      <p className="hidden md:inline-block">Dashboard</p>
//     </div>
//    </NavLink>


//  <NavLink end={true} to="/admin"
//    className={({ isActive }) =>`w-fit px-3 py-2 md:px-6 md:py-2 rounded-lg cursor-pointer transition-all duration-150 ${
//    isActive ? 'bg-primary/10 border-r-4 border-primary' : 'hover:bg-primary/10' }`}>
//    <div className="flex items-center gap-3">
//      <img src={assets.add_icon} alt="" className="min-w-4 w-5" />
//      <p className="hidden md:inline-block">Add Blogs</p>
//    </div>
//  </NavLink>

//  <NavLink
//    end={true} to="/admin" className={({ isActive }) => `w-fit px-3 py-2 md:px-6 md:py-2 rounded-lg cursor-pointer transition-all duration-150 ${
//     isActive ? 'bg-primary/10 border-r-4 border-primary' : 'hover:bg-primary/10'}`}>
//    <div className="flex items-center gap-3">
//     <img src={assets.list_icon} alt="" className="min-w-4 w-5" />
//     <p className="hidden md:inline-block">List Bllogs</p>
//    </div>
//  </NavLink>

//  <NavLink
//   end={true} to="/admin"
//   className={({ isActive }) =>`w-fit px-3 py-2 md:px-6 md:py-2 rounded-lg cursor-pointer transition-all duration-150 ${
//       isActive ? 'bg-primary/10 border-r-4 border-primary' : 'hover:bg-primary/10'}` }>
//   <div className="flex items-center gap-3">
//     <img src={assets.comment_icon} alt="" className="min-w-4 w-5" />
//     <p className="hidden md:inline-block">Comment</p>
//   </div>
//  </NavLink>

// </div>
//   )
// }

// export default SideBar

import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const SideBar = () => {
  return (
    <div className="flex flex-col border-r border-gray-200 min-h-full pt-6 bg-white">
      {[
        { to: '/admin', icon: assets.home_icon, label: 'Dashboard' },
        { to: '/admin/addblog', icon: assets.add_icon, label: 'Add Blogs' },
        { to: '/admin/listBlog', icon: assets.list_icon, label: 'List Blogs' },
        { to: '/admin/comments', icon: assets.comment_icon, label: 'Comment' },
      ].map((item, index) => (
        <NavLink
          key={index}
          end={true}
          to={item.to}
          className={({ isActive }) =>
            `group w-fit px-3 py-2 md:px-6 md:py-2 rounded-lg cursor-pointer transition-all duration-150 ${
              isActive
                ? 'bg-blue-100 border-r-4 border-primary'
                : 'hover:bg-blue-100'
            }`
          }
        >
          <div className="flex items-center gap-3">
            <img src={item.icon} alt="" className="min-w-4 w-5" />
            <p className="hidden md:inline-block">{item.label}</p>
          </div>
        </NavLink>
      ))}
    </div>
  )
}

export default SideBar
