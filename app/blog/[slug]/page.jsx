import BlogPage from '@/components/Blog/BlogPage/BlogPage';
import ErrorPage from '@/components/Error/Error';
import React from 'react';

async function getData(params) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/?slug=${params}`);

  if (!res.ok) {
    return false;
  }

  return res.json();
}

export const generateMetadata = async ({ params: { slug } }) => {
  const data = await getData(slug);
  return {
    title: data?.[0]?.yoast_head_json?.title || 'Blog Detail Page Title',
    description: data?.[0]?.yoast_head_json?.description || 'Blog Detail Page',
  };
};

export default async function page({ params: { slug } }) {
  const data = await getData(slug);

  return (
    <div>{data.length != 0 ? <BlogPage data={data[0]} /> : <ErrorPage />}</div>
  );
}
