import { FC } from "react";
import Image from "next/image";

const books = [
  { img: "/images/book-1.png", name: "book-1" },
  { img: "/images/book-2.png", name: "book-2" },
  { img: "/images/book-3.png", name: "book-3" },
  { img: "/images/book-4.png", name: "book-4" },
  { img: "/images/book-5.png", name: "book-5" },
  { img: "/images/book-6.jpg", name: "book-6" },
  { img: "/images/book-7.jpg", name: "book-7" },
  { img: "/images/book-8.jpg", name: "book-8" },
  { img: "/images/book-9.jpg", name: "book-9" },
  { img: "/images/book-10.jpg", name: "book-10" },
];

const Explore: FC = () => {
  return (
    <>
      <main className=" flex flex-col gap-28 py-28">
        <section className="relative flex flex-col justify-center gap-7">
          <h1 className="text-primary z-10 text-xl xl:pl-32 pl-10 md:pl-20 font-bold">
            Romance
          </h1>
          <div className="z-10 flex justify-center">
            <div className="grid grid-cols-2 gap-x-10 md:grid-cols-4 xl:grid-cols-5 xl:gap-x-28 gap-y-10">
              {books.map((book, index) => (
                <Image
                  className="rounded-lg"
                  key={index}
                  width={100}
                  height={100}
                  src={book.img}
                  alt={book.name}
                />
              ))}{" "}
            </div>
          </div>
          <div className="absolute top-0 right-1">
            <Image
              width={250}
              height={250}
              src="/images/explore-1.svg"
              alt="explore illustration"
            />
          </div>
        </section>
        <section className="relative flex flex-col justify-center gap-7">
          <h1 className="text-primary z-10 text-xl xl:pl-32 pl-10 md:pl-20 font-bold">
            Crime
          </h1>
          <div className="z-10 flex justify-center">
            <div className="grid grid-cols-2 gap-x-10 md:grid-cols-4 xl:grid-cols-5 xl:gap-x-28 gap-y-10">
              {books.map((book, index) => (
                <Image
                  className="rounded-lg"
                  key={index}
                  width={100}
                  height={100}
                  src={book.img}
                  alt={book.name}
                />
              ))}{" "}
            </div>
          </div>
          <div className="absolute top-0 left-1">
            <Image
              width={400}
              height={400}
              src="/images/explore-2.svg"
              alt="explore illustration"
            />
          </div>
        </section>
        <section className="relative flex flex-col justify-center gap-7">
          <h1 className="text-primary z-10 text-xl xl:pl-32 pl-10 md:pl-20 font-bold">
            Young Adult
          </h1>
          <div className="z-10 flex justify-center">
            <div className="grid grid-cols-2 gap-x-10 md:grid-cols-4 xl:grid-cols-5 xl:gap-x-28 gap-y-10">
              {books.map((book, index) => (
                <Image
                  className="rounded-lg"
                  key={index}
                  width={100}
                  height={100}
                  src={book.img}
                  alt={book.name}
                />
              ))}{" "}
            </div>
          </div>
          <div className="absolute bottom-0 md:bottom-0 right-1">
            <Image
              width={300}
              height={300}
              src="/images/explore-3.svg"
              alt="explore illustration"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Explore;
