import type { NextPage } from "next";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";

const currentProject = {
  title: "Brevia",
  description:
    "Turn your PDFs into short, engaging summaries with the power of AI.",
  image: "/images/brevia.jpeg",
  githubUrl: "https://github.com/garry-singh/brevia",
  liveUrl: "https://brevia.vercel.app/",
};

const Home: NextPage = () => {
  return (
    <div className="flex container flex-col justify-center items-start max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto py-0">
      <div className="px-4 md:px-0 py-4 md:py-0 md:mt-12 w-full">
        <h1 className="text-2xl font-bold text-black md:text-5xl dark:text-white">
          Hello! I&apos;m Garry
        </h1>
        <main className="mt-8 pb-4 text-black dark:text-white">
          <p className="mb-4 md:text-lg">
            I&apos;m a software engineer based in Sydney, Australia.
          </p>
          <p className="mb-4 md:text-lg">
            Welcome to my slice of the internet where I share the cool things I
            make with code.
          </p>
          <div className="mt-4">
            <p className="mb-4 md:text-lg">
              What I&apos;m currently working on (not complete yet, so may be a
              little buggy):
            </p>
            <ProjectCard project={currentProject} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
