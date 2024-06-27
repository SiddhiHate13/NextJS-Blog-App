import { assets, blog_data } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdOutlineReadMore } from "react-icons/md";


const BlogItem = ({title,description,category,image,id}) => {

  return (
    <div className='max-w-[330px] sm:max-w-[300px] transition-transform transform hover:scale-110 bg-white hover:bg-gray-200 rounded-lg  border border-black  '>
      <Link href={`/blogs/${id}`}>
      <Image src={image} alt='' width={400} height={400} className='border-b border-black rounded-lg ' />
      </Link>
      <p className='ml-5 mt-5 px-1 inline-block bg-gray-600 text-white text-md p-0 rounded-md'>{category}</p>
      <div className="p-5">
        <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
        <p className='mb-3 text-sm tracking-tight text-gray-700' dangerouslySetInnerHTML={{"__html":description.slice(0,120)}}></p>
        <Link href={`/blogs/${id}`} className='inline-flex items-center py-2 font-semibold text-center'>
            Read more <MdOutlineReadMore className=' mr-2' size={25} />

        </Link>
      </div>
    </div>
  )
}

export default BlogItem
