import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start max-w-4xl mx-auto py-8">
      <div className="px-4 md:px-0 py-6 md:py-0 md:mt-24">
        <h1 className="text-2xl font-bold text-black lg:text-5xl dark:text-white">
          Hello! I'm Garry
        </h1>
        <main className="mt-6 text-black dark:text-white">
          <p className="mb-4">
            I'm a software engineer based in Sydney, Australia.
          </p>
          <p className="mb-4">
            Welcome to my slice of the internet where I make fun, interactive
            things with code and also write about what I'm learning.
          </p>
        </main>
      </div>
    </div>
  );
};

export default Home;
