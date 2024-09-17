import LoadingCard from "@/components/ui/LoadingCard";
import { TBlogs } from "@/types";


const LoadingPage = async () => {
    const res = await fetch("http://localhost:5000/blogs");
    const data = await res.json()
    return (
        <div className="font-bold md:text-xl text-center mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {
                    data?.map((blog: TBlogs) => (
                        <LoadingCard key={blog.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default LoadingPage