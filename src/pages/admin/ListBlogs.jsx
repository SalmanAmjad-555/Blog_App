import React, { useEffect, useState } from 'react'
import { blog_data } from '../../assets/assets'
import BlogTableItems from '../../components/admin/BlogTableItems'


const ListBlogs = () => {
 
  const [blogs, setBlogs] = useState([])

  const fetchBlogs=(()=>{
    setBlogs(blog_data)
  })

   useEffect(() => {
   fetchBlogs();
   }, [])
   


  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50'>
      <h1>All Blogs</h1>
      <div className="relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white">
          <table className="w-full text-sm text-gray-500">
            <thead className="text-xs text-gray-600 text-left uppercase">
              <tr>
                <th scope="col" className="px-2 py-4">
                  #
                </th>
                <th scope="col" className="px-2 py-4">
                  Blogs Title
                </th>
                <th scope="col" className="px-2 py-4 max-sm:hidden">
                  Date
                </th>
                <th scope="col" className="px-2 py-4 max-sm:hidden">
                  Status
                </th>
                <th scope="col" className="px-2 py-4">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, index) => {
                return (
                  <BlogTableItems
                    key={blog._id}
                    blog={blog}
                    index={index}
                    fetchBlogs={fetchBlogs}
                  />
                );
              })}
            </tbody>
          </table>
        </div>

    </div>
  )
}

export default ListBlogs