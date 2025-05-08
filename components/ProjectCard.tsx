import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

type Project = {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
};

type ProjectCardProps = {
  project: Project;
  className?: string;
};

const ProjectCard = ({ project, className = "" }: ProjectCardProps) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col max-w-md mx-auto ${className}`}
    >
      <div className="w-full aspect-video relative">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={450}
          className="object-cover w-full h-full"
          priority
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-200 mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex space-x-4 mt-auto">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FaGithub className="w-4 h-4 mr-2" />
            GitHub
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <FaExternalLinkAlt className="w-4 h-4 mr-2" />
            Live Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
