import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex container flex-col justify-center items-start max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto py-0 md:py-8">
      <div className="px-4 md:px-0 py-6 md:py-0 md:mt-12 w-full">
        <h1 className="text-2xl font-bold text-black md:text-5xl dark:text-white">
          About Me
        </h1>
        <main className="mt-8 pb-6 text-black dark:text-white">
          <p className="mt-8 mb-4 md:text-lg">
            I&apos;m a self taught developer who lived a past life in data
            analytics (something I still love).
          </p>
          <p className="mb-4 md:text-lg">
            In my day to day role as a front end developer, I primarily work
            with Next.js and TypeScript.
          </p>
          <p className="mb-4 md:text-lg">
            Currently learning Tailwindcss and Figma.
          </p>
          <p className="mt-4 mb-8 md:text-lg">
            Check out the AWS Certified Cloud Practioner credential I earned on
            Feb 6th, 2022.
          </p>
          <Link href="https://www.credly.com/badges/e24c60ef-67f7-4435-a464-72181680d17f">
            <a target="_blank" className="flex justify-center">
              <Image
                src="/images/aws-certified-cloud-practitioner.png"
                alt="AWS Certification Badge"
                quality={100}
                height={200}
                width={200}
              />
            </a>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default About;
