import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="flex container flex-col justify-center items-start max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto py-0 md:py-8">
      <div className="px-4 md:px-0 py-6 md:py-0 md:mt-12 w-full">
        <h1 className="text-2xl font-bold text-black md:text-5xl dark:text-white">
          Get in touch!
        </h1>
        <main className="mt-6 pb-6 text-black dark:text-white">
          <p className="mb-4">
            My inbox is always open. Whether you have a question or just want to
            say hi, I&apos;ll try my best to get back to you!
          </p>
        </main>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
