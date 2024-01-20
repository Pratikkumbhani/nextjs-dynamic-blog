"use client";

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-10">
        <h2 className="text-2xl">Blogs</h2>
        <Link
          className="text-white bg-blue-700 w-max mx-5 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
          href={`/blog`}
        >
          Blog Page
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
