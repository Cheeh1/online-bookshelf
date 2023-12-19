"use client";
import { FC, useState, useContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SignUp from "../sign-up/page";
import Menu from "../menu/page";
import { getAuth, signOut } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "@/app/context/authContext";

const Navbar: FC = () => {
  const { user } = useContext(AuthContext);

  const links = [
    { path: user ? "/user-home" : "/", name: "Home" },
    { path: "/explore", name: "Explore" },
    { path: "/library", name: "Library" },
  ];

  const pathname = usePathname();
  const [modal, setModal] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);

  const handleModal = () => {
    setModal(!modal);
  };

  const handleMenu = () => {
    setMenu(!menu);
  };

  const router = useRouter();
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Logged Out Successfully");
      toast.success(`GoodBye ${user?.displayName}, come back soon`, {
        className: "text-sm font-bold",
        duration: 3000,
      });

      setTimeout(() => {
        router.refresh();
      }, 3000);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("Error logging out:", error.message);
      } else {
        console.log("unknown error:", error);
      }
    }
  };

  return (
    <>
      <Toaster />
      <header className="flex">
        <nav className="flex justify-between px-5 xl:justify-between items-center py-4 bg-white shadow-md shadow-[#bdbdbd] z-20 -mt-1 fixed w-full">
          <div className="flex gap-3 items-center">
            <div onClick={handleMenu} className="block md:hidden xl:hidden">
              <Image height={20} width={20} src="/images/menu.svg" alt="menu" />
            </div>
            <h1 className="text-secondary text-3xl font-extrabold">Bookmark</h1>
          </div>
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
          <div className="flex gap-5">
            <div className="hidden md:flex xl:flex relative">
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
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-secondary rounded-3xl text-white font-bold py-2 px-4 text-sm tracking-widest"
              >
                Log out
              </button>
            ) : (
              <button
                onClick={handleModal}
                className="bg-secondary rounded-3xl text-white font-bold py-2 px-4 text-sm tracking-widest"
              >
                Sign up
              </button>
            )}
          </div>
        </nav>
        <Menu
          toggle={menu}
          action={handleMenu}
          links={links}
          handleLogout={handleLogout}
          handleModal={handleModal}
        />
        <SignUp toggle={modal} action={handleModal} />
      </header>
    </>
  );
};

export default Navbar;
