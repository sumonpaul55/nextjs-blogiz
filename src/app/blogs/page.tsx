import BlogCard from '@/components/ui/BlogCard';
import { TBlogs } from '@/types';
import React from 'react'

const page = async () => {
    const res = await fetch("http://localhost:5000/blogs", {
        cache: "no-store"
    });
    const blogs = await res.json()
    return (
        <section className='mt-10 px-4 md:px-10'>
            <div className="container mx-auto">
                <h2 className='text-lg md:text-xl font-bold text-center lg:text-3xl'>Blogs from <span className='text-accent'>Blogiz</span></h2>
                <p className='text-center mt-4 md:text-lg text-gray-600'><i>Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.</i></p>
            </div>
            <div className='mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                {
                    blogs?.map((blog: TBlogs) => (
                        <BlogCard blog={blog} key={blog.id} />
                    ))
                }
            </div>
        </section>
    )
}

export default page