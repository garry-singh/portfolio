import Link from "next/link";
import { footerLinks } from "./constants";

const Footer = () => {
  return (
    <footer className="w-full mt-auto mx-auto flex flex-row justify-center md:justify-between items-center font-semibold text-md px-4 md:px-0 py-6 md:py-8 max-w-4xl bg-white dark:bg-black border-t-2 border-gray-500">
      <p className="hidden md:block">Built with Next.js, Tailwind and Vercel</p>
      <div className="space-x-10">
        {footerLinks.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
