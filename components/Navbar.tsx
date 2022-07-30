import Link from "next/link";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { navLinks } from "./constants";
import ThemeSwitch from "./ThemeSwitch";

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex container w-full mx-auto justify-between items-center font-bold text-2xl px-4 py-0 md:py-4">
      <Link href="/">
        <a>
          <h1 className="h-[3.5rem] flex items-center text-center">GS</h1>
        </a>
      </Link>
      <nav className="hidden md:flex space-x-10 items-center">
        {navLinks.map((link) => {
          return (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          );
        })}
        <ThemeSwitch />
      </nav>
      {!isSidebarOpen ? (
        <div className="flex md:hidden">
          <ThemeSwitch />
          <button
            className=" fill-black dark:fill-white pl-6"
            onClick={handleSidebarClick}
          >
            <AiOutlineMenu size="24" />
          </button>
        </div>
      ) : (
        <>
          <button
            className="md:hidden z-20 fill-black dark:fill-white"
            onClick={handleSidebarClick}
          >
            <AiOutlineClose size="24" />
          </button>
          <Sidebar />
        </>
      )}
    </div>
  );
};
