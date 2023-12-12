"use client";
import { FC, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SignUp from "../sign-up/page";
import Menu from "../menu/page";
import Button from "../button/page";

const links = [
  { path: "/", name: "Home" },
  { path: "/explore", name: "Explore" },
  { path: "/library", name: "Library" },
  { path: "/favorite", name: "Favorite" },
];

const Navbar: FC = () => {
  const pathname = usePathname();
  const [modal, setModal] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);

  const handleModal = () => {
    setModal(!modal);
  };

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <header className="flex">
        <nav className="flex justify-between px-5 xl:justify-between items-center py-4 bg-white shadow-md shadow-[#bdbdbd] z-20 -mt-1 fixed w-full">
          <h1 className="text-secondary text-3xl font-extrabold">Bookmark</h1>
          <div className="hidden md:flex xl:flex gap-5 text-primary text-md font-semibold">
            {links.map((link, index) => (
              <Link
                key={index}
                className={pathname === link.path ? "text-secondary" : ""}
                href={link.path}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex xl:flex gap-5">
            <div className="relative">
              <input
                className="w-20 placeholder:text-sm placeholder:font-semibold placeholder:text-secondary border-2 border-secondary text-primary px-2 rounded-3xl py-1"
                type="text"
                name=""
                placeholder="Search"
                id=""
              />
              <Image
                className="absolute top-3 right-2"
                width={12}
                height={12}
                src="/images/search.svg"
                alt="search"
              />
            </div>
            <div onClick={handleModal}>
              <Button text="Sign up" />
            </div>
          </div>
          <div onClick={handleMenu} className="block md:hidden xl:hidden">
            <Image height={20} width={20} src="/images/menu.svg" alt="menu" />
          </div>
        </nav>
        <Menu toggle={menu} action={handleMenu} links={links} />
        <SignUp toggle={modal} action={handleModal} />
      </header>
    </>
  );
};

export default Navbar;
