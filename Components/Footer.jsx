import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'
import { FaMarker } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
      <div className='flex justify-between items-center '>
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#c7ebfc] inline-flex items-center">
      <FaMarker className='mr-2' size={25}/> ThinkBlogs
          </span>
      </div>
      <p className='text-sm text-white'>Ⓒ All right reserved. Copyrights Reserved @ThinkBlogs</p>
        <div className='flex'>
            <Image src={assets.facebook_icon} alt='' width={40} />
            <Image src={assets.twitter_icon} alt='' width={40} />
            <Image src={assets.googleplus_icon} alt='' width={40} />
        </div>
    </div>
  )
}



export default Footer
