import { TBlogs } from '@/types'
import React from 'react'

const LatestBlogs = ({ blogs }: { blogs: TBlogs[] }) => {
    console.log(blogs)
    return (
        <div>
            <h1 className='md:text-3xl text-center my-5 font-semibold'>Latest Blogs from <span className='text-accent'>blogiz</span></h1>
            <p className='text-center text-gray md:text-lg'>
                <i>Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.</i>
            </p>
        </div>
    )
}

export default LatestBlogs