import Link from "next/link";
import { footerLinks } from "./constants";

const Footer = () => {
  return (
    <footer className="w-full mt-auto mx-auto flex flex-row justify-center md:justify-between items-center font-semibold text-md px-4 md:px-0 py-6 md:py-8 max-w-sm md:max-w-2xl lg:max-w-4xl border-t-2 border-gray-100 dark:border-gray-700">
      <p className="hidden md:block">Built with Next.js, Tailwind and Vercel</p>
      <div className="space-x-10">
        {footerLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
