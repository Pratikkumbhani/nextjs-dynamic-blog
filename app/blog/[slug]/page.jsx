import BlogPage from "@/components/Blog/BlogPage/BlogPage";
import ErrorPage from "@/components/Error/Error";
import React from "react";

async function getData(params) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${params}`);

  if (!res.ok) {
    return false;
  }

  return res.json();
}

export default async function page({ params: { slug } }) {
  const data = await getData(slug);

  return <div>{data ? <BlogPage data={data} /> : <ErrorPage />}</div>;
}
