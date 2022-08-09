const ContactForm = () => {
  return (
    <div className="border border-slate-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-slate-900">
      <form>
        <div className="mb-6">
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your Name
          </label>
          <input
            aria-label="Name"
            type="text"
            id="name"
            placeholder="Tim"
            className="px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white pr-32"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            aria-label="Email"
            type="email"
            id="email"
            className="px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white pr-32"
            placeholder="tim@apple.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="text"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your Message
          </label>
          <textarea
            aria-label="Message"
            id="message"
            placeholder="Awesome portfolio!"
            rows={3}
            className="px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="flex items-center justify-center right-1 top-1 px-4 font-medium h-12 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded w-full md:w-48"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
