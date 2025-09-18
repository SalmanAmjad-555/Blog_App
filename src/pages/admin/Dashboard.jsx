import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import BlogTableItems from "../../components/admin/BlogTableItems";
import { blog_data } from "../../assets/assets";

const Dashboard = () => {
  const [dashBoardData, setDashBoardData] = useState({
    blogs: 10,
    comments: 5,
    drafts: 0,
    recentBlogs: [],
  });

  const fetctDashboard = async () => {
    setDashBoardData(prev => ({
    ...prev,
    recentBlogs: blog_data,  // ← this ensures data is visible
  }));
  };

  useEffect(() => {
    fetctDashboard();
  }, []);

  return (
    <div className="flex-1 p-4 bg-blue-50/50 md:p-10">
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-4 bg-white p-4 min-w-56 rounded shadow cursor-pointer hover:scale-105 transition-all min-h-full">
          <img src={assets.dashboard_icon_1} alt="" />
          <div>
            <p className="text-xl font-semibold text-migray-600">
              {dashBoardData.blogs}
            </p>
            <p className="text-gray-400 font-light">Blogs</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white p-4 min-w-56 rounded shadow cursor-pointer hover:scale-105 transition-all min-h-full">
          <img src={assets.dashboard_icon_2} alt="" />
          <div>
            <p className="text-xl font-semibold text-migray-600">
              {dashBoardData.comments}
            </p>
            <p className="text-gray-400 font-light">Comments</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white p-4 min-w-56 rounded shadow cursor-pointer hover:scale-105 transition-all min-h-full">
          <img src={assets.dashboard_icon_3} alt="" />
          <div>
            <p className="text-xl font-semibold text-migray-600">
              {dashBoardData.drafts}
            </p>
            <p className="text-gray-400 font-light">Drafts</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-3 m-4 mt-6 text-gray-600">
          <img src={assets.dashboard_icon_4} alt="" />
          <p>Latest Blog</p>
        </div>
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
              {dashBoardData.recentBlogs.map((blog, index) => {
                console.log("Recent blogs:", dashBoardData.recentBlogs);

                return (
                  <BlogTableItems
                    key={blog._id}
                    blog={blog}
                    index={index}
                    fetchBlogs={fetctDashboard}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
