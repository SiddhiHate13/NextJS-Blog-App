'use client';
import { assets } from '@/Assets/assets';
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Page = () => {
    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        title: "",
        description: "",
        category: "Startup",
        author: "Siddhi Hate",
<<<<<<< HEAD
        authorImg: "/profile_icon.jpeg"
=======
        authorImg: "/profile_icon.png"
>>>>>>> 16fd0ce0581c6956a1e03aecca79a806316e041c
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        
        try {
            const formData = new FormData();
            formData.append('title', data.title);
            formData.append('description', data.description);
            formData.append('category', data.category);
            formData.append('author', data.author);
            formData.append('authorImg', data.authorImg);
            formData.append('image', image);
            
            const response = await axios.post('/api/blog', formData);
            
            if (response.data.success) {
                toast.success(response.data.msg);
                setImage(null);
                setData({
                    title: "",
                    description: "",
                    category: "Startup",
<<<<<<< HEAD
        author: "Siddhi Hate",
        authorImg: "/profile_icon.jpeg"
=======
                    author: "Siddhi Hate",
                    authorImg: "/profile_icon.png"
>>>>>>> 16fd0ce0581c6956a1e03aecca79a806316e041c
                });
            } else {
                toast.error(response.data.msg || "Error occurred while adding blog.");
            }
        } catch (error) {
            console.error('Error submitting blog:', error);
            toast.error('Failed to submit blog. Please try again.');
        }
    };

    return (
        <>
            <form onSubmit={onSubmitHandler} className='pt-5 px-5 bg-gray-200 sm:pt-12  sm:pl-16'>
                <p className='text-xl font-semibold'>Upload thumbnail</p>
                <label htmlFor="image">
                    <Image className='mt-4 border-2 rounded-md border-gray-800' src={!image ? assets.upload_area : URL.createObjectURL(image)} width={140} height={70} alt='' />
                </label>
                <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
                <p className='text-xl font-semibold mt-4'>Blog title</p>
                <input name='title' onChange={onChangeHandler} value={data.title} className='w-full border-2 border-gray-800 sm:w-[500px] mt-4 px-4 py-3 rounded-md' type="text" placeholder='Type here' required />
                <p className='text-xl font-semibold mt-4'>Blog Description</p>
                <textarea name='description' onChange={onChangeHandler} value={data.description} className='w-full sm:w-[500px] mt-4 px-4 py-3 border-2 rounded-md border-gray-800' type="text" placeholder='Write content here' rows={6} required />
                <p className='text-xl font-semibold mt-4'>Blog category</p>
                <select name="category" onChange={onChangeHandler} value={data.category} className='w-40 mt-4 px-4 py-3 border-2 border-gray-800 rounded-md text-gray-500'>
                    <option value="Startup">Startup</option>
                    <option value="Technology">Technology</option>
                    <option value="Lifestyle">Lifestyle</option>
                </select>
                <br />
                <button type="submit" className='mt-8 w-40 h-12 bg-gray-900 rounded-md font-semibold hover:bg-slate-500 hover:text-black text-white'>ADD</button>
               

            </form>
        </>
    );
};

export default Page;
