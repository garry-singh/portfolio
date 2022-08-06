import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-start max-w-4xl mx-auto mb-16">
      <div className="px-4 md:px-0 py-6 md:py-0 md:mt-24">
        <h1 className="text-2xl font-bold text-black lg:text-5xl dark:text-white">
          Hello! I'm Garry, a developer based in Australia.
        </h1>
        <div className="mt-6 text-black dark:text-white">
          <p className="mb-4">Add content here</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
