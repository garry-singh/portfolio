import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { navLinks, navMobileLinks } from "./constants";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="flex container mx-auto justify-between items-center font-bold text-2xl px-4 md:px-0 py-0 md:py-4 max-w-sm md:max-w-2xl lg:max-w-4xl">
      <Link href="/" className="h-[3.5rem] flex items-center text-center">
        <h1>GS</h1>
      </Link>
      <div className="hidden md:flex space-x-10 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <ThemeSwitch />
      </div>
      {!isSidebarOpen ? (
        <div className="flex md:hidden">
          <ThemeSwitch />
          <button
            aria-label="Mobile Navigation Menu"
            className=" fill-black dark:fill-white ml-6"
            onClick={handleSidebarClick}
          >
            <AiOutlineMenu size="24" />
          </button>
        </div>
      ) : (
        <>
          <button
            aria-label="Mobile Navigation Menu"
            className="md:hidden z-30 fill-black dark:fill-white"
            onClick={handleSidebarClick}
          >
            <AiOutlineClose size="24" />
          </button>
          <div className="top-0 right-0 w-full bg-white dark:bg-black p-10 pl-24 sm:pl-36 text-white fixed h-full z-20">
            <ul className="flex flex-col mt-8 space-y-8 text-4xl text-black dark:text-white">
              {navMobileLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={handleSidebarClick}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
