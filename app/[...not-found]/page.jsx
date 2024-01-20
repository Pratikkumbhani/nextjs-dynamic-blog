import Link from "next/link";

const page = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center">
      <h3 className="font-bold text-2xl">Page Not Found</h3>
      <Link
        className="text-white bg-blue-700 w-max mx-5 hover:bg-blue-800 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center my-5"
        href={`/blog`}
      >
        Go to Blog Page
      </Link>
    </div>
  );
};

export default page;
