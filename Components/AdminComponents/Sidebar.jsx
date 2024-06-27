import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaMarker } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className='flex flex-col bg-[#f7a541]'>
            <div className='px-2 sm:pl-14 py-4 border bg-[#f7a541] border-x-[#000000]'>
            <div className='flex justify-between m-3 items-center '>
      <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#000000] inline-flex items-center">
      <FaMarker className='mr-2' size={40}/> ThinkBlogs
          </span>
          </div>
            </div>
            <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-x-[#000000]'>
                <div className='w-[50%] sm:w-[80%] absolute right-0'>
                    <Link href='/admin/addBlog' className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-3px_3px_3px_#000000]'>
                        <Image src={assets.add_icon} alt='' width={28} /><p className='hidden sm:inline-block'>Add blogs</p>
                    </Link>
                    <Link href='/admin/blogList' className=' mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-3px_3px_3px_#000000]'>
                        <Image src={assets.blog_icon} alt='' width={28} /><p className='hidden sm:inline-block'>Blog lists</p>
                    </Link>
                    <Link href='/admin/subscriptions' className=' mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-3px_3px_3px_#000000]'>
                        <Image src={assets.email_icon} alt='' width={28} /><p className='hidden sm:inline-block'>Subscriptions</p>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Sidebar
