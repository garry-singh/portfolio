import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import Post from "../../components/Post";

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
    <div className="flex flex-col justify-center items-start max-w-2xl lg:max-w-4xl mx-auto mb-16">
      {posts.map((post) => (
        <Post post={post} />
      ))}
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
