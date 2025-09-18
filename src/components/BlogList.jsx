import React, { useState } from 'react'
import { blog_data, blogCategories } from '../assets/assets'
import BlogCards from './BlogCards'

const BlogList = () => {

    const [menu, setMenu] = useState("All")

  return (
    <div>
        <div className='flex justify-center gap-4 sm:gap-8 my-10 relative'>
           {
            blogCategories.map((item)=>(
               <div key={item} className='relative'>
               <button
                  onClick={() => setMenu(item)}
                  className={`cursor-pointer relative transition-all duration-200 ${
                    menu === item ? 'text-white px-4 pt-0.5' : 'text-gray-500'
  }`}
>
  {item}
  {menu === item && (
    <div className='absolute left-0 right-0 top-0 h-7 rounded-full bg-primary -z-10'></div>
  )}
</button>

              

               </div>
            ))
           }
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 sm:mx-16 xl:mx-40'>
            {/* ----blog card ---- */}
            {blog_data.filter((blog)=> menu === "All" ? true : blog.category === menu ).
            map((blog)=> <BlogCards key={blog._id} blog={blog} />)}
        </div>
    </div>
  )
}

export default BlogList