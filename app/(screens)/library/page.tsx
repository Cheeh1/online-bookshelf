import Button from "@/app/components/button/page";
import { FC } from "react";
import Link from "next/link";

const Library: FC = () => {
  return (
    <>
      <main className="flex flex-col gap-20 py-20">
        <section className="flex flex-col gap-5">
          <div className="flex px-40 justify-between text-sm">
            <h1 className="font-bold text-primary">Your Library</h1>
            <div className="flex gap-3">
              <p className="font-medium text-[#3F3D56A8]">To Be Read</p>
              <p className="font-medium text-[#3F3D56A8]">In Progress</p>
              <p className="font-bold text-primary">Completed</p>
            </div>
          </div>
          <hr className="w-4/4 border-[1.5px] border-[font-medium text-[#3F3D56A8]] border-1.5 mx-40" />
        </section>

        <section className="flex justify-center">
          <div className="flex flex-col gap-5 items-center">
            <h1 className="text-primary font-extrabold text-2xl tracking-wider w-72 xl:w-full">
              Select your <span className="text-secondary">First</span> Book
            </h1>
            <Link href="/explore" className="w-40">
              <Button text="Get Started" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Library;
