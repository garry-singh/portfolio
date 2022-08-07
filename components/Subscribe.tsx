const Subscribe = () => {
  return (
    <div className="border border-slate-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-slate-900">
      <p className="text-lg md:text-xl font-bold text-black dark:text-white">
        Subscribe to the newsletter
      </p>
      <p className="my-1 text-black dark:text-white">
        Get emails from me about things.
      </p>
      <form className="relative my-4">
        <input
          aria-label="Email for newsletter"
          placeholder="tim@apple.com"
          type="email"
          autoComplete="email"
          required
          className="px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white pr-32"
        />
        <button
          className="flex items-center justify-center absolute right-1 top-1 px-4 font-medium h-8 bg-gray-100 dark:bg-gray-700 text-black dark:text-white rounded w-28"
          type="submit"
        >
          Subscribe
        </button>
      </form>
      <p className="text-sm text-black dark:text-white">
        <a
          href="https://www.getrevue.co/profile/garrysingh"
          target="_blank"
          rel="noopener noreferrer"
        >
          View all issues
        </a>
      </p>
    </div>
  );
};

export default Subscribe;
