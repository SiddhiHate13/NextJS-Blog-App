import { blog_data } from '@/Assets/assets'
import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios';
import { Button } from "@/components/ui/button"



const BlogList = () => {

    const [menu,setMenu] = useState("All");
    const [blogs,setBlogs] = useState([]);

    const fetchBlogs = async () =>{
      const response = await axios.get('/api/blog');
      setBlogs(response.data.blogs);
      console.log(response.data.blogs);
    }

    useEffect(()=>{
      fetchBlogs();
    },[])

    return (
      <div data-testid="blog-list">
      <div>
        <div className='flex justify-center gap-6 my-10'>
          <Button onClick={() => setMenu('All')} className={`py-1 px-4 rounded-md ${menu === "All" ? 'bg-gray-500 text-white' : 'bg-blue-200 text-gray-950 hover:bg-gray-500 hover:text-white'}`}>All</Button>
          <Button onClick={() => setMenu('Technology')} className={`py-1 px-4 rounded-md ${menu === "Technology" ? 'bg-gray-500 text-white' : 'bg-blue-200 text-gray-950 hover:bg-gray-500 hover:text-white'}`}>Technology</Button>
          <Button onClick={() => setMenu('Startup')} className={`py-1 px-4 rounded-md ${menu === "Startup" ? 'bg-gray-500 text-white' : 'bg-blue-200 text-gray-950 hover:bg-gray-500 hover:text-white'}`}>Startup</Button>
          <Button onClick={() => setMenu('Lifestyle')} className={`py-1 px-4 rounded-md ${menu === "Lifestyle" ? 'bg-gray-500 text-white' : 'bg-blue-200 text-gray-950 hover:bg-gray-500 hover:text-white'}`}>Lifestyle</Button>
        </div>
        <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
          {blogs.filter((item) => menu === "All" ? true : item.category === menu).map((item, index) => (
            <BlogItem key={index} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category} />
          ))}
        </div>
      </div>
      </div>
    )
  }
    

export default BlogList;
