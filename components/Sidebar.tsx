import { navLinks } from "./constants";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <div className="top-0 right-0 w-full bg-white dark:bg-black p-10 pl-20 text-white fixed h-full ">
      <ul className="flex flex-col mt-8 space-y-8 text-4xl text-black dark:text-white">
        {navLinks.map((link) => {
          return (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
