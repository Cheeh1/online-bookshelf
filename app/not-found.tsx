import { FC } from "react";
import Link from "next/link";

const NotFound: FC = () => {
  return (
    <>
      <div className="py-72 flex justify-center">
        {/* <div className="text-center">
          <h1 className="text-9xl font-black text-gray-200">404</h1>

          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uh-oh!
          </p>

          <p className="mt-4 text-gray-500">We can&apos;t find that page.</p>

          <Link
            href="/"
            className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            Go Back Home
          </Link>
        </div> */}
        <h1 className="text-3xl text-extrabold text-gray-200">404</h1>
        <p className="">Uh-oh</p>
        <p className="">We can&apos;t find that page. </p>
        <Link href="/">
          Go Back Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
