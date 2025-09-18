import React, { useEffect, useRef, useState } from "react";
import { assets } from "../../assets/assets";
import Quill from "quill";

const AddBlog = () => {

  const editorRef=useRef(null)
  const quillRef=useRef(null)

  const [title, setTitle] = useState("");
  const [subTitle, setsubTitle] = useState("");
  const [image, setImage] = useState(false);
  const [category, setCategory] = useState("Startup");
  const [isPublished, setIsPublished] = useState(false);

   

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(()=>{
    if(!quillRef.current && editorRef.current){
        quillRef.current = new Quill(editorRef.current, {theme: 'snow'})
    }
  }, [])
  return (
    <form className="flex bg-blue-50/50 text-gray-600 h-full overflow-scroll">
      <div className="bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded">
        <p>Upload ThumbNail</p>
        <label htmlFor="image"> 
          <img
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt=""
            className="mt-2 h-16 rounded cursor-pointer"
          />
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </label>
        <p className="mt-4">Blog Title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-lg mt-2 p-2 border border-gray-300 rounded outline-none"
          onChange={e=>setTitle(e.target.value)} value={title}
        />
         <p className="mt-4">Sub Title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-lg mt-2 p-2 border border-gray-300 rounded outline-none"
          onChange={e=>setSubTitle(e.target.value)} value={subTitle}
        />
         <p className="mt-4">Blog Description</p>
         <div className="max-w-lg h-74 pb-16 sm:pb-10  pt-2 relative">
          <div ref={editorRef}></div>
          <button type="button" className="absolute bottom-1 right-2 ml-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer">Generate Content with Ai</button>
         </div>
      </div>
    </form>
  );
};

export default AddBlog;
      