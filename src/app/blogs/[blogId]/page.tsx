import BlogDetails from '@/components/ui/BlogDetails'
import { TBlogs } from '@/types'
import React from 'react'
interface TBlogId {
    params: { blogId: string }
}

export const generateStaticParams = async () => {
    const res = await fetch("http://localhost:5000/blogs");
    const data = await res.json()
    return data?.slice(0, 4)?.map((blog: TBlogs) => ({
        blogId: blog.id
    }))
}


const page = async ({ params }: TBlogId) => {
    const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`, {
        cache: "no-store"
    })
    const data = await res.json()

    return (
        <div className='px-4 md:px-10'>
            <h2 className='text-center my-5 font-semibold text-lg'>Blogs Details</h2>
            <div>
                {
                    <BlogDetails blog={data} />
                }
            </div>
        </div>
    )
}

export default page