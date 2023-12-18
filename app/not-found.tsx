"use client";

import { FC, useContext } from "react";
import Link from "next/link";
import { AuthContext } from "./context/authContext";

const NotFound: FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div className="py-72 grid h-screen place-content-center bg-white px-4">
        <div className="text-center">
          <h1 className="text-9xl font-black text-gray-200">404</h1>

          <p className="text-2xl font-bold tracking-tight text-primary sm:text-4xl">
            Uh-oh!
          </p>

          <p className="mt-4 text-gray-500">We can&apos;t find that page.</p>

          <Link
            href={user ? "/user-home" : "/"}
            className="mt-6 inline-block rounded bg-secondary px-5 py-3 text-sm font-medium text-white focus:outline-none focus:ring"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
