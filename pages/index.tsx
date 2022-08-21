import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Subscribe from "../components/Subscribe";

const Home: NextPage = () => {
  return (
    <div className="flex container flex-col justify-center items-start max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto py-0 md:py-8">
      <div className="px-4 md:px-0 py-6 md:py-0 md:mt-12 w-full">
        <h1 className="text-2xl font-bold text-black md:text-5xl dark:text-white">
          Hello! I&apos;m Garry
        </h1>
        <main className="mt-6 pb-6 text-black dark:text-white">
          <p className="mb-4">
            I&apos;m a software engineer based in Sydney, Australia.
          </p>
          <p className="mb-4">
            Welcome to my slice of the internet where I share the cool things I
            make with code and write about web development.
          </p>
          <p className="mb-4">
            I&apos;ve been working primarily with Next.js and Typescript over
            the past year or so. Currently learning Tailwindcss and Figma.
          </p>
          <p className="mb-8">
            Check out the AWS Certified Cloud Practioner credential I earned on
            Feb 6th, 2022.
          </p>
          <Link href="https://www.credly.com/badges/e24c60ef-67f7-4435-a464-72181680d17f">
            <a target="_blank" className="flex justify-center">
              <Image
                src="/images/aws-certified-cloud-practitioner.png"
                alt="AWS Certification Badge"
                quality={100}
                height={200}
                width={200}
              />
            </a>
          </Link>
        </main>
        <Subscribe />
      </div>
    </div>
  );
};

export default Home;
