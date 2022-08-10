import { useState, ChangeEvent, FormEvent, useRef, LegacyRef } from "react";
import axios from "axios";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState({ message: "", status: "" });
  const { executeRecaptcha } = useGoogleReCaptcha();

  const onNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!executeRecaptcha) {
      return;
    }

    try {
      const token = await executeRecaptcha();

      if (!token) {
        setResponse({ message: "Failed to Send!!!", status: "Failed" });
        resetForm();
        return;
      }

      const result = await axios.post("/api/contact", {
        token,
      });

      if (result.data) {
        setResponse({
          message: result.data.message,
          status: result.data.status,
        });
      }

      if (
        result.data.status === "Success" &&
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID &&
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID
      ) {
        emailjs.send(
          process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
          { name, email, message },
          process.env.NEXT_PUBLIC_EMAIL_USER_ID
        );

        resetForm();
      }
    } catch (error) {
      setResponse({ message: "Failed to Send!!!", status: "Failed" });
      resetForm();
    }
  };

  return (
    <div className="border border-slate-200 rounded p-6 my-4 w-full dark:border-gray-800 bg-blue-50 dark:bg-slate-900">
      <form onSubmit={handleSubmit}>
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
            onChange={onNameChange}
            className="px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white pr-32"
            required
            value={name}
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
            onChange={onEmailChange}
            className="px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white pr-32"
            placeholder="tim@apple.com"
            required
            value={email}
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
            onChange={onMessageChange}
            className="px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-gray-300 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white"
            required
            value={message}
          />
        </div>
        <div className="flex flex-col md:flex-row">
          <button
            type="submit"
            className="flex items-center justify-center right-1 top-1 px-4 font-medium h-12 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded w-full md:w-48"
          >
            Submit
          </button>
          {response && (
            <h1 className="flex items-center justify-center pt-8 md:pt-0 px-0 md:px-8 text-black dark:text-white">
              {response.message}
            </h1>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
