import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps } from "next";

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
    <div>
      {posts.map((post) => (
        <p key={post.frontmatter.title}>{post.frontmatter.title}</p>
      ))}
    </div>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async (context) => {
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
