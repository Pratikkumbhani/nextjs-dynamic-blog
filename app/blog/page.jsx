import Blog from "@/components/Blog/Blog";
import ErrorPage from "@/components/Error/Error";
import React from "react";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);

  if (!res.ok) {
    return false;
  }

  return res.json();
}

export default async function page() {
  const data = await getData();

  return <div>{data ? <Blog data={data} /> : <ErrorPage />}</div>;
}
