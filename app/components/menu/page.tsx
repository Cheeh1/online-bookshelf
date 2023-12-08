import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaX } from "react-icons/fa6";

interface Props {
  links: {
    path: string;
    name: string;
  }[];
  toggle: boolean;
  action: () => void;
}

const Menu: FC<Props> = ({ links, toggle, action }) => {
  const pathname = usePathname();
  return (
    <>
      <div
        className={`z-30 transition-all duration-500 delay-100 ${
          toggle ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <section
          className={`bg-secondary top-0 left-0 bottom-0 absolute py-72 w-full duration-500 delay-100 transition-all ${
            toggle ? "transform translate-y-0" : "transform -translate-y-full"
          }`}
        >
          <div className="absolute top-10 right-10" onClick={action}>
            <FaX className="text-3xl rounded-full bg-primary text-white p-1" />
          </div>
          <div className="flex flex-col text-2xl font-semibold items-center gap-10 text-white">
            {links.map((link, index) => (
              <Link
                key={index}
                className={`hover:text-primary ${
                  pathname === link.path ? "text-primary" : ""
                }`}
                href={link.path}
                onClick={action}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Menu;
