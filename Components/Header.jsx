import { assets } from '@/Assets/assets'
import axios from 'axios';
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { FaMarker } from "react-icons/fa";




const Header = () => {

  const [email,setEmail] = useState("");

  const onSubmitHandler = async (e) =>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("email",email);
    const response = await axios.post('/api/email',formData);
    if (response.data.success) {
      toast.success(response.data.msg);
      setEmail("");
    }
    else{
      toast.error("Error")
    }
  }
  


  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between m-3 items-center '>
      <span className="self-center text-3xl font-semibold whitespace-nowrap text-[#c7ebfc] inline-flex items-center">
      <FaMarker className='mr-2' size={60}/> ThinkBlogs
          </span>
     
        
      </div>
      <div className='text-center my-8'>
        <h1 className='text-3xl sm:text-6xl font-extrabold text-[#c6c6c6] '>Hello, You.</h1>
        <p className='mt-10 max-w-[740px] m-auto text-lg font-mono sm:text-base text-white'>Step into the world of ThinkBlogs, where your voice takes center stage! </p>
        <form onSubmit={onSubmitHandler} className='rounded-lg flex max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-4xl bg-white'>
  <input
    onChange={(e)=>setEmail(e.target.value)}
    value={email}
    type="email"
    placeholder='Enter your email'
    className='pl-4 outline-none bg-white rounded-l-md  text-md border border-black py-4 px-4 sm:px-8 focus:ring-2 focus:ring-gray-700 flex-1'
    required
  />
  <button
    type='submit' 
    className='hover:bg-gray-500 hover:text-white text-md font-medium text-lg font-sans bg-slate-300 rounded-r-xl border border-black py-4 px-8 sm:px-10 active:text-white '
    style={{borderLeft: 'none'}}
  >
    Subscribe
  </button>
</form>



      </div>
    </div>
  )
}

export default Header
