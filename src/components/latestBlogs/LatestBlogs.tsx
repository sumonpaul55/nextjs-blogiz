import { TBlogs } from '@/types'
import React from 'react'
import LatestBlogCard from '../ui/LatestBlogCard'
import BlogCard from '../ui/BlogCard'

const LatestBlogs = ({ blogs }: { blogs: TBlogs[] }) => {
    return (
        <div className='px-3 md:px-8 py-10'>
            <h1 className='md:text-3xl text-center my-5 font-semibold'>Latest Blogs from <span className='text-accent'>blogiz</span></h1>
            <p className='text-center text-gray md:text-lg'>
                <i>Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.</i>
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-10'>
                {
                    blogs?.slice(0, 2).map(blog => (
                        <LatestBlogCard blog={blog} key={blog.id} />
                    ))
                }
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-4'>
                {
                    blogs?.slice(2, 5).map(blog => (
                        <BlogCard blog={blog} key={blog.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default LatestBlogs