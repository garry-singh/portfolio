import type { NextPage } from "next";
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
            Welcome to my slice of the internet where I make fun, interactive
            things with code.
          </p>
        </main>
        <Subscribe />
      </div>
    </div>
  );
};

export default Home;
