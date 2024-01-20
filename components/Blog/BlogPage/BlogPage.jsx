"use client";

import moment from "moment";
import React from "react";

const BlogPage = ({ data }) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md grid gap-4">
          <div className="md:col-span-1">
            <h3
              className="text-2xl font-semibold"
              dangerouslySetInnerHTML={{ __html: data.title.rendered }}
            />

            <div className="mt-2">
              Author:{" "}
              <span className="font-semibold">
                {data?.yoast_head_json?.author}
              </span>
            </div>

            <div className="mt-2">
              <div className="ml-auto">
                <span className="text-sm text-gray-600">
                  Posted:{" "}
                  <span className="font-semibold">
                    {moment(data.date).format("MMMM Do YYYY")}
                  </span>
                </span>
              </div>
            </div>
            <div className="mt-4">
              <p dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
