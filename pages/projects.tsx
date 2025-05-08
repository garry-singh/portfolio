import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Make 10 / Make X Game",
    description:
      "A simple game where you make 10 by using the given numbers only once. This is my mathematical take on the classic Wordle game built with Next.js and TypeScript.",
    image: "/images/make-ten.jpeg",
    githubUrl: "https://github.com/garry-singh/maketen",
    liveUrl: "https://maketen.vercel.app",
  },
  {
    title: "Colour Palette Maker",
    description:
      "Create your own colour palette by selecting up to 20 colours you like from a colour picker. My first major project in React, from Colt Steele's Web Developer Bootcamp but rewritten entirely using React Hooks.",
    image: "/images/colour-palette-maker.jpeg",
    githubUrl: "https://github.com/garry-singh/colour-palette-maker",
    liveUrl: "https://garry-singh.github.io/colour-palette-maker/#/",
  },
];

const Projects = () => {
  return (
    <div className="flex container flex-col justify-center items-start max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto py-0 md:py-8">
      <div className="px-4 md:px-0 py-6 md:py-0 md:mt-12 w-full">
        <h1 className="text-2xl font-bold text-black md:text-5xl dark:text-white mb-8">
          My Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
