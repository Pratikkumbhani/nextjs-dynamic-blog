"use client";

import BlogCard from "@/components/Blog/BlogCard/BlogCard";

const Blog = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-8 my-5 mx-5">
      {data?.map((blog) => {
        return <BlogCard key={blog.id} blog={blog} />;
      })}
    </div>
  );
};

export default Blog;
