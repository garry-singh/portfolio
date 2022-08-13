import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import BlogPostCard from "../../components/BlogPostCard";

type Props = {
  posts: {
    slug: string;
    frontmatter: {
      [key: string]: any;
    };
  }[];
};

const Blog = ({ posts }: Props) => {
  return (
    <div className="flex container flex-col justify-center items-start max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto py-0 md:py-8">
      <div className="px-4 md:px-0 py-6 md:py-0 md:mt-12 w-full">
        <h1 className="text-2xl font-bold text-black md:text-5xl dark:text-white mb-6">
          Blog
        </h1>
        {posts.map((post) => (
          <BlogPostCard key={post.frontmatter.title} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  // Get files from posts directory
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and front matter from posts
  const posts = files.map((file) => {
    // Create slug
    const slug = file.replace(".md", "");

    // Get front matter
    const markdownWithMeta = fs.readFileSync(path.join("posts", file), "utf-8");

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
};
