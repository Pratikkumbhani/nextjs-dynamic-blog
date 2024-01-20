"use client";

import moment from "moment";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog: { title, date, id, yoast_head_json } }) => {
  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm flex flex-col justify-between">
      <div className="p-5 pb-0">
        <div>
          <Link href={`/blog/${id}`}>
            <h5
              className="text-gray-900 font-bold text-2xl tracking-tight mb-2"
              dangerouslySetInnerHTML={{ __html: title.rendered }}
            />
          </Link>
          <p className="font-semibold">{yoast_head_json.author}</p>
          <p className="py-2 text-xs">{moment(date).format("MMMM Do YYYY")}</p>

          <p
            className="font-normal text-gray-700 mb-3 "
            dangerouslySetInnerHTML={{
              __html: yoast_head_json.og_description.slice(0, 150) + "...",
            }}
          />
        </div>
      </div>
      <Link
        className="text-blue-700  w-max mx-5 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center my-5"
        href={`/blog/${id}`}
      >
        Read more
      </Link>
    </div>
  );
};

export default BlogCard;
