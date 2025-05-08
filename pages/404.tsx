import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex container flex-col justify-center items-start max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto py-0 md:py-8">
      <div className="px-4 md:px-0 py-6 md:py-0 md:mt-12 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Oh hey! Didn&apos;t expect to see you here...
        </h1>
        <p className="text-gray-600 dark:text-gray-400 my-8 md:text-lg">
          Are you trying to access some top secret content? Chances are
          you&apos;ve misspelled something or found something that no longer
          exists. If you&apos;re just lost then press this handy button I left
          for you.
        </p>
        <Link
          href="/"
          className="flex items-center justify-center px-4 font-medium h-12 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded w-full md:w-48"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
