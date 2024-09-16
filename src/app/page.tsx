import LatestBlogs from "@/components/latestBlogs/LatestBlogs";

const HomePage = async () => {
  const data = await fetch("http://localhost:5000/blogs")
  const blogs = await data.json();
  return (
    <>
      <LatestBlogs blogs={blogs} />
    </>
  );
};

export default HomePage;
