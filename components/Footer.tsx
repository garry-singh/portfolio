import Link from "next/link";
import { footerLinks } from "./constants";

const Footer = () => {
  return (
    <footer className="w-full fixed inset-x-0 bottom-0 mx-auto flex flex-col md:flex-row justify-between items-center font-semibold text-md px-4 md:px-0 py-6 md:py-8 max-w-4xl">
      <p className="hidden md:block">Built with Next.js, Tailwind and Vercel</p>
      <div className="flex-row md:flex space-x-10 items-center">
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
