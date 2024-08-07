'use client'
import { assets, blog_data } from '@/Assets/assets';
import Footer from '@/Components/Footer';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaMarker } from "react-icons/fa";
import profile_icon from "../../../Assets/profile_icon.png";

import { Images } from 'lucide-react';

const page = ({ params }) => {

  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    const response = await axios.get('/api/blog', {
      params: {
        id: params.id
      }
    })
    setData(response.data);
  }

  useEffect(() => {
    fetchBlogData();
  }, [])

<<<<<<< HEAD
  return (data ? <div className='bg-gray-300'>
    <div className='bg-[#16425b] py-5 px-5 md:px-12 lg:px-28'>
    <div className='flex justify-between m-3 items-center '>
      <span className="self-center text-3xl font-semibold whitespace-nowrap text-[#c7ebfc] inline-flex items-center">
      <FaMarker className='mr-2' size={60}/> ThinkBlogs
          </span>
       </div>
=======
  return (data ? <>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
     <div className='flex justify-between m-3 items-center '>
      <span className="self-center text-3xl font-semibold whitespace-nowrap text-[#c7ebfc] inline-flex items-center">
      <FaMarker className='mr-2' size={60}/> ThinkBlogs
          </span>
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>
          Get started <Image src={assets.arrow} alt='' />
        </button>
>>>>>>> 16fd0ce0581c6956a1e03aecca79a806316e041c
      </div>
      <div className='text-center  my-24'>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
        <Image className='mx-auto mt-6 border border-white rounded-full' src={profile_icon} width={60} height={60} alt='' />
        <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
      </div>
   
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
      <Image className='border-4 border-white' src={data.image} width={800} height={480} alt='' />
      
      <div className='blog-content mt-20 ' dangerouslySetInnerHTML={{__html:data.description}}>
        
      </div>
      <div className='my-24'>
        <p className='text-black font font-semibold my-4'>Share this article on social media</p>
        <div className='flex'>
          <Image src={assets.facebook_icon} width={50} alt='' />
          <Image src={assets.twitter_icon} width={50} alt='' />
          <Image src={assets.googleplus_icon} width={50} alt='' />
        </div>
      </div>
    </div>
    <Footer />
  </div> : <></>
  )
}

export default page
