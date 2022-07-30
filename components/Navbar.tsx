import Link from "next/link";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { navLinks } from "./constants";

export const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex container w-full mx-auto justify-between items-center font-bold text-2xl px-4 py-0 md:py-4">
      <Link href="/">
        <h1 className="h-[3.5rem] flex items-center text-center">GS</h1>
      </Link>
      <nav className="hidden md:flex space-x-10 items-center">
        {navLinks.map((link) => {
          return (
            <Link key={link.name} href={link.href}>
              {link.name}
            </Link>
          );
        })}
      </nav>
      {!isSidebarOpen ? (
        <AiOutlineMenu
          onClick={handleSidebarClick}
          className="md:hidden fill-black dark:fill-white"
          size="24"
        />
      ) : (
        <>
          <AiOutlineClose
            onClick={handleSidebarClick}
            className="md:hidden z-10 fill-black dark:fill-white"
            size="24"
          />
          <Sidebar />
        </>
      )}
    </div>
  );
};
